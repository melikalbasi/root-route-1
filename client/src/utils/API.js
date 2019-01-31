import axios from "axios";

export default {
  // Gets all paths
  getPaths: function() {
    return axios.get("/api/paths");
  }
};
