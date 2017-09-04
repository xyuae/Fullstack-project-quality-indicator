In Angular, a component is actually a directive with a template. Directives provide functionaility and can transform the DOM. There are two types of directives: structural and attribute. Structural directives modify layout by altering elements in the DOM. Attribute directives change the behavior or appearance of an existing DOM element. Since directives do not have a template, they are something you can create with the intent of applying them to an exisitng element, or in some cases a template element to change that element in some way.

- Template: HTML with additonal markup
- Directives: extend HTML with custom attributes and elements
- Model: The data shown to the user in the view and within which the user interacts
- Scope" context where the model is stroed so that controllers, directives and expressions can access it
- Expressions: access variables and functions from the Scope
- Compiler: parses the template and instantiates directives and Expressions
- Filter: formats the value of an expression for display to the user
- View: what the user sees
- Data Binding: sync data betwen the model and the view
- Controller: the business logic behind views
- Dependency Injection: Createws and wires objects and functions
- Injector: dependency injection container
- Module: a container for the different parts of an app including controllers, services, filters, directives which configures the Injector
- Service: reusable business logic independent of views

## Example of Angular
* create a dynamic application that works in all modern browsers
* Use data binding to wire up your data model to your views
* Create and run unit tests, with Karma
* Create and run end-to-end tests, with Protractor
* Move application logic out of the template and into components and controllers
* Get data from a server using Angular JS services
* Apply animations to your application, using the ngAnimate module
* Structure your angularJS applications in a modular way that scales well for larger projects
* Identify resources for learning more about Angular JS

## Tools
- Bower: client-side code package manager
- Http-Server: simple local static web server
- Karma: unit test runner
- Protractor: end to end test runner

## Step-0
The HTML page that displays nothing here yet was constructed with the HTML code shown below. The code contains some key Angular JS elements that we will need as we progress.
np-app attribute
`<html ng-app>`. The ng-app attribute represents an angularJS directive, named ngApp(AngularJS uses kebab-case for its custom attributes and camelCase for the corresponding directives which implememnt them). This directive is used to flag the HTML element that angularJS should consider to be the root element of our application. This gives applicaiton developers the freedom to tell AngularJS if the entire HTML page or only a portion of it should be treated as the AngularJS applicaiton.
For more info on ngApp. Check out the API reference.

angular.js script tag:
<script src="bower_components/angular/angular.js"></script>
The code downlaods the angular.js script which registers a callback taht will be executed by the browser when the containing HMTL page is ful downloaded. Whenthe callback is executed. AngualrJS looks for the ngAPP direcive.

Double0curly binding with an expression:
Nothing here {{'yet' + '!'}}
This line demonstrates two core features of AngularjS's templating capabilities:
- A binidng, denoted by double-curlies
- A simple expression used in this binding
The binding tells angularJS that it should evaluate an expression and insert the result into the DOM in place of the binding. As we will seee in the next steps, rather than a one-time insert, a binding will result in efficient continuous updates whenever the result of the expression evaluation changes.

AngularJS expressions are JavaScript-like code snippets that are evauated by AngularJS in teh contxt of the current model scope, rather than wihtin the scope of the global context window.

Bootstrappng AngularJS applications
Bootstrapping AngularJS applications automatically using the npApp directive is very easy and suitable for most cases. In advanced cases, such as when using script loaders, you can use the imperative/manual way to bootstrap the application.
There are 3 important things that heppen during the bootstrap pahse:
1. The injector that will be used for dependency injection is created.
2. The injector will then create the root scope that will
