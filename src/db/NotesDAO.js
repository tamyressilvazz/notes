import { db } from './db';

export class NotesDAO {

    static getInstance() {
        return new NotesDAO();
    }
    get() {
        return db.notes.reverse().toArray();
    }

    save(note) {
        if (note.id) {
            return db.notes.update(note.id, note);
        } else {
            return db.notes.add(note);
        }
        return db.notes.add(note);
    }
    remove(note) {
        return db.notes.remove(note.id);
    }
    getById(id) {
        return db.note.where({ id: id }).first();
    }
};