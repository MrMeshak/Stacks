import { faAngleDown, faAngleUp, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import AddCollectionForm from '../../../components/forms/CollectionForms/AddLIbraryForm';
import { fetchCollection } from '../../../store/collection/collectionSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import LibraryCard from '../LibraryCard/LibraryCard';
import * as S from './Collection.styles';

export interface ICollectionPageProps {
  collectionId: string;
}

export default function CollectionPage(props: ICollectionPageProps) {
  const dispatch = useAppDispatch();

  const [collectionBarOpen, setCollectionBarOpen] = useState(false);
  const [addCollcetionFormOpen, setAddCollectionFormOpen] = useState(false);

  useEffect(() => {
    dispatch(
      fetchCollection({
        collectionId: props.collectionId
      })
    );
  }, [dispatch, props.collectionId]);

  const libraries = useAppSelector((state) => {
    console.log(state.collection.libraries);
    return state.collection.libraries;
  });

  const handleAddCollectionForm = () => {
    setAddCollectionFormOpen(!addCollcetionFormOpen);
  };
  const handleCollectionBarBtn = () => {
    setCollectionBarOpen(!collectionBarOpen);
  };

  return (
    <S.Wrapper>
      {addCollcetionFormOpen ? (
        <S.CollectionFormContainer>
          <AddCollectionForm setAddCollectionFormOpen={setAddCollectionFormOpen} collectionId={props.collectionId} />
        </S.CollectionFormContainer>
      ) : null}
      <S.CollectionNameContainer>
        <S.CollectionName>Collection</S.CollectionName>
        <div>
          <S.ToggleCollectionBtn onClick={handleCollectionBarBtn}>{collectionBarOpen ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}</S.ToggleCollectionBtn>
          <S.ToggleCollectionBtn onClick={handleAddCollectionForm}>
            <FontAwesomeIcon icon={faPlus} />
          </S.ToggleCollectionBtn>
        </div>
      </S.CollectionNameContainer>
      {collectionBarOpen ? (
        <S.CollectionContainer>
          {libraries?.map((librarySummary) => (
            <LibraryCard collectionId={props.collectionId} librarySummary={librarySummary} key={librarySummary._id} />
          ))}
        </S.CollectionContainer>
      ) : null}
    </S.Wrapper>
  );
}
