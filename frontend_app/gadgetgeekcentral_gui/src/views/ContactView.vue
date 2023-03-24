<template>
    <div class="container text-center">
  <div class="row">
    <div class="col">
      <form action="https://formspree.io/f/meqwzryw" method="POST" class="contact-form">
      <h5 class="title">Contact us</h5>
      <p class="description">Feel free to contact us if you need any assistance or have a  question.
      </p>
      <div>
        <input type="text" class="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" name="name" required>
      </div>
      <div>
        <input type="email" class="form-control rounded border-white mb-3 form-input" placeholder="Email" name="email" required>
      </div>
      <div>
        <textarea id="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" name="message" required></textarea>
      </div>
      <div class="submit-button-wrapper">
        <input type="submit" value="Send">
      </div>
    </form>
    </div>
    <div class="col info">
      <h4>Contact Information</h4>
      <p><i class="fa-solid fa-house"></i>314 Imam Haron Rd.</p>
      <p>Cape Town ,South Africa</p>
      <p><i class="fa-solid fa-phone"></i>Phone:+27 62 357 2965</p>
      <p><i class="fa-solid fa-envelope"></i>Email: GadgetGeekCentral@gmail.com</p>
     <div class="social-icons">

     </div>
    </div>
  </div>
    </div>
  
</template>

<script>


    export default {
        
    }
</script>

<style  scoped>
.container{
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.contact-form {
  padding: 2rem;
  background-color: rgba(113, 167, 228, 0.84);
  border-radius: 0;
  max-width: 600px;
}

.contact-form textarea {
  resize: none;
}

.contact-form .form-input,
.form-text-area {
  background-color: #f0f4f5;
  height: 50px;
  padding-left: 16px;
}

.contact-form .form-text-area {
  background-color: #f0f4f5;
  height: auto;
  padding-left: 16px;
}

.contact-form .form-control::placeholder {
  color: #aeb4b9;
  font-weight: 600;
  opacity: 1;
}

.contact-form .form-control:-ms-input-placeholder {
  color: #aeb4b9;
  font-weight: 500;
}

.contact-form .form-control::-ms-input-placeholder {
  color: #e8ecef;
  font-weight: 500;
}

.contact-form .form-control:focus {
  border-color: #78eaee;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.07), 0 0 8px #cee0ed;
}

.contact-form .title {
  text-align: center;
  font-size: 24px;
  font-weight: 500;
}

.contact-form .description {
  color: #919599;
  font-size: 14px;
  text-align: center;
}

.contact-form .submit-button-wrapper {
  text-align: center;
}

.contact-form .submit-button-wrapper input {
  border: none;
  border-radius:0;
  background-color: black;
  color: white;
  text-transform: uppercase;
  padding: 10px 60px;
  font-weight: 600;
  letter-spacing: 2px;
  transition: all 0.25s ease 0s
}

.contact-form .submit-button-wrapper input:hover {
  background-color: #2f85e8;
  scale: 1.05;
  box-shadow: 2px 2px 2px #000;
}
.col{
  text-align: start;
}
.info{
  padding-top: 5rem;
}
.btn{
  border-radius: 0;
  transition: all 0.25s ease 0s
}
.btn:hover{
  scale: 1.05;
  box-shadow: 2px 2px 2px #000;
}

</style>