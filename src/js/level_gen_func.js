import $ from 'jquery';
import _ from 'lodash';
import {Square} from './square_class.js';



 
let imgarr =[["0-0.png",
"0-1.png",
"0-2.png",
"0-3.png",
"0-4.png",
"0-5.png",
"0-6.png",
"0-7.png",
"0-8.png",
"0-9.png"],

["1-0.png",
"1-1.png",
"1-2.png" ,
"1-3.png",
"1-4.png",
"1-5.png",
"1-6.png",
"1-7.png",
"1-8.png",
"1-9.png"],

["2-0.png",
"2-1.png",
"2-2.png",
"2-3.png",
"2-4.png",
"2-5.png",
"2-6.png",
"2-7.png",
"2-8.png",
"2-9.png"],

["3-0.png",
"3-1.png",
"3-2.png",
"3-3.png",
"3-4.png",
"3-5.png",
"3-6.png",
"3-7.png",
"3-8.png",
"3-9.png"],

["4-1.png",
"4-2.png",
"4-0.png",
"4-3.png",
"4-4.png",
"4-5.png",
"4-6.png",
"4-7.png",
"4-8.png",
"4-9.png"],

["5-0.png",
"5-1.png",
"5-2.png",
"5-3.png",
"5-4.png",
"5-5.png",
"5-6.png",
"5-7.png",
"5-8.png",
"5-9.png"],

["6-0.png",
"6-1.png",
"6-2.png",
"6-3.png",
"6-4.png",
"6-5.png",
"6-6.png",
"6-7.png",
"6-8.png",
"6-9.png"],

["7-0.png",
"7-1.png",
"7-2.png",
"7-3.png",
"7-4.png",
"7-5.png",
"7-6.png",
"7-7.png",
"7-8.png",
"7-9.png"],

["8-0.png",
"8-1.png",
"8-2.png",
"8-3.png",
"8-4.png",
"8-5.png",
"8-6.png",
"8-7.png",
"8-8.png",
"8-9.png"],
]


let keystroke = function(elem) {document.addEventListener("keydown", function(event) {
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


});}



let moveplayer = function (y){
    

    let gee = y.playerobj();
    	
			let rowid    = 'row' + gee.row_id;
			let colid    = rowid + 'col' + gee.col_id;
			$('.img'+ colid).attr('src', `images/stage_images/level1/4-4.png`)




}

let eraseplayerimg = function (x,y){
    

    	
			let rowid    = 'row' + x;
			let colid    = rowid + 'col' + y;
			let imgtag   = x +'-'+y
			console.log();

 			$('.img'+ colid).attr('src', `images/stage_images/level1/${imgtag}.png`)




}



// var create_grid = function(){

// 	var create_array = function() {
// 		var x = new Array(9);
// 		let n = _.fill(x,(_.range(10)));
// 		return n;

// 	}

// 	let grid = create_array();
// 	let obj  = {};
//     let obj2 = {};

//     grid.map(function(x, y){
//     	let propname  = "a" + y;
//         obj[propname] = obj2;
	    
// 	    let row = y;
// 	    console.log(row);
	    
// 	    x.forEach(function(m,n){
	    	
//             let sq_name = 'b' + n;
//             obj2[sq_name] = new Square;
// 	    	let columns = n;
// 	    	console.log("coloum"+columns);
//             console.log("Row" +row);


// 	    });


//     });

//     // console.log(grid);
//     // console.log(obj);
     
//      return obj;
// }

// let grid_obj = create_grid();
// console.log(grid_obj);

// console.log('HI');
// create_array();
// create_grid();
export {imgarr, keystroke, moveplayer, eraseplayerimg};