<template>
  <div class="dashboard">
    <h2  class="title grey--text">Dashboard</h2>
    <v-container class="my-5">
      <v-layout row class="ml-1 pa-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="#9E9E9E" @click="sortBy('title')" v-on="on">
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase grey--text">By project name</span>
            </v-btn>
          </template>
          <span>Sort by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" small text color="#9E9E9E" @click="sortBy('person')">
              <v-icon left small>person</v-icon>
              <span class="caption text-lowercase grey--text">By person</span>
            </v-btn>
          </template>
          <span>Sort by person</span>
        </v-tooltip>

      </v-layout>
      <v-card flat v-for="project in projects" :key="project.title" :class="`pa-2 ma-2 project ${project.status}`">
        <v-layout row wrap class="ml-3 pa-1">
          <v-flex xs12 md6 class="pb-2">
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2 class="pb-2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2 class="pb-2">
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2 class="pb-2">
            <div class="text-right">
              <v-chip small :color="`${project.status}`" :class="`v-chip--active white--text caption my-3 mr-3`">{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import db from '@/fb';

export default {
  data(){
    return{
      projects:[]
    };
  },
  methods: {
    sortBy(prop){
      this.projects.sort((a,b)=>a[prop] < b[prop] ? -1 : 1)
    }
  },
  created(){
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        if(change.type === 'added'){
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      });
    })
  }
}
</script>
<style>
  .project.completed{
    border-left: 3px solid #3cd1c2;
  }
  .project.ongoing{
    border-left: 3px solid #ffaa2c;
  }
  .project.overdue{
    border-left: 3px solid #f83e70;
  }
  .v-chip.completed{
    background: #3cd1c2;
  }
  .v-chip.ongoing{
    background: #ffaa2c;
  }
  .v-chip.overdue{
    background: #f83e70;
  }
</style>