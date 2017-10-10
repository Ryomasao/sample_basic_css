

var coupon = {
    template:`
        <input placeholder="Enter your coupon code" @blur="onCouponApplied"> 

    `,
    methods:{
        onCouponApplied(){
            console.log("it was applied:onComponents");
        }
    }
}


new Vue({
    el:"#root",
    components:{
        coupon:coupon,
    },
    methods:{
        onCouponApplied(){
            console.log("it was applied");
        }
    },
})