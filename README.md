# Space X - React Front End, Node/MongoDB (MERN) 

A simple single page app that retrieves displays data related to the SpaceX launches
User can choose to filter data by Landing Success, Reused rockets(stages) and Reddit
User refreshes the page manually by clicking on a refresh icon.

Front End was built utilizing the React Library.
Tha database can be seeded with the included json file. 
the data can be hosted in MongoDB Atlas cloud service or with a local MongoDB installation
the backend is a Node application using express server.



# Requirements

to run locally you must have [Node.js](https://nodejs.org/en/) v10 or higher and [MongoDB](https://www.mongodb.com/)

# Installation

-- Local installation

Clone the repo: `git clone https://github.com/jlgaleazzi/spacex.git`

go to your local repository

Install with [npm](https://www.npmjs.com/):  `npm install`

open database/config.js
replace `<username> and <password>` in the following line with your username and password for your mongoDB Server\
` module.exports = {
  host: "mongodb+srv://yourusername:yourpassword@mongodb://localhost:27017/spacex"
};`
# Populate the Mongo database
run `node seed_db.js` from the database directory

you should see a message stating that the database has been seeded succesfully

# Build app
from the root repo directory type: `npm run build`\
if successfully built you shoud see a message stating that the build folder is ready to be deployed.

## Start Server
from the root repo directory type: `node server/server.js`

if succesfully launched you should see the following messages:\
`Express Server is listening on port 3001
succesfully connected to mongo database`\

navigate to http://localhost:3001 on you browser and you should see the SpaceX Launches app.

# Testing

### stop server
if server is running stop it by using ctrl-c on your terminal
## to run test suite
type : `npm test`\
a script should run and test results should display on terminal.

Testing is done with the Mocha and Chai library\
I included 6 tests to verify that the correct data is being pulled from the database\
These are:
* 1 Get All launches 
    verify that response is succesful\
    verify that it returns an array with the results\
    verify that it returns 83 records (from the seed database)
* 2 Get only Succesfully launches\
    verify that response is succesful\
    verify that it returns an array with the results\
    verify that all results have landSuccess = true
* 3 Get only launches with Reddit\
    verify that response is succesful\
    verify that it returns an array with the results\
    verify that all results have reddit = true
* 4 Get only launches with reuse\
    verify that response is succesful\
    verify that it returns an array with the results\
    verify that all results have reuse = true
* 5 Get only launches with reuse and reddit\
    verify that response is succesful\
    verify that it returns an array with the results\
    verify that all results have reuse and reddit = true
* 6 Get only launches with reuse and land success\
    verify that response is succesful\
    verify that it returns an array with the results\
    verify that all results have reuse and reddit = true
* 7 Get only launches with reddit and land success\
    verify that response is succesful\
    verify that it returns an array with the results\
    verify that all results have reddit and landsuccess = true


