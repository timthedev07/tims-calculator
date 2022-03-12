import { NextPage } from "next";
import { getHeadForPage } from "../../utils/getHead";
import { useRouter } from "next/router";
import { Input } from "dragontail-experimental";
import { useEffect, useState } from "react";
import { segmentArea } from "../../math/circles";

const RadianSegment: NextPage = () => {
  const { asPath } = useRouter();
  const [answer, setAnswer] = useState<string>("");
  const [radius, setRadius] = useState<string>("");
  const [angle, setAngle] = useState<string>("");

  useEffect(() => {
    if (angle && radius) {
      setAnswer(
        segmentArea(parseFloat(angle), parseFloat(radius))
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
          "Calculate segment area given the angle subtended in radians(with pi) and the radius",
        path: asPath,
        title: "Radian & Radius Segment Area Calculator",
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

export default RadianSegment;
