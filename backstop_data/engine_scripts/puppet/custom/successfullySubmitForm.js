module.exports = async page => {
    await page.type("#first-name","Plinio");
    await page.type("#last-name","Eduardo");
    await page.type("#email","plinio-eduardo@example.com");
    await page.click("#agree");
    await page.click("button[type=\"submit\"]");
}