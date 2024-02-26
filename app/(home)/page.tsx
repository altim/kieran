import styles from "./page.module.scss";
import Hero from "@/app/(home)/components/hero/Hero";
import Skills from "@/app/(home)/components/skills/Skills";
import Experience from "@/app/(home)/components/experience/Experience";
import Projects from "@/app/(home)/components/projects/Projects";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Skills>
        <ul>
          <li>Art Direction</li>
          <li>Graphic Design</li>
          <li> Typography</li>
          <li>Campaign concept</li>
          <li>
            Digital and Print Marketing and
            <br />
            advertising production
          </li>
          <li>Project Management</li>
          <li>Packaging design</li>
          <li>OOH and Experiential design</li>
          <li>Exhibition and Display design</li>
          <li>Video editing</li>
          <li>Motion graphics</li>
        </ul>
      </Skills>
      <Experience>
        <div>
          <h4>Founder / Art Director</h4>
          <p>Evoke Creative Agency UG, Munich Germany</p>
          <p>2023 – Present</p>
        </div>

        <div>
          <h4>Art Director</h4>
          <p>Freelance 2020 – 2023</p>
        </div>

        <div>
          <h4>Art Director EMEA Creative Services</h4>
          <p>GoPro Inc.</p>
          <p>2017 – 2020</p>
        </div>
      </Experience>
      <Projects
        slugs={["gopro-h12", "torvac", "gopro-creator-summit", "campo-libre"]}
      />
    </main>
  );
}
