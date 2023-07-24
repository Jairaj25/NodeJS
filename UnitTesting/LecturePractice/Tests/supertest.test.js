
const userService = require('../Services/userService.js')
const index = require('../index.js')
const { expect } = require('chai');
const supertest = require('supertest');

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

