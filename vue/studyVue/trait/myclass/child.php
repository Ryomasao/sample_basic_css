<?php

namespace myclass\test2;

print("im child.php").PHP_EOL;

use myclass\test1\ParentClass;
use myclass\test3\Trait1;
use myclass\test3\Trait2;

/*
use myclass\test3\{
    Trait1,
    Trait2
};
*/



class ChildClass extends ParentClass{
    use Trait1,Trait2;

    public function workItem1($str){
        echo $str,'Im childclass'.PHP_EOL;
    }
}