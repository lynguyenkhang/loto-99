import db from '../firebase'

export const removeEmptyRooms = () => {
    db.collection("rooms").where("Members", "==", []).get()
        .then(doc =>{
        const docsList = doc.docs.map(item => item.id)
        docsList.map(id => db.collection("rooms").doc(`${id}`).delete())
        console.log('delete emptyRoom done !')
    })
}


export const generateID = (length) => {
    let result= '';
    // var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


const clearActiveArr = (table) => {
    const arr = [...table]
    for(let row of arr) {
        for(let number of row){
            number.active = false;
        }
    }
    return arr
}
export default clearActiveArr;




