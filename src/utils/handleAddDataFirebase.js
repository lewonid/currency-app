import { doc, setDoc } from "@firebase/firestore"
import { firestore } from "../utils/firebase"

const handleAddDataFirebase = async (currency, publishDate, value) => {
    // const ref = collection(firestore, "test_data")
    const ref = doc(firestore, "currencies_data", publishDate + "_" + currency);
    // console.log(testdata)
    let data = {
        currency: currency,
        publishDate: publishDate,
        value: value
    }

    try {
        await setDoc(ref, data)
    } catch (err) {
        console.log(err)
    }
}

export default handleAddDataFirebase