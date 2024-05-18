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
              prepend-inner-icon="mdi-key"
              variant="solo"
              @click:appendInner="form.showPassword = !form.showPassword"
            ></v-text-field>

            <v-text-field
              :type="form.showPassword1 ? 'text' : 'password'"
              :append-inner-icon="form.showPassword1 ? 'mdi-eye' : 'mdi-eye-off'"
              v-model="form.confirmPass"
              label="Confirm Password"
              prepend-inner-icon="mdi-key"
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
