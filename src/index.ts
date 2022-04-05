import { addDoc, collection, deleteDoc, doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase/config";

const usuario = {
    nombre: 'Pedro',
    activo: true,
    fechaNacimiento: 0
};

const usuarioRef = doc( collection( db, 'usuarios' ), '3Ge1lzlDw3IpsRFaewyi' );
const usuariosRef = collection( db, 'usuarios' );

// INSERTAR
// MYSQL: INSERT INTO

/* addDoc( collection( db, 'usuarios' ), usuario )
    .then( docRef => {
        console.log( docRef );
    })
    .catch( e => console.log( 'error', e ) ); */

// ACTUALIZAR
// MYSQL: UPDATE USUARIOS SET ACTIVO = FALSE WHERE.....

/* updateDoc( usuarioRef, {
    activo: false
});
 */

// Este UPDATE elimina todos los campos del documento y solo deja los mandados. Resetea el documento.
/* setDoc( usuarioRef, {
    activo: false
});
 */

// DELETE
// DELETE FROM USUARIOS WHERE....

/* deleteDoc( usuariosRef )
    .then( () => console.log( 'borrado' ) )
    .catch( e => console.log( 'error', e ) ); */

// SELECT
// SELECT * FROM ....

onSnapshot( usuariosRef, snap => {

    const usuarios: any[] = [];

    snap.forEach( hijo => {

        usuarios.push({
            id: hijo.id,
            ...hijo.data()
        });
    });

    console.log( usuarios );
});

