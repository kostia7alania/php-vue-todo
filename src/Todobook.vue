<template>
  <v-layout row >
    <v-flex xs10 offset-xs1 xs12 sm6 offset-sm3>

      <v-card max-width="750"> 
      
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

        <TodoTable/>
         <v-divider :inset="true"  />
        <div class="text-center">
          <v-btn center @click="isShownRows=!isShownRows">{{isShownRows?'Скрыть':'Показать'}} строки</v-btn>
        </div>
        
        <v-list three-line v-if="isShownRows">
          <template v-for="(item,i) in FILTERED_ITEMS">

            <v-subheader
              v-if="showSubheader(i,item)"
              :key="item.id+2">
              {{ item.name&&item.name[0] | subheaderFilter}}
            </v-subheader>

            <TaskRow
              :item="item"
              :key="item.id"
            />
          </template>

          <v-alert
              v-if="!FILTERED_ITEMS.length"
              :value="true"
              type="warning"
              outlined
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
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex' 
  
  export default {
    name: 'todo-book',
    components: {
      toolbar: ()=> import('./components/Toolbar.vue'),
      TaskInfo: ()=> import('./components/Task-info.vue'),
      TodoTable: ()=> import('./components/Todo-table.vue'),
      TaskRow: ()=> import('./components/Task-row.vue')
    },
    data() {
      return {
        showDialog: false,
        isShownRows: false,
      }
    },
    computed: {
      ...mapState(['ITEMS']),
      ...mapGetters(['FILTERED_ITEMS']),
      count(){
        return this.ITEMS.length
      },
    },
    mounted(){
      this.getItems()
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
    },
    filters: {
      subheaderFilter(e) {
        return typeof e == 'string' && e.toUpperCase() || ''
      }
    }
  }
</script>
 