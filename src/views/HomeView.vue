<template>
  <div class="home" id="home">
    <Navbar></Navbar>
    <Hero />
     
    
         
       
    <h1>Meet Our Team</h1>
    <div class="team-members">
      <div v-for="member in teamMembers" :key="member.id" class="team-member">
        <img :src="member.photo" alt="Team Member Photo" class="team-member-photo">
        <h2 class="team-member-name">{{ member.name }}</h2>
        <p class="team-member-title">{{ member.title }}</p>
        <p class="team-member-bio">{{ member.bio }}</p>
      </div>
    </div>
        
      
     
    <Products />
    <AboutView></AboutView>
  <login></login>

    <mini-cart></mini-cart>
  <!-- Button trigger modal -->


<!-- Modal -->
 
  </div>
</template>

<script>
// @ is an alias to /src
import Products from "@/sections/Products.vue";
import AboutView from "@/views/AboutView.vue"
import Hero from "@/components/Hero.vue";
import Login from "@/components/Login.vue";

export default {
  name: "HomeView",
  components: {
    Hero,
    Products, Login,AboutView 
  },
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: 'Paras Angral',
          photo: '/img/svg/paras.jpeg',
          title: 'CEO',
          
        },
       
        {
          id: 2,
          name: 'Aditya Godghate',
          photo: '/img/svg/mine.jpg',
          title: 'CEO',
          
        },
        {
          id: 3,
          name: 'Vrinda Maheshwari',
          photo: '/img/svg/vrinda.jpeg',
          title: 'CEO',
           
        },
        {
          id: 4,
          name: 'Mahin Soni',
          photo: '/img/svg/MAHIN.jpeg',
          title: 'CEO',
          
        },
        {
          id: 5,
          name: 'Yash Sharma',
          photo: '/img/svg/yash.jpeg',
          title: 'CEO',
          
        },
        
      ]
    }
  }
};
</script>
<style scoped lang="scss">
.home {
  padding-inline-end: 0%;
  width: 100%;

  padding-bottom: 3rem;
  text-align: left;
}

h1 {
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

 
.team-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.team-members {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}

.team-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 2rem;
}

.team-member-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.team-member-name {
  font-size: 2rem;
  margin: 0;
}

.team-member-title {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

.team-member-bio {
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: center;
}
 


</style>
