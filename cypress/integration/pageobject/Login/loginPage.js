class LoginPage {
    //Mapeo de elementos de la pagina para Login
    elementos = {
        lnk_sign: () => cy.get('#signin2'),
        txt_userName: () => cy.get('#sign-username'),
        txt_password: () => cy.get('#sign-password'),
        btn_sign: () => cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
        label_dashboard: () => cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
    }

    //Acciones sobre la pagina de login
    click_sign(){
        this.elementos.lnk_sign().click()
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

    dashboard_verification(){
        this.elementos.label_dashboard()
    }
    go(){
        cy.visit('https://www.demoblaze.com/')
        cy.wait(1500)
    }
}

module.exports = new LoginPage();