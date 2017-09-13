# Dockerfile reference

## The program Docker
A little interlude to talk about what kernels do. Kernels are either, part of a corn, a respectable military rank, or, the core of every computer you interact with, depending on your perspective. So a kernel runs directly on the hardware, and it has a bunch of jobs, most of which are pretty simple, and very important. It receives messages from the hardware, a new disk has been attached, a network packet arrived, everything that goes on electrically, bubbles up to the kernel and gets dealt with.

It starts and it schedules programs, it says what's allowed to run, what's when, and it lets your computer do all the things you're asking it to do at the same time. It controls and it organizes the storage devices on the computer, when you say 'Write to this file', the kernel says 'Ah when he says write to the file,' he actually means this litle spot of the disk, and he goes there and writes the data. Someone has to make that decision, and that's the role of the file system inside the kernel. It passes messgage between programs, when two programs on the computer want to communicate, or two programs on different computers want to communicate over a network, they ask the kenrel to pass a message.
- Pass messages between programs
- Control and organize storage
- Allocate resources, memory, CPU, network, and so on
- Create containers by Docker configuring the kernal

## Registry
As we start exploring building larger sysetms with Docker, one of the first question that often comes up is, where's my data? is it safe? Many companies choose to run their own Docker registry, so they can know that their data is safe and somewhere they can protect it. So, it's just a program. You can run it anywhere you run other programs using exisiting infrasturcture. It stores layers, images, keeps track of them, stores the tags, generally the metadata around the images, along iwth the images, along with the images. And it's just a service that listens on port 5000 for instruction like, push this image, load this image from a dist, or search for images containing these key words.

It also keeps track of who's allowed to log in, provided you've configured that. There are a couple of popular choices. There's an official docekr registry produced by Docekr, the company. And the popular maven caching repo, nexus, also happends to provided in the newest versions, a Docker repo bulit in. So there's a good chance you already have a Docker registry running in your organization.  
`docker run -d -p 5000:5000 --restar always --name registry registry:2`
`docker tag ubuntu:14.04 localhost:5000/mycompany/my-ubuntu:`

The Registry is a stateless, highly scalable server side application that stores and lets you distribute Docekr images. The registry is open-source, under the permissive Apache licence.

A registry is a storage and content delivery system, holding named Docker images, available in different tagged versoins.
User interact with a re
You should use the Registry if you want to
- tightly control where your images are being stroed
- fully own your images distribution pipeline
- integrate image storage and dsitriution tighly into your in-house development workflow.

Start your registry:
`docerk run -d -p 5000:5000 --name registry registry:2`

pull or build some image from the hub
`docker pull ubuntu`
Tag the image so that it points to your registry
`docker tag ubuntu localhost:5000/myfirstimage`
Push it
`docker push localhost:5000/myfirstimage`
Pull it back
`docker pull localhost:5000/myfirstimage`
Stop your registry and remove all data
`docker stop registry && docker rm -v registry`


## Docker is
- Program written in Go-an upcoming systems language
- Manages kernel features

## Unix Storage in Brief
- Actual storage devices
- Logical storage devices
- Filesystems
- FUSE filesystems
- COWS: copy on write

Docekr has many different actual interal mechanisms taht it uses for managing the COW layers, the copy on write filesystem layers, and these depend a lot on what's available on hte system it's running on. Sometimes it uses Btrfs, sometimes it uses LVM, the logcal volume manager, sometimes it uses the overlay filesystem. There are manhy ways. it doen't really matter as long as it can acompolish layering on its own sort. You dn't have to worry about hte format of a COW on one machine, a copy on wirte filesystem, if you want to import taht image to another one because what it does it that it takes each layer, splits out the layers, and makes them into normal gzip files and ships them over the network to you separately, and the receiving end of that network connection, the place you're actually running hte DOcekr server, receives all of those layers separately, and then puts them together using hte filesystems that are available on that computer, so this is how COWs can move easily between computers, so the containers are independent of their storage engine.
- kernal
- logical groups
- filesystems
I can send images between machines pretty much freely. There is one little bit depending on the storage layer that's in use on a particular machine. It is possible in some cases to run out of layers. Some of the storage engines have a limited number of layers and others don't.  
This is worth beign vaguely aware of. It doesn't come up ery often, and it's good to be able to recognize it when it does. Anotehr part of images and storage in Docker is how we do volumes and shared folders with the host. These are not actually magic. They're built right in to the linux file system, so the inux file system starts with an assumed root directory called slash. Everything is slash something, slash home, slash Arthur.
## ECS
The EC2 containers service, on the top of it, is just a way of abstracting a way which machine is running which continer. It treates a bunch of instances that you rent as a shared pool and then combines them together and lets the EC2 container service decide exactly which instance in that pool is going to run which container at a particular time. If an instance goes away then the EC2 container service is capable of noticing that it wetn away, remembering which containers were runnning on it, and finding spots for them elsewhere.

It also monitors all the containers and keeps a running log of waht was runing, what was not rnning, what should have been running. And sotres your Docker images. Let's you control where and how things run.

ECS is a lot more powerful than simple docker hosting. There are easier to use options that will just take a container and run it in isolatin. What ECS offers is a really good way to take a container and run it in the context of the rest of your Amazon infrastructure, so it plays very nicely with the rest of the AWS which allows it to grow as your use of AWS grows.

- Starts containers
- Records history
- gives containers names
- Attaches containers to ELBS
- Scheules tasks

## Dockerfile reference
Docker can build images automatically by reading the instructions from a Dockerfile. A Docekrfile is a text document that contains all the commands a user could call on the command line to assemble an image. Using docker build users can create an automated build that executes sevvveral command-line instructions in succession.

This page describes the commands you can use in a Docerfile.

## usage
The docekr build command builds an image from a Dockefile and a context. The build's context is the set of files at a specified location PATH or URL. The PATH is a directory on your local filesystem. THe URL is a Git repository location.

A context is processed recrusively. So, a PATH includes any subdirectories and the URL includes the repository and its submodules. This example shows a build command that uses the current directory as context:

The build is run by the Docker daemon, not by the CLI. THe first thing a build process does is send the entire context(recursively) to the daemon. In most cases, it's best to start with an empty directory as context and keep your Dockerfile in that directory. Ad only the files needed for building the Docekrfile.

To use a file in the build context, the Dockerfile refers to the file specified in an instruction, for example, a COPY instruction. To increase the build's perforamnce, exclude files and directories by adding a .dockerignore file to the context directory.


Traditionally, the Dockerfile is called Dockerfile and located in the root of the context. You use the -f flag with `docker build` to point to a Dockerfile anywhere in your file system.
`docker build -f /path/to/a/Dockerfile .`
You can specify a repository and tag at which to save the new image if the build succeeds:
`docker build -t shykes/myapp .`
