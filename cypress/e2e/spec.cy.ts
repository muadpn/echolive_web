describe("Login", () => {
  it("Signup", () => {
    cy.visit("http://localhost:3000/");
    cy.get(':nth-child(4) > [href="/auth/signup"]').click();
    cy.get('input[id=":r1:-form-item"]').click().type("Mr Tester");
    cy.get('input[id=":r2:-form-item"]').click().type("test@gmail.com");
    cy.get('input[id=":r3:-form-item"]').click().type("Test12345$");
    cy.get('input[id=":r4:-form-item"]').click().type("Test12345$");
    cy.get('.space-y-5 > .bg-primary').click();
  });

  // it("Login prefill", () => {
  //   cy.visit("http://localhost:3000/");
  //   cy.get(
  //     ".space-y-5 > :nth-child(1) > .justify-between > .inline-flex",
  //   ).click();
  // });

  // it("Logout", () => {
  //   cy.visit("http://localhost:3000/");
  //   cy.get("form > .inline-flex").click();
  // });
});
