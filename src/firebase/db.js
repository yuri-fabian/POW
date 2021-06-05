import { db as firebase } from "./firebase";

const db = firebase.ref("/estate");

class FirebaseService {
  addCustomer = (customer) => {
    db.push(customer);
  };

  getAll() {
    return db;
  }

  get(key) {
    return db.child(key);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }
}

export default new FirebaseService();
