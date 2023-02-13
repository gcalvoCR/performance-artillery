module.exports = { artilleryFlow };

async function artilleryFlow(page) {

  // Go to https://artillery.io/
  await page.goto('https://artillery.io');
  
  // Click the docs option on the nav bar
  await page.click('[aria-label="Main navigation"] [href="/docs"]');

  // type on search bar
  await page.fill('input[aria-label="Search"]', 'example');

  // send an enter keyboard
  await page.keyboard.press('Enter');

  // Let's say we want to wait for a hard time of 2s
  await page.waitForTimeout(2000);

  // click to check pricing
  await page.click('footer a[href="/pricing"]');

  // click to sign up
  await page.click('text=Sign up');

}