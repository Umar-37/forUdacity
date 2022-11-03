import { app } from '../index'
import supertest from 'supertest'

const req = supertest(app)

describe('/status route should', (): void => {
      it('respond with status 200', async (): Promise<void> => {
            const response: supertest.Response = await req.get('/status')

            expect(response.status).toBe(200)
      })
})

describe('/* any undfind route should return 404', (): void => {
      it('respond with status 404', async (): Promise<void> => {
            const response: supertest.Response = await req.get('/*')

            expect(response.status).toBe(404)
      })
})
