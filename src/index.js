import "../index.css";
import imgJS from '../assets/logoJS.png';


console.log('Hello world!!!');

const imgHTML = document.createElement('img');
imgHTML.className = 'img-first';
imgHTML.src = imgJS;

document.body.append(imgHTML);