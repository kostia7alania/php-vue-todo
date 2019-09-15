<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="isShow"
      max-width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        > 
            <v-layout justify-space-between align-center>
              <v-flex xs8>
                <v-icon>contacts</v-icon> 
                Login 
              </v-flex>
            </v-layout> 
        </v-card-title>

        <v-card-text>
          <v-divider></v-divider>
            <v-text-field
            :disabled="loading"
            @keyup.enter="login"
            v-model.trim="form.username"
            label="Username"
            prepend-icon="people"
            :rules="[v=>!!v || 'Username is required']"
            required
            :validate="false"
          />
          <v-text-field
            :disabled="loading"
            @keyup.enter="login"
            v-model.trim="form.password"
            label="Password"
            prepend-icon="vpn_key"
            :rules="[v=>!!v || 'Password is required']"
            required
            :validate="false"
          />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn color="red" flat @click="login"
              :loading="loading"
              :disabled="isLoginDisabled"
          >
            <v-icon>check</v-icon>
            Login
          </v-btn>
          <v-spacer></v-spacer>


          <v-btn
            color="primary"
            flat
            @click="isShow=false"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
export default { 
  data() {
    return {
      loading: false,
      form: {}
    }
  },
  computed: { 
    ...mapState(['SHOW_LOGIN_DIALOG']),
    show(){return this.SHOW_LOGIN_DIALOG},
    isShow: {
      get(){return this.show},
      set(e){this.hide(e)}
    },
    isLoginDisabled() {
      return this.loading || !this.form.username || !this.form.password
    }
  },
  methods: {
    hide(state=false){
      this.SET_SHOW_LOGIN_DIALOG(state)
    },
    ...mapActions([
      'DO_LOGIN'
    ]),
    ...mapMutations([ 
      'SET_SHOW_LOGIN_DIALOG'
    ]),
    async login() { 
      this.loading = true
      const res =  await this.DO_LOGIN(this.form) 
      if(res===true) setTimeout(this.hide, 1000)  
      this.loading = false
    }, 
  }
}
</script> 