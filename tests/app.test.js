const request = require('supertest');
const app = require('./../index');

// describe, it - mocha
// request      - supertest

// request(app)
//   .method('/path')
//   .set('Header','value') - встановлення заголовків
//   .send(тіло) - встановлення тіла запиту
//   .expect('Header','value') - перевірка заголовка, що прийшов з відповіддю
//   .expect(statusCode)
//   .expect('Response')

//   .end(done)
// або
//   .end((err,res)=>{
//     if(err) {return done(err)}
//     перевірка res.body
//     done()
//   })
// або
//   .then(res=>{ перевірка res.body; done()})
//   .catch(err=>done(err))

describe('Testing app', () => {
  it('response from GET / should be 200 "Hello from server"', done => {
    request(app).get('/').expect(200).expect('Hello from server').end(done);
  });

  it('response from GET /api/users/1 should be 200 { id: 1, name: "User1" }', done => {
    request(app)
      .get('/api/users/1')
      .expect(200)
      .expect({ id: 1, name: 'User1' })
      .end(done);
  });
});
