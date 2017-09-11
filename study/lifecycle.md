## Component Specificaiton Methods
The componentDidMount method is invoked only once after the component existst before rendering. And if you want to load some data or work with Ajax, this is the best place to do things. If you are using a funciton to import conetent, make sure that this variable is bound properly. Now another method, componentWillUnmount, happens before a component is unmounted from the dom.

## setState()
`setState(updater, [callback])`
setState() enqueues changes to the component state and tells React that this coponent and its children need to be re-rendered with the updated state. This is teh primary method you use to update the user interfce in response to event handlers and server responses.
setState() does not always immediately update the component. It may batch or defer the update until later. This makes reading this.state right after calling setState a potential pitfall. Instead, use componnetDidUpdate or a setState callback(setState(updater, callback)), either of which are guaranteed to fire after the update has been applied. If you need to set the state based on teh previous state, read about hte updater argument below.

setState() will always lead to a re-render unless shouldCoponentUpdate() returns false. If mutable objects are beign used and conditional rendering logic cannot be implemented in souldComponentUPdate(), calling setStste() only when the new state differs from the previous state will avoid unnecssary unnessary re-renders

The frist argument is an updater function with the signature:
`(prevState, props) => stateChange`

prevState is a reference to the previous state. It should not be directly mutated. Instead changes should be represtned by building a new object based on the input from prevState and props.

Both prevState and props received by the upater function are guanrateed to be up-to-date. The ooutput of the updater is shallowly merged with prevState.
The second parameter to setState() is an optional callback function that will be executed once setState is completed and the compnent is re-rendered. Generally we recommned using componentDidUpdate for such logic isntead. 
