describe("Login Validations", () => {
  beforeEach(() => {
    // cy.visit("http://localhost:3000/auth/signin");
    cy.visit("http://localhost:3000/");
    cy.get('[href="/auth/signin"] > .inline-flex').click();
  });

  it("should show error for incorrect password", () => {
    cy.get('input[id=":r1:-form-item"]').type("jon@gmail.com");
    cy.get('input[id=":r2:-form-item"]').type("WrongPassword123$");
    cy.get("button[type='submit']").click();
    cy.contains("Invalid login credentials").should("be.visible");
  });

  it("should show error for empty email or password", () => {
    cy.get("button[type='submit']").click();
    cy.contains("Should be a valid email").should("be.visible");
    cy.contains("Password should have minimum 6 letters").should("be.visible");
  });

  it("should show error for non-existent account", () => {
    cy.get('input[id=":r1:-form-item"]').type("nonexistent@gmail.com");
    cy.get('input[id=":r2:-form-item"]').type("RandomPass123$");
    cy.get("button[type='submit']").click();
    cy.contains("Invalid login credentials").should("be.visible");
  });
});


describe("GitHub Auth Enable", () => {
  it("should redirect to GitHub login", () => {
    cy.visit("http://localhost:3000/");
    cy.get('.space-x-4 > [href="/auth/signin"] > .inline-flex').click();
    cy.get("button").contains("Sign In with Github").click();
    cy.origin("https://github.com", () => {
      cy.url().should("include", "/login");
    });
  });
});


