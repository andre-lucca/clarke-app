/// <reference types = "cypress" />
// @ts-check

const API_URL = "http://localhost:3000"
const FRONT_URL = "http://localhost:5173"

describe("Render Clarke App", () => {
  beforeEach(() => {
    cy.intercept("GET", `${API_URL}/suppliers`, { fixture: "teste.html" }).as("suppliers")
    cy.visit(FRONT_URL)
  })

  it("Should show connected on apiStatus component", () => {
    cy.get("span[data-cy=\"apiStatus\"]").should("have.text", "conectado")
  })

  it("Should fill the input", () => {
    cy.get("input[data-cy=\"monthlyUsage\"]").type("1000").should("have.value", "1000")
  })

  it("Should show at least one supplier that could serve", () => {
    cy.get("input[data-cy=\"monthlyUsage\"]").type("5000{enter}")
    cy.get("li[data-cy=\"true\"]").should("have.length.above", 0)
  })
})