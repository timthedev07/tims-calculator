import { NextPage } from "next";
import { Input } from "dragontail-experimental";
import { getHeadForPage } from "../../utils/getHead";
import { useRouter } from "next/router";

const RadianSegment: NextPage = () => {
  const { asPath } = useRouter();

  return (
    <>
      {getHeadForPage({
        description:
          "Calculate segment area given the angle subtended in radians and the radius",
        path: asPath,
        title: "Radian & Radius Segment Area Calculator"
      })}
      <div className="flex flex-row justify-center items-center">
        {/* fraction */}
      <Input placeholder="numerator"></Input>
      <hr />
      <Input placeholder="denominator"></Input>

      </div>
    </>
  );
};

export default RadianSegment;
