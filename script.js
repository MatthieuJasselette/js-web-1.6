
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

//import imgMartyr from "./img/martyr.jpg"

import imgImport from "./img/*.jpg"

/*
  Put the JavaScript code you want below.
*/

//code to resize and crop the images to fit in a 500 by 500 square
// => Use css to resize ?

//code to push the content of imgImport into an array ; used in randomizeCycler
let imgArr = [];

for (let property1 in imgImport) {
  imgArr.push(imgImport[property1]);
}
console.log(imgArr); //control

//code to randomize an array ; used in randomizeCycler
let randomize = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) { //regressive loop
        const j = Math.floor(Math.random() * ( i + 1)); //magic ?
        [arr[i], arr[j]]=[arr[j], arr[i]]; //swap source index with a new random one
    }
}


//code to cycle through the resized images
let randomizeCycler = () => {
  randomize(imgArr);
  console.log(imgArr); //control
  let imgContent = document.getElementById('contentBox');
  imgContent.innerHTML = "";
  for(let i = 0 ; i < imgArr.length ; i++){
    // code to send an image in the index.html
   // let imgContent = document.getElementById('contentBox');
   // imgContent.innerHTML = '<button type="button" id="randomizeButton">Click me</button>' ;
   let imgBox = document.createElement('div')
    imgBox.setAttribute("class", "squareBox")
   let imgItem = document.createElement('img')
     imgItem.setAttribute("alt", "img not found");
     imgItem.setAttribute("class", "squareImg");
     imgItem.setAttribute("src", imgArr[i]);
   imgContent.appendChild(imgBox)
   imgBox.appendChild(imgItem);
  //imgContent.appendChild(imgItem);
  }
}

//code to call the imgCycler fct on repeated intervals
//window.setInterval( () => {imgCycler(i)}, 1000);

document.getElementById("randomizeButton").addEventListener('click', () => {randomizeCycler()});
console.log("Hey look in your browser console. It works!");
/*Enoncé:

Use your Google Images skills to collect a dozen of cat images.

Display these cat images in your app one by one by cycling automatically every second.
These images must be displayed in a 500x500 pixel square and should be resized and cropped
automatically to fit in this space regardless of their original resolution or aspect-ratio.
(Purposedly choosing images that all have the same resolution or aspect-ratio is considered cheating.)
*/
