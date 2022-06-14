const chakram = require("chakram");

describe("Get data for user with ID 52767", () => {

  it("should give HTTP status code 200", async () => {
    return chakram.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52767").expectStatus(200);
  });

  it('should give Content-Type header containing value "application/json"', async () => {
    return chakram.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52767").expectHeaderContains("content-type", "application/json");
  });

  it('should give "strMeal" JSON body element with value "Bakewell tart"', async () => {
    return chakram.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52767").expectJsonMatch("strMeal", "Bakewell tart");
  });

  it('should give "plain flour" as the main ingredient', async () => {
    return chakram.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52767").expectJsonMatch("strIngredient1", "plain flour");
  });

});

describe("Get data for user with ID 52996", () => {

  it('should give "strMeal" JSON body element with value "French Onion Chicken with Roasted Carrots & Mashed Potatoes"', async () => {
    return chakram.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52996").expectJsonMatch("strMeal", "French Onion Chicken with Roasted Carrots & Mashed Potatoes");
  });

  it('should give "strCategory" JSON body element with value "Chicken"', async () => {
    return chakram.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52996").expectJsonMatch("strCategory", "Chicken");
  });

});

describe("Get random meal", () => {

  it("should give random meal", async () => {
    return chakram.get("www.themealdb.com/api/json/v1/1/random.php");
  });

});