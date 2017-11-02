<?php

namespace myclass\test3;

print("im trait.php").PHP_EOL;

trait Trait1{
    protected $value;

    function doSomethingOnTrait1($value){
        $this->value += $value;
        return $this;
    }
}

trait Trait2{
    function doSomethingOnTrait2(){
        echo $this->value.PHP_EOL;
    }
}