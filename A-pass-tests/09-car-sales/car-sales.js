function sales(carsSold) {
let carsold ={};
   carsSold.forEach((car) =>{
    if(car.make in carsold){
        carsold[car.make] += car.price
    }else{
        carsold[car.make] = car.price
    }
   })
   return carsold
}

module.exports = sales;
