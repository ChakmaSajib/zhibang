import http from '../http-common';

class HrDataService {
  getAll() {
    return http.get('/users/hrinfo');
  }

  getHr(id) {
    return http.get(`/hrinfo/${id}`);
  }

  create({ hrname, cpname, email, phone, cpaddr, password, major }) {
    return http.post('/hrs/register', {
      hrname,
      cpname,
      email,
      phone,
      cpaddr,
      password,
      major
    });
  }

  // Api endpoint

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

// to create the CV Request

// using form-> form data -> localhost:8080/hrs/checkcv hrid
// localhost:8080/users/checkcv // using form -> userid, hrid, file

// localhost:8080/users/checkcv  get   -- -user will get his requested cv update

//

export default new HrDataService();
