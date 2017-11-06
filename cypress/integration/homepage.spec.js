describe('Testing if the page loads', () =>{
    
    beforeEach(() =>{
        cy.visit('http://www.qualityworkscg.com/')
    })

    it('Checking if the page loads properly', () =>{
        cy.title()
        .should('eq','QualityWorks Consulting Group')
        .get('.menu-navigation-bar-container')
        .should('be.visible')
        .get('h1.section-title.text-')
        .contains(' Your Business Deserves — ')



    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
})