// cypress/integration/ComponentName.cy.js
import React from "react";
import App from "./../../src/App";
import store from "./../../src/store"; // Import your Redux store
import { Provider } from "react-redux";

describe("App.js", () => {
  it("check total app", () => {
    cy.mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    cy.get("h1").should("have.text", "Data from API:");
  });
});

describe("loading test", () => {
  it("display spinner and skelton", () => {
    cy.mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    cy.get('[data-cy="skelton-loader"]').should("be.visible");
    cy.wait(3000);
    cy.get('[data-cy="spinner-loader"]').should("be.visible");
  });
});

describe("exist un order items", () => {
  it("exit list items", () => {
    cy.mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    cy.wait(6000);
    cy.get('[data-cy="unorder-list-item"]').should("be.visible");
    cy.get('[data-cy="list-item"]').should("exist");
  });
});
