const covid19ImpactEstimator = (data) => data;

//  data: {};
//  impact: {};
//  severeImpact: {};
//  for impact
var currentlyInfected = reportedCases * 10;
console.log(impact.currentlyInfected);
document.write(impact.currentlyInfected);

var infectionsByRequestedTime = currentlyInfected* 512;
// document.write(infectionsByRequestedTime);
//  For severe impact
var currentlyInfected = reportedCases * 50;
console.log(severeImpact.currentlyInfected);
document.write(severeImpact.currentlyInfected)

var infectionsByRequestedTime = currentlyInfected * 512;

//  challenge 2
var severeCasesByRequestedTime = 0.15 * infectionsByRequestedTime;
var hospitalBedsByRequestedTime = (0.35 * totalHospitalBeds)/severeCasesByRequestedTime;
console.log(hospitalBedsByRequestedTime);
document.write(ospitalBedsByRequestedTime);

//  challenge 3
var casesForICUByRequestedTime = 0.05 * infectionsByRequestedTime;
console.log(casesForICUByRequestedTime);
document.write(casesForICUByRequestedTime);
var casesForVentilatorsByRequestedTime = 0.02 * infectionsByRequestedTime;
console.log(casesForVentilatorsByRequestedTime);
document.write(casesForVentilatorsByRequestedTime);

var dollarsInFlight = (infectionsByRequestedTime * 0.65 * 1.5) / 30;
console.log(dollarsInFlight);
document.write(dollarsInFlight);
export default covid19ImpactEstimator;