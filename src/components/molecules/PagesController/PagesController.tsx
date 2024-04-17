import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { PaginationProps } from "@datatypes/props";
import { useStyles } from "./PagesController.styles";
import i18next from "i18next";

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
        {i18next.language === "ar" ? (
          <>
            <ArrowRight color="primary" />
          </>
        ) : (
          <>
            <ArrowLeft color="primary" />
          </>
        )}
      </IconButton>
      <Box className={classes.pagesContainer}>
        {middlePages().map((page) => (
          <IconButton
            key={page}
            onClick={() => onPageChange(page)}
            sx={{
              backgroundColor:
                currentPage === page ? "primary.light" : "inherit",
              color:
                currentPage === page ? "primary.background.default" : "inherit",
            }}
            className={classes.page}
          >
            <Typography color={"text.primary"}>{page}</Typography>
          </IconButton>
        ))}
      </Box>
      <IconButton
        onClick={() => onPageChange(Math.min(pageCount, currentPage + 1))}
        disabled={currentPage === pageCount}
        className={classes.button}
      >
        {i18next.language === "ar" ? (
          <>
            <ArrowLeft color="primary" />
          </>
        ) : (
          <>
            <ArrowRight color="primary" />
          </>
        )}
      </IconButton>
    </Box>
  );
};

export default Pagination;
