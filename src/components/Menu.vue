<template>
<div>
    <v-navigation-drawer fixed clipped class="grey lighten-4" app v-model="drawer">
      <v-list dense class="grey lighten-4">
        <template v-for="(item, i) in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="i"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-right">
              <v-btn small flat>edit</v-btn>
            </v-flex>
          </v-layout>
          <v-divider
            dark
            v-else-if="item.divider"
            class="my-3"
            :key="i"
          ></v-divider>
          <v-list-tile :key="i" :to="item.to"
              v-else        >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="blue--text">
                {{ item.text }}  ({{ item.handler }})
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="amber" app absolute clipped-left>
      <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">IGIS&nbsp;<span class="text">Stammdaten</span></span>
      <v-text-field solo-inverted flat label="Search" prepend-icon="search" v-model="search" @input="fnSearch"></v-text-field>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>


<script>
import MenuView from './MenuView'


export default {
//   name: 'menu',
  components: {
      MenuView
  },
  data: () => ({
    drawer: null,
    search: "",
    searchOutput: "search output",
    handlerOutput: "handlerOutput",
    items: [
      { icon: "account_balance", text: "Members", to: '/members' },
      { icon: "record_voice_over", text: "About", handler: "this.handle2Click", to: '/about' },
      { divider: true },
      { heading: "Labels" },
      { icon: "add", text: "Create new label", handler: "this.handleAdd" },
      { divider: true },
      { icon: "archive", text: "Archive", handler: "this.handleArchive" },
      { icon: "delete", text: "Trash", handler: "this.handleDelete" },
      { divider: true },
      { icon: "settings", text: "Settings", handler: "this.handleSettings" },
      { icon: "chat_bubble", text: "Trash", handler: "this.handleTrash" },
      { icon: "help", text: "Help", handler: "handleHelp" },
      {
        icon: "phonelink",
        text: "App downloads",
        handler: "this.handleDownloads"
      },
      {
        icon: "keyboard",
        text: "Keyboard shortcuts",
        handler: "this.handleShortcuts"
      }
    ]
  }),
  props: {
    source: String
  },
  methods: {
    fnSearch: function() {
      console.log(`suche nach ${this.search}`);
      this.searchOutput = `suche nach ${this.search}`;
    },
    getMembers: function(p1, p2) {
      console.log("getMembers()", p1, p2);
      return (`getMembers @ ${new Date()}`);
    },
    handleClick: function(handler, item, p2) {
      console.log("handleClick", item.handler);
      try {
  this.handlerOutput=eval(`${handler}(item, p2)`) ;
      } catch (ex) {
        this.handlerOutput= `.. nicht verarbeitet @ ${new Date().toLocaleTimeString()} - ${ex.message}"`;
        console.log(ex.message);
      }
    },
    handle2Click: function(p1, p2) {
      console.log("h2c", p1, p2);
      return (`handled click @ ${new Date().toLocaleTimeString()}`);
    },
    handleShortcuts: function(p1, p2) {
      console.log("..shortcuts..");
      return "load shortcuts..."
    }
  }
}
</script>

<style>
#keep main .container {
    height: 660px;
  }

  .navigation-drawer__border {
    display: none;
  }

  .text {
    font-weight: 400;
  }
</style>