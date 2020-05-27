/** @jsx jsx */
import RoundedContainer from "./RoundedContainer";
import SinglePost from "./SinglePost";
import { css, jsx } from "@emotion/core";

const styles = css`
    width: 771px;
    height: 175px;

    .roundedContainer {
        background-color: white;
        height: 100%;
    }

    .singlePost .imageContainer {
        width: 141px;
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

        & > :first-of-type {
            margin-right: 13px;
        }

        & > :last-of-type {
            margin-left: 13px;
        }
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
`;

function ShortDoubleCard(props) {
    return (
        <article css={styles} className="shortDoubleCard">
            <RoundedContainer className="mainContainer">
                <SinglePost
                    title={props.leftTitle}
                    image={props.leftImage}
                    color={props.leftColor}
                    text={props.leftText}
                />
                <SinglePost
                    title={props.rightTitle}
                    image={props.rightImage}
                    color={props.rightColor}
                    text={props.rightText}
                />
            </RoundedContainer>
        </article>
    );
}

export default ShortDoubleCard;
