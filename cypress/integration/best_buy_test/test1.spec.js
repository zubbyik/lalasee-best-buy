/// <reference types="Cypress"/>
//


describe("This is the first test today", ()=>{
        beforeEach(function(){
            cy.fixture("best_buy_fixtures/products.json").then((bestdata)=>{
       this.bestdata = bestdata
            })
        })

        it('This is step one',function (){
            cy.log(this.bestdata)
        })
})
