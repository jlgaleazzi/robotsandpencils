# R&P Frontend Assessment - React

A simple single page app that retrieves displays data related to the SpaceX launches
User can choose to filter data by Landing Success, Reused rockets(stages) and Reddit
User refreshes the page manually by clicking on a refresh icon.

Front End was built utilizing the React Library.
the data is hosted in MongoDB Atlas cloud service. 
the backend is a Node application using express server.
The app is running on a docker container using AWS elastic Beanstalk 

check it live:  (http://robotsandpencils-env-1.fq23erpies.us-east-1.elasticbeanstalk.com/, "Robots and Pencils") 

## Requirements

to run locally you must have Node.js v10 or higher and MongoDB

## Installation

-- Local installation

Clone this repository to your local environment
go to your local repository


on terminal type:  npm install

open database/config.js
replace <username> and <password> with your username and password for your mongoDB Server
  
# Populate the Mongo database
run node seed_db.js from the database directory

you should see a message stating that the database has been seeded succesfully

# build app
from the root repo directory type
npm run build
if successfully built you shoud see a message stating that the build folder is ready to be deployed.

## Start Server
from the root repo directory type
node server/server.js

if succesfully launched you should see the following messages:
Express Server is listeningg on port 3001
succesfully connected to mongo database

navigate to http://localhost:3001 on you browser and you should see the SpaceX Launches app.

## Testing

#stop server
stop the server by using ctrl-c on your terminal
# to run test suite
type npm test:
a script should run and test results should display on terminal.

Testing is done with the Mocha and Chai library
I included 6 tests to verify that the correct data is being pulled from the database
These are:
* 1 Get All launches 
    verify that response is succesful\
    verify that it returns an array with the results\
    verify that it returns 83 records (from the seed database)\
* 2 Get only Succesfully launches\
    verify that response is succesful\
    verify that it returns an array with the results\
    verify that all results have landSuccess = true\
* 3 Get only launches with Reddit\
    verify that response is succesful\
    verify that it returns an array with the results\
    verify that all results have reddit = true\
* 4 Get only launches with reuse\
    verify that response is succesful\
    verify that it returns an array with the results\
verify that all results have reuse = true\
* 5 Get only launches with reuse and reddit\
    verify that response is succesful\
    verify that it returns an array with the results\
    verify that all results have reuse and reddit = true\
* 6 Get only launches with reuse and land success\
    verify that response is succesful\
    verify that it returns an array with the results\
    verify that all results have reuse and reddit = true\
*7 Get only launches with reddit and land success\
    verify that response is succesful\
    verify that it returns an array with the results\
    verify that all results have reddit and landsuccess = true\


