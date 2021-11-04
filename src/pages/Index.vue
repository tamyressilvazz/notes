<template>
  <q-page class="colum justify-center items-center">
    <div v-for="note in notes">
      <q-card class="my-card">
        <q-parallax
          src="https://cdn.quasar.dev/img/parallax1.jpg"
          :height="150"
        />

        <q-card-section>
          <q-avatar size="130px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-h6">{{ note.title}}</div>
          {{ note.content }}
        </q-card-section>
    </q-card>
    </div>
  </q-page>
</template>

<script>
import { NotesDAO } from "../db/NotesDAO";

export default {
  name: 'PageIndex',
  data() {
    return {
      notes: []
    }
  },
  mounted: function() {
    NotesDAO.getInstance()
    .get()
    .then(result => {
      this.notes = result;
    });
  }
}
</script>
