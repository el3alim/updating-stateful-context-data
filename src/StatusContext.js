import React from "react";

// This component provides a context value for the current status as the value of the the StatusContext variable.
export const StatusContext = React.createContext();

// This is the global context/state component that wraps the rest of the app and provides the StatusContext.
// useState() hook is used to provide the global context (StatusContext) as a state.
// This transforms the global context to a state that includes a setter function.
// Ohter components can then use this setter function to update the global context.
export function StatusProvider({ children }) {
  const [status, setStatus] = React.useState("set a status");

  // Return the StatusContext.Provider with the current status as its value property.
  return (
    <StatusContext.Provider value={status}>{children}</StatusContext.Provider>
  );
}
