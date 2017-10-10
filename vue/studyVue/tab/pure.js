//初期処理
var currentIndex = 0;
renderContent(currentIndex);

var tabs = document.getElementById("tabs");

for(var i = 0; i < tabs.children.length;i++){
  //addEventListner実行時に即時関数の値を使う。
  (function(n){
    tabs.children[n].addEventListener("click", function(e){
      renderContent(n);
    });
  })(i);
}


//Indexで指定されたcontents要素を表示して、それ以外は消す。
function renderContent(Index){
  var contents = document.getElementById("contents");
  for(var i = 0; i < contents.children.length;i++){
    if(Index === i ){
      contents.children[i].style.display = "block";
    }else{
      contents.children[i].style.display = "none";
    }
  }
}






/*
  tabs.children[i].addEventListener("click",(function(){
    var content = document.getElementById("content-" + "1");
    content.style.display = "none";
  });
  */


/*
function aaa(){
  var a = 3;
  var bbb = function(){
    a++;
    console.log(a);
  }
  return bbb;
}

var func = aaa();
func();
func();
func();
func();


function MyDiv(name){
  this.div = document.createElement("div");
  this.name = name;
  this.div.textContent ="この要素は" + name + "デス";
  document.body.appendChild(this.div);

  this.div.addEventListener("click", (function(e){
    console.log(this.name);
  }).bind(this),false)

}

var div1 = new  MyDiv("div1");




(function(firstname, lastname){
  console.log("Hello," + firstname + lastname);
}("tarou","jirou"))

*/
