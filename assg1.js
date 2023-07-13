//2st
var namea = "Taha Malick";
console.log("Hello " + namea + ", would you like to learn some typeScript today?");
//3nd
var names = "Taha malick";
var Tittlecase1 = names.split(" ").map(function (e) {
    return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
}).join(' ');
console.log("In lowerCase " + names.toLowerCase() + " In UpperCase " + names.toUpperCase() + " In tileCase" + Tittlecase1);
//4rd
var named = "Allama Iqball";
console.log(named + " \" Failure is not fatal until we surrender; trying again is the key to glorious victory.\"");
//5th
var famous_person = "Allama Iqbal";
var message = famous_person;
console.log(message);
//6th
var personName = " \t Taha Malick \n ";
console.log("With wide spase " + personName);
console.log("after striping " + personName.trim());
////////////////////////////////////////////////////////
//14th
var guestList = ["Ahmed", "Muzammil", "Ali"];
console.log(guestList[0] + " invited for diner");
console.log(guestList[1] + " invited for diner");
console.log(guestList[2] + " invited for diner");
//15th
guestList[2] = "Saad";
console.log(guestList[2] + " invited for diner");
//16th
guestList.push("Zaki", "Noman", "Talha");
console.log("hello ".concat(guestList, ", Bigger dinner table."));
guestList.splice(3, 0, "Umair");
console.log(guestList);
//17th
guestList.forEach(function (list) {
    console.log(list + " Call for");
});
guestList.forEach(function (list) {
    console.log(list + " invite only two people for dinner.");
});
for (var i = guestList.length - 1; i > 1; i--) {
    console.log("You can't join us for dinner " + guestList[i]);
    guestList.pop();
}
console.log(guestList);
guestList.forEach(function (list) {
    console.log(list + "  please come fast");
});
guestList = [];
console.log(guestList);
//18th
var favPlaces = ["Kashmir", "Maldiv", "Sudia", "Italy", "Dubai"];
var sortPlace = favPlaces;
console.log(favPlaces);
console.log(sortPlace.sort());
console.log(favPlaces);
console.log(sortPlace.sort().reverse());
console.log(favPlaces);
//19th
var guestList = ["Ahmed", "Muzammil", "Ali"];
console.log("".concat(guestList.length, " number of people you are inviting to dinner"));
//20th
var favPlaces = ["Kashmir", "Maldiv", "Sudia", "Italy", "Dubai"];
console.log("* ", favPlaces[0], "\n* ", favPlaces[1], "\n* ", favPlaces[2], "\n* ", favPlaces[3]);
//21th
var personName1 = {
    pname1: "Ahmed",
    email: "ahmed@gmail.com"
};
var personName2 = {
    pname1: "Ali",
    email: "Ali@gmail.com"
};
var personName3 = {
    pname1: "Muzammil",
    email: "Muzammil@gmail.com"
};
console.log(personName1);
console.log(personName2);
console.log(personName3);
