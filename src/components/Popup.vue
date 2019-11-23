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
                <v-form class="px-3">
                    <v-text-field label="Title" v-model="title" prepend-inner-icon="edit"></v-text-field>
                    <v-textarea label="Information" v-model="content"  prepend-inner-icon="edit"></v-textarea>
                    <v-btn left @click="submit" class="my-3 accent">submit</v-btn>
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
        };
    },
    methods:{
        submit () {
            alert(this.title + '\n'+ this.content);
      },
    }
}
</script>