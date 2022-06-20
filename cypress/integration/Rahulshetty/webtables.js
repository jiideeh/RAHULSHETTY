///<reference types="cypress"/>
describe('my first test', function()
{
    it('handling web tables',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.wait(2000)
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text=$el.text()
            if(text.includes("Python")){
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
                {
                   const priceText=price.text()
                   expect(priceText).to.equal('25')
                })

            }

        })

        //hover over elements
        //cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')


        //open tab
        cy.get('#opentab').then(function(el){
            const url=el.prop('href')
            cy.visit(url)

        })

    })
    
    
})