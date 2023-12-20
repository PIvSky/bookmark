import {useRef} from 'react';
import '../styles/QuestionCard.scss';
import { ReactComponent as Arrow } from '../assets/images/icon-arrow.svg';

const QuestionCard = ({question, answer}) => {

    const arrowRef = useRef(null);
    const answerRef = useRef(null);

    const answerHandler = () => {
        arrowRef.current.classList.toggle('active');
        answerRef.current.classList.toggle('open');
    };

    return (
        <>
            <div className='question-wrapper'>
                <div className='question-card' onClick={answerHandler}>
                    <h3 className='question-card__title'>{question}</h3>
                    <Arrow className='question-card__arrow' ref={arrowRef}/>
                </div>
                <div className='answer-card' ref={answerRef}>
                    <p className='answer-card__content'>{answer}</p>
                </div>
            </div>
        </>
    )
};

export default QuestionCard;