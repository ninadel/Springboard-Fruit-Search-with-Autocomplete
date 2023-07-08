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
describe("search", function () {
  it("returns an empty array when there is no match", function () {
    let testResult = search("77sdfjslkdfj7");
    expect(testResult).toEqual([]);
  });
  it("returns a non-empty array when there is a match", function () {
    let testResult = search("a");
    expect(testResult.length).toBeGreaterThan(0);
  });
  it("results length is not greater than suggestionDisplayCount", function () {
    let testResult = search("a");
    expect(testResult.length).toBeLessThanOrEqual(suggestionDisplayCount);
  });
});

// test getDisplayHTML
describe("getDisplayHTML", function () {
  it("returns a string of html when there's a space mismatch", function () {
    let testHTML = getDisplayHTML("heL Lo", 2, "ll");
    expect(testHTML).toEqual('he<span class="match-text">L L</span>o');
  });
  it("returns a string of html when there's a match in the middle", function () {
    let testHTML = getDisplayHTML("heLLo", 2, "ll");
    expect(testHTML).toEqual('he<span class="match-text">LL</span>o');
  });
  it("returns a string of html when there's a match is at the beginning", function () {
    let testHTML = getDisplayHTML("heLLo", 2, "HE");
    expect(testHTML).toEqual('<span class="match-text">he</span>LLo');
  });
  it("returns a string of html when there's a match is at the end", function () {
    let testHTML = getDisplayHTML("heLLo", 2, "llO");
    expect(testHTML).toEqual('he<span class="match-text">LLo</span>');
  });
});
