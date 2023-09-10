const assert = require('assert');
const { expect } = require('chai');
const { sum } = require('./../utils/math');

// describe('description', ()=>{tests})
// it('should return ... when ...', ()=>{..., assertion})

describe('Testing math module', () => {
  describe('Testing math.sum', () => {
    it('should return 4:number when 2:number + 2:number', () => {
      const result = sum(2, 2);
      const expected = 4;
      assert.equal(result, expected);
    });
    // написать тест для '2' + '2' => 4
    it('should return 4:number when "2":string + "2":string', () => {
      const result = sum('2', '2');
      const expected = 4;
      assert.equal(result, expected);
    });
    it('should return NaN when "qwerty":string + 2:number ', () => {
      const result = sum('qwerty', 2);
      const expected = NaN;
      assert.equal(result, expected);
    });
    describe('Not finite result', () => {
      //mocha
      it('should return Infinity when Number.MAX_VALUE + Number.MAX_VALUE', () => {
        //mocha
        const result = sum(Number.MAX_VALUE, Number.MAX_VALUE);
        const expected = Infinity;
        expect(result).to.equal(expected); // chai
      });
      it('should return not finite value when MAX_VALUE + MAX_VALUE ', () => {
        const result = sum(-Number.MAX_VALUE, -Number.MAX_VALUE);
        expect(result).to.be.not.finite;
      });
    });
  });
});
// 2 + 2 => 4
// '2' + '2' => 4
//  max + max => Intinity / not finite
