import { call, put } from 'redux-saga/effects';
import { fetchSpots, postSpot } from './spotApi';
import { handleAddSpot, handleGetSpots } from './spotSaga';

describe('fetch spots', () => {
  test("should call fetchspot and add the spots to the reducer", () => {
    const iterator = handleGetSpots()
    expect(iterator.next().value).toStrictEqual(call(fetchSpots))
    // payload is undefined here so toEqual will suffice
    expect(iterator.next().value).toEqual(put({type: "spots/setSpots"}))
    expect(iterator.next()).toEqual({done: true})
  })
  
  test("should dispatch an error", () => {
    const iterator = handleGetSpots()
    iterator.next()
    const error = {message: "failed to fetch spots"}
    expect(iterator.throw(error).value).toStrictEqual(put({type: "spots/spotRequestFailed", payload: "failed to fetch spots"}))
  })
})

describe('add spot', () => {
  test("should call fetchspot and add the spots to the reducer", () => {
    const action =  {payload: 'test'}
    const iterator = handleAddSpot(action)
    expect(iterator.next().value).toStrictEqual(call(postSpot, action.payload))
    // payload is undefined here so toEqual will suffice
    expect(iterator.next().value).toEqual(put({type: "spots/addSpot"}))
    expect(iterator.next()).toEqual({done: true})
  })

  test("should dispatch an error", () => {
    const action =  {payload: 'test'}
    const iterator = handleAddSpot(action)
    iterator.next()
    const error = {message: "failed to add a spot"}
    expect(iterator.throw(error).value).toStrictEqual(put({type: "spots/spotPostFailed", payload: "failed to add a spot"}))
  })
})
