import React from "react";
import { ContentfulClient, ContentfulProvider } from "react-contentful";
import "./App.css";

const contentfulClient = new ContentfulClient({
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    space: process.env.REACT_APP_SPACE_ID,
});

function App() {
    return (
        <ContentfulProvider client={contentfulClient}>
            <div className="App"></div>
        </ContentfulProvider>
    );
}

export default App;
