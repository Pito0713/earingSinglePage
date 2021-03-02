<template>
  <div id="app">
    <div v-for="(Product,index) in Products" :key="Product[0]+index" class="ProductItem">
      <div class="ProductImg" style="flex:50%">
        <img :src="Product[7]" />
      </div>
      <div class="ProductItemInfo" style="flex:50%">
        <div class="ProductName">
          <a>{{Product[2]}}</a>
        </div>
        <div class="ProuductDescription" v-html="Product[6]">
          <!--data有<>標籤時可用v-html實現-->
        </div>
        <div class="ProuductPrice">
          <a>NT: {{Product[3]}}</a><br>
          <a style="font-size:1.2rem">下單{{textComputedStk}}個</a><a style="font-size:1.2rem">共${{TotalPrice}}</a><br>
          <a style="font-size:1.2rem">目前庫存 {{textComputed}}付</a>
        </div>
        <div class="AddProduct">
          <button @click="addProdcut">
            <a>+1</a>
          </button>
          <button @click="cutProdcut">
            <a>-1</a>
          </button>
          <button @click="addCartbackData(); coverBackData()" >
            <a>送出訂單</a>
          </button>
        </div>
      </div>
    </div>
    <div class="reload" v-show="reload"> <a>重新載入</a></div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data: function () {
    return {
      Products: [],
      ProductData: {},
      ProductDataStorage: '',
      ProductDataStorageStk: 0, // 回傳給購物車的數據
      cartStorageStk: 0,
      Carts: [],
      reload: false,
    }
  },
  methods: {
    addProdcut () {
      if (this.Products[0][4] === 0) {
        alert('庫存不夠惹')
      } else {
        this.ProductDataStorage = this.Products[0][4] - 1 // 暫存
        this.Products[0][4] = this.ProductDataStorage // 取代實際量
        this.ProductDataStorageStk = this.ProductDataStorageStk + 1 // 目前下單量
        //console.log(this.Products)
        //console.log(this.ProductDataStorage)
        //console.log(this.ProductDataStorageStk)
      }
    },
    cutProdcut () {
      if (this.ProductDataStorageStk > 0) {
        this.ProductDataStorage = this.Products[0][4] + 1
        this.Products[0][4] = this.ProductDataStorage
        this.ProductDataStorageStk = this.ProductDataStorageStk - 1
        //console.log(this.Products)
        //console.log(this.ProductDataStorage)
        //console.log(this.ProductDataStorageStk)
      }
    },
    addCartbackData () {
      this.filterCart()
      if (this.Carts[0] !== undefined) {
        this.cartStorageStk = this.ProductDataStorageStk + this.Carts[0][4]
      } else {
        this.cartStorageStk = this.ProductDataStorageStk
      }
      //console.log(this.ProductDataStorageStk)
      //console.log(this.cartStorageStk)
      var data = [[
        this.Products[0][0],
        this.Products[0][1],
        this.Products[0][2],
        this.Products[0][3],
        this.cartStorageStk,
        this.Products[0][5],
        this.Products[0][6],
        this.Products[0][7],
        this.Products[0][8],
        this.Products[0][9]
      ]]
      var parameter = {}
      parameter = {
        url: 'https://docs.google.com/spreadsheets/d/1RJiDnmyc0MZ9ySQy4u8_8PZTJe90LZCkTIs_NCDSjS8/edit#gid=0',
        name: '工作表1',
        data: data.toString(),
        row: this.Products[0][0] + 1,
        column: this.Products[0].length
      }
      $.get('https://script.google.com/macros/s/AKfycbz-k7jYi1VMPguXmuvf7W2cZFb39JZD9_QnnuBYbH9Okm5vb4Ui/exec', parameter)
    },
    coverBackData () {
      var data = [[
        this.Products[0][0],
        this.Products[0][1],
        this.Products[0][2],
        this.Products[0][3],
        this.Products[0][4],
        this.Products[0][5],
        this.Products[0][6],
        this.Products[0][7],
        this.Products[0][8],
        this.Products[0][9]
      ]]
      var parameter = {}
      parameter = {
        url: 'https://docs.google.com/spreadsheets/d/1nXquMbDuBjMx2Eo7qO1XBKNrJBm8xNGRGexuOFozlts/edit#gid=0',
        name: '工作表1',
        data: data.toString(),
        row: this.Products[0][0] + 1, // execl第2行開始
        column: this.Products[0].length
      }
      $.get('https://script.google.com/macros/s/AKfycbxQ5_HzD8ow_wRBH839AXXptKL_JqbA1DsiO55iwsL33pyhshUA/exec', parameter)
      // 覆蓋暫存的EaringbackData
      var parameterEaringBackData = {}
      parameterEaringBackData = {
        url: 'https://docs.google.com/spreadsheets/d/1LhZ_9DO6JNX2Q7DO_HKRVDoGtyRGEp2ne-m_aIlYQq4/edit#gid=0',
        name: '工作表1',
        data: data.toString(),
        row: 1,
        column: this.Products[0].length
      }
      $.get('https://script.google.com/macros/s/AKfycbzKEwZkfPc610W7d8w8cktq6OO2R8Tfw6GgmHe1aZVGDbkXlGQ/exec', parameterEaringBackData)
      this.reload = !this.reload
      this.timer = setTimeout(()=>{  //延遲讓後台更新
        window.location.reload()
      },1000);
    },
    filterCart () {
      var itemInfo = this.Products[0][0]
      this.Carts = this.Carts.filter(
        function (item) {
          return item[0] === itemInfo// 篩掉其他
        }
      )
      //console.log(this.Carts)
    }
  },
  computed: {
    textComputed: function () {
      return this.ProductDataStorage
    },
    textComputedStk: function () {
      return this.ProductDataStorageStk
    },
    TotalPrice: function () {
      return this.ProductDataStorageStk * this.Products[0][3]
    }
  },
  mounted () {
    fetch(
      'https://script.google.com/macros/s/AKfycbxguddnzylMny9C4bu2lm3ojmd_NYQPw2HjfzmbrPVnV9laIX4/exec'
    )
      .then(res => {
        return res.json()
      })
      .then(Products => {
        this.Products = Products
        this.ProductDataStorage = Products[0][4]
      })
    fetch(
      'https://script.google.com/macros/s/AKfycbxLQARlHh9k7LbV8-ORSmVjIYAJtgphhKXFS0e6ypXmpAWJX8cV/exec'
    )
      .then(res => {
        return res.json()
      })
      .then(Carts => {
        this.Carts = Carts
      })
  }
}
</script>

<style  scoped lang="scss">
.ProductItem {
  display: flex;
}
.ProductImg {
  padding: 2vw;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
.ProductItemInfo {
  display: block;
  padding: 2vw;
}
.ProductName {
  font-size: 2rem;
  width: 100%;
  padding: 1vw;
}
.ProuductDescription {
  text-align: start;
  width: 100%;
  float: left;
  padding: 1vw;
  line-height: 3vw;
  margin-bottom: 3vw;
}
.ProuductPrice {
  display: block;
  font-size: 1.5rem;
  width: 100%;
  text-align: end;
  a{
    padding: 0.5vw;
  }
}
.reload{
  display: block;
  position: fixed;
  top:50%;
  left: calc(50% - 4rem);
  background-color: var(--background-color);
  font-size: 2rem;
}
.AddProduct{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2vw;
  button {
      margin: 0.5vw;
      background-color: #ffffff;
      border: var(--border-color) 1px solid;
      color: var(--plat-color);
      a{
        font-size: 1rem;
      }
  }
}
@media screen and (max-width: 425px) {
  .ProductItem {
  display: flex;
  flex-direction: column;
  }
  .ProductName{
    font-size: 1.2rem;
  }
  .ProuductDescription {
  line-height: 7vw;
  }
  .ProuductPrice{
    font-size: 1.2rem;
  }
}
</style>
