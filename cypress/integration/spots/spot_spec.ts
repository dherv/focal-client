// import cy from 'cypress';

describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('/spots')
    cy.contains('Beach')
    // add a spot name
    // click add
    // should appear in the list
  })
})

export {}