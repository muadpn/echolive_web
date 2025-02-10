describe("Initial Page Render", () => {
  it("should load successfully and display the correct heading", () => {
    cy.visit("http://localhost:3000/");
    cy.get(
      "body > main > div > section.relative.overflow-hidden.px-4.py-20 > div > div > div.container.relative.mx-auto.px-4 > div.mb-6.max-w-md.text-5xl.font-semibold.tracking-tight.md\\:max-w-xl.md\\:text-7xl.lg\\:max-w-4xl > p",
    ).should("have.attr", "aria-label", "Real-time Widgets Made Simple");
  });
});

describe("Authentication System", () => {
  it("should allow a user to sign up", () => {
    cy.visit("http://localhost:3000/");
    cy.get('.space-x-4 > [href="/auth/signup"] > .inline-flex').click();
    cy.get('input[id=":r1:-form-item"]').click().type("Jonathan Smith");
    cy.get('input[id=":r2:-form-item"]').click().type("jon@gmail.com");
    cy.get('input[id=":r3:-form-item"]').click().type("Test12345$");
    cy.get('input[id=":r4:-form-item"]').click().type("Test12345$");
    cy.get(".space-y-5 > .bg-primary").click();
  });

  it("should allow a user to log in", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[href="/auth/signin"] > .inline-flex').click();
    cy.get('input[id=":r1:-form-item"]').type("jon@gmail.com");
    cy.get('input[id=":r2:-form-item"]').type("Test12345$");
    cy.get("button[type='submit']").click();
  });

  it("should allow a user to log out", () => {
    cy.visit("http://localhost:3000/auth/signin");
    cy.get(
      ".space-y-5 > :nth-child(1) > .justify-between > .inline-flex",
    ).click();
    cy.get(
      ".flex.h-full.w-full.items-center.justify-center.rounded-full.bg-muted",
    ).click();
    cy.get('button[role="menuitem"]').click();
  });
});
