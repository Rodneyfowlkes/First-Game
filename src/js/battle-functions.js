import $ from 'jquery';
import _ from 'lodash';








let health_range = [20,25,30,27,35,21,44,23,32,31,33,34,35,36];

console.log(_.range(1,5));
let gives_unique_moves = function(){
	let damage_range = [10,5,3,6,7,2,2,4,5,8,5,]

	let playermoves  = [
	{"name":"tackle","dmg": _.sample(damage_range),'index':0},
	{"name":'scratch',"dmg": _.sample(damage_range),'index':1},
	{"name":'low-kick',"dmg": _.sample(damage_range),'index':2},
	{"name":'ember',"dmg": 12, "uses":2,'index':3},
	{"name":'mud-slide',"dmg": 9,'uses':3,'index':4}
	];
    let total_moves = _.range(1,5);
    let move_list = [];
    for (var i =0; i <= _.sample(total_moves); i++) {
    	 var move = _.sample(playermoves);
    	 _.remove(playermoves,function(n){
    	 	return n.index == move.index;
    	 });
    		move_list.push( move);
    }
    return move_list;
}

class Trainer{
     constructor(x,y,z){
     	this.hp = x;
     	this.moves = gives_unique_moves();
     }


}


let poke_imgobjs =[{"pokemon_name":"Cyndaquil","src":`images/pokemon_images/cyndaquil.png`},
                   {"pokemon_name":"Sandshrew","src":`images/pokemon_images/sandshrew.png`}]

let set_pokeimgs = function(x){

	let poke =_.sample(poke_imgobjs);

	$('.'+ x +" "+".pokemonimg").attr('src',poke.src);

};

set_pokeimgs('player1');


set_pokeimgs('player2');


let gameover = false;

let p1 = new Trainer(_.sample(health_range));
let p2 = new Trainer(_.sample(health_range));

let display_moves = function(movey , whereto, whichplayer) {

	let movecount = 1;
    let p2movenumber = 1;
	movey.moves.forEach(function(n){
        n.name 
        $(whereto).append(`<span class="${whichplayer}${n.name} move"> ${n.name}</span>`);

        
// Attack event listeners
        let player2 = p2;

        $(`.${whichplayer}${n.name}`).on('click', function(){
	    let move = $(`.${whichplayer}${n.name}`).text();
       
        console.log(`${whichplayer} just used ${move}!`);
	 



     
        
       if (gameover=== false){





        if (whichplayer =='p1' && p2.hp !== 0 && p2movenumber == movecount){
            p2movenumber +=1;
        	for (var i = 0; i <= n.dmg; i++) {
    $(".p2hpbar").children().last().remove()
   	p2.hp -= 1;
    $('.game_verdict').html(`<span class="current_move">You just used ${n.name}!</span>`);
   
   }
        } else if(whichplayer == 'p2' && p1.hp !== 0 && p2movenumber !== movecount ){

        	  	for (var i = 0; i <= n.dmg; i++) {
   	$(".p1hpbar").children().last().remove()
   	p1.hp -= 1;


   }

        }

console.log(p1.hp);
console.log(p2.hp);
 

   if (p1.hp <= 0){
        $('.game_verdict').html(`<span class="who_one">'Player 2 Wins'</span>`);
        gameover= true;
        } else if (p2.hp <= 0) {$('.game_verdict').html(`<span class="who_one">'You Win'</span>`);
        gameover= true;
        } else { setTimeout(function() {
  //your code to be executed after 1 second
        let p2next_move = _.sample(p2.moves);
       
				                      	for (var i = 0; i <= p2next_move.dmg; i++) {
				   	$(".p1hpbar").children().last().remove()
				   	p1.hp -= 1;
				   	


				   }
				   $('.game_verdict').html(`<span class="current_move">Player2 just used ${p2next_move.name}!</span>`);

                      movecount += 1;
        }, 2500);
		}
};

});




	});



};


let hpbar = function(x,y){
   for (var i = 0; i <= y.hp; i++) {
   	$("." + x +"hpbar").append(`<div class="onehp"></div>`);

   }
}



hpbar('p1',p1);
hpbar('p2',p2);

let make_attack = function(){}




display_moves(p1,".move_menu","p1");




// $('.attack_option').on('click', function(){
// 	    let move = $('.attack_option').text();
       
//         console.log(p1moves);
// 	  p1moves.forEach(function(x){
       
       
// 	   if ( move == x.name){
//           console.log(`player just used ${x.name}`)	   	

// 	   };


// 	  })

// console.log('hi');

// });






gives_unique_moves();

let p1health = _.sample(health_range);
let p2health = _.sample(health_range);


console.log(p1health);

export {p1health, display_moves, hpbar,gives_unique_moves,health_range, Trainer,poke_imgobjs,gameover};