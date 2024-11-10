// (function(){
//     let counter=0;
//     const decrement=()=>
//     {

//         counter--;
//         updateCounter();
//     }

//     const increment=()=>
//     {

//         counter++;
//         updateCounter();
//     }

//     const updateCounter=()=>{
//         document.getElementById('counter').innerHTML=counter

//     }


//     const refresh=()=>{
// counter=0;
// updateCounter()
//     }
//     document.getElementById('increment').addEventListener('click',increment);
// document.getElementById('decrement').addEventListener('click',decrement);
// document.getElementById('refresh').addEventListener('click',refresh);

// })()







// // // invoke function 
// // (function(){})()

// // // arrow function variable me store karwate hein 
// // let Sayhello=()=>{

// // }


// // (function(){


// // })()


// console.log(document.querySelector('h1').querySelector('span').firstChild.nodeValue);
// const a= document.childNodes[1]
// console.log(a);
// console.log(a. childNodes .lenght);


// true or false me bataye ga 
console.log(document.getElementById("decrement").hasAttribute('class'));

// check karay ge 
console.log(document.getElementById("decrement").hasAttribute('width'));
// value check karni ho topu get use karay gay 
console.log(document.getElementById("decrement").getAttribute('class'));

// console.log(document.getElementById("decrement").setAttribute('class'));

// attibute set karay ge 
let img=document.getElementById('img');
let target = img.setAttribute('width','200px');

console.log(img);


const container=document.getElementById('container');
const elm = document.createElement('h2');
elm.innerHTML="hello world";

container.appendChild(elm);

// const container = document.getElementById('conatiner');
// const para = document


// console.log(window.location.hostname);
// console.log(window.location.pathname);

// console.log( window.location.href);
// console.log(window.location.hash);

// console.log(window.location.href = "http://www.me.com/1.html");
// console.log(window.location.href = "http://www.me.com/1.html#section9");

// var currentSite = window.location.hostname;
//  var destination = "http://" + currentSite + "/wow.html";
// window.location.href = destination;


// function greetWorld(){
//     try {
//         var greeting="Hello World!";
//         alert(greeting)
//     } catch (err) {
//         alert(err)
//     }
// }

// custom error ke liye throw ka use karte hein 
// function greetWorld() {
//     try {
//       var greeting = "Hello world!";
//       alert(greeting);
//     } catch (err) {
//       alert(err);
//     }
//   }


function checkPassword() {
    try {
      var pass = document.getElementById("f1").value;
      if (pass.length < 8) {
        throw "Please enter at least 8 characters.";
      }
      if (pass.indexOf(" ") !== -1) {
        throw "No spaces in the password, please.";
      }
      var numberSomewhere = false;
      for (var i = 0; i < pass.length; i++) {
        if (isNaN(pass(i, i + 1)) === false) {
          numberSomewhere = true;
          break;
        }
      }
      if (numberSomewhere === false) {
        throw "Include at least 1 number.";
      }
    } catch (err) {
      alert(err);
    }
  }
  
  
 