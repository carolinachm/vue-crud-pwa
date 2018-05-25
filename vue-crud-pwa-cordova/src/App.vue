<template>
  <v-app>
    <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title><v-btn flat :to="{name:'Home'}">{{title}}</v-btn></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat v-for="(menu,index) in menus" :key="index" :to={name:menu.route}>{{menu.name}}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <router-view></router-view>
   <v-carousel>
    <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
  </v-carousel>
  </v-app>
</template>

<script>

export default {
  data () {
    return {
      title: 'Galeria',
      menus: [
        {
          name: 'Cadastre-se', route: 'Cadastro'
        },
        {
          name: 'Login', route: 'Login'
        }
      ]
    }
  },
  name: 'App'
}
</script>

