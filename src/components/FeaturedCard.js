/** @jsx jsx */
import RoundedContainer from "./RoundedContainer";
import { css, jsx } from "@emotion/core";
import StylizedTitle from "./StylizedTitle";

const styles = css`
    width: 372px;
    height: 371px;
    color: white;

    .mainContainer {
        background-color: white;
        height: 100%;
        padding: 21px;
        box-sizing: border-box;
        position: relative;
        background-size: cover;
        background-position: center;
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
        font-size: 25px;
        line-height: 46px;
        letter-spacing: 5;
        margin: 0;
        text-align: center;
        color: black;
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
    }

    .stylizedTitle {
        position: absolute;
        right: 37px;
        bottom: 23px;
    }

    .featured {
        position: absolute;
        top: 0;
        right: 10px;
        background-color: #ff0000;
        width: 11px;
        height: 27px;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 70%, 0 100%);
    }
`;

function FeaturedCard(props) {
    return (
        <article css={styles} className="featuredCard">
            <RoundedContainer
                className="mainContainer"
                style={{ backgroundImage: `url(${props.image})` }}
            >
                <h4>{props.title}</h4>
                <StylizedTitle color={props.categoryColor}>
                    {props.category}
                </StylizedTitle>
                <div className="featured"></div>
            </RoundedContainer>
        </article>
    );
}

export default FeaturedCard;
