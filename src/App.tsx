import { JSONResponse, TIngredient } from "./types";
import { useFetch, usePagination } from "./hooks";
import { IngredientsList } from "./components/IngredientsList";
import { PaginationActions } from "./components/PaginationActions";
import { CollectedIngredients } from "./components/CollectedIngredients";
import { BottomMenu } from "./components/BottomMenu";

export default function App() {
  const { data, isPending } = useFetch<JSONResponse>("/list.php?i=list");

  const pagination = usePagination<TIngredient>(data?.meals, 10);

  if (isPending) return null;

  return (
    <>
      <IngredientsList ingredients={pagination.paginated} />
      <PaginationActions {...pagination} />
      <CollectedIngredients />
      <BottomMenu />
    </>
  );
}
