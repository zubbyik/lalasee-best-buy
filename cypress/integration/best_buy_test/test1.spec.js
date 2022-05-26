/// <reference types="Cypress"/>
//


describe("This is the first test today", ()=>{
        before(()=>{
            cy.fixtures("best_buy_fixtures/products.json").then((data)=>{
        this.bestdata = data
            })
        })

        it('This is step one', ()=>{
            console.log(this.bestdata)
        })
})
