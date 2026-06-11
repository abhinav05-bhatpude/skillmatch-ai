import axios from "axios";

const API =
"http://localhost:5000/api/resumes";

export const uploadResume =
(formData) => {

return axios.post(
`${API}/upload`,
formData
);

};