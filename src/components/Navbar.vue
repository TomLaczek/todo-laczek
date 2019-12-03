<template>
    <nav>
        <v-app-bar app flat>
          <v-snackbar v-model="snackBar" color="yellow" :timeout="4000" top>
            <span class="black--text">Project has been added</span>
            <v-btn text class="black--text" @click="snackBar = false">Close</v-btn>
          </v-snackbar>
             <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
            <v-toolbar-title class="grey--text">
                <span class="text-uppercase font-weight-medium">Todo</span>
                <span class="caption">ByLaczek</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" text class="grey--text">
                  <span>Setting</span>
                  <v-icon right>settings</v-icon>
                </v-btn>
              </template>  
                <v-list>
                  <v-list-item v-for="link in links" link
          router
          :to="link.route" :key="link.title">
                    <v-list-item-title>{{ link.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
            </v-menu>
            <v-btn small color="gray--text" text>
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer temporary app v-model="drawer" class="info">
          <v-layout column align-center class="mt-2">
            <v-flex>
              <v-avatar size="100">
                <img src="/avatars/avatar-1.png">
              </v-avatar>
              <p class="white--text headline mt-1 text-center">Tomasz</p>
            </v-flex>
            <v-flex>
              <Popup @projectAdded="snackBar = true"/>
            </v-flex>
          </v-layout>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
          v-for="link in links"
          :key="link.title"
          link
          router
          :to="link.route"
        >
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
        </v-navigation-drawer>
    </nav>
</template>
<script>
import Popup from './Popup'
export default {
    components: { Popup },
    data(){
        return{
            snackBar:true,
            drawer: null,
            links: [
            { title: 'Dashboard', icon: 'dashboard', route:'/' },
            { title:'Projects', icon:'folder', route:'/projects'},
            { title: 'Team', icon: 'person', route:'/team' },
            ],
        }        
    }
}
</script>