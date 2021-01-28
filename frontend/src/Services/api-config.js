import axios from "axios";

export async function updateContactList() {
  const data = await axios
    .get(`http://127.0.0.1:8000/api/contacts`)
    .then((res) => {
      const persons = res.data;
    });
  return data;
}
