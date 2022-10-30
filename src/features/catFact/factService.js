import axios from "axios";

export const getCatFact = async url => {
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      return response.data.fact;
    } else {
      throw new Error("Invalid Server Response.");
    }
  } catch (error) {
    throw new Error("Error getting cat fact. " + error.message);
  }
};
