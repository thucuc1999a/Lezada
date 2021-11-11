/**
 * ex: {id: 1, name: 'alex'} => ?id=1&name=alex
 * @param {string} data
 * @returns Return string
 */
 export function query(data = null) {
    if (data) {
      if (typeof data === "string" || typeof data === "number") {
        return `/${data}`;
      }
      let arr = [];
      for (let k in data) {
        // mục đích là cho: arr = [{key=value}]
        arr.push(`${k}=${data[k]}`);
      }
      return `?${arr.join("&")}`;
    }
    return "";
  }
  
  /**
   *
   * @param {string} endpoint
   * @param {string} data
   * @returns Return string
   */
  export function merge(endpoint, data) {
    return `${endpoint}${data}`;
  }
  