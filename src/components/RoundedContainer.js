/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const styles = css`
    border-radius: 10px;
    overflow: hidden;
`;

function RoundedContainer(props) {
    return (
        <div className="roundedContainer" css={styles}>
            {props.children}
        </div>
    );
}

export default RoundedContainer;
