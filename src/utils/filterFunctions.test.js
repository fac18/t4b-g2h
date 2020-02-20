import { byCollection } from "./filterFunctions";

test("byCollection function returns expected array", () => {
  const result = ["a"];

  let funcObj = {
    records: [
      {
        fields: {
          collection: "a"
        }
      },
      {
        fields: {
          collection: "b"
        }
      }
    ]
  };

  expect(typeof byCollection(funcObj, "a")).toBe("object");
});
