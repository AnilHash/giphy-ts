import React from "react";
import { paginationProps } from "../Types";



const Pagination:React.FC<paginationProps> = ({ pageInfo, paginationHandle }) => {
  const { offset, count } = pageInfo;
  return (
    <div className="pagination">
      <div>
        {offset > 0 && (
          <button onClick={() => paginationHandle(-count)}>Prev</button>
        )}
        <button onClick={() => paginationHandle(count)}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;
