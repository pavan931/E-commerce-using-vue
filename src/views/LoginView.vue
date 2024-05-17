<script setup>
import { ref } from 'vue'

const form = ref({
  email: '',
  password: '',
  remember: false
})

function submit() {
  alert(JSON.stringify(form.value))
}
</script>

<template>
  <v-row justify="center">
    <v-col cols="5">
      <v-card class="pa-4 mx-auto" width="300" loading text="">
        <v-card-item>
          <v-card-title class="text-center">Login Here</v-card-title>

          <v-form @submit.prevent="submit">
            <v-text-field
              v-model="form.email"
              label="Email"
              variant="solo"
              prepend-inner-icon="mdi-mail"
            >
            </v-text-field>

            <v-text-field
              type="password"
              v-model="form.password"
              label="Password"
              prepend-inner-icon="mdi-key"
              variant="solo"
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
