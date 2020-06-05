'use strict;'
var names = ["bag", "banana", "bathroom", "boots", "breakfast", "bubblegum", "chair", "cthulhu", "dog-duck", "dragon", "pen", "pet-sweep", "scissors", "shark", "sweep", "tauntaun", "unicorn", "usb", "water-can", "wine-glass"
];

var formats = ["jpg", "jpg", "jpg", "jpg", "jpg", "jpg", "jpg", "jpg", "jpg", "jpg", "jpg", "jpg", "jpg", "jpg", "png", "jpg", "jpg", "gif", "jpg", "jpg",];
var clickss = [];
var views = [];
var array = [];


var leftImage = document.getElementById('left');
var centerImage = document.getElementById('center');
var rightImage = document.getElementById('right');
var divForImages = document.querySelector('#myDiv');
var totalRounds = 0;
var aa = [];
var i = 0;
// aa.length=3;
// console.log(aa.length);

function Bus(name, formats) {
    this.busName = name
    this.imagePath = `assets/${name}.${formats}`;
    this.clicks = 0;
    this.views = 0;
    Bus.all.push(this);
}
Bus.all = []
for (var i = 0; i < names.length; i++) {
    new Bus(names[i], formats[i]);
}
console.log(Bus.all);
renderImages();

// Render images
function renderImages() {
    //    var a=[];

    do {
        var a = randomNumber(0, Bus.all.length - 1);
        console.log(aa, a);
        console.log(aa[0] == a[0] || aa[1] == a[1] || aa[2] == a[2] || aa[0] == a[1] || aa[0] == a[2] || aa[1] == a[0] || aa[1] == a[2] || aa[2] == a[1] || aa[2] == a[0]);
    } while (aa[0] == a[0] || aa[1] == a[1] || aa[2] == a[2] || aa[0] == a[1] || aa[0] == a[2] || aa[1] == a[0] || aa[1] == a[2] || aa[2] == a[1] || aa[2] == a[0]);

    // console.log(aa[2]==a[0]);
    aa = a;
    // console.log(aa);
    first = Bus.all[aa[0]];
    second = Bus.all[aa[1]];
    third = Bus.all[aa[2]];
    first.views++;
    // myChart.data.datasets[0].data.push(first.views++);

    second.views++;
    third.views++;
    // clicks.push(first.views++);
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
    if (totalRounds <25) {
        localStore(); 
        if (event.target.id !== 'myDiv') {

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
    } else if (totalRounds == 25) {
        for (var i = 0; i < names.length; i++) {
            clickss[i] = Bus.all[i].clicks;
            views[i] = Bus.all[i].views;
            // array=clickss.concat(views);
            array.push(clickss[i], views[i]);
            console.log(array);
        }
        renderResults();
        charts();
        // removeCharts();
        // divForImages.removeEventListener('click', handleClick);
        totalRounds++;
    }

}
function renderResults() {
    var results = document.querySelector('#result');
    var pragh = document.createElement('h2');
    pragh.textContent = 'Result';
    results.appendChild(pragh);
    var divUl = document.createElement('ul');
    results.appendChild(divUl);
    for (var i = 0; i < names.length; i++) {
        var ulLi = document.createElement('li');
        ulLi.textContent = `${Bus.all[i].busName} had ${Bus.all[i].clicks} Votes and was Shown ${Bus.all[i].views} times`;
        divUl.appendChild(ulLi);
        // Banana Slicer had 3 votes and was shown 5 times
    }
}

function randomNumber(min, max) {

    var a = [];
    b = (Math.floor(Math.random() * (max - min + 1)) + min);

    a.push(b);
    b = (Math.floor(Math.random() * (max - min + 1)) + min);
    while (b == a[0]) {
        b = (Math.floor(Math.random() * (max - min + 1)) + min);
    }
    a.push(b);
    b = (Math.floor(Math.random() * (max - min + 1)) + min);
    while (b == a[0] || b == a[1]) {
        b = (Math.floor(Math.random() * (max - min + 1)) + min);
    }
    a.push(b);

    // console.log(a);
    return a;
}
// var names = ["bag", "banana", "bathroom", "boots", "breakfast", "bubblegum", "chair", "cthulhu", "dog-duck", "dragon", "pen", "pet-sweep", "scissors", "shark", "sweep", "tauntaun", "unicorn", "usb", "water-can", "wine-glass"
// ];
function charts() {
    //     totalRounds++;
    // //   myChart.rend(); 
    // myChart.data.datasets[0].data.push(Bus.all); 
    // myChart.data.datasets[0].data=5;
    // "bag", "bag", "banana", "banana", "bathroom", "bathroom", "boots", "boots", "breakfast", "breakfast", "bubblegum", "bubblegum", "chair", "chair", "cthulhu", "cthulhu", "dog-duck", "dog-duck", "dragon", "dragon", "pen", "pen", "pet-sweep", "pet-sweep", "scissors", "scissors", "shark", "shark", "sweep", "sweep", "tauntaun", "tauntaun", "unicorn", "unicorn", "usb", "usb", "water-can", "water-can", "wine-glass", "wine-glass"
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: names,
            datasets: [{
                label: '# of Clicks ',

                data: clickss,
                data: array,
                backgroundColor: [
                    ' #22104e', '#22104e',
                    '#38275f','#4e3f71',
                    '#645783','#7a6f94',
                    '#9087a6','#a69fb8',
                    '#bcb7c9','#d2cfdb',
                    '#38275f','#4e3f71',
                    '#645783','#7a6f94',
                    '#2b1463','#341978',
                    '#3e1d8d','#190c39',
                    ' #22104e', '#22104e',

                   
                   
                 
                ],
                borderColor: [
                   ' rgba(188, 135, 211, 0.5)',' rgba(188, 135, 211, 0.5)',
                   ' rgba(217, 85, 255, 0.8)' ,'rgba(217, 85, 255, 0.8)',
                   ' rgba(155, 55, 126, 0.4) ','rgba(155, 55, 126, 0.4)',
                   ' rgba(20, 232, 80, 0.1) ','rgba(20, 232, 80, 0.1)',
                   'rgba(226, 13, 143, 0.3) ','rgba(226, 13, 143, 0.3)',
                   'rgba(127, 157, 243, 0.3)', 'rgba(127, 157, 243, 0.3)',
                   'rgba(201, 68, 83, 0.4) ','rgba(201, 68, 83, 0.4)',
                   'rgba(9, 89, 67, 0.2) ','rgba(9, 89, 67, 0.2)',
                  
                ],
                borderWidth: 1
            },
            {
                label: '# of views ',

                data: clickss,
                data: views,
                backgroundColor: [
                  
                    ' rgba(45, 206, 62, 0.7)', 'rgba(45, 206, 62, 0.7)',
                    ' rgba(126, 147, 75, 0.1)', 'rgba(126, 147, 75, 0.1)', 
                     ' rgba(5, 148, 25, 0.3)', 'rgba(5, 148, 25, 0.3)',
                    ' rgba(180, 202, 215, 0.8)', 'rgba(180, 202, 215, 0.8)',
                    'rgba(162, 224, 27, 0.8) ', 'rgba(162, 224, 27, 0.8)', 
                   
                 
                ],
                borderColor: [
                  
                   'rgba(127, 157, 243, 0.3)', 'rgba(127, 157, 243, 0.3)',
                   'rgba(201, 68, 83, 0.4) ','rgba(201, 68, 83, 0.4)',
                   'rgba(9, 89, 67, 0.2) ','rgba(9, 89, 67, 0.2)', 
                   ' rgba(188, 135, 211, 0.5)',' rgba(188, 135, 211, 0.5)',
                   ' rgba(217, 85, 255, 0.8)' ,'rgba(217, 85, 255, 0.8)',
                   ' rgba(155, 55, 126, 0.4) ','rgba(155, 55, 126, 0.4)',
                   ' rgba(20, 232, 80, 0.1) ','rgba(20, 232, 80, 0.1)',
                   'rgba(226, 13, 143, 0.3) ','rgba(226, 13, 143, 0.3)',
                  
                ],
                borderWidth: 1
            },
        ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        },
        rend: function () {
            myChart.data.datasets[0].data.push(100);

            this.rend();
            console.log(myChart.data.datasets[0].data);
        }
    });
    


    // myChart.data.datasets[0].data.push(Bus.all);
    // function removeCharts() {
    //     if (totalRounds == 6) {
    //         var element = document.getElementById("myChart");
    //         element.parentNode.removeChild(element);
    //         var someOne = document.getElementsByTagName('main');
    //         var canv = document.createElement('canvas');
    //         // someOne.appendChild(canv);
    //         console.log(someOne);
    //         // charts();
    //     }
}
function localStore(){
    var localSt=JSON.stringify(Bus.all);
    localStorage.setItem('firstStore',localSt);
}
function calldata(){
    var myData=localStorage.getItem('firstStore');
    if(myData){
    Bus.all=JSON.parse(myData);
}}
calldata();