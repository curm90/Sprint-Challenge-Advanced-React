- [x] Why would you use class component over function components (removing hooks from the question)?

To store and change state, and access lifecycle methods.

- [x] Name three lifecycle methods and their purposes.

componentDidMount - Runs after the component has rendered to the DOM, usually a good place do asyncronous operations.
componentDidUpdate - Runs whenever the DOM is updated or state changes.
componentWillUnmount - Is used for clean up, removing event listeners, cancel the timer etc.

- [x] What is the purpose of a custom hook?

To extract component logic into reusble functions. This in turn cleans up your components

- [x] Why is it important to test our apps?

To ensure correctness in your codebase, prevent future bugs, easier to maintain, find a fix bugs. Gives you piece of mind your code works. Also forces you to write more bug proof and ultimatley better code.
