# project2

Crowdsourced convenience app for people who are always on the road.

Current structure:
```
.
├── config
|     └── config.json (from sequelize init, this tells sequelize how to connect to our database)
|
├── models
|     ├── index.js (from sequelize init, this connects sequelize with our db and connects it to our table models)
|     └── (we will create a new file for each model for each table we create)
|
├── public
|     ├── css
|         └── style.css (styling)
|     ├── js
|         ├── view.js (html event listeners/logic, ajax calls [of HTTP methods] to backend routes)
|         └── (there may be other files that also contain our front-end js )
|     └── html files (our 'views'. will depend on what templating language we use)
|
├── routes
|     └── api-routes.js (this is basically our 'controller'. it updates the models with the data from the client request object, and sends the response object with the updated info back to the client)
|
├── schema.sql (this creates the database that we use in config.json)
|
└── server.js (this starts and runs our app!)

```
