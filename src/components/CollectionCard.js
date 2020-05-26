/** @jsx jsx */
import RoundedContainer from "./RoundedContainer";
import StylizedTitle from "./StylizedTitle";
import { css, jsx } from "@emotion/core";

const styles = css`
    width: 372px;
    height: 373px;

    .roundedContainer {
        background-color: white;
        height: 100%;
    }

    figure,
    section {
        width: 100%;
        height: 242px;
        margin: 0;
    }

    figure img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .detailsContainer {
        box-sizing: border-box;
        padding: 40px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    h4 {
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.6px;
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
        margin: 0;
    }

    p {
        font-size: 14px;
        line-height: 19px;
        font-family: "Montserrat", sans-serif;
        font-weight: normal;
        color: #7b8591;
        letter-spacing: -0.5px;
        margin: 0;
    }

    .mainContainer {
        display: flex;
        flex-direction: column;
    }

    .authorIcon {
        width: 60px;
        height: 60px;
        border-radius: 100px;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(50%, -50%);

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .imageContainer {
        position: relative;
    }

    .collectionId {
        position: absolute;
        top: 20px;
        left: 30px;
        letter-spacing: 0;
        color: white;
    }
`;

function CollectionCard(props) {
    return (
        <article css={styles} className="collectionCard">
            <RoundedContainer className="mainContainer">
                <section className="imageContainer">
                    <figure>
                        <img src={props.image} alt="" />
                    </figure>
                    <h4 className="collectionId">
                        COLLECTION: #{props.collection}
                    </h4>
                </section>
                <section className="detailsContainer">
                    <h4>{props.title}</h4>
                    <p>
                        By: <span>{props.author}</span>
                    </p>
                    <figure className="authorIcon">
                        <img src={props.authorIcon} alt="" />
                    </figure>
                </section>
            </RoundedContainer>
        </article>
    );
}

export default CollectionCard;
