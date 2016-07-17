import $ from 'jquery';
import _ from 'lodash';
import {create_array, imgarr, moveplayer, eraseplayerimg} from './level_gen_func.js';
import {Stage} from "./stage.js";
import {Square} from './square_class.js';


var tee = new Stage;
tee.loadboard();
console.log(tee);
console.log(tee.stageGrid.row5.row5col1.hasPlayer);

tee.stageGrid.row5.row5col5.hasPlayer = true;
tee.stageGrid.row5.row5col2.id = '3333';
console.log(tee.stageGrid.row5.row5col1.hasPlayer);
let gee = tee.playerobj();
console.log(gee);
tee.loadimgs(imgarr);


document.addEventListener("keydown", function(event) {
	console.log(event.which);
	let keystroke = event.which;
	console.log(tee);

    moveplayer(tee);




	if ( keystroke == 38) {
		$("td#one").attr("class","black");
		let fee = tee.playerobj();

        
		if (fee.row_id !== 0){

			console.log(fee);
			let newrowid = fee.row_id -1;
			let rowid    = 'row' + newrowid;
			let colid    = rowid + 'col' + fee.col_id;
			console.log(colid); 

			console.log(tee.stageGrid[rowid][colid]);

			tee.stageGrid[rowid][colid].hasPlayer = true;
			fee.hasPlayer                         = false;
			eraseplayerimg(fee.row_id,fee.col_id);
            moveplayer(tee);
		}

    console.log(tee.playerobj());

	}   
	else if ( keystroke == 37) {

		$("td#one").attr("class", 'blue');

		let fee = tee.playerobj();

		if (fee.col_id !== 0){

			console.log(fee);
			let newcolid = fee.col_id -1;
			let rowid    = 'row' + fee.row_id;
			let colid    = rowid + 'col' + newcolid;
			console.log(colid); 

			console.log(tee.stageGrid[rowid][colid]);

			tee.stageGrid[rowid][colid].hasPlayer = true;
			fee.hasPlayer                         = false;
			eraseplayerimg(fee.row_id,fee.col_id);
            moveplayer(tee);
	}

	console.log(tee.playerobj());





	}
	else if ( keystroke == 39) {

		$("td#one").attr("class", 'orange');


		let fee = tee.playerobj();

		if (fee.col_id !== 9){

			console.log(fee);
			let newcolid = fee.col_id + 1;
			let rowid    = 'row' + fee.row_id;
			let colid    = rowid + 'col' + newcolid;
			console.log(colid); 

			console.log(tee.stageGrid[rowid][colid]);

			tee.stageGrid[rowid][colid].hasPlayer = true;
			fee.hasPlayer                         = false;
			eraseplayerimg(fee.row_id,fee.col_id);
            moveplayer(tee);
		}

		console.log(tee.playerobj());




	}
	else if ( keystroke === 40) {


		$("td#one").attr("class", 'green');

		let fee = tee.playerobj();
		console.log(fee);

		if (fee.row_id !==8){

			let newrowid = fee.row_id + 1;
			let rowid = 'row' + newrowid;
			let colid = rowid + 'col' + fee.col_id;


			console.log(tee.stageGrid[rowid][colid]);

			tee.stageGrid[rowid][colid].hasPlayer = true;
			fee.hasPlayer                         = false;
			eraseplayerimg(fee.row_id,fee.col_id);
            moveplayer(tee);
		} 

		console.log(tee.playerobj());




	}


});

// $("#one").on('click', (function(){
  
//   console.log($("#one"));

//   return	
// }));

// $("#one").switchClass('blue', 'black', 1000, 'easeInOutQuad');