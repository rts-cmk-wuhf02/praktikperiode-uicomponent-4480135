/** @jsx jsx */
import RoundedContainer from "./RoundedContainer";
import SinglePost from "./SinglePost";
import { Query } from "react-contentful";
import { css, jsx } from "@emotion/core";

const styles = css`
    width: 372px;
    height: 877px;

    .mainContainer {
        background-color: white;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    h2 {
        font-size: 18px;
        font-family: "Montserrat", sans-serif;
        letter-spacing: 1px;
        line-height: 24px;
        font-weight: bold;
        margin: 0;
    }

    .postsContainer {
        padding: 26px;
        box-sizing: border-box;
        height: 100%;

        & > div:last-of-type .singlePost {
            margin-bottom: 0;
        }

        .singlePost {
            height: 122px;
            margin-bottom: 23px;

            .imageContainer {
                width: 122px;
            }
        }
    }

    .header {
        background-color: #3f51b5;
        width: 100%;
        padding: 15px 0;
        color: white;
        text-align: center;
        text-transform: uppercase;
        flex-shrink: 0;
    }

    .footer {
        border-top: 1px solid rgba(149, 152, 154, 0.19);
        width: 100%;
        padding: 21px 0;
        color: #7b8591;
        text-align: center;
        text-transform: uppercase;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 1px;
        font-weight: bold;
        flex-shrink: 0;

        p {
            margin: 0;
        }
    }
`;

function LatestNews(props) {
    return (
        <article css={styles} className="latestNews">
            <RoundedContainer className="mainContainer">
                <div className="header">
                    <h2>Latest News</h2>
                </div>
                <section className="postsContainer">
                    <Query contentType="post">
                        {({ data, error, fetched, loading }) => {
                            if (loading || !fetched) {
                                return null;
                            }

                            if (error) {
                                console.error(error);
                                return null;
                            }

                            if (!data) {
                                return <p>No news found.</p>;
                            }

                            // Process and pass in the loaded `data` necessary for your page or child components.
                            return data.items
                                .map((post, i) => {
                                    return (
                                        <div key={i}>
                                            <SinglePost
                                                title={
                                                    post.fields.category.fields
                                                        .title
                                                }
                                                image={
                                                    post.fields.image.fields
                                                        .file.url
                                                }
                                                color={
                                                    post.fields.category.fields
                                                        .color
                                                }
                                                text={post.fields.text}
                                            />
                                        </div>
                                    );
                                })
                                .filter((post, i) => {
                                    if (i < 5) {
                                        return true;
                                    }

                                    return false;
                                });
                        }}
                    </Query>
                </section>
                <div className="footer">
                    <p>READ MORE</p>
                </div>
            </RoundedContainer>
        </article>
    );
}

export default LatestNews;
