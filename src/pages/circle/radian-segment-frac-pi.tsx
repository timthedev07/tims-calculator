import { NextPage } from "next";
import { getHeadForPage } from "../../utils/getHead";
import { useRouter } from "next/router";
import { FractionInput } from "../../components/Fraction";
import { Input } from "dragontail-experimental";
import { useEffect, useState } from "react";
import { useFractionDisclosure } from "../../utils/useFractionDisclosure";
import { segmentArea } from "../../math/circles";

const RadianSegment: NextPage = () => {
  const { asPath } = useRouter();
  const [answer, setAnswer] = useState<string>("");
  const [radius, setRadius] = useState<string>("");
  const fractionDisclosure = useFractionDisclosure();

  useEffect(() => {
    const { numerator, denominator } = fractionDisclosure.fraction;
    if (numerator && denominator && radius) {
      setAnswer(
        segmentArea(
          (parseFloat(numerator) / parseFloat(denominator)) * Math.PI,
          parseFloat(radius)
        )
          .toPrecision(4)
          .toString()
      );
    } else {
      setAnswer("");
    }
  }, [fractionDisclosure, radius]);

  return (
    <>
      {getHeadForPage({
        description:
          "Calculate segment area given the angle subtended in radians(as a fraction & with pi) and the radius",
        path: asPath,
        title: "Radian & Radius Segment Area Calculator",
      })}
      <div className="p-10 gap-5 flex justify-center items-center">
        <FractionInput {...fractionDisclosure} />{" "}
        <span className="text-3xl">π</span>{" "}
        <Input
          value={radius}
          type="number"
          onChange={(e) => {
            setRadius(e.target.value);
          }}
          placeholder="radius"
        />
        <span className="text-3xl">{` = ${answer}`}</span>
      </div>
    </>
  );
};

export default RadianSegment;
