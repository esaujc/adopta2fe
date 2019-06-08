<template>
  <v-app>
      <Menu/>
      <MenuView/>
  </v-app>
</template>

<script>
import Menu from './components/Menu'
import MenuView from './components/MenuView'

export default {
  name: 'App',
  components: {
    Menu,
    MenuView
  },
}
</script>
