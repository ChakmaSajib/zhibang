import http from '../http-common';

class QuestionServive {
  addQuestionsSet() {
    // if we want to upload a file or picture with the question set then
    // we have to use multipart-form

    // as a body

    const body = {
      set_name: name,
      cpname,
      catalog,
      difficulty,
      total_score,
      file,
      time
    };
    return http.post('http://localhost:8080/admin/questionSet', body);
  }

  addQuestionsForSet() {
    const data = {
      question_name,
      option1,
      option2,
      option3,
      option4,
      answer,
      file,
      type,
      difficulty,
      direction,
      explain,
      notice,
      score,
      set_id
    };
    return http.post('http://localhost:8080/admin/questionSet/question', body);
  }

  // to get all the SET of Questions

  getAllSetofQuestions() {
    // it will return all the informations
    return http.post('http://localhost:8080/admin/questionSet');
  }

  getSpecificSetofQuestions(id) {
    // We need to sent set id then set information will display
    return http.get(`http://localhost:8080/admin/questionSet/${id}`);
  }

  deleteSet() {
    // We need to sent set id then set information will display
    return http.delete(
      `http://localhost:8080/admin/questionSet/question/${id}`
    );
  }

  deleteQuestionOfSet(id) {
    // We need to sent set id then set information will display
    return http.delete(
      `http://localhost:8080/admin/questionSet/question/${id}`
    );
  }
}

// 3000 - 6000
