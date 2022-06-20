///<reference types="cypress"/>
import Homepage from '../pageObjects/homepage'
import ProductPage from '../pageObjects/productsPage'
describe('my first test', function()
{

    before(function () {

        cy.fixture('example').then(function(data)
        {
            this.data=data

        })
    })
    it('select checkboxes',function(){
        const homePage = new Homepage()
        const productsPage = new ProductPage()
        cy.visit(Cypress.env('url'))
        homePage.getEditbox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwowayDatabinding().should('have.value',this.data.name)
        homePage.getEntretreneur().should('be.disabled')
        homePage.getShop().click()

        cy.wait(2000)

        //to pause your test 
        //cy.pause()

        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
            });
       
        productsPage.getCheckout().click()
        var sum=0
       

        cy.get('tr td:nth-child(4) strong').each(($el,index,$list) => {
       //sum amount of product prices
       const amount=$el.text()
       var res = amount.split(" ")
       res=res[1].trim()
       cy.log(res)
        sum=Number(sum)+Number(res)
         })
       
      
        .then(function()
        {
            cy.log(sum)

       
        })
        cy.get('h3 strong').then(function(element){
            const amount=element.text()
            var res = amount.split(" ")
           var Total =res[1].trim()
       expect(Number(Total)).to.equal(Number(sum))
        })
         
        cy.get(':nth-child(5) > :nth-child(5) > .btn').click()
        cy.get('#country').type('fran')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force:true})
        cy.get("input[class*='btn btn-success btn-lg']").click()

        //to check if test pass
        cy.get("div[class*='alert alert-success alert-dismissible']").then(function(element)
        {
            const success=element.text()
            expect(success.includes("Success!")).to.be.true
        })
     
      
         })
    
    
}

)