const API_KEY =`3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form");
// we crate selector of from
const search=document.querySelector("#search")
//we crate selector of weather
const weather= document.querySelector("#weather")
//we crate selector search.
/* This is my api key,*/
/* I need to create variable that i need like const form, I have not create a from*/
const getweather=async(city)=>{
    weather.innerHTML = `<h2> Loading... <h2>`
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response=await fetch(url);
    //console.log(response);
    const data =await response.json();
    return showeather(data);

}
const showeather = (data) => {
         // This the finction of show weather on frontend
   if(data.cod=="404"){
    weather.innerHTML=` <h2> city not found </h2>`
    return;
   }
    weather.innerHTML = `
     
             <div>   
             <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                </div>
               <div>
              <h2> ${ data.main.temp } ℃</h2>
              <h4> ${data.weather[0].main} </h4>
    
              </div>
    `

}
form.addEventListener(
  /* we will runa function what is this function do is it will take event from the user and put it her like
        event.preventDefault(); */
    "submit",
    function(event){
      // console.log(search.value);
      getweather(search.value);
        event.preventDefault(); // preventDefault() stops its reloade
    }

    
)
