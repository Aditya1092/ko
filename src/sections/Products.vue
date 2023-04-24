<template>
  <div class="products" id="products">
    <h3>Products page</h3>

    <div class="product-test">
      <hr />
      <br />

      <div class="row">
        <div class="col-md-4" v-for="product in products" v-bind:key="product.price">
          <v-hover v-slot="{ hover }">
            <div class="card product-item" :class="{ 'product-item-hover': hover }">
              <v-carousel cycle hide-delimiters height="400" show-arrows-on-hover>
                <v-carousel-item v-for="(image, index) in product.data().images" :key="index">
                  <v-img :src="image" width="100%" height="600"></v-img>
                </v-carousel-item>
              </v-carousel>

              <div class="card-body">
                <h5 class="card-title">{{ product.data().name }}</h5>
                <div class="card-text" v-html="parseHTML(product.data().description)"></div>

                <add-to-cart
                  :product-image="product.data().images"
                  :name="product.data().name"
                  :price="product.data().price"
                  :p-id="product.id"
                ></add-to-cart>
              </div>
            </div>
          </v-hover>
        </div>
      </div>
    </div>
  </div>
</template>

    
  <script>
import { db } from "../firebase";
 


 
 
import 'firebase/firestore';
 
 
import { collection,} from "firebase/firestore";
import { getDocs } from "firebase/firestore";
export default {
 

  name: "Products",
  props: {
    msg: String,
  },
  data() {
    return {
      products: [],
      
      
    }
  },
  methods: {

   

     
   getImage(images){

    return images[0];

   },
   parseHTML(html) {
    const el = document.createElement('div');
    el.innerHTML = html;
    const parsedText = el.textContent || el.innerText || '';
    return parsedText.trim();
  },
    
   
    async readData() {
      
      const querySnapshot = await getDocs(collection(db, "products"));
      this.product=querySnapshot

      querySnapshot.forEach((doc) => {
        
        this.products.push(doc);
        
      });
    },
  
  },
  created() {
    this.readData();
    
  },
};
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped lang="scss">
     #products {
    
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h3 {
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

  .product-test {
    background-color: rgb(255, 227, 227);
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.304);
  }
  
  .v-carousel__controls__prev,
  .v-carousel__controls__next {
    color: rgb(0, 0, 0) !important;
  }

  .v-window__container {
    height: 400px;
    width: 10px;
  }

  

  .v-carousel__item {
    height: 100%;
  }

  .v-carousel__controls__icon {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .v-carousel__controls__icon--disabled {
    opacity: 0.4;
  }

  .product-item {
    transition: box-shadow 0.3s ease-in-out;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin: 20px;
    position: relative;
  }

  .product-item-hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  }
</style>