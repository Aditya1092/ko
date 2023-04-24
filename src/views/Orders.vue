<template>
    <div class="checkout">
      
  
      






      <div class="container my-5 py-3">
        <div class="row">
          <div class="col-md-8">
            <h4 class="mb-4">Manage Orders</h4>
            <ul class="list-group">
              <li v-for="item in this.$store.state.cart" class="list-group-item d-flex justify-content-between align-items-center" :key="item.id">
                <div class="media">
                  <img :src="item.productImage" width="100px" class="mr-3" alt="">
                  <div class="media-body">
                    <h5 class="mt-0">{{item.productName}}</h5>
                    <p class="my-0">Price: {{item.productPrice}}</p>
                    <p class="my-0">Quantity: {{item.productQuantity}}</p>
                    <p class="my-0 font-weight-bold">Total Price: {{item.productPrice * item.productQuantity}}</p>
                  </div>
                </div>
               
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Order Summary</h5>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Subtotal
                    <span>{{ this.getSubtotal() }}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Tax
                    <span>{{ this.getTax() }}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Total
                    <span class="font-weight-bold">{{ this.getTotal() }}</span>
                  </li>
                </ul>
                
      
    <button class="btn btn-success btn-block mt-3" @click="order" >Accept / Reject order</button>
   
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Swal from 'sweetalert2';
window.Swal=Swal
  import { db } from "../firebase";
 
  import { collection, addDoc } from "firebase/firestore";
 
 
  export default {
    
    data() {
    return {
      products: [],
      ship: {
          name:null,
          address:null,
          city:null,
          state:null,
          zip:null
      },
       
    }
  },
     
   
    methods: {

        order(){
          
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Order accepted!'
      }).then(async (result) => {
        if (result.value) {
           
          Swal.fire({
            type: 'success',
            title: 'accepted successfully'
          })
        
        }
      })
     
    },
        

      
        async saveShippingDetails() {
      try {
        const docRef = await addDoc(collection(db, "shipping"), this.ship);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }, 
      getSubtotal() {
        let subtotal = 0;
        for (let item of this.$store.state.cart) {
          subtotal += item.productPrice * item.productQuantity;
        }
        return subtotal.toFixed(2);
      },
      onToken() {
        // Send the token to your server to complete the payment
      },

       
   
      getTax() {
        const taxRate = 0.1;
        const subtotal = this.getSubtotal();
        const tax = subtotal * taxRate;
        return tax.toFixed(2);
      },
      getTotal() {
        const subtotal = this.getSubtotal();
        const tax = this.getTax();
        const total = parseFloat(subtotal) + parseFloat(tax);
        return total.toFixed(2);
      }
    }
}

  

  </script>
  
  <style>
.checkout {
  background-color: #f5f5f5;
  min-height: 100vh;
  
}
.float-right {
    float: right;
}

.checkout h4 {
  font-size: 24px;
  font-weight: bold;
  color: #444;
}

.checkout ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.checkout li {
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
}

.checkout li img {
  border-radius: 5px;
}

.checkout li h5 {
  font-size: 18px;
  font-weight: bold;
  color: #444;
  margin-bottom: 10px;
}

.checkout li p {
  font-size: 16px;
  color: #666;
  margin-bottom: 5px;
}

.checkout li span {
  font-size: 16px;
  color: #e74c3c;
  cursor: pointer;
}

.checkout .total-price {
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
}

.checkout .total-price p {
  font-size: 18px;
  font-weight: bold;
  color: #444;
  margin-bottom: 10px;
}

.checkout .total-price span {
  font-size: 20px;
  color: #e74c3c;
}

@media (max-width: 767px) {
  .checkout li {
    display: flex;
    flex-wrap: wrap;
  }

  .checkout li img {
    width: 100px;
    margin-bottom: 10px;
  }

  .checkout li .media-body {
    flex-basis: calc(100% - 100px);
    max-width: calc(100% - 100px);
  }

  .checkout li h5 {
    font-size: 16px;
  }

  .checkout li p {
    font-size: 14px;
  }
}
</style>
