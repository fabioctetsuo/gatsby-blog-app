import React from "react"
import propTypes from "prop-types"
import Link from "gatsby-plugin-transition-link/AniLink"

import { getBackgroundColor } from '../../utils/getBackgroundColor';
import { PaginationWrapper } from "./styles"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <PaginationWrapper>
    {!isFirst && (
      <Link
        to={prevPage}
        cover
        direction="left"
        duration={0.6}
        bg={getBackgroundColor()}
      >
        ← página anterior
      </Link>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <Link
        to={nextPage}
        cover
        direction="right"
        duration={0.6}
        bg={getBackgroundColor()}
      >
        proxima página →
      </Link>
    )}
  </PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination