<template>
    <div class="projects">
        <h2 class="title grey--text">Projects</h2>    
        <v-container class="my-5">
            <v-expansion-panels>
                <v-expansion-panel v-for="project in myProjects" :key="project.title">
                    <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
                    <v-expansion-panel-content class="grey--text">
                                <div class="font-weight-bold">Due by: {{ project.due }}</div>
                                <div>{{ project.content }}</div>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
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
        }
    },
    computed: {
        myProjects(){
            return this.projects.filter(project => {
                return project.person == 'Tom'
            });
        }
    }
}
</script>