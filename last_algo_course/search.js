//linear search o(n)
var linearSearch = function (a, v) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] == v) {
            return true;
        }
    }
    return false;
};
//binary search o(log(n)) for ordered arrays
var binarySearch = function (a, v) {
    var mid = Math.floor(a.length / 2);
    return true;
};
