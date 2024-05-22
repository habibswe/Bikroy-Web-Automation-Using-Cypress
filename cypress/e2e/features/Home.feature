Feature: Open Bikroy End to End

Background: Open Website With Valid url
    Given Open Browser and Visit Website
    When Check that bikroy logo is present
    
     
Scenario: Verify that search option is available & search anything in search box
    Then Click on search box
    When Enter text to search option
    Then Click on search option
    When Back to the previous page

# Scenario: Verify that browse items by category is visible
#       When Check that Mobiles logo is present
#       Then Check that Electronics logo is present
#       Then Check that Vehicles logo is present
#       Then Check that Property logo is present
#       Then Check that Home & Living logo is present
#       Then Check that Pets & Animals logo is present
#       Then Check that Men's Fashion & Grooming logo is present
#       Then Check that Women's Fashion & Beauty logo is present
#       Then Check that Hobbies,Sports & kids logo is present
#       Then Check that business & industry logo is present
#       Then Check that education logo is present
#       Then Check that Essentials logo is present
#       Then Check that agriculture logo is present
#       Then Check that Jobs logo is present
#       Then Check that Services logo is present
#       Then Check that Overseas Jobs logo is present



# Scenario: Verify The Job delete Confirmation
#     When open admin panel
#     Then Go to job board
#     Then Click the job title
#     Then Delete this job
#     Then Confirm delete