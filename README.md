# project2

Crowdsourced convenience app for people who are always on the road.

Current structure:
```
.
├── config
|     ├── config.json (from sequelize init, this tells sequelize how to connect to our database)
|
├── models
|     ├── index.js (from sequelize init, this connects with our db and connects it to our table models)
|     └── (we will create a new file for each model for each table we create)
|
├── public
|     ├── css
|         └── style.css (styling)
|     ├── js
|         └── this will hold the files for our front-end js (html event listeners/logic, ajax calls to backend routes)
|     └── html files (our 'views'. will depend on what templating language we use)
|
├── routes
|     └── api-routes.js (this is basically our 'controller'. it updates the models with the info passed from the front-end request object, and sends the response object with the updated info back to the front-end)
|
├── schema.sql (this creates the databased that we use in config.json)
|
└── server.js (this starts and runs our app!)

```
