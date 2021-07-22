// src/mocks/handlers.js
import { graphql, rest } from 'msw';
import { v4 } from 'node-uuid';

const authHandlers = [
  graphql.mutation("SignUp", (req, res, ctx) => {
    return res(
      ctx.data({
        signup: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTYyNDU4MTMxMX0.f3aC_mxlAZjEd2eq0RQdy27bNbcA8Ggn-xV-jmpeoyA",
        },
      })
    );
  }),

  graphql.mutation("Login", (req, res, ctx) => {
    return res(
      ctx.data({
        login: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyNDU4MTMzOX0.XG1eB2W_DVhXkMLKuCDWcXK4dX_Fwi1DC-hexVKX87M",
        },
      })
    );
  }),
];
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
        spotId: body.spotId,
      })
    );
  }),
];

const spotHandlers = [
  rest.get("/spots", (req, res, ctx) => {
    // return res(
    //   ctx.status(500),
    //   ctx.json({ message: "Internal Server Error" })
    // );
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json([
        { id: v4(), name: "Beach 1", latitude: 35.2, longitude: 34.2 },
        { id: v4(), name: "Beach 2", latitude: 35.2, longitude: 34.2 },
        { id: v4(), name: "Beach 3", latitude: 35.2, longitude: 34.2 },
      ])
    );
  }),

  rest.post("/spots", (req, res, ctx) => {
    const body = req.body as any;
    return res(
      ctx.status(200),
      ctx.json({
        id: v4(),
        name: body.name,
        latitude: 35.5,
        longitude: 136.6,
      })
    );
  }),
];

export const handlers = [
  ...authHandlers,
  ...focusHandlers,
  ...sessionHandlers,
  ...spotHandlers,
];
