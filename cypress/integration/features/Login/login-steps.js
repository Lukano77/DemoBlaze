/// <reference types="cypress" />

import loginPage from "../../../support/pageobject/orangeHRM/loginPage";
import dashboardPage from "../../../support/pageobject/orangeHRM/dashboardPage";

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"; 

Given("in the main page of DemoBlaze", ()=> {
loginPage.go()
})

When ("sign Up as a new user", ()=>{
loginPage.click_sign()
cy.wait(3000)
})
Then ("enter a valid credentials and press on Sign Up button", ()=> {
    loginPage.type_username("admin555545..")
    loginPage.type_password("admin")
    loginPage.click_btn_sign()
})

And ("press on Cancel button", ()=>{
    loginPage.click_btn_close()
})

When ("press on Log In", ()=>{
    loginPage.click_lnk_login()
    cy.wait(3000)
})

Then ("enter a valid credentials and press on Login button", ()=> {
    loginPage.type_username_login("admin555545..")
    loginPage.type_password_login("admin")
    loginPage.click_btn_login()
})

And ('welcome user to the page', ()=>{
    loginPage.welcome_user_login()
})

And('user is log out', ()=>{
    loginPage.click_lnk_logout()
})

When ("press on Log In", ()=>{
    loginPage.click_lnk_login()
    cy.wait(3000)
})

Then ("enter an valid credentials and press on Login button", ()=> {
    loginPage.type_username_login("")
    loginPage.type_password_login("")
    loginPage.click_btn_login()
})
