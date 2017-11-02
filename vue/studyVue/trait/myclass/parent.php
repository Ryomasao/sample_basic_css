<?php

namespace myclass\test1;

print("im parent.php").PHP_EOL;

class ParentClass{
    public function workItem1($str){
        echo $str,'Im ParenClass'.PHP_EOL;
    }

    public function workItem2(){
        echo 'pcessing og workitem2'.PHP_EOL;
    }

    public function workItem3(){
        echo 'this is only parent Mehotd'.PHP_EOL;
    }
}
