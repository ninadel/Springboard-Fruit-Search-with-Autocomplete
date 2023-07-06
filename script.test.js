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

// describe("#findUserByUsername", function() {
//   let users;
//   beforeEach(function() {
//     users = [
//       { username: "mlewis" },
//       { username: "akagen" },
//       { username: "msmith" }
//     ];
//   });
//   it("returns the object if the username matches the string passed", function() {
//     expect(findUserByUsername(users, "akagen")).toEqual({ username: "akagen" });
//   });
//   it("returns undefined if a username is not found", function() {
//     expect(findUserByUsername(users, 'taco')).toEqual(undefined);
//   });
// });

// describe("#removeUser", function() {
//   let users;
//   beforeEach(function(){
//       users = [
//         { username: "mlewis" },
//         { username: "akagen" },
//         { username: "msmith" }
//       ];
//   })
//   it("removes a user from an array", function() {
//     removeUser(users, "mlewis");
//     expect(users.length).toEqual(2)

//   });
//   it("returns the removed user", function() {
//     expect(removeUser(users,"mlewis")).toEqual({ username: "mlewis" });
//   });
//   it("returns undefined a user from an array", function() {
//     expect(removeUser(users, "taco")).toEqual(undefined);
//     expect(users.length).toEqual(3);

//   });
// });
