<template>
  <div class="admin"  >
    <div class="welcome">
      <h1>Welcome, Admin</h1>
      <p>Here you can manage your products and orders</p>
    </div>
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <a id="show-sidebar" @click="closeMenu" class="btn btn-sm btn-dark" href="#">
        <i class="fas fa-bars"></i>
      </a>
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <a href="#">Vue Shop</a>
            <div id="close-sidebar" @click="closeMenu">
              <i class="fas fa-times"></i>
            </div>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header">
            <div class="user-pic">
            </div>
            <div class="user-info">
              <span class="user-name">
                aditya
                <strong>Godghate</strong>
              </span>
              <span class="user-role">{{ email }}</span>
              <span class="user-status">
                <i class="fa fa-circle"></i>
                <span>Online</span>
              </span>
            </div>
          </div>
          <!-- sidebar-search  -->
          <div class="sidebar-item sidebar-search">
            <div>
              <div class="input-group">
                <input type="text" class="form-control search-menu" placeholder="Search...">
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- sidebar-menu  -->
          <div class="sidebar-item sidebar-menu">
            <ul class="nav flex-column">
               
              <li class="nav-item">
                <router-link class="nav-link" to="/admin/products">
                  <i class="fab fa-amazon"></i>
                  <span>Products</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/admin/orders">
                  <i class="fa fa-shopping-cart"></i>
                  <span>Orders</span>
                </router-link>
              </li>
              
              <li class="nav-item">
                <a class="nav-link" href="#" @click="logout()">
                  <i class="fa fa-power-off"></i>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- sidebar-menu  -->
        </div>
      </nav>
      <!-- sidebar-content  -->
      <main class="page-content">
        <router-view />
      </main>
      <!-- page-content" -->
    </div>
    <!-- page-wrapper -->
  </div>
</template>

  
  <script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import { fb } from '../firebase';
import { getAuth } from "firebase/auth";

export default {
  name: "admin",
  data() {
    return {
      name: null,
      email: null,
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Hero
  },
  methods: {
    closeMenu() {
      // eslint-disable-next-line no-undef
      $(".page-wrapper").toggleClass("toggled");
    },
    logout(){
        fb.auth().signOut()
        .then(() => {
              this.$router.replace('/');
          })
          .catch((err) =>{
              console.log(err);
          });

    },
    created(){
        const auth = getAuth();
        var user = auth.currentUser;
        this.email = user.email;
       
      }
  }
};
</script>
  
  <style>


 .admin {
  background-color: #f9f9f9;
  
  height: 100vh;
}

.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  text-align: center;
}

p {
  font-size: 1.2rem;
  text-align: center;
}
  

.page-wrapper {
  display: flex;
  height: 100vh;
  padding-left: 0px;
}
  h1 {
  font-size: 48px;
  margin-bottom: 20px;
}
</style>
  