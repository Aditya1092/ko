<template>
    
    <div class="measurement-form"  style="padding-top: 20px;">
        
      <h2>Women's Clothes Measurement Form</h2>
      <form>
        <div class="form-group"  style="padding-top: 20px;">
          <label for="bust">Bust (inches)</label>
          <input type="number" class="form-control" id="bust" v-model="bust" required>
        </div>
        <div class="form-group">
          <label for="waist">Waist (inches)</label>
          <input type="number" class="form-control" id="waist" v-model="waist" required>
        </div>
        <div class="form-group">
          <label for="hips">Hips (inches)</label>
          <input type="number" class="form-control" id="hips" v-model="hips" required>
        </div>
        <div class="form-group">
          <label for="height">Height (inches)</label>
          <input type="number" class="form-control" id="height" v-model="height" required>
        </div>
        <div class="form-group">
          <label for="shoulder">Shoulder (inches)</label>
          <input type="number" class="form-control" id="shoulder" v-model="shoulder" required>
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="submitForm()">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "Size",
    data() {
      return {
        bust: "",
        waist: "",
        hips: "",
        height: "",
        shoulder: ""
      };
    },
    methods: {
      submitForm() {
        const formData = {
          bust: this.bust,
          waist: this.waist,
          hips: this.hips,
          height: this.height,
          shoulder: this.shoulder
        };
        console.log(formData); // do something with the form data
      }
    }
  };
  </script>
  
  <style scoped>
  .measurement-form {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    font-weight: bold;
  }
  
  input[type="number"] {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  </style>
  
  
 
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
  </style>