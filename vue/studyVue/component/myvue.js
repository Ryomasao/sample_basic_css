//document.querySelector('#input').value = data.message;

Vue.component('task-list',{
  //複数のタグになるのは返せないみたい
  template:`
  <div>
     <task v-for="task in tasks">{{ task.task }}</task>
  </div>
  `,

  data(){
    return{
      tasks:[
        {task:'ayane', complete:true},
        {task:'mirin', complete:false},
        {task:'moga', complete:true},
        {task:'nemu', complete:false},
      ]
    };
  }
});

Vue.component('task',{
  template:'<li><slot></slot></li>'
});


Vue.component('block1',{
  props:['title', 'body'],
  template:`
  <div>
    <h1>
    {{title}} 
    </h1>

    <h2>
    {{ body }} 
    </h2>
  </div>
  `
});


Vue.component('modal',{
  template:`
  
        <div class="modal is-active" >
           <div class="modal-background"></div>
           <div class="modal-content">
               <div class="box">
                    <p>
                        <slot></slot>
                    </p>
               </div>
           </div>
           <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
        </div>
  `,
});


Vue.component('global',{
  template:'<h2>im global</h2>'
})

var local = {template:'<h2>im local</h2>'}
var extend = Vue.extend({template:'<h2>im extend</h2>'})

var shop = {
  template:'<p>お店の名前：{{ name }}</p>',
  props:['name'],
}

var shopList = {
  template:`
  <div>
    <shop name="tarou"></shop>
    <shop name="tarou"></shop>
    <shop name="tarou"></shop>
    <shop name="tarou"></shop>
  </div>
`,
  components:{
    shop:shop
  }
}


var hoge = new Vue({
  template:`<h2>これでもいいの？</h2>`
})

var hoge_extend = Vue.extend({
  template:`<h2>これでもいいの？</h2>`
})


var child = {
  template:`
  <button @click="$emit('parent')">ボタン</button>
  `,
  
}

var parent = {
  template:`
   <div>
      <child v-on:parent="hogefunc"></child>
      <button @click="hogefunc">直接</button>
   </div>
  `,
  components:{
    child:child
  },
  methods:{
    hogefunc(){
      console.log("hogefunc");
      this.$emit("click");
    }
  }
  
}




var rootA = new Vue({
    el:'#root-a',
    data:{
         showModal:false,
         name:"mirin",
         age:21
    },
    components:{
      local:local,
      extend:extend,
      shoplist:shopList,
      hoge:hoge_extend,
      parent:parent
    },
    methods:{
        hogeMethod: function(){
          console.log("hoge");
        }

    },
    mounted(){
    }
});

var rootB = new Vue({
    el:'#root-b',
    components:{
    },
});

var rootC = new Vue({
    components:{
    },
});


var root = new Vue({
    el:'#root',
    data:{
      isShowRectangle:true
    },
    methods:{

    }
});


var root100 = new Vue({
    el:'#root-100',
    data:{
      title:"あいうえお"
    }
});

var root200 = new Vue({
    el:'#root-200',
});
