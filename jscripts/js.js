'use strict;'
var names = ["bag", "banana", "bathroom", "boots", "breakfast", "bubblegum", "chair", "cthulhu", "dog-duck", "dragon", "pen", "pet-sweep", "scissors", "shark", "sweep", "tauntaun", "unicorn", "usb", "water-can", "wine-glass"
];

var formats = ["jpg", "jpg", "jpg", "jpg", "jpg", "jpg", "jpg", "jpg", "jpg", "jpg", "jpg", "jpg", "jpg", "jpg", "png", "jpg", "jpg", "gif", "jpg", "jpg",];

var leftImage = document.getElementById('left');
var centerImage = document.getElementById('center');
var rightImage = document.getElementById('right');
var divForImages = document.querySelector('#myDiv');
var totalRounds = 0;

function Bus(name, formats) {
    this.busName = name
    this.imagePath = `assets/${name}.${formats}`;
    this.clicks = 0;
    this.views=0;
    Bus.all.push(this);
}
Bus.all = []
for (var i = 0; i < names.length; i++) {
    new Bus(names[i], formats[i]);
}
renderImages();

// Render images
function renderImages() {
    //    var a=[];
  var a= randomNumber(0,Bus.all.length-1);
    
    first = Bus.all[a[0]];
    second = Bus.all[a[1]];
    third = Bus.all[a[2]];
first.views++;
second.views++;
third.views++;
    // Left side Image
    leftImage.src = first.imagePath;
    leftImage.alt = first.busName;
    leftImage.title = first.busName;

    // Image in the center
    centerImage.src = second.imagePath;
    centerImage.alt = second.busName;
    centerImage.title = second.busName;

    // Right side image
    rightImage.src = third.imagePath;
    rightImage.alt = third.busName;
    rightImage.title = third.busName;

}
divForImages.addEventListener('click', handleClick);
function handleClick(event) {
    // console.log(event.target.id);
    // console.log(event.target);
    if (totalRounds < 25) {
        if(event.target.id !== 'myDiv') {
            
            totalRounds++;
        switch (event.target.id) {
            case 'left':
                first.clicks++;
                break;
            case 'center':
                second.clicks++
                break;
            case 'right':
                third.clicks++;
                break;
        }
        renderImages();
    }
}else if(totalRounds==25){
    renderResults();
    totalRounds++;
}

}
function renderResults(){
    var results=document.querySelector('#result');
    var pragh=document.createElement('h2');
    pragh.textContent='Result';
    results.appendChild(pragh);
    var divUl=document.createElement('ul');
    results.appendChild(divUl);
    for(var i=0;i<names.length;i++){
        var ulLi=document.createElement('li');
        ulLi.textContent=`${Bus.all[i].busName} had ${Bus.all[i].clicks} Votes and was Shown ${Bus.all[i].views} times`;
        divUl.appendChild(ulLi);
        // Banana Slicer had 3 votes and was shown 5 times
    }
}

function randomNumber(min, max) {
    var a=[];
   b= ( Math.floor(Math.random() * (max - min + 1)) + min);

    a.push(b);
    b= ( Math.floor(Math.random() * (max - min + 1)) + min);
    while(b==a[0]){
        b= ( Math.floor(Math.random() * (max - min + 1)) + min);
    }
    a.push(b);
    b= ( Math.floor(Math.random() * (max - min + 1)) + min);
    while(b==a[0]||b==a[1]){
        b= ( Math.floor(Math.random() * (max - min + 1)) + min);
    }
    a.push(b);

    console.log(a);
return a;}