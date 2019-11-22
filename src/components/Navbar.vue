<template>
    <nav>
        <v-app-bar app flat>
             <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
            <v-toolbar-title class="grey--text">
                <span class="text-uppercase font-weight-light">Todo</span>
                <span class="caption">ByLaczek</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn small text color="gray">
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer temporary app v-model="drawer" class="info">
             <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title  class="white--text">John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

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
export default {
    data(){
        return{
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