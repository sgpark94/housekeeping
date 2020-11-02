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
          <v-list-item-subtitle>
            ￦ {{ list.price | comma }}
          </v-list-item-subtitle>
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
          <v-list-item-subtitle style="font-weight: 700;">￦ {{ sum | comma }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import data from '@/data'
export default {
  name: "List",
  // 
  data(){
    return{
      data: data,
      name: ['All', 'For My Dear', 'MY Fat', 'Make a noise', 'Foods', 'Saving', 'Alcohol', 'Hospital', 'Shopping', 'Necessity', 'Transportation', 'Culture/Study', 'etc'],
    }
  },
  filters:{
    // 천단위로 콤마 찍기.
    comma(val){
  	  return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  computed: {
    sum(){
      let total = 0;
      this.data.forEach(expense => {
        total += parseInt(expense.price)
      })
      return total;
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