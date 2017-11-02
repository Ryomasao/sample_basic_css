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


var buttons = document.getElementById("buttons");
var counts = document.getElementsByClassName("count");
//console.log(counts[0].textContent);


//ダメな例
/*
for(var i = 0; i< buttons.children.length; i++){
  buttons.children[i].addEventListener("click",function(e){
    console.log(i);
  });
}
*/

  /* 即時関数の書き方
  (function(args){
    //write code here
  })(true args);
  */

//即時関数の例
/*
for(var i = 0; i< buttons.children.length; i++){
  (function(n){
    buttons.children[n].addEventListener("click",function(e){
    console.log(n);
    });
  })(i);
}
*/

/*
//bindの例
for(var i = 0; i< buttons.children.length; i++){
    buttons.children[i].addEventListener("click",hello.bind(null, i));
}

function hello(index){
  console.log(index);
}
*/

/* 即時関数が即時すぎて*/
/*
for(var i = 0; i< buttons.children.length; i++){
    buttons.children[i].addEventListener("click",(function(n){
      console.log(n);
    })(i)
  )
}
*/

//クラスがES6から使えるんだって
/*
class Cat{
  constructor(name){
    this.name = name;
  }

  name(name){
    this.name = name;

  }
  hello(){
    console.log(this.name);
  }
}

var cat = new Cat("neko");
console.log(cat.hello());

*/

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


//Promise
//https://qiita.com/toshihirock/items/e49b66f8685a8510bd76

/*
function asyncFunction(){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('Async Hello world');
    },16);
  });
}

asyncFunction().then(function(value){
  console.log(value);
}).catch(function(error){
  console.log(error);
});
*/

//http://azu.github.io/promises-book/

