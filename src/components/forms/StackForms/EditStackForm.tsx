import * as React from 'react';
import {useFormik} from 'formik'
import * as S from './EditStackForm.styles'
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { deleteStack, updateStackDetails } from '../../../store/library/librarySlice';

export interface IStackFormValues{
    name: string;
    color: string;
}

export interface IStackFormProps {
  libraryId: string;
  stackId: string;
  setEditFormOpen: Function;
}

export default function EditStackForm (props: IStackFormProps) {

  const dispatch = useAppDispatch();

  const initialValues:IStackFormValues = {
    name: "",
    color: "red"
  }

  const handleDeletBtn = () => {
    dispatch(deleteStack({
      libraryId: props.libraryId,
      stackId: props.stackId
    }))
  }

  const onSubmit = ()=>{
    props.setEditFormOpen(false)
    dispatch(updateStackDetails({
      libraryId: props.libraryId,
      stackId: props.stackId,
      stackDetails:{
        _id: "",
        ...formik.values
      }
    }))
  }

  const formik = useFormik<IStackFormValues>({
    initialValues: initialValues,
    onSubmit: onSubmit,
  })

  return (
    <S.StackForm onSubmit={formik.handleSubmit}>
      <h2>Edit Stack</h2>
      <S.StackLabel htmlFor='name'>Stack Name</S.StackLabel>
      <S.StackInputField 
      id="name" 
      name="name"
      value = {formik.values.name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}/>
      <S.StackLabel htmlFor='color'>Color</S.StackLabel>
      <S.StackInputFieldSelect 
      id="color" 
      name="color"
      value={formik.values.color}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      >
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="purple">Purple</option>        
      </S.StackInputFieldSelect>
      <S.BtnContainer>
        <S.StackSubmitBtn type='submit'>Save</S.StackSubmitBtn>
        <S.StackDeleteBtn type = 'button' onClick={handleDeletBtn}>Delete Stack</S.StackDeleteBtn>
      </S.BtnContainer>
      
    </S.StackForm>
  );
}
