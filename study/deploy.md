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
