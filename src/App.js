/** @jsx jsx */
import React from "react";
import { ContentfulClient, ContentfulProvider } from "react-contentful";
import { css, jsx } from "@emotion/core";
import RoundedContainer from "./components/RoundedContainer";

const styles = css`
    padding: 43px 55px;
    background-color: #eaeaea;
    min-height: 100vh;
    box-sizing: border-box;
`;

const contentfulClient = new ContentfulClient({
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    space: process.env.REACT_APP_SPACE_ID,
});

function App() {
    return (
        <ContentfulProvider client={contentfulClient}>
            <div css={styles}></div>
        </ContentfulProvider>
    );
}

export default App;
