<template>
  <q-page class="colum justify-center items-center">
    <div v-for="note in notes">
      <q-card class="my-card">
        <q-parallax
          src="https://cdn.quasar.dev/img/parallax1.jpg"
          :height="150"
        />

        <q-separator dark />

        <q-card-section>
          <q-avatar size="130px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-h6">{{ note.title}}</div>
          {{ note.content }}
        </q-card-section>

        <q-card-actions>
          <q-btn flat>{{ $t('index.edit') }}</q-btn>
          <q-btn flat>{{ $t('index.delete') }}</q-btn>
        </q-card-actions>
    </q-card>
    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn to="/add" fab icon="add" color="primary" />
    </q-page-sticky>
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
