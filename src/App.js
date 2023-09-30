import React from "react";
import { StatusProvider } from "./StatusContext";
import { Page1, Page2, Page3, Status } from "./Pages";

// This component renders one of the three pages as the Page component, depending on the page prop.
// It does that by selecting the component from the array that has an index that corresponds to the [page] value.
// It receives the page value from the elements' props.
function ChoosePage({ page }) {
  const Page = [Page1, Page2, Page3][page];

  // Return the Page component.
  return <Page />;
}

// This component is the main app component.
// It provides the StatusProvider and renders three buttons, as well as the ChoosePage component.
// useState() function is used to manage the the page value.
// The page value is then passed through the props to the ChoosePage component.
function App() {
  const [page, setPage] = React.useState(0);

  // Return the StatusProvider, buttons, and the ChoosePage components.
  // The StatusProvider component provides the current status to the rest of the app.
  // The ChoosePage component renders the appropriate page, depending on the current page.
  // The disabled property of every button is set to true to disable it when the page value is equal to its index in the Page components' array, which means that the button is already selected.
  return (
    <StatusProvider>
      <button onClick={() => setPage(0)} disabled={page === 0}>
        Page 1
      </button>
      <button onClick={() => setPage(1)} disabled={page === 1}>
        Page 2
      </button>
      <button onClick={() => setPage(2)} disabled={page === 2}>
        Page 3
      </button>
      <ChoosePage page={page} />
      <Status />
    </StatusProvider>
  );
}

export default App;
