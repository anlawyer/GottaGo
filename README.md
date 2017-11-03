# project2

Crowdsourced convenience app for people who are always on the road.

Current structure:
```
.
├── config
|     └── config.json (from sequelize init, this tells sequelize how to connect to our database. There is a line called: `migrationStorageTableName` which is directed to `SequelizeMeta`. This creates the table in our database that holds all the history of migrations and seeds.)
|
├── migrations
|     ├── ######-restroom-seeds.js (this file holds the seeds we want inserted into the database on connection.)
|     └── ######-create-restroom.js (this file holds the details of the `restroom` table model.)
|
├── models
|     ├── index.js (from sequelize init, this connects sequelize with our db and connects it to our table models)
|     └── restroom.js (this file holds the model of our table, which the migration file references.)
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
|     ├── api-routes.js (this is basically our 'controller'. it updates the models with the data from the client request object, and sends the response object with the updated info back to the client)
|     └── html-routes.js (this file establishes our routes that move the user from one page to the next.)
|
├── schema.sql (this creates the database that we use in config.json)
|
└── server.js (this starts and runs our app!)

```
