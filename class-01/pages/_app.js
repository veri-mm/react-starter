import React from "react";
import "../base.css"

function App({ Component, pageProps }) {
  return (<Component {...pageProps} />);
}

export default App;