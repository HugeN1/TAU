const {Builder, By} = require ("selenium-webdriver");

async function example(){

let drivero = await new Builder().forBrowser("opera").build();

await drivero.get("https://www.pitax.pl/wiedza/przepisy-i-wskazniki/kalkulator-vat/")

await drivero.findElement(By.id("taxpayer")).sendKeys("20");

await drivero.findElement(By.id("invoiceType")).sendKeys("brutto");

await drivero.findElement(By.id("taxType")).sendKeys("7%");

await drivero.findElement(By.id("calc-vat-brutto-button")).click();

await drivero.findElement(By.id("invoiceType")).sendKeys("netto");

await drivero.findElement(By.id("taxType")).sendKeys("23%");

await drivero.findElement(By.id("calc-vat-brutto-button")).click();

await drivero.quit();

let driverc = await new Builder().forBrowser("chrome").build();

await driverc.get("https://www.pitax.pl/wiedza/przepisy-i-wskazniki/kalkulator-vat/")

await driverc.findElement(By.id("taxpayer")).sendKeys("20");

await driverc.findElement(By.id("invoiceType")).sendKeys("brutto");

await driverc.findElement(By.id("taxType")).sendKeys("7%");

await driverc.findElement(By.id("calc-vat-brutto-button")).click();

await driverc.findElement(By.id("invoiceType")).sendKeys("netto");

await driverc.findElement(By.id("taxType")).sendKeys("23%");

await driverc.findElement(By.id("calc-vat-brutto-button")).click();

await driverc.quit();

}
example()