import { ChangeEvent } from "react";
import { useStore } from "../context";
import { TIngredient } from "../types";
import { getImagePreview } from "../utils";

export const CollectedIngredients = () => {
  const { removeIngredient, ingredients, addToPayload } = useStore();

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    addToPayload?.(evt.target.name, evt.target.value);
  };

  if (ingredients.length === 0) return null;
  return (
    <div style={{ marginTop: 20 }}>
      {ingredients.map((i: TIngredient) => (
        <div
          key={i.strIngredient}
          style={{ display: "flex", alignItems: "center", gap: 10 }}
        >
          <img
            src={getImagePreview(i.strIngredient)}
            alt={i.strIngredient}
            style={{ maxWidth: 50 }}
          />
          <span style={{ fontSize: 13 }}>qty</span>
          <input
            type="number"
            min={1}
            onChange={handleChange}
            name={"id_" + i.idIngredient}
          />
          <button onClick={() => removeIngredient?.(i)}>remove</button>
        </div>
      ))}
    </div>
  );
};
