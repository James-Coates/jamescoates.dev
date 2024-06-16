import {
  BriefcaseIcon,
  CalendarDaysIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/16/solid";
import type { MetaFunction } from "@remix-run/node";
import GithubIcon from "~/components/github-icon";
import LinkedinIcon from "~/components/linkedin-icon";

export const meta: MetaFunction = () => {
  return [
    { title: "James Coates - Lead Front End Developer" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const EXPERIENCE = [
  {
    title: "Mediamaker",
    role: "Lead Front-End Developer",
    location: "UK Remote",
    startDate: "Jun 22",
    endDate: "Present",
    description:
      "Lead a team of four front-end developers in building a client portal for Lockton, a leading global insurance broker.",
    technologies: ["Angular", "NgRx", "Nx", "Angular Material", "RxJS"],
    responsibilities: [
      "Architected the entire application, including a scalable Nx mono repo setup and optimised state management using NgRx.",
      "Developed the internal forms package to manage insurance renewals and onboarding for all Lockton partners.",
      "Built a browser based document editor for the generation of custom reports and general marketing material",
      "Created the Lockton UI library leveraging Angular Material CDK",
    ],
  },
  {
    title: "Mediamaker",
    role: "Front-End Developer",
    location: "UK Remote",
    startDate: "March 20",
    endDate: "June 22",
    description:
      "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
  },
];

export default function Resume() {
  return (
    <>
      <div className="font-sans pt-32 p-4 max-w-6xl mx-auto pb-20">
        <div className="absolute -z-10 top-0 left-0 right-0 h-[360px] w-full bg-white dark:bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        <div className="relative text-center">
          <div className="absolute -z-10 -top-[400px] -left-20 w-[700px] h-[600px] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 "></div>
          <div className="absolute -z-10 -top-[400px] -right-20 w-[700px] h-[600px] bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 "></div>
          <h1 className="text-7xl font-extrabold mb-3">James Coates</h1>
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

        <div className="h-[1px] bg-slate-200 my-12"></div>

        <div className="flex">
          <div className="w-full max-w-64">
            <h2 className="text-2xl font-extrabold mb-8">Experience</h2>
          </div>

          <ol className="relative border-s border-gray-200 dark:border-gray-700 ps-2">
            {EXPERIENCE.map((job, i) => (
              <li key={i} className="mb-10 ms-8 last:mb-0">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-slate-100 rounded-full -start-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <BriefcaseIcon className="h-5 w-5 text-slate-400 dark:text-gray-400" />
                </span>

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="flex items-center mb-2 text-2xl  text-gray-900 dark:text-white">
                      <span className="font-semibold">{job.title}</span> -{" "}
                      {job.role} ({job.location})
                    </h3>

                    {job.technologies && (
                      <div className="flex space-x-2 mb-3">
                        {job.technologies.map((technology) => (
                          <div
                            key={technology}
                            className="bg-slate-100 text-sm rounded px-2 py-1 font-medium text-slate-500"
                          >
                            {technology}
                          </div>
                        ))}
                      </div>
                    )}

                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      {job.description}
                    </p>
                  </div>
                  <div className="flex pt-2 w-64 text-end justify-end items-center mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    <CalendarDaysIcon className="h-5 w-5 me-1" />
                    <span>
                      {job.startDate} - {job.endDate}
                    </span>
                  </div>
                </div>

                {job.responsibilities && (
                  <ul>
                    {job.responsibilities.map((responsibility, i) => (
                      <li key={i} className="flex mb-2">
                        <span className="bg-slate-200 h-3 w-3 rounded mt-1 me-4"></span>
                        <div className="flex-1">{responsibility}</div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </div>

        <div className="h-[1px] bg-slate-200 my-20"></div>

        <div className="flex">
          <div className="w-full max-w-64">
            <h2 className="text-2xl font-extrabold mb-8">Side projects</h2>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <h3 className="text-2xl font-semibold">Hired.mt</h3>
              <div className="ms-3 flex items-center bg-purple-100 border border-purple-200 text-purple-700 font-medium rounded-full text-xs px-2 py-1">
                <span className="h-2 w-2 bg-purple-400 rounded-full me-1"></span>
                Coming soon
              </div>
            </div>
            <p className="font-normal text-gray-500 dark:text-gray-400">
              A job board and application tracking system targeting the Maltese
              market. Planned launch Q3 2024
            </p>
          </div>
        </div>

        <div className="h-[1px] bg-slate-200 my-20"></div>

        <div className="flex">
          <div className="w-full max-w-64">
            <h2 className="text-2xl font-extrabold mb-8">Education</h2>
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="flex flex-1 items-center mb-2 text-2xl  text-gray-900 dark:text-white">
                  <span className="font-semibold">CareerFoundry</span>–
                  Full-Stack Web Development
                </h3>
              </div>
              <div className="flex pt-2 w-64 text-end justify-end items-center mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                <CalendarDaysIcon className="h-5 w-5 me-1" />
                <span>2019</span>
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h3 className="mb-2 text-2xl  text-gray-900 dark:text-white">
                  <span className="font-semibold">Newcastle University</span>–
                  MEng Mechanical Engineering (1st Class Hons)
                </h3>
              </div>
              <div className="flex pt-2 w-64 text-end justify-end items-center mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                <CalendarDaysIcon className="h-5 w-5 me-1" />
                <span>2019</span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-slate-200 my-20"></div>

        <div className="flex">
          <div className="w-full max-w-64">
            <h2 className="text-2xl font-extrabold mb-8">Skills & Tools</h2>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <h3 className="text-2xl font-extrabold">Hired.mt</h3>
              <div className="ms-3 flex items-center bg-purple-100 border border-purple-200 text-purple-700 font-medium rounded-full text-xs px-2 py-1">
                <span className="h-2 w-2 bg-purple-400 rounded-full me-1"></span>
                Coming soon
              </div>
            </div>
            <p className="font-normal text-gray-500 dark:text-gray-400">
              A job board and application tracking system targeting the Maltese
              market. Planned launch Q3 2024
            </p>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-slate-500">
        © {new Date().getFullYear()}
      </div>
    </>
  );
}
