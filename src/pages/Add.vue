<template>
  <div class="row q-ma-md">
    <div class="col-12">
      <q-form class="q-gutter-md">
        <q-input outlined label="Title" />
        <q-input filled type="textarea"/>
        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Cancel" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { NotesDAO } from "../db/NotesDAO";

export default {
  name: 'Add',
  data() {
    return {
      note: null
    }
  }
}
</script>
