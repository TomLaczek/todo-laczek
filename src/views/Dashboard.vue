<template>
  <div class="dashboard">
    <h2  class="subheading grey--text">Dashboard</h2>
    <v-container class="my-5">
      <v-layout row class="ml-1 pa-3">
          <v-btn small text color="#9E9E9E" @click="sortBy('title')">
            <v-icon left small>folder</v-icon>
            <span class="caption text-lowercase grey--text">By project name</span>
          </v-btn>
          <v-btn small text color="#9E9E9E" @click="sortBy('person')">
            <v-icon left small>person</v-icon>
            <span class="caption text-lowercase grey--text">By person</span>
          </v-btn>
        </v-layout>
      <v-card flat v-for="project in projects" :key="project.title" :class="`pa-3 project ${project.status}`">
        <v-layout row wrap class="pa-3">
          <v-flex xs12 md6 >
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="text-right">
              <v-chip small :color="`${project.status}`" :class="`v-chip--active white--text caption my-1`">{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>

export default {
  data(){
    return{
      projects:[
        {title: 'Design a new website', person: 'Tom', due: '30th Nov 2019', status: 'ongoing', content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, recusandae deserunt dolor iste doloremque nulla nostrum debitis. Rerum quidem quibusdam, dicta exercitationem, sint vitae laudantium assumenda dolorem molestiae iusto explicabo.'},
        {title: 'Code up the homepage', person: 'Tom', due: '30th Nov 2019', status: 'ongoing', content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, recusandae deserunt dolor iste doloremque nulla nostrum debitis. Rerum quidem quibusdam, dicta exercitationem, sint vitae laudantium assumenda dolorem molestiae iusto explicabo.'},
        {title: 'Design video thumbnails', person: 'Soku', due: '21st Oct 2019', status: 'completed', content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, recusandae deserunt dolor iste doloremque nulla nostrum debitis. Rerum quidem quibusdam, dicta exercitationem, sint vitae laudantium assumenda dolorem molestiae iusto explicabo.'},
        {title: 'Create a community forum', person: 'Borat', due: '1st Jan 2018', status: 'overdue', content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, recusandae deserunt dolor iste doloremque nulla nostrum debitis. Rerum quidem quibusdam, dicta exercitationem, sint vitae laudantium assumenda dolorem molestiae iusto explicabo.'}
      ]
    };
  },
  methods: {
    sortBy(prop){
      this.projects.sort((a,b)=>a[prop] < b[prop] ? -1 : 1)
    }
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