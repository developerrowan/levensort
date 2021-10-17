const { levenshtein } = require("./index");

console.log(levenshtein("hello", "ello"));

if(levenshtein("hello", "ello") === 1) {
    pass("two_str_comparison");
} else {
    fail("two_str_comparison");
}

function pass(testStr) {
    console.log("\x1b[32m%s\x1b[0m", `✓ Test ${testStr} passed`);
}

function fail(testStr) {
    console.log("\x1b[31m%s\x1b[0m", `✖ Test ${testStr} failed`)
}