import { NextPage } from "next";
import { getHeadForPage } from "../../utils/getHead";
import { useRouter } from "next/router";
import { Input } from "dragontail-experimental";
import { useEffect, useState } from "react";
import { sectorPerimeter } from "../../math/circles";

const RadianSectorPerimeter: NextPage = () => {
  const { asPath } = useRouter();
  const [answer, setAnswer] = useState<string>("");
  const [radius, setRadius] = useState<string>("");
  const [angle, setAngle] = useState<string>("");

  useEffect(() => {
    if (angle && radius) {
      setAnswer(
        sectorPerimeter(parseFloat(angle), parseFloat(radius))
          .toPrecision(4)
          .toString()
      );
    } else {
      setAnswer("");
    }
  }, [radius, angle]);

  return (
    <>
      {getHeadForPage({
        description:
          "Calculate a sector's perimeter given the subtended angle in radians and the radius.",
        path: asPath,
        title: "Radian & Radius Sector Perimeter Calculator",
      })}
      <div className="p-10 gap-5 flex justify-center items-center">
        <Input
          value={angle}
          type="number"
          onChange={(e) => {
            setAngle(e.target.value);
          }}
          placeholder="angle"
        />
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

export default RadianSectorPerimeter;
