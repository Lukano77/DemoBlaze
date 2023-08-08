/// <reference types="cypress" />

import loginPage from "../../pageobject/Login/loginPage";
import dashboardPage from "../../../support/pageobject/orangeHRM/dashboardPage";

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"; 

Given("in the main page of DemoBlaze", ()=> {
loginPage.go()
})

When ("sign Up as a new user", ()=>{
loginPage.click_sign()
loginPage.wait(1500)
})

Then ("enter a valid credentials and press on Login button", ()=> {
    loginPage.type_username("Admin")
    loginPage.type_password("admin123")
    loginPage.click_btn_sign()
})

Then("Then visualizo el nombre correcto", ()=>{
    dashboardPage.welcome()
})

And ('ingreso el nombre de usuario {string}', (user_name)=>{
loginPage.type_username(user_name)
})

Then('ingreso el password del usuario {string}', (user_password)=>{
    loginPage.type_password(user_password)
})
    
When('hago cuando click en el boton Login', ()=>{
loginPage.click_login()
cy.wait(2000)
})

Then('visualizo el mensaje de Dashboard', ()=>{
    dashboardPage.welcome()
})


