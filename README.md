# electricalReport

With node.js, do the following:

- Clone the project.
- Run npm install
- Run npm start
- Go to http://localhost:3010/. Port is setted in constants.
- If it throws an error with an unexpected expresion function or async or await, try with 'node ./bin/www'. Due to the nodejs version, it can throws problems.

## Files (from the root of the project)

### constants.js

    Constants like time per polling, port, data-base connection is setted.

### awsDatabase.js

    Here the data is pulled from the remote database and the server connect to the database. 

### polling.js

    Where the data pulled from the database is processed. You can change the time of polling of messages here. Any problem with the data is going to be find here or in awsDatabase.js.

### app.js

    Here routes and data-managment are setted. Port is setted in ./bin/www

### ./routes/index.js

    Graphs configuration and position are setted here. Information passed to the index.ejs go here to.

### ./public/javascripts/charts.js

    Creation of the graphs. Both line and pie charts.

### ./public/javascripts/chartsConfig.js

    Configuration of the charts such us colours, titles, processing of the data from the index.js, quantity of samples, etc.

### ./public/stylesheets/style.css

    HTML styles.

## Views (from the view)

### ./index.ejs

    Here all the files are included.

### ./partials/navbar.ejs

    Navigation with the logo.

### ./partials/netStatus.ejs

    A brief summary of the most important values of Modo Energy page such as frequency, energy consumption, last update and warnings.

### ./partials/graphs.ejs

    Panel which contains every chart.