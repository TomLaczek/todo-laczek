<template>
    <v-dialog max-width="600px" v-model="addProject">
        <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="yellow mb-3">Add new project</v-btn>   
        </template>
        <v-card ref="card">
            <v-card-title>
                <h3>Add new project</h3>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                        <v-text-field label="Title" v-model="title" :rules="titleRules" prepend-icon="edit"></v-text-field>
                        <v-textarea label="Information" v-model="content" :rules="contentRules" prepend-icon="edit"></v-textarea>
                        <v-menu
                            v-model="datePicker"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            :nudge-right="40"
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                    readonly 
                                    v-on="on" 
                                    label="Due by" 
                                    v-model="date" 
                                    prepend-icon="event"
                                ></v-text-field>
                            </template>
                                <v-date-picker 
                                    v-model="date" 
                                    :min="todayDate"
                                    @input="datePicker = false"
                                ></v-date-picker>
                        </v-menu>
                        <div class="text-center mx-4 mb-4 mt-2">
                            <v-row>
                                <v-btn @click="addProject = false" class="grey lighten-4">Close</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn @click="submit" class="yellow">submit</v-btn>
                            </v-row>
                          </div>
                        <v-progress-linear
                            :active="sendingData"
                            indeterminate
                            color="yellow"
                            bottom
                        ></v-progress-linear>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>
import db from '@/fb';
export default {
    data(){
        return{
            addProject:false,
            sendingData: false,
            title:'',
            content:'',
            todayDate: new Date().toISOString().substr(0,10), 
            date: new Date().toISOString().substr(0,10),
            datePicker: false,
            titleRules: [
                v => !!v || 'Title is required',
                v => (v && v.length <= 25) || 'Title must be less than 15 characters',
            ],
            contentRules: [
                v => !!v || 'Information is required',
                v => (v && v.length > 10) || 'Information must be have more than 10 characters',
            ],

        };
    },
    methods:{
        submit () {
            if(this.$refs.form.validate()){
                this.sendingData = true;
                const project = {
                    title: this.title,
                    content: this.content,
                    date: this.date,
                    person: 'Tomasz',
                    status: 'ongoing'
                }


                db.collection('projects').add(project).then(()=>{
                    this.sendingData = false;
                    this.addProject = false;
                    this.$emit('projectAdded');
                })

                this.$refs.form.reset();
            }
        }
    },
}
</script>