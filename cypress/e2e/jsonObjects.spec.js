/// <reference types="cypress" />

describe('JSON objects', () => {
    it('JSON objects', () => {
        cy.openHomePage()

        const simpleObject = { "key": "value", "key2": "value2" }

        const simpleArrayOfValues = ["one", "two", "three"]

        const arrayOfObjects = [{ 'key': 'value' }, { 'key2': 'value2' }, { 'key3': 'value3' }]

        const typesOfData = { "string": "this is a string", "number": 10 }

        const mix = {
            "FirstName": "Michał",
            "LastName": "Śnieżko",
            "Age": 28,
            "Students": [
                {
                    "FirstName": "Sara",
                    "LastName": "Conor"
                },
                {
                    "FirstName": "Bruce",
                    "LastName": "Willis"
                },
            ]
        }

        console.log(simpleObject.key2)
        console.log(simpleObject['key2'])
        console.log(simpleArrayOfValues[1])
        console.log(arrayOfObjects[2].key3)
        console.log(mix.Students[1].LastName)

    })
})