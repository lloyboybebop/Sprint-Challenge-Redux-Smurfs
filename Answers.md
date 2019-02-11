1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
	- Object.assign, Array.filter, and Array.concat. Object.assign creates a new object with the properties of another object.
	
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
	- `actions` are packets of data that are delivered to `reducers`
	- `reducers` are take in a previous state and action as an argument and return end state. This is how the state tree is changed.
	- `store` holds the state tree. It also contains methods used on the state tree.
	
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
	- Application state is the state tree. When you have data used by multiple components or large data objects, you woudl use this.
	- Component state is the state object for one component. It is good to use this for non-complex data, unique data.
	
4.  What is middleware?
	- It is code that exists between an action's creatiuon and the reducers to which the action is dispatched.
	
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
	- `redux-thunk` allows us to use `action-creators`, which allow us to create actions asynchronously.
	
6.  Which `react-redux` method links up our `components` with our `redux store`?
	- connect()