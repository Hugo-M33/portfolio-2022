import { Transition } from "@headlessui/react";
import React, { useContext, useState } from "react";
import { InView } from "react-intersection-observer";
import SlideSectionTitle from "../SlideSectionTitle";
import { IdentificationIcon, MapIcon } from "@heroicons/react/outline";
import Image from "next/image";
import emojiIMG from "../../public/images/MyEmoji.png";
import { ScrollingContext } from "../../pages";

const CATEGORIES = [
  { emoji: "👦🏻", text: "Début", linkTo: "START" },
  { emoji: "🏫", text: "Lycée", linkTo: "HS" },
  { emoji: "🎓", text: "DUT", linkTo: "DUT" },
  { emoji: "🚀", text: "Futur ?", linkTo: "FUTURE" },
];

const SUBPAGES = [
  {
    name: "START",
    title: "👦🏻 Début",
    content:
      "Ad exercitation dolor voluptate culpa mollit id exercitation in Lorem.",
    next: "HS",
  },
  {
    name: "HS",
    title: "🏫 Lycée",
    content:
      "Ad exercitation dolor voluptate culpa mollit id exercitation in Lorem.",
    next: "DUT",
  },
  {
    name: "DUT",
    title: "🎓 DUT",
    content:
      "Ad exercitation dolor voluptate culpa mollit id exercitation in Lorem.",
    next: "FUTURE",
  },
  {
    name: "FUTURE",
    title: "🚀 Futur ?",
    content:
      "Ad exercitation dolor voluptate culpa mollit id exercitation in Lorem.",
    next: "HOME",
  },
];

const pageTransitions = {
  enter: "transition-all duration-500 transform",
  enterFrom: "translate-x-full opacity-0",
  enterTo: "translate transform transition-all translate-x-0 opacity-100",
  leave: "transition-all duration-500 transform",
  leaveTo: "-translate-x-full opacity-0",
  leaveFrom: "translate transform transition-all translate-x-0 opacity-100",
};

const About: React.FC = () => {
  const [subPage, setSubPage] = useState<String>("ME");
  const scrolling = useContext(ScrollingContext);
  return (
    <section
      className={`bg-gray-700 h-screen w-screen ${!scrolling && "snap-start"} grid place-items-center relative`}
      id="about"
    >
      <SlideSectionTitle right>About</SlideSectionTitle>
      <div className="relative bg-gray-900 rounded-lg w-3/4 h-3/4 text-white flex flex-col px-8 shadow-lg overflow-hidden">
        <Transition
          as="div"
          show={subPage === "ME"}
          {...pageTransitions}
          enterFrom="-translate-y-full opacity-0"
          enterTo="translate transform transition-all translate-y-0 opacity-100"
          leaveTo="-translate-y-full opacity-0"
          leaveFrom="translate transform transition-all translate-y-0 opacity-100"
          className="flex flex-col divide-y divide-slate-700 absolute top-0 inset-x-8 py-8 h-full"
        >
          <div className="w-1/6 aspect-square self-center py-2">
            <Image
              src={emojiIMG}
              alt="Emoji of me"
              className="drop-shadow-[0_7px_5px_rgba(255,255,255,0.1)]"
            />
          </div>
          <p className="pt-4 text-lg">
            Jeune développeur en passe d&apos;obtenir mon DUT informatique, je
            recherche un stage dans le domaine du développement informatique.
            Mon domaine favoris est le développement d&apos;application web,
            mais je sais apprendre rapidement les fondements d&apos;un framework
            quelconque.
          </p>
          <button type="button" className="!border-t-0 mt-auto mb-8 self-end px-6 py-4 mr-4 bg-emerald-700 hover:bg-emerald-800 hover:shadow-2xl transition-all duration-500 rounded-lg">Contact</button>
          <div
            onClick={() => setSubPage("HOME")}
            className="w-full bottom-0 flex justify-center hover:bg-slate-800 transition-all duration-500 items-center py-2 rounded-md hover:shadow-md cursor-pointer"
          >
            <MapIcon className=" border-t-0 h-12 w-12 text-white" />
          </div>
        </Transition>
        <Transition
          as="div"
          show={subPage === "HOME"}
          {...pageTransitions}
          className=" flex flex-col divide-y divide-slate-700 absolute top-0 inset-x-8 py-8  h-full"
        >
          {CATEGORIES.map((e) => (
            <AboutCategory
              onClick={() => setSubPage(e.linkTo)}
              config={e}
              key={`about_${e.text}`}
            />
          ))}
          <div
            onClick={() => setSubPage("ME")}
            className="w-full bottom-0 mt-auto flex justify-center hover:bg-slate-800 transition-all duration-500 items-center py-2 rounded-md hover:shadow-md cursor-pointer"
          >
            <IdentificationIcon className=" border-t-0 h-12 w-12 text-white " />
          </div>
          {/* <button className="text-white bottom-0 mt-auto border-t-0 pt-8 text-2xl font-heavy" type="button"  >&#9432;</button> */}
        </Transition>
        {SUBPAGES.map((p) => (
          <AboutSubPage
            key={`subpage_${p.name}`}
            goTo={(to) => setSubPage(to)}
            show={p.name === subPage}
            page={p}
          />
        ))}
      </div>
    </section>
  );
};

interface AboutCatProps {
  config?: {
    emoji?: String;
    text?: String;
  };
  onClick: () => void;
}

const AboutCategory: React.FC<AboutCatProps> = ({ config, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="h-16 w-full mx-auto flex items-center justify-between group cursor-pointer"
    >
      <span
        className="inline-grid place-items-center w-16 h-full text-2xl"
        role="img"
        aria-label="boy"
      >
        {config?.emoji ?? "🔵"}
      </span>
      <h3 className="font-bold">{config?.text ?? "<NO TEXT>"}</h3>
      <span
        className="inline-grid place-items-center w-16 h-full text-2xl transition-transform duration-400 ease-out group-hover:translate-x-3"
        role="img"
        aria-label="boy"
      >
        ⇢
      </span>
    </div>
  );
};

interface AboutSubPageProps {
  show: boolean;
  page: {
    name: String;
    title: String;
    content: String;
    next: String;
  };
  goTo: (to: String) => void;
}

const AboutSubPage: React.FC<AboutSubPageProps> = ({ show, page, goTo }) => {
  return (
    <Transition
      as="div"
      show={show}
      {...pageTransitions}
      className=" flex flex-col h-full absolute top-0 inset-x-8 py-8"
    >
      <h4 className="text-2xl font-bold flex justify-center py-4 border-gray-600 border-b-2">
        {page.title}
      </h4>
      <p className="text-justify mt-8">{page.content}</p>
      <div className="inset-x-8 flex justify-between mt-auto justify-self-end">
        <button
          className="bg-gray-800 transition-[background-color] duration-500 hover:bg-gray-600 rounded-lg w-fit px-8 py-2 "
          type="button"
          onClick={() => goTo("HOME")}
        >
          &larr;
        </button>
        <button
          className="bg-emerald-800 transition-[background-color] duration-500 hover:bg-emerald-600 rounded-lg w-fit px-8 py-2 "
          type="button"
          onClick={() => goTo(page.next)}
        >
          &rarr;
        </button>
      </div>
    </Transition>
  );
};

export default About;
