import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import skills from "../assets/skills.png";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const EditorCard = ({ title, children, className = "" }) => {
  return (
    <section dir="ltr" className={`sticky min-h-screen md:w-full px-3 sm:px-4 md:px-6 pt-20 ${className}`}>
      <div className="mx-auto w-200 max-w-4xl h-[450px] overflow-hidden rounded-3xl border border-zinc-700 bg-[#1e1e1e] shadow-2xl">
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

      <EditorCard
        title={t("home.cards.profile")}
        className="sticky top-0 z-10 pt-6 pt-20"
      >
        <div className="flex mt-10">
          {/* Line Numbers */}
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

              <span className="mx-3 text-blue-400">
                developer
              </span>

              <span className="text-zinc-300">=</span>

              <span className="ml-3 text-yellow-400">{"{"}</span>
            </div>

            {/* Line 2 */}
            <div className="pl-8">
              <span className="text-sky-300">name</span>

              <span className="mx-3 text-zinc-300">:</span>

              <span className="text-orange-300">
                "{t("home.profile.name")}"
              </span>

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
                title="omar0@gmail.com"
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
                "{t("home.profile.field")}"
              </span>

              <span className="text-zinc-300">,</span>
            </div>

            {/* Line 5 */}
            <div className="pl-8">
              <span className="text-sky-300">city</span>

              <span className="mx-3 text-zinc-300">:</span>

              <span className="text-orange-300">
                "{t("home.profile.city")}"
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
              <span className="text-sky-300">about</span>

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
              <span className="text-sky-300">
                available
              </span>

              <span className="mx-3 text-zinc-300">:</span>

              <span className="text-blue-400">true</span>

              <span className="text-zinc-300">,</span>
            </div>

            {/* Line 10 */}
            <div className="pl-8">
              <span className="text-green-600">
                // {t("home.profile.comment")}
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

      {/* ================= PROJECTS ================= */}

      <EditorCard
        title={t("home.cards.projects")}
        className="sticky top-2 z-20 pt-10 ml-1"
      >
        <div className="flex gap-4 w-full overflow-x-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.name || i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.25,
              }}
              className="shrink-0 w-[80%]"
            >
              <img
                src={p.image}
                alt={p.name}
                className="block w-full h-auto object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </EditorCard>

      {/* ================= SKILLS ================= */}

      <EditorCard
        title={t("home.cards.skills")}
        className="sticky top-4 z-30 pt-20 ml-2"
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
        className="sticky top-20 z-50 pt-20 ml-3"
      >
        <div className="min-h-[400px] w-full flex flex-col items-center justify-center text-center px-8">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-[-0.01em] font-mono text-neutral-500">
            {t("home.principle.title")}
          </h1>

          <a
            href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-base md:text-lg tracking-wide text-neutral-500 hover:text-neutral-300 transition-colors duration-200 relative group"
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
