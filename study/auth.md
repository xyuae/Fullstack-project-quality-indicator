## Authentication
- Cookie
- Basic auth
- JSON Web tokens (JWT)
Cookie is like an session store

We will be using json web tokens (JWT). JWT is an open standard that is heavily used. Because we're using a token approach,
we don't need to keep track of who is signed in with a session store or have cookies. The JWT will be sent on every request
because REST is stateless and we know not of the previous request. The token has to be stored on the client that is requesting resources

So the process goes as follows. A user signs up to accesss protected resources on our api, (username and password). On success, we create a new user in our DB.
We use the new user's id to create a JWT. We then send that JWT back on every request to a protected resource. So not only do we get authentication, we also get identification with a JWT because we can reverse the token to be its original ojbect and get the user id.

With JWT as the method we will use to grant access to our protected resources, we still need a way to actually create users other thana simpole POST request to the users resource. We already have a username filed that is unique, lets add a required password filed as well to help identify who a user may be when they signin. There are numerious problems around stroing original plain text passwords in our database, legal, technical, and moral. So instead, we will store a hased version of a user's password.
