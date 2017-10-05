let data = {
    message: 'Hello World'
}

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

document.addEventListener('DOMContentLoaded',function(){

});
