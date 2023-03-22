import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import AddStackForm from '../../../components/forms/LibraryForms/AddStackForm';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchLibrary } from '../../../store/library/librarySlice';
import Stack from '../Stack/Stack';
import * as S from './Library.styles';

export interface ILibraryProps {}

export default function Library(props: ILibraryProps) {
  const [addStackFormOpen, setAddStackFormOpen] = useState(false);
  const dispatch = useAppDispatch();
  const testLibraryId = '63fca3f401f2ef6bae46c1f2';

  useEffect(() => {
    dispatch(fetchLibrary({ libraryId: testLibraryId }));
  }, [dispatch]);

  const library = useAppSelector((state) => {
    return state.library.library;
  });

  const toggleAddStackForm = () => {
    if (addStackFormOpen) {
      setAddStackFormOpen(false);
      return;
    }
    setAddStackFormOpen(true);
  };

  const handleAddStackBtn = () => {
    toggleAddStackForm();
  };

  if (library === null) {
    return <></>;
  }

  return (
    <>
      <S.LibraryNameContainer>
        <S.LibraryName>{library?.libraryDetails.name}</S.LibraryName>
        <S.AddStackFormContainer>{addStackFormOpen ? <AddStackForm libraryId={library ? library._id : ''} setAddStackFormOpen={setAddStackFormOpen} /> : null}</S.AddStackFormContainer>
        <S.AddStackButton onClick={handleAddStackBtn}>
          <FontAwesomeIcon icon={faPlus} />
        </S.AddStackButton>
      </S.LibraryNameContainer>

      <S.LibraryContainer>
        {library?.stacks.map((stack) => (
          <Stack libraryId={library._id} stack={stack} key={stack._id} />
        ))}
      </S.LibraryContainer>
    </>
  );
}
