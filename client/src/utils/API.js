import axios from "axios";

export default {
  // Gets all paths
  getPaths: function() {
    return (
      axios.get("/api/paths")
    )
  },
  getSubjects: function(id) {
    return axios.get("/api/paths/" + id);
  }
};
