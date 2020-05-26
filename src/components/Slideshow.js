/** @jsx jsx */
import React from "react";
import RoundedContainer from "./RoundedContainer";
import StylizedTitle from "./StylizedTitle";
import { css, jsx } from "@emotion/core";

const styles = css`
    width: 771px;
    height: 475px;

    .mainContainer {
        background-color: white;
        height: 100%;
        position: relative;
        color: white;
    }

    .imagesContainer {
        display: flex;
        position: relative;
        z-index: 10;
        width: 100%;
        height: 100%;
        transition: transform 0.75s ease-in-out;
    }

    .imageWrapper {
        width: 100%;
        height: 100%;
        flex-shrink: 0;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .details {
        box-sizing: border-box;
        padding: 30px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 20;
    }

    h2 {
        font-size: 48px;
        line-height: 45px;
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
        margin: 10px 0;
    }

    p {
        font-size: 16px;
        line-height: 25px;
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        margin-top: 15px;
    }

    .postInfo {
        position: absolute;
        bottom: 60px;
        width: calc(50% + 90px);
    }

    .logo {
        display: flex;
        align-items: center;
    }

    .logo::before {
        content: "";
        width: 23px;
        height: 23px;
        background-color: black;
        border-radius: 50px;
        background-image: url("/nyt.png");
        background-size: 9px;
        background-repeat: no-repeat;
        background-position: center;
        display: inline-block;
        margin-right: 10px;
    }

    .slideshowControlContainer {
        position: absolute;
        left: 50%;
        bottom: 27px;
        transform: translateX(-50%);
        display: flex;

        .slideshowControl {
            height: 2px;
            width: 15px;
            margin: 0 3px;
            background-color: white;
            opacity: 0.36;
            position: relative;
            transition: opacity 0.35s ease;

            &:hover {
                cursor: pointer;
                opacity: 0.6;
            }

            &.active {
                opacity: 1;
            }

            &::before {
                content: "";
                position: absolute;
                height: 16px;
                width: 100%;
                transform: translateY(-50%);
            }
        }
    }

    .heart {
        width: 20px;
        height: 20px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url("/heart.png");
    }

    .topContainer {
        display: flex;
        margin-top: 5px;
        margin-left: 5px;
        margin-right: 5px;
        justify-content: space-between;
    }
`;

class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePanel: 0,
        };
    }

    componentDidMount = () => {
        setInterval(() => {
            this.handleSlideshowControl(
                this.state.activePanel < this.props.images.length - 1
                    ? this.state.activePanel + 1
                    : 0
            );
        }, 3000);
    };

    handleSlideshowControl = (index) => {
        this.setState({ activePanel: index });

        document.querySelector(
            ".imagesContainer"
        ).style.transform = `translateX(-${index * 100}%)`;
    };

    render = () => (
        <article css={styles}>
            <RoundedContainer className="mainContainer">
                <section className="details">
                    <section className="topContainer">
                        <StylizedTitle className="logo">
                            The New York Times
                        </StylizedTitle>

                        <div className="heart"></div>
                    </section>
                    <section className="postInfo">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.text}</p>
                    </section>
                    <section className="slideshowControlContainer">
                        {this.props.images.map((image, i) => {
                            return (
                                <div
                                    className={
                                        "slideshowControl" +
                                        (i === this.state.activePanel
                                            ? " active"
                                            : "")
                                    }
                                    key={i}
                                    onClick={() => {
                                        this.handleSlideshowControl(i);
                                    }}
                                    data-index={i}
                                ></div>
                            );
                        })}
                    </section>
                </section>
                <section className="imagesContainer">
                    {this.props.images.map((image, i) => {
                        return (
                            <div className="imageWrapper" key={i}>
                                <img src={image} alt="" />
                            </div>
                        );
                    })}
                </section>
            </RoundedContainer>
        </article>
    );
}

export default Slideshow;
