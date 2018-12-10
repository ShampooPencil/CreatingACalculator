//i really think this time i need a psuecode with this//slow it doown****piece by piece****
//if a operator goes infront of a number mybe reset the new number.
var plus = 0;
var minus = 0;
var multiply = 0;     //---probably going to pass these var around so its global (for now)
var divide = 0;
var equal = 0;
var power = 0;
var TestFromAnotherFile = function(x, y, z){
    var z = x + y;
    console.log(z);
}//and it worked..i called this function in another file and it worked!!! SUCCESS!!!
$("#button-9").on("click",function(){   //for this piece, its for just putting the numbers/mathSymbols in the input box
    document.getElementById("singleNums").innerHTML += "9";
    console.log("9");
});
$("#button-8").on("click",function(){   //for this piece, its for just putting the numbers/mathSymbols in the input box
    document.getElementById("singleNums").innerHTML += "8";
    console.log("8");
});
$("#button-7").on("click",function(){   //for this piece, its for just putting the numbers/mathSymbols in the input box
    document.getElementById("singleNums").innerHTML += "7";
    console.log("7");
});
$("#button-6").on("click",function(){   //for this piece, its for just putting the numbers/mathSymbols in the input box
    document.getElementById("singleNums").innerHTML += "6";
    console.log("6");
});
$("#button-5").on("click",function(){   //for this piece, its for just putting the numbers/mathSymbols in the input box
    document.getElementById("singleNums").innerHTML += "5";
    console.log("5");
});
$("#button-4").on("click",function(){   //for this piece, its for just putting the numbers/mathSymbols in the input box
    document.getElementById("singleNums").innerHTML += "4";
    console.log("4");
});
$("#button-3").on("click",function(){   //for this piece, its for just putting the numbers/mathSymbols in the input box
    document.getElementById("singleNums").innerHTML += "3";
    console.log("3");
});
$("#button-2").on("click",function(){   //for this piece, its for just putting the numbers/mathSymbols in the input box
    document.getElementById("singleNums").innerHTML += "2";
    console.log("2");
});
$("#button-1").on("click",function(){   //for this piece, its for just putting the numbers/mathSymbols in the input box
    document.getElementById("singleNums").innerHTML += "1";
    console.log("1");
});
$("#button-0").on("click",function(){   
    document.getElementById("singleNums").innerHTML += "0";
    console.log("0");
});
$("#button-minus").on("click",function(){   
    document.getElementById("singleNums").innerHTML += " - ";
    console.log("-");
});
$("#button-plus").on("click",function(){   
    document.getElementById("singleNums").innerHTML += " + ";
    console.log("+");
});
$("#button-multiply").on("click",function(){   
    document.getElementById("singleNums").innerHTML += " &times ";
    console.log("&times");
});
$("#button-divide").on("click",function(){   
    document.getElementById("singleNums").innerHTML += " &divide ";
    console.log("&divide");
});
$("#button-power").on("click",function(){   
    document.getElementById("singleNums").innerHTML += "^";
    console.log("^");
});
$("#button-clear").on("click",function(){   
    $(".Clear").empty();
    plus = 0;
    minus = 0;
    multiply = 0;     //---probably going to pass these var around so its global (for now)
    divide = 0;
    equal = 0;
    power = 0;
});
/////now do all the algarithams on the other javascrpt file...so exciting!!


