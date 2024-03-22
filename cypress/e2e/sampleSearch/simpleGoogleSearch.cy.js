/// <reference types="cypress" />
import{lp} from "../../support/po/langing"

describe('example to google search app', () => {
    beforeEach('This is before each function',function() {
      cy.NavigateToMyApplication()
      cy.fixture('example').then(function(data){
        this.data=data
      })
    })
  
    it('displays two todo items by default',{tags:'@Smoke'}, function() {
      lp.getMyserchboxInput().should('be.visible').type(this.data.name)
    })
  
  })
  