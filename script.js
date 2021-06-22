var names = [];
var s;
var found = 0;

function addShowSort() {
    names.push(document.getElementById("names").value);
    names.sort();
    console.log(names);
    document.getElementById("list").innerHTML = names.join("<br>");
}

function search() {
    s = document.getElementById("search").value;
    j = 0;
    for (j = 0; j < names.length; j++) {
        if (s == names[j]) {
            found += 1;
        }
    }
    if (found > 1) {
        document.getElementById("searched").innerHTML = "The name \'" + s + "\' was found " + found + " times";
    }
    else {
        document.getElementById("searched").innerHTML = "The name \'" + s + "\' was found " + found + " time";
    }
}
