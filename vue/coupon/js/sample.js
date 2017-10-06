
//Swiper
var mySwiper = new Swiper ('.swiper-container', {
    effect: "slide",
    loop: false,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    onSlideChangeEnd:function(swipe){
        changeTabIndex(swipe.activeIndex);
    }
});


function changeTabIndex(index){
   //activeIndexはloopを有効にすると、1->2->3->4で1に戻るかと思いきや5とかになる
   //さらにactiveIndexは1からはじまるが、配列は0からアクセスする。
   //loopを無効にするとそんな面倒なことはおきないみたい。
   let tab = document.querySelectorAll("input[type='radio']");
   tab[index].checked = true;
}



Vue.component(
    'my-component',{
        template:'<label>加盟店X</label>'
    }
)

var section = new Vue({
    el:'#section',
    data:{
        shops : ["A","B","C","D"]
    },
    methods:{
        changeSlide:function(index){
            mySwiper.slideTo(index);
        }
    }
});




