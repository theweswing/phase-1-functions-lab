// Code your solution in this file!
// Location on 42nd Street
// Each block in Manhattan is 264 feet long

const scuberHq=42

function distanceFromHqInBlocks(customerStreetNumber){
if (scuberHq>=customerStreetNumber){
    return scuberHq-customerStreetNumber
}
else if (scuberHq<=customerStreetNumber){
    return (customerStreetNumber-scuberHq)
}
}

function distanceFromHqInFeet(customerStreetNumber){
    let blockDistance=distanceFromHqInBlocks(customerStreetNumber)
    return blockDistance*264
}

function distanceTravelledInFeet(startBlock,endBlock){
    let blockDifference
    if (startBlock>=endBlock){
        blockDifference=(startBlock-endBlock)}
    else if (endBlock>startBlock){
        blockDifference=(endBlock-startBlock)
    }
    let feetTravelled=blockDifference*264
    return feetTravelled 
    }

function calculatesFarePrice(startBlock,endBlock){
    let calculatedFeet=distanceTravelledInFeet(startBlock,endBlock)
    if (calculatedFeet>2500){
        return 'cannot travel that far'
    }
    else if (calculatedFeet>2000){
        return 25
    }
    else if (calculatedFeet<401){
        return 0
    }
    else if (calculatedFeet>=401){
        calculatedFeet=calculatedFeet-400
        let calculatedPrice=calculatedFeet*.02
        return calculatedPrice
    }
}