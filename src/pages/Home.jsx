import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import skills from "../assets/skills.png";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const EditorCard = ({ title, children, className = "" }) => {
  return (
    <section
      dir="ltr"
      className={`relative min-h-screen w-full px-2 sm:px-3 md:px-4 lg:px-6 pt-12 sm:pt-14 md:pt-16 lg:pt-20 ${className}`}
    >
      <div
        className="
  sticky top-0
  mx-auto
//   w-[calc(100%-24px)]
// max-w-[746px]
// max-h-[426px]
 w-[95%]
aspect-[5/3]

  max-w-4xl
  overflow-hidden
  rounded-3xl
  border border-zinc-700
  bg-[#1e1e1e]
  shadow-2xl
  mt-2
"
      >
        {/* VS Code Header */}
        <div className="flex h-9 sm:h-10 md:h-11 lg:h-12 items-center border-b border-zinc-700 bg-[#181818] px-2 sm:px-3 md:px-4">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 rounded-full bg-red-500/80" />
            <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 rounded-full bg-yellow-500/80" />
            <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 rounded-full bg-green-500/80" />
          </div>

          <span className="ml-3 sm:ml-4 md:ml-6 text-[10px] sm:text-xs md:text-sm text-zinc-400">
            {title}
          </span>
        </div>
        {/* Content */}
        <div className="flex-1 min-h-0 w-full overflow-hidden bg-[#1e1e1e]">
          {children}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen w-full bg-[#0d1117]">
      {/* ================= PROFILE ================= */}

      <EditorCard title={t("home.cards.profile")} className="sticky top-0 z-10">
        <div className="flex mt-3 sm:mt-4 md:mt-5 pb-3 sm:pb-4 md:pb-5">
          {/* Line Numbers */}
          <div className="w-8 sm:w-8 md:w-12 lg:w-16 shrink-0 select-none pr-1 sm:pr-2 md:pr-3 lg:pr-5 text-right text-xs sm:text-sm md:text-base lg:text-lg text-zinc-600">
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
          <div className="whitespace-nowrap text-xs sm:text-lg md:text-lg lg:text-lg overflow-x-auto">
            {/* Line 1 */}
            <div>
              <span className="text-purple-400">const</span>

              <span className="mx-1.5 sm:mx-2 md:mx-3 text-blue-400">
                developer
              </span>

              <span className="text-zinc-300">=</span>

              <span className="ml-1.5 sm:ml-2 md:ml-3 text-yellow-400">
                {"{"}
              </span>
            </div>

            {/* Line 2 */}
            <div className="pl-4 sm:pl-5 md:pl-6 lg:pl-8">
              <span className="text-sky-300">name</span>

              <span className="mx-1.5 sm:mx-2 md:mx-3 text-zinc-300">:</span>

              <span className="text-orange-300">
                "{t("home.profile.name")}"
              </span>

              <span className="text-zinc-300">,</span>
            </div>

            {/* Line 3 */}
            <div className="pl-4 sm:pl-5 md:pl-6 lg:pl-8">
              <span className="text-sky-300">email</span>

              <span className="mx-1.5 sm:mx-2 md:mx-3 text-zinc-300">:</span>

              <span
                onClick={() =>
                  (window.location.href = "mailto:omar0@gmail.com")
                }
                className="cursor-pointer text-orange-300 transition hover:text-orange-200 hover:underline"
                title="omar0@gmail.com"
              >
                "omar0@gmail.com"
              </span>

              <span className="text-zinc-300">,</span>
            </div>

            {/* Line 4 */}
            <div className="pl-4 sm:pl-5 md:pl-6 lg:pl-8">
              <span className="text-sky-300">field</span>

              <span className="mx-1.5 sm:mx-2 md:mx-3 text-zinc-300">:</span>

              <span className="text-orange-300">
                "{t("home.profile.field")}"
              </span>

              <span className="text-zinc-300">,</span>
            </div>

            {/* Line 5 */}
            <div className="pl-4 sm:pl-5 md:pl-6 lg:pl-8">
              <span className="text-sky-300">city</span>

              <span className="mx-1.5 sm:mx-2 md:mx-3 text-zinc-300">:</span>

              <span className="text-orange-300">
                "{t("home.profile.city")}"
              </span>

              <span className="text-zinc-300">,</span>
            </div>

            {/* Line 6 */}
            <div className="pl-4 sm:pl-5 md:pl-6 lg:pl-8">
              <span className="text-sky-300">skills</span>

              <span className="ml-1.5 sm:ml-2 md:ml-3 text-zinc-300">
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
            <div className="pl-4 sm:pl-5 md:pl-6 lg:pl-8">
              <span className="text-sky-300">projects</span>

              <span className="ml-1.5 sm:ml-2 md:ml-3 text-zinc-300">
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
            <div className="pl-4 sm:pl-5 md:pl-6 lg:pl-8">
              <span className="text-sky-300">about</span>

              <span className="ml-1.5 sm:ml-2 md:ml-3 text-zinc-300">
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
            <div className="pl-4 sm:pl-5 md:pl-6 lg:pl-8">
              <span className="text-sky-300">available</span>

              <span className="mx-1.5 sm:mx-2 md:mx-3 text-zinc-300">:</span>

              <span className="text-blue-400">true</span>

              <span className="text-zinc-300">,</span>
            </div>

            {/* Line 10 */}
            <div className="pl-4 sm:pl-5 md:pl-6 lg:pl-8">
              <span className="text-green-600">
                // {t("home.profile.comment")}
              </span>
            </div>

            {/* Line 11 */}
            <div>
              <span className="text-yellow-400">{"}"}</span>

              <span className="ml-1 sm:ml-2 animate-pulse text-zinc-400">
                |
              </span>
            </div>
          </div>
        </div>
      </EditorCard>

      {/* ================= PROJECTS ================= */}

      <EditorCard
        title={t("home.cards.projects")}
        className="sticky top-2 z-20 pt-6 sm:pt-8 md:pt-10 lg:pt-12 ml-0 sm:ml-1 max-sm:mt-8"
      >
        <div className="flex gap-2 sm:gap-3 md:gap-4 w-full overflow-x-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.name || i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.25,
              }}
              className="shrink-0 w-[88%] sm:w-[82%] md:w-[78%] lg:w-[75%]"
            >
              <img
                src={p.image}
                alt={p.name}
                className="block w-full h-full object-cover rounded-md sm:rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </EditorCard>

      {/* ================= SKILLS ================= */}

      <EditorCard
        title={t("home.cards.skills")}
        className="sticky top-4 z-30 pt-12 sm:pt-14 md:pt-16 lg:pt-20 ml-0 sm:ml-1 md:ml-2 max-sm:mt-8"
      >
        <div className="h-full w-full">
          <img
            src={skills}
            alt={t("home.cards.skills")}
            className="block h-full w-full object-cover"
          />
        </div>
      </EditorCard>

      {/* ================= PRINCIPLE ================= */}

      <EditorCard
        title={t("home.cards.principle")}
        className="
    z-30
    pt-12 sm:pt-14 md:pt-16 lg:pt-20
    ml-0 sm:ml-1 md:ml-2 lg:ml-3
    max-sm:mt-8
  "
      >
        <div className="min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px] w-full flex flex-col items-center justify-center text-center px-3 sm:px-4 md:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold tracking-[-0.01em] font-mono text-neutral-500">
            {t("home.principle.title")}
          </h1>

          <a
            href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg tracking-wide text-neutral-500 hover:text-neutral-300 transition-colors duration-200 relative group"
          >
            <span className="text-neutral-600">"</span>

            <span className="group-hover:underline underline-offset-4">
              {t("home.principle.text")}
            </span>

            <span className="text-neutral-600">"</span>
          </a>
        </div>
      </EditorCard>
    </main>
  );
};

export default Home;
