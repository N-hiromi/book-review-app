describe('login画面のバリデーション', () => {
  // beforeEach(() => {
    // cy.exec('npm run cy')
  //   cy.wait(20000)
  // })
  it('passwordは登録必須か', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('.email-input').type('email@test')
    cy.get('.signin-button').click()
    cy.wait(3000);
    cy.get('.error-password-message').should('include.text', '入力が必須の項目です')
  })
  it('mailは登録必須か', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('.password-input').type('password@test')
    cy.get('.signin-button').click()
    cy.wait(3000);
    cy.get('.error-email-message').should('include.text', '入力が必須の項目です')
  })
})
