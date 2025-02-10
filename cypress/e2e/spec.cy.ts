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

///////////////////////////////////////////////////////////////////////////

// describe("Navigation and UI Checks", () => {
//   it("should navigate to the Sign Up page and display correct elements", () => {
//     cy.visit("http://localhost:3000/");
//     cy.get('.space-x-4 > [href="/auth/signup"] > .inline-flex').click();
//     cy.url().should("include", "/auth/signup");
//     cy.get("h1").should("contain", "Signup");
//     cy.get("input").should("have.length", 4); // Name, Email, Password, Confirm Password
//   });

//   it("should navigate to the Sign In page and display correct elements", () => {
//     cy.visit("http://localhost:3000/");
//     cy.get('[href="/auth/signin"] > .inline-flex').click();
//     cy.url().should("include", "/auth/signin");
//     cy.get("h1").should("contain", "Signin");
//     cy.get("input").should("have.length", 2); // Email, Password
//   });
// });

// describe("Signup Validations", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:3000/auth/signup");
//   });

//   it("should show error for weak password", () => {
//     cy.get('input[id=":r1:-form-item"]').type("John Doe");
//     cy.get('input[id=":r2:-form-item"]').type("john@example.com");
//     cy.get('input[id=":r3:-form-item"]').type("123");
//     cy.get('input[id=":r4:-form-item"]').type("123");
//     cy.get(".space-y-5 > .bg-primary").click();
//     cy.contains("Password must be at least 8 characters long").should("be.visible");
//   });

//   it("should show error for mismatched passwords", () => {
//     cy.get('input[id=":r1:-form-item"]').type("John Doe");
//     cy.get('input[id=":r2:-form-item"]').type("john@example.com");
//     cy.get('input[id=":r3:-form-item"]').type("Test12345$");
//     cy.get('input[id=":r4:-form-item"]').type("WrongPassword");
//     cy.get(".space-y-5 > .bg-primary").click();
//     cy.contains("Passwords do not match").should("be.visible");
//   });

//   it("should show error for invalid email format", () => {
//     cy.get('input[id=":r1:-form-item"]').type("John Doe");
//     cy.get('input[id=":r2:-form-item"]').type("invalidemail");
//     cy.get('input[id=":r3:-form-item"]').type("Test12345$");
//     cy.get('input[id=":r4:-form-item"]').type("Test12345$");
//     cy.get(".space-y-5 > .bg-primary").click();
//     cy.contains("Enter a valid email").should("be.visible");
//   });
// });

// describe("Login Validations", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:3000/auth/signin");
//   });

//   it("should show error for incorrect password", () => {
//     cy.get('input[id=":r1:-form-item"]').type("jon@gmail.com");
//     cy.get('input[id=":r2:-form-item"]').type("WrongPassword123$");
//     cy.get("button[type='submit']").click();
//     cy.contains("Invalid email or password").should("be.visible");
//   });

//   it("should show error for non-existent account", () => {
//     cy.get('input[id=":r1:-form-item"]').type("nonexistent@gmail.com");
//     cy.get('input[id=":r2:-form-item"]').type("RandomPass123$");
//     cy.get("button[type='submit']").click();
//     cy.contains("Account does not exist").should("be.visible");
//   });

//   it("should show error for empty email or password", () => {
//     cy.get("button[type='submit']").click();
//     cy.contains("Email is required").should("be.visible");
//     cy.contains("Password is required").should("be.visible");
//   });
// });

// describe("Session Management", () => {
//   it("should persist login session after refresh", () => {
//     cy.visit("http://localhost:3000/auth/signin");
//     cy.get('input[id=":r1:-form-item"]').type("jon@gmail.com");
//     cy.get('input[id=":r2:-form-item"]').type("Test12345$");
//     cy.get("button[type='submit']").click();

//     cy.url().should("not.include", "/auth/signin");
//     cy.reload();
//     cy.get("nav").should("contain", "Dashboard"); // Ensure user is still logged in
//   });

//   it("should log out successfully", () => {
//     cy.visit("http://localhost:3000/auth/signin");
//     cy.get('input[id=":r1:-form-item"]').type("jon@gmail.com");
//     cy.get('input[id=":r2:-form-item"]').type("Test12345$");
//     cy.get("button[type='submit']").click();

//     cy.get(".user-profile-icon").click();
//     cy.get('button[role="menuitem"]').click(); // Logout button

//     cy.url().should("include", "/auth/signin");
//     cy.get("nav").should("not.contain", "Dashboard"); // Ensure user is logged out
//   });
// });

// describe("GitHub Authentication", () => {
//   it("should redirect to GitHub login", () => {
//     cy.visit("http://localhost:3000/auth/signin");
//     cy.get("button").contains("Sign in with GitHub").click();
//     cy.url().should("include", "github.com/login");
//   });
// });
