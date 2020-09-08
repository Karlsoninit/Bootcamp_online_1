import React from "react";
import { ArticleReviewCard } from "../../ui/ArticleReviewCard";

export function NewsList({ data }) {
  return (
    <div style={{ display: "flex" }}>
      {data.map((article, indx) => (
        <ArticleReviewCard key={indx} {...article} />
      ))}
    </div>
  );
}
