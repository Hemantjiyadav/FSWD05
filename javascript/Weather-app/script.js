let input_city = document.getElementById('cityinput');
let input_btn = document.getElementById('btn');
let output_city = document.getElementById('city');
let output_temp = document.getElementById('temperature');
let output_desc = document.getElementById('describe');
let od_key = "641d8a6132c2f05d70e36e04bdf9f063";
 
input_btn.addEventListener('click',() => {
    //display the temperature of a city
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input_city.value+'&appid='+od_key)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        output_city.innerHTML= 'city: '+data.name;
        output_temp.innerHTML= 'Temperature: '+data.main.temp;
        output_desc.innerHTML= 'description '+data.weather[0].description;
    })
    .catch(error => console.log('there is an error '+error))
})