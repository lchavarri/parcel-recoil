import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

export class ParcelApp {
  constructor() {
    this.render();
  }

  private render(): void {
    ReactDOM.render(
      React.createElement(App, { app: this }),
      document.getElementById("root")
    );
  }
}

new ParcelApp();
