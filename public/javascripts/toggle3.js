
//DOMの解析が全部終わってからじゃないと、要素が取得できないことがあるんだねぇ
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    
    var leftToggle =  document.querySelector("#left-toggle");

    leftToggle.addEventListener("click", function( event ){
        console.log("left toggle");
    });

    var rightToggle =  document.querySelector("#right-toggle");

    rightToggle.addEventListener("click", function( event ){
        console.log("right toggle");
    });


});


//html側から見える関数の範囲が謎
//グローバルの場所であれば、見えるっぽい。
function forRadioButton(){
    console.log("im global");
}

