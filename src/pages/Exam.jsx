import React, { useState, useEffect } from 'react';
import Header from '../components/shared/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from '@ramonak/react-progress-bar';
import ButtonSecondary from '../components/Buttons/ButtonSecondary';
import googleSVG from '../assets/img/google.svg';
import { useParams, Link } from 'react-router-dom';
import { getSpecificQuestion } from '../stores/actions/questionActions';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

export default function Exam() {
  // to Check data is loading and to store the return data to our data variable
  const dispatch = useDispatch();
  const specificQuestionSet = useSelector(
    (state) => state.questionSets.specificQuestionSet
  );
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0);

  const [data, setData] = useState();
  const [inputValues, setInputValue] = useState({});
  // to get the id from route
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSpecificQuestion(id));
  }, [id]);

  const handleAnswer = (id, value) => {
    let datas = { id: id, value: value };
    console.log(id);
    console.log(value);
    setInputValue({ ...inputValues, ...datas });

    // if (value === specificQuestionSet.question[id - 1].answer)
    //   setScore(score + 1);
  };

  console.log(inputValues);

  return (
    <div>
      <Header />

      <div className='container'>
        <div className='exam__title'>
          <h2>Score {inputValues.id}</h2>

          <h2>
            {specificQuestionSet.hasOwnProperty('questionSet') &&
              specificQuestionSet.questionSet[0].cpname}
          </h2>
          {/** Image will be here */}
          {/* <img src={googleSVG} /> */}

          <p>
            {' '}
            {specificQuestionSet.hasOwnProperty('questionSet') &&
              specificQuestionSet.questionSet[0].set_name}
          </p>

          <span className='text__helper'>Have an Trouble?</span>
          <span>
            Time:{' '}
            {(specificQuestionSet.hasOwnProperty('questionSet') &&
              specificQuestionSet.questionSet[0].time) ||
              0}{' '}
            mins
          </span>
        </div>
        <div className='exam__notice' style={{ marginBottom: '1rem' }}>
          <FontAwesomeIcon icon={faQuestionCircle} />
          <span>Important Notice</span>
          <ol>
            {/* <li>{data.question.question_name}</li> */}
            <li>Please read all the questions carefully</li>
            <li>
              If you have any problems regarding submiting question, please
              let's know
            </li>
          </ol>
        </div>
        <div className='progress__bar'>
          <div className='progress__bar_title'>
            <span>Progress</span>
            <span>Total: 1/3</span>
          </div>
          <ProgressBar completed={60} bgColor='#1ba94c' />
        </div>

        {specificQuestionSet.hasOwnProperty('question') &&
          specificQuestionSet.question.map((question, index) => (
            <>
              <div className='exam__questions' style={{ marginBottom: '1rem' }}>
                <div className='question'>
                  {/* <h2> Question: What is IPV4 ?</h2> */}
                  <h2>{`${index + 1}. ${question.question_name}?`}</h2>
                  <div className='question__option'>
                    <ol>
                      <li> {question.option1}</li>
                      <li> {question.option2}</li>
                      <li>{question.option3}</li>
                      <li>{question.option4}</li>
                      {/* <li>A. Internet Protocol</li>
                      <li>B. Optical Fiber Network</li> */}
                    </ol>
                  </div>
                  <div className='qustion__answer'>
                    Answer:
                    <input
                      type='text'
                      placeholder='Please input your answer'
                      data-id={`${index + 1}`}
                      onChange={(event) =>
                        handleAnswer(index + 1, event.target.value)
                      }
                    />
                    <h2>Explain: {data}</h2>
                  </div>
                </div>

                <div className='buttons'>
                  <ButtonSecondary text='Previous' />
                  <ButtonSecondary text='Next' />
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
}
