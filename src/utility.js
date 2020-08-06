import React from "react";
import axios from "axios";
import Connect from "./config";
const util = {
  /**
   * tried to make something in dynamic manner which is not working need to refer the reasons.
   */
  tagMaker: (Input1, methodsObj) => {
    let out = [];
    for (let val in methodsObj) out.push(val, "=", methodsObj[val]);
    return <Input1 {...out} />;
  },
};

util.parser = (tmp) => {
  /**
   * @input as array
   * parser is used to convert value into string because while reading the excel data from that
   * files are received as object that is not able to rendered by react.
   */
  let out = tmp.map((e) => JSON.parse(JSON.stringify(e)));
  return out;
};

util.requestMaker = (data, method, path, dataType = "application/json") => {
  /**
   * @input passing data, http method, endpoint, media type
   */
  return axios({
    method,
    headers: {
      "Content-Type": dataType,
    },
    data,
    url: Connect.url + path,
  });
};

export default util;
