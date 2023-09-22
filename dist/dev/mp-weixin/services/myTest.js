"use strict";
const utils_http = require("../utils/http.js");
const getTodayDatAPI = () => {
  return utils_http.http({
    method: "GET",
    url: "/api/22"
  });
};
exports.getTodayDatAPI = getTodayDatAPI;
