# Project3
For your final project, we are going to make a simple employee listing site.

There is an API collection of Employees available @ the following endpoint (no trailing slash): https://statenweb.mockable.io/employees

The individual resources (employees) are available at the following endpoint scheme: http://statenweb.mockable.io/employee/{ID} where {ID} is the ID from the API collection endpoint, a single example is http://statenweb.mockable.io/employee/9912   (DO NOT INCLUDE A TRAILING SLASH that will return a 404)

The collection has limited data, just the ID, Name, and Department. The individual resource endpoints have more data, including their start date, a photo, and more information.

Your assignment is to use Create React App as a starting point and create a site that does the following:

Includes the CSS from Bootstrap 5.X
When a user first loads the site, they should see a loading notification and make an AJAX (using axios.get()) request to the API Collection. When you get the response back, hide the loading notification and output the listing of employees. Be creative :-).
When a user clicks on an individual employee in the listing created in a previous state, the application should display loading notification, retrieve the employee data (using the resource endpoint scheme) and then replace the loading notification with a card containing the employee meta (start date, role, department, photo, name, etc.). See https://getbootstrap.com/docs/5.1/components/card/ as a starting point for what is meant mean by a `card.`
