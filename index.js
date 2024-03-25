// FINDING MATCH
function findMatching(drivers,name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());

}
// FUZZY MATCH
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
// MATCH NAME
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
