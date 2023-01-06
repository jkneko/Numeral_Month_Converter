$(function () {
  var debug = false;

  // Correspondence between English representations of months and numbers
  const monthMap = {
    'January': '1',
    'February': '2',
    'March': '3',
    'April': '4',
    'May': '5',
    'June': '6',
    'July': '7',
    'August': '8',
    'September': '9',
    'October': '10',
    'November': '11',
    'December': '12',
    'Jan': '1',
    'Feb': '2',
    'Mar': '3',
    'Apr': '4',
    'Jun': '6',
    'Jul': '7',
    'Aug': '8',
    'Sep': '9',
    'Oct': '10',
    'Nov': '11',
    'Dec': '12'
  };

  // Create English representation of months using regular expression
  const monthRegexSource = Object.keys(monthMap).map(month => `\\b${month}\\b`).join('|');
  const regex = new RegExp(monthRegexSource, 'g');
  if(debug)console.log(regex);

  // Replace English representation of months with numbers
  var text = document.body.innerHTML;
  const newText = text.replace(regex, match => match + '<span>(' + monthMap[match] + ')</span>');
  document.body.innerHTML = newText;
});
