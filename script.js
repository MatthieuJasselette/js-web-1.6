
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

//code to push the content of imgImport into an array
let imgArr = [];
console.log(imgArr);
for (let property1 in imgImport) {
  imgArr.push(imgImport[property1]);
}

let i = 0 ;
//code to cycle through the resized images
let imgCycler = (input) => {
  console.log("Jamal le glorieux");
  //for(let i = 0 ; i < imgArr.length ; i++){
    // code to send an image in the index.html
    let imgBox = document.getElementById('squareBox');
    imgBox.innerHTML = ""; //sert à effacer l'image pour la remplacer par la nouvelle
    let imgItem = document.createElement('img')
    imgItem.setAttribute("alt", "img not found");
    imgItem.setAttribute("id", "squareImg");
    imgItem.setAttribute("src", imgArr[input]);
    imgBox.appendChild(imgItem);
    //nasty solution courtesy of Thibaut & Romain
    i++
    i%=imgArr.length;
//  }
}

//code to call the imgCycler fct on repeated intervals
window.setInterval( () => {imgCycler(i)}, 1000);

console.log("Hey look in your browser console. It works!");
/*Enoncé:

Use your Google Images skills to collect a dozen of cat images.

Display these cat images in your app one by one by cycling automatically every second.
These images must be displayed in a 500x500 pixel square and should be resized and cropped
automatically to fit in this space regardless of their original resolution or aspect-ratio.
(Purposedly choosing images that all have the same resolution or aspect-ratio is considered cheating.)
*/
