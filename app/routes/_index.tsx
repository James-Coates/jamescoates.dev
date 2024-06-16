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
    <div className="overflow-hidden">
      <div className="font-sans py-32 px-4 max-w-6xl mx-auto">
        <div className="absolute -z-10 top-0 left-0 right-0 h-[360px] w-full bg-white dark:bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        <div className="relative text-center animate-in slide-in-from-top-9 fade-in duration-300">
          <div className="absolute -z-10 -top-[400px] -left-20 w-[700px] h-[600px] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 "></div>
          <div className="absolute -z-10 -top-[400px] -right-20 w-[700px] h-[600px] bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 "></div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-3">
            James Coates
          </h1>
          <p className="text-xl font-medium text-slate-500">
            Lead Front End Developer{" "}
            <a href="https://mediamaker.co.uk/" className="text-indigo-500">
              @ Mediamaker
            </a>{" "}
            (UK Remote)
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
              className="border border-blue-300 dark:border-blue-700 font-medium text-blue-700 inline-flex items-center rounded-full px-4 py-2 text-sm hover:scale-105 hover:bg-blue-50 duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="h-4 w-4 me-2" />
              /james-coates-dev
            </a>
            <a
              href="https://github.com/James-Coates"
              className="border border-slate-300 dark:border-slate-700 text-slate-700 inline-flex items-center rounded-full px-4 py-2 text-sm hover:scale-105 hover:bg-slate-50 duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="h-4 w-4 me-2" />
              /james-coates
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 py-6">
        © {new Date().getFullYear()}
      </div>
    </div>
  );
}
