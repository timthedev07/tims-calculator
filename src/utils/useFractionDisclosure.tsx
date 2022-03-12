import { useState } from "react";
import { Fraction, FractionInputProps } from "../components/Fraction";

export const useFractionDisclosure = (): FractionInputProps => {
  const [fraction, setFraction] = useState<Fraction>({
    denominator: "",
    numerator: "",
  });
  return {
    fraction,
    setFraction,
  };
};
