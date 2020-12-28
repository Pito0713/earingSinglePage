<template>
    <div class="categoryslider" style="flex:25%">
        <ul>
            <li>
                <a>熱銷</a>
            </li>
            <li>
                <a @click="CatchProductItem('earing')">新品</a>
            </li>
            <li>
                <a>秋冬新款</a>
            </li>
            <li>
                <a>耳環</a>
            </li>
            <li>
                <a>戒指</a>
            </li>
            <li>
                <a>項鍊</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      Products: [],
      ProdcutData: '',
      pageTotals: [],
      paginationTotal: '',
      currentPage: '',
      // 每一頁顯示幾筆資料。
      datapage: 8,
      CatchProductId: '',
      catchData: []
    }
  },
  methods: {
    pagination (ProdcutData, currentPage) {
      if (currentPage > this.paginationTotal) {
        document.getElementById('Product').innerHTML = ''
        currentPage = this.paginationTotal
      } else {
        document.getElementById('Product').innerHTML = ''
      }
      if (currentPage <= 0) {
        currentPage = 1
      }
      // 全部資料總數
      // 當前比總頁數大的，當前等於總頁數 //防止剛好進位
      // 最小 （當前)1*(單頁資料)4 - 4(起始頁資料) + 1 起始至少為1
      const minData = currentPage * this.datapage - this.datapage + 1
      // 最大
      const maxData = currentPage * this.datapage
      // 當前頁面(1) 比 minData(例如：1) 大且又小於 maxData(例如：4) 就push進去新陣列。
      //    建立新陣列//
      for (this.i = 0; this.i <= ProdcutData.length; this.i++) {
        if (this.i >= minData && this.i <= maxData) {
          this.Products.push(ProdcutData[this.i - 1])
        }
      }
      this.currentPage = currentPage
      console.log(this.paginationTotal)
      console.log(this.ProdcutData)
      console.log(this.pageTotals)
      console.log(this.currentPage)
      //    建立頁面變數
      // const page = {
      // pageTotal, //   整頁數
      // currentPage //  當前
      // }
      this.pageSelect()
    },
    pageSelect () {
      const dataTotal = this.ProdcutData.length
      // 總共有幾頁//
      this.paginationTotal = Math.ceil(dataTotal / this.datapage)
      for (this.i = 1; this.i <= this.paginationTotal; this.i++) {
        this.pageTotals.push(this.i)
      }
    },
    CatchProductItem (Id) {
      if (this.CatchProductId ? 'All' : Id) {
        this.catchData = this.ProdcutData
      } else {
        this.catchData = this.ProdcutData.filter( //    用id 屬性篩選我要的
          function () {
            return this.Products.id === Id
          }
        )
      }
      document.getElementById('Product').innerHTML = ''
      this.pagination(this.catchData, 1) // 用抓到的資料帶回
    }
  }
}
</script>

<style scoped lang="scss">
.categoryslider{
    display: block;
    position: relative;
    padding-top:5vw;
    li{
        padding: 1.5vw 0;
    }
    li:hover{
        border-bottom:1px var(--border-color) solid;
    }
    a{
        font-size: 1.5vw;
    }
}
</style>
