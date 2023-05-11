<template>
  <div class="products">
    <h3>Products page</h3>
    
   

   
    <div class="product-test">
     
     
      <hr />
      <h3 class="d-inline-block ">Product List</h3>
      <br>

      
    <a class="btn btn-outline-info border-0 mx-2 my-2 my-sm-0" float-right  data-bs-toggle="modal" data-bs-target="#product">
 
        ADD PRODUCT</a> 
      <div class="modal fade" id="product" tabindex="-1" role="dialog" aria-labelledby="productLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="productLabel">Edit Product</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="product-edit-form">
    <form @submit.prevent="handleSubmit">
      
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" class="form-control" v-model="product.name" required>
      </div>
      <div class="form-group">
        <vue-editor v-model="product.description"></vue-editor>
        <label for="description">Description:</label>
        
      </div>
      <div class="form-group">
        <label for="price">Price:</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">$</span>
          </div>
          <input type="number" id="price" class="form-control" v-model="product.price" required>
        </div>
      </div>
      <div class="form-group d-flex">
        <label for="image">Image:</label>
<div class="custom-file">
  <input type="file" class="custom-file-input" id="image" @change="handleImageChange">
  <label class="custom-file-label" for="image">Choose file</label>
  <div v-for="image in product.images" :key="image">
    <iframe :src="image" width="100%" height="500px"></iframe>
  </div>
</div>

        
        
      </div>
      <button type="submit" class="btn btn-primary" @click="addProduct()">Save</button>
    </form>
  </div>
              
</div>
                  </div>
                  </div>
                </div>


      
      <div class="table-responsive">
        <table  id="tableComponent" class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Modify</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="product in products" v-bind:key="product.price">
              <td>{{ product.data().name }}</td>
              <td>{{ product.data().price }}</td>
              <td>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#edit" @click="editProduct(product)">Edit</button>
                <button class="btn btn-danger" @click="deleteProduct(product.id)">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="editLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="editLabel" >edit</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="form-group">
        <input
          type="text"
          placeholder="Product Name"
          v-model="product.name"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          placeholder="Price"
          v-model="product.price"
          class="form-control"
        />
      </div>
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" @click="updateProduct()" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
  
</template>
    
  <script>
import { db } from "../firebase";
 
import { getStorage, ref , uploadBytes ,uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { VueEditor } from "vue2-editor";
import { doc,deleteDoc } from "firebase/firestore";

import {  query,  onSnapshot } from "firebase/firestore";
import {  updateDoc } from "firebase/firestore";
import Swal from 'sweetalert2';
window.Swal=Swal
import { collection, addDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
export default {
  components: {
    VueEditor
  },

  name: "Products",
  props: {
    msg: String,
  },
  data() {
    return {
      products: [],
      product: {
          name:null,
          description:null,
          price:null,
          tags:[],
          images:[]
      },
      activeItem : null
    }
  },
  methods: {

    handleSubmit() {
      // Call a method to save the edited product to the database
      this.$emit('save-product', this.product);
    },
    handleImageChange(e) {
      const file = e.target.files[0];
      const storage = getStorage();
      const mountainsRef = ref(storage, "products/" + file.name);
      const uploadTask = uploadBytesResumable(mountainsRef, "products/");
      uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    
  }, 
  () => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      this.product.images.push(downloadURL);
    });
  }
);
      uploadBytes(mountainsRef, file).then(() => {
  console.log('Uploaded a blob or file!');
});
    },

    watcher(){
      const q = query(collection(db, "products"));
     onSnapshot(q, (querySnapshot) => {
  this.products = [];
  querySnapshot.forEach((doc) => {
      this.products.push(doc);
  });
  
});
    },
    async updateProduct(){
      const washingtonRef = doc(db, "products", this.activeItem);
      this.watcher();
    alert("updated successfully");
// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef, this.product);
    },
    editProduct(product ){
        this.product = product.data();
        this.activeItem = product.id;

    },
    
    async deleteProduct(dbdoc) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async (result) => {
        if (result.value) {
          await deleteDoc(doc(db, "products", dbdoc));
          Swal.fire({
            type: 'success',
            title: 'Deleted  successfully'
          })
        
        }
      })
     
    },
    async readData() {
      
      const querySnapshot = await getDocs(collection(db, "products"));
      this.product=querySnapshot

      querySnapshot.forEach((doc) => {
        doc.data();
        this.products.push(doc);
        
      });
    },
    async addProduct() {
      try {
        const docRef = await addDoc(collection(db, "products"), this.product);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
  created() {
    this.readData();
    
  },
};
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped lang="scss">
  
    .product-edit-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  border-radius: 0;
}

.input-group-prepend {
  background-color: #F0F0F0;
  border-radius: 0;
}

.custom-file-label {
  overflow: hidden;
}

.image-preview {
  margin-top: 10px;
}

.image-preview img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
}
</style>