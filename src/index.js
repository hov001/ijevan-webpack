const { remove } = require("lodash");
// import _ from "lodash";

const array = [3, false, "", 4, 0, "hello", null, true];

const res = remove([...array], (item) => item);

console.log("array:::", array);
console.log("res:::", res);
