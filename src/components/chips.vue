<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-sheet
        elevation="5"
        class="py-4 px-6"
      >
        <v-chip-group
          multiple
          selected-class="text-primary"
        >
          <v-chip
            v-for="(tag, index) in tags"
            :key="index"
            @click="showData(index)"
          >
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      tags: [
        'Work',
        'Home Improvement',
        'Vacation',
        'Food',
        'Drawers',
        'Shopping',
        'Art',
        'Tech',
        'Creative Writing'
      ],
      keep:[]
    }),
    methods:{
      showData(index){
        if( !this.keep.includes(this.tags[index])){
          this.keep.push(this.tags[index]);
        }else{
          this.keep.splice(this.keep.indexOf(this.tags[index]), 1);
        }
        console.log(this.keep);
      }
    }
  }
</script>