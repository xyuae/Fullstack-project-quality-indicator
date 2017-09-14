## Deployment

Deploying with node is simple. All majors platforms support and adhere to conventions to smooth the process even more. Some things to consider when deploying:

- Use envs for secrets, don't check them into source control
- Make sure you are error handling
- Make sure all your dependencies are being installed
- If you're going to have your platform build for you, make sure it has access to all your build tools
- Don't hard code config parameters such us url, port,  


- Start every new project with npm indicator `npm init --yes`
- Specify an engines key with your current version of node `node -v`
- Use a smart .npmrc
```bash
npm config set save=true
npm config set save-exact=true
cat ~/ .npmrc
```
- Stick with lowercase
- Cluster your app

Since the node runtime is limited to a single CPU core and about 1.5GB of memory, deploying a non-clustered node app on a large server is a huge waste of resources.

To take advantage of mulitple cores and memory beyond 1.5GB, bake Cluster support into your app. Even if you're only running a single process on small hardware today. Cluster gives you easy flexibility for the future.
`const CONCURRENCY = process.env.WEB_CONCURRENCY || 1;`

- Be environmentally aware

Don't litter your project with enviornment-specific config files! Instead, take advantage of environment vairables. First, install node-foreman:
`npm install -S foreman`
create a Procfile to specify your app's process types:
`web: bin/web
worker: bin/worker`

## Avoid garbage
Node (V8) uses a lazy and greedy garbage collector. With its default limit of about 1.5GB, it sometimes waits unitl it absolutely has to before reclaiming unused memory. If your memory usage is increasing, it might not be a leak - but rather node's usual lazy behavior.
To gain more control over your app's garbage collector, you can provide flags to V8 in your Procfile
`web: node --optimize_for_size --max_old_space_size=920 --gc_interval=100 server.js`
If you'd like to tailor node to a 512 MB container, try:
`web: node --optimize_for_size --max_old_space_size=460 --gc_interval=100 server.js`

## Hook things up
Npm's lifecycle scripts make greet hooks for automation. If you need to run something before building your app, you can use the preinstall script. need to build assets with grunt, gulp, browserify, or webpack? Do it in a postinstall script.


## CONCURRENCY
Node.js apps must fork multiple processes to maximize their available resources. This is called 'clustering' and is supported by the Node.js cluster API.

## NoSql
As we begin our journey into the world of NoSQL, we'll review waht exactly cahracterizes NoSQL database is. It is designed to stroe high volume and oftena large variety of dtata. Often focuses on high scalbabilty, igh avaialbilty,a nd eventual consistency.
- Key/Value Volatile/Persistent
- Wide-Column
- Document
- Graph

So you wanna choose NoSQL when you're bringing in new data into your project -higher volumen and /or variety are the two big drivers, and it'd be too expensive for you to buy more, for example, SQL server licences, just to store a whole bunch of JSON behavioral data in your SQL server as string data or XML or something. That's a very common use case. Another case would be that youneed a Graph-type traversal, because your business quetion is around the relationships between teh dta ndoes, and although you could do it in a relational or SQL server environment, it would be really arduous or cubersome to write those queries, where it is very easy in the world of Graph databases. 
- Your data is unstrucutred or semi-strucutred
- Your team will train in these new technolgoies
- Consider use of the cloud to accelerate both POCs(Proof of concepts) and full implementatons

## Key/Value Database
- Redis is designed to work in memory, it does have a persistence capability but that does affect the peroformance.
- AWS DynamoDB
Redis is what is called a key-value store, often referred to as a NoSQL database. The essence of a key-value store is the ability to store some data, called a value, inside a key. This data can later be retrieved only if we know the exct key used to store it. We can use the comand set to stroe the value fido at key server:name
Other common operatios provided by key-value stores are del to delete a given key and associated value, set-if-not-exists(called SETNX on redis) that sets a key only if it does not already exist, and INCR to atomically increment a nubmer stored at a given key: 

## Tools
Web-pack is the tool taht we're going to use to actually create our bundle.js file, but we will also use the web pack dev server. The web pack dev server is an express server that we can use to actually host our appication. It will help imporve our workflow by listening to any chgnes in our source code and automtically recrating the bundle. 

Loaders are the isntruction sthat web pack follows when transpiling our code and crating the bundle. The first loader that I want to install is the babel loader. This is the loader used by babel to transpile our ES6 and other emerging Javascript syntax into ES5 compatible javascript. Additionally we want to make sure any JSON documents make it inside of our bundle. I am going to use the JSON loader for that. 