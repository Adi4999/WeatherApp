
let ncity="";
let weather={
    "apiKey":"53886f0dcd9a6917660f929dd074220d",
    fetchWeather:function(city){
        //console.log(city);
        ncity=city;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`).then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
        
    },
    displayWeather:function(data){
        
     const{name}=data;
     const{icon,description}=data.weather[0];
     const{ temp,humidity}=data.main;
     const{speed}=data.wind;
     console.log(name,icon,description,temp,humidity,speed);
     document.querySelector('.card').style.background="#000000d0";
     document.querySelector('.city').textContent=`Weather in ${name}`;
     document.querySelector('.icon').src=`https://openweathermap.org/img/wn/${icon}.png`
     document.querySelector('.description').textContent=description;
     document.querySelector('.temp').textContent=`${temp}° C`;
     document.querySelector('.wind').textContent=`Wind speed : ${speed} km/h`;
     document.querySelector('.humidity').textContent=`Humidity : ${humidity}%`;
     document.querySelector('.weather').classList.remove("loading");
      
      



     document.querySelector('body').style.backgroundImage=`url('https://source.unsplash.com/1600x900/?${ncity}')`

    },
    search:function(){
        this.fetchWeather(document.querySelector('.search-bar').value)
    }

}

weather.fetchWeather("Noida");

const iferror=function() {
    document.querySelector('body').style.backgroundImage=`url('https://images.unsplash.com/photo-1610337673044-720471f83677?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80')`
    document.querySelector('.city').textContent=`Do not leave the field empty or enter correct city name!  😁`;
     document.querySelector('.icon').src=` `
     document.querySelector('.description').textContent="";
     document.querySelector('.temp').textContent="";
     document.querySelector('.wind').textContent=``;
     document.querySelector('.humidity').textContent=``;
     document.querySelector('.card').style.background="#bf0000d0";
}

document.querySelector('.search-button').addEventListener('click',function(){
if(document.querySelector('.search-bar').value  && ncity!=""){
    weather.search();
    document.querySelector('.search-bar').blur();
}
else{
    
   iferror()

}
})

document.querySelector('.search-bar').addEventListener('keyup',function(e){
   if(e.key=="Enter"){
    if(document.querySelector('.search-bar').value && ncity!=""){
        weather.search();
        document.querySelector('.search-bar').blur();
    }
    else{
        
       iferror()
    
    }
   }
})