///<reference types="cypress"/>
describe('my first test', function()
{
    it('handling visible & invisible element',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')

        



    })
    
    
}

)