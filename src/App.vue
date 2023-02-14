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
        <!-- to au when u use v-for u have to binding key duay -->
        <v-list-item
          v-for="(icon,index) in links"
          :key="index"
          :to="icon.url"
          :title = icon.text
          link
        >
          <template #prepend>
            <v-icon>{{ icon.icon }}</v-icon>
          </template>
          <!-- <router-link to {{ linker }}></router-link> -->

         
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
        
        {icon:'mdi-inbox-arrow-down',text: 'Profile', url:'/profile'},
        {icon:'mdi-send', text:'Create Forum', url:'/create'},
        {icon:'mdi-delete', text:'Home', url:'/'},
        {icon:'mdi-send', text:'Login',url:'/login'}
      ],
    }),
    
  }
</script>