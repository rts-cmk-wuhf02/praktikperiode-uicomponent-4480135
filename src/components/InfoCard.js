/** @jsx jsx */
import RoundedContainer from "./RoundedContainer";
import StylizedTitle from "./StylizedTitle";
import { css, jsx } from "@emotion/core";

const styles = css`
    width: 372px;
    height: 471px;

    .mainContainer {
        background-color: white;
        height: 100%;
        padding: 45px;
        box-sizing: border-box;
        position: relative;
        background-position: center;
        background-size: cover;
    }

    figure,
    section {
        width: 100%;
        height: 50%;
        margin: 0;
    }

    figure img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    section {
        box-sizing: border-box;
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
        line-height: 25px;
        font-family: "Montserrat", sans-serif;
        font-weight: normal;
        margin-top: 45px;
        letter-spacing: -0.7px;
    }

    .logo {
        display: flex;
        align-items: center;
    }

    .logo::before {
        content: "";
        width: 44px;
        height: 44px;
        background-color: black;
        border-radius: 50px;
        background-image: url("${process.env.PUBLIC_URL}/nyt.png");
        background-size: 16px;
        background-repeat: no-repeat;
        background-position: center;
        display: inline-block;
        margin-right: 15px;
    }

    .readMore {
        text-transform: uppercase;
        background-color: transparent;
        padding: 15px 30px;
        border: 1px solid rgba(0, 0, 0, 0.10);
        border-radius: 50px;
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        font-weight: bold;
        line-height: 19px;
        position: absolute;
        bottom: 50px;
        left: 45px;
    }
`;

function InfoCard(props) {
    return (
        <article css={styles} className="infoCard">
            <RoundedContainer
                className="mainContainer"
                style={{ backgroundImage: `url("${props.image}")` }}
            >
                <StylizedTitle className="logo">
                    The New York Times
                </StylizedTitle>
                <p style={{ color: `${props.image ? "#303336" : "#7b8591"}` }}>
                    {props.text}
                </p>
                <button
                    className="readMore"
                    style={{ color: `${props.image ? "#303336" : "#358ED7"}` }}
                >
                    Read More
                </button>
            </RoundedContainer>
        </article>
    );
}

export default InfoCard;
