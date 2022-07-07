import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import * as S from './AddCardForm.styles'
import { Formik, Field, Form, useFormik } from 'formik';
import { colors } from '../../../utils/colors';
import { useAppDispatch } from '../../../store/hooks';
import { addCard } from '../../../store/library/librarySlice';

export interface ICardFormValues{
    title: string;
    description: string;
    color: string;
}



export interface IAddCardFormProps {
  libraryId: string;
  stackId: string;
  setCardFormOpen: Function;
}


export default function CardForm (props: IAddCardFormProps) {

  const dispatch = useAppDispatch() 

  const initialValues:ICardFormValues = {
    title: "",
    description: "",
    color: "red"
  }

  const onSubmit = () => {
    props.setCardFormOpen(false);
    dispatch(addCard({
      libraryId: props.libraryId,
      stackId: props.stackId,
      card: {
        _id: "",
        cardDetails: {
          _id: "",
          completed: false,
          ...formik.values,
        }
      }
    }));
    console.log(formik.values);
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit
  })

  return (
    
    <S.CardForm onSubmit={formik.handleSubmit}>
      <h2>Add Card</h2>
      <S.CardLabel htmlFor='title'>Title</S.CardLabel><br/>
      <S.CardInputField 
        id='title' 
        name='title'
        value={formik.values.title}
        onChange = {formik.handleChange}
      /><br/>
      <S.CardLabel htmlFor='description'>Description</S.CardLabel><br/>
      <S.CardInputFieldDescription 
        id='description' 
        name='description'
        value={formik.values.description}
        onChange = {formik.handleChange}
      /><br/>
      <S.CardLabel htmlFor='color'>Color</S.CardLabel><br/>
      <S.CardInputFieldSelect 
      id='color' 
      name='color'
      value={formik.values.color}
      onChange={formik.handleChange}
      >
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="purple">Purple</option>
        <option value="white">None</option>
      </S.CardInputFieldSelect><br/>
      <S.CardSubmitBtn type='submit'>Save</S.CardSubmitBtn>
    </S.CardForm>


   /* <Formik 
        initialValues={initialValues}
        onSubmit = {handleSubmit}
    >
        <S.CardForm>
          <div>
             <S.CardLabel htmlFor='title'>Title</S.CardLabel><br/>
             <S.CardInputField id="title" name="title"/>
          </div>
           <div>
            <S.CardLabel htmlFor='description'>Description</S.CardLabel><br/>
            <S.CardInputFieldDescription id="description" name="description" as="textarea"/>
           </div>
            <div>
              <S.CardLabel htmlFor='color'>Color</S.CardLabel><br/>
              <S.CardInputField id="color" name="color" as="select">
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="purple">Purple</option>
                <option value="white">None</option>
              </S.CardInputField>
            </div>
            
            <S.CardSubmitBtn type="submit">Save</S.CardSubmitBtn>
        </S.CardForm>
    </Formik>
    */
  );
}
