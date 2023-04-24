<template>
    <div class="mini-cart">
     
        <div class="modal fade" id="miniCart" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header ">
        <h1 class="modal-title fs-5" id="exampleModalLabel">My Bag</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <ul>
        <li v-for="item in this.$store.state.cart" class="media" :key="item.image">
             


            <div class="media-body">
                   <h5 class="mt-0">{{item.productName}}</h5>
                        <span class='float-right' @click="$store.commit('removeFromCart',item)">X</span>
                          <p class="mt-0">${{item.productPrice}}</p>
                          <p class="mt-0">Quantity : {{item.productQuantity }}</p>
                          </div>

        </li>
       </ul>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Continue Shopping</button>
                  <button type="button" class="btn btn-primary" @click="checkout">Checkout</button>
      </div>
    </div>
  </div>
</div>
    </div>
  </template>
  
  <script>
 


   
  export default {
    name: "MiniCart",
    props: {
      msg: String
    },
    methods:{
  
  checkout(){
    const myModal = document.getElementById('miniCart');
    
    // Hide the modal
    myModal.classList.remove('show');
    myModal.style.display = 'none';
    document.body.classList.remove('modal-open');
    this.$router.push('/checkout')  
  }

}
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
    .mini-cart {
    position: relative;
  }
  .modal-header {
  background-color: #e0e3ff; /* Change the background color */
  border-bottom: none; /* Remove the bottom border */
  padding: 1rem; /* Add some padding */
}

  .mini-cart .modal-dialog {
    max-width: 600px;
    margin: 1.75rem auto;
  }

  .mini-cart .modal-content {
    border-radius: 0;
  }

  .mini-cart .modal-header {
    border-bottom: none;
  }

  .mini-cart .modal-body {
    padding: 20px;
  }

  .mini-cart .media img {
    max-width: 80px;
    height: auto;
  }

  .mini-cart .media-body {
    padding-left: 50px;
  }

  .mini-cart .modal-footer {
    border-top: none;
   
    justify-content: space-between;
  }

  .mini-cart .btn-secondary {
    background-color: #ff9c9c;
    border-color: #ffffff;
    color: #121111;
    font-weight: 500;
  }

  .mini-cart .btn-primary {
    background-color: #ff7777;
    border-color: #4285f4;
    font-weight: 500;
  }

  .mini-cart .btn-primary:hover {
    background-color: #2a75e6;
    border-color: #2a75e6;
  }
  </style>