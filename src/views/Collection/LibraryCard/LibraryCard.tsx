import React, {useState} from 'react';
import { ILibrarySummary } from '../../../store/collection/collectionModels';
import { useAppDispatch } from '../../../store/hooks';
import { fetchLibrary } from '../../../store/library/librarySlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import * as S from './LibraryCard.styles'
import EditLibraryDetailsForm from '../../../components/forms/CollectionForms/EditLibraryDetailsForm';

export interface ILibraryCardProps {
  collectionId: string;
  librarySummary: ILibrarySummary
}

export default function LibraryCard (props: ILibraryCardProps) {
  const dispatch = useAppDispatch()

  const [editFormOpen, setEditFormOpen] = useState(false)

  const handleCardClick = () => {
    dispatch(fetchLibrary({
      libraryId: props.librarySummary._id
    }))
  }

  const handleEditBtn = () => {
    setEditFormOpen(!editFormOpen)
  }

 


  return (
     <S.LibraryCardContainer>
      <S.CardBtn onClick = {handleCardClick}>
        <h3>{props.librarySummary.libraryDetails.name}</h3>
      </S.CardBtn>
      <S.EditBtn onClick={handleEditBtn}><FontAwesomeIcon icon={faEdit} /></S.EditBtn>
      {editFormOpen? <EditLibraryDetailsForm collectionId={props.collectionId} libraryId={props.librarySummary._id} setEditFormOpen={setEditFormOpen} key={props.librarySummary._id}/>: null}
    </S.LibraryCardContainer>
   
   
  );
}
