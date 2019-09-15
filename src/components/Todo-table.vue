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
      :items="desserts"
      :items-per-page="5"
      :search="search"
      :loading="IS_LOADING"
      loading-text="Loading... Please wait"
      :multi-sort="true"
    >

    <template v-slot:item.is_completed="{ item }"> 
      <v-checkbox :disabled="!IS_ADMIN || IS_LOADING"
                @change="changeHandler($event,item)"
                :value="item.is_completed"
                v-model="item.is_completed"
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
        desserts:[{"id":"17","name":"UPDATE_ITEM","description":"UPDATE_ITEM","created_at":"2019-09-15 12:08:53","updated_at":null,"email":"UPDATE_ITEM","is_completed":null},{"id":"30","name":"w","description":"wwq","created_at":"2019-09-15 19:09:51","updated_at":null,"email":"wq","is_completed":"1"},{"id":"34","name":"Andrey","description":"Hey, you need to do this shit.","created_at":"2019-09-15 19:49:32","updated_at":null,"email":"andy@yahoo.com","is_completed":"1"},{"id":"35","name":"\u0443\u0444\u044b\u0444","description":"\u0444\u044b\u0432","created_at":"2019-09-15 20:00:08","updated_at":null,"email":"\u044b\u0444\u044b\u0444\u0432","is_completed":"1"},{"id":"36","name":"Name","description":"ZsZ","created_at":"2019-09-15 20:01:13","updated_at":null,"email":"validacii nety chtoli  ```\/\/\/,,,,\/\/\/\\\\\\\\","is_completed":"1"},{"id":"37","name":"Robert Burns","description":"This shit&#39;s driving me crazy! I gotta finish this somehow!","created_at":"2019-09-15 20:01:39","updated_at":null,"email":"robert","is_completed":"1"},{"id":"38","name":"PennyWise","description":"Gotta do the laundry and then go to the movies!","created_at":"2019-09-15 20:02:35","updated_at":null,"email":"as","is_completed":"1"}]
      }
    },
    computed: {
      ...mapState(['IS_LOADING','IS_ADMIN']),
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
      async changeHandler(val, item) {
        item.is_completed = val;
        console.log('val', val)
        const res = await this.UPDATE_ITEM(item)
        if(res===false) item.is_completed = !item.is_completed
      },
      editItem (item) {
        this.item = item
        this.isEditing = true
        this.isShownTaskInfo = true
      },
      async deleteItem(item) {
        const res = await this.DELETE_ITEM(item.id)
        this.isEditing = false
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