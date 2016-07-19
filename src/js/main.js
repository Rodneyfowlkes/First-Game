import $ from 'jquery';
import _ from 'lodash';
import {create_array, imgarr, moveplayer, eraseplayerimg, battle_temp} from './level_gen_func.js';
import {Stage} from "./stage.js";
import {Square} from './square_class.js';
import {p1health, hpbar,display_moves,gives_unique_moves,health_range, Trainer,poke_imgobjs,gameover } from './battle-functions';

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



        
	} else if (tee.playerobj().row_id == 0 && tee.playerobj().col_id == 5 && keystroke === 65 || tee.playerobj().row_id == 1 && tee.playerobj().col_id == 6 && keystroke === 65 ||tee.playerobj().row_id == 0 && tee.playerobj().col_id == 7 && keystroke === 65){
		$('.gamescreen').html(`<span> Hello </span`);

		set_pokeimgs('player1');


set_pokeimgs('player2');


let gameover = false;

let p1 = new Trainer(_.sample(health_range));
let p2 = new Trainer(_.sample(health_range));
		hpbar('p1',p1);
hpbar('p2',p2);

display_moves(p1,".move_menu","p1");
gives_unique_moves();

let p1health = _.sample(health_range);
let p2health = _.sample(health_range);


	}


});

// $("#one").on('click', (function(){
  
//   console.log($("#one"));

//   return	
// }));

// $("#one").switchClass('blue', 'black', 1000, 'easeInOutQuad');