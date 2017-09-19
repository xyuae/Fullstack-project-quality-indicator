## Middleware
Now that we know how to use the store, along with its vrious methods, we are ready to dive into a more advanced redux topic: middleware. Middleware gives us the ability to add functionality directly to the store's dispatch pipline. Now the subscribe method allows us to subscribe listeners to teh store, and these listeners are invoked after the dispatch occurs. But middleware is far more owrful. Middleware gives us control over how actions are dispatched. we can add functionality before the actio is dispatched or after the action is dispatched. we can delay the dispacthing of actions. 

Our logic are supposed to go to the action creatros. Action creators are functions that create and return actions. They allo us to encapsulate the logic of our applications using functions, not objects. Let's demonstrate how using an action creator can make dispatchng an addDay action much easier. So action creators are functions that would encapsulate the logic. 

  