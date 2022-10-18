import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../config/firestore';


export const addData = async (data) => {
    try {
        const docRef = await addDoc(collection(db, "projects"), data)
        return docRef
    } catch (e) {
        return e
    }
}
export const getData = async () => {
    try {
        const docRef = await getDocs(collection(db, "projects"))
        return docRef
    } catch (e) {
        return e
    }
}

export const uploadImage = async (data) => {
    try {
        const upload = await fetch('https://api.cloudinary.com/v1_1/dz14l6crq/image/upload', {
            method: 'POST',
            body: data,
        })

        const res = upload.json()
        return res

    } catch (e) {
        return e
    }
}



