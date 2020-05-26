/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const styles = css`
    font-weight: bold;
    font-size: 11px;
    letter-spacing: 2px;
    line-height: 15px;
    text-transform: uppercase;
`;

function StylizedTitle(props) {
    return (
        <div
            css={styles}
            style={{ color: props.color }}
            className={props.className}
        >
            {props.children}
        </div>
    );
}

export default StylizedTitle;
