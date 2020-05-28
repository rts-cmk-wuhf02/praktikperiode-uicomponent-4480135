/** @jsx jsx */
import { ContentfulClient, ContentfulProvider } from "react-contentful";
import { Query } from "react-contentful";
import { css, jsx } from "@emotion/core";
import GeneralCard from "./components/GeneralCard";
import SidewaysCard from "./components/SidewaysCard";
import SimpleCard from "./components/SimpleCard";
import CollectionCard from "./components/CollectionCard";
import Slideshow from "./components/Slideshow";
import ShortDoubleCard from "./components/ShortDoubleCard";
import ShortCard from "./components/ShortCard";
import LatestNews from "./components/LatestNews";
import InfoCard from "./components/InfoCard";
import NewsDigest from "./components/NewsDigest";
import SplashCard from "./components/SplashCard";
import FeaturedCard from "./components/FeaturedCard";

const styles = css`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap");
    padding: 43px 55px;
    background-color: #eaeaea;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;

    .lineA {
        display: flex;
        margin-bottom: 29px;

        & > :first-of-type {
            margin-right: 27px;
        }
    }

    .lineB {
        display: flex;
        margin-bottom: 26px;

        .simpleCard {
            margin-right: 28px;

            &:last-of-type {
                margin-right: 0;
            }
        }
    }

    .lineC {
        display: flex;
        margin-bottom: 23px;

        .collectionCard {
            margin-right: 27px;

            &:last-of-type {
                margin-right: 0;
            }
        }
    }

    .lineD {
        display: flex;
        margin-bottom: 29px;

        & > :first-of-type {
            margin-right: 27px;
        }

        .slideshow {
            margin-bottom: 29px;
        }

        .shortDoubleCard {
            margin-bottom: 23px;
        }
    }

    .lineE {
        display: flex;

        & > :first-of-type {
            margin-right: 27px;
        }
    }

    .lineF {
        display: flex;

        .shortCard {
            margin-bottom: 25px;
        }

        .featuredCard {
            margin-bottom: 29px;
        }

        .infoCard:first-of-type {
            margin-bottom: 29px;
        }

        & > div {
            margin-right: 27px;

            &:last-of-type {
                margin-right: 0;
            }
        }
    }

    .lineG {
        display: flex;

        .splashCard {
            flex-shrink: 0;

            &:first-of-type {
                margin-right: 34px;
            }
        }
    }
`;

const contentfulClient = new ContentfulClient({
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    space: process.env.REACT_APP_SPACE_ID,
});

function App() {
    return (
        <ContentfulProvider client={contentfulClient}>
            <div css={styles}>
                <div className="lineA">
                    <Query contentType="article" query={{ limit: 1 }}>
                        {({ data, error, fetched, loading }) => {
                            if (loading || !fetched || error || !data) {
                                console.error(error);
                                return null;
                            }

                            return data.items.map((post, i) => {
                                return (
                                    <GeneralCard
                                        title={post.fields.title}
                                        text={post.fields.text}
                                        categoryColor={
                                            post.fields.category.fields.color
                                        }
                                        category={
                                            post.fields.category.fields.title
                                        }
                                        image={
                                            post.fields.image.fields.file.url
                                        }
                                        key={i}
                                    />
                                );
                            });
                        }}
                    </Query>

                    <Query contentType="detailedArticle" query={{ limit: 1 }}>
                        {({ data, error, fetched, loading }) => {
                            if (loading || !fetched || error || !data) {
                                console.error(error);
                                return null;
                            }

                            return data.items.map((post, i) => {
                                return (
                                    <SidewaysCard
                                        title={post.fields.title}
                                        text={post.fields.text}
                                        categoryColor={
                                            post.fields.category.fields.color
                                        }
                                        category={
                                            post.fields.category.fields.title
                                        }
                                        image={
                                            post.fields.images[0].fields.file
                                                .url
                                        }
                                        thumbnails={[
                                            post.fields.images[1].fields.file
                                                .url,
                                            post.fields.images[2].fields.file
                                                .url,
                                            post.fields.images[3].fields.file
                                                .url,
                                        ]}
                                        key={i}
                                    />
                                );
                            });
                        }}
                    </Query>
                </div>

                <div className="lineB">
                    <SimpleCard
                        title="On-time Delivery"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit"
                        image="https://via.placeholder.com/150"
                        color="#005AEE"
                    />
                    <SimpleCard
                        title="Parcels"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit"
                        image="https://via.placeholder.com/70"
                        color="#FFA767"
                    />
                    <SimpleCard
                        title="Quality Assurance"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit"
                        image="https://via.placeholder.com/120"
                        color="#0AACDC"
                    />
                    <SimpleCard
                        title="Customer Service"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit"
                        image="https://via.placeholder.com/100x70"
                        color="#597AEF"
                    />
                </div>

                <div className="lineC">
                    <Query contentType="collection" query={{ limit: 3 }}>
                        {({ data, error, fetched, loading }) => {
                            if (loading || !fetched || error || !data) {
                                console.error(error);
                                return null;
                            }

                            return data.items.map((post, i) => {
                                return (
                                    <CollectionCard
                                        image={
                                            post.fields.image.fields.file.url
                                        }
                                        title={post.fields.title}
                                        authorIcon={
                                            post.fields.author.fields.icon
                                                .fields.file.url
                                        }
                                        author={post.fields.author.fields.name}
                                        collection={post.fields.id}
                                        key={i}
                                    />
                                );
                            });
                        }}
                    </Query>
                </div>

                <div className="lineD">
                    <div>
                        <Query contentType="slideshow" query={{ limit: 1 }}>
                            {({ data, error, fetched, loading }) => {
                                if (loading || !fetched || error || !data) {
                                    console.error(error);
                                    return null;
                                }

                                return data.items.map((post, i) => {
                                    return (
                                        <Slideshow
                                            title={post.fields.title}
                                            text={post.fields.text}
                                            images={post.fields.images.map(
                                                (image) => {
                                                    return image.fields.file
                                                        .url;
                                                }
                                            )}
                                            key={i}
                                        />
                                    );
                                });
                            }}
                        </Query>

                        <Query contentType="post" query={{ limit: 2 }}>
                            {({ data, error, fetched, loading }) => {
                                if (loading || !fetched || error || !data) {
                                    console.error(error);
                                    return null;
                                }

                                return (
                                    <ShortDoubleCard
                                        leftTitle={
                                            data.items[0].fields.category.fields
                                                .title
                                        }
                                        leftText={data.items[0].fields.text}
                                        leftImage={
                                            data.items[0].fields.image.fields
                                                .file.url
                                        }
                                        leftColor={
                                            data.items[0].fields.category.fields
                                                .color
                                        }
                                        rightTitle={
                                            data.items[1].fields.category.fields
                                                .title
                                        }
                                        rightText={data.items[1].fields.text}
                                        rightImage={
                                            data.items[0].fields.image.fields
                                                .file.url
                                        }
                                        rightColor={
                                            data.items[1].fields.category.fields
                                                .color
                                        }
                                    />
                                );
                            }}
                        </Query>

                        <div className="lineE">
                            <Query contentType="post" query={{ limit: 2 }}>
                                {({ data, error, fetched, loading }) => {
                                    if (loading || !fetched || error || !data) {
                                        console.error(error);
                                        return null;
                                    }

                                    return data.items.map((post, i) => {
                                        return (
                                            <ShortCard
                                                image={
                                                    post.fields.image.fields
                                                        .file.url
                                                }
                                                title={
                                                    post.fields.category.fields
                                                        .title
                                                }
                                                text={post.fields.text}
                                                color={
                                                    post.fields.category.fields
                                                        .color
                                                }
                                                key={i}
                                            />
                                        );
                                    });
                                }}
                            </Query>
                        </div>
                    </div>

                    <div>
                        <LatestNews />
                    </div>
                </div>

                <div className="lineF">
                    <div>
                        <Query contentType="post" query={{ limit: 4 }}>
                            {({ data, error, fetched, loading }) => {
                                if (loading || !fetched || error || !data) {
                                    console.error(error);
                                    return null;
                                }

                                return data.items
                                    .filter((post, i) => i > 1)
                                    .map((post, i) => {
                                        return (
                                            <ShortCard
                                                image={
                                                    post.fields.image.fields
                                                        .file.url
                                                }
                                                title={
                                                    post.fields.category.fields
                                                        .title
                                                }
                                                text={post.fields.text}
                                                color={
                                                    post.fields.category.fields
                                                        .color
                                                }
                                                key={i}
                                            />
                                        );
                                    });
                            }}
                        </Query>

                        <Query contentType="feature" query={{ limit: 1 }}>
                            {({ data, error, fetched, loading }) => {
                                if (loading || !fetched || error || !data) {
                                    console.error(error);
                                    return null;
                                }

                                return data.items.map((post, i) => {
                                    return (
                                        <FeaturedCard
                                            title={post.fields.title}
                                            category={
                                                post.fields.category.fields
                                                    .title
                                            }
                                            categoryColor={
                                                post.fields.category.fields
                                                    .color
                                            }
                                            image={
                                                post.fields.image.fields.file
                                                    .url
                                            }
                                            key={i}
                                        />
                                    );
                                });
                            }}
                        </Query>

                        <div className="lineG">
                            <SplashCard
                                color="#53BBB3"
                                title="Design"
                                image="https://via.placeholder.com/600"
                            />
                            <SplashCard
                                color="#358ED7"
                                title="Education"
                                image="https://via.placeholder.com/600"
                            />
                        </div>
                    </div>

                    <div>
                        <NewsDigest />
                    </div>

                    <div>
                        <InfoCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus. Aliquam volutpat ex eget elit venenatis, vel luctus arcu pulvinar. " />
                        <InfoCard
                            image="https://via.placeholder.com/700"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit amet elit hendrerit rutrum. Nam egestas laoreet ligula, ac elementum risus. Aliquam volutpat ex eget elit venenatis, vel luctus arcu pulvinar. "
                        />
                    </div>
                </div>
            </div>
        </ContentfulProvider>
    );
}

export default App;
