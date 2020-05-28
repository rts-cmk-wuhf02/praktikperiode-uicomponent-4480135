/** @jsx jsx */
import RoundedContainer from "./RoundedContainer";
import { Query } from "react-contentful";
import { css, jsx } from "@emotion/core";

const styles = css`
    width: 372px;
    height: 971px;

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

    h3 {
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        margin: 11px;
    }

    .postsContainer {
        padding: 32px 42px 62px 42px;
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
        background-color: #3ca773;
        width: 100%;
        padding: 15px 0;
        color: white;
        text-align: center;
        text-transform: uppercase;
        flex-shrink: 0;
    }

    .newsPost {
        text-align: center;
        border-bottom: 1px solid rgba(123, 133, 145, 0.24);
        padding: 0 10px;

        &:last-of-type {
            border-bottom: 0;
        }

        p {
            color: #7b8591;
            margin-top: 11px;
            margin-bottom: 30px;
            height: 62px;
            overflow: hidden;
        }

        .postId {
            display: inline-block;
            width: 39px;
            height: 39px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-family: "Montserrat", sans-serif;
            font-size: 20px;
            line-height: 27px;
            font-weight: bold;
            margin: 30px auto 0 auto;
        }
    }
`;

function NewsDigest(props) {
    return (
        <article css={styles} className="newsDigest" key={props.key}>
            <RoundedContainer className="mainContainer">
                <div className="header">
                    <h2>News Digest</h2>
                </div>
                <section className="postsContainer">
                    <Query contentType="post" query={{ limit: 4 }}>
                        {({ data, error, fetched, loading }) => {
                            if (loading || !fetched || error || !data) {
                                if (error) console.error(error);
                                return null;
                            }

                            return data.items.map((post, i) => {
                                return (
                                    <article key={i} className="newsPost">
                                        <div
                                            className="postId"
                                            style={{
                                                backgroundColor:
                                                    post.fields.category.fields
                                                        .color,
                                            }}
                                        >
                                            {i + 1}
                                        </div>
                                        <h3>
                                            {post.fields.category.fields.title}
                                        </h3>
                                        <p>{post.fields.text}</p>
                                    </article>
                                );
                            });
                        }}
                    </Query>
                </section>
            </RoundedContainer>
        </article>
    );
}

export default NewsDigest;
