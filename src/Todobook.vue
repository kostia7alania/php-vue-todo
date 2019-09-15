<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card> 
      <toolbar/>
      <v-card-title class="headline font-weight-regular blue-grey white--text">
            <v-badge color="">
              <template v-slot:badge>
                <span> {{count}}</span>
              </template>
                 Tasks 
            </v-badge>
             
         <v-btn class="ml-4" @click="getItems" dark small color="transparent">
          <v-icon>refresh</v-icon>
        </v-btn>
        <v-btn @click="newItem" absolute dark right small color="pink">
          <v-icon>add</v-icon>
        </v-btn>
      </v-card-title>
         
          <v-list two-line>
            <template v-for="(item,i) in FILTERED_ITEMS">

              <v-subheader
                v-if="showSubheader(i,item)"
                :key="item.id+2">
                {{ item.name&&item.name[0] | subheaderFilter}}
              </v-subheader>
              <contact
                :item="item"
                :key="item.id"
              />
            </template>

            <v-alert
                v-if="!FILTERED_ITEMS.length"
                :value="true"
                type="warning"
                outline
              >Нет задач
              </v-alert>
          </v-list> 
      </v-card>

      <TaskInfo
        isCreating=1
        v-if="showDialog"
        :item="{}"
        :show="showDialog"
        :isEditing="true"
        @close="closeModal"
        @cancel="closeModal"
        @save="saveClick"
      />
                  
    </v-flex>
     
    
  </v-layout>
</template>

<script>
import toolbar from './components/Toolbar.vue'
import contact from './components/Contact.vue'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex' 
  
  export default {
    name: 'todo-book',
    components: {toolbar, contact, TaskInfo: ()=> import('./components/Task-info.vue')},
    data() {
      return {
        showDialog: false,
        isImportShow:null,
      }
    },
    computed: {
      ...mapState(['ITEMS']),
      ...mapGetters(['FILTERED_ITEMS']),
      count(){
        return this.ITEMS.length
      },
    },
    methods: {
      ...mapActions([
        'CREATE_ITEM',
        'GET_ITEMS'
      ]),
      showSubheader(i,item) {
        if(!i) return true
        const prevName = this.FILTERED_ITEMS[i-1].name && this.FILTERED_ITEMS[i-1].name[0]
        const nextName = item.name&&item.name[0]
        return (""+prevName).toUpperCase() != (""+nextName).toUpperCase()
      },
      getItems(){
        this.GET_ITEMS() 
      }, 
      newItem() {
        this.showDialog=true
      },
      saveClick(item) {
        this.showDialog=false
        this.CREATE_ITEM(item) 
      },
      closeModal() {
        this.showDialog=false
      }, 
      showImport(){
        this.isImportShow = true
      },
      hideImport(){
        this.isImportShow = false
      }
    },
    filters: {
      subheaderFilter(e) {
        return typeof e == 'string' && e.toUpperCase() || ''
      }
    }
  }
</script>
 