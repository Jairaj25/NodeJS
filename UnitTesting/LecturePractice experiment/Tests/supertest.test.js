

import index from '../index.js';
import { expect } from 'chai';
import supertest from 'supertest';

describe('supertest test case', () => {
    it('Should call hello api successfuly', () => {
        supertest(index)
            .get('/hello')
            .expect(200)
            .end(function (err, res) {
                if (err) {throw err}
                console.log(res.body)
                expect(res.body).to.be.deep.equal({message: 'Hello, World'});
            })
    })

});

