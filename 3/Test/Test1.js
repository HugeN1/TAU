const { Builder, By, Key } = require("selenium-webdriver");
var should = require("chai").should();

describe("count Vat netto with 7% todo tests", function () {

    it("succesfully count a todo in application", async function () {
        let driveropera = await new Builder().forBrowser("opera").build();

        await driveropera.get("https://www.pitax.pl/wiedza/przepisy-i-wskazniki/kalkulator-vat/")

        await driveropera.findElement(By.id("taxpayer")).sendKeys("20", Key.RETURN);

        await driveropera.findElement(By.id("invoiceType")).sendKeys("brutto", Key.RETURN);

        await driveropera.findElement(By.id("taxType")).sendKeys("7%", Key.RETURN);

        await driveropera.findElement(By.id("calc-vat-brutto-button")).click();

        let todoOperaNetto = await driveropera.findElement(By.xpath('//*[@id="result"]/p[2]/strong')).getText().then(function (value) {
            return value
        });
        let todoOperaBrutto = await driveropera.findElement(By.xpath('//*[@id="result"]/p[3]/strong')).getText().then(function (value) {
            return value
        });
        let todoOperaVatPercent = await driveropera.findElement(By.xpath('//*[@id="result"]/p[4]/strong')).getText().then(function (value) {
            return value
        });
        let todoOperaVat = await driveropera.findElement(By.xpath('//*[@id="result"]/p[5]/strong')).getText().then(function (value) {
            return value
        });

        todoOperaNetto.should.equal("18.69");
        todoOperaBrutto.should.equal("20.00");
        todoOperaVatPercent.should.equal("7%");
        todoOperaVat.should.equal("1.31");

        await driveropera.quit();

        let driverchrome = await new Builder().forBrowser("chrome").build();

        await driverchrome.get("https://www.pitax.pl/wiedza/przepisy-i-wskazniki/kalkulator-vat/")

        await driverchrome.findElement(By.id("taxpayer")).sendKeys("20", Key.RETURN);

        await driverchrome.findElement(By.id("invoiceType")).sendKeys("brutto", Key.RETURN);

        await driverchrome.findElement(By.id("taxType")).sendKeys("7%", Key.RETURN);

        await driverchrome.findElement(By.id("calc-vat-brutto-button")).click();

        let todoChromeNetto = await driverchrome.findElement(By.xpath('//*[@id="result"]/p[2]/strong')).getText().then(function (value) {
            return value
        });
        let todoChromeBrutto = await driverchrome.findElement(By.xpath('//*[@id="result"]/p[3]/strong')).getText().then(function (value) {
            return value
        });
        let todoChromeVatPercent = await driverchrome.findElement(By.xpath('//*[@id="result"]/p[4]/strong')).getText().then(function (value) {
            return value
        });
        let todoChromeVat = await driverchrome.findElement(By.xpath('//*[@id="result"]/p[5]/strong')).getText().then(function (value) {
            return value
        });

        todoChromeNetto.should.equal("18.69");
        todoChromeBrutto.should.equal("20.00");
        todoChromeVatPercent.should.equal("7%");
        todoChromeVat.should.equal("1.31");

        await driverchrome.quit();

    })
})

describe("count Vat brutto with 23% todo tests", function () {

    it("succesfully count a todo in application", async function () {
        let driveropera = await new Builder().forBrowser("opera").build();

        await driveropera.get("https://www.pitax.pl/wiedza/przepisy-i-wskazniki/kalkulator-vat/")

        await driveropera.findElement(By.id("taxpayer")).sendKeys("20", Key.RETURN);

        await driveropera.findElement(By.id("invoiceType")).sendKeys("netto", Key.RETURN);

        await driveropera.findElement(By.id("taxType")).sendKeys("23%", Key.RETURN);

        await driveropera.findElement(By.id("calc-vat-brutto-button")).click();

        let todoOperaNettoSecond = await driveropera.findElement(By.xpath('//*[@id="result"]/p[2]/strong')).getText().then(function (value) {
            return value
        });
        let todoOperaBruttoSecond = await driveropera.findElement(By.xpath('//*[@id="result"]/p[3]/strong')).getText().then(function (value) {
            return value
        });
        let todoOperaVatPercentSecond = await driveropera.findElement(By.xpath('//*[@id="result"]/p[4]/strong')).getText().then(function (value) {
            return value
        });
        let todoOperaVatSecond = await driveropera.findElement(By.xpath('//*[@id="result"]/p[5]/strong')).getText().then(function (value) {
            return value
        });

        todoOperaNettoSecond.should.equal("20.00");
        todoOperaBruttoSecond.should.equal("24.60");
        todoOperaVatPercentSecond.should.equal("23%");
        todoOperaVatSecond.should.equal("4.60");

        await driveropera.quit();

        let driverchrome = await new Builder().forBrowser("chrome").build();

        await driverchrome.get("https://www.pitax.pl/wiedza/przepisy-i-wskazniki/kalkulator-vat/")

        await driverchrome.findElement(By.id("taxpayer")).sendKeys("20", Key.RETURN);

        await driverchrome.findElement(By.id("invoiceType")).sendKeys("netto", Key.RETURN);

        await driverchrome.findElement(By.id("taxType")).sendKeys("23%", Key.RETURN);

        await driverchrome.findElement(By.id("calc-vat-brutto-button")).click();

        let todoChromeNettoSecond = await driverchrome.findElement(By.xpath('//*[@id="result"]/p[2]/strong')).getText().then(function (value) {
            return value
        });
        let todoChromeBruttoSecond = await driverchrome.findElement(By.xpath('//*[@id="result"]/p[3]/strong')).getText().then(function (value) {
            return value
        });
        let todoChromeVatPercentSecond = await driverchrome.findElement(By.xpath('//*[@id="result"]/p[4]/strong')).getText().then(function (value) {
            return value
        });
        let todoChromeVatSecond = await driverchrome.findElement(By.xpath('//*[@id="result"]/p[5]/strong')).getText().then(function (value) {
            return value
        });

        todoChromeNettoSecond.should.equal("20.00");
        todoChromeBruttoSecond.should.equal("24.60");
        todoChromeVatPercentSecond.should.equal("23%");
        todoChromeVatSecond.should.equal("4.60");

        await driverchrome.quit();

    })
})

describe("count Vat brutto with 3% todo tests", function () {

    it("succesfully count a todo in application", async function () {
        let driveropera = await new Builder().forBrowser("opera").build();

        await driveropera.get("https://www.pitax.pl/wiedza/przepisy-i-wskazniki/kalkulator-vat/")

        await driveropera.findElement(By.id("taxpayer")).sendKeys("20", Key.RETURN);

        await driveropera.findElement(By.id("invoiceType")).sendKeys("netto", Key.RETURN);

        await driveropera.findElement(By.id("taxType")).sendKeys("3%", Key.RETURN);

        await driveropera.findElement(By.id("calc-vat-brutto-button")).click();

        let todoOperaNettoSecond = await driveropera.findElement(By.xpath('//*[@id="result"]/p[2]/strong')).getText().then(function (value) {
            return value
        });
        let todoOperaBruttoSecond = await driveropera.findElement(By.xpath('//*[@id="result"]/p[3]/strong')).getText().then(function (value) {
            return value
        });
        let todoOperaVatPercentSecond = await driveropera.findElement(By.xpath('//*[@id="result"]/p[4]/strong')).getText().then(function (value) {
            return value
        });
        let todoOperaVatSecond = await driveropera.findElement(By.xpath('//*[@id="result"]/p[5]/strong')).getText().then(function (value) {
            return value
        });

        todoOperaNettoSecond.should.equal("20.00");
        todoOperaBruttoSecond.should.equal("20.00");
        todoOperaVatPercentSecond.should.equal("3%");
        todoOperaVatSecond.should.equal("0.00");

        await driveropera.quit();

        let driverchrome = await new Builder().forBrowser("chrome").build();

        await driverchrome.get("https://www.pitax.pl/wiedza/przepisy-i-wskazniki/kalkulator-vat/")

        await driverchrome.findElement(By.id("taxpayer")).sendKeys("20", Key.RETURN);

        await driverchrome.findElement(By.id("invoiceType")).sendKeys("netto", Key.RETURN);

        await driverchrome.findElement(By.id("taxType")).sendKeys("3%", Key.RETURN);

        await driverchrome.findElement(By.id("calc-vat-brutto-button")).click();

        let todoChromeNettoSecond = await driverchrome.findElement(By.xpath('//*[@id="result"]/p[2]/strong')).getText().then(function (value) {
            return value
        });
        let todoChromeBruttoSecond = await driverchrome.findElement(By.xpath('//*[@id="result"]/p[3]/strong')).getText().then(function (value) {
            return value
        });
        let todoChromeVatPercentSecond = await driverchrome.findElement(By.xpath('//*[@id="result"]/p[4]/strong')).getText().then(function (value) {
            return value
        });
        let todoChromeVatSecond = await driverchrome.findElement(By.xpath('//*[@id="result"]/p[5]/strong')).getText().then(function (value) {
            return value
        });

        todoChromeNettoSecond.should.equal("20.00");
        todoChromeBruttoSecond.should.equal("20.00");
        todoChromeVatPercentSecond.should.equal("3%");
        todoChromeVatSecond.should.equal("0.00");

        await driverchrome.quit();

    })
})