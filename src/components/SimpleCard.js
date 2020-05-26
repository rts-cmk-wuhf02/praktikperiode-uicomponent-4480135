/** @jsx jsx */
import RoundedContainer from "./RoundedContainer";
import { css, jsx } from "@emotion/core";

const styles = css`
    width: 270px;
    height: 272px;
    color: white;

    .mainContainer {
        background-color: white;
        height: 100%;
        padding: 30px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    figure {
        margin: 0;
        align-self: flex-end;
        height: 75px;
        width: 75px;

        img {
            height: 100%;
            width: 100%;
            object-fit: scale-down;
            vertical-align: bottom;
        }
    }

    h4 {
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 5;
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
        margin: 10px 0;
        text-transform: uppercase;
    }

    p {
        font-size: 16px;
        line-height: 20px;
        font-family: "Montserrat", sans-serif;
        font-weight: normal;
        margin-top: 15px;
        margin-bottom: 0;
        letter-spacing: -0.6px;
    }
`;

function SimpleCard(props) {
    return (
        <article css={styles} className="simpleCard">
            <RoundedContainer
                className="mainContainer"
                style={{ backgroundColor: props.color }}
            >
                <figure>
                    <img src={props.image} alt="" />
                </figure>
                <section>
                    <h4>{props.title}</h4>
                    <p>{props.text}</p>
                </section>
            </RoundedContainer>
        </article>
    );
}

export default SimpleCard;
