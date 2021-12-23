import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { SEARCHMOVIE_REQUEST } from '../../reducers/movie';
import { useRouter } from 'next/router';

const SearchBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [value, setValue, onChangeValue] = useInput('');

  const onSubmitSearch = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: SEARCHMOVIE_REQUEST,
        data: { text: value },
      });

      router.push('/search');
    },
    [value]
  );

  return (
    <Wrapper>
      <Form onSubmit={onSubmitSearch}>
        <SearchIcon src={'search.svg'} />
        <SearchBox placeholder="보고싶은 영화를 검색해 보세요." onChange={onChangeValue} />
      </Form>
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f7;
  width: 40%;
  padding: 5px;
`;

const Form = styled.form`
  width: 100%;
  display: inherit;
`;

const SearchBox = styled.input`
  width: 100%;
  height: 33px;
  border: none;
  background-color: #f5f5f7;
  outline: none;
  font-size: 1.9rem;

  @media screen and (max-width: 765px) {
    ::placeholder {
      color: transparent;
    }
  }
`;

const SearchIcon = styled.img`
  /* margin: 0px 10px; */
`;
