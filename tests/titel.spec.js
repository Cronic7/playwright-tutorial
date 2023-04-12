const {test,expect}=require('@playwright/test');//imports test and expect function from the framework

//Creating a test function

test(async({page})=>{

await page.goto('https://google.com');
await expect(page).toHaveTitle('Google');


})