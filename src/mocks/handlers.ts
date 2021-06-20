// src/mocks/handlers.js
import { rest } from 'msw';
import { v4 } from 'node-uuid';

export const handlers = [
  rest.get("/focuses", (req, res, ctx) => {
    if (Math.random() > 0.5) {
      return res(
        ctx.status(500),
        ctx.json({ message: "Internal Server Error" })
      );
    }
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json([
        { id: 0, text: "Take Off", completed: true },
        { id: 1, text: "Duck", completed: false },
        { id: 2, text: "Turn", completed: false },
      ])
    );
  }),

  rest.post("/focuses", (req, res, ctx) => {
    const body = req.body as any;
    return res(
      ctx.status(200),
      ctx.json({ id: v4(), text: body.text, completed: false })
    );
  }),

  rest.put("/focuses/:focusId", (req, res, ctx) => {
    const id = Number(req.params.focusId);
    const body = req.body as any;
    return res(
      ctx.status(200),
      ctx.json({ id, text: body.text, completed: !body.completed })
    );
  }),

  rest.delete("/focuses/:focusId", (req, res, ctx) => {
    const id = req.params.focusId;
    return res(ctx.status(200), ctx.json({ id }));
  }),
];
