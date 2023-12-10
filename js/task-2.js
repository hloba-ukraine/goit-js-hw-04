function calcAverageCalories(days) {
  let caloriesArray = [];

  for (cal of days) {
    caloriesArray.push(cal.calories);
  }
  let totalCalories = 0;
  for (i = 0; i < caloriesArray.length; i += 1) {
    totalCalories += caloriesArray[i];
  }
  if (totalCalories === 0) {
    return totalCalories;
  }
  return totalCalories / caloriesArray.length;
}
console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 },
  ])
);

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 },
  ])
);
console.log(calcAverageCalories([]));
