<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    getElementFromDOM() {
      return document.getElementById("element");
    },
    isAvailableInDOM() {
      return this.getElementFromDOM() !== null;
    },
    getDOMCountValue() {
      return document.getElementById("count").textContent;
    },
  },
};
</script>
<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-title">
        <h1 class="row justify-content-center mt-4">Contact</h1>
      </div>

      <div class="row justify-content-center">
        <div class="col-xl-3 col-lg-4 mt-4" data-aos="fade-up">
          <div class="info-box">
            <i class="bi bi-geo-alt mydimension"></i>
            <h3>Notre localisation</h3>
            <p>A108 Adam Street,73400, Paris</p>
          </div>
        </div>

        <div
          class="col-xl-3 col-lg-4 mt-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="info-box">
            <i class="bi bi-mailbox mydimension"></i>
            <h3>Notre adresse email</h3>
            <p>info@gmail.com<br />Stoparnaque@gmail.com</p>
          </div>
        </div>
        <div
          class="col-xl-3 col-lg-4 mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="info-box">
            <i class="bi bi-telephone mydimension"></i>
            <h3>Notre numéro</h3>
            <p>+33 558 95 59 85<br />+33 558 95 59 89</p>
          </div>
        </div>
      </div>

      <div
        class="row justify-content-center"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div class="col-xl-9 col-lg-12 mt-4">
          <form
            action="forms/contact.php"
            method="post"
            role="form"
            class="email-form"
          >
            <div class="row">
              <div class="col-md-6 form-group">
                <input
                  type="text"
                  name="title"
                  class="form-control"
                  id="title"
                  placeholder="Your title"
                  required
                />
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div class="form-group mt-3">
              <input
                type="text"
                class="form-control"
                name="sujet"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div class="form-group mt-3">
              <textarea
                class="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div class="my-3">
              <div class="loading">Chargement</div>
              <div class="error-message"></div>
              <div class="sent-message">
                Votre message à été envoyé. Merci !
              </div>
            </div>

            <div class="text-center">
              <button
                class="btn btn-outline-primary col-12 col-md-3 mt-3"
                type="submit"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.h2 {
  justify-content: center;
}
.contact .info-box {
  color: #313030;
  box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
  padding: 15px;
}

.contact .info-box i {
  font-size: 32px;
  margin-right: 15px;
  color: blue;
  border-radius: 50%;
  padding: 15px;
  border: 2px dotted rgba(214, 215, 216, 0.6);
  float: left;
}

.rich-text {
  text-align: center !important;
  overflow-wrap: break-word;
}

.contact .info-box h3 {
  font-size: 20px;
  color: #656262;
  font-weight: 700;
  margin: 10px 0 10px 68px;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.contact .info-box p {
  padding: 0;
  line-height: 24px;
  font-size: 14px;
  margin: 0 0 0 68px;
}

.contact .email-form {
  box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
  padding: 30px;
}

.bi {
  color: rgb(0, 119, 255) !important;
}
.contact .email-form .error-message {
  display: none;
  color: #fff;
  background: rgb(0, 119, 255);
  text-align: left;
  padding: 15px;
  font-weight: 600;
}

.contact .email-form .error-message br + br {
  margin-top: 25px;
}

.contact .email-form .sent-message {
  display: none;
  color: #fff;
  background: rgb(0, 119, 255);
  text-align: center;
  padding: 15px;
  font-weight: 600;
}

.contact .email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}

.contact .email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 9px solid rgb(0, 119, 255);
  border-top-color: #eee;
  animation: animate-loading 1s linear infinite;
}

.contact .email-form input,
.contact .email-form textarea {
  border-radius: 10px;
  box-shadow: none;
  font-size: 14px;
}

.contact .email-form input:focus,
.contact .email-form textarea:focus {
  border-color: rgb(0, 119, 255);
}

.contact .email-form input {
  padding: 10px 15px;
}

.contact .email-form textarea {
  padding: 12px 15px;
}

.contact .email-form button[type="submit"] {
  background: rgb(0, 119, 255);
  border: 10px;
  padding: 10px 24px;
  color: #fff;
  transition: 0.4s;
}

.contact .email-form button[type="submit"]:hover {
  background: #78cbec;
}
</style>
