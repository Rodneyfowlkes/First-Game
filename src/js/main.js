import $ from 'jquery';
import _ from 'lodash';
import {create_array} from './level_gen_func.js';

document.addEventListener("keydown", function(event) {
  console.log(event.which);

  let keystroke = event.which;
 
  if ( keystroke == 38) {
  	$("td#one").attr("class","black");
  } else if ( keystroke == 37) {

  	$("td#one").attr("class", 'blue');
  }
   else if ( keystroke == 39) {

  	$("td#one").attr("class", 'orange');
  }
   else if ( keystroke == 40) {

  	$("td#one").attr("class", 'green');
  }

// console.log(_.range(5));

// var

// console.log(new Array(10));


});

// $("#one").on('click', (function(){
  
//   console.log($("#one"));

//   return	
// }));

// $("#one").switchClass('blue', 'black', 1000, 'easeInOutQuad');