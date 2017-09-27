
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
        changeColor(this.style.backgroundColor,this);
    });

    newNoBox.addEventListener("click", function( event ){
        changeColor(this.style.backgroundColor,this);
    });


    function changeColor(currentColor, myElement){
       if (myElement.className == "new-yes-box"){
           console.log("im yes box");
           if (currentColor == ""){
               myElement.style.backgroundColor = "red";
               document.querySelector(".new-no-box").style.backgroundColor = "";
           }
       }else{
           if (currentColor == ""){
               myElement.style.backgroundColor = "red";
               document.querySelector(".new-yes-box").style.backgroundColor = "";
           }
       }
    };




    
});


//html側から見える関数の範囲が謎
//グローバルの場所であれば、見えるっぽい。
function forRadioButton(){
    var noState = document.querySelector("#toggle-no").checked;
    var yesState = document.querySelector("#toggle-yes").checked;

    console.log("noState:" + noState);
    console.log("yesState:" + yesState);

    document.querySelector("#toggle-no").checked = true;

    var noState = document.querySelector("#toggle-no").checked;
    var yesState = document.querySelector("#toggle-yes").checked;

    console.log("noState:" + noState);
    console.log("yesState:" + yesState);
}

