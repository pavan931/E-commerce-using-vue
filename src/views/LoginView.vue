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
</script>

<template>
  <v-row justify="center">
    <v-col cols="5" class="mt-15">
      <v-card class="pa-4 mx-auto" width="450" loading text="" elevation="10">
        <v-card-item>
          <v-card-title class="text-center font-weight-bold text-h4">Login Here</v-card-title>

          <v-form @submit.prevent="submit">
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

            <v-checkbox v-model="form.remember" label="Remember Me" color="red" hide-details>
            </v-checkbox>

            <v-btn color="red-darken-1" class="mt-2" type="submit" block>Submit</v-btn>
          </v-form>
        </v-card-item>

        <v-card-action>
          <div class="mx-4">
            <v-btn block to="/register">Register </v-btn>
          </div>
        </v-card-action>
      </v-card>
    </v-col>
  </v-row>
</template>
