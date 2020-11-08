const time1 = document.getElementById("time");
const greeting1= document.getElementById("greeting");
const name1= document.getElementById("name");
const day1=document.getElementById("day");

function showtime(){
let today= new Date();
let hour =today.getHours();
let min=today.getMinutes();
let sec=today.getSeconds();
let date=today.toDateString();

const period = hour >=12? 'PM':'AM';

hour=hour%12 || 12;

time1.innerHTML=`${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${period}`;

day1.innerHTML=`${date}`;
setTimeout(showtime,1000);
}
function addZero(n){
    return(parseInt(n,10)<10?'0':" ")+n;
}

function setGreeting(){
    let today=new Date(2020,12,10,20,15,20);
    let hour=today.getHours();
    if(hour<12){
        document.body.style.backgroundImage='url("morning.jpg")';
        greeting1.innerHTML='Good Morning';
    }
    else if(hour<18){
        document.body.style.backgroundImage='url(afternoon.jpg)';
        greeting1.innerHTML='Good Afternoon';
    }
    else{
        document.body.style.backgroundImage='url(night.jpg)';
        greeting1.innerHTML='Good Evening';
    }
}

showtime();