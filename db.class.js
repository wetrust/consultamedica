// This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

// Open (or create) the database
var open = indexedDB.open("WeTrust", 1);

// Create the schema
open.onupgradeneeded = function() {
    var db = open.result;
    var store = db.createObjectStore("tpoExamen", { keyPath: "id",autoIncrement: 'true' });
    var index = store.createIndex("nombre", "nombre", { unique: true });
};

open.onsuccess = function() {
    // Start a new transaction
    var db = open.result;
    var tx = db.transaction("tpoExamen", "readwrite");
    var store = tx.objectStore("tpoExamen");
    var index = store.index("nombre");

    // Add some data
    store.put({id: 1, name: "John"});
    store.put({id: 2, name: "Bob"});
    
    // Query the data
    var getJohn = store.getAll;

    getJohn.onsuccess = function() {
        console.log(getJohn.result.name);
    };


    // Close the db when the transaction is done
    tx.oncomplete = function() {
        db.close();
    };
}
