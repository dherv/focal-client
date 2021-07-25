// src/mocks/handlers.js
import { graphql } from 'msw';
import { v4 } from 'node-uuid';

let spots = [
  {
    id: "1",
    name: "Beach 1",
    latitude: 35.2,
    longitude: 34.2,
  },
  {
    id: "2",
    name: "Beach 2",
    latitude: 35.2,
    longitude: 34.2,
  },
  {
    id: "3",
    name: "Beach 3",
    latitude: 35.2,
    longitude: 34.2,
  },
];

let focuses = [
  { id: "1", name: "Take Off", completed: true },
  { id: "2", name: "Duck", completed: false },
  { id: "3", name: "Turn", completed: false },
];

let sessions = [
  {
    id: v4(),
    memo: "Good session",
    rating: 4,
    focus: focuses[0],
    spot: spots[0],
  },
  {
    id: v4(),
    memo: "Cool wind",
    rating: 4,
    focus: focuses[0],
    spot: spots[0],
  },
  {
    id: v4(),
    memo: "bwa",
    rating: 4,
    focus: focuses[0],
    spot: spots[0],
  },
];

const user = {
  id: "1",
  name: "damien",
  email: "damien@test.com",
  avatar: "http://placeimg.com/640/480",
  focuses: [
    {
      name: "Take Off",
      id: "1",
      completed: false,
    },
  ],
  spots: [
    {
      name: "Beach 1",
      id: "1",
      latitude: 35.59,
      longitude: 134.82,
    },
  ],
  sessions: [
    {
      memo: "Good Session",
      rating: 4,
      spot: {
        id: "1",
        name: "Beach 1",
      },
      focus: {
        id: "1",
        name: "Take Off",
      },
    },
  ],
};

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

const userHandlers = [
  graphql.query("FetchUser", (req, res, ctx) => {
    return res(
      ctx.data({
        user,
      })
    );
  }),
];

const focusHandlers = [
  graphql.query("FetchFocuses", (req, res, ctx) => {
    return res(
      ctx.data({
        focuses,
      })
    );
  }),

  graphql.mutation("AddFocus", (req, res, ctx) => {
    const body = req.body as any;
    const newFocus = { id: v4(), name: body.variables.name, completed: false };
    focuses = [...focuses, newFocus];
    return res(
      ctx.data({
        focus: newFocus,
      })
    );
  }),

  graphql.mutation("UpdateFocus", (req, res, ctx) => {
    const { id, name, completed } = req.body?.variables as any;
    const toggleCompleted = !completed;
    console.log(id, completed, toggleCompleted);
    return res(
      ctx.data({
        updateFocus: { id, name, completed: toggleCompleted },
      })
    );
  }),

  graphql.mutation("DeleteFocus", (req, res, ctx) => {
    const { id, name, completed } = req.body?.variables as any;
    return res(
      ctx.data({
        deleteFocus: { id, name, completed },
      })
    );
  }),
];

const sessionHandlers = [
  graphql.query("FetchSessions", (req, res, ctx) => {
    return res(
      ctx.data({
        sessions,
      })
    );
  }),

  graphql.mutation("AddSession", (req, res, ctx) => {
    const body = req.body?.variables as any;
    const focus = focuses.find((f) => f.id === body.focusId);
    const spot = spots.find((s) => s.id === body.spotId);
    return res(
      ctx.data({
        session: {
          id: v4(),
          memo: body.memo,
          rating: body.rating,
          focus,
          spot,
        },
      })
    );
  }),
];

const spotHandlers = [
  graphql.query("FetchSpots", (req, res, ctx) => {
    return res(
      ctx.data({
        spots,
      })
    );
  }),

  graphql.mutation("AddSpot", (req, res, ctx) => {
    const body = req.body?.variables as any;
    const newSpot = {
      id: body.id,
      name: body.name,
      latitude: 35.5,
      longitude: 136.6,
    };
    spots = [...spots, newSpot];
    return res(ctx.data(newSpot));
  }),
];

export const handlers = [
  ...authHandlers,
  ...userHandlers,
  ...focusHandlers,
  ...sessionHandlers,
  ...spotHandlers,
];
