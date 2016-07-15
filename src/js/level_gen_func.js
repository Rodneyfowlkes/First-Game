import $ from 'jquery'
import _ from 'lodash'
import {Square} from './square_class.js'



 var create_array = function() {
var x = new Array(9);



  let n = _.fill(x,(_.range(10)))

return n;

}





var create_grid = function(){

	let grid = create_array();
    let obj  = {};
    let obj2 = {};

    grid.map(function(x, y){
    	let propname  = "a" + y;
        obj[propname] = obj2;
	    
	    let row = y;
	    console.log(row);
	    
	    x.forEach(function(m,n){
	    	
            let sq_name = 'b' + n;
            obj2[sq_name] = new Square;
	    	let columns = n;
	    	console.log("coloum"+columns);
            console.log("Row" +row);


	    });


    });

    // console.log(grid);
    // console.log(obj);
     
     return obj;
}

let grid_obj = create_grid();
console.log(grid_obj);

console.log('HI');
create_array();
// create_grid();
export { create_array};