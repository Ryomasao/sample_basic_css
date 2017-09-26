
//DOMの解析が全部終わってからじゃないと、要素が取得できないことがあるんだねぇ
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //セレクタはこちらをみた
    //http://hakuhin.jp/js/selector.html#QUERY_SELECTOR_ALL
    //var blackBox =  document.querySelector(".black-box");
    var blackBox =  document.querySelector(".black-box");


    var yellowBox =  document.querySelector(".color-wrapper");
    var blueBox =  document.querySelector(".blue-box");
    var redBox =  document.querySelector(".red-box");
    var greenBox =  document.querySelector(".green-box");

    blackBox.addEventListener("click", function( event ){
        console.log("Im black");
    });

    yellowBox.addEventListener("click", function( event ){
        console.log("Im yellow");
    });

    blueBox.addEventListener("click", function( event ){
        console.log("Im blue");
    });

    redBox.addEventListener("click", function( event ){
        console.log("Im red");
    });

    greenBox.addEventListener("click", function( event ){
        console.log("Im green");
    });

    var newWrapper =  document.querySelector(".new-wrapper");
    var newYesBox =  document.querySelector(".new-yes-box");
    var newNoBox =  document.querySelector(".new-no-box");

    newWrapper.addEventListener("click", function( event ){
        console.log("Im wrapper");
    });

    newYesBox.addEventListener("click", function( event ){
        console.log("Im yes");
    });

    newNoBox.addEventListener("click", function( event ){
        console.log("Im no");
    });


});

