$(function () {
  var debug = false;

  // Correspondence between English representations of months and numbers
  const monthMap = {
    'january': '1',
    'february': '2',
    'march': '3',
    'april': '4',
    'may': '5',
    'june': '6',
    'july': '7',
    'august': '8',
    'september': '9',
    'october': '10',
    'november': '11',
    'december': '12',
    'jan': '1',
    'feb': '2',
    'mar': '3',
    'apr': '4',
    'may': '5',
    'jun': '6',
    'jul': '7',
    'aug': '8',
    'sep': '9',
    'oct': '10',
    'nov': '11',
    'dec': '12'
  };

  // Create English representation of months using regular expression
  const monthRegexSource = Object.keys(monthMap).map(month => `\\b${month}\\b`).join('|');
  const regex = new RegExp(monthRegexSource, 'gi');
  if(debug)console.log(regex);

  // Replace English representation of months with numbers
  var text = document.body.innerHTML;
  const newText = text.replace(regex, match => match + '<span>(' + monthMap[match.toLowerCase()] + ')</span>');
  document.body.innerHTML = newText;
});
