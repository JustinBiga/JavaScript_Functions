console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            if (i % 2 !== 0) {
                console.log(i);
            }
        }
        //bonus
    } else {
        for (let i = -1; i >= count; i--) {
            if (i % 2 !== 0) {
                console.log(i);
            }
        }
    }
}
printOdds(100);   // Prints positive odd numbers from 1 to 100
printOdds(-100);  // Prints negative odd numbers from -1 to -100

//Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(){
    let userName = prompt("Please provide your name: ");
    let age = prompt("Please provide your age:");

    if (age >= 16){
        console.log(`Congrats ${userName}! you can drive!`);
    }
    else{
        console.log(`Sorry ${userName}, you can't drive.`);
    }
   
}
checkAge();

console.log("EXERCISE 3:\n==========\n");

function getQuadrant() {
    // Take user input for x and y coordinates
    let x = parseFloat(prompt("Enter the x coordinate:"));
    let y = parseFloat(prompt("Enter the y coordinate:"));

    // Check if the input is valid
    if (isNaN(x) || isNaN(y)) {
        console.log("Invalid input. Please enter valid numerical coordinates.");
        return;
    }

    // Determine the quadrant
    if (x === 0 && y === 0) {
        console.log("The point lies at the origin.");
    } else if (x === 0) {
        console.log("The point lies on the y-axis.");
    } else if (y === 0) {
        console.log("The point lies on the x-axis.");
    } else if (x > 0 && y > 0) {
        console.log("The point lies in Quadrant 1.");
    } else if (x < 0 && y > 0) {
        console.log("The point lies in Quadrant 2.");
    } else if (x < 0 && y < 0) {
        console.log("The point lies in Quadrant 3.");
    } else {
        console.log("The point lies in Quadrant 4.");
    }
}
// Call the function to start the interaction
getQuadrant();

console.log("EXERCISE 4:\n==========\n");

function triangleType(side1, side2, side3) {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0 || 
        side1 + side2 <= side3 || 
        side1 + side3 <= side2 || 
        side2 + side3 <= side1) {
        return "Invalid triangle";
    } else if (side1 === side2 && side2 === side3) {
        return "Equilateral triangle";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        return "Isosceles triangle";
    } else {
        return "Scalene triangle";
    }
}
console.log(triangleType(3, 3, 3)); // Will print "Equilateral triangle"

console.log("EXERCISE 5:\n==========\n");   //Bonus

function dataPlanStatus(planLimit, day, usage) {
    const daysRemaining = 30 - day;
    const averageDailyUse = usage / day;
    const remainingData = planLimit - usage;
    const averageUsageToStayBelowLimit = remainingData / daysRemaining;

    console.log(`${day} days used, ${daysRemaining} days remaining`);
    console.log(`Average daily use: ${averageDailyUse.toFixed(3)} GB/day`);

    if (usage > planLimit) {
        const exceedAmount = usage - planLimit;
        console.log(`You are EXCEEDING your average daily use (${averageDailyUse.toFixed(3)} GB/day),`);
        console.log(`continuing this high usage, you'll exceed your data plan by ${exceedAmount.toFixed(1)} GB.`);
        console.log(`To stay below your data plan, use no more than ${averageUsageToStayBelowLimit.toFixed(3)} GB/day.`);
    } else {
        console.log(`You are within your data plan limit.`);
        console.log(`You can use up to ${averageUsageToStayBelowLimit.toFixed(3)} GB/day to stay within your data plan.`);
    }
}
dataPlanStatus(200, 22, 185);



