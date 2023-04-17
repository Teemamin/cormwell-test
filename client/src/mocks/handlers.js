// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  // Handles a POST /login request
  rest.post('/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        "_id": "6438441ceb3080e604610e90",
        "username": "suri",
        "email": "test@test.com",
        "__v": 0
    })
    )
  }),
  rest.post('/register', (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.get('/logout', (req, res, ctx) => {
    return res(ctx.status(200));
  }),
]

