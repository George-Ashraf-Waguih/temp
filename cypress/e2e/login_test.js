/// <reference types="cypress"/>

import LoginPage from '../support/pageObjects/LoginPage_PO'

describe('Login Tests', () => {

    const loginPage = new LoginPage()
    beforeEach(()=>{
        cy.visit('/Login-Portal/')

        cy.fixture('loginCredentials').as('credentials')
    })

    it('Failed Login', function() {
        loginPage.login(this.credentials.username,this.credentials.password)
        
        cy.on('window:alert',(alertText)=>{
            expect(alertText).to.contain('validation failed')
            // cy.log(alertText)
            return true
            
        })
    });
    
});