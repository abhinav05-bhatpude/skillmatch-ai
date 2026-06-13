import axios from "axios";

const API =
`${import.meta.env.VITE_API_URL}/resumes`;

export const uploadResume =
(formData) => {

return axios.post(
`${API}/upload`,
formData
);

};

export const getSkills =
(id) => {

return axios.get(
`${API}/skills/${id}`
);

};