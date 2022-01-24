import styled, { keyframes } from "styled-components"
import { usePlayer } from "../../../contexts/playerContext"
import { fonts } from "../../../design/fonts"
import Image from "next/image"


const Container = styled.div`
    ${fonts.small}
    background: rgba(0,0,0,0.3);
    border-radius: 5px;
    padding: 10px 20px;
    display: flex;
    align-items:center;
    z-index: 100;
    border: 3px solid rgba(0,0,0,0.1);
    box-shadow: 5px 5px 0px rgba(0,0,0,0.1);
`

const Divider = styled.div`
    padding-right: 15px;
    margin-right: 15px;
    border-right: thin solid rgba(0,0,0,0.6);
`

const Options = styled.ul`
    padding: 0px;
    list-style-type: none;
    margin: 0;
    display: inline-flex;
    gap: 15px;
    >li {
        border-right: thin solid rgba(0,0,0,0.6);
        padding-right: 15px;
        >img {
            width: 30px;
        }
        ::last-child(){
            background: white;
        }
    }
`

const Option = styled.div`
    border-right: thin solid rgba(0,0,0,0.6);
    padding-right: 15px;
    animation: transform 1s;
    >img {
        width: 30px;
        &:hover {
            transform: scale(1.3);
        }
    }
    &:last-child{
        border-right: none;
        padding-right: 0px;
    }

`


const User = () => {

    const {playerName} = usePlayer()

    return <Container>
        <Divider>{playerName}</Divider>
        <Options>
            <Option><Image src={`/../../../public/images/icons/character.png`} width={30} height={30} /></Option>
            <Option><Image src={`/../../../public/images/icons/arrow_right_curve.png`} width={30} height={30} /></Option>
        </Options>
    </Container>
}

export default User