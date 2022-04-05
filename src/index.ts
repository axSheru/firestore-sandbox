import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, query, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "./firebase/config";
import { retornaDocumentos } from "./helpers/mostrar-documentos";

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

// onSnapshot vuelve a consultar la información cada que esta cambia.

/* onSnapshot( usuariosRef, snap => {

    retornaDocumentos( snap );
    
}); */

// Es lo mismo que arriba.

// onSnapshot( usuariosRef, retornaDocumentos );

/* getDocs( usuariosRef )
    .then( retornaDocumentos ); */

// QUERYS CON WHERE.
    
// SELECT * FROM usuarios WHERE activo = true
const queryUsuariosActivos = query( usuariosRef, where( 'activo', '==', true ) );

// SELECT * FROM usuarios WHERE salario BETWEEN 1800 AND 2300
const querySalario1800Y2300 = query( usuariosRef, where( 'salario', '>=', 1800 ), where( 'salario', '<=', 2300 ) );

// SELECT * FROM usuarios WHERE salario > 1800 AND activo = true
const querySalario1800Activo = query( usuariosRef, where( 'salario', '>', 1800 ), where( 'activo', '==', true ) );

const querySnapshot = getDocs( querySalario1800Activo );

querySnapshot
    .then( retornaDocumentos )
    .catch( console.log );

