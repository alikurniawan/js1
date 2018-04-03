var names = ["Mr. Fahri", "Mr. Abdul", "Mrs. Josephine", "Mr. Joseph", "Mr. Paul", "Mrs. Paula", "Mr. Hakim"];


console.log("===============");

console.log("LEVEL 0");

names.forEach(function(name) {
  console.log(name);
});

console.log("===============");

console.log("LEVEL 1");

function displayMrNames(names) {
  return names.indexOf("Mr.") != -1;
}

console.log(names.filter(displayMrNames).join("\n"));

console.log("===============");

console.log("LEVEL 2");

function addGender(names) {
  var newName = []

  for (var i = 0; i < names.length; i++) {
    if (names[i].indexOf("Mr.") != -1) {
      newName.push(i + 1 + ". " + names[i] + " " + "(male)")
    } else {
      newName.push(i + 1 + ". " + names[i] + " " + "(female)")
    }
  }
  return newName.join("\n");
}

function anotherGender(names) {
  genderList = [];
  name = names.map(function(name, index) {
    if (name[2] == ".") {
      genderList.push(`${index + 1}. ${name} ${"(male)"}`)
    } else {
      genderList.push(`${index + 1}. ${name} ${"(female)"}`)
    }
  });
  return genderList.join("\n");
}

console.log(anotherGender(names));

console.log("================");

console.log(addGender(names));

console.log("===============");

console.log("LEVEL 3");

function searchName(name) {
  var result = names.filter(function(nameDetail) {
    return nameDetail.toLowerCase().indexOf(name.toLowerCase()) != -1;
  });
  return result.join("\n")
}

console.log(searchName("abd"));
console.log(searchName("j"));

console.log("===============");

console.log("LEVEL 4");

var names1 = ["Mr. Fahri", "Mr. Abdul", "Mrs. Josephhine"];
var names2 = ["Mr. Joseph", "Mr. Paul", "Mrs. Paula", "Mr. Hakim"];

console.log(names1.concat(names2).join(", "));

console.log("===============");

console.log("LEVEL 5");

var names3 = [
  "Mr. Fahri",
  null,
  undefined,
  "Mr. Abdul",
  24,
  "Mrs. Josephhine",
  "Mr. Joseph",
  "Mr. Paul",
  32,
  "Mrs. Paula",
  7,
  22,
  "Mr. Hakim"
];


var newArray = [];
for (var i = 0; i < names3.length; i++) {
  if (typeof names3[i] == "string") {
    newArray.push(names3[i])
  }
  result = newArray.join(", ")
}

console.log(result);