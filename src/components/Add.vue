<template>
  <div style="max-width: 400px;">
    <v-list>
      <v-list-item>
        <v-col>
          <div class="file-upload-form">
            <input type="file" @change="previewImage">
          </div>
          <div class="image-preview" v-if="imageData.length > 0">
            <img class="preview" :src="imageData">
          </div>
        </v-col>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Day</v-list-item-title>
          <v-list-item-subtitle>
            <template>
              <v-row>
                <v-col
                cols="12"
                >
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Pick the day."
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                          @click="menu = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </template>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Price</v-list-item-title>
          <v-list-item-subtitle>
            <v-text-field v-model="price" placeholder="Write your expense."></v-text-field>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Place</v-list-item-title>
          <v-list-item-subtitle>
            <v-text-field v-model="place" placeholder="Select your day."></v-text-field>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle>
            <v-col>
              <v-textarea
                outlined
                name="input-7-4"
                label="Write your mind!"
                v-model="mind"
              ></v-textarea>
            </v-col>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list>
      <v-btn @click="addSpendList">Save</v-btn>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Add",
  data: () => ({
    imageData: '',
    spanDay: '',
    price: '',
    place: '',
    mind: '',
    date: new Date().toISOString().substr(0, 10),
    menu: false,
  }),
  methods: {
    previewImage(e){
      let input = e.target;
      if (input.files && input.files[0]) {    
        let reader = new FileReader();    
        reader.onload = (e) => {                
          this.imageData = e.target.result;
        }    
        reader.readAsDataURL(input.files[0]);
      }
    },
    addSpendList(){
      this.$router.push({
        name: 'Detail'
      })
    }
  },
};
</script>

<style scope>
  img{
    max-width: 300px;
    max-height: 200px;
  }
  [type="text"]{
    border-bottom: 1px solid #ddd;
  }
  .image-preview{
    margin-top: 20px;
  }
</style>