<template>
  <div class="pa-5 wrap">
    <v-list>
      <p>
        <strong>Less Spend, Less Write !</strong>
      </p>
      <v-btn
        tile
        color="lime"
        @click="addList"
      >
        <v-icon>mdi-plus</v-icon>
        <span>Add Spend List</span>
      </v-btn>
    </v-list>
    <v-list>
      <v-btn
        text
        @click="detailList"
      >
        <strong>[ Expense List ]</strong>
      </v-btn>
    </v-list>
    <v-list
      subheader
      three-line
      v-for="(list, index) in data"
      :key="index"
      style="text-align:left;"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{ list.type }}</v-list-item-title>
          <v-list-item-subtitle>￦ {{ list.expense }}</v-list-item-subtitle>
          
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list
      subheader
      three-line
      style="text-align:left;"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title style="font-weight: 700;">Total</v-list-item-title>
          <v-list-item-subtitle style="font-weight: 700;">￦ {{ sum }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
// @fixme : 사용금액도 천단위로 콤마 찍기.
import data from '@/data'
export default {
  name: "List",
  // 
  data(){
    return{
      data: data
    }
  },
  //
  computed: {
    sum(){
      let total = 0;
      this.data.forEach(price => {
        total += parseInt(price.expense)
      })
      // 1000 단위 콤마 찍기
      return total.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
    }
  },
  methods: {
    addList(){
      this.$router.push({
        name: 'Add'
      })
    },
    detailList(){
      this.$router.push({
        name: 'Detail'
      })
    }
  }
};
</script>

<style scope>
  .wrap{
    display: inline-block;
    text-align:center;
    border:1px solid #ddd;
  }
</style>