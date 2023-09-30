# This project is about enabling components to update a context.

# Project objectives:

- Allowing components to update global state values.
- This is achieved by setting the value of the context using a useState() hook in the createContext() hook.
- This allows us to pass the setter function of the useState along with the context data to the applications components.
- The component that receives the context data can then use the received setter function to update the state of the global context.

# Studied and implemented from React-and-React-Native-4th-Edition.
