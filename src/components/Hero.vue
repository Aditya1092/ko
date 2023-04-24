<template>
  <div class="hero" >
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-md-5">
          <div class="hero-content">
            <h1 class="hero-title" >
              Ecommerce Shop For Women
            </h1>
            <p class="hero-text">
              Our shop offers a wide range of products that are carefully curated to meet your needs and customization
            </p>
            <div class="hero-btn mt-5">
              <button class="btn btn-primary mr-4" @click="scrollToProducts">Explore</button>
              
                <button class="btn btn-outline-secondary"  @click="scrollToAbout">About</button>
              
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="graphic">
            <img src="/img/svg/graphic.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String
  },
  methods: {
    scrollToProducts() {
      window.location.href = '/#products';
    },
    scrollToAbout() {
      window.location.href = '/#about';
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h1{
  text-align: left;
}
.hero {
  padding: 2rem 0;
  width: 100%;
  padding: left 30%;
   
  
  background: #f6dddd;
  text-align: left;
  border-radius: 7px;
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.507);
  

  .hero-content {
    max-width: 550px;

    .hero-title {
      font-size: 4.5rem;
      font-weight: 700;
      margin-bottom: 2rem;
    }

    .hero-text {
      font-size: 1.5rem;
      margin-bottom: 3rem;
      text-align: left;
    }

    .hero-btn button {
  margin: 0 1rem;
  padding: 1.5rem 3rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 2rem;
  background-color: #fff;
  color: #000;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.hero-btn button:hover {
  background-color: #000;
  color: #fff;
}
  }

  .graphic {
    display: flex;
    justify-content: flex-end;

    img {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
