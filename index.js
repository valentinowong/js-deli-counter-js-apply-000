function takeANumber(line) {
  var num = 0;
  num = num + 1;
  return `You are number ${num} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  var arr = [];
  var i = 0;
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    for (i = 0; i < line.length; i++) {
      arr.push(` ${i + 1}. ${line[i]}`);
    }
    return "The line is currently:" + arr;
  }
}