const makeServiceWorkerEnv = require('service-worker-mock')
const makeFetchMock = require('service-worker-mock/fetch')

describe('Service worker', () => {
  beforeEach(() => {
    Object.assign(global, makeServiceWorkerEnv(), makeFetchMock())
    jest.resetModules()
  })
  it('should add listeners', () => {
    if (process.client) {
      require('@/registerServiceWorker.js')
      expect(self.listeners['install']).toBeDefined()
      expect(self.listeners['activate']).toBeDefined()
      expect(self.listeners['fetch']).toBeDefined()
    }
  })
})
