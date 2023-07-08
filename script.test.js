describe("parseArr", function () {
  let arr = [
    "Apple",
    "Avocado 🥑",
    "Banana",
    "Bilberry",
    "Date",
    "Dragonfruit",
    "Durian",
    "Elderberry",
    "Feijoa",
    "Fig",
    "Gooseberry",
    "Juniper berry",
  ];
  let newArr = parseArr(arr);
  it("returns an array with same length as input array", function () {
    expect(newArr.length).toEqual(arr.length);
  });
  it("returns an array of objects", function () {
    expect(newArr[0]).toEqual(jasmine.any(Object));
  });
  it("returns an array of objects where the two values are different", function () {
    expect(newArr[0]["simple"]).not.toEqual(newArr[0]["display"]);
  });
  it("creates a value without capitals, emojis, or spaces", function () {
    let result = parseArr(["Juniper Berry 🥑"]);
    // console.log("result", result);
    expect(result[0]["simple"]).toEqual("juniperberry");
  });
});

// test search function

// test returnHTML
