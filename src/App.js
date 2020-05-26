/** @jsx jsx */
import { ContentfulClient, ContentfulProvider } from "react-contentful";
import { css, jsx } from "@emotion/core";
import GeneralCard from "./components/GeneralCard";
import SidewaysCard from "./components/SidewaysCard";

const styles = css`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
    padding: 43px 55px;
    background-color: #eaeaea;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;

    .lineA {
        display: flex;

        & > :first-child {
            margin-right: 27px;
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
                        color="#33439B"
                        category="Travel"
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
            </div>
        </ContentfulProvider>
    );
}

export default App;
