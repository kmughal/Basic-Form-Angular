# Simple Form using Angular Directives

## Requirements

### Create an Angular app
* Starting with the boilerplate [CreateApp](src/apps/create/scripts/index.js)
Angular app, create an app that dynamically generates a form from data returned
by a (mocked/fake) API.
* Mock/Fake an API call (just using JS/Angular) which returns `src/data/form.json`
* Call this mocked API endpoint when the page initialises and generate the UI
described by the data (using the `miyagi-form` directive in
[src/create.html](create.html), including validation and a submit button.
* Submit the form to another mocked API endpoint which returns true or
false depending on whether the answer provided was correct, and display this
response in the UI.

* You do not need to style the form - the form fields can use browser default
visual styles - although it should be laid out so that it is easy to use.
