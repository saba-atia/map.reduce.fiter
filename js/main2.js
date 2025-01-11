function toKm(miles){
    const Km=miles.map(mile=>mile*1.60934);
    const totalDistanceInkilometers=Km.reduce((total,currentValue)=>total+currentValue,0);
    return totalDistanceInkilometers;
}
const miles=[10,20,30,40];
const totalDistanceInkilometers=toKm(miles);
console.log(totalDistanceInkilometers);