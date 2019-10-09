console.log("We're learning about objects");

// Lightning Exercise 1
// 1
const car ={
    make: "Ford",
    model: "Mustang",
    color: "Red",
    year: 2015,
}

console.log("car", car);

//  2
const animalNames = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]

console.log("animalNames", animalNames);

// 3
const Robert = {
    age: 33,
    nickname: "Babe",
}

const Xander = {
    age: 10,
    nickname: "Xanman",
}

const Devin = {
    age: 7,
    nickname: "Dev"
}

const Michelle = {
    age: 26,
    nickname: "Mitchy"
}

const familyMembers = [Robert, Xander, Devin, Michelle];

console.log("familyMembers", familyMembers);


// Lightning Exercises 2

// 1

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

wardrobe.material = "Cedar"

console.log(wardrobe);