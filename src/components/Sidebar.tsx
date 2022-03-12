import Link from "next/link";
import { FC } from "react";
import { capitalize } from "../utils/strings";

interface SidebarProps {}

interface Topic {
  topic: string;
  calculators: {
    name: string;
    relativePath: string;
  }[];
}

const CALCULATORS: Topic[] = [
  {
    calculators: [
      {
        relativePath: "radian-segment-frac-pi",
        name: "Radian Segment(Fraction Pi)",
      },
    ],
    topic: "geometry",
  },
];

export const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <nav className="w-72 bg-cyan-800 shadow-lg p-5 flex flex-col">
      <h3>Calculators</h3>
      <hr className="w-11/12 my-3 h-[0.001px] border-t-slate-400" />
      {CALCULATORS.map((each) => (
        <section key={each.topic}>
          <h4 className="text-slate-100">{capitalize(each.topic)}</h4>
          {each.calculators.map((calculator) => (
            <article
              className="ml-3 text-slate-400 transition-all hover:underline duration-300 hover:text-slate-100"
              key={calculator.name}
            >
              <Link href={each.topic + "/" + calculator.relativePath}>
                {calculator.name}
              </Link>
            </article>
          ))}
        </section>
      ))}
    </nav>
  );
};
