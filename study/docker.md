# Dockerfile reference

## Dockerfile reference
Docker can build images automatically by reading the instructions from a Dockerfile. A Docekrfile is a text document that contains all the commands a user could call on the command line to assemble an image. Using docker build users can create an automated build that executes sevvveral command-line instructions in succession.

This page describes the commands you can use in a Docerfile.

## usage
The docekr build command builds an image from a Dockefile and a context. The build's context is the set of files at a specified location PATH or URL. The PATH is a directory on your local filesystem. THe URL is a Git repository location.

A context is processed recrusively. So, a PATH includes any subdirectories and the URL includes the repository and its submodules. This example shows a build command that uses the current directory as context:

The build is run by the Docker daemon, not by the CLI. THe first thing a build process does is send the entire context(recursively) to the daemon. In most cases, it's best to start with an empty directory as context and keep your Dockerfile in that directory. Ad only the files needed for building the Docekrfile.

To use a file in the build context, the Dockerfile refers to the file specified in an instruction, for example, a COPY instruction. To increase the build's perforamnce, exclude files and directories by adding a .dockerignore file to the context directory.
