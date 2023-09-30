import React from "react";
import { StatusContext } from "./StatusContext";

// This component allows users to set the current status.
// It uses the StatusContext to get the current status and setStatus functions.
function SetStatus() {
  const [status, setStatus] = React.useContext(StatusContext);

  // It then returns an input field with the current status as the value.
  // On change, the setStatus function is called to update the status with the users' input.
  // This is where the global context value of the paragraph (below) is updated via the setter function of the SetStatus global context.
  return <input value={status} onChange={(e) => setStatus(e.target.value)} />;
}

// This component displays the current status, which is intialized to "set a status" frm the StatusContext.
// It is then updated according to the users' input.
export function Status() {
  const [status] = React.useContext(StatusContext);

  // It then returns a paragraph element with the current status as the text.
  return <p>{status}</p>;
}

// This component renders one of three pages, as well as the input element from the SetStatus component.
export function Page1() {
  return (
    <>
      <h1>Page 1</h1>
      <SetStatus />
    </>
  );
}

// This component renders a fragment with a heading.
export function Page2() {
  return <h1>Page 2</h1>;
}

// This Page3 component is identical to the Page1 component.
export function Page3() {
  return (
    <>
      <h1>Page 3</h1>
      <SetStatus />
    </>
  );
}
