/** @jsx jsx */
import RoundedContainer from "./RoundedContainer";
import StylizedTitle from "./StylizedTitle";
import { css, jsx } from "@emotion/core";

const styles = css`
    width: 771px;
    height: 471px;

    .mainContainer {
        background-color: white;
        height: 100%;
        padding: 43px 49px 53px 49px;
        box-sizing: border-box;
        display: flex;
    }

    .mainImage {
        box-sizing: border-box;
        width: calc(50% - 39px);
        margin-right: 39px;
        height: 100%;
        flex-shrink: 0;
    }

    figure {
        margin: 0;
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            vertical-align: bottom;
        }
    }

    h2 {
        font-size: 45px;
        line-height: 51px;
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

    .thumbnailContainer {
        width: 100%;
        display: flex;

        .roundedContainer {
            width: 100%;
            margin: 0 9px;

            &:first-child {
                margin-left: 0;
            }

            &:last-child {
                margin-right: 0;
            }
        }
    }

    .stylizedTitleContainer {
        display: inline-block;
        border-radius: 17px;
        padding: 10px 20px;
        align-self: flex-end;
    }

    .details {
        display: flex;
        flex-direction: column;
    }
`;

function SidewaysCard(props) {
    return (
        <article css={styles}>
            <RoundedContainer className="mainContainer">
                <RoundedContainer className="mainImage">
                    <figure>
                        <img src={props.image} alt="" />
                    </figure>
                </RoundedContainer>
                <section className="details">
                    <div
                        className="stylizedTitleContainer"
                        style={{ backgroundColor: props.categoryColor }}
                    >
                        <StylizedTitle color="#FFFFFF">
                            {props.category}
                        </StylizedTitle>
                    </div>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                    <section className="thumbnailContainer">
                        {props.thumbnails.map((image) => {
                            return (
                                <RoundedContainer>
                                    <figure>
                                        <img src={image} alt="" />
                                    </figure>
                                </RoundedContainer>
                            );
                        })}
                    </section>
                </section>
            </RoundedContainer>
        </article>
    );
}

export default SidewaysCard;
