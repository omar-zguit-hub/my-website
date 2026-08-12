import { Link } from "react-router-dom";

const EditorCard = ({ title, children, className = "" }) => {
  return (
    <section className={`sticky min-h-screen w-full px-6 pt-20 ${className}`}>
      <div className="mx-auto w-full max-w-4xl h-[450px] overflow-hidden rounded-3xl border border-zinc-700 bg-[#1e1e1e] shadow-2xl">
        {/* VS Code Header */}
        <div className="flex h-11 items-center border-b border-zinc-700 bg-[#181818] px-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>

          <span className="ml-6 text-xs text-zinc-400">{title}</span>
        </div>

        {/* Content */}
        <div className="bg-[#1e1e1e] px-2 py-6 font-mono text-lg leading-9">
          {children}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <main className="min-h-screen w-full bg-[#0d1117]">
      {/* CARD 1 — PROFILE */}
      <EditorCard title="profile.js" className="sticky top-0 z-10 pt-6 pt-20 ">
        <div className="flex">
          {/* Line numbers */}
          <div className="w-16 shrink-0 select-none pr-5 text-right text-lg text-zinc-600">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
          </div>

          {/* Code */}
          <div className="whitespace-nowrap text-lg">
            {/* Line 1 */}
            <div>
              <span className="text-purple-400">const</span>

              <span className="mx-3 text-blue-400">developer</span>

              <span className="text-zinc-300">=</span>

              <span className="ml-3 text-yellow-400">{"{"}</span>
            </div>

            {/* Line 2 */}
            <div className="pl-8">
              <span className="text-sky-300">name</span>

              <span className="mx-3 text-zinc-300">:</span>

              <span className="text-orange-300">"Omar"</span>

              <span className="text-zinc-300">,</span>
            </div>

            {/* Line 3 */}
            <div className="pl-8">
              <span className="text-sky-300">email</span>

              <span className="mx-3 text-zinc-300">:</span>

              <span
                onClick={() =>
                  (window.location.href = "mailto:omar0@gmail.com")
                }
                className="cursor-pointer text-orange-300 transition hover:text-orange-200 hover:underline"
                title="Send email"
              >
                "omar0@gmail.com"
              </span>

              <span className="text-zinc-300">,</span>
            </div>

            {/* Line 4 */}
            <div className="pl-8">
              <span className="text-sky-300">field</span>

              <span className="mx-3 text-zinc-300">:</span>

              <span className="text-orange-300">
                "Junior Fullstack Developer"
              </span>

              <span className="text-zinc-300">,</span>
            </div>

            {/* Line 5 */}
            <div className="pl-8">
              <span className="text-sky-300">city</span>

              <span className="mx-3 text-zinc-300">:</span>

              <span className="text-orange-300">
                "Tinghir - Drâa-Tafilalet"
              </span>

              <span className="text-zinc-300">,</span>
            </div>

            {/* Line 6 */}
            <div className="pl-8">
              <span className="text-sky-300">skills</span>

              <span className="ml-3 text-zinc-300">
                : navigate("
                <Link
                  className="hover:text-cyan-200 hover:underline"
                  to="/skills"
                >
                  /skills
                </Link>
                ")
              </span>

              <span className="text-zinc-300">,</span>
            </div>

            {/* Line 7 */}
            <div className="pl-8">
              <span className="text-sky-300">projects</span>

              <span className="ml-3 text-zinc-300">
                : navigate("
                <Link
                  className="hover:text-cyan-200 hover:underline"
                  to="/projects"
                >
                  /projects
                </Link>
                ")
              </span>

              <span className="text-zinc-300">,</span>
            </div>

            {/* Line 8 */}
            <div className="pl-8">
              <span className="text-sky-300">moreAboutMe</span>

              <span className="ml-3 text-zinc-300">
                : navigate("
                <Link
                  className="hover:text-cyan-200 hover:underline"
                  to="/about"
                >
                  /about
                </Link>
                ")
              </span>

              <span className="text-zinc-300">,</span>
            </div>

            {/* Line 9 */}
            <div className="pl-8">
              <span className="text-sky-300">available</span>

              <span className="mx-3 text-zinc-300">:</span>

              <span className="text-blue-400">true</span>

              <span className="text-zinc-300">,</span>
            </div>

            {/* Line 10 */}
            <div className="pl-8">
              <span className="text-green-600">
                // Always learning. Always building.
              </span>
            </div>

            {/* Line 11 */}
            <div>
              <span className="text-yellow-400">{"}"}</span>

              <span className="ml-2 animate-pulse text-zinc-400">|</span>
            </div>
          </div>
        </div>
      </EditorCard>

      {/* CARD 2 — PROJECTS */}
      <EditorCard title="projects.js" className="sticky top-2 z-20 pt-10 ml-1">
        <div className="p-8">
          <div>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-400">projects</span>{" "}
            <span className="text-zinc-300">=</span>{" "}
            <span className="text-yellow-400">[</span>
          </div>

          <div className="mt-4 pl-8">
            <span className="text-yellow-400">{"{"}</span>
          </div>

          <div className="pl-16">
            <span className="text-sky-300">name</span>

            <span className="mx-3 text-zinc-300">:</span>

            <span className="text-orange-300">"HousTalib"</span>

            <span className="text-zinc-300">,</span>
          </div>

          <div className="pl-16">
            <span className="text-sky-300">type</span>

            <span className="mx-3 text-zinc-300">:</span>

            <span className="text-orange-300">"Full-Stack Application"</span>
          </div>

          <div className="pl-16">
            <span className="text-sky-300">stack</span>

            <span className="mx-3 text-zinc-300">:</span>

            <span className="text-orange-300">"React + Laravel + MySQL"</span>
          </div>

          <div className="pl-8">
            <span className="text-yellow-400">{"}"}</span>
          </div>

          <div className="mt-4">
            <span className="text-yellow-400">]</span>
          </div>
        </div>
      </EditorCard>

      {/* CARD 3 — SKILLS */}
      <EditorCard title="skills.js" className="sticky top-4 z-30 pt-20 ml-2">
        <div className="p-8">
          <div>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-400">skills</span>{" "}
            <span className="text-zinc-300">=</span>{" "}
            <span className="text-yellow-400">{"{"}</span>
          </div>

          <div className="mt-4 pl-8">
            <span className="text-sky-300">frontend</span>

            <span className="mx-3 text-zinc-300">:</span>

            <span className="text-orange-300">
              ["React", "JavaScript", "HTML", "CSS"]
            </span>
          </div>

          <div className="pl-8">
            <span className="text-sky-300">backend</span>

            <span className="mx-3 text-zinc-300">:</span>

            <span className="text-orange-300">
              ["Laravel", "PHP", "MySQL", "REST API"]
            </span>
          </div>

          <div>
            <span className="text-yellow-400">{"}"}</span>
          </div>
        </div>
      </EditorCard>

      {/* CARD 4 — ABOUT */}
      <EditorCard title="about.js" className="sticky top-20 z-50 pt-20 ml-3">
        <div className="p-8">
          <div>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-400">aboutMe</span>{" "}
            <span className="text-zinc-300">=</span>{" "}
            <span className="text-yellow-400">{"{"}</span>
          </div>

          <div className="mt-4 pl-8">
            <span className="text-sky-300">role</span>

            <span className="mx-3 text-zinc-300">:</span>

            <span className="text-orange-300">
              "Junior Fullstack Developer"
            </span>
          </div>

          <div className="pl-8">
            <span className="text-sky-300">passion</span>

            <span className="mx-3 text-zinc-300">:</span>

            <span className="text-orange-300">"Building web applications"</span>
          </div>

          <div>
            <span className="text-yellow-400">{"}"}</span>
          </div>
        </div>
      </EditorCard>
    </main>
  );
};

export default Home;
