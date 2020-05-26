/** @jsx jsx */
import { ContentfulClient, ContentfulProvider } from "react-contentful";
import { css, jsx } from "@emotion/core";
import GeneralCard from "./components/GeneralCard";
import SidewaysCard from "./components/SidewaysCard";
import SimpleCard from "./components/SimpleCard";

const styles = css`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
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

        & > :first-child {
            margin-right: 27px;
        }
    }

    .lineB {
        display: flex;

        .simpleCard {
            margin-right: 28px;

            &:last-child {
                margin-right: 0;
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
                    <GeneralCard
                        title="Surfing in Maldives"
                        text="It’s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside."
                        categoryColor="#33439B"
                        category="Travel"
                        image="https://via.placeholder.com/600"
                    />
                    <SidewaysCard
                        title="Outdoor Experience"
                        text="It’s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside."
                        categoryColor="#005AEE"
                        category="Leisure"
                        image="https://via.placeholder.com/600"
                        thumbnails={[
                            "https://via.placeholder.com/700",
                            "https://via.placeholder.com/800",
                            "https://via.placeholder.com/900",
                        ]}
                    />
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
            </div>
        </ContentfulProvider>
    );
}

export default App;
