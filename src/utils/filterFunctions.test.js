import byCollection from "./filterFunctions";

// test to be fixed

test("byCollection function returns expected array", () => {
  const result = ["a"];
  // const ;
  expect(byCollection(["a", "b", "c,"], "a")).toEqual(result);
});
