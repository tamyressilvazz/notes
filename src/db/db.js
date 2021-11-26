import Dexie from "dexie";
import { Note } from "../models/Note";

export const db = new Dexie('NotesDatabase');
// Declare tables, IDs and indexes
db.version(1).stores({
    notes: '++id, title, content'
});
db.open();
db.notes.mapToClass(Note);