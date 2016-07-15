// Import Chai
import chai from 'chai';

// Import Any Files to Test
import {Stage} from "../src/js/stage.js";
import {Square} from '../src/js/square_class.js';
// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;




    //  it('', function() {
    //    let x = new Square;
    //    expect(x).to.be.a();
       

    // });


describe('should have a stage', function () {

  describe('should have a class named stage', function () {

    it('it should have an instance of stage', function () {
      let x = new Stage;
      expect(x).to.be.an.instanceof(Stage);
    });

    it('It should contain property called stageGrid', function() {
       let x2 = new Stage;
       expect(x2).to.have.property("stageGrid");
       

    });
  

    it('should contain a property grid_imgs', function() {
       let x2 = new Stage;
       expect(x2).to.have.property('grid_imgs');
       

    });
    
    it('Stage should contain a method that generates a board', function() {
       let x2 = new Stage;
       expect(x2.loadboard()).to.be.an("object");
       

    });



      it('loadboardmethod should pass the grid object to stageGrid', function() {
       let x2 = new Stage;
       x2.loadboard();
       x2.stageGrid

       expect(x2.stageGrid).to.have.property('a1');
       

    });
  
   


  });


});


describe('It should have a square constructor', () => {

    it('Stage should create an instanceof square', function() {
       let x = new Square;
       expect(x).to.be.an.instanceof(Square);
       

    });

     it('should have a property hasPlayer', function() {
       let x = new Square;

       expect(x).to.have.property("hasPlayer");
       

    });


     it('should have a property image', function() {
       let x = new Square;
       expect(x).to.have.property('image');
       

    });


  it('should have a property id', function() {
       let x = new Square;
       expect(x).to.have.property('id');
       

    });

   
  it('should have a property moveable', function() {
       let x = new Square;
       expect(x).to.have.property('moveable');
       

    });

      
  it('should have a property isTrainer', function() {
       let x = new Square;
       expect(x).to.have.property('isTrainer');

       

    });




});