<template>
  <div class="login">
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header  ">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel">LOGIN</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                 
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            </div>

                             <div class="form-group">
                                <button class="btn btn-primary" @click="login" >Login</button>
                            </div>
                            
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
      </div>
    </div>
  </div>
</div>
<div v-if="showLoginPopup" class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
    
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header bg-primary text-light">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">SIGN UP</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5 class="text-center">Create New Account</h5>
                             
                            <div class="form-group">
                                <label for="name">Your name</label>
                                <input type="text" v-model="name" class="form-control" id="name" placeholder="Your nice name">
                            </div>

                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email"  v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
                            </div>

                            <div class="form-group">
                                <button class="btn btn-primary" @click="register">Signup</button>
                            </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
      </div>
    </div>
  </div>
</div>
 
  </div>
</template>
  
<script >
  
import { fb } from '../firebase'
export default {
  name: "Login",
  props: {
    msg: String
  },
  data(){
      return {
          name:null,
          email:null,
          password:null,
          showLoginPopup: true
      }
  },
  methods:{

    login(){
        fb.auth().signInWithEmailAndPassword(this.email, this.password)
                        .then(() => {
                            this.showLoginPopup = false
                            alert("login successful");
                            
                            if(this.email=="adminn@gmail.com" && this.password=="admin@1234"  ){
                                this.$router.replace('admin');
                            }
                              // Close the modal
                            
                        })
                        .catch(function(error) {
                            // Handle Errors here.
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            if (errorCode === 'auth/wrong-password') {
                                alert('Wrong password.');
                            } else {
                                alert(errorMessage);
                            }
                            console.log(error);
                    });
    },
    register(){
        fb.auth().createUserWithEmailAndPassword(this.email,this.password)
                // eslint-disable-next-line no-unused-vars
                .then((user) => {
                  
                  
                 
                })
                .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
    }
  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
  .modal-header {
  background-color: #ffe0e0; /* Change the background color */
  border-bottom: none; /* Remove the bottom border */
  padding: 1rem; /* Add some padding */
}

  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to bottom right, #FFFFFF, #F3F3F3);
  }

  /* Style for the first modal */
  #exampleModalToggle .modal-dialog,
  #exampleModalToggle2 .modal-dialog {
    width: 400px;
  }

  .modal-header {
    border-bottom: none;
  }

  .modal-title {
    color: #333;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  /* Style for the second modal */
  #exampleModalToggle2 .modal-title {
    color: #333;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }

  /* Button style */
  .btn-primary {
    background-color: #333;
    border-color: #333;
    font-weight: bold;
  }

  .btn-primary:hover {
    background-color: #222;
    border-color: #222;
  }

  .btn-close {
    color: #333;
  }

  /* Input style */
  input[type="email"],
  input[type="password"],
  input[type="text"] {
    border-radius: 0;
    border: none;
    border-bottom: 1px solid #ccc;
    font-size: 1rem;
    font-weight: bold;
  }

  input[type="email"]:focus,
  input[type="password"]:focus,
  input[type="text"]:focus {
    border-color: #333;
    box-shadow: none;
  }

  /* Small text style */
  .form-text {
    color: #999;
    font-size: 0.8rem;
  }

  /* Center the second modal */
  #exampleModalToggle2 .modal-dialog {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>