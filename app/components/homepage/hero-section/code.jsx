// @flow strict



function Code() {
  return (
    <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
    <code className="font-mono text-xs md:text-sm lg:text-base">
      <div className="blink">
        <span className="mr-2 text-pink-500">const</span>
        <span className="mr-2 text-white">coder</span>
        <span className="mr-2 text-pink-500">=</span>
        <span className="text-gray-400">{"{"}</span>
      </div>
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
        <span className="text-gray-400">{`'`}</span>
        <span className="text-amber-300">MD Readul Islam</span>
        <span className="text-gray-400">{`',`}</span>
      </div>
      <div className="ml-4 lg:ml-8 mr-2">
        <span className=" text-white">skills:</span>
        <span className="text-gray-400">{`['`}</span>
        <span className="text-amber-300">React</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">NextJS</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">Redux</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">Express</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">PostgreSQL</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">MySql</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">MongoDB</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">Docker</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">AWS</span>
        <span className="text-gray-400">{"'],"}</span>
      </div>
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-white">
          hardWorker:
        </span>
        <span className="text-orange-400">true</span>
        <span className="text-gray-400">,</span>
      </div>
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-white">
          quickLearner:
        </span>
        <span className="text-orange-400">true</span>
        <span className="text-gray-400">,</span>
      </div>
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-white">
          problemSolver:
        </span>
        <span className="text-orange-400">true</span>
        <span className="text-gray-400">,</span>
      </div>
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-green-400">
          hireable:
        </span>
        <span className="text-orange-400">function</span>
        <span className="text-gray-400">{"() {"}</span>
      </div>
      <div>
        <span className="ml-8 lg:ml-16 mr-2 text-orange-400">
          return
        </span>
        <span className="text-gray-400">{`(`}</span>
      </div>
      <div>
        <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
        <span className="mr-2 text-white">hardWorker</span>
        <span className="text-amber-300">&amp;&amp;</span>
      </div>
      <div>
        <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
        <span className="mr-2 text-white">problemSolver</span>
        <span className="text-amber-300">&amp;&amp;</span>
      </div>
      <div>
        <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
        <span className="mr-2 text-white">skills.length</span>
        <span className="mr-2 text-amber-300">&gt;=</span>
        <span className="text-orange-400">5</span>
      </div>
      <div>
        <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
      </div>
      <div>
        <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
      </div>
      <div>
        <span className="text-gray-400">{`};`}</span>
      </div>
    </code>
  </div>
  );
}

export default Code;
