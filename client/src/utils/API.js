import axios from "axios";

export default {
  // Gets all paths
  getPaths: function() {
    return (
      axios.get(`/api/paths`)
    )
  },
  getSubjects: function(pathid) {
    return axios.get(`/api/paths/${pathid}`);
  },
  getResources: function(pathid, subjectid) {
    return axios.get(`/api/paths/${pathid}/subjects/${subjectid}`);
  }
  // submitReview: function(pathid, subjectid, review) {
  //   return axios.post(`/api/paths/${pathid}/subjects/${subjectid}`);
  // }
};
