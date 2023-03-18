function scuberGreetingForFeet(ride){
  if (ride > 2500) {
    return 'No can do.';
  } else if (ride > 2000) {
    return 'I will gladly take your thirty bucks.';
  } else if (ride > 400) {
    return 'That will be twenty bucks.';
  } else {
    return 'This one is on me!';
  }
}

function ternaryCheckCity(city){
  if (city === 'NYC') {
    return "Ok, sounds good."
  } else {
    return "No go."
  }
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":
      return 'Thank you so much.'
      break;
    case "not as generous":
      return 'Thank you.'
      break;
    default:
      return 'Bye.'
  }
}