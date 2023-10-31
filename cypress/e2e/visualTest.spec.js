describe('visual test', () => {
    it('should test snapshot', () => {
        cy.visit('/')

        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').then(usingTheGridForm => {
            cy.wrap(usingTheGridForm).toMatchImageSnapshot()
        })

    })
})