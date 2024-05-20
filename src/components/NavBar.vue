<template>
  <v-app-bar app dark flat class="mt-1" height="100">
    <v-btn>
      <v-icon left class="mr-2">mdi-menu</v-icon>
    </v-btn>
    <v-toolbar-title>CATALOGUE</v-toolbar-title>
    <div
      style="
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
      "
    >
      <h4 class="title-font">Natures Nest</h4>
    </div>
    <v-spacer></v-spacer>
    <v-col cols="3">
      <v-text-field
        density="compact"
        variant="outlined"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        single-line
        hide-details
        class="mr-2"
      ></v-text-field>
    </v-col>
  </v-app-bar>
</template>

<script setup></script>

<style scoped>
.title-font {
  font-family: 'Pacifico', cursive;
  font-size: 30px;
}
</style>
