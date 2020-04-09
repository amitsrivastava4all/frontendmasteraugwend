import firebase from '../utils/firebase';
const dbOperations = {
    collectionName:'users',
    add(userObject){
        var promise = firebase.firestore().collection(this.collectionName).add(userObject);
        return promise;
    },
    delete(id){
        // gl7zQSg1H2EXjTyWiluH
        var pr = firebase.firestore().collection(this.collectionName).doc(id).delete();
        return pr;
    },
    findById(id){
        var ref =firebase.firestore().collection(this.collectionName).doc(id);
        return ref;
    },
    update(id){
        //wyGSDfxltQRAKcgpIQkJ
        
         var ref = this.findById(id) ;
         
           var pr =  ref.set({name:'Tim',salary:88888});
           return pr;
        

    },
    getAllRecords(){
        var pr = new Promise((resolve, reject)=>{
            firebase.firestore().collection(this.collectionName).onSnapshot(querySnapShot=>{
                    resolve(querySnapShot);
            });
        });
        return pr;
        
    },
    delete(){

    },
    search(){

    },
    update(){

    }
}
export default dbOperations;