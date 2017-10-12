## Full Stack - web application: Software Project Quality Indicator

## Project Duration: August 2017 to September 2017
## Introduction
The Quality Indicator, which measures the firmware quality status during and at the end of the project life cycle, are composed of “DO” data and “END IT” data. Currently, the Project Quality Indicator is documented in Excel. However, the excel version lacks flexibility in maintenance and expandability. In addition, the quality indicator should have the capability to be integrated into the quality state model for future expansion. Therefore, a web-based application that record and present the project quality data is required.

__Functional requirement__
1.	CRUD API of Project Information
2.  Calculate project quality indicator
4.	Record the current status and history of the quality

The application is deployed using Heroku at `https://express-quiality-indicator.herokuapp.com/#/`
. The mongodb is deployed in heroku using mongolab.

## Project Structure
The quality management project is implemented in an 2 month period. The purpose is to build an web application that records and presents the project quality information. MERN stack is chosen for developing a front-end back-end separated, one page application, with a horizontally scalable database and backend.
The node module(libraries) are installed using npm. The npm is managed by the file `package.json` in the root folder. The `package.json` file includes all the node module version required and the script to run the application.

The server runs in the nodejs runtime environment, where you can run JavaScript in the backend. The entrance of backend code is in `./index.js`, which serves the front-end and back-end resources, and listen for http request.  

__Back End__:
Under the `./server` folder is the code for backend implementation. The entrance is `./server/server.js`, in which the RESTful api is created, mongodb database is connected, and middlewares are hooked. Under this subdirectory the RESTful api is implemented in `./api`; authentication api in `./auth`; configuration in `./config`. Note that the `./middleware` folder contains the global middleware and the `./util` contains utilities code. They are used by the api and authentication services.

__Front End__:
The `./client/src` folder contains react code that runs in the client browser. As react uses ES6 syntax such as arrow function, it is pre-compiled using babel in webpack into a `bundle.js` file under `./client/assets`. The configuration of webpack is in `./webpack.config.js`. The entrance of front-end code is in `./index.js`. Under the subdirectory `./src` there is a folder named `routes` which explains the route of the single-page application. The `component` folder contains the large bulk of the application such as the menu, navigation bar that is reusable. The `containers` includes some detail implementation that stores and manipulate data, and the `styled` are style component that consumes data and configure their style dynamically such as color, font size, and what kind of polar diagram to use.

__Deployment__:
The application is configured to run in heroku environment using the `procfile` and `package.json` file. A docker image can be created using `Dockerfile` and deployed on AWS server, which is an interesting task to do when resource is available.    

## To be improved
___Backend___
In the server side, the authentication service is implemented but not integrated into the front-end. The real-time communication between users can be implemented by socket.io, which would allow users to cooperate on one project, and get notified when a shared project get updated.

___Frontend___
The react data flow can be improved by react-redux framework, which constructs a one-way data flow and manage the state in a better way.   

___Scalability___
For scalability purpose the application shall be configured to start and shut down as fast as possible. A Docker image can be created and deployed on AWS server. AWS service such as ElasticBeanstalk can provide service such as load balancing. Modules for building an distributed database system can be researched.

## Bootstrap and deployment
The website is about Overview/Add/List view in a single page app. The REST API is built using nodejs, express and mongo db.
### MongoDB deployment
- Install MongoDB
- For local deploy, create folder `C:\data\db` on windows, `/home/db` on linux
- Open the mongod.exe in command line`mongod.exe`

### Docker deployment
```Docker
docker pull mongo
docker run -it --name mongodb mongo
cd /home
mkdir db
mongod --dbpath='/home/db'
mongod
docker build -t nodejs ./
docker run -it -p 3000:3000 --name nodejs --link=mongodb:mongodb nodejs
```
### Bootstrap the application
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
  <img src="resources/readme/test_api.PNG" alt="Test the api" />
</p>

## Plan and Milestone
- 8/11 – 8/18: Build the functional property of the website server  
- Milestone: Set up backend environment, create RESTful api
- Milestone: Setup testing code and create mongo database for project
	- Completed integration testing code
	- Built model for category/user/project in MongoDB
	- reorganized project structure
- 8/28 - 9/8: Querying mongo database and Authentication
- Milestone: Query and User authentication function.
  - Completed CRUD function for server API
  - Design UI style to meet business demand
- 9/9 - 9/25: UI and deployment
- Milestone: Deploy on heroku
  - Implement spider polar diagram
  - Improve frontend interface
  - Deploy the frontend on heroku

## To do
- Authentication on the mongo model (look into password.js in the future)
- unit test
- complicated RESTful api: parse API.
- PubNub real-time communication
- JSCS: [convert jscs into eslint](https://eslint.org/blog/2016/04/welcoming-jscs-to-eslint)
- Build scalable system with Mern and Electrode

## Resource
- [My note on middleware/nodejs](./study/note.md)
- [Node, react web resource](https://www.scotch.io/)
- [Lynda Node js tutorial](https://www.lynda.com/Node-js-tutorials/)
- [My MongoDB notes](./study/mongodb.md)
- [MERN stack](https://resources.mongodb.com/getting-started-with-mongodb/the-modern-application-stack-part-1-introducing-the-mean-stack)
- [MongoDB online course](https://university.mongodb.com/)
- [Docker](https://docs.docker.com/engine/reference/builder/#usage)
- [Github](https://www.udacity.com/wiki/ud775)
- [Operating system](https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/3_Processes.html)
- [Polar Spider chart](https://code.hcharts.cn/demos/hhhhi6)
