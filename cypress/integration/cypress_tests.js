describe('API liveness test', () => {
it('Check to see if API is availablej!', () => {
    cy.request('GET', 'http://localhost:4000').then((response) =>
        expect(response.status).to.eq(200))
    })
})

describe('Not enough url parameters', () => {
    it('Should return 404', () => {
        cy.request({
            url: 'http://localhost:4000/metric/10/10',
            followRedirect: false,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(404)
            expect(response.redirectedToUrl).to.eq(undefined)
        })
    })
})

//invalid units

describe('Invalid Unit Specification test #1', () => {
    it('Should return Fail Invalid Units', () => {
        cy.request('GET', 'http://localhost:4000/metriccc/150/5/11').its('body').should('include', 'Fail! Invalid units. Please specify either units as either imperial or metric')})});

describe('Invalid Unit Specification test #2', () => {
    it('Should return Fail Invalid Units', () => {
        cy.request('GET', 'http://localhost:4000/imperiall/150/5/11').its('body').should('include', 'Fail! Invalid units. Please specify either units as either imperial or metric')})});


//too big dimensions

describe('Length too big and not allowed', () => {
    it('Should return Fail since the length is too big', () => {
        cy.request('GET', 'http://localhost:4000/metric/1000/5/11').its('body').should('include', 'Fail! Envelope is too big and not allowed.')})});

describe('Width too big and not allowed', () => {
    it('Should return Fail since the width is too big', () => {
        cy.request('GET', 'http://localhost:4000/metric/150/271/11').its('body').should('include', 'Fail! Envelope is too big and not allowed.')})});

describe('Weight too big and not allowed', () => {
    it('Should return Fail since the weight is too big', () => {
        cy.request('GET', 'http://localhost:4000/metric/150/5/900').its('body').should('include', 'Fail! Envelope is too big and not allowed.')})});


//invalid dimensions

describe('Invalid input dimensions test #1', () => {
    it('Should return Fail Invalid input', () => {
        cy.request('GET', 'http://localhost:4000/metric/a/5/11').its('body').should('include', 'Fail! The length, width, and weight must be numeric values')})});

describe('Invalid input dimensions test #2', () => {
    it('Should return Fail Invalid input', () => {
        cy.request('GET', 'http://localhost:4000/metric/150/a/11').its('body').should('include', 'Fail! The length, width, and weight must be numeric values')})});

describe('Invalid input dimensions test #3', () => {
    it('Should return Fail Invalid input', () => {
        cy.request('GET', 'http://localhost:4000/metric/150/5/a').its('body').should('include', 'Fail! The length, width, and weight must be numeric values')})});

//working examples

describe('Correct return value for properly formed API call #1', () => {
    it('Should return 0.49', () => {
        cy.request('GET', 'http://localhost:4000/metric/150/91/11').its('body').should('include', '0.49')})});

describe('Correct return value for properly formed API call #2', () => {
    it('Should return 0.80', () => {
        cy.request('GET', 'http://localhost:4000/metric/150/91/49').its('body').should('include', '0.80')})});

describe('Correct return value for properly formed API call #3', () => {
    it('Should return 0.98', () => {
        cy.request('GET', 'http://localhost:4000/metric/300/91/49').its('body').should('include', '0.98')})});

describe('Coorect return value for properly formed API call #4', () => {
    it('Should return 2.40', () => {
        cy.request('GET', 'http://localhost:4000/metric/370/5/110').its('body').should('include', '2.40')})});
