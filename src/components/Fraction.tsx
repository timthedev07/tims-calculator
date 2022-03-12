import { Input } from "dragontail-experimental";
import { FC, useState } from "react";

interface FractionProps {}

interface Fraction {
  denominator: string;
  numerator: string;
}

export const FractionInput: FC<FractionProps> = ({}) => {
  const [fraction, setFraction] = useState<Fraction>({
    denominator: "",
    numerator: "",
  });

  return (
    <div className="flex flex-col justify-center items-center w-11">
      {/* fraction */}
      <Input
        placeholder="numerator"
        value={fraction.numerator}
        onChange={(t) => {
          setFraction((old) => ({
            ...old,
            numerator: t.target.value,
          }));
        }}
      />
      <input value="" />
      <hr className="h-[0.001px] border-t-slate-50 my-1 w-11/12" />
      <Input
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
