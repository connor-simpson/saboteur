import styled from "styled-components"
import Timer from "../../atoms/timer"
import User from "../../atoms/user"

const Bar = styled.div`
    color: white;
    display: flex;
    padding: 25px;
    gap: 25px;
    justify-content: space-between;
`

const UserBar = () => {
    return <Bar>
        <Timer />
        <User />
    </Bar>
}

export default UserBar