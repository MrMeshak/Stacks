import * as React from 'react';
import * as S from './AddStackForm.styles'
import { useFormik } from 'formik';
import { useAppDispatch } from '../../../store/hooks';
import { addStack } from '../../../store/library/librarySlice';

export interface IAddStackFormValues {
  name: string;
  color: string;
}

export interface IAddStackFormProps {
  libraryId: string;
  setAddStackFormOpen: Function;
}

export default function AddStackForm (props: IAddStackFormProps) {
  const initialvalues: IAddStackFormValues = {
    name: "",
    color: "red"
  }

  const dispatch  = useAppDispatch()
  
  const onSubmit = () => {
    console.log(formik.values)
    props.setAddStackFormOpen(false)
    dispatch(addStack({
      libraryId: props.libraryId,
      stack: {
        _id: "",
        stackDetails: {
          _id: "",
          ...formik.values,
        },
        cards: []
      }
    }))
  }
  
  const formik = useFormik<IAddStackFormValues>({
    initialValues: initialvalues,
    onSubmit: onSubmit
  })

  return (
    <S.AddStackFormContainer onSubmit={formik.handleSubmit}>
      <div>
        <S.AddStackLabel htmlFor=''>Stack Name</S.AddStackLabel>
        <S.AddStackInputField id="name" name='name' onChange={formik.handleChange}/>
        <S.AddStackInputFieldSelect id="color" name='color' onChange={formik.handleChange}>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
          <option value="white">None</option>
        </S.AddStackInputFieldSelect>
      </div>
      <S.AddStackSubmitBtn type='submit'>add</S.AddStackSubmitBtn>
    </S.AddStackFormContainer>
  );
}
