import $ from 'jquery';
import _ from 'lodash';
class Stage {
constructor() {
	this.grid_imgs = [];
}

loadboard(x){
	var level = x || undefined;
    


	if (level == undefined){
       
       this.grid_imgs = ["s","j","g"];
       
	}

    return ["s","j","g"];
       
}



};

export {Stage};