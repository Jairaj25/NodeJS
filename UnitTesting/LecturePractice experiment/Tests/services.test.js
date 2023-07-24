import {addToTwo} from '../Services/calcService.js';
import { assert, expect } from 'chai';

describe('Calculation Service Test Case', () => {
    describe ('senarios for add to two function', ()=> {
        it('Should be success', (done) => {
            const result = addToTwo(2);
            expect(result).to.be.a('number');
            expect(result).to.be.equal(4);
            done();
        })
        it('Should be success', (done) => {
            const result = addToTwo(2);
            expect(result).to.be.not.equal(5);
            done();
        })
        it('Should be success', (done) => {
            const result = addToTwo(2);
            assert.equal(result, 4);
            done();
        })
    })
})