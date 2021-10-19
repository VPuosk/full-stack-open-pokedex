
describe('Venusaur test', function() {
  it('venusaur exists', function() {
    cy.visit('http://localhost:5000')
    cy.contains('venusaur')
  })
  it('venusaur page exists', function() {
    cy.visit('http://localhost:5000')
    cy.contains('venusaur').click()
    cy.contains('chlorophyll')
    cy.contains('overgrow')
  })
})