// Welcome Message

window.onload = () => {

console.log("Website Loaded Successfully");

};

// Smooth Scroll

document.querySelectorAll('a').forEach(anchor => {

anchor.addEventListener('click', function(e){

if(this.hash !== ""){

e.preventDefault();

const hash = this.hash;

document.querySelector(hash)?.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Greeting

const hour = new Date().getHours();

let greet = "";

if(hour < 12){

greet = "Good Morning";

}

else if(hour < 17){

greet = "Good Afternoon";

}

else{

greet = "Good Evening";

}

console.log(greet + " Visitor");

// Floating Animation

const card = document.querySelector(".card");

setInterval(()=>{

card.style.transform="translateY(-4px)";

setTimeout(()=>{

card.style.transform="translateY(0px)";

},600);

},3000);