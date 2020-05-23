<template>
  <v-app-bar app class="light-blue lighten-5" flat>
    <v-spacer></v-spacer>

    <div class="d-flex align-center">
      <router-link to="/" text>
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.svg"
          transition="scale-transition"
          width="60"
          height="60"
        />
      </router-link>
    </div>

    <v-spacer></v-spacer>

    <v-btn icon color="primary">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>
