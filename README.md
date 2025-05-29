# EvaluationTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.

## Development server

I developed a small Angular 17-based e-commerce application that includes authentication, product management, and data visualization.
Below are the main features and technical highlights:

Created a login page where users can log in using a name and password.

User credentials are stored using localStorage for session persistence.

Upon successful login, users are redirected to the product listing page.

Product Module
Built a Product Module that:

Fetches products from the public API https://fakestoreapi.com.

Displays product listings with details.

Implements Add/Edit functionality for products.

Since fakestoreapi is a mock API, changes appear successful in the network tab but don't persist.

Features:

View product details.

Form validations using Reactive Forms.

API interaction with RxJS operators.

Used custom and built-in pipes (e.g., text truncation, currency formatting).

 Items Module
Created a separate Items Module for displaying tabular data with enhanced UI using PrimeNG components. use same api

Features:

Dynamic table with:

Sorting

Filtering (by category)

Searching

Pagination

Export to CSV

Used PrimeNG components:

p-table

p-dropdown

p-toast

p-dialog (modal)
i used new features like
Signals and input()/output() signal decorators instead of traditional @Input()/@Output().

Standalone components and Standalone APIs.

Server-side rendering (SSR).

Lazy-loaded modules and lazy-loaded standalone components for performance optimization.

Applied:

Dependency Injection.

Custom Pipes and Angular Built-in Pipes.

RxJS for asynchronous and reactive programming.

Strong typing via Interfaces.



