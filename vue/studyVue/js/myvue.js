//document.querySelector('#input').value = data.message;

var app = new Vue({
    el:'#root',
    data:{
         message: 'Hello World',
         foo:'bar',
         name:'ayane',
         names:['mirin','risa','nemu','ayanae'],
         newNames:'',
    },
    //test
    methods:{
        addName: function(){
            //alert('test');
            this.names.push(this.newNames);
            this.newNames = '';
        }
    },
    mounted(){
    }
})

/*
        document.querySelector('#button').addEventListener('click', ()=>{
            let name = document.querySelector('#input');
        
            app.names.push(name.value);
            name.value ='';
        
        });
*/

// データ定義
var data = {
    list: [
      { name:'山田', age:'30歳' },
      { name:'田中', age:'29歳' },
      { name:'鈴木', age:'25歳' }
    ]
};

// コンポーネント定義
var compo_member = {
  // id="compo-member" のタグの中身を取得
  template: '#compo-member',
  // 必要なデータを持たせる準備。型の定義もする。
  // ここではキャメルケースを用いる
  props: {
    memberData: Object
  },
  computed: {
    // 数字だけ <span></span> で囲む
    age: function(){
      var age = this.memberData.age.replace(/(\d+)/g, "<span>$1</span>");
      return age;
    }
  }
}

new Vue ({
  el: '#hoge',
  data: data,
  components: {
    // コンポーネントの登録。左辺がタグ名になる
    'member-tag': compo_member
  }
});


Vue.component('global-h1',{
    template:'<h1>I am global</h1'>
})

var sample_coponents = {
    template:'<h1>tekitou</h1'
}