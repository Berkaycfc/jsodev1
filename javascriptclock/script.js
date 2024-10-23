 document.querySelector("#myName").textContent = prompt("isim")
let clock = document.querySelector("#myClock")


function updateClock(){
let date = new Date();


const hours = date.getHours();       
const minutes = date.getMinutes();       
const seconds = date.getSeconds();          





const daysOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

const dayOfWeek = daysOfWeek[date.getDay()];


clock.textContent = `${hours}: ${minutes}: ${seconds}: ${dayOfWeek} `

}


setInterval(updateClock, 1000)

updateClock()