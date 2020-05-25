import React from "react";
import { ContentfulClient, ContentfulProvider, Query } from "react-contentful";
import "./App.css";

const contentfulClient = new ContentfulClient({
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    space: process.env.REACT_APP_SPACE_ID,
});

function App() {
    return (
        <ContentfulProvider client={contentfulClient}>
            <div className="App">
                <Query contentType="product" query={{}}>
                    {({ data, error, fetched, loading }) => {
                        if (loading || !fetched) {
                            return null;
                        }

                        if (error) {
                            console.error(error);
                            console.log(process.env.REACT_APP_ACCESS_TOKEN);
                            return null;
                        }

                        if (!data) {
                            return <p>Page does not exist.</p>;
                        }

                        // See the Contentful query response
                        console.log(data);

                        // Process and pass in the loaded `data` necessary for your page or child components.
                        return JSON.stringify(data);
                    }}
                </Query>
            </div>
        </ContentfulProvider>
    );
}

export default App;
