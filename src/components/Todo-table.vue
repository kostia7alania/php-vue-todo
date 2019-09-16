<template>
  <v-card>
    <v-card-title>
      Todo
      <v-spacer></v-spacer>
    <div class="flex-grow-1"></div>

      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      />


    </v-card-title>
    
    <v-data-table
      dense
      :headers="headers"
      :items="ITEMS"
      :items-per-page="5"
      :search="search"
      :loading="IS_LOADING"
      loading-text="Loading... Please wait"
      :multi-sort="true"
    >

    <template v-slot:item.is_completed="{ item }"> 
      <v-checkbox :disabled="!IS_ADMIN || IS_LOADING"
                :value="!!item.is_completed"
                v-model="!!item.is_completed"
                @click.stop.prevent="changeHandler(item)"
                :label="`${item.is_completed && item.is_completed.toString() && 'Завершено' || 'Не завершено'}`"
              ></v-checkbox>
    </template>

    <template v-slot:item.action="{ item }">
      <v-icon :disabled="!IS_ADMIN || IS_LOADING" small class="mr-2" @click="editItem(item)">edit</v-icon>
      <v-icon :disabled="!IS_ADMIN || IS_LOADING" small @click="deleteItem(item)">delete</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>

    <!--<template v-slot:items="props">
      <td class="text-xs-right">{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.email }}</td>
      <td class="text-xs-right">{{ props.item.description }}</td>
      <td class="text-xs-right">{{ props.item.created_at }}</td>
      <td class="text-xs-right">{{ props.item.updated_at }}</td>
    </template>
    -->
  </v-data-table>

  <TaskInfo
      v-if="isShownTaskInfo"
      :item="item"
      :show="true"
      :isEditing="isEditing"
      @edit="editItem"
      @delete="deleteItem"
      @close="closeModal"
      @save="saveItem"
      @cancel="cancelClick"
    />

  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'

  export default {
    components: { 
      TaskInfo: () => import('./Task-info')
    },
    data () {
      return {
        item: {},
        isEditing: false,
        isShownTaskInfo: false,
        search: '', 
      }
    },
    computed: {
      ...mapState(['IS_LOADING','IS_ADMIN','ITEMS']),
       headers() {
         const headers = [
          { text: 'Имя', value: 'name', align: 'left',  },
          { text: 'Почта', value: 'email' },
          { text: 'Описание', value: 'description', sortable: false, },
          { text: 'Статус', value: 'is_completed' }
        ]
        //if(this.IS_ADMIN) 
        headers.push({ text: 'Actions', value: 'action', sortable: false })
        return headers
      }
    },
    methods: {
      ...mapActions(['UPDATE_ITEM', 'DELETE_ITEM']),
      changeHandler(item) {
        console.log('old',item.is_completed)
        item.is_completed = !item.is_completed;
        console.log('new', item.is_completed)
        this.change(item)
      },
      async change(item){
        console.log('change=>',item)
        const res = await this.UPDATE_ITEM(item) 
        this.$forceUpdate()
        debugger
        //if(res===false) item.is_completed = !item.is_completed

      },
      editItem (item) {
        this.item = item
        this.isEditing = true
        this.isShownTaskInfo = true
      },
      async deleteItem(item) {
        const res = await this.DELETE_ITEM(item.id)
        this.isEditing = false
        this.isShownTaskInfo = false
      },
      async saveItem(newItem) {
        const res = await this.UPDATE_ITEM(newItem)
        this.isEditing = false
      },
      closeModal(){
        this.isShownTaskInfo = false
        this.isEditing = false
      },
      cancelClick() {
        this.isEditing = false
      }
    }
  }
</script>