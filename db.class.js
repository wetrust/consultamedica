// This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

// Open (or create) the database
var open = indexedDB.open("WeTrust", 1);

// Create the schema
open.onupgradeneeded = function() {
    var db = open.result;
    var store = db.createObjectStore("tpoExamen", {keyPath: "id"});
    var index = store.createIndex("nombre", ["name.last", "name.first"]);
};

open.onsuccess = function() {
    // Start a new transaction
    var db = open.result;
    var tx = db.transaction("MyObjectStore", "readwrite");
    var store = tx.objectStore("MyObjectStore", { keyPath: "id",autoIncrement: 'true' });
    var index = store.index("nombre", "nombre", { unique: true });

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
