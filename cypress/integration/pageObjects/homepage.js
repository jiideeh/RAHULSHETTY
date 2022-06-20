class Homepage {
    getShop() {
       return cy.get("a[href*='/angularpractice/shop']")
        
    }

}
export default Homepage;