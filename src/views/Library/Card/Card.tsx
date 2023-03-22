import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch } from '../../../store/hooks';
import { ICard } from '../../../store/library/libraryModels';
import { deleteCard, updateCardCompleted } from '../../../store/library/librarySlice';
import { colors, getColorTheme } from '../../../utils/colors';
import * as S from './Card.styles';

export interface ICardProps {
  libraryId: string;
  stackId: string;
  card: ICard;
}

export default function Card(props: ICardProps) {
  const dispatch = useAppDispatch();

  const colorTheme = getColorTheme(props.card.cardDetails.color);
  console.log(colorTheme);

  const handleCardCompleteBtn = () => {
    if (props.card.cardDetails.completed === true) {
      dispatch(
        updateCardCompleted({
          libraryId: props.libraryId,
          stackId: props.stackId,
          cardId: props.card._id,
          completed: false
        })
      );
      return;
    }
    dispatch(
      updateCardCompleted({
        libraryId: props.libraryId,
        stackId: props.stackId,
        cardId: props.card._id,
        completed: true
      })
    );
  };

  const handleDeleteBtn = () => {
    dispatch(
      deleteCard({
        libraryId: props.libraryId,
        stackId: props.stackId,
        cardId: props.card._id
      })
    );
  };

  return (
    <S.CardContainer>
      <S.CardContentContainer>
        <S.CardHighlightContainer>
          <S.CardCompletedBtn color={props.card.cardDetails.completed ? colors.brightGreen : colors.lightGrey} onClick={handleCardCompleteBtn}></S.CardCompletedBtn>
          <S.Highlight color={colorTheme.darkColor} />
        </S.CardHighlightContainer>
        <S.CardTitle>{props.card.cardDetails.title}</S.CardTitle>
        <S.CardDescription>{props.card.cardDetails.description}</S.CardDescription>
      </S.CardContentContainer>
      <S.CardControlsContainer>
        {/*<S.CardButton><FontAwesomeIcon icon={faEdit} /></S.CardButton>*/}
        <S.CardButton onClick={handleDeleteBtn}>
          <FontAwesomeIcon icon={faTrash} />
        </S.CardButton>
      </S.CardControlsContainer>
    </S.CardContainer>
  );
}
