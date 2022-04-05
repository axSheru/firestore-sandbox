import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase/config";

const usuario = {
    nombre: 'Pedro',
    activo: true,
    fechaNacimiento: 0
};

// INSERTAR
// MYSQL: INSERT INTO

/* addDoc( collection( db, 'usuarios' ), usuario )
    .then( docRef => {
        console.log( docRef );
    })
    .catch( e => console.log( 'error', e ) ); */

// ACTUALIZAR
// MYSQL: UPDATE USUARIOS SET ACTIVO = FALSE WHERE.....

/* const usuariosRef = doc( collection( db, 'usuarios' ), '3Ge1lzlDw3IpsRFaewyi' );

updateDoc( usuariosRef, {
    activo: false
});
 */

// Este UPDATE elimina todos los campos del documento y solo deja los mandados. Resetea el documento.
/* const usuariosRef = doc( collection( db, 'usuarios' ), '3Ge1lzlDw3IpsRFaewyi' );

setDoc( usuariosRef, {
    activo: false
});
 */
