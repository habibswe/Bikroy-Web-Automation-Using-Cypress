import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import mobilesPages from "../../Locators/mobiles"; //mobiles steps commands to connect with mobilesSteps to mobiles.js
import allData from '../../data/data' // date.js page connected to URL & time wait.
import 'cypress-file-upload';           //import cypress file upload 
Cypress.config('defaultCommandTimeout', 60000) // time wait
const locator = new mobilesPages(); 
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
        // cy.xpath(locator.mobiles).click()
        });
    Then('Check that Electronics logo is present',  ()=> {              
        cy.xpath(locator.electrics).should('be.visible')
        // cy.xpath(locator.electrics).click()
        cy.wait(2000)
        });
    Then('Check that Vehicles logo is present',  ()=> {              
        cy.xpath(locator.vehicles).should('be.visible')
        // cy.xpath(locator.vehicles).click()
        cy.wait(2000)
        });    
    Then('Check that Property logo is present',  ()=> {              
        cy.xpath(locator.property).should('be.visible')
        // cy.xpath(locator.property).click()
        cy.wait(2000)
        });
    Then('Check that Home & Living logo is present',  ()=> {              
        cy.xpath(locator.homeLiving).should('be.visible')
        // cy.xpath(locator.homeLiving).click()
        cy.wait(2000)
        });
    Then('Check that Pets & Animals logo is present',  ()=> {              
        cy.xpath(locator.petsAnimals).should('be.visible')
        // cy.xpath(locator.petsAnimals).click()
        cy.wait(2000)
        });
    Then('Check that Mens Fashion & Grooming logo is present',  ()=> {              
        cy.xpath(locator.mensFashion).should('be.visible')
        // cy.xpath(locator.mensFashion).click()
         cy.wait(2000)
        });
    Then('Check that Womens Fashion & Beauty logo is present',  ()=> {              
        cy.xpath(locator.womensFashion).should('be.visible')
        // cy.xpath(locator.womensFashion).click()
        cy.wait(2000)
        });   
    Then('Check that Hobbies,Sports & kids logo is present',  ()=> {              
        cy.xpath(locator.hobbiesSportsGrooming).should('be.visible')
        // cy.xpath(locator.hobbiesSportsGrooming).click()
        cy.wait(2000)
        }); 
    Then('Check that business & industry logo is present',  ()=> {              
        cy.xpath(locator.businessIndustry).should('be.visible')
        // cy.xpath(locator.businessIndustry).click()
        cy.wait(2000)
        }); 
    Then('Check that education logo is present',  ()=> {              
        cy.xpath(locator.education).should('be.visible')
                // cy.xpath(locator.education).click()
                cy.wait(2000)
                }); 
    Then('Check that Essentials logo is present',  ()=> {              
        cy.xpath(locator.essentials).should('be.visible')
        // cy.xpath(locator.essentials).click()
        cy.wait(2000)
                    }); 
    Then('Check that agriculture logo is present',  ()=> {              
        cy.xpath(locator.agriculture).should('be.visible')
        // cy.xpath(locator.agriculture).click()
        cy.wait(2000)
        }); 
    Then('Check that Jobs logo is present',  ()=> {              
        cy.xpath(locator.jobs).should('be.visible')
        // cy.xpath(locator.jobs).click()
        cy.wait(2000)
        }); 
    Then('Check that Services logo is present',  ()=> {              
        cy.xpath(locator.services).should('be.visible')
        // cy.xpath(locator.services).click()
        cy.wait(2000)
        }); 
    Then('Check that Overseas Jobs logo is present',  ()=> {              
        cy.xpath(locator.overseas).should('be.visible')
        // cy.xpath(locator.overseas).click()
        cy.wait(2000)
        }); 
