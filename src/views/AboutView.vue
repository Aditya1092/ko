<template>
  <div class="about" id="about">
    <div class="header">
      <h1>About Us</h1>
      
    </div>
    <div class="about-section return-policy">
      <h2><i class="fas fa-undo"></i> Return Policy</h2>
      <p>We offer a 30-day return policy for all products purchased from our website. If you are not satisfied with your purchase for any reason, you can return it for a full refund within 30 days of the delivery date. Please note that the product must be in its original condition and packaging, and you will be responsible for the return shipping costs.</p>
    </div>
    <div class="about-section contact-us">
      <h2><i class="fas fa-envelope"></i> Contact Us</h2>
      <p>If you have any questions or concerns, please feel free to contact us at <a href="mailto:paras.angral.btech2020@sitpune.edu.in">paras.angral.btech2020@sitpune.edu.in</a> or <a href="mailto:aditya.godghate.btech2020@sitpune.edu.in">aditya.godghate.btech2020@sitpune.edu.in</a> or <a href="mailto:vrinda.maheshwari.btech2020@sitpune.edu.in">vrinda.maheshwari.btech2020@sitpune.edu.in</a> or <a href="mailto:mahin.soni.btech2020@sitpune.edu.in">mahin.soni.btech2020@sitpune.edu.in</a> or <a href="mailto:yash.sharma.btech2020@sitpune.edu.in">yash.sharma.btech2020@sitpune.edu.in</a></p>
    </div>
    <div class="about-section about-company">
      <h2><i class="fas fa-building"></i> About Our Company</h2>
      <p>Our company was founded in 2023 with the goal of providing high-quality womens clothes at affordable prices. We have a team of dedicated professionals who are committed to ensuring that our customers are satisfied with their purchases. We offer a wide range of products, and we are constantly expanding our inventory to meet the needs of our customers. Thank you for choosing to shop with us!</p>
    </div>
    <div class="faq">
      <h2><i class="fas fa-question-circle"></i> FAQ</h2>
      <ul>
        <li><strong>Q:</strong> How long does it take for my order to be shipped?</li>
        <li><strong>A:</strong> We typically process and ship orders within 2-3 business days.</li>
        <li><strong>Q:</strong> Do you offer international shipping?</li>
        <li><strong>A:</strong> Yes, we do offer international shipping to select countries. Please contact us for more information.</li>
        <li><strong>Q:</strong> What payment methods do you accept?</li>
        <li><strong>A:</strong> We accept all major credit cards and PayPal.</li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
 

export default {
  name: "AboutView",
  components: {
     
  },
   
};
</script>

<style scoped>
.about {
  width: 100%;
  background-color: rgb(255, 255, 255);
  padding: 2rem;
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

.about-section {
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.5rem;
  background-color: #ffeded;
  color: #000000;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
}

p {
  font-size: 1.2rem;
  line-height: 1.5;
}

ul {
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
}

li {
  font-size: 1.2rem;
  margin-top: 1rem;
  list-style: none;
}

li strong {
  margin-right: 0.5rem;
  font-weight: bold;
}

a {
  color: #3aadff;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

a:hover {
  color: #0056b3;
}
</style>