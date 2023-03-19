<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        getElementFromDOM() {
            return document.getElementById('element');
        },
        isAvailableInDOM() {
            return this.getElementFromDOM() !== null;
        }, getDOMCountValue() {
            return document.getElementById('count').textContent;
        }
    },
    beforeCreate() {
        console.log('Executing beforeCreate hook...');
        // Uncomment line to see that methods are not yet available before created! (error raised)
        // console.log(`Element available in DOM=${this.isAvailableInDOM()}`);
        console.log('Methods not yet available, component is not yet created!');
        console.log(`Data count=${this.count}`);
        console.log('Data not yet initialized, component is not yet created!');
        console.log('beforeCreate hook executed');
        console.log('#################');
    },
    created() {
        console.log('Executing created hook...');
        console.log(`Element available in DOM=${this.isAvailableInDOM()}`);
        console.log(`Data count=${this.count}`);
        console.log('created hook executed');
        console.log('#################');
    },
    beforeMount() {
        console.log('Executing beforeMount hook...');
        console.log(`Element available in DOM=${this.isAvailableInDOM()}`);
        console.log(`Data count=${this.count}`);
        console.log('beforeMount hook executed');
        console.log('#################');
    },
    mounted() {
        console.log('Executing mounted hook...');
        console.log(`Element available in DOM=${this.isAvailableInDOM()}`);
        console.log(`Data count=${this.count}`);
        console.log('mounted hook executed');
        console.log('#################');
    },
    beforeUpdate() {
        console.log('Executing beforeUpdate hook...');
        console.log(`Element available in DOM=${this.isAvailableInDOM()}`);
        console.log(`DOM count=${this.getDOMCountValue()}`);
        console.log(`Data count=${this.count}`);
        console.log('beforeUpdate hook executed');
        console.log('#################');
    },
    updated() {
        console.log('Executing updated hook...');
        console.log(`Element available in DOM=${this.isAvailableInDOM()}`);
        console.log(`DOM count=${this.getDOMCountValue()}`);
        console.log(`Data count=${this.count}`);
        console.log('updated hook executed');
        console.log('#################');
    }
}
</script>
<template>

        <section id="contact" class="contact">
          <div class="container">

            <div class="section-title">
              <h2 data-aos="fade-up">Contact</h2>
             
            </div>

            <div class="row justify-content-center">

              <div class="col-xl-3 col-lg-4 mt-4" data-aos="fade-up">
                <div class="info-box">
                  <!-- <i class="bx bx-map"></i> -->
                  <h3>Our Address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 mt-4" data-aos="fade-up" data-aos-delay="100">
                <div class="info-box">
                  <!-- <i class="bx bx-envelope"></i> -->
                  <h3>Email Us</h3>
                  <p>info@example.com<br>contact@example.com</p>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 mt-4" data-aos="fade-up" data-aos-delay="200">
                <div class="info-box">
                  <!-- <i class="bx bx-phone-call"></i> -->
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55<br>+1 6678 254445 41</p>
                </div>
              </div>
            </div>

            <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="300">
              <div class="col-xl-9 col-lg-12 mt-4">
                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                  <div class="row">
                    <div class="col-md-6 form-group">
                      <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
                    </div>
                  </div>
                  <div class="form-group mt-3">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
                  </div>
                  <div class="form-group mt-3">
                    <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                  </div>
                  <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div class="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>

            </div>

          </div>
        </section><!-- End Contact Section -->
 


</template>

<style>
/*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/
.contact .info-box {
  color: #313030;
  box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
  padding: 20px;
}

.contact .info-box i {
  font-size: 32px;
  color: #ff5821;
  border-radius: 50%;
  padding: 8px;
  border: 2px dotted #ffded4;
  float: left;
}

.contact .info-box h3 {
  font-size: 20px;
  color: #656262;
  font-weight: 700;
  margin: 10px 0 10px 68px;
}

.contact .info-box p {
  padding: 0;
  line-height: 24px;
  font-size: 14px;
  margin: 0 0 0 68px;
}

.contact .php-email-form {
  box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
  padding: 30px;
}

.contact .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}

.contact .php-email-form .error-message br+br {
  margin-top: 25px;
}

.contact .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}

.contact .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}

.contact .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  animation: animate-loading 1s linear infinite;
}

.contact .php-email-form input,
.contact .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
}

.contact .php-email-form input:focus,
.contact .php-email-form textarea:focus {
  border-color: #ff5821;
}

.contact .php-email-form input {
  padding: 10px 15px;
}

.contact .php-email-form textarea {
  padding: 12px 15px;
}

.contact .php-email-form button[type=submit] {
  background: #ff5821;
  border: 0;
  padding: 10px 24px;
  color: #fff;
  transition: 0.4s;
}

.contact .php-email-form button[type=submit]:hover {
  background: #ff7e54;
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}


</style>