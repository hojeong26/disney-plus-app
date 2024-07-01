import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "5756573e765fc10cfde9cc1cf408fb5f",
    lanquage: "ko-KR",
  },
});

export default instance;
