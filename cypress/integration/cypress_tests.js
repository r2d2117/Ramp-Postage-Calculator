describe('My First Test', () => {
it('Does not do much!', () => {
    cy.visit('localhost:4000')
})
})

//invalid units

describe('My second test', () => {
    it('Should return Fail Invalid Units', () => {
        cy.request('GET', 'http://localhost:4000/metriccc/150/5/11').its('body').should('include', 'Fail! Invalid units. Please specify either units as either imperial or metric')})});

describe('My third test', () => {
    it('Should return Fail Invalid Units', () => {
        cy.request('GET', 'http://localhost:4000/imperiall/150/5/11').its('body').should('include', 'Fail! Invalid units. Please specify either units as either imperial or metric')})});


//too big dimensions

describe('My fourth test', () => {
    it('Should return Fail since the length is too big', () => {
        cy.request('GET', 'http://localhost:4000/metric/1000/5/11').its('body').should('include', 'Fail! Envelope is too big and not allowed.')})});

describe('My fifth test', () => {
    it('Should return Fail since the width is too big', () => {
        cy.request('GET', 'http://localhost:4000/metric/150/200/11').its('body').should('include', 'Fail! Envelope is too big and not allowed.')})});

describe('My sixth test', () => {
    it('Should return Fail since the weight is too big', () => {
        cy.request('GET', 'http://localhost:4000/metric/150/5/900').its('body').should('include', 'Fail! Envelope is too big and not allowed.')})});


//invalid dimensions

describe('My seventh test', () => {
    it('Should return Fail Invalid input', () => {
        cy.request('GET', 'http://localhost:4000/metric/a/5/11').its('body').should('include', 'Fail! The length, width, and weight must be numeric values')})});

describe('My eighth test', () => {
    it('Should return Fail Invalid input', () => {
        cy.request('GET', 'http://localhost:4000/metric/150/a/11').its('body').should('include', 'Fail! The length, width, and weight must be numeric values')})});

describe('My ninth test', () => {
    it('Should return Fail Invalid input', () => {
        cy.request('GET', 'http://localhost:4000/metric/150/5/a').its('body').should('include', 'Fail! The length, width, and weight must be numeric values')})});

//working examples

describe('My tenth test', () => {
    it('Should return 0.49', () => {
        cy.request('GET', 'http://localhost:4000/metric/150/91/11').its('body').should('include', '0.49')})});

describe('My eleventh test', () => {
    it('Should return 0.80', () => {
        cy.request('GET', 'http://localhost:4000/metric/150/91/49').its('body').should('include', '0.80')})});

describe('My 12th test', () => {
    it('Should return 0.98', () => {
        cy.request('GET', 'http://localhost:4000/metric/300/91/49').its('body').should('include', '0.98')})});

describe('My 13th test', () => {
    it('Should return 0.98', () => {
        cy.request('GET', 'http://localhost:4000/metric/1000/5/110').its('body').should('include', '2.40')})});
