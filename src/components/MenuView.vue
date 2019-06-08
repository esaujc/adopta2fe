<template>
  <v-content>
    <div id="menu-view">
      <v-fade-transition mode="out-in">
        <router-view/>
      </v-fade-transition>
    </div>
  </v-content>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'View of App'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>