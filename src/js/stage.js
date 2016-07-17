import $ from 'jquery';
import _ from 'lodash';
import {Square} from './square_class.js';
import {imgarr} from './level_gen_func.js';

class Stage {
	constructor() {
		this.grid_imgs = [];
		this.stageGrid = {};
	}

	loadboard(x){

		var create_array = function() {
			var x = new Array(9);
			let n = _.fill(x,(_.range(10)));
			return n;

		}

		let grid = create_array();
		let obj  = {};

		grid.map(function(val, index){
			let obj2 = {}
			let propname  = "row" + index;
			obj[propname] = obj2;

			let row = index;
			// console.log(row);
			$('.board').append(`<tr class="${propname}"> </tr>`);

			val.forEach(function(number,index2){

				let sq_name = propname +'col' + number;
				obj2[sq_name] = new Square;
				let columns = index2;
				obj2[sq_name].row_id = index;
				obj2[sq_name].col_id = index2;

				// console.log("coloum"+columns);
				//       console.log("Row" +row);

				$('.' + propname).append(`<td class="${sq_name}"> <img src="" class="img${sq_name}"> </td>`)


			});


		}); // console.log(grid);
		// console.log(obj);
	return this.stageGrid =  obj; 
	}


    loadimgs(levelimgs) {
        levelimgs.map(function(val, index){
		
			let propname  = "row" + index;
		

			let row = index;
			// console.log(row);
			 

			val.forEach(function(number,index2){

				let sq_name = propname +'col' + index2;
		        let imgname = row +"-"+index2;
				let columns = index2;
				// this.stageGrid.propname.sq_name.image = number;
				// console.log("coloum"+columns);
				//       console.log("Row" +row);
                 console.log();

				$('.img' + sq_name).attr('src', `images/stage_images/level1/${imgname}.png`);


			});


		});







    }






	playerobj(){


		let objrow = _.find(this.stageGrid, function (row) {
			return _.find(row, function (col) {
			return col.hasPlayer === true;
		})})

		return _.find(objrow, function (n) {
			return n.hasPlayer === true;
		})


	}





	};


export {Stage};