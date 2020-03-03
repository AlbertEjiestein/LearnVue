const app = new Vue({
  el:'#app',
  data:{
    books:[
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count:1
      },
      {
        id: 2,
        name: '《你不知道的js》',
        date: '2008-9',
        price:65.00,
        count:1
      },
      {
        id: 3,
        name: '《深入浅出nodejs》',
        date: '2012-9',
        price: 60.00,
        count:1
      },
      {
        id: 4,
        name: '《深入浅出vuejs》',
        date: '2014-9',
        price: 100.00,
        count:1
      }
    ]
  },
  filters:{
    showPrice(price){
      return '￥' + price.toFixed(2);
    }
  },
  methods:{
    increament(index){
      this.books[index].count++; 
    },
    decreament(index){
      this.books[index].count--;
    },
    removeHandle(index){
      // 移除指定行数据
      this.books.splice(index,1)
    }
  },
  computed:{
    totalPrice(){
      let totalPrice = 0;
      for(let i=0; i < this.books.length; i++){
        totalPrice += this.books[i].price * this.books[i].count;
      }
      return totalPrice;
    }
  }
})