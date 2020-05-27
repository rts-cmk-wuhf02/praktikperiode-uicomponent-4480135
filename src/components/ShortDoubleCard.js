/** @jsx jsx */
import RoundedContainer from "./RoundedContainer";
import StylizedTitle from "./StylizedTitle";
import { css, jsx } from "@emotion/core";

const styles = css`
    width: 771px;
    height: 175px;

    .roundedContainer {
        background-color: white;
        height: 100%;
    }

    .imageContainer {
        width: 141px;
        margin-right: 18px;
        flex-shrink: 0;
    }

    .details {
        padding-top: 22px;
        box-sizing: border-box;
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
        padding: 19px 29px;
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
        margin-top: 15px;
        color: #7b8591;
        letter-spacing: -0.5px;
    }

    .itemContainer {
        display: flex;
        width: 50%;

        &:first-of-type {
            margin-right: 13px;
        }

        &:last-of-type {
            margin-left: 13px;
        }
    }
`;

function ShortDoubleCard(props) {
    return (
        <article css={styles} className="shortDoubleCard">
            <RoundedContainer className="mainContainer">
                <article className="itemContainer">
                    <RoundedContainer className="imageContainer">
                        <figure>
                            <img src={props.leftImage} alt="" />
                        </figure>
                    </RoundedContainer>
                    <section className="details">
                        <StylizedTitle color={props.leftColor}>
                            {props.leftTitle}
                        </StylizedTitle>
                        <p>{props.leftText}</p>
                    </section>
                </article>
                <article className="itemContainer">
                    <RoundedContainer className="imageContainer">
                        <figure>
                            <img src={props.rightImage} alt="" />
                        </figure>
                    </RoundedContainer>
                    <section className="details">
                        <StylizedTitle color={props.rightColor}>
                            {props.rightTitle}
                        </StylizedTitle>
                        <p>{props.rightText}</p>
                    </section>
                </article>
            </RoundedContainer>
        </article>
    );
}

export default ShortDoubleCard;
