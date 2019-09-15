<template>
        <v-toolbar color="cyan" dark>
          <!--<v-toolbar-side-icon ></v-toolbar-side-icon>-->
          <v-toolbar-title>Todo</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn @click="showLogin" icon>
            <v-icon>account_circle</v-icon>
          </v-btn>

        </v-toolbar>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex';

  export default { 
    data () {
      return { }
    },
    computed: { 
    
    },
    methods: {  
      ...mapMutations([
        'SET_SHOW_LOGIN_DIALOG'
      ]),
      showLogin(){
        this.SET_SHOW_LOGIN_DIALOG(true)
      }
    }
  }
</script>