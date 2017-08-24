## Back-end web application: Software Project Quality Indicator

## Project Duration: August 2017 to October 2017
## Introduction
The Quality Indicator, which measures the firmware quality status during and at the end of the project life cycle, are composed of “DO” data and “END IT” data. Currently, the Project Quality Indicator is documented in Excel. However, the excel version lacks flexibility in maintenance and expandability. In addition, the quality indicator should have the capability to be integrated into the quality state model for future expansion. Therefore, a web-based application that record and present the project quality data is required.
Functional requirement
1.	CRUD API of Project Information
2.  Calculate project quality indicator
4.	Record the current status and history of the quality indicator (ex. Radar diagram and history diagram)
5.	Upload and download interface for data in Excel format

## Design
The website is about Overview/Add/List view in a single page app.

## Methodology
Build the REST API system using express and mongo db.
We're going to use mocha and chai along with supertest to run integration test against our api. Install testing environment:
```
npm i -g mocha
npm i -D supertest chai
```

## Plan and Milestone
Milestone: Website to create project and store project meta data
- 8/11 – 8/18: Expand the functional property of the website  
- Milestone: Set up backend environment, create RESTful api
- 8/20 - 8/27: Testing, and mongo db, data modeling
- Milestone: Setup testing code and create mongo database for project
- 8/28 - 9/8: Querying mongo database and Authentication
- Milestone: Query and User authentication function from the server.

## TO DO
- Testing api code


## Resource
- [Cloning a lightweigth yelp website](http://cache.preserve.io/c81nqh7s/)
- [My Note on react](./notes/clone_yelp.md)
- [Lynda Node js tutorial](https://www.lynda.com/Node-js-tutorials/)
- [My MongoDB notes](./notes/mongodb.md)
