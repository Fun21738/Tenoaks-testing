describe('Tenaoks groups', () => {
  beforeEach(() => {
    cy.visit('https://tenoaks.jitudevops.com/')

  })

  // it('find Thh logo', () => {
  //   cy.get('.light-scheme-logo').should("be.visible")
  //   cy.request('https://tenoaks.jitudevops.com/wp-content/uploads/2020/09/logo-ten-oaks-gold-93x110-1.png').then((response) => {
  //     expect(response.status).to.equal(200)
  //   })
  // })

  // it('find Thh logo', () => {
  //   cy.get('.light-scheme-logo').should('be.visible')

  //   try {
  //     cy.request('https://tenoaks.jitudevops.com/wp-content/uploads/2020/09/logo-ten-oaks-gold-93x110-1.png').then((response) => {
  //       expect(response.status).to.equal(200)
  //     })
  //   } catch (err) {
  //     // handle error here
  //     cy.log(`Error: ${err.message}`)
  //     expect.fail(err.message)
  //   }
  // })



  // it('handles unhandled promise rejection errors', () => {
  //   cy.visit('https://tenoaks.jitudevops.com/')
  //   cy.intercept('GET', 'https://boards-api.greenhouse.io/v1/boards/tenoaksmanagementllc/jobs?content=true', {})
  //     .as('getJobs')
  //   cy.wait('@getJobs').then(() => {
  //     try {
  //       // code that triggers unhandled promise rejection error
  //     } catch (err) {
  //       // handle the error here
  //       expect.fail(err.message)
  //     }
  //   })

  it.only('navbar links', () => {
    cy.get('#header-inner-wrap')
    .find('a')
    .should('have.length', 13)
    .each(($link) => {
    cy.wrap($link).should('have.attr', 'href').should('not.be.empty')
     cy.wrap($link).click()
  })

    })




  })






