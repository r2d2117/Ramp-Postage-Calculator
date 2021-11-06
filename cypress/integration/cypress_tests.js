describe('My First Test', () => {
it('Does not do much!', () => {
    cy.visit('localhost:4000')
})
})

describe('My second test', () => {
    it('Should return Fail since the length is too long', () => {
        cy.request('GET', 'http://localhost:4000/metric/1000/5/11').its('body').should('include', 'Fail! Envelope is too big and not allowed.')})});

describe('My third test', () => {
    it('Should return Fail Invalid Units', () => {
        cy.request('GET', 'http://localhost:4000/metriccc/1000/5/11').its('body').should('include', 'Fail! Invalid units. Please specify either units as either imperial or metric')})});





