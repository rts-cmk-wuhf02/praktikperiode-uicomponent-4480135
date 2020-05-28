/** @jsx jsx */
import RoundedContainer from "./RoundedContainer";
import StylizedTitle from "./StylizedTitle";
import { css, jsx } from "@emotion/core";

const styles = css`
    width: 372px;
    height: 175px;

    .roundedContainer {
        background-color: white;
        height: 100%;
        position: relative;
    }

    .imageContainer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .details {
        padding: 26px 28px;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        color: white;
    }

    figure {
        width: 100%;
        height: 100%;
        margin: 0;
    }

    figure img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .mainContainer {
        box-sizing: border-box;
        display: flex;
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
        line-height: 20px;
        font-family: "Montserrat", sans-serif;
        font-weight: normal;
        margin-top: 28px;
        letter-spacing: -0.5px;
        height: 62px;
        overflow: hidden;
    }
`;

function ShortCard(props) {
    return (
        <article css={styles} className="shortCard">
            <RoundedContainer className="mainContainer">
                <article className="itemContainer">
                    <figure className="imageContainer">
                        <img src={props.image} alt="" />
                    </figure>
                    <section className="details">
                        <StylizedTitle color={props.color}>
                            {props.title}
                        </StylizedTitle>
                        <p>{props.text}</p>
                    </section>
                </article>
            </RoundedContainer>
        </article>
    );
}

export default ShortCard;
