// src/mocks/handlers.js
import { rest } from 'msw';
import { v4 } from 'node-uuid';

const focusHandlers = [
  rest.get("/focuses", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json([
        { id: "1", text: "Take Off", completed: true },
        { id: "2", text: "Duck", completed: false },
        { id: "3", text: "Turn", completed: false },
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
    const id = req.params.focusId;
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

const sessionHandlers = [
  rest.get("/sessions", (req, res, ctx) => {
    // if (Math.random() > 0.5) {
    //   return res(
    //     ctx.status(500),
    //     ctx.json({ message: "Internal Server Error" })
    //   );
    // }
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json([
        { id: v4(), memo: "Good session", rating: 4, focusId: "1" },
        { id: v4(), memo: "Cool wind", rating: 4, focusId: "1" },
        { id: v4(), memo: "bwa", rating: 4, focusId: "1" },
      ])
    );
  }),

  rest.post("/sessions", (req, res, ctx) => {
    const body = req.body as any;
    return res(
      ctx.status(200),
      ctx.json({
        id: v4(),
        memo: body.memo,
        rating: body.rating,
        focusId: body.focusId,
      })
    );
  }),
];

export const handlers = [...focusHandlers, ...sessionHandlers];
