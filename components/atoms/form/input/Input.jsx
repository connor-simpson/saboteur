import styled from "styled-components"
import { fonts } from "../../../../design/fonts"

const Styled = styled.input`
    ${fonts.small}
    padding: 15px;
    border-radius: 10px;
    border: 3px solid rgba(0,0,0,0.3);
    box-shadow: 3px 3px 0px rgba(0,0,0,0.3);
    outline: 0;
    text-align: center;
`

const Input = (props) => {
    return <Styled {...props} />
}

export default Input