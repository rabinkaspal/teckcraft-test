import axios from "axios";

const catFactsUrl = "https://catfact.ninja/fact?max_length=130";

export const getCatFact = async () => {
  try {
    const response = await axios.get(catFactsUrl);
    if (response.status === 200) {
      return response.data.fact;
    } else {
      throw new Error("Invalid Server Response.");
    }
  } catch (error) {
    throw new Error("Error getting cat fact. " + error.message);
  }
};
