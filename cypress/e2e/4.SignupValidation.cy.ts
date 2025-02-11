describe("Signup Validations", () => {
  beforeEach(() => {
    // cy.visit("http://localhost:3000/auth/signup");
    cy.visit("http://localhost:3000/");
    cy.get('.space-x-4 > [href="/auth/signup"] > .inline-flex').click();
  });
  it("should show error for invalid email format", () => {
    cy.get('input[id=":r1:-form-item"]').type("John Doe");
    cy.get('input[id=":r2:-form-item"]').type("invalidemail");
    cy.get('input[id=":r3:-form-item"]').type("Test12345$");
    cy.get('input[id=":r4:-form-item"]').type("Test12345$");
    cy.get(".space-y-5 > .bg-primary").click();
    cy.contains("Should be a valid email").should("be.visible");
  });
  it("should show error for weak password", () => {
    cy.get('input[id=":r1:-form-item"]').click().type("Jonathan Smith");
    cy.get('input[id=":r2:-form-item"]').click().type("jon@gmail.com");
    cy.get('input[id=":r3:-form-item"]').click().type("333");
    cy.get('input[id=":r4:-form-item"]').click().type("333");
    cy.get(".space-y-5 > .bg-primary").click();
    cy.contains("Password should have minimum 6 letters").should("be.visible");
  });
  it("should show error for mismatched passwords", () => {
    cy.get('input[id=":r1:-form-item"]').type("John Doe");
    cy.get('input[id=":r2:-form-item"]').type("john@example.com");
    cy.get('input[id=":r3:-form-item"]').type("Test12345$");
    cy.get('input[id=":r4:-form-item"]').type("WrongPassword");
    cy.get(".space-y-5 > .bg-primary").click();
    cy.contains("Password did not match").should("be.visible");
  });
});
