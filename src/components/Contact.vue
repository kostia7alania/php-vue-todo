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
      <v-list-tile
        :key="item.name"
        avatar
      >
        <v-list-tile-avatar>
          <img  >
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="item.name"></v-list-tile-title>
          <v-list-tile-sub-title v-html="item.phone"></v-list-tile-sub-title>
          <v-list-tile-sub-title v-html="item.description"></v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile> 

      </v-flex>
      <v-flex>
      <actionBtns :item="item" @edit="editClick" @delete="deleteClick"/>
      </v-flex>
    </v-layout>

    <TaskInfo
      :item="item"
      :show="showDialog"
      :isEditing="isEditing"
      @edit="editClick"
      @delete="deleteClick"
      @close="closeModal"
      @save="saveClick"
      @cancel="cancelClick"
    />

    </v-card>
  </v-hover>
</template>

<script>
  import actionBtns from './ActionBtns';
  import { mapMutations, mapActions } from 'vuex';
 
  export default {
    name: 'contact',
    props: ['item'],
    components: { actionBtns, TaskInfo: () => import('./Task-info')},
    data() {
      return {
        showDialog: false,
        isEditing: false
      }
    },
    computed: { 
    },
    methods: {
      ...mapActions([
        'UPDATE_ITEM','DELETE_ITEM'
      ]),
      ...mapMutations([
        'SET_SNACK_MSG'
      ]),
      editClick(){ 
        this.isEditing = true
        this.showDialog = true
      },
      deleteClick() {
        this.DELETE_ITEM(this.item.id)
      },
      closeModal(){
        this.showDialog = false
        this.isEditing = false
      },
      async saveClick(newItem) {
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
