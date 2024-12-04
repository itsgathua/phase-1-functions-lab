function distanceFromHqInBlocks(distance){
    return Math.abs(distance - 42);    
}
console.log(distanceFromHqInBlocks(20))

function distanceFromHqInFeet(distance){
    const blocks = distanceFromHqInBlocks(distance)
    return (blocks * 264)
}
console.log(distanceFromHqInFeet(20))

function distanceTravelledInFeet(start, destination){
    let blocksTravelled = Math.abs(start - destination)
    return (blocksTravelled * 264)
}
console.log(distanceTravelledInFeet(20, 42))

function calculatesFarePrice(start, destination){
    let distCharged = distanceTravelledInFeet(start, destination)
    if (distCharged <= 400){
        return 0;
    } else if (distCharged > 400 && distCharged <= 2000){
        return(distCharged - 400) * 0.02;
    } else if (distCharged > 2000 && distCharged <= 2500){
        return 25;
    } else {
        return 'cannot travel that far'
    }
}