## Back-end web application: Software Project Quality Indicator

## Project Duration: August 2017 to October 2017
## Introduction
The Quality Indicator, which measures the firmware quality status during and at the end of the project life cycle, are composed of “DO” data and “END IT” data. Currently, the Project Quality Indicator is documented in Excel. However, the excel version lacks flexibility in maintenance and expandability. In addition, the quality indicator should have the capability to be integrated into the quality state model for future expansion. Therefore, a web-based application that record and present the project quality data is required.

__Functional requirement__
1.	CRUD API of Project Information
2.  Calculate project quality indicator
4.	Record the current status and history of the quality indicator
5.	Upload and download interface for data in Excel format

## Design
The website is about Overview/Add/List view in a single page app.

## Methodology
Install MongoDB and open the mongod.exe in command line`mongod.exe`

Build the REST API system using express and mongo db.
Download and install nodejs(with npm inside).
We're going to use mocha and chai along with supertest to run integration test against our api. Install testing environment:
```bash
npm i -g nodemon
npm i -g mocha
npm install
npm test
npm start
```
<p align="center">
  <img src="resources/readme/test_api.png" alt="Test the api" />
</p>

## Plan and Milestone
- 8/11 – 8/18: Build the functional property of the website server  
- Milestone: Set up backend environment, create RESTful api
- 8/20 - 8/27: Testing, and mongo db, data modeling
- Milestone: Setup testing code and create mongo database for project
	- Completed integration testing code
	- Built model for category/user/project in MongoDB
	- reorganized project structure
- 8/28 - 9/8: Querying mongo database and Authentication
- Milestone: Query and User authentication function from the server.

## To do
- build and query MongoDB database
- Authentication on the mongo model (look into password.js in the future)
- unit test for testibility
- complicated RESTful api: parse API.
- PubNub real-time communication
- JSCS: [convert jscs into eslint](https://eslint.org/blog/2016/04/welcoming-jscs-to-eslint)
- [Node, react web resource](https://www.scotch.io/)

## Resource
- [My note on middleware/nodejs](./study/note.md)
- [Lynda Node js tutorial](https://www.lynda.com/Node-js-tutorials/)
- [My MongoDB notes](./study/mongodb.md)
