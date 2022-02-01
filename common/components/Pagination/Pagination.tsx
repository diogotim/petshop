import React from "react";
import Link from "next/link";
import classes from "./Pagination.module.scss";
import { Product } from "../../../types";
import { arrayFromRange } from "../../util/util";

type Props = {
  perPage: number;
  currentPage: number;
  total: number;
  prefix: string;
};

const MAX_PAGES_SHOWN = 6;

const getPageButtons = (
  pages: number[],
  currentPage: number,
  prefix: string
) => {
  return pages.map((p) => (
    <Link href={`${prefix}${p}`} key={p}>
      <a className={currentPage === p ? classes.active : ""}>{p}</a>
    </Link>
  ));
};

const getPages = ({ perPage, currentPage, total, prefix }: Props) => {
  if (total <= MAX_PAGES_SHOWN) {
    return getPageButtons(arrayFromRange(1, total), currentPage, prefix);
  }

  if (currentPage < 3) {
    return getPageButtons(
      arrayFromRange(1, MAX_PAGES_SHOWN),
      currentPage,
      prefix
    );
  }

  if (currentPage > total - MAX_PAGES_SHOWN) {
    return getPageButtons(
      arrayFromRange(total - MAX_PAGES_SHOWN, total),
      currentPage,
      prefix
    );
  }

  return getPageButtons(
    [
      ...arrayFromRange(currentPage - 3, currentPage),
      ...arrayFromRange(currentPage + 1, currentPage + 3),
    ],
    currentPage,
    prefix
  );
};

const Pagination: React.FunctionComponent<Props> = ({
  perPage,
  currentPage,
  total,
  prefix,
}) => {
  return (
    <div className={classes.root}>
      {getPages({ perPage, currentPage, total, prefix })}
    </div>
  );
};

export default Pagination;
