const request = require('supertest');

const server = 'http://localhost:3000';
describe('Route Integration', () => {
  describe('/api/auth', () => {

    describe('POST /api/auth/login', () => {
      it('responds to a correct login request sucessfully', async () => {
        const response = await request(server).post('/api/auth/login').send({ userName: 'testing', password: 'testing'});
        expect(response.status).toBe(200);
      });

      it('responds to an incorrect login request with an error', async () => {
        const response = await request(server).post('/api/auth/login').send({ userName: 'fake', password: 'fake'});
        expect(response.status).toBe(400);
      });

      it('sends appropriate SSID cookie back in the response after login', async () => {
        const response = await request(server).post('/api/auth/login').send({ userName: 'testing', password: 'testing'});
        const cookies = response.headers['set-cookie'];
        let ssidCookie = cookies[0];
        ssidCookie = ssidCookie.slice(0, 5);
        expect(ssidCookie).toBe('ssid=');
      });
    });

    describe('POST /api/auth/signup', () => {
      it('responds to a correct signup request successfully', async () => {
        const reqBody = {
          firstName: 'test',
          lastName: 'test',
          userName: 'testUser',
          password: 'testPass'
        };
        const response = await request(server).post('/api/auth/signup').send(reqBody);
        expect(response.status).toBe(200);
      });

      it('responds to an incorrect login signup with an error', async () => {
        const reqBody = {
          firstName: 'test',
          lastName: 'test',
        };
        const response = await request(server).post('/api/auth/signup').send(reqBody);
        expect(response.status).toBe(400);
      });

      it('sends appropriate SSID cookie back in the response after signup', async () => {
        const reqBody = {
          firstName: 'test',
          lastName: 'test',
          userName: 'testUser',
          password: 'testPass'
        };
        const response = await request(server).post('/api/auth/signup').send(reqBody);
        const cookies = response.headers['set-cookie'];
        let ssidCookie = cookies[0];
        ssidCookie = ssidCookie.slice(0, 5);
        expect(ssidCookie).toBe('ssid=');
      });
    });
  });
  
  describe('/api/entry', () => {
    describe('POST', () => {
      it('responds with a text body to the post request', () => {
        const postBody = {
          userName: 'test',
          date: '1/2/22',
          iLearned: 'iLearned test',
          journal: 'Test journal',
          moodScaler: 5
        }
        return request(server)
          .post('/api/entry')
          .send(postBody)
          .expect(200)
      });
    });

    describe('GET', () => {
      it('responds to a get request by returing all journal entries in the body', () => {
        return request(server)
          .get('/api/entry/testing')
          .expect('Content-Type', /application\/json/)
      });
    });
  });
});