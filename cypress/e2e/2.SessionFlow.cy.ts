describe("Session Management", () => {
  beforeEach(() => {
    // cy.visit("http://localhost:3000/auth/signin");
    cy.visit("http://localhost:3000/");
    cy.get('[href="/auth/signin"] > .inline-flex').click();
  });

  it("should persist login session after refresh", () => {
    cy.get('input[id=":r1:-form-item"]').type("jon@gmail.com");
    cy.get('input[id=":r2:-form-item"]').type("Test12345$");
    cy.get("button[type='submit']").click();

    cy.url().should("not.include", "/auth/signin");
    cy.reload();
    cy.get(".h-16").should("contain", "Dashboard");
  });

  it("should log out successfully", () => {
    cy.get('input[id=":r1:-form-item"]').type("jon@gmail.com");
    cy.get('input[id=":r2:-form-item"]').type("Test12345$");
    cy.get("button[type='submit']").click();

    cy.get(
      ".space-y-5 > :nth-child(1) > .justify-between > .inline-flex",
    ).click();
    cy.get(
      ".flex.h-full.w-full.items-center.justify-center.rounded-full.bg-muted",
    ).click();
    cy.get('button[role="menuitem"]').click(); // Logout button

    cy.url().should("include", "/auth/signin");
    cy.get("body").should("not.contain", "Dashboard");
  });
});
