import { Link } from "react-router-dom";

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const Breadcrumb = ({ name }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol
        className="breadcrumb"
        css={css`
          background-color: #fff;
          padding-left: 0;
        `}
      >
        <li className="breadcrumb-item">
          <Link to="/">Teammates</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {name}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
