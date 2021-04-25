import http from '../http-common';

class UploadFileService {
  upload(file, id, onUploadProgress) {
    let formData = new FormData();
    formData.append('file', file[0]);
    formData.append('userid', id);

    console.log(`file and id ${id} $
    ${file}`);

    return http.post(
      '/users/user/cv',
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        userid: id,
        file: file
      },
      onUploadProgress
    );
  }
  getAllFiles() {
    return http.get('/users/user/cv');
  }
}
export default new UploadFileService();
