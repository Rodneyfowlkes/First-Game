import $ from 'jquery';
import _ from "lodash";


class Square {
	constructor(x,y){
		this.pokémon   = 'chazard';
		this.hasPlayer = false;
		this.row_id        = x || 1;
		this.col_id        = y || 1;
		this.image     = 'imgHere';
		this.playerimg = undefined;
		this.moveable  = true;
		this.isTrainer = false;
	}


};

export {Square};