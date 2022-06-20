///<reference types="cypress"/>
describe('my first test', function()
{
    it('switch tabs',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()

        //confirm you're on the right link

        cy.url().should('include','rahulshettyacademy')
        cy.go('back')

    })
    
    
}

)