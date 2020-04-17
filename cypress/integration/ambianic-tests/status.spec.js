context('Status', () => {
  it('Looks at app version in about page ', () => {
    const versionRegex = /(\d{1,2}(\.|\s)){3}/;

    cy.visit('/about')

    cy.get('#ui-version')
      .contains(versionRegex)
  })
})
