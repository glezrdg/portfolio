import axios from "axios";

export const createEmail = async (email) => {
  return await axios.post(
    "https://portfolio-backend-4o62.onrender.com/emails",
    email,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
