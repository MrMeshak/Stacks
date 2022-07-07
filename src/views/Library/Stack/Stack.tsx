import React, {useState} from 'react';
import * as S from './Stack.styles'
import Card from '../Card/Card';
import { colors, getColorTheme } from '../../../utils/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faEdit} from '@fortawesome/free-solid-svg-icons'
import { IStack } from '../../../store/library/libraryModels';
import AddCardForm from '../../../components/forms/CardForms/AddCardForm';
import EditStackForm from '../../../components/forms/StackForms/EditStackForm';


export interface IStackProps {
  libraryId: string;
  stack:IStack;
}

export default function Stack (props: IStackProps) {

  const colorTheme = getColorTheme(props.stack.stackDetails.color)

  const [cardFormOpen,setCardFormOpen] = useState(false)
  const [editFormOpen, setEditFormOpen] = useState(false)

  const toggleCardForm = (cardFormOpen:boolean) => {
    if (cardFormOpen) {
      setCardFormOpen(false)
      return
    }
    setCardFormOpen(true)
    return
  }

  const toggleEditForm = (editFormOpen:boolean) => {
    if(editFormOpen){
      setEditFormOpen(false)
      return
    }
    setEditFormOpen(true)
    return
  }

  const handleCardFormBtn = ()=>{
    if(editFormOpen){
      setEditFormOpen(false)
    }
    toggleCardForm(cardFormOpen)
  }

  const handleEditFormBtn = ()=>{
    if(cardFormOpen){
      setCardFormOpen(false)
    }
    toggleEditForm(editFormOpen)
  }

  return (
    <div>
      <S.StackContainer color={colorTheme.lightColor}>
        <S.StackTitleContainer>
          <S.StackTitle>{props.stack.stackDetails.name}</S.StackTitle>
          <div>
            <S.EditStackBtn color={colorTheme.darkColor} onClick={handleEditFormBtn}><FontAwesomeIcon icon={faEdit}/></S.EditStackBtn>
            <S.AddCardBtn color={colorTheme.darkColor} onClick={handleCardFormBtn} ><FontAwesomeIcon icon={faPlus} /></S.AddCardBtn>
          </div>
        </S.StackTitleContainer>
        {props.stack.cards.map((card) => <Card libraryId={props.libraryId} stackId={props.stack._id} card = {card} key={card._id}/>)}
      </S.StackContainer>
      {cardFormOpen? <AddCardForm libraryId={props.libraryId} stackId={props.stack._id} setCardFormOpen={setCardFormOpen}/>:null}
      {editFormOpen? <EditStackForm libraryId={props.libraryId} stackId={props.stack._id} setEditFormOpen = {setEditFormOpen}/>: null}
    </div>
      
  );
}
