import React, { createContext, useContext, useState } from "react";

import type { TIngredient } from "../types";

export type TStoreContext = {
  ingredients: TIngredient[];
  payload?: unknown;
  addIngredient?: (ingredient: TIngredient) => void;
  removeIngredient?: (ingredient: TIngredient) => void;
  addToPayload?: (key: string, value: string) => void;
  reset?: () => void;
};

const defaultState = {
  ingredients: [],
  payload: {}
};

const StoreContext = createContext<TStoreContext>(defaultState);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [ingredients, setIngredients] = useState<TIngredient[]>([]);
  const [payload, setPayload] = useState({});

  const addIngredient = (ingredient: TIngredient) => {
    if (ingredients.find((i) => i.idIngredient === ingredient.idIngredient))
      return false;
    const copy = ingredients.slice();
    copy.push(ingredient);
    setIngredients(copy);
  };

  const removeIngredient = (ingredient: TIngredient) => {
    const copy = ingredients.slice();
    const filtered = copy.filter(
      (ingr) => ingr.idIngredient !== ingredient.idIngredient
    );
    setIngredients(filtered);
  };

  const reset = () => {
    setIngredients([]);
    setPayload({});
  };

  const addToPayload = (key: string, value: string) => {
    setPayload((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <StoreContext.Provider
      value={{
        ingredients,
        addIngredient,
        addToPayload,
        removeIngredient,
        reset,
        payload
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
