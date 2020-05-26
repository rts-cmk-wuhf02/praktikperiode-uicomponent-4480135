/** @jsx jsx */
import RoundedContainer from "./RoundedContainer";
import StylizedTitle from "./StylizedTitle";
import { css, jsx } from "@emotion/core";

const styles = css`
    width: 771px;
    height: 471px;

    .roundedContainer {
        background-color: white;
        height: 100%;
    }

    h3 {
        font-size: 28px;
        line-height: 37px;
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
        margin: 10px 0;
    }

    p {
        font-size: 16px;
        line-height: 22px;
        font-family: "Montserrat", sans-serif;
        font-weight: normal;
        margin-top: 15px;
        color: #7b8591;
        letter-spacing: -0.5px;
    }
`;

function SidewaysCard(props) {
    return (
        <article css={styles}>
            <RoundedContainer></RoundedContainer>
        </article>
    );
}

export default SidewaysCard;
