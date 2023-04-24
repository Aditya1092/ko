<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-light bg-light custom-nav">
      <div class="container-fluid">
        <img src="/img/svg/loo.png" alt="Company Logo"  style="width: 150px; height: 50px;">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page" href="#">Home</router-link>
            </li>
            <router-link to="/admin">
              <a class="btn btn-outline-info border-0 mx-2 my-2 my-sm-0 custom-button">Admin</a>
            </router-link>
            <router-link to="/Profile">
              <a class="btn btn-outline-info border-0 mx-2 my-2 my-sm-0 custom-button">Profile</a>
            </router-link>
          </ul>
          <form class="d-flex">
            <input class="form-control me-1  border-0 mx-2 my-2 my-sm-0 " type="search" placeholder="Search" aria-label="Search" >
            <a
              class="btn btn-outline-info border-0 mx-2 my-2 my-sm-0 custom-button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalToggle"
            >
              Get started
            </a>
            <a
              class="btn btn-outline-info border-0 mx-2 my-2 my-sm-0 custom-button"
              data-bs-toggle="modal"
              
              data-bs-target="#miniCart"
              
            >
              <i class="bi bi-cart" ></i> Cart
            </a>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media (min-width: 992px) {
  .navbar.custom-nav {
    padding-top: 16px;
    padding-bottom: 16px;
    background-color: #dad5f5!important;
  }

  .navbar-brand {
    font-size: 28px;
    font-weight: bold;
  }

  .navbar-nav .nav-link {
    font-size: 16px;
    font-weight: bold;
    color: #444;
  }

  .btn-outline-info {
    color: #fff;
    border-color: #007bff;
    background-color: #007bff;
  }

  .btn-outline-info:hover {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
  }

  .bi-cart {
    font-size: 1.5rem;
  }
}
.custom-button {
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  background-color: #ffffff;
  transition: all 0.2s ease-in-out;
}

.custom-button:hover {
  background-color: #000000;
}
</style>
