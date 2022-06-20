///<reference types="cypress"/>
describe('my first test', function()
{
    it('select checkboxes',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //check and validate check
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

        //uncheck and verify
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        //select multiple checkbox
        cy.get('input[type="checkBox"]').check(['option1','option3'])



        //static dropdown and assertion
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')
        
        //dynamic dropdown
        cy.get('#autocomplete').type('ind')

        //radio  buttons
        cy.get('[for="radio2"] > .radioButton').check().should('be.checked')
    })
    
    
}

)