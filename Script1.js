// JavaScript source code
    $("#mathFunction").click(function () {
            var num1 = Number($("#input1").val());
    var num2 = Number($("#input2").val());
    var num3 = Number($("#input3").val());
    var num4 = Number($("#input4").val());
    var num5 = Number($("#input5").val());

    var totalSum = num1 + num2 + num3 + num4 + num5;
    var totalMin = Math.min(num1 , num2 , num3 , num4 , num5);
    var totalMax = Math.max(num1, num2, num3, num4, num5);
    var totalMean = ((num1 * num2 * num3 * num4 * num5) / 5);
    var totalPro = (num1 * num2 * num3 * num4 * num5);


    var outSum = ("The sum of your numbers is " + totalSum);
    $("#resultsSum").text(outSum);
    var outSmall = ("The smallest number is " + totalMin);
    $("#resultsSml").text(outSmall);
    var outLrg = ("The biggest number is " + totalMax);
    $("#resultsLrg").text(outLrg);
    var outMean = ("The mean is " + totalMean);
    $("#resultsMean").text(outMean);
    var outMul = ("The product is " + totalPro);
    $("#resultsMul").text(outMul);
})

        $("#palindrome").click(function () {
            var ogWord = String($("#inputPal").val());
    var word = ogWord.toLowerCase().replace(/\s/g, '');
            for (var n = word.length - 1, revWord = ""; n >= 0; n--) {
        revWord += word.substr(n, 1);
}
revWord = revWord.toLowerCase().replace(/\s/g, '');
            if (revWord == word) {
                var outPal = (ogWord + " IS a palindrome! :D");
    $("#resultsPal").text(outPal);
            } else {
                var outPal = (ogWord + " is NOT a palindrome! " + "*" +
        revWord + "*" + " is not the same as " + "*" +
        ogWord + "*");
    $("#resultsPal").text(outPal);
}
})

        $("#factorial").click(function () {
            var num = Number($("#inputFact").val());
            for (x = (num-1); x > 1; x--) {
        num = (num * x);
}
var outFact = ("The factorial is: " + num);
$("#resultsFact").text(outFact);
})

        $("#fizzbuzz").click(function () {
            var num1 = Number($("#inputFizzBuzz1").val());
    var num2 = Number($("#inputFizzBuzz2").val());
    var output = "";
            for (let test = 1; test <= 100; test++) {
                if (test % num1 == 0 && test % num2 == 0) {
        output += "FIZZBUZZ, "
    } else if (test % num1 == 0) {
        output += "FIZZ, "
                    output.fontcolor("red")
                } else if (test % num2 == 0) {
        output += "BUZZ, "
                    output.fontcolor("blue")
                } else {
        output += test + ", "
    }
    }
    $("#resultFizzBuzz").text(output);
});

        $("#mathClear").click(function () {
        $("#input1, #input2, #input3, #input4, #input5").val("")
            $("#resultsSum, #resultsSml, #resultsLrg, #resultsMean, #resultsMul").text("")
})

        $("#palClear").click(function (){
        $("#inputPal").val("")
            $("#resultsPal").text("")
})

        $("#factClear").click(function () {
        $("#inputFact").val("")
            $("#resultsFact").text("")
})

        $("#fizzbuzzClear").click(function () {
        $("#inputFizzBuzz1, #inputFizzBuzz2").val("")
            $("#resultFizzBuzz").text("")
})

$("#mathCode").hide()
        $("#btnMathCode").click(function (){
        $("#mathCode").toggle()
    })

    $("#palCode").hide()
        $("#btnPalCode").click(function () {
        $("#palCode").toggle()
    })

    $("#factCode").hide()
        $("#btnFactCode").click(function () {
        $("#factCode").toggle()
    })

    $("#fizzBuzzCode").hide()
        $("#btnFBCode").click(function () {
        $("#fizzBuzzCode").toggle()
    })
