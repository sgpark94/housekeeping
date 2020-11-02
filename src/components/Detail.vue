<template>
  <div style="max-width: 400px;">
    <v-autocomplete></v-autocomplete>
    <v-select
      :items="items"
      label="Type"
    ></v-select>
    <v-select
      :items="month"
      label="Month"
      style="width: 100px"
    ></v-select>
    <template>
      <v-hover disabled>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Name
                </th>
                <th class="text-left">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in data"
                :key="item.name"
              >
                <td>{{ item.name }}</td>
                <td>{{ item.price | comma }}</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>{{ sum | comma }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-hover>
    </template>
  </div>
</template>

<script>
import data from '@/data'
export default {
  name: "Detail",
  data(){
    return{
      items: ['All', 'For My Dear', 'MY Fat', 'Make a noise', 'Foods', 'Saving', 'Alcohol', 'Hospital', 'Shopping', 'Necessity', 'Transportation', 'Culture/Study', 'etc'],
      month: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
      data: data
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
  }
};
</script>

<style scope>
</style>