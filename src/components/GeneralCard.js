/** @jsx jsx */
import RoundedContainer from "./RoundedContainer";
import StylizedTitle from "./StylizedTitle";
import { css, jsx } from "@emotion/core";

const styles = css`
    width: 372px;
    height: 471px;

    .roundedContainer {
        background-color: white;
        height: 100%;
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
        padding: 27px 37px 37px 37px;
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

function GeneralCard(props) {
    return (
        <article css={styles}>
            <RoundedContainer>
                <figure>
                    <img src={props.image} alt="" />
                </figure>
                <section>
                    <StylizedTitle color={props.categoryColor}>
                        {props.category}
                    </StylizedTitle>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </section>
            </RoundedContainer>
        </article>
    );
}

export default GeneralCard;
