import { useFormik } from 'formik';
import { deleteLibraryInCollection, updateLibraryDetails } from '../../../store/collection/collectionSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { libraryActions } from '../../../store/library/librarySlice';
import * as S from './EditLibraryDetailsForm.styles';

interface IEditLibraryFormValues {
  libraryName: string;
}

export interface IEditLibraryDetailsFormProps {
  collectionId: string;
  libraryId: string;

  setEditFormOpen: Function;
}

export default function EditLibraryDetailsForm(props: IEditLibraryDetailsFormProps) {
  const dispatch = useAppDispatch();
  const displayedLibraryId = useAppSelector((state) => state.library.library?._id);

  const intitialValues: IEditLibraryFormValues = {
    libraryName: ''
  };
  const onSubmit = () => {
    props.setEditFormOpen(false);
    dispatch(
      updateLibraryDetails({
        collectionId: props.collectionId,
        libraryId: props.libraryId,
        libraryDetails: {
          id: '',
          name: formik.values.libraryName
        }
      })
    );
    if (props.libraryId === displayedLibraryId) {
      dispatch(libraryActions.updateLibraryName(formik.values.libraryName));
    }
  };

  const handleDeleteBtn = () => {
    dispatch(
      deleteLibraryInCollection({
        collectionId: props.collectionId,
        libraryId: props.libraryId
      })
    );
    if (props.libraryId === displayedLibraryId) {
      dispatch(libraryActions.setLibrary(null));
    }
  };

  const formik = useFormik<IEditLibraryFormValues>({
    initialValues: intitialValues,
    onSubmit: onSubmit
  });

  return (
    <S.EditLibrayFormContainer onSubmit={formik.handleSubmit}>
      <S.EditLibraryLabel htmlFor="libraryName">Library Name</S.EditLibraryLabel>
      <br />
      <S.EditLibraryInput id="libraryName" name="libraryName" onChange={formik.handleChange} />
      <br />
      <S.BtnContainer>
        <S.SaveBtn type="submit">Save</S.SaveBtn>
        <S.DeleteBtn type="button" onClick={handleDeleteBtn}>
          Delete Library
        </S.DeleteBtn>
      </S.BtnContainer>
    </S.EditLibrayFormContainer>
  );
}
