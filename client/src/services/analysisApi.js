import axios from "axios";

const API =
`${import.meta.env.VITE_API_URL}/resumes`;

export const getAnalysis =
(id) => {

  return axios.get(
    `${API}/analysis/${id}`
  );

};