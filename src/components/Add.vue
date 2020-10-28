<template>
  <div>
      <div v-if="!image">
        <input type="file" @change="onFileChange">
      </div>
      <div v-else>
        <p>
          <img :src="image">
        </p>
        <v-btn @click="removeImage">Remove Image</v-btn>
      </div>
  </div>
</template>

<script>

export default {
  name: "Add",
  data(){
    return{
      image: ''
    }
  },
  methods: {
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      let image = new Image();
      let reader = new FileReader();
      let vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    }
  }
};
</script>

<style scope>
  img{
    max-width: 300px;
    max-height: 200px;
  }
</style>