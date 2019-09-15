<template>
        <v-toolbar color="cyan" dark>
          <!--<v-toolbar-side-icon ></v-toolbar-side-icon>-->
          <v-toolbar-title>Todo</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn v-if="!IS_LOGGED_IN" @click="showLogin" icon
          title="Войти в учетную запись"> <v-icon>account_circle</v-icon></v-btn>
          <v-btn v-else @click="LOGOUT" icon
          title="Выйти из учетной записи"> <v-icon>exit_to_app</v-icon></v-btn>


        </v-toolbar>
</template>
<script>
import { mapMutations, mapGetters, mapActions, mapState } from 'vuex';

  export default { 
    data () {
      return { }
    },
    computed: { 
    ...mapState(['IS_LOGGED_IN']),
    },
    methods: {  
      ...mapMutations([
        'SET_SHOW_LOGIN_DIALOG'
      ]),
      ...mapActions(['LOGOUT']),
      showLogin() { this.SET_SHOW_LOGIN_DIALOG(true) }
    }
  }
</script>