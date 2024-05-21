<script setup>
import { ref } from 'vue'

const form = ref({
  fName: '',
  lName: '',
  email: '',
  mobileNo: '',
  message: ''
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
          <v-card-title class="text-center font-weight-bold font-size-large"
            >Send Us a Message</v-card-title
          >

          <v-form @submit.prevent="submit">
            <v-text-field
              v-model="form.fName"
              label="Full Name"
              variant="solo"
              prepend-inner-icon="mdi-mail"
            >
            </v-text-field>
            <v-text-field
              v-model="form.lName"
              label="Last Name"
              variant="solo"
              prepend-inner-icon="mdi-mail"
            >
            </v-text-field>
            <v-text-field
              v-model="form.email"
              :rules="[rules.required, rules.email]"
              label="Email"
              variant="solo"
              prepend-inner-icon="mdi-email"
            >
            </v-text-field>

            <v-text-field
              v-model="form.mobileNo"
              label="Phone no"
              variant="solo"
              prepend-inner-icon="mdi-cellphone"
            >
            </v-text-field>

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

            <v-btn color="red-darken-1" class="mt-2" type="submit" block>Get In Touch</v-btn>
          </v-form>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
