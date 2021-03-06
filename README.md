# Project Overview

This project focuses on implementing Jasmine tests for the feedreader application.

## What is Jasmine?

According to the [Jasmine github site](https://jasmine.github.io/ "jasmine.github.io"), Jasmine is "a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests."

## Project Requirements

### Meets the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. **COMPLETE -** Take the JavaScript Testing [course](https://www.udacity.com/course/ud549) 

2. **COMPLETE -** Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader). 
3. **COMPLETE -** Review the functionality of the application within your browser. 
4. **COMPLETE -** Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works. 
5. **COMPLETE -** Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io). 
6. **COMPLETE -** Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application. 
7. **COMPLETE -** Return the `allFeeds` variable to a passing state. 
8. **COMPLETE -** Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty. 
9. **COMPLETE -** Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty. 
10. **COMPLETE -** Write a new test suite named `"The menu"`. 
11. **COMPLETE -** Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element. 
12. **COMPLETE -** Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. **COMPLETE -** Write a test suite named `"Initial Entries"`.
14. **COMPLETE -** Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. **COMPLETE -** Write a test suite named `"New Feed Selection"`.
16. **COMPLETE -** Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. **COMPLETE -** No test should be dependent on the results of another.
18. **COMPLETE -** Callbacks should be used to ensure that feeds are loaded before they are tested.
19. **COMPLETE -** Implement error handling for undefined variables and out-of-bound array access.
20. **COMPLETE -** When complete - all of your tests should pass.
21. **COMPLETE -** Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.

## Test directory

#### RSS Feeds
1. has all feeds defined
2. has a URL that is defined and not empty for each feed
3. have a name that is defined and not empty
#### The menu
1. has a menu that is hidden by default
2. changes visibility when menu icon is clicked
#### Initial Entries
1. has at least one entry
2. has a URL for each entry - *added test to check that each feed entry has a URL*
3. has a title for each entry - *added test to check that each feed entry has a title*
#### New Feed Selection
1. changes feed entries when a new feed is loaded

### Instructions
  - Download the repository and run index.html in your browser
  - Scroll to the bottom of the screen to view the tests
  - Successful tests  are green and look like this:  ![Successful test](/img/All-tests-passed.png "All tests passed")
  - Failed tests are red and look like this:  ![Failed test](/img/Example-of-failed-test.png "A failed test")
  

## Author

  - Beth Hurter

## Acknowledgments

  - Udacity provided the actual feedreader application.  This project creates the Jasmine tests.

