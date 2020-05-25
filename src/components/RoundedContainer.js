/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const styles = css`
    border-radius: 10px;
    overflow: hidden;
`;

function RoundedContainer(props) {
    return <div css={styles}>{props.children}</div>;
}

export default RoundedContainer;
