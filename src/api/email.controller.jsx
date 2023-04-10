import axios from "axios";

export const createEmail = async (email) => {
  return await axios.post("http://localhost:4000/emails", email, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
