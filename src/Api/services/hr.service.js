import http from '../http-common';

class HrDataService {
  getAll() {
    return http.get('/hrinfo');
  }

  get(id) {
    return http.get(`/hrinfo/${id}`);
  }

  create(data) {
    return http.post('/tutorials', data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new HrDataService();