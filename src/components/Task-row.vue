<template>
  <v-hover :key="item.phone+'n'">

    <v-card @click="showDialog=true"
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto contact-row" 
    >
    <v-divider :key="item.phone"  :inset="true"  />
  
  <v-layout align-center> 
    <v-flex xs11>
      <v-list-item :key="item.name">
        <v-list-item-avatar>
          <v-img :src="userPicture"/>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title     v-html="item.name"></v-list-item-title>
          <v-list-item-subtitle v-html="item.phone"></v-list-item-subtitle>
          <v-list-item-subtitle v-html="item.description"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item> 

      </v-flex>
      <v-flex>
        <actionBtns :item="item" @edit="editClick" @delete="deleteItem"/>
      </v-flex>
    </v-layout>

    <TaskInfo
      :item="item"
      :show="showDialog"
      :isEditing="isEditing"
      @edit="editClick"
      @delete="deleteItem"
      @close="closeModal"
      @save="saveItem"
      @cancel="cancelClick"
    />

    </v-card>
  </v-hover>
</template>

<script> 
  import { mapMutations, mapActions } from 'vuex';
 
  export default {
    name: 'Task-row',
    props: ['item'],
    components: { 
      actionBtns:()=>import('./ActionBtns'),
      TaskInfo: () => import('./Task-info')
    },
    data() {
      return {
        showDialog: false,
        isEditing: false
      }
    },
    computed: { 
      userPicture(){
        return 'https://i.pravatar.cc/100?' + +new Date()
      },
    },
    methods: {
      ...mapActions([
        'UPDATE_ITEM','DELETE_ITEM'
      ]),
      editClick(){ 
        this.isEditing = true
        this.showDialog = true
      },
      async deleteItem(item) {
        const res = await this.DELETE_ITEM(item.id)
        this.isEditing = false
      },
      closeModal(){
        this.showDialog = false
        this.isEditing = false
      },
      async saveItem(newItem) {
        const res = await this.UPDATE_ITEM(newItem)
        this.isEditing = false
      },
      cancelClick() {
        this.isEditing = false
      }
    }
  }

</script>

<style scoped lang="scss">
  .contact-row { cursor: pointer; }
</style>
