<template>
  <v-app id="inspire">

    <v-spacer></v-spacer>
    <v-spacer></v-spacer>

    <v-navigation-drawer v-model="drawer">
      <v-sheet
        color="grey-lighten-4"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey-darken-1"
          size="64"
        ></v-avatar>

        <div>john@google.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, index] in links"
          :key="index"
          :to="icon[2]"
          link
        >
          <template v-slot:prepend>
            <v-icon>{{ icon }}</v-icon>
          </template>
          <!-- <router-link to {{ linker }}></router-link> -->

          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <router-view></router-view>
  </v-app>
  
</template>

<script>

  export default {
    data: () => ({
      cards: ['Today', 'Yesterday'],
      drawer: null,
      links: [
        
        ['mdi-inbox-arrow-down', 'Profile', '/profile'],
        ['mdi-send', 'Create Forum', '/create'],
        ['mdi-delete', 'Home', '/'],
        ['mdi-send', 'Login','/login']
      ],
    }),
    methods: {
      link(){
        
      }
    },
  }
</script>