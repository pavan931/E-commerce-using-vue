<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  password: '',
  confirmPass: '',
  remember: false,
  showPassword: false,
  showPassword1: false,
  mobileNo: ''
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
      <v-card class="pa-4 mx-auto" width="450" loading text="" elevation="10">
        <v-card-item>
          <v-card-title class="text-center">Register Here</v-card-title>

          <v-form @submit.prevent="submit">
            <v-text-field
              v-model="form.name"
              label="Full Name"
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
              :type="form.showPassword ? 'text' : 'password'"
              :append-inner-icon="form.showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              v-model="form.password"
              label="Password"
              prepend-inner-icon="mdi-lock"
              variant="solo"
              @click:appendInner="form.showPassword = !form.showPassword"
            ></v-text-field>

            <v-text-field
              :type="form.showPassword1 ? 'text' : 'password'"
              :append-inner-icon="form.showPassword1 ? 'mdi-eye' : 'mdi-eye-off'"
              v-model="form.confirmPass"
              label="Confirm Password"
              prepend-inner-icon="mdi-lock"
              @click:appendInner="form.showPassword1 = !form.showPassword1"
              variant="solo"
            ></v-text-field>

            <v-text-field
              v-model="form.mobileNo"
              label="Mobile"
              variant="solo"
              prepend-inner-icon="mdi-cellphone"
            >
            </v-text-field>

            <div>
              <v-row align="center" justify="space-between">
                <v-col cols="auto">
                  <v-checkbox
                    v-model="form.remember"
                    label="Remember Me"
                    color="red"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col cols="auto">
                  <v-btn to="/login" color="red-darken-1">Login</v-btn>
                </v-col>
              </v-row>
            </div>

            <v-btn color="red-darken-1" class="mt-2" type="submit" block>Submit</v-btn>
          </v-form>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
