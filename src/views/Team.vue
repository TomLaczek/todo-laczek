<template>
    <div calss="team">
      <h2  class="title grey--text">Team</h2>
      <v-container class="my-5">
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
            <v-card flat class="text-center ma-3">
              <v-responsive class="pt-4">
                <v-avatar size="100">
                  <img :src="person.avatar" class="grey lighten-2">
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="title">{{ person.name }}</div>
                <div class="grey--text">{{ person.role }}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn class="grey--text" text>
                  <v-icon small left>message</v-icon>
                  <span>Message</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
</template>
<script>
export default {
  data(){
    return{
      team:[
        {name: 'Tomasz', role: 'Web developer', avatar: './avatars/avatar-1.png'},
        {name: 'Joanna', role: 'Graphic designer', avatar: './avatars/avatar-4.png'},
        {name: 'Adrianna', role: 'Social media maveric', avatar: './avatars/avatar-3.png'},
        {name: 'Michał', role: 'Engineer', avatar: './avatars/avatar-2.png'}
      ]
    };
  }
}
</script>