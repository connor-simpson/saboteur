import { css } from "styled-components"

const fontCss = css`
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
`

const fonts = {
    default: css`
        font-family: 'Press Start 2P', cursive;
        font-size: 25px;
    `,
    small: css`
        font-family: 'Press Start 2P', cursive;
        font-size: 15px;
    `,
    smaller: css`
        font-family: 'Press Start 2P', cursive;
        font-size: 10px;
    `
}

export {
    fontCss,
    fonts
}