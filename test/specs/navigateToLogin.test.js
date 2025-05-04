describe('Navigate to Login Screen', () => {
  it('should tap the Log In button on the onboarding screen', async () => {
    const loginButton = await $('android=new UiSelector().text("Log In")');
    await loginButton.waitForDisplayed({ timeout: 5000 });
    await loginButton.click();
  });
});