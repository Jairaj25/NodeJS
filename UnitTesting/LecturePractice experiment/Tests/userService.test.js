import { dbService } from '../db.js';
import { userService } from '../Services/userService.js';
import { restore, stub, mock } from 'sinon';
import { expect } from 'chai';

describe('user service test cases', () => {
    describe('test cases of getAllUsers', () => {
        beforeEach(() => {
            restore()
        })
        it("Should get all users successfully", async () => {
            const mockedUserData = [

                {
                    id: 2,
                    firstname: 'Jairaj'
                }
            ]
            
            const expectedUserData = [
                {
                    id: 2,
                    firstname: 'Jairaj'
                }
            ]
            stub(dbService, 'getUsers').resolves(mockedUserData)
            const userResult = await userService.getAllUsers();
            expect(userResult).to.be.eql(expectedUserData)


        })
        it('Should get all users with id = 2 with mock', async () => {
            const mockResult = mock(userService);
            mockResult.expects('getAllUsers').returns([
                {
                    id: 2,
                    firstname: 'Jairaj'
                }
            ]);
            const userResult = await userService.getAllUsers();
            mockResult.verify();
            expect(userResult[0].id).to.be.deep.equal(2);
        })
    });
});

