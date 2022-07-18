import { expect } from "chai";
import { describe } from "mocha";
import { Square } from "../src/shapes.js"

describe('Liskov substitution principle', function() {
    it('Shapes example should follow the L principle', function() {
        let square = new Square(2)
        square.width = 3
        expect(square.getArea()).to.equal(9)
    })
})