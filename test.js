const { levenshtein, levensearch } = require("./index");

const arr = ["julius caeser", "julia", "july", "orange julius"];

if(levenshtein("hello", "ello") === 1) {
    pass("two_str_comparison");
} else {
    fail("two_str_comparison");
}

if(levensearch(arr, "julio", 100, 10)[0].value === "julia"
        && levensearch(arr, "julio", 100, 10)[1].value === "july"
        && levensearch(arr, "julio", 100, 10)[2].value === "julius caeser"
        && levensearch(arr, "julio", 100, 10)[3].value === "orange julius") {
    pass("arr_search");
} else {
    fail("arr_search");
}

function pass(testStr) {
    console.log("\x1b[32m%s\x1b[0m", `✓ Test ${testStr} passed`);
}

function fail(testStr) {
    console.log("\x1b[31m%s\x1b[0m", `✖ Test ${testStr} failed`)
}