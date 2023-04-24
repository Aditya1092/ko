<template>
    <div class="add-to-cart">
        <div class="modal fade" id="customize" tabindex="-1" aria-labelledby="customizeLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="customizeLabel">CUSTOMIZE</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="container">
              <h2 class="mb-4">Customize Your Dress</h2>
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="color" class="form-label">Color:</label>
                  <select v-model="selectedColor" id="color" class="form-select">
                    <option v-for="color in colors" :value="color" :key="color">{{ color }}</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="size" class="form-label">Size:</label>
                  <select v-model="selectedSize" id="size" class="form-select">
                    <option v-for="size in sizes" :value="size" :key="size">{{ size }}</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="length" class="form-label">Length:</label>
                  <select v-model="selectedLength" id="length" class="form-select">
                    <option v-for="length in lengths" :value="length" :key="length">{{ length }}</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="sleeves" class="form-label">Sleeve Type:</label>
                  <select v-model="selectedSleeves" id="sleeves" class="form-select">
                    <option v-for="sleeve in sleeves" :value="sleeve" :key="sleeve">{{ sleeve }}</option>
                  </select>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-md-12">
                  <button @click="customizeDress" class="btn btn-primary">Customize</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
        <button class="btn btn-success btn-block mt-1" @click="addToCart">Add to Cart</button>
        <button class="btn btn-success btn-block mt-1" @click="customize">Customize</button>
      
    </div>
  </template>
  
  <script>
 
import  {Modal} from 'bootstrap';
  export default {
    name: "add-to-cart",
    props: {
      name:String,
      price:String,
      pId:String,
      image: String,

    },
    
    data(){
        return{
            item:{
                productName:this.name,
            productPrice:this.price,
            productImage: this.image,
            productId:this.pId,
            productQuantity: 1
            
            },
            colors: ['Red', 'Blue', 'Green', 'Yellow'],
      sizes: ['Small', 'Medium', 'Large', 'XL'],
      lengths: ['Short', 'Knee-length', 'Midi', 'Long'],
      sleeves: ['Sleeveless', 'Short-sleeve', '3/4-sleeve', 'Long-sleeve'],
      selectedColor: 'Red',
      selectedSize: 'Small',
      selectedLength: 'Short',
      selectedSleeves: 'Sleeveless'
          
        }
    },
    methods:{
        addToCart(){
            const myModal = new Modal('#miniCart', {
             keyboard: false
});
myModal.show();
            this.$store.commit('addToCart', this.item);
        },
        customizeDress() {
      // Retrieve the selected options
      const color = this.selectedColor;
      const size = this.selectedSize;
      const length = this.selectedLength;
      const sleeves = this.selectedSleeves;

      // Perform customization logic here based on selected options
      // For example:
      alert(`You have customized your dress with the following options:\nColor: ${color}\nSize: ${size}\nLength: ${length}\nSleeve Type: ${sleeves}`);

},
        customize(){
            const myModal = new Modal('#customize', {
             keyboard: false
});
myModal.show();
             
        }
    }
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
   .modal-dialog {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Style the modal header */
  .modal-header {
  background-color: #ffd9d9; /* Change the background color */
  border-bottom: none; /* Remove the bottom border */
  padding: 1rem; /* Add some padding */
}

  
  /* Style the modal title */
  .modal-title {
    color: #333;
  }
  
  /* Style the modal body */
  .modal-body {
    padding: 0;
  }
  
  /* Style the form labels */
  .form-label {
    font-weight: 600;
  }
  
  /* Style the form selects */
  .form-select {
    padding: 8px 16px;
    border-radius: 8px;
    border-color: #ced4da;
  }
  
  /* Style the customize button */
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    border-radius: 8px;
    padding: 8px 16px;
  }
  
  /* Style the customize button on hover and focus */
  .btn-primary:hover,
  .btn-primary:focus {
    background-color: #0069d9;
    border-color: #0062cc;
  }
  </style>