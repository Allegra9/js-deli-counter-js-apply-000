var katzDeli = [];
var num = 0;

function takeANumber(katzDeli){
  num +=1;
  katzDeli = katzDeli.push(num);
  return `Welcome, ${name}. You are number ${katzDeli} in line.`
}

function nowServing(katzDeli){

  if (katzDeli.length > 0){
  	var firstInLine = katzDeli.shift();
	return `Currently serving ${firstInLine}.`
  }else {
	return `There is nobody waiting to be served!`
  }
}

function currentLine(line){

  var i = 0;
  var newLine = [];

  while (i < line.length){
  	newLine.push(` ${i+1}. ${line[i]}`);
  	i++;
  }

  if (newLine.length > 0) {
  	return "The line is currently:" + newLine;
  } else{
   return "The line is currently empty."
  }
}


