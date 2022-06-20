class logingpage {
    getemail() {
       return cy.get("input[name*='Staff ID']")
    }

    getPassword() {
        return cy.get(':nth-child(2) > .input-group > .form-control')
    }
    loginbtn() {
        return cy.get('.btn')
    }

}
export default logingpage;