class dbModel {
	run(){
		this.check = this.checkNavigator();
		if (this.check == true){
			this.dbReady = false;
			this.makedb();
		}
		else{
			window.alert("Su navegador no tiene la capacidad de almacenar datos, actualice su navegador.");
		}
	};
	makedb(){
		this.openRequest = indexedDB.open('WeTrust', 1);
		
		this.openRequest.onerror = function(event) {
			window.alert("Database error: " + event.target.errorCode);
		};
		
		this.openRequest.onsuccess = function(event) {
			this.db = request.result;
		};
		
		this.openRequest.onupgradeneeded = function(event) { 
			let db = event.target.result;
			
			this.tpoExamenStore = db.createObjectStore("tpoExamen", { keyPath: "id",autoIncrement: 'true' });
			this.tpoExamenStore.createIndex("nombre", "nombre", { unique: true });
			
			this.tpoExamenStore.put({id: 1, name: "eco 3d"});
    			this.tpoExamenStore.put({id: 2, name: "eco 4d"});
		};
		
		this.openRequest.transaction.oncomplete = function(e) {
			this.dbReady = true;
		};
	};
	getTpoExamen(){
		this.resultado = this.tpoExamenStore.getAll();
		
		this.resultado.onsuccess = function() {
			return resultado.result;
		};
	};
	checkNavigator(){
		if (!window.indexedDB) {
			return false;
		}
		else{
			return true;
		}
	};
}
