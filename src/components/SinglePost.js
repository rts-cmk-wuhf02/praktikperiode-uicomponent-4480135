/** @jsx jsx */
import RoundedContainer from "./RoundedContainer";
import StylizedTitle from "./StylizedTitle";
import { css, jsx } from "@emotion/core";

const styles = css`
    display: flex;

    .roundedContainer {
        background-color: white;
        height: 100%;
    }

    .imageContainer {
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
        vertical-align: bottom;
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
        height: 62px;
        overflow: hidden;
    }
`;

function SinglePost(props) {
    return (
        <article css={styles} className="singlePost">
            <RoundedContainer className="imageContainer">
                <figure>
                    <img src={props.image} alt="" />
                </figure>
            </RoundedContainer>
            <section className="details">
                <StylizedTitle color={props.color}>{props.title}</StylizedTitle>
                <p>{props.text}</p>
            </section>
        </article>
    );
}

export default SinglePost;
