import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function AboutSection() {
  return (
    <>
      <div className="flex items-center justify-center py-6">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-gray-900">Kannu Mandora</h1>
            <p className="text-xl text-gray-600">Full Stack Developer</p>
          </div>

          <p className="text-gray-700 text-center max-w-2xl mx-auto">
            Passionate about creating robust and scalable web applications. With
            expertise in both frontend and backend technologies, I bring ideas
            to life through clean, efficient code and intuitive user
            experiences.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 text-center">
              Skills
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Tailwindcss",
                "JavaScript",
                "React",
                "Next.Js",
                "Node.js",
                "MongoDB",
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-sm text-white bg-primary-300 hover:bg-primary-500 cursor-default px-6 py-2 rounded-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center py-6">
            <Link
              href="https://mandorakannu.xyz"
              passHref
              className="text-blue-600 hover:text-black hover:bg-gray-200 py-3 px-6 rounded-full hover:border-gray-300 border-2 transition-colors"
            >
              Visit My Portfolio
            </Link>
          </div>

          <div className="flex justify-center space-x-4">
            <Link
              href="https://github.com/mandorakannu"
              className="hover:bg-gray-200 py-3 px-6 rounded-full hover:border-gray-300 border-2 transition-colors"
            >
              <FaGithub className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/mandorakannu"
              className="hover:bg-gray-200 py-3 px-6 rounded-full hover:border-gray-300 border-2 transition-colors"
            >
              <FaLinkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com/mandorakannu"
              className="hover:bg-gray-200 py-3 px-6 rounded-full hover:border-gray-300 border-2 transition-colors"
            >
              <FaTwitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
