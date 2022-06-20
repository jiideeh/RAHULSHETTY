///<reference types="cypress"/>
describe('second test case',function(){
    it('reusing an element multiple times',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        //store the locator as a variable
        cy.get('.products').as('productlocator')

        cy.get('.product:visible').should('have.length',4)

        //another way to verify it identifies the 4 element
        cy.get('@productlocator').find('.product').should('have.length',4)

        //click on "ADD TO CART"
        cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click()
    })
})