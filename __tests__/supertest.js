const request = require('supertest');

const server = 'http://localhost:3000';
describe('Route Integration', () => {
  describe('/api/auth', () => {

    describe('GET /api/auth/hello', () => {
      it('responds with a response body of hello: world', async () => {
        const response = await request(server).get('/api/auth/hello');
        expect(response.body).toEqual({ hello: 'world' });
      });
    });

    describe('POST /api/auth/login', () => {
      it('responds to a correct login request sucessfully', async () => {
        const response = await request(server).post('/api/auth/login').send({ userName: 'testing', password: 'testing'});
        expect(response.status).toBe(200);
      });

      it('responds to an incorrect login request with an error', async () => {
        const response = await request(server).post('/api/auth/login').send({ userName: 'fake', password: 'fake'});
        expect(response.status).toBe(200);
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
        const response = await (await request(server).post('/api/auth/signup')).send(reqBody);
        expect(response.status).toBe(200);
      });

      it('responds to an incorrect login signup with an error', async () => {
        const reqBody = {
          firstName: 'test',
          lastName: 'test',
        };
        const response = await (await request(server).post('/api/auth/signup')).send(reqBody);
        expect(response.status).toBe(404);
      });
    });
  });
  
  describe('/api/entry', () => {
    describe('POST', () => {
      it('responds with a text body to the post request', () => {
        const postBody = {
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
          .get('/api/entry')
          .expect('Content-Type', /application\/json/)
      });
    });
  });
});