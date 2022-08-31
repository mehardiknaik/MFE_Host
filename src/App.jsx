import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.css";

const MFE1_Button = lazy(() => import("MFE1/Button"));

const App = () => (
  <div className="container">
    <Suspense fallback="loading button...">
      <MFE1_Button value={10}/>
    </Suspense>
    <div>Name: MFE_Host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
