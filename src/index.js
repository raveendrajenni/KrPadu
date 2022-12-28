import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Senior from "./list1";
import Present from "./list2";
import Future from "./list3";
import L11 from "./list1up1";
import L12 from "./list1up2";
import L13 from "./list1up3";
import L14 from "./list1up4";
import L15 from "./list1up5";
import L16 from "./list1up6";
import L17 from "./list1up7";
import L18 from "./list1up8";
import L19 from "./list1up9";
import L110 from "./list1up10";
import L111 from "./list1up11";
import L112 from "./list1up12";
import L113 from "./list1up13";
import L114 from "./list1up14";
import L115 from "./list1up15";
import L116 from "./list1up16";
import L117 from "./list1up17";
import L118 from "./list1up18";
import L119 from "./list1up19";

import L21 from "./list2up1";
import L22 from "./list2up2";
import L23 from "./list2up3";
import L24 from "./list2up4";
import L25 from "./list2up5";
import L26 from "./list2up6";
import L27 from "./list2up7";
import L28 from "./list2up8";
import L29 from "./list2up9";
import L210 from "./list2up10";
import L211 from "./list2up11";
import L212 from "./list2up12";
import L213 from "./list2up13";
import L214 from "./list2up14";
import L215 from "./list2up15";
import L216 from "./list2up16";
import L217 from "./list2up17";
import L218 from "./list2up18";
import L219 from "./list2up19";

import L31 from "./list3up1";
import L32 from "./list3up2";
import L33 from "./list3up3";
import L34 from "./list3up4";
import L35 from "./list3up5";
import L36 from "./list3up6";
import L37 from "./list3up7";
import L38 from "./list3up8";
import L39 from "./list3up9";
import L310 from "./list3up10";
import L311 from "./list3up11";
import L312 from "./list3up12";
import L313 from "./list3up13";
import L314 from "./list3up14";
import L315 from "./list3up15";
import L316 from "./list3up16";
import L317 from "./list3up17";
import L318 from "./list3up18";
import L319 from "./list3up19";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/senior" element={<Senior />} />
      <Route path="/present" element={<Present />} />
      <Route path="/future" element={<Future />} />
      <Route path="/l11" element={<L11 />} />
      <Route path="/l12" element={<L12 />} />
      <Route path="/l13" element={<L13 />} />
      <Route path="/l14" element={<L14 />} />
      <Route path="/l15" element={<L15 />} />
      <Route path="/l16" element={<L16 />} />
      <Route path="/l17" element={<L17 />} />
      <Route path="/l18" element={<L18 />} />
      <Route path="/l19" element={<L19 />} />
      <Route path="/l110" element={<L110 />} />
      <Route path="/l111" element={<L111 />} />
      <Route path="/l112" element={<L112 />} />
      <Route path="/l113" element={<L113 />} />
      <Route path="/l114" element={<L114 />} />
      <Route path="/l115" element={<L115 />} />
      <Route path="/l116" element={<L116 />} />
      <Route path="/l117" element={<L117 />} />
      <Route path="/l118" element={<L118 />} />
      <Route path="/l119" element={<L119 />} />

      <Route path="/l21" element={<L21 />} />
      <Route path="/l22" element={<L22 />} />
      <Route path="/l23" element={<L23 />} />
      <Route path="/l24" element={<L24 />} />
      <Route path="/l25" element={<L25 />} />
      <Route path="/l26" element={<L26 />} />
      <Route path="/l27" element={<L27 />} />
      <Route path="/l28" element={<L28 />} />
      <Route path="/l29" element={<L29 />} />
      <Route path="/l210" element={<L210 />} />
      <Route path="/l211" element={<L211 />} />
      <Route path="/l212" element={<L212 />} />
      <Route path="/l213" element={<L213 />} />
      <Route path="/l214" element={<L214 />} />
      <Route path="/l215" element={<L215 />} />
      <Route path="/l216" element={<L216 />} />
      <Route path="/l217" element={<L217 />} />
      <Route path="/l218" element={<L218 />} />
      <Route path="/l219" element={<L219 />} />

      <Route path="/l31" element={<L31 />} />
      <Route path="/l32" element={<L32 />} />
      <Route path="/l33" element={<L33 />} />
      <Route path="/l34" element={<L34 />} />
      <Route path="/l35" element={<L35 />} />
      <Route path="/l36" element={<L36 />} />
      <Route path="/l37" element={<L37 />} />
      <Route path="/l38" element={<L38 />} />
      <Route path="/l39" element={<L39 />} />
      <Route path="/l310" element={<L310 />} />
      <Route path="/l311" element={<L311 />} />
      <Route path="/l312" element={<L312 />} />
      <Route path="/l313" element={<L313 />} />
      <Route path="/l314" element={<L314 />} />
      <Route path="/l315" element={<L315 />} />
      <Route path="/l316" element={<L316 />} />
      <Route path="/l317" element={<L317 />} />
      <Route path="/l318" element={<L318 />} />
      <Route path="/l319" element={<L319 />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
