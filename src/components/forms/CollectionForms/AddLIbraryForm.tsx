import * as React from 'react';
import * as S from './AddLibraryForm.styles'
import {useFormik} from 'formik'
import { useAppDispatch } from '../../../store/hooks';
import { addLibraryToCollection } from '../../../store/collection/collectionSlice';

export interface IAddLibraryFormValues {
    name: string
}

export interface IAddLibraryFormProps {
    collectionId: string;
    setAddCollectionFormOpen: Function;
}

export default function AddCollectionForm (props: IAddLibraryFormProps) {
    const dispatch = useAppDispatch()

    const initialValues = {
        name: ""
    } 

    const onSubmit = () => {
        console.log(formik.values)
        props.setAddCollectionFormOpen(false)
        dispatch(addLibraryToCollection({
            collectionId: props.collectionId,
            library: {
                _id: "",
                libraryDetails: {
                    _id: "",
                    name: formik.values.name
                },
                stacks: []
            }
        }))
    }

    const formik = useFormik<IAddLibraryFormValues>({
        initialValues: initialValues,
        onSubmit: onSubmit
    })

    

  return (
    <S.AddCollectionForm onSubmit={formik.handleSubmit} >
        <S.AddCollectionInputField id="name" name='name' onChange={formik.handleChange}/>
        <S.AddCollectionSubmitBtn type="submit">save</S.AddCollectionSubmitBtn>
    </S.AddCollectionForm>
  );
}
