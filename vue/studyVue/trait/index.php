
<?php
print("index.php start").PHP_EOL;

//child.phpの中でtraitを使用しているので読み込み順に注意する必要がある。
require_once("./myclass/trait.php");
require_once("./myclass/parent.php");
require_once("./myclass/child.php");



/*
namespaceを切っていなれければ、requireで他のphpファイルを参照することができる。
namespaceがあると、namespaceを使うぜ！っていう宣言がないとnamespace名を書く必要がある。
*/

//parent.phpには、namespace myclass\test1 が定義されている。

//この状態だと、そんなクラスはないよって言われてしまう。
//$parent = new ParentClass();

//これならいける。
$parent = new myclass\test1\ParentClass();

//useを使っておけば、こうやってかける。
use myclass\test1\ParentClass;
$namespaceParent = new ParentClass();

use myclass\test2\ChildClass;
$child = new ChildClass();
$child->workItem1("test");
$child->doSomethingOnTrait1(3)->doSomethingOnTrait1(3)->doSomethingOnTrait2();


//traitを使ってみよう。
//useはこんな感じでもかける。




