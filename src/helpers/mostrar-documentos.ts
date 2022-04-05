import { QuerySnapshot } from "firebase/firestore";

export const retornaDocumentos = ( snapshot: QuerySnapshot ) => {

    const documentos: any[] = [];

    snapshot.forEach( hijo => {

        documentos.push({
            id: hijo.id,
            ...hijo.data()
        });
    });

    console.log( documentos );

    return documentos;

};