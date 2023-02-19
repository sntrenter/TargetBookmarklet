import "./App.css";

import Editor from "@monaco-editor/react";
import React from "react";
import gif from "./bookmarklet.gif";
import logo from "./logo.svg";
import schnucks from "./spot.png";

let code = `function clickButtons(btns) {
  for (var i = 0; i < btns.length; i++) {
    setTimeout(function(btn) {
      btn.click();
    }, i * 250, btns[i]); 
  }
}

var btns = document.querySelectorAll('button[data-test="button-default"]:not(#submit-button)');
clickButtons(btns);`;
//<img src={logo} className="App-logo" alt="logo" />
function App() {
  document.title = "Target Promo Bookmarklet";

  return (
    <div className="App">
      <header className="App-header">
        <img src={schnucks} className="App-logo" alt="logo" />
        <p>
          Drag the bellow link to your bookmarks bar and click it when you are
          on the
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="App-link"
            href="https://www.target.com/circle/offers/recommended"
          >
            Target Offers page
          </a>{" "}
          (it can only click the "for you " promotions because target limits the
          number of coupons you can snip 😢).
        </p>
        <a href="javascript:(function()%7Bfunction%20clickButtons(btns)%20%7B%0A%20%20for%20(var%20i%20%3D%200%3B%20i%20%3C%20btns.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20setTimeout(function(btn)%20%7B%0A%20%20%20%20%20%20btn.click()%3B%0A%20%20%20%20%7D%2C%20i%20*%20250%2C%20btns%5Bi%5D)%3B%20%0A%20%20%7D%0A%7D%0A%0Avar%20btns%20%3D%20document.querySelectorAll('button%5Bdata-test%3D%22button-default%22%5D%3Anot(%23submit-button)')%3B%0AclickButtons(btns)%3B%7D)()%3B">
          TargetPromoBookmarklet
        </a>
        <p>
          (P.S. you really shouldn't just run random code from the internet, but
          the source is below and I've included a gif of it working 🙂)(P.S.S Target doesn't register the first "save offer" click for some reason when done automatically, you will need to re click it)
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
