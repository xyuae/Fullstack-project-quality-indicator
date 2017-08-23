## MongoDB Many-to-Many Relationship Data modeling

### Introduction
Implementing a many-to-many relationship in a relational database is not as staright forward as a one-to-many relainship because there is no single commnad to accomplish it. The same holds true for implementing them in mongoDB. As a matter of fact you canno timplement any type of relationship in mongoDB via a commnad. HOwever, having the abibility to stroe arrays in a document does allow you to store the data in a way that is fast to retrieve and easy to maintain and provides you the information to relate two documents in your code.

### Modeling in relational database
In the past, I have modeled many-to-many relationship in relational databases using a junction table. A junction table is just the table that stores the keys from the two parent tables to form the relationship. See the example below, where there is a many-to-many relationship between the person table and the group table. The person_group table is the junction table.


Modeling in mongoDB
Using the schema-less nature of mongoDB and arrays, you can accomplish the same data model and create short query times with the appropriate indexes. Basically, you can store an array of the ObjectID's from the group collection in person collection to identify what groups a person belongs to. Likewise, you can store an array of the ObjectId's from the person collection in the group document to identify what persons belong to a group. You can also store DBref's in the array, but that would only be necessary if your collection names will change over time.

In order to imporve the performance of the queries above, you should ceate inexes on the person.groups field and the gorups.persons field. This can be accomplished by using hte following commands.
```
db.person.ensureIndex({"groups": 1});
db.groups.ensureIndex({"persons": 1});
```

### Summary
In general it is pretty straight forward to be able to implement a many-to-many relationship in mongoDB. You should always create the most appropriate data model that meets the needs of how your data will be queried.


## Part1: Introducing the MEAN stack
### Introducing the mean and mern stacks
This is the first in a series of blog posts examining the technologies that are drving the evelopment of modern web and mobile applications, notably the MERN and MEAN stacks.

Users increasingly demand a far richer experience from web sites - expecting the same level of performance and interactivity they get with native desktop and mobile apps. At the same time, there's pressure on developers to deliver new applications faster and continually roll-out enhancements, while ensuring that applications is highly available and can be scaled appropriately when needed.

Developers now use JavaScript to implement the front-end experience as well as the application logic and even to access the database. There are two dominant JavaScript web app stacks - MEAN(MongoDB, Express, Angular, Node.js) and MERN(MongoDB, Express, React, Node.js) and so we'll use those as paths to guide us through the ever expanding array of tools and frameworks.

MEAN is a set of Open Source components that toghether, provide an end-to-end framework for building dynamic web applicaitons; starting from the top to the bottom.
- Angular: Front-end web app framework; runs your Js code in the user's browser, allowing your applicaiotn UI to be dynamic
- Express: Back-end web applicaiton framework running on top of NOde.js
- Node.js: Js runtime environment - lets you implement your application back-end in JavaScript
- MongoDB: Document database - used by your back-end applicaiton to store its data as JSON documents.

_Angular_, originally created an maintained by Google, runs your Js code within the user's web browsers to implement a reactive user interface. A reactive UI gives the user immediate feedback as they give their input.
You implement your appliation front-end as a set of components - each of which consists of your Js code and a HTML template that includes hooks to execute and use the results from your TypeScript functions. Complex applicaiotn front-ends can be crafted from many simple components.

_Node.js_ is a Js runtime environment that runs your back-end application. Node.js is an asynchronous, event-driven engine where the application makes a request and then continues working on other useful tasks rather than stalling while it waits for a response. On completion of the requested task, the applicaotn is informed of the results via a callback. This enables large numbers of operations to be perfromed in parallel which is essential when saling applicaoitins. MongoDB was also designed to be used asynchronously and so it works well with Node.js applications.

_MongoDB_ is an open-source, document database that provides persistence for your application data and is designed with both scalability and developer agility in mind. MongoDB bridegs the gap between key-value stores, which are fast and scalable, and relational database, which have rich functionaility. Instead of storing data in rows and columns as one would with a relational database, MongoDB stores JSON documents in collections with dynamic schemas.

MongoDB's document data model makes it easy for you to store and comibne data of any structure, without giing up sophisticated validation rules, flexible data access, and rich indexing functionality. You can dynamically modify the schema without downtime - vital for rapidly evolving applicaiotns.

It can be scaled within and across geographically distributed ata centers, providing high levels of availabity and scalability. As your deployents grow, the database scales easily with no downtime, and without changing your appicaiton.

_What's Done Where?_
There is clear overlap between teh features available in hte technologies making up the MEAN stack and it's important to decide "who does what".
Traditionally the hard work is done in the back-end in express due to the advantages:
- Likely to be closer to the database and other resources and so can minimise latency if lots  of database calls are made
- Sensitive data can be kept within this more secure environment
- Application code is hidden from the user, protecting your intellectual property
- Powerful servers can be used - increasing performance

However, there is a growing trend to push more of the functionality to Angular running in the user's browser due to the reasons:
- Use the processing power of your user's machines; reducing hte need for expensive resources to power your back-end. This provides a more scalable architecture, where every new user brings their own computing resources with them.
- Better response times (assuming that there aren't too many trips to the back-end to access the database or other resources)
- Progressive Applicaitons. Continue to proivde service when the client applicaiton cannot contact the back-end. Modern browsers allow the application to store data locally and then sync with the back0end when connectivity is restored.

Perhaps, a more surprising option for running part of the applicaiotn logic is within the database. MongoDB has a sophisticated aggregation framework which can perform a lot of analytics - often more efficiently than in Express or Angular as all of the required data is local.

Another decision is where to validate any data that the user supplies. Ideally this would be close to the user as possible - using ASngular to check that a provided password meets security rules allows for instantaneous feedback to the user. That doesn't mean that there isn't value in validating dta in the back-end as well, and using MongoDB's document validation functionality can guard against buggy software writing erroneous data.

_ReactJS - Rise of the MERN Stack_
_Why are these stacks important?_
Having a standard application stack makes it much easier and faster to bring in new developers and get them up to speed as there's a good chance that they've used the technology elsewhere. For those new to these technologies, there exist some great resources to get you up and running.

From MongoDB upwards, these tehnologies share a common aim - look after the critical but repetiite stuff in order to free up developers to work where they can really add value: building your killer app in record time.

These are the technologies that are  revolutionising the web, building web-based services that look, feel, and perform just as well as native desktop or mobile applicaitons.

The separation of layers, and especially the REST APIs, has led to the breaking down of applicaiton silos. Rather than an applicaiton being an isolated entity, it can now interact with multiple services through public APIs.

## Part 2: Using MongoDB with Node.js
The MongoDB node.js driver provides a JavaScript API which implements the network protocol required ot read and write from a local or emote MongoDB database. If using a replica set then the driver also decides which MongoDB instance to send each request to. 
