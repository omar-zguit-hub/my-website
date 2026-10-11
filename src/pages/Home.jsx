import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
import skillsVisual from "../assets/skills.png";
import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";

const Home = () => {
  const { t, i18n } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const revealProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.45, ease: "easeOut" },
      };

  const architectureSteps = [
    {
      id: "frontend",
      title: t("home.architecture.steps.frontend.title"),
      description: t("home.architecture.steps.frontend.description"),
    },
    {
      id: "api",
      title: t("home.architecture.steps.api.title"),
      description: t("home.architecture.steps.api.description"),
    },
    {
      id: "backend",
      title: t("home.architecture.steps.backend.title"),
      description: t("home.architecture.steps.backend.description"),
    },
    {
      id: "database",
      title: t("home.architecture.steps.database.title"),
      description: t("home.architecture.steps.database.description"),
    },
    {
      id: "response",
      title: t("home.architecture.steps.response.title"),
      description: t("home.architecture.steps.response.description"),
    },
  ];

  return (
    <>
      <SEO
        title={
          i18n.language === "ar"
            ? "عمر زكيط | مطور ويب Full-Stack مبتدئ"
            : "Omar Zguit | Développeur Web Full-Stack Junior"
        }
        description={
          i18n.language === "ar"
            ? "الموقع الشخصي لعمر زكيط، مطور ويب Full-Stack مبتدئ متخصص في React وJavaScript وLaravel وتطوير تطبيقات الويب الحديثة."
            : "Portfolio d'Omar Zguit, développeur web Full-Stack junior spécialisé en React, JavaScript, Laravel et développement d'applications web modernes."
        }
        canonical="https://omarzguit.me"
      />

      <main className="min-h-screen w-full bg-[#0d1117] text-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-16">
          <motion.section
            {...revealProps}
            className="mb-16 sm:mb-20 lg:mb-24"
            aria-labelledby="profile-heading"
          >
            <div className="mb-6 flex items-center justify-between gap-3">
              <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-200">
                {t("home.profile.label")}
              </span>
            </div>

            <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                    {t("home.profile.eyebrow")}
                  </p>
                  <h1
                    id="profile-heading"
                    className="max-w-xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-[4rem] lg:leading-[0.95]"
                  >
                    {t("home.profile.heading")}
                  </h1>
                  <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                    {t("home.profile.intro")}
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-700/80 bg-[#111827]/80 shadow-[0_30px_70px_rgba(15,23,42,0.45)] backdrop-blur-sm">
                  <div className="flex items-center gap-2 border-b border-slate-700 bg-[#181f2b] px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-[11px] font-medium uppercase tracking-[0.15em] text-slate-400">
                      {t("home.profile.editorTitle")}
                    </span>
                  </div>

                  <div
                    dir={i18n.language === "ar" ? "rtl" : "ltr"}
                    className="grid grid-cols-[auto_1fr] gap-3 px-4 py-5 sm:px-5 sm:py-6"
                  >
                    <div className="select-none text-right text-xs leading-7 text-slate-600 sm:text-sm">
                      {Array.from({ length: 11 }, (_, i) => (
                        <div key={i}>{i + 1}</div>
                      ))}
                    </div>

                    <div className="space-y-1 font-mono text-[10px] leading-7 text-slate-100 sm:text-[13px]">
                      <div>
                        <span className="text-violet-400">const</span>
                        <span className="mx-1.5 text-sky-300">developer</span>
                        <span className="text-slate-300">=</span>
                        <span className="ml-1.5 text-amber-300">{`{`}</span>
                      </div>

                      <div className="pl-3 sm:pl-4">
                        <span className="text-sky-300">name</span>
                        <span className="mx-2 text-slate-300">:</span>
                        <span className="text-orange-300">
                          "{t("home.profile.name")}"
                        </span>
                        <span className="text-slate-300">,</span>
                      </div>

                      <div className="pl-3 sm:pl-4">
                        <span className="text-sky-300">role</span>
                        <span className="mx-2 text-slate-300">:</span>
                        <span className="text-orange-300">
                          "{t("home.profile.field")}"
                        </span>
                        <span className="text-slate-300">,</span>
                      </div>

                      <div className="pl-3 sm:pl-4">
                        <span className="text-sky-300">location</span>
                        <span className="mx-2 text-slate-300">:</span>
                        <span className="text-orange-300">
                          "{t("home.profile.city")}"
                        </span>
                        <span className="text-slate-300">,</span>
                      </div>

                      <div className="pl-3 sm:pl-4">
                        <span className="text-sky-300">technologies</span>
                        <span className="mx-2 text-slate-300">:</span>
                        <span className="text-amber-300">[</span>
                        <span className="text-orange-300">"React"</span>
                        <span className="text-slate-300">,</span>
                        <span className="text-orange-300"> "JavaScript"</span>
                        <span className="text-slate-300">,</span>
                        <span className="text-orange-300"> "Laravel"</span>
                        <span className="text-slate-300">,</span>
                        <span className="text-orange-300"> "MySQL"</span>
                        <span className="text-amber-300">]</span>
                        <span className="text-slate-300">,</span>
                      </div>

                      <div className="pl-3 sm:pl-4">
                        <span className="text-sky-300">interests</span>
                        <span className="mx-2 text-slate-300">:</span>
                        <span className="text-amber-300">[</span>
                        <span className="text-orange-300">
                          "Web Development"
                        </span>
                        <span className="text-slate-300">,</span>
                        <span className="text-orange-300">
                          {" "}
                          "Problem Solving"
                        </span>
                        <span className="text-amber-300">]</span>
                        <span className="text-slate-300">,</span>
                      </div>

                      <div className="pl-3 sm:pl-4">
                        <span className="text-sky-300">email</span>
                        <span className="mx-2 text-slate-300">:</span>
                        <button
                          type="button"
                          onClick={() =>
                            (window.location.href = "mailto:omar0@gmail.com")
                          }
                          className="text-orange-300 transition hover:text-orange-200 hover:underline"
                          title="omar0@gmail.com"
                        >
                          "omar0@gmail.com"
                        </button>
                        <span className="text-slate-300">,</span>
                      </div>

                      <div className="pl-3 sm:pl-4">
                        <span className="text-sky-300">available</span>
                        <span className="mx-2 text-slate-300">:</span>
                        <span className="text-blue-400">true</span>
                        <span className="text-slate-300">,</span>
                      </div>

                      <div className="pl-3 sm:pl-4">
                        <span className="text-emerald-400">
                          // {t("home.profile.comment")}
                        </span>
                      </div>

                      <div>
                        <span className="text-amber-300">{`}`}</span>
                        <span className="ml-2 inline-block animate-pulse text-slate-400">
                          |
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-4 py-2.5 text-sm font-medium text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-500/20"
                  >
                    {t("home.profile.cta.projects")}
                  </Link>
                  <Link
                    to="/skills"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-600 bg-slate-800/80 px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-700/80"
                  >
                    {t("home.profile.cta.skills")}
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-600 bg-slate-800/80 px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-700/80"
                  >
                    {t("home.profile.cta.about")}
                  </Link>
                </div>
              </div>

              <motion.div
                {...revealProps}
                className="flex items-center justify-center"
              >
                <div className="relative w-full max-w-[28rem]">
                  <div className="absolute inset-4 rounded-full bg-cyan-500/10 blur-3xl" />
                  <div className="relative overflow-hidden rounded-full border border-slate-700 bg-[#202633] p-3 shadow-[0_40px_80px_rgba(14,165,233,0.10)]">
                    <div className="overflow-hidden rounded-full border border-slate-600 bg-slate-800">
                      <img
                        src={profile}
                        alt={t("home.profile.portraitAlt")}
                        className="block h-[320px] w-full object-cover sm:h-[380px] lg:h-[460px]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            {...revealProps}
            className="mb-16 sm:mb-20 lg:mb-24"
            aria-labelledby="projects-heading"
          >
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <h2
                  id="projects-heading"
                  className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl"
                >
                  {t("home.sections.projects")}
                </h2>
              </div>
              <Link
                to="/projects"
                className="hidden text-sm text-cyan-300 transition hover:text-cyan-200 sm:inline-flex"
              >
                {t("home.profile.cta.projects")}
              </Link>
            </div>

            <div className="overflow-x-auto pb-3 [scrollbar-color:#475569_#0f172a] [scrollbar-width:thin]">
              <div className="flex min-w-max gap-4 sm:gap-5">
                {projects.map((project, index) => (
                  <motion.article
                    key={project.slug}
                    {...(shouldReduceMotion
                      ? {}
                      : {
                          initial: { opacity: 0, y: 18 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: true, amount: 0.2 },
                          transition: {
                            duration: 0.45,
                            delay: index * 0.08,
                            ease: "easeOut",
                          },
                        })}
                    className="group w-[82vw] shrink-0 sm:w-[58vw] lg:w-[34vw]"
                  >
                    <Link
                      to={`/project/${project.slug}`}
                      className="block overflow-hidden rounded-[1.5rem] border border-slate-700/80 bg-[#111827]/70 p-2 transition duration-300 hover:border-cyan-500/40 hover:bg-[#101a2a]"
                    >
                      <div className="overflow-hidden rounded-[1.1rem] border border-slate-700/80 bg-slate-900">
                        <img
                          src={project.image}
                          alt={t(project.images?.[0]?.alt || project.slug)}
                          className="block h-[220px] w-full object-cover transition duration-500 group-hover:scale-[1.04] sm:h-[260px] lg:h-[300px]"
                        />
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            {...revealProps}
            className="mb-16 sm:mb-20 lg:mb-24"
            aria-labelledby="architecture-heading"
          >
            <div className="grid gap-8 rounded-[2rem] border border-slate-700/80 bg-[#0d1621] p-5 shadow-[0_30px_60px_rgba(15,23,42,0.35)] sm:p-7 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-700 bg-slate-950/70 p-3">
                <img
                  src={skillsVisual}
                  alt={t("home.architecture.diagramAlt")}
                  className="block h-full w-full rounded-[1.1rem] object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-cyan-300/80">
                  {t("home.architecture.eyebrow")}
                </p>
                <h2
                  id="architecture-heading"
                  className="mb-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl"
                >
                  {t("home.architecture.title")}
                </h2>
                <p className="mb-5 max-w-xl text-base leading-7 text-slate-300">
                  {t("home.architecture.intro")}
                </p>

                <div className="space-y-3">
                  {architectureSteps.map((step) => (
                    <div
                      key={step.id}
                      className="rounded-xl border border-slate-700/70 bg-slate-900/60 p-3 sm:p-4"
                    >
                      <div className="mb-1 flex items-center justify-between gap-3">
                        <span className="text-sm font-semibold text-cyan-200">
                          {step.title}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                          {step.id}
                        </span>
                      </div>
                      <p className="text-sm leading-6 text-slate-300">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            {...revealProps}
            className="pb-2"
            aria-labelledby="dry-heading"
          >
            <div className="rounded-[2rem] border border-slate-700/80 bg-[#111827]/70 px-5 py-10 text-center shadow-[0_30px_80px_rgba(15,23,42,0.3)] sm:px-7 lg:px-8">
              <a
                href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition hover:text-cyan-200"
              >
                <h2
                  id="dry-heading"
                  className="text-5xl font-bold tracking-[-0.06em] text-slate-100 sm:text-6xl lg:text-8xl"
                >
                  DRY
                </h2>
                <p className="mt-3 text-base tracking-[0.08em] text-slate-300 sm:text-lg">
                  "Don't Repeat Yourself"
                </p>
              </a>

              <p className="mx-auto mt-6 max-w-xl text-sm text-slate-400 sm:text-base">
                Discover the principle behind cleaner, more maintainable code.
              </p>
            </div>
          </motion.section>
        </div>
      </main>
    </>
  );
};

export default Home;
