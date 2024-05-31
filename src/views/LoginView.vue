<script setup>
import { ref } from 'vue'

const form = ref({
  email: '',
  password: '',
  remember: false,
  showPassword: false
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
  <!-- <NavBar /> -->

  <v-row justify="center">
    <v-col cols="5" class="mt-15">
      <v-card class="pa-4 mx-auto" width="450" loading text="" elevation="10">
        <v-card-item>
          <v-card-title class="text-center font-weight-bold text-h4">Login Here</v-card-title>

          <v-form @submit.prevent="submit">
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
            <a
              class="text-caption text-decoration-none text-red"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              Forgot login password?</a
            >

            <!-- <v-card-text class="text-medium-emphasis text-caption">
              Warning: After 3 consecutive failed login attempts, you account will be temporarily
              locked for three hours. If you must login now, you can also click "Forgot login
              password?" below to reset the login password.
            </v-card-text> -->

            <v-checkbox v-model="form.remember" label="Remember Me" color="red" hide-details>
            </v-checkbox>

            <v-btn color="red-darken-1" class="mt-2" type="submit" block>Log In</v-btn>
          </v-form>
        </v-card-item>

        <v-card-action>
          <div class="mx-4">
            <v-btn block to="/register">Sign Up</v-btn>
          </div>
        </v-card-action>
      </v-card>
    </v-col>
  </v-row>
</template>
