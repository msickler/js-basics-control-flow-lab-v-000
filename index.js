// Write your code in this file!
function scuberGreetingForFeet(ride) {
  if (ride <= 400) {
    return 'This one is on me!';
  } else if (ride >= 2000 && ride <= 2500) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
}

/*function ternaryCheckCity(city) {
  if (city === 'NYC') {
    return 'Ok, sounds good.'
  } else {
    return 'No go.'
  }
} */

function ternaryCheckCity(city) { return (city === 'NYC' ? 'Ok, sounds good.' : 'No go.')}
