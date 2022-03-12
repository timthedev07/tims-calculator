import { NextPage } from "next";
import { getHeadForPage } from "../../utils/getHead";
import { useRouter } from "next/router";
import { FractionInput } from "../../components/Fraction";
import { Input } from "dragontail-experimental";
import { useEffect, useState } from "react";
import { useFractionDisclosure } from "../../utils/useFractionDisclosure";

const RadianSegment: NextPage = () => {
  const { asPath } = useRouter();
  const [answer, setAnswer] = useState<number>();
  const fractionDisclosure = useFractionDisclosure();

  useEffect(() => {
    const { numerator, denominator } = fractionDisclosure.fraction;
    if (numerator !== "" && denominator !== "") {
    }
  }, [fractionDisclosure]);

  return (
    <>
      {getHeadForPage({
        description:
          "Calculate segment area given the angle subtended in radians and the radius",
        path: asPath,
        title: "Radian & Radius Segment Area Calculator",
      })}
      <div className="p-10 gap-5 flex justify-center items-center">
        <FractionInput {...fractionDisclosure} />{" "}
        <span className="text-3xl">π</span> <Input placeholder="radius" />
        <span className="text-3xl">{` = ${answer}`}</span>
      </div>
    </>
  );
};

export default RadianSegment;
