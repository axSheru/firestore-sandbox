import { addDoc, collection } from "firebase/firestore";
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