export class myLandingPage{
    getMyserchboxInput(){
        return cy.get('textarea[title="Search"]')
    }
}
export const lp=new myLandingPage()