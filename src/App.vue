<template>
  <v-app light app>
    <v-toolbar>
      <v-toolbar-title class="headline text-uppercase">
        <span>Test</span>
        <span class="font-weight-light">TODO</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/kostia7alania/php-vue-todo"
        target="_blank"
      >
        <v-icon>code</v-icon>
        <span class="mr-2 ml-1">
          Repository</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <section> <Todobook/> </section>
      <Footer-app/>
      <Snack/>
      <Login v-if="SHOW_LOGIN_DIALOG"/>
    </v-content>
  </v-app>
</template>

<script>  
import { mapState } from 'vuex';
export default {
  name: 'App',
  props:['props'],
  components: {
    Todobook:()=>import('./Todobook'),
    'Footer-app':()=>import('./Footer'),
    Snack:()=>import('./components/Snack'),
    Login:()=>import('./components/Login'),
  },
  data () {
    return {}
  },
  mounted(){
    const p = this.props
    Object.keys(p).forEach(key=>this.$store.commit('SET_INIT_PARAMS', {key, val: p[key]}))
  },
  computed: {
    ...mapState(['SHOW_LOGIN_DIALOG']),
  }
}
</script> 