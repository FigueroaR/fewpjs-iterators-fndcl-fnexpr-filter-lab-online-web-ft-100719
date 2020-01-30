// Code your solution here


function findMatching(drivers, string) {
  return drivers.filter( match => 
    match.toLowerCase() == string.toLowerCase())
}

function fuzzyMatch(drivers, maybeThem) {
  return drivers.filter( match => 
    match.toLowerCase().indexOf(maybeThem.toLowerCase()) === 0)
}

function matchName(drivers, driverName) {
  return drivers.filter( record => record.name === driverName)
}
