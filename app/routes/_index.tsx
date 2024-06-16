import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/16/solid";
import type { MetaFunction } from "@remix-run/node";
import GithubIcon from "~/components/github-icon";
import LinkedinIcon from "~/components/linkedin-icon";

export const meta: MetaFunction = () => {
  return [
    { title: "James Coates - Lead Front End Developer" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans pt-32 p-4 max-w-5xl mx-auto">
      <div className="absolute -z-10 top-0 left-0 right-0 h-[360px] w-full bg-white dark:bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      <div className="text-center">
        <h1 className="text-7xl font-extrabold mb-3">James Coates</h1>
        <p className="text-xl font-medium text-slate-500">
          Lead Front End Developer (UK Remote)
        </p>

        <div className="mt-6 flex justify-center space-x-8">
          <div className="flex items-center">
            <MapPinIcon className="h-5 w-5 me-1" />
            <span>Malta</span>
          </div>
          <div className="flex items-center">
            <EnvelopeIcon className="h-5 w-5 me-1" />
            <span>james.coates@me.com</span>
          </div>
        </div>

        <div className="mt-6 flex justify-center items-center space-x-2">
          <a
            href="https://www.linkedin.com/in/jcoates92/"
            className="border border-slate-300 dark:border-slate-700 inline-flex items-center rounded-full px-4 py-2 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="h-4 w-4 me-2" />
            /james-coates-dev
          </a>
          <a
            href="https://www.linkedin.com/in/jcoates92/"
            className="border border-slate-300 dark:border-slate-700  inline-flex items-center rounded-full px-4 py-2 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="h-4 w-4 me-2" />
            /james-coates
          </a>
        </div>
      </div>
    </div>
  );
}
