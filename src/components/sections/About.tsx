import { RevealOnScroll } from "../RevealOnScroll";
import { frontendSkills, backendSkills } from "../../constant/data";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl  mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border transition-all hover:-translate-y-1">
            <p className="text-gray-300 mb-6">
              Aspiring Frontend Developer with a Computer Science background
              with hands-on experience in frontend development. I’m passionate
              about crafting clean, responsive, and user-focused web
              applications. With a strong foundation in modern technologies and
              a drive to solve real-world problems through code, I’m actively
              growing my skills to become a professional Frontend Developer and
              contribute to impactful digital solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <div className="flex flex-wrap gap-2 bg-blue-500/10 border border-blue-500/50 rounded py-2 px-3 hover:-translate-y-0.5 transition-all">
                      <img
                        src={tech.img}
                        alt="skill-icon"
                        className="w-7 h-8 object-contain rounded-sm"
                      />
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-[14px] hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]"
                      >
                        {tech.skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <div className="flex flex-wrap gap-2 bg-blue-500/10 border border-blue-500/50 rounded py-2 px-3 hover:-translate-y-0.5 transition-all">
                      <img
                        src={tech.img}
                        alt="skill-icon"
                        className="w-7 h-8 object-contain rounded-sm"
                      />
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-[14px] hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]"
                      >
                        {tech.skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech in Computer Science Engineering</strong>
                  <br /> GLA University - (2019 - 2023)
                </li>
                <li>
                  <strong>Web Development (MERN stack)</strong>
                  <br />
                  Croma Campus - (2024)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4>
                    Software Developer Trainee at Devtrust (June 2024 - Nov
                    2024)
                  </h4>
                  <ul className="list-disc list-inside space-y-4 mt-4">
                    <li>
                      Collaborated on building responsive front-end components
                      using modern web technologies
                    </li>
                    <li>
                      Integrated RESTful APIs to enhance application
                      functionality
                    </li>
                    <li>
                      Contributed to UI maintenance, enhancements, and bug fixes
                      based on client feedback
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
