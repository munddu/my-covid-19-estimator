const covid19ImpactEstimator = (data) => data;

//data: {};
impact: {};
severeImpact: {};
//for impact
var currentlyInfected = reportedCases * 10;
console.log(impact.currentlyInfected);

var infectionsByRequestedTime = currentlyInfected* 512;

//For severe impact
var currentlyInfected = reportedCases * 50;
console.log(severeImpact.currentlyInfected);

var infectionsByRequestedTime = currentlyInfected * 512;

//challenge 2
var severeCasesByRequestedTime = 0.15 * infectionsByRequestedTime;
var hospitalBedsByRequestedTime = (0.35 * totalHospitalBeds)/severeCasesByRequestedTime;
console.log(hospitalBedsByRequestedTime);

//challenge 3
var casesForICUByRequestedTime = 0.05 * infectionsByRequestedTime;
console.log(casesForICUByRequestedTime);
var casesForVentilatorsByRequestedTime = 0.02 * infectionsByRequestedTime;
window.alert(casesForVentilatorsByRequestedTime);

var dollarsInFlight = (infectionsByRequestedTime * 0.65 * 1.5) / 30;
console.log(dollarsInFlight);
export default covid19ImpactEstimator;