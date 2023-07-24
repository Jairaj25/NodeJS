
const userService = require('../Services/userService.js')
const dbService = require('../db.js')
const sinon = require('sinon')
const {expect} = require('chai');

describe('user service test cases', ()=> {
    describe('test cases of getAllUsers', () => {
        beforeEach(()=> {
            sinon.restore()
        })
        it("Should get all users successfully", async ()=> {
            sinon.stub(userService, 'getAllUsers').resolves([
                
                {
                    id: 2,
                    firstname: 'Jairaj'
                }
            ])
            const userResult = await userService.getAllUsers();
            expect(userResult).to.be.deep.equal([
                {
                    id: 2,
                    firstname: 'Jairaj'
                }
            ])

            
        })
        it('Should get all users with id = 2 with mock', async () => {
            const mockResult = sinon.mock(userService);
            mockResult.expects('getAllUsers').returns([
                {id: 2, firstname: 'Jairaj'}
            ]);
            const userResult = await userService.getAllUsers();
            mockResult.verify();
            expect(userResult[0].id).to.be.deep.equal(2);
        })
    });
});

