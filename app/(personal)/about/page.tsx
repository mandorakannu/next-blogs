import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <section className="prose mx-auto py-10">
        <div className="border-b border-b-primary-400">
          <h1>About Kannu Mandora</h1>
          <p>
            Welcome! I&apos;m Kannu Mandora, a passionate full-stack developer
            with a knack for turning ideas into functional and visually engaging
            web applications. My journey in the world of technology is fueled by
            curiosity, creativity, and a commitment to building solutions that
            make a difference.
          </p>
        </div>
        <div className="border-b border-b-primary-400">
          <h2>Who I Am</h2>
          <p>
            Welcome! I&apos;m Kannu Mandora, a passionate full-stack developer
            with a knack for turning ideas into functional and visually engaging
            web applications. My journey in the world of technology is fueled by
            curiosity, creativity, and a commitment to building solutions that
            make a difference.
          </p>
        </div>
        <div className="border-b border-b-primary-400">
          <h2>What Drives Me</h2>
          <p>
            I believe that technology has the power to solve real-world problems
            and transform lives. My mission is to leverage my skills to
            contribute to that transformation. Whether it&apos;s developing
            robust applications or simplifying complex concepts for others, I
            strive to make technology accessible and meaningful. This belief
            extends to my learning journey. As someone who constantly seeks to
            grow, I immerse myself in the latest tools, frameworks, and industry
            trends to stay ahead in this ever-evolving field.
          </p>
        </div>
        <div className="border-b border-b-primary-400">
          <h2>What I Do</h2>
          <ul>
            <li>
              Web Development: I design and develop dynamic web applications
              using the latest technologies. My focus is on delivering solutions
              that are not only functional but also user-centric and
              aesthetically pleasing.
            </li>
            <li>
              Problem Solving: Tackling challenges and finding innovative
              solutions is at the heart of my work. I enjoy breaking down
              complex problems and crafting effective, scalable strategies.
            </li>
            <li>
              Knowledge Sharing: Through writing and teaching, I aim to give
              back to the tech community by sharing insights, tutorials, and
              lessons learned along my journey.
            </li>
          </ul>
        </div>
        <div>
          <h2>Let&apos;s Connect</h2>
          <ul>
            <li>
              Portfolio:{" "}
              <Link
                href={
                  process.env.NEXT_PUBLIC_PORTFOLIO ||
                  "https://mandorakannu.vercel.app/"
                }
                target="_blank"
              >
                mandorakannu.xyz
              </Link>
            </li>
            <li>
              GitHub:{" "}
              <Link href="https://github.com/mandorakannu" target="_blank">
                github.com/mandorakannu
              </Link>
            </li>
            <li>
              LinkedIn:{" "}
              <Link href="https://linkedin.com/in/mandorakannu" target="_blank">
                github.com/mandorakannu
              </Link>
            </li>
            <li>
              Contact Email:{" "}
              <Link href="mailto:mandorakannu.dev@gmail.com">
                mandorakannu.dev@gmail.com
              </Link>
            </li>
          </ul>
          <p>
            Thank you for visiting, and I look forward to connecting with you!
          </p>
        </div>
      </section>
    </>
  );
}
