// Import Chai
import chai from 'chai';

// Import Any Files to Test
import {Stage} from "../src/js/stage.js"
// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('should have a stage', function () {

  describe('should have a class names stage', function () {

    it('it should have an instance of stage', function () {
      let x = new Stage;
      expect(x).to.be.an.instanceof(Stage);
    });

    it('It should contain an array of imgs', function() {
       let x2 = new Stage;
       expect(x2.grid_imgs).to.be.an("array");
       

    });

    
    it('Stage should contain a method that generates a board', function() {
       let x2 = new Stage;
       expect(x2.loadboard()).to.be.an("array");
       

    });

      it('Board method should contain produce string urls', function() {
       let x2 = new Stage;
       x2.loadboard();
       expect(x2.grid_imgs[0]).to.be.a('string');
       

    });


  });


});