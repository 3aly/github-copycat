import React from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { PaginationProps } from "@datatypes/props";
import { useStyles } from "./PagesController.styles";

const Pagination = ({ total, currentPage, onPageChange }: PaginationProps) => {
  const { classes } = useStyles();

  const pageCount = Math.ceil(total / 5);

  // Determine the middle page numbers
  const middlePages = () => {
    const pages = [];
    let start = Math.max(1, currentPage - 1);
    if (start + 2 > pageCount) {
      start = Math.max(1, pageCount - 2);
    }
    for (let i = start; i <= Math.min(start + 2, pageCount); i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <Box className={classes.container}>
      <IconButton
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={classes.button}
      >
        <ArrowLeft color="primary" />
      </IconButton>
      <Box className={classes.pagesContainer}>
        {middlePages().map((page) => (
          <IconButton
            key={page}
            onClick={() => onPageChange(page)}
            sx={{
              backgroundColor:
                currentPage === page ? "primary.light" : "inherit",
              color: currentPage === page ? "white" : "inherit",
            }}
            className={classes.page}
          >
            {page}
          </IconButton>
        ))}
      </Box>
      <IconButton
        onClick={() => onPageChange(Math.min(pageCount, currentPage + 1))}
        disabled={currentPage === pageCount}
        className={classes.button}
      >
        <ArrowRight color="primary" />
      </IconButton>
    </Box>
  );
};

export default Pagination;