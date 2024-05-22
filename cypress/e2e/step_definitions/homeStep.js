import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import homePages from "../../Locators/home"; //home steps commands to connect with homestep to home.js
import allData from '../../data/data' // date.js page connected to URL & time wait.
import 'cypress-file-upload';           //import cypress file upload 
Cypress.config('defaultCommandTimeout', 60000) // time wait
const locator = new homePages(); 
const data = new allData();

Given('Open Browser and Visit Website',()=> {
    // Enter the URL
    cy.visit(data.bikroy_url);
    });
    When('Check that bikroy logo is present', () => {
        //Check that bikroy logo
        cy.wait(2000);
        cy.xpath(locator.logo).should('be.visible')
        });
    Then('Click on search box', ()=> {
        cy.xpath(locator.search_box).should('be.visible')
        cy.xpath(locator.search_box).click()
        cy.wait(2000)
     });
    When('Enter text to search option', () => {     
       //type iphone input text
       cy.wait(2000);
       cy.xpath(locator.search_box).should('be.visible')
       cy.xpath(locator.search_box).type('iphone');
       });
    Then('Click on search option',  ()=> {              
       cy.xpath(locator.search).should('be.visible')
       cy.xpath(locator.search).click()
       cy.wait(2000)
      });
    When('Back to the previous page', () => {   
        //Back to the previous page
        cy.go('back');
        });
    When('Check that Mobiles logo is present', () => {   
        //Check mobiles text
        cy.xpath(locator.mobiles).should('be.visible');
        });
    Then('Check that Electronics logo is present',  ()=> {              
        cy.xpath(locator.electrics).should('be.visible')
        // cy.xpath(locator.search).click()
        cy.wait(2000)
        });
    Then('Check that Vehicles logo is present',  ()=> {              
        cy.xpath(locator.vehicles).should('be.visible')
        // cy.xpath(locator.search).click()
        cy.wait(2000)
        });    
    Then('Check that Property logo is present',  ()=> {              
        cy.xpath(locator.property).should('be.visible')
        // cy.xpath(locator.search).click()
        cy.wait(2000)
        });
    Then('Check that Home & Living logo is present',  ()=> {              
        cy.xpath(locator.homeLiving).should('be.visible')
        // cy.xpath(locator.search).click()
        cy.wait(2000)
        });
    Then('Check that Pets & Animals logo is present',  ()=> {              
        cy.xpath(locator.petsAnimals).should('be.visible')
        // cy.xpath(locator.search).click()
         cy.wait(2000)
        });
    