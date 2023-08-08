class DashboardPage {

    elementos = {
        lbl_welcome: () => cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
    }

    welcome(){
        this.elementos.lbl_welcome().should('contains.text','Dashboard')
    }

}

module.exports = new DashboardPage()