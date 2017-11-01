# project2

Crowdsourced convenience app for people who are always on the road.

Current structure:
```
.
├── config
|     └── config.json (from sequelize init, this tells sequelize how to connect to our database)
|
├── migrations
|     └── filler-file.js (filler for now. this is where we will write our seed data/tables. this will be invoked in our package.json file with scripts: '"migrate": "sequelize db:migrate"' which will execute on running the app)
|
├── models
|     ├── index.js (from sequelize init, this connects sequelize with our db and connects it to our table models)
|     └── (we will create a new file for each model for each table we create, likely just the one table)
|
├── public
|     ├── css
|         └── style.css (styling)
|     └── js
|         ├── view.js (html event listeners/logic, ajax calls [of HTTP methods] to backend routes)
|         └── (there may be other files that also contain our front-end js )
|
├── views
|     ├── pages
|         └── file.ejs (static html that remains consistent on every page [header, footer, etc.])
|     └── partials
|         └── file.ejs (simple logic, conditionals for injecting list items, etc. onto the page)
|
├── routes
|     └── api-routes.js (this is basically our 'controller'. it updates the models with the data from the client request object, and sends the response object with the updated info back to the client)
|
├── schema.sql (this creates the database that we use in config.json)
|
└── server.js (this starts and runs our app!)

```
