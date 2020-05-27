/** @jsx jsx */
import RoundedContainer from "./RoundedContainer";
import { css, jsx } from "@emotion/core";

const styles = css`
    width: 169px;
    height: 171px;
    color: white;

    .mainContainer {
        background-color: white;
        height: 100%;
        padding: 15px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    figure {
        margin: 0;
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
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 2px;
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
        margin-top: 10px;
        margin-bottom: 0;
        text-transform: uppercase;
    }
`;

function SplashCard(props) {
    return (
        <article css={styles} className="splashCard">
            <RoundedContainer
                className="mainContainer"
                style={{ backgroundColor: props.color }}
            >
                <figure>
                    <img src={props.image} alt="" />
                </figure>
                <section>
                    <h4>{props.title}</h4>
                </section>
            </RoundedContainer>
        </article>
    );
}

export default SplashCard;
