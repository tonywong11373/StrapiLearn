2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
	
let chai = require("chai");
let chaiHttp = require("chai-http");
let server=require("../app");
let should = chai.should();
chai.use(chaiHttp);
 
describe("Root", function(){
  describe ("Get /", function(){
    it("should return a 200 code", done=>{
      chai.request(server)
          .get("/")
          .send({})
          .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.deep.equals({message: "You did it!"})
            done()
          })
    })
 
  })
})