///<reference types="cypress"/>
///<reference types="cypress-iframe"/>
import "cypress-iframe"
describe('frame test', function()
{
    it('select checkboxes',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(2).click()
        cy.iframe().find("h1[class*='pricing-title text-white ls-1']").should('have.length',2)

    })
    
    
}

)