import { Input } from "dragontail-experimental";
import { FC } from "react";

export interface FractionInputProps {
  fraction: Fraction;
  setFraction: React.Dispatch<React.SetStateAction<Fraction>>;
}

export interface Fraction {
  denominator: string;
  numerator: string;
}

export const FractionInput: FC<FractionInputProps> = ({
  fraction,
  setFraction,
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-32">
      {/* fraction */}
      <Input
        placeholder="numerator"
        value={fraction.numerator}
        type="number"
        onChange={(t) => {
          setFraction((old) => ({
            ...old,
            numerator: t.target.value,
          }));
        }}
      />
      <hr className="h-[0.001px] border-t-slate-50 my-1 w-11/12" />
      <Input
        type="number"
        placeholder="denominator"
        onChange={(t) => {
          setFraction((old) => ({
            ...old,
            denominator: t.target.value,
          }));
        }}
      ></Input>
    </div>
  );
};
