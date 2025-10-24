import Link from "next/link";
import Image from "next/image";

import { projectsData } from "@/lib/data";

export const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="h2">Selected works</h2>
        <ul className="mt-10 md:mt-16 lg:mt-20">
          {projectsData.map(({ id, title, link, image }) => (
            <li key={id}>
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/project flex flex-col border-t last:border-b border-stone-400 border-dotted py-6 md:py-8 lg:py-10"
              >
                <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-700 bg-stone-300" />
                <div className="relative">
                  <div className="aspect-video md:hidden">
                    <Image
                      src={image}
                      alt={`${title} image`}
                      className="size-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-8 md:mt-0 flex items-center justify-between md:grid md:grid-cols-[1fr_300px_max-content] md:gap-8">
                    <div className="lg:group-hover/project:pl-8 transition-all duration-700">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl">
                        {title}
                      </h3>
                    </div>
                    <div className="relative">
                      <div className="absolute z-10 top-1/2 -translate-y-1/2 aspect-video w-full opacity-0 scale-90 group-hover/project:opacity-100 group-hover/project:scale-100 lg:group-hover/project:scale-110 transition-all duration-500">
                        <Image
                          src={image}
                          alt={`${title} image`}
                          className="size-full object-cover object-top"
                        />
                      </div>
                    </div>
                    <div className="lg:group-hover/project:pr-8 transition-all duration-700">
                      <div className="size-6 overflow-hidden">
                        <div className="h-6 w-12 flex group-hover/project:-translate-x-1/2 transition-transform duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
