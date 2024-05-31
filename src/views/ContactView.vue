<script setup>
import { ref } from 'vue'

const form = ref({
  fName: '',
  lName: '',
  email: '',
  mobileNo: '',
  message: '',
  remember: false
})

function submit() {
  alert(JSON.stringify(form.value))
}

const rules = {
  required: (value) => !!value || 'Required.',
  counter: (value) => value.length <= 20 || 'Max 20 characters',
  email: (value) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || 'Invalid e-mail.'
  }
}
</script>

<template>
  <v-row justify="center">
    <v-col cols="5" class="mt-15">
      <v-card class="pa-4 mx-auto" width="450" elevation="10">
        <v-card-item>
          <v-card-title class="text-center font-weight-bold font-size-large">
            Send Us a Message
          </v-card-title>

          <v-form @submit.prevent="submit">
            <v-text-field
              v-model="form.fName"
              label="Full Name"
              variant="solo"
              prepend-inner-icon="mdi-account"
            ></v-text-field>
            <v-text-field
              v-model="form.lName"
              label="Last Name"
              variant="solo"
              prepend-inner-icon="mdi-account"
            ></v-text-field>
            <v-text-field
              v-model="form.email"
              :rules="[rules.required, rules.email]"
              label="Email"
              variant="solo"
              prepend-inner-icon="mdi-email"
            ></v-text-field>
            <v-text-field
              v-model="form.mobileNo"
              label="Phone no"
              variant="solo"
              prepend-inner-icon="mdi-cellphone"
            ></v-text-field>
            <v-textarea
              v-model="form.message"
              label="How Can We Help You"
              variant="outlined"
            ></v-textarea>

            <div>
              <v-row align="center" justify="space-between">
                <v-col cols="auto">
                  <v-checkbox
                    v-model="form.remember"
                    label="I acknowledge the Terms and Conditions"
                    color="red"
                    hide-details
                  ></v-checkbox>
                </v-col>
              </v-row>
            </div>

            <v-btn color="red-darken-1" class="mt-2" type="submit" block :disabled="!form.remember">
              Get In Touch
            </v-btn>
          </v-form>
        </v-card-item>

        <v-card-item>
          <v-card-subtitle class="text-center mt-8 mb-5 font-weight-bold">
            Socialize with Us
          </v-card-subtitle>
          <v-row justify="center" align="center" class="mb-2">
            <v-col cols="auto">
              <v-btn icon href="https://www.facebook.com" target="_blank">
                <v-icon size="24px">mdi-facebook</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn icon href="https://www.twitter.com" target="_blank">
                <v-icon size="24px">mdi-twitter</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn icon href="https://www.instagram.com" target="_blank">
                <v-icon size="24px">mdi-instagram</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn icon href="https://www.linkedin.com" target="_blank">
                <v-icon size="24px">mdi-linkedin</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
