/// <reference types="cypress" />

import loginPage from "../../../support/pageobject/orangeHRM/loginPage";

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"; 

Given("in the main page of DemoBlaze", ()=> {
loginPage.go()
})

When ("sign Up as a new user", ()=>{
loginPage.click_sign()
cy.wait(3000)
})
When ("enter a valid credentials and press on Sign Up button", ()=> {
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

When ("enter a valid credentials and press on Login button", ()=> {
    loginPage.type_username_login("admin555545..")
    loginPage.type_password_login("admin")
    loginPage.click_btn_login()
})

And ('welcome user to the page', ()=>{
    loginPage.welcome_user_login()
    cy.wait(2500)
})

And('user is log out', ()=>{
    loginPage.click_lnk_logout()
})

When ("press on Log In", ()=>{
    loginPage.click_lnk_login()
    cy.wait(3000)
})

Then ("enter an invalid credentials and press on Login button", ()=> {
    loginPage.type_username_login(" ")
    loginPage.type_password_login(" ")
    loginPage.click_btn_login()
})


//Categories Actions
When("press on Phone", ()=> {
    loginPage.click_menu_phones()
})


//Add to card page
And ("select the first phone on the list", ()=>{
    loginPage.click_first_phones()
    cy.wait(1500)
})

When ('press on add to card button', ()=>{
    loginPage.btn_add_to_card()
    cy.wait(1500)
})

Then('alert verification', ()=>{
    loginPage.alert_verification()
})

When ('press on Home button', ()=>{
    loginPage.btn_home()
})

And ('select the second phone on the list', ()=>{
    loginPage.click_second_phones()
    cy.wait(1500)

})

When ('press on Cart on the menu',()=>{
    loginPage.btn_menu_add_to_card()
    cy.wait(2500)
})

And ('delete the first element from the list',()=>{
    loginPage.click_delete_first_item()
})
