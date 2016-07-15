import $ from 'jquery';
import _ from "lodash";


class Square {
	constructor(x){
		this.pokémon   = 'chazard';
		this.hasPlayer = false;
		this.id        = x || 1;
		this.image     = 'imgHere';
		this.moveable  = true;
		this.isTrainer = false;
	}

	how(){
		function h() {
			console.log('HI');
		}
	}
};

export {Square};