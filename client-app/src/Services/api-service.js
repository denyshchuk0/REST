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
  DeleteHero = (id) => {
    console.log("CHAR id = ", id);
    const data = axios
      .delete(URL + "character/" + id)

      .then((res) => {
        console.log("RES DELETE DATA +> ", res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return data;
  };
  GetHero = (id) => {
    console.log("CHAR get id = ", id);
    const data = axios
      .get(URL + "character/" + id)

      .then((res) => {
        console.log("RES get DATA +> ", res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return data;
  };

  UpdateHero = (character) => {
    console.log("CHAR up = ", character);
    let result = axios
      .put(URL + "character/", character)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return result;
  };
}
