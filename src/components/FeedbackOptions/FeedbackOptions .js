import { ButtonStyle } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <ButtonStyle
      type="button"
      key={option}
      name={option}
      onClick={onLeaveFeedback}
    >
      {option}
    </ButtonStyle>
  ));
};
