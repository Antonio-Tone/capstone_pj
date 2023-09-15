<template>
  <div class="main">
    <div class="heading text-center animate__animated animate__fadeInLeft">
    <h1>We Would Love Your Feedback!</h1>
  </div>

  <div class="form container-fluid">
    <div class="text">
      <p>Required fields are marked with *</p>
    </div>
    <form action="https://formspree.io/f/mleybogq" method="POST">
      <div class="names row">
        <div class="mb-3 col-6">
          <label for="exampleFormControlInput1" class="form-label"
            >First Name *</label
          >
          <input
            name="name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enzo"
            required
            oninvalid="this.setCustomValidity('Please insert your first name')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <div class="mb-3 col-6">
          <label for="exampleFormControlInput1" class="form-label"
            >Last Name *</label
          >
          <input
            name="name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Ferrari"
            required
            oninvalid="this.setCustomValidity('Please insert your last name')"
            oninput="this.setCustomValidity('')"
          />
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Email address *</label
        >
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Enzo@ferrari.com"
          required
          oninvalid="this.setCustomValidity('Please insert your email address')"
          oninput="this.setCustomValidity('')"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Leave a Message *</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="6"
          required
          oninvalid="this.setCustomValidity('Please insert your message')"
          oninput="this.setCustomValidity('')"
        ></textarea>
      </div>
      <div class="formButtons">
        <div class="submit">
          <button type="submit">Send</button>
        </div>
        <div class="reset mb-3">
          <button type="reset">Reset</button>
        </div>
      </div>
    </form>
  </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main{
  min-height: 80.8vh;
}
.heading {
  margin-bottom: 20px;
}

.form {
  width: 50%;
  margin-bottom: 20px;
}
.text {
  display: flex;
}
input,
textarea {
  color: #eeebdd !important;
  background: radial-gradient(circle at 10% 20%, rgb(69, 86, 102) 0%, rgb(34, 34, 34) 90%);

  border-radius: 20px;
}

::placeholder {
  color: #eeebdd;
}
.formButtons {
  display: flex;
  justify-content: center;
}
.submit,
.reset {
  margin: auto;
}

button {
  color: #eeebdd;
  background:rgb(34,34,34);
  width: 100px;
  border: 0px;
  border-radius: 20px;
  padding: 5px 8px 5px 8px;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

button:hover {
  color: #eeebdd;
  background: rgb(228,212,134);
  box-shadow: 0 0 30px 5px rgb(228,212,134);
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

@media only screen and (max-width: 300px) {
  .names {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 100px;
  }
  .formButtons {
    display: flex;
    flex-direction: column;
  }
  button {
    margin: 10px;
  }
}

@media only screen and (max-width: 700px) {
  .formButtons {
    display: flex;
    flex-direction: column;
  }
  button {
    margin: 10px;
  }
}
</style>