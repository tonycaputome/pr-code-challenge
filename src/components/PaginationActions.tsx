import { useStore } from "../context";

export const PaginationActions = ({ ...props }) => {
  const { reset } = useStore();
  const { prev, next, currentPage, maxPage } = props;
  return (
    <>
      <hr />
      <div style={{ display: "flex", gap: 20 }}>
        <button onClick={prev}>Previous</button>
        <div>
          {currentPage} of {maxPage}
        </div>
        <button onClick={next}>Next</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};
