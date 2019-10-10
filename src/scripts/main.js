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

// Lightning Exercise 3

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

// 1
console.log(empireStateBuilding.stories);
console.log(empireStateBuilding.height);
console.log(empireStateBuilding.squareFeet);
console.log(empireStateBuilding.eastWestLength)
console.log(empireStateBuilding.northSouthLength);

// correct way of doing dot notation
console.log(`The empire state building is ${empireStateBuilding.height} high with ${empireStateBuilding.stories} stories. The east west length is ${empireStateBuilding.eastWestLength} and the north south length is ${empireStateBuilding.northSouthLength}. It is ${empireStateBuilding.squareFeet} square footage.`)


// 2

console.log(empireStateBuilding["address"]);
console.log(empireStateBuilding["constructionDate"]);
console.log(empireStateBuilding["cost"]);
console.log(empireStateBuilding["owner"]);
console.log(empireStateBuilding["architect"]);

// correct way of doing square bracket Notification

const addressKey = "address"
const constructionKey = "constructionDate"
const ownerKey = "owner"
const costKey = "cost"
const architectKey = "architect"

console.log(`The empire state building is at ${empireStateBuilding[addressKey]}. It was built in ${empireStateBuilding[constructionKey]} by ${empireStateBuilding[architectKey]}. It cost ${empireStateBuilding[costKey]} and is owned by ${empireStateBuilding[ownerKey]}.`)