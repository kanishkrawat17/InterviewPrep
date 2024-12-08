const obj = {
  a: 1,
  b: "b",
  d: {
    dd: "Y",
  },
  e: {
    h: [1, 2],
    f: {
      g: "g",
    },
  },
  f: [1, 2],
};

const flattenNestedObject = function (obj, keyName, result) {
  for (let key in obj) {
    const value = obj[key];
    let newKeyName = `${keyName}${keyName ? "." : ""}${key}`;

    // Condition: 1,  not a nested object or not an array
    if (typeof value != "object" && !Array.isArray(value)) {
      result[newKeyName] = value;
    } 

    // Condition: 2,  if it is  an array
    else if (Array.isArray(value)) {
      value.forEach((val, i) => {
        flattenNestedObject({[`${i}`]: val}, newKeyName, result);
      });
    } 

    // Condition: 3,  It's a nested object.
    else {
      flattenNestedObject(value, newKeyName, result);
    }
  }
  return result;
};

const result = flattenNestedObject(obj, "", {});
console.log("Result::", result);
