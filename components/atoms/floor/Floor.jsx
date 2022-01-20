import styled from "styled-components"

const Floor = styled.div`
    width: 500px;
    height: 500px;
    transform: rotate(30deg) translateX(-50%);
    left: 50%;
    background: grey;
    position: absolute;
    z-index:100;
    border-radius: 50px;
    bottom: -200px;
`


export default Floor