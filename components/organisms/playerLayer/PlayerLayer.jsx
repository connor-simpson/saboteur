import styled from "styled-components"

const Layer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`

const PlayerLayer = ({ children }) => {
    return  <Layer>
        {children}
    </Layer>
}

export default PlayerLayer