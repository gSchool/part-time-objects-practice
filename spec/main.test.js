describe("Regular Track", function () {
  describe("Problem 1", function () {
    it("should return an object", function () {
      expect(typeof returnMe()).toBe("object");
    });
    it("should return an object with a property of name", function () {
      expect(returnMe().hasOwnProperty('name')).toBe(true);
    });
    it("should return an object with a property of city", function () {
      expect(returnMe().hasOwnProperty('city')).toBe(true);
    });
    it("should return an object with a property of jobTitle", function () {
      expect(returnMe().hasOwnProperty('jobTitle')).toBe(true);
    });
  });
  describe("Problem 2", function () {
    it("should return an object", function () {
      expect(typeof returnMe2()).toBe("object");
    });
    it("should return an object with a property of name", function () {
      expect(returnMe2().hasOwnProperty('name')).toBe(true);
    });
    it("should return an object with a property of city", function () {
      expect(returnMe2().hasOwnProperty('city')).toBe(true);
    });
    it("should return an object with a property of jobTitle", function () {
      expect(returnMe2().hasOwnProperty('jobTitle')).toBe(true);
    });
    it("should return an object with a property of family", function () {
      expect(returnMe2().hasOwnProperty('family')).toBe(true);
    });
    it("should return an object with a property of family that is an array", function () {
      expect(Array.isArray(returnMe2().family)).toBe(true);
    });
  });
  // describe("Problem 3", function () {
  //
  // });
  describe("Problem 4", function () {
    it("should return an array", function () {
      expect(Array.isArray(pdChoice())).toBe(true);
    });
    it("should return Penny's dinner choice", function () {
      expect(pdChoice()).toEqual(["salad", "beef", "ice cream"]);
    });
  });
  describe("Problem 5", function () {
    it("should return a number", function () {
      expect(!isNaN(ptNum())).toBe(true);
    });
    it("should return Pablo's table number", function () {
      expect(ptNum()).toEqual(4);
    });
  });
  describe("Problem 6", function () {
    it("should return an object", function () {
      expect(typeof lssc()).toBe("object");
    });
    it("should return Lauren's specialConsiderations", function () {
      expect(lssc()).toEqual({ allergies: "melon", seating: "Don't sit her next to ex husband at table 8."});
    });
  });
  describe("Problem 7", function () {
    it("should return a string", function () {
      expect(typeof bdChoice()).toBe("string");
    });
    it("should return Billy's dessert choice", function () {
      expect(bdChoice()).toEqual("sorbet");
    });
  });
  describe("Problem 8", function () {
    it("should return an array", function () {
      expect(Array.isArray(aAllergies())).toBe(true);
    });
    it("should return Ada's allergies", function () {
      expect(aAllergies()).toEqual(["boys"]);
    });
  });
  describe("Problem 9", function () {
    it("should return a string", function () {
      expect(typeof dinerMealChoices()).toBe("string");
    });
    it("should return Billy's dessert choice", function () {
      expect(dinerMealChoices(["soup", "chicken", "ice cream"])).toEqual("That diner's appetizer is soup. She will be eating chicken for dinner and has selected ice cream as her dessert.");
    });
  });
});
