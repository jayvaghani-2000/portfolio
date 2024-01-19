import jayImage from "@/assets/images/jay.jpg";
import TypingHeading from "@/components/common/TypingHeading";
import Image from "@/components/ui/Image";
import { Caption, Paragraph } from "@/components/ui/Typography";

const headings = [
  "Developer",
  "Problem solver",
  "Freelancer",
  "Designer",
  "Coffeeholic",
];
const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative z-10 w-full bg-neutrals-900"
    >
      <div className="flex min-h-screen w-full items-center max-lg:flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,min(91.666667%/2,40rem))_minmax(0,min(91.666667%/2,40rem))_minmax(0,1fr)] xl:grid-cols-[minmax(0,1fr)_minmax(0,min(80%/2,40rem))_minmax(0,min(80%/2,40rem))_minmax(0,1fr)]">
        <Image
          metadata={jayImage}
          alt="Myself, Jay, at the art, with a view of the some artistic design and a vision in mind"
          className="max-h-screen object-cover object-center lg:col-start-1 lg:col-end-3 h-full"
        />
        <div className="w-full py-28 max-lg:mx-auto max-lg:w-11/12 max-lg:max-w-7xl lg:pl-10 xl:pl-20">
          <Caption id="about-heading">About</Caption>
          <TypingHeading headings={headings} />
          <Paragraph>
            I am Jay, a passionate freelancer from Surat, India, bringing you
            <span className="text-neutrals-100">
              {" "}
              programming and design from the future
            </span>
            . My expertise is developing next-level websites and web
            applications.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default About;
