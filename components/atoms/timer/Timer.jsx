import styled, {css, keyframes} from "styled-components"
import { fonts } from "../../../design/fonts"
import { useState, useEffect } from "react"


const containerWiggle = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`

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
    gap: 15px;
    ${props => {
        if(props.now <= 10 && props.status === 1){
            return css`
                animation-name: ${containerWiggle};
                animation-duration: 1s;
                animation-iteration-count:infinite;
            `
        }
    }}
`

const hourglassSpin = keyframes`
    100% {
        transform: rotate(180deg);
    }
`

const Hourglass = styled.div`
    ${props => {

        if(props.now <= props.half){
            if(props.now === 0){
                return css`
                    background-image: url(../images/icons/hourglass_bottom.png);
                    animation-name: ${hourglassSpin};
                    animation-duration: 1s;
                `
            }
            return css`
                background-image: url(../images/icons/hourglass.png);
            `
        }else{
            return css`
                background-image: url(../images/icons/hourglass_top.png);
            `
        }

    }}
    
    background-size: 100%;
    width: 25px;
    height: 25px;
`

const Timer = ({ time = 10 }) => {

    const [seconds, setSeconds] = useState(time);
    const [status, setStatus] = useState(1);

    useEffect(() => {
        if(status === 1){
            setTimeout(() => {
                if(seconds > 0){
                    setSeconds(seconds - 1)
                }else{
                    setStatus(2);
                    setSeconds(time);
                }
            }, 1000);
        }
    }, [seconds]);

    return <Container now={seconds} status={status}>
        <Hourglass now={seconds} half={time / 2 }  />
        <span>{seconds}</span>
    </Container>
}

export default Timer