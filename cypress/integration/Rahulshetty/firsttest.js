///<reference types="cypress"/>
describe('my first test', function()
{
    it('search product',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)

        //another way to verify it identifies the 4 element
        cy.get('.products').find('.product').should('have.length',4)

        //click on "ADD TO CART"
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        //assertion of text
        cy.get('.brand').should('have.text','GREENKART')
        
//printing out a text by storing a variable with a promise
        cy.get('.brand').then(function(logo){
           cy.log(logo.text())

        })
       // cy.log(logo.text())
    
        
     
    })
    
    
}

)