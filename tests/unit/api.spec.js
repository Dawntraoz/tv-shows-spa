import moxios from 'moxios'
import api from '@/api'

describe('api.js', () => {
  beforeEach(() => {
    moxios.install(api)
  })
  afterEach(() => {
    moxios.uninstall(api)
  })
  it('should get a good response with 200 OK', done => {
    moxios.stubRequest('http://www.example.com/test', {
      status: 200,
      responseText: 'good request :)',
    })
    api
      .get('http://www.example.com/test')
      .then(res => expect(res.status).toBe(200))
      .finally(done)
  })

  it('should get a bad response with 404 status', done => {
    moxios.stubRequest('http://www.example.com/test', {
      status: 404,
      responseText: 'bad request :(',
    })
    api
      .get('http://www.example.com/test')
      .then(res => expect(res.status).toBe(404))
      .finally(done)
  })
})
