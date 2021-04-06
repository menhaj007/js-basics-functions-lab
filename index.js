// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    
    if (distance > 42) {
        return distance - 42;
    } else if (distance <= 42) {
        return Math.abs(distance - 42);
    }
    // console.log("From HQ Blocks: " + result);
    // return result;
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(pointA, pointB) {
    // let distance = pointB-pointA;
    // // let result = distanceFromHqInBlocks(distance);
    // let result = distance * 264;
    return Math.abs(pointB-pointA) * 264;
}
'charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)'
function calculatesFarePrice(start, destination) {
    let calculatedDistance = distanceTravelledInFeet(start, destination);
    if (calculatedDistance <= 400) {
        return 0;
    } else if (calculatedDistance > 400 && calculatedDistance < 2000) {
        return (calculatedDistance-400) * 0.02;
    } else if (calculatedDistance > 2000 && calculatedDistance <= 2500) {
        // let tmp = calculatedDistance - 2000;
        // let b2000 = tmp - 400;
        // let tmpSum = b2000 * 0.02;
        // let amountOver2000 = calculatedDistance - 2000;
        return 25;
    }
     else if (calculatedDistance > 2500) {
        return "cannot travel that far";
    }

}
