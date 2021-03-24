import axios from "axios";

const URL = "/";

export default class ApiStoreService {
  getAllCharacters = () => {
    const data = axios(URL + "character/getall")
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err;
      });

    return data;
  };
  AddHero = (character) => {
    console.log("CHAR = ", character);
    let result = axios
      .post(URL + "character/", character)

      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return result;
  };
}
