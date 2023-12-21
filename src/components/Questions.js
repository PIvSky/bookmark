import '../styles/Questions.scss';
import QuestionCard from './QuestionCard';
import Button from './Button';

const Questions = () => {

    const Questions = [
        {
            question: 'What is Bookmark?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            question: 'How can I request a new browser?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            question: 'Is there a mobile app?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            question: 'What about other Chromium browser?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
    ];

    // button props
    const buttonProps = {
      text : 'More Info',
      style : false,
      className :'button-navbar'
  }

    return (
      <>
        <div className="questions-header">
          <h2 className="questions-header__title">
            Frequently Asked Questions
          </h2>
          <p className="questions-header__desc">
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>
        {Questions.map((data, index) => (
          <QuestionCard
            key={index}
            question={data.question}
            answer={data.answer}
          />
        ))}
        <div className="button-container">
            <Button 
              text={buttonProps.text} 
              buttonStyle={buttonProps.style}
              additionalClass={buttonProps.className} />
        </div>
      </>
    );
}

export default Questions;