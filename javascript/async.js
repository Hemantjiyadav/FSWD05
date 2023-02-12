function count() {
    document.write("page not found");
}

setTimeout(count, 3000); //callbacks

setInterval(count, 5000);


let new_promise = new Promise(function (resolve, reject) {
    //code that takes time to produce the result
    for (let i = 0; i < 5; i++)
        console.log(i);
    if (i == 5)
        resolve(docoment.write("success"))
    else
        reject(document.write("rejected"))

});  //promise defined

new_promise.then(() => { console.log("success") })
    .catch(() => { console.log("Error") })
    .finally(() => { console.log("Inside finally block") })

let api_key = '641d8a6132c2f05d70e36e04bdf9f063';
fetch('https://api.openweathermap.org/data/2.5/weather?q=Mumbai%27' +
    '&appid=' + '641d8a6132c2f05d70e36e04bdf9f063')
    .then(res => res.json()) //promise
    .then(q => console.log(q))