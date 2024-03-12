import { useStore } from "../context";
import { TIngredient } from "../types";
import { getImagePreview } from "../utils";

export const IngredientsList = ({
  ingredients = []
}: {
  ingredients?: TIngredient[];
}) => {
  const { addIngredient } = useStore();
  return (
    <div>
      <h1>Ingredients</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,minmax(100px,auto))",
          marginBottom: 20
        }}
      >
        {ingredients.map((i: TIngredient) => (
          <div
            key={i.strIngredient}
            onClick={() => addIngredient?.(i)}
            style={{ cursor: "pointer" }}
          >
            <h4>{i.strIngredient}</h4>
            <img src={getImagePreview(i.strIngredient)} alt={i.strIngredient} />
          </div>
        ))}
      </div>
    </div>
  );
};
