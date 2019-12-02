<template>
    <v-dialog max-width="600px">
        <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="yellow mb-3">Add new project</v-btn>   
        </template>
        <v-card>
            <v-card-title>
                Add new project
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
                            <v-date-picker v-model="date" @input="datePicker = false"></v-date-picker>
                    </v-menu>
                    <v-btn @click="submit" class="my-3 accent text-center">submit</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>

export default {
    data(){
        return{
            title:'',
            content:'',
            date: new Date().toISOString().substr(0,10),
            datePicker: false,
            titleRules: [
                v => !!v || 'Title is required',
                v => (v && v.length <= 15) || 'Title must be less than 15 characters',
            ],
            contentRules: [
                v => !!v || 'Information is required',
                v => (v && v.length > 10) || 'Information must be have more than 10 characters',
            ],

        };
    },
    methods:{
        submit () {
            if(this.$refs.form.validate()) alert(this.title + '\n'+ this.content);
        }
    },
}
</script>