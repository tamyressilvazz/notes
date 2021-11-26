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
    }

    remove(note) {
        return db.notes.remove(note.id);
    }

    update(note) {
        if (note.id) {
            return db.notes.update(note.id);
        } else {
            return db.notes.save(note);
        }
    }

    getById(id) {
        return db.notes.where({ id: id }).first();
    }
}