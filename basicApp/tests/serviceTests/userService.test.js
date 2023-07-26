
import app from '../../app.js'
import { expect } from 'chai';
import supertest from 'supertest';

const token = 'eyJhbGciOiJIUzI1NiJ9.TWlyYWFrMkBnbWFpbC5jb20.phNkLvTN9p3pwayVX6OnoP_Bn8zhTJmMqdDvoy3lREQ'
describe("supertest test case: ", () => {

    //GET ALL USERS ============================================================================================================================================

    describe("get all users test", () => {
        it("Should return all users", async () => {

            await supertest(app)
                .get('/users')
                .set('auth', token)
                .expect(200)
                .then((res) => {
                    expect(res.body).to.be.instanceof(Array);
                })


        })

        it("Should return an error for token incorrect", async () => {

            await supertest(app)
                .get('/users')
                .set('auth', 'eyJhbGciOiJIUzI1NiJ9.TWlyYWFrMkBnbWFpbC5jb20.phNkLvTN9p3pwayVX6OnoP_Bn8zhTJmMqdDvoy3lRE')
                .expect(403)
                .then((res) => {
                    expect(res.body).to.be.instanceof(Object);
                })
        })
    })
    
    //POST LOGIN ============================================================================================================================================

    describe("Login test", () => {
        it("Should return Access Granted", (done) => {

            supertest(app)
                .post('/users/login')
                .send({
                    email: 'Miraak25@gmail.com',
                    password: 'TheFirstDragonPriest'
                })
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        return "Error"
                    }
                    expect(res.body).to.be.equal("Access Granted");
                })
            done();

        })

        it("Should return Wrong password", (done) => {

            supertest(app)
                .post('/users/login')
                .send({
                    email: 'Miraak25@gmail.com',
                    password: 'TheFirstDragonPriest2'
                })
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        return "Error"
                    }
                    expect(res.body).to.be.equal("Wrong password");
                })
            done();

        })

        it("Should return Wrong Credentials", (done) => {

            supertest(app)
                .post('/users/login')
                .send({
                    email: 'Mir@gmail.com',
                    password: 'TheFirstDragonPriest2'
                })
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        return "Error"
                    }
                    expect(res.body).to.be.equal("Wrong Credentials");
                })
            done();

        })

        it("Should return Body Empty", (done) => {

            supertest(app)
                .post('/users/login')
                .send({})
                .expect(401)
                .end((err, res) => {
                    if (err) {
                        return "Error"
                    }
                    expect(res.body).to.be.equal("Body Empty");
                })
            done();

        })
    })
    
    //POST REGISTER ============================================================================================================================================

    describe("Register test", () => {
        // it("Should return User Created Successfully", (done) => {

        //     supertest(app)
        //         .post('/users/register')
        //         .send({
        //             email: 'Miraak@gmail.com',
        //             password: 'TheFirstDragonPriest',
        //             name: "Miraak"
        //         })
        //         .expect(200)
        //         .end((err, res) => {
        //             if (err) {
        //                 return "Error"
        //             }
        //             expect(res.body).to.be.equal("User Created Successfully");
        //         })
        //     done();

        // })

        it("Should return User Already Exists", (done) => {

            supertest(app)
                .post('/users/register')
                .send({
                    email: 'Miraak2@gmail.com',
                    password: 'TheFirstDragonPriest',
                    name: "Miraak"
                })
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        return "Error"
                    }
                    expect(res.body).to.be.equal("User Already Exists");
                })
            done();

        })

        it("Should return Incomplete Profile", (done) => {

            supertest(app)
                .post('/users/register')
                .send({})
                .expect(401)
                .end((err, res) => {
                    if (err) {
                        return "Error"
                    }
                    expect(res.body).to.be.equal("Incomplete Profile");
                })
            done();

        })

        it("Should return Incomplete Profile with name not in request", (done) => {

            supertest(app)
                .post('/users/register')
                .send({
                    email: 'Miraak22@gmail.com',
                    password: 'TheFirstDragonPriest'
                })
                .expect(401)
                .end((err, res) => {
                    if (err) {
                        return "Error"
                    }
                    expect(res.body).to.be.equal("Incomplete Profile");
                })
            done();

        })

        it("Should return Incomplete Profile with email not in request", (done) => {

            supertest(app)
                .post('/users/register')
                .send({
                    password: 'TheFirstDragonPriest',
                    name: "Miraak"
                })
                .expect(401)
                .end((err, res) => {
                    if (err) {
                        return "Error"
                    }
                    expect(res.body).to.be.equal("Incomplete Profile");
                })
            done();

        })

        it("Should return Incomplete Profile with password not in request", (done) => {

            supertest(app)
                .post('/users/register')
                .send({
                    email: 'Miraak22@gmail.com',
                    name: "Miraak"
                })
                .expect(401)
                .end((err, res) => {
                    if (err) {
                        return "Error"
                    }
                    expect(res.body).to.be.equal("Incomplete Profile");
                })
            done();

        })
    })
    
    //POST RESET PASSWORD ============================================================================================================================================

    describe("Reset Password test", () => {
    //     it("Should return Password Changed successfully updated", (done) => {

    //         supertest(app)
    //             .post('/users/resetpassword')
    //             .send({
    //                 email: 'Miraak2@gmail.com',
    //                 password: 'TheFirstDragonPriest'
    //             })
    //             .expect(200)
    //             .end((err, res) => {
    //                 if (err) {
    //                     return "Error"
    //                 }
    //                 expect(res.body).to.be.equal("Password Changed successfully updated");
    //             })
    //         done();

    //     })

        it("Should return Incomplete Data", (done) => {

            supertest(app)
                .post('/users/resetpassword')
                .send({})
                .expect(401)
                .end((err, res) => {
                    if (err) {
                        return "Error"
                    }
                    expect(res.body).to.be.equal("Incomplete Data");
                })
            done();

        })

        it("Should return Email empty with email not in request", (done) => {

            supertest(app)
                .post('/users/resetpassword')
                .send({
                    password: 'TheFirstDragonPriest'
                })
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        return "Error"
                    }
                    expect(res.body).to.be.equal("Email empty");
                })
            done();

        })

        it("Should return Password Empty with password not in request", (done) => {

            supertest(app)
                .post('/users/resetpassword')
                .send({
                    email: 'Miraak25@gmail.com'
                })
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        return "Error"
                    }
                    expect(res.body).to.be.equal("Password Empty");
                })
            done();

        })

        it("Should return User not Registered", (done) => {

            supertest(app)
                .post('/users/resetpassword')
                .send({
                    email: 'Miraak250@gmail.com',
                    password: 'TheFirstDragonPriest'
                })
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        return "Error"
                    }
                    expect(res.body).to.be.equal("User not Registered");
                })
            done();

        })
    })
})