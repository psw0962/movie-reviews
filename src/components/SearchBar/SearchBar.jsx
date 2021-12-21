import React from 'react';
import styled from 'styled-components';

const SearchBar = () => {
  return (
    <Wrapper>
      <SearchIcon src={'search.svg'} />
      <SearchBox placeholder="보고싶은 영화를 검색해 보세요." />
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
  margin: 0px 10px;
`;
