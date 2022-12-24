import axios from "axios";
let rootUrl = "http://www.omdbapi.com/?apikey=461da771&t=";
export const getMovie = async (title) => {
  try {
    let {data} = await axios.get(rootUrl + title);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
