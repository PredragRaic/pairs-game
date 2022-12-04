

const arr = ['url(/img/baby.png)', 'url(/img/ladybug.png)', 'url(/img/sun.png)', 'url(/img/train.png)', 'url(/img/tree.png)',
            'url(/img/baby.png)', 'url(/img/ladybug.png)', 'url(/img/sun.png)', 'url(/img/train.png)', 'url(/img/tree.png)'];

//  shuffle arr Array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

// Used like so

shuffle(arr);
console.log(shuffle(arr));



// position elements in arr

function findAllIndex(arr, element) {
  indices = [];
  var currentIndex = arr.indexOf(element);
  while (currentIndex != -1) {
    indices.push(currentIndex);
    currentIndex = arr.indexOf(element, currentIndex + 1);
  }
  return indices;
}
var baby = findAllIndex(arr, 'url(/img/baby.png)').map(num => num + 1).map(String);
console.log(baby); 
var ladybug = findAllIndex(arr, 'url(/img/ladybug.png)').map(num => num + 1).map(String);
console.log(ladybug); 
var sun = findAllIndex(arr, 'url(/img/sun.png)').map(num => num + 1).map(String);
console.log(sun); 
var train = findAllIndex(arr, 'url(/img/train.png)').map(num => num + 1).map(String);
console.log(train); 
var tree = findAllIndex(arr, 'url(/img/tree.png)').map(num => num + 1).map(String);
console.log(tree); 

// set background position

document.getElementById('1').style.backgroundImage = arr[0];
document.getElementById('2').style.backgroundImage = arr[1];
document.getElementById('3').style.backgroundImage = arr[2];
document.getElementById('4').style.backgroundImage = arr[3];
document.getElementById('5').style.backgroundImage = arr[4];
document.getElementById('6').style.backgroundImage = arr[5];
document.getElementById('7').style.backgroundImage = arr[6];
document.getElementById('8').style.backgroundImage = arr[7];
document.getElementById('9').style.backgroundImage = arr[8];
document.getElementById('10').style.backgroundImage = arr[9];


// cover-card selector
let cover = document.querySelectorAll('.cover-card');
const cardHolderDiv = document.getElementById('cards-holder');

let clickCounter = 0;
let firstClickValue = '';
let twoClickArr = [];

let timerClick = true;
let finishCounter = 0;

// click listener

document.querySelectorAll('.card').forEach(item => {
  item.addEventListener('click', function x (event) {
    //handle click
    if (firstClickValue !== event.target.id && clickCounter < 1 || firstClickValue !== event.target.id && clickCounter < 2){
      firstClickValue = event.target.id;
      clickCounter++;
      
      twoClickArr.push(event.target.id);
      
        for (let i = 0; i < cover.length; i++) {
          cover[item.id - 1].style.display = "none";
        }
       
      }
      
      if( clickCounter === 2){
        
        setTimeout(fun2Sec, 1000);
        function fun2Sec(){
          
          for (let i = 0; i < cover.length; i++) {
            cover[i].style.display = "block";
          }
          
        clickCounter = 0;  
        twoClickArr = [];
        firstClickValue ='';
         
        }
      }
      twoClickArr.sort(function(a, b){return a - b});

      let box = document.getElementById(twoClickArr[0]);
      let box1 = document.getElementById(twoClickArr[1]);
    
      if(JSON.stringify(twoClickArr) === JSON.stringify(baby)){
        box.replaceWith(box.cloneNode(true));
        box1.replaceWith(box1.cloneNode(true));
        finishCounter++;
      }
      if(JSON.stringify(twoClickArr) === JSON.stringify(ladybug)){
        box.replaceWith(box.cloneNode(true));
        box1.replaceWith(box1.cloneNode(true));
        finishCounter++;
      }
      if(JSON.stringify(twoClickArr) === JSON.stringify(train)){
        box.replaceWith(box.cloneNode(true));
        box1.replaceWith(box1.cloneNode(true));
        finishCounter++;
      }
      if(JSON.stringify(twoClickArr) === JSON.stringify(tree)){
        box.replaceWith(box.cloneNode(true));
        box1.replaceWith(box1.cloneNode(true));
        finishCounter++;
      }
      if(JSON.stringify(twoClickArr) === JSON.stringify(sun)){
        box.replaceWith(box.cloneNode(true));
        box1.replaceWith(box1.cloneNode(true));
        finishCounter++;
      }

      // console.log(item.id);
      // console.log(clickCounter);
      // console.log(firstClickValue);
      // console.log(twoClickArr);


      // timer

    var hour=0,sec=0,min=0;
    var dispHour=0,dispMin=0,dispSec=0;
    var timeoutId=null;
    
    function timer(){
    sec++;
    if(sec/60==1){
      min++;
      sec=0;
    if(min/60==1){
      hour++;
      min=0;
    }}
    if(sec<10){ dispSec="0"+sec.toString(); }
    else{ dispSec=sec.toString(); }
    if(min<10){ dispMin="0"+min.toString(); }
    else{ dispMin=min.toString(); }
    if(hour<10){ dispHour="0"+hour.toString(); }
    else{ dispHour=hour.toString(); }
    document.getElementById("timer").innerHTML=dispHour+" : "+dispMin+" : "+dispSec;
    }
    

    if(clickCounter === 1 && timerClick === true){
       timeoutId = setInterval(timer,1000);
        timerClick = false;
       
    }
  console.log(finishCounter);
  
  if(finishCounter > 2){
    clearInterval(timeoutId);
  }
  

  

  
  
    

  
  })
})

