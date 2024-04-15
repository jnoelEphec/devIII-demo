describe('Login Test', () => {
  it('Visits the initial project page, redirects to login, logs in, and checks redirection to /table', () => {
    // Visite la page d'accueil
    cy.visit('http://localhost:4200/');

    // Vérifie que la redirection vers /login s'effectue
    cy.url().should('include', '/login');

    // Remplit les champs de formulaire
    cy.get('input[name="username"]').type('user@test.com');
    cy.get('input[name="password"]').type('password123');

    // Clique sur le bouton de connexion
    cy.get('button[type="submit"]').click();

    // Vérifie que l'utilisateur est redirigé vers /table après la connexion
    cy.url().should('include', '/table');
  });
});
