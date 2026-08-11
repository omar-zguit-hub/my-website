import { Link } from "react-router-dom";

const Home = () => { 

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0d1117] p-6">
      <div className="w-full max-w-4xl overflow-hidden rounded-3xl border border-zinc-700 bg-[#1e1e1e] shadow-2xl">
        {/* Browser / VS Code Header */}
        <div className="flex h-11 items-center justify-between border-b border-zinc-700 bg-[#181818] px-4">
          {/* Left */}
          <div className="flex items-center gap-3">
            {/* Window buttons */}
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>

            {/* File name */}
            <span className="ml-3 text-xs text-zinc-400">profile.js</span>
          </div>
        </div>

        {/* Code area */}
        <div className="overflow-x-auto bg-[#1e1e1e] px-2 py-6 font-mono text-lg leading-9">
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
                <span className="text-lg text-purple-400">const</span>

                <span className="mx-3 text-lg text-blue-400">developer</span>

                <span className="ml-1 text-lg text-zinc-300">=</span>

                <span className="ml-3 text-lg text-yellow-400">{"{"}</span>
              </div>

              {/* Line 2 */}
              <div className=" pl-8">
                <span className="text-lg text-sky-300">name</span>

                <span className="mx-3 text-lg text-zinc-300">:</span>

                <span className="text-lg text-orange-300">"Omar"</span>

                <span className=" text-lg text-zinc-300">,</span>
              </div>

              {/* Line 3 */}
              <div className=" pl-8">
                <span className="text-lg text-sky-300">email</span>

                <span className="mx-3 text-lg text-zinc-300">:</span>

                <span
                  onClick={() =>
                    (window.location.href = "mailto:omar0@gmail.com")
                  }
                  className="cursor-pointer text-lg text-orange-300 transition hover:text-orange-200 hover:underline"
                  title="Send email"
                >
                  "omar0@gmail.com"
                </span>

                <span className="text-lg text-zinc-300">,</span>
              </div>

              {/* Line 4 */}
              <div className=" pl-8">
                <span className="text-lg text-sky-300">field</span>

                <span className="mx-3 text-lg text-zinc-300">:</span>

                <span className="text-lg text-orange-300">
                  "Junior Fullstack Developer"
                </span>

                <span className="text-lg text-zinc-300">,</span>
              </div>

              {/* Line 5 */}
              <div className=" pl-8">
                <span className="text-lg text-sky-300">city</span>

                <span className="mx-3 text-lg text-zinc-300">:</span>

                <span className="text-lg text-orange-300">
                  "Tinghir - Drâa-Tafilalet"
                </span>

                <span className="text-lg text-zinc-300">,</span>
              </div>

              {/* Line 6 */}
              <div className="pl-8">
                <span className="text-lg text-sky-300">skills</span>
 

                <span className="ml-3 text-lg text-zinc-300">
                  : navigate("<Link className="hover:text-cyan-200 hover:underline" to="/skills">/skills</Link>")
                </span>

                <span className=" text-lg text-zinc-300">,</span>
              </div>

              {/* Line 7 */}
              <div className="pl-8">
                <span className="text-lg text-sky-300">projects</span>

                <span className="ml-3 text-lg text-zinc-300">
                  : navigate("<Link className="hover:text-cyan-200 hover:underline" to="/projects">/projects</Link>")
                </span>

                <span className="text-lg text-zinc-300">,</span>
              </div>

              {/* Line 8 */}
              <div className="pl-8">
                <span className="text-lg text-sky-300">moreAboutMe</span>
 

                <span className="ml-3 text-lg text-zinc-300">
                  : navigate("<Link className="hover:text-cyan-200 hover:underline" to="/about">/about</Link>")
                </span>

                <span className="text-lg text-zinc-300">,</span>
              </div>

              {/* Line 9 */}
              <div className="pl-8">
                <span className="text-lg text-sky-300">available</span>

                <span className="mx-3 text-lg text-zinc-300">:</span>

                <span className="text-lg text-blue-400">true</span>

                <span className="text-lg text-zinc-300">,</span>
              </div>

              {/* Line 10 */}
              <div className="pl-8">
                <span className="text-lg text-green-600">
                  // Always learning. Always building.
                </span>
              </div>

              {/* Line 11 */}
              <div>
                <span className="text-lg text-yellow-400">{"}"}</span>
                <span className="ml-2 animate-pulse text-lg text-zinc-400">
                  |
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
