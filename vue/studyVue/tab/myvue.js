

var tabs = {
    template:`
    <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
                    <a href="#" @click="selectTab(tab)"> 
                        {{ tab.name }}
                    </a>
                </li>
            </ul>
        </div>

        <div class="tabs-detail">
            <slot></slot>
        </div>
    </div>
    `,

    /*コンポーネントはデータを関数としてしか保持できない*/
    /*data() と以下は同じ意味かな*/
    data:function(){
        return{
            tabs:[]
        }
    },
    /*mounted とcreatedのタイミングの違いは？*/
    mounted(){
        console.log(this.$children);
    },
    created(){
        this.tabs = this.$children;
    },
    methods:{
        selectTab(selectedTab){
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);

            });
        }
    }


}

var tab = {
    props:{
        name:{required:true},
        selected:{default:false},
    },
    template:`
    <div v-show="isActive">
        <slot></slot>
    </div>
    `,
    mounted(){
        console.log(this.$children);
    },
    //なぜisActiveを関数で定義したか
    //https://jp.vuejs.org/v2/guide/migration.html
    //プロパティーの値を変更したとしても、再描画したときに上書きされちゃうから。
    //hogeとかで実験できた。
    data:function(){
        return {
            isActive:false
        }
    },
    mounted(){
        this.isActive = this.selected;
    }


}

/*
var hoge = {
    props:["fuga"],
    template:`
        <div>
            <p>hoge + {{ fuga }} </p> 
            <button @click="changeProperty">change Propety</button>
        </div>
    `,
    methods:{
        changeProperty:function(e){
            this.fuga = "yes";
        }
    }

}
*/

new Vue({
    el:"#root",
    components:{
        tabs:tabs,
        tab:tab,
    },
    methods:{
        getChildren:function(){
            //console.log(this.$children);
            this.isVisible =! this.isVisible;
            console.log(this.isVisible);
        }
    },
    data:{
        isVisible:true
    }


})