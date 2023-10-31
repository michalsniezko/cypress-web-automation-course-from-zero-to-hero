/// <reference types="cypress" />


const { onDatepickerPage } = require("../support/page_objects/datepickerPage")
const { onFormLayoutsPage } = require("../support/page_objects/formLayoutsPage")
const { navigateTo } = require("../support/page_objects/navigationPage")
const { onSmartTablePage } = require("../support/page_objects/smartTablePage")

describe('Test with Page Objects', () => {
    beforeEach('open application', () => {
        cy.openHomePage()
    })

    it('verify navigation across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
        navigateTo.toasterPage()
    })

    it('should submit Inline and Basic form and select tomorrow date in the calendar', { browser: ['!firefox', '!edge'] }, () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Michał', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'abc123')
        navigateTo.datepickerPage()
        onDatepickerPage.selectCommonDatepickerDateFromToday(1)
        onDatepickerPage.selectDatepickerWithRangeFromToday(7, 14)
    })

    it('should add new record on smart table page, update its age and delete one of other rows', () => {
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Michał', 'Śnieżko')
        onSmartTablePage.updateAgeByFirstName('Michał', 30)
        onSmartTablePage.deleteRowByIndex(5)
    })
})
