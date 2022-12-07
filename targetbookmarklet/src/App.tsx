import "./App.css";

import Editor from "@monaco-editor/react";
import React from "react";
import gif from "./bookmarklet.gif";
import logo from "./logo.svg";
import schnucks from "./Schnucks2.png";

let code = `let buttons = document.getElementsByClassName('btn item-btn bold-font schnucks-red-bg')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].click();
}`;
//<img src={logo} className="App-logo" alt="logo" />
function App() {
  document.title = "Schnucks Bookmarklet";

  return (
    <div className="App">
      <header className="App-header">
        <img src={schnucks} className="App-logo" alt="logo" />
        <p>
          Drag this link to your bookmarks bar and click it when you are on the
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="App-link"
            href="https://nourish.schnucks.com/web-ext/coupons"
          >
            Schnucks coupon page.
          </a>
        </p>
        <a
          className="App-link"
          href="javascript:(function()%7Blet%20buttons%20%3D%20document.getElementsByClassName('btn%20item-btn%20bold-font%20schnucks-red-bg')%0Afor%20(let%20i%20%3D%200%3B%20i%20%3C%20buttons.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20buttons%5Bi%5D.click()%3B%0A%7D%7D)()%3B"
        >
          Schnuckscoupon
        </a>
        <p>
          (P.S. you really shouldn't just run random code from the internet, but
          the source is below and I've included a gif of it working 🙂)
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="App-link"
          href="https://github.com/sntrenter/targetbookmarklet"
        >
          You can also check it out on Github!
        </a>
        <img src={gif} />
      </header>
      <div className="">
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue={code}
          options={{
            minimap: {
              enabled: false,
            },
            readOnly: true,
            scrollbar: {
              vertical: "hidden",
              alwaysConsumeMouseWheel: false, //this line was hard to search but is worth paying attention too
            },
          }}
        />
      </div>
    </div>
  );
}

export default App;
