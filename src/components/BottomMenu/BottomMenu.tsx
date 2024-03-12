import { ChangeEvent } from "react";
import { useStore } from "../../context";
import { usePost } from "../../hooks";

import css from "./BottomMenu.module.css";

const BottomMenu = () => {
  const { ingredients, addToPayload, payload } = useStore();
  const { mutate } = usePost("recipe/create", {
    ingredients,
    payload
  });

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    addToPayload?.(evt.target.name, evt.target.value);
  };
  if (ingredients.length === 0) return null;
  return (
    <div className={css.container}>
      <input
        placeholder="Cooking times in minutes"
        id="cooking-time"
        type="text"
        name="minutes"
        onChange={handleChange}
      />
      <select name="meal_type" onChange={handleChange}>
        <option>Meal type</option>
        <option value="type_1">Type 1</option>
        <option value="type_2">Type 2</option>
      </select>
      <button onClick={mutate}>Create Recipe</button>
    </div>
  );
};

export default BottomMenu;
