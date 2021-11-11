// config HTTP: get - post - put - patch - delete
import axiosClient from "./axiosApi";
import * as URL from "../utils/url";

const api = {
  get(endpoint, queryData = null, params) {
    return axiosClient.get(URL.merge(endpoint, URL.query(queryData), params ));
    
  },
  post(endpoint, data) {
    return axiosClient.post(endpoint, data);
  },
  put(endpoint, id, data) {
    return axiosClient.put(URL.merge(endpoint, URL.query(id)), data);
  },
  delete(endpoint, id) {
    return axiosClient.delete(URL.merge(endpoint, URL.query(id)));
  },
  patch(endpoint, data, id) {
    return axiosClient.patch(URL.merge(endpoint, URL.query(id)), data);
  },
};


export default api;
