let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40, 
    rareCars: 2
}

for(let property in statistics){
    let firstLetter = property.charAt(0);
    if (firstLetter === 'r' || statistics[property] % 2 != 0){
        console.log(statistics[property]);
    }
}