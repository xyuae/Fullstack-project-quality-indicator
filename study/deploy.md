## Deployment

Deploying with node is simple. All majors platforms support and adhere to conventions to smooth the process even more. Some things to consider when deploying:

- Use envs for secrets, don't check them into source control
- Make sure you are error handling
- Make sure all your dependencies are being installed
- If you're going to have your platform build for you, make sure it has access to all your build tools
- Don't hard code config parameters such us url, port,  
