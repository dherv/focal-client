// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.get('/focuses', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 0, text: "Take Off", completed: true },
        { id: 1, text: "Duck", completed: false },
        { id: 2, text: "Turn", completed: false },
      ])
    )
  }),
]