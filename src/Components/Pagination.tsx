import React from "react";
import { paginationProps } from "../Types";
import Button from "./CommonJSX/Button";

const Pagination: React.FC<paginationProps> = ({
  pageInfo,
  paginationHandle,
}) => {
  const { offset, count } = pageInfo;
  return (
    <div className="pagination">
      <div>
        {offset > 0 && (
          <Button onClick={() => paginationHandle(-count)}>Prev</Button>
        )}
        <Button onClick={() => paginationHandle(count)}>Next</Button>
      </div>
    </div>
  );
};

export default Pagination;
