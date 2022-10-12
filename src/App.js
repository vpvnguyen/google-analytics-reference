import "./App.css";
import { analytics, createGoogleTag } from "./google-analytics";

function App() {
  console.log("analytics", { analytics });
  return (
    <div className="App">
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();

          function gtag() {
            window.dataLayer.push({
              event: "form_submit",
              data: "This is a form submit",
            });
          }

          gtag();
        }}
      >
        Form Submit
      </button>
      {createGoogleTag()}
    </div>
  );
}

export default App;
