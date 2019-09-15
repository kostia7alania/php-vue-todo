<template> 
    <v-dialog
      v-model="isShowing"
      width="500"
    > 
      <v-layout wrap>
        <v-flex xs12 >
          <v-card>
            <v-img
              :src="randomImage"
              height="100px"
            >
            </v-img>

            <v-card-title primary-title>
              <div>
                <div class="headline">{{headline}}</div>
                <span class="grey--text subtitle-2" v-if="itemCreatedDate">Created: {{itemCreatedDate}}</span>
               <span class="grey--text subtitle-2" v-if="itemUpdatedDate"><br>Updated: {{itemUpdatedDate}}</span>
              </div>
            </v-card-title>
 
            <v-card-text class="pt-0">
              <v-text-field
                :disabled="!isEditing"
                @keyup.enter="saveClick"
                v-model.trim="itemBuffer.name"
                label="Name"
                prepend-icon="person"
                :rules="nameRules"
                required
                :validate="false"
             />
              <v-text-field
                :disabled="!isEditing"
                @keyup.enter="saveClick"
                v-model.trim="itemBuffer.email"
                label="email"
                prepend-icon="email"
                :rules="emailRules"
                required
                :validate="false"
             />
             <v-text-field
                :disabled="!isEditing"
                @keyup.enter="saveClick"
                v-model.trim="itemBuffer.description"
                label="Description"
                prepend-icon="code"
                :rules="descriptionRules"
                required
                :validate="false"
             />
              <v-checkbox :disabled=" !isEditing || !IS_ADMIN "
                v-model="itemBuffer.is_completed"
                :label="`${itemBuffer.is_completed && itemBuffer.is_completed.toString() && 'Завершено' || 'Не завершено'}`"
              ></v-checkbox>
            </v-card-text>
  
            <v-divider></v-divider>
    
            <v-card-actions>

              <v-btn v-if="!isEditing" text @click="$emit('edit', itemBuffer)" :disabled="!IS_ADMIN">Edit</v-btn>
              <v-btn v-if="!isEditing" text @click="$emit('delete', itemBuffer)" :disabled="!IS_ADMIN" color="purple">Delete</v-btn>
            
              <v-btn v-if="isEditing" text @click="saveClick" :disabled="!IS_ADMIN && !isSaveBtnActive">Save</v-btn>
              <v-btn v-if="isEditing" text @click="cancelClick">Cancel</v-btn>
              
              <v-spacer></v-spacer>

              <v-btn color="primary" text @click="$emit('close')"> Close
              </v-btn>

              
            </v-card-actions>
            
          </v-card>
        </v-flex>
      </v-layout>
  
    </v-dialog>
</template>

<script>
import { mapState } from 'vuex';
  export default {
    props: ['show', 'item', 'isEditing', 'isCreating'],
    data () {
      return {
        itemBuffer: {},
        nameRules: [
          v => !!v || 'Name is required',
        ],
        emailRules: [
          v => !!v || 'Email is required',
          v => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(v) || "Must be a valid e-mail.";
          }
        ],
        descriptionRules: [v=>!!v||'Description is required']
        
      }
    },
    mounted() {
      this.refreshItems();
    },
    computed: {
      ...mapState(['IS_ADMIN']),
      headline() {
        return this.isCreating && 'New task' ||
              this.isEditing && 'Edit task '
              || 'Task info'
      },
      randomImage() {
        return 'https://picsum.photos/500?' + this.item.email
      },
      isShowing: {
        get() {
          return this.show
        },
        set(e) {
          !e && this.$emit('close')
        }
      },
      itemCreatedDate() {
        return this.dateParse(this.item.created_at) 
      },
      itemUpdatedDate() {
        return this.dateParse(this.item.updated_at) 
      }, 
      isSaveBtnActive() {
        const form =this.itemBuffer
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return form.name && pattern.test(form.email) && form.description
      }
    },
    methods: {
      dateParse(date) {
        const dt = date && new Date(date)
        return dt && !isNaN(+dt) && dt.toLocaleString()
      },
      saveClick(){
        if(this.isSaveBtnActive) this.$emit('save', this.itemBuffer)
      },
      cancelClick(){
        this.refreshItems()
        this.$emit('cancel')
      },
      refreshItems() {
        this.itemBuffer = {...this.item }
      }
    }
  }
</script>