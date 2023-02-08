/// <reference types="cypress" />

const environment = 'https://test-snake-river.abaconnectemr.com/login'

describe ('Connect Tests', () => {
    beforeEach(() => {
        cy.visit (environment)
    })

    const email = 'super_admin_user@yopmail.com'

    it ('Should sign in to Connect as a Super Admin.', () => {
        cy.get('[data-testid="username"]').type(`${email}`)
        cy.get('[data-testid="password"]').type('Welcome123!')
        cy.get('[data-testid="login-submit"]').click()
    })

    context ('Having logged in to Connect', () => {
        beforeEach (() => {
            cy.get('[data-testid="username"]').type(`${email}`)
            cy.get('[data-testid="password"]').type('Welcome123!')
            cy.get('[data-testid="login-submit"]').click()
            cy.wait(8000)
        })

        it ('Open Dashboard', () => {
            cy.get('.sidebarMenuInn > :nth-child(2) > .MuiListItemText-root > .MuiTypography-root').click()
        })

        it ('Open Action Items', () => {
            cy.get('.MuiList-root > .MuiListItemButton-root > .MuiListItemText-root > .MuiTypography-root').click()  
        })

        it ('Open Team Page', () => {
            cy.get('.sidebarMenuInn > :nth-child(4) > .MuiListItemText-root > .MuiTypography-root').click()
        })

        it ('Open Clients Page', () => {
            cy.get('.sidebarMenuInn > :nth-child(5) > .MuiListItemText-root > .MuiTypography-root').click()
        })

        it ('Open Organizations Page', () => {
            cy.get('.sidebarMenu > :nth-child(2) > .MuiListItemText-root > .MuiTypography-root').click()
        })

        it ('Open Regions Page', () => {
            cy.get(':nth-child(3) > .MuiListItemText-root > .MuiTypography-root').click()
        })

        it ('Open Locations Page', () => {
            cy.get('.sidebarMenu > :nth-child(4) > .MuiListItemText-root > .MuiTypography-root').click()
        })

        it ('Open Services Page', () => {
            cy.get('.sidebarMenu > :nth-child(5)').click()
        })

        it ('Open Admin Dashboard Page', () => {
            cy.get('.sidebarMenu > :nth-child(6)').click()
        })

        it ('Open Funding Sources Page', () => {
            cy.get('.sidebarMenu > :nth-child(7)').click() 
        })

        it ('Open Qualifications Page', () => {
            cy.get('.sidebarMenu > :nth-child(8)').click() 
        })

        it ('Open Role Permissions Page', () => {
            cy.get('.sidebarMenu > :nth-child(9)').click()
        })
    })
})

// it ('Should open the Connect app', () => {
//     cy.visit ('https://test-snake-river.abaconnectemr.com/login')
// })

