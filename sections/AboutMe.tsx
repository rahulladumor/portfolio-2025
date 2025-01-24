import Image from "next/image";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const AboutMe = () => (
  <div id={Section.AboutMe}>
    {getSectionHeading(Section.AboutMe)}

    <div className="grid md:grid-cols-4 gap-12">
      <div className="relative col-span-1 hidden md:block">
        <Image
          fill
          alt="Selfie Boy"
          src="/images/about-me/selfie-boy.svg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="col-span-3 max-w-full prose prose-sm md:prose-base prose-neutral dark:prose-invert">
        <p>Hey there! 👋</p>

        <p>
          I'm Rahul Ladumor, Founder & CEO of CodeLamda Technologies, with over 7 years of experience in transforming
          businesses through innovative technology solutions. As an AWS Certified Expert and Cloud Architect, I specialize
          in building scalable systems that handle over 1M requests per minute.
        </p>

        <p>
          Currently leading CodeLamda Technologies, where we're revolutionizing cloud solutions and AI implementation
          for businesses. My journey includes significant achievements like being part of ProtectOnce's successful
          acquisition and recognition as an AWS Community Builder.
        </p>

        <p>
          My expertise spans across Cloud Architecture (AWS, Azure, GCP), AI/ML Solutions (TensorFlow, PyTorch, SageMaker),
          and Full Stack Development (Node.js, Python, Golang). I'm particularly passionate about serverless architectures,
          blockchain technologies, and enterprise-grade AI implementations.
        </p>

        <p>
          What sets me apart is my holistic approach to technology solutions - combining technical excellence with
          strategic business thinking. I've successfully led teams in developing innovative solutions across cybersecurity,
          AI-powered platforms, and enterprise systems.
        </p>

        <p>
          Beyond technology, I'm committed to fostering tech education and community building in Gujarat, helping
          bridge the digital divide through workshops and mentoring programs. I regularly contribute to the developer
          community through technical publications and open-source projects.
        </p>

        <p>
          Looking to transform your business with innovative technology solutions? Let's connect through the
          <a href="#contact"> contact section</a> & below or visit <a href="https://codelamda.com" target="_blank" rel="noopener noreferrer">CodeLamda</a>.
        </p>
      </div>
    </div>
  </div>
);

export default AboutMe;
