import http from '../http-common';

class UploadFileService {
  upload(file, id, onUploadProgress) {
    let formData = new FormData();
    formData.append('file', file);
    formData.append('userid', id);

    console.log(`file and id ${id}
    ${file}`);

    return http.post(
      '/users/user/cv',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      },
      onUploadProgress
    );
  }

  sentCVtoHR(userid, hrid, file) {
    let formData = new FormData();
    formData.append('file', file);
    formData.append('userid', userid);
    formData.append('hrid', hrid);

    console.log(`file and id ${userid} ${file}`);

    return http.post('/users/checkcv', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }

  // http://localhost:8080/users/user/cv
  getAllFiles() {
    return http.get('/users/user/cv');
  }
}
export default new UploadFileService();

// http://localhost:8080/users/user/cv/?userid=2
// http://localhost:8080/admin/questionSet
// http://localhost:8080/admin/questionSet/question?id=1
