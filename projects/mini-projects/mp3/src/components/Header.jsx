import styled from "styled-components";

const HeaderWrapper = styled.div`
    background-color: #5f43b2;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;
const HeaderH1 = styled.h1`
    height: 64px;
    pointer-events: none;
`;

function Header () {
    return (
        <HeaderWrapper>
            <HeaderH1>Project Manager Board</HeaderH1>
        </HeaderWrapper>
    )
}

export default Header;