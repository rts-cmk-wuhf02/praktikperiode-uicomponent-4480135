/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const styles = css`
    border-radius: 10px;
    overflow: hidden;
`;

function RoundedContainer(props) {
    return (
        <div
            className={
                "roundedContainer" +
                (props.className ? " " + props.className : "")
            }
            css={styles}
            style={props.style}
        >
            {props.children}
        </div>
    );
}

export default RoundedContainer;
