import styled from 'styled-components';
import Link from 'next/link';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PaginationLink = styled.div`
  padding: 10px;
  margin: 1%;
  background: ${(props) => (!props.disabled ? 'purple' : 'lightGrey')};
  pointer-events: ${(props) => (!props.disabled ? 'all' : 'none')};
  cursor: ${(props) => (!props.disabled ? 'pointer' : 'not-allowed')};
  background: purple;
  cursor: pointer;
  color: white;
  text-decoration: none;
  border-radius: 5px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

function Pagination({ currentPage, hasMore }) {
  return (
    <PaginationContainer>
      <StyledLink href={`?page=${parseInt(currentPage) - 1}`}>
        <PaginationLink disabled={currentPage <= 1}>Previous</PaginationLink>
      </StyledLink>
      <StyledLink href={`?page=${parseInt(currentPage) + 1}`}>
        <PaginationLink disabled={!hasMore}>Next</PaginationLink>
      </StyledLink>
    </PaginationContainer>
  );
}

export default Pagination;
