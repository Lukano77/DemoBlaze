class LoginPage {
    //Mapeo de elementos de la pagina para Login
    elementos = {
        lnk_sign: () => cy.get('#signin2'),
        modal_signup:()=>cy.get('#signInModalLabel'),
        txt_userName: () => cy.get('#sign-username'),
        txt_password: () => cy.get('#sign-password'),
        btn_sign: () => cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
        label_dashboard: () => cy.get('.oxd-topbar-header-breadcrumb > .oxd-text'),
        btn_close: ()=> cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary'),
        lnk_login: ()=>cy.get('#login2'),
        modal_login:()=>cy.get('#logInModalLabel'),
        txt_username_login:()=>cy.get('#loginusername'),
        txt_password_login:()=>cy.get('#loginpassword'),
        btn_login:()=> cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
        welcome_user:()=> cy.get('#nameofuser'),
        lnk_logout:()=>cy.get('#logout2'),
        lnk_phone:()=> cy.xpath('//a[contains(.,"Phones")]').should('be.visible'),
        lnk_first_phone: ()=>cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch'),
        add_to_card:()=>cy.get('.col-sm-12 > .btn')

    

    }

    //Action on Main Menu - Login - Logout - SignIn - Sign Out
    click_sign(){
        this.elementos.lnk_sign().click()
    }

    open_modal_signup(){
        this.elementos.modal_signup().should('contains.text','Sign up')
    }
    
    type_username(name){
        this.elementos.txt_userName().type(name)
    }

    type_password(password){
        this.elementos.txt_password().type(password)
    }

    click_btn_sign(){
        this.elementos.btn_sign().click()
    }

    click_btn_close(){
        this.elementos.btn_close().click()
    }

    click_lnk_login(){
        this.elementos.lnk_login().click()
    }

    open_modal_login(){
        this.elementos.modal_login().should('contains.text','Log in')
    }

    type_username_login(name){
        this.elementos.txt_username_login().type(name)
    }

    type_password_login(password){
        this.elementos.txt_password_login().type(password)
    }

    click_btn_login(){
        this.elementos.btn_login().click()
    }

    welcome_user_login(){
        this.elementos.welcome_user().should('contains.text', "Welcome admin555545..")
    }

    click_lnk_logout(){
        this.elementos.lnk_logout().click()
    }

    //Access to Categories. I could used a different place on Page Object like new folder called "Categories" but I had a problems there on features
    //So I decied to use the same page to get elements.
    //Phones - Laptop - Monitors

    click_menu_phones(){
        this.elementos.lnk_phone().click({force:true})
    }

    click_first_phones(){
        this.elementos.lnk_first_phone().click()
    }

    //Card Section same to before explaination. To refactor this will be on new class in Page Object and new folder to have better clean code
    btn_add_to_card(){
        this.elementos.add_to_card().click()
    }

   alert_verification(){
    cy.on('window:alert',(t)=>{
        //assertions
        expect(t).to.contains('Product added.');
     })
    }

    go(){
        cy.visit('https://www.demoblaze.com/')
        cy.wait(2500)
    }

    }

module.exports = new LoginPage();