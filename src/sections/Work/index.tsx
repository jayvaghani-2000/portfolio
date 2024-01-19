import Container from "@/components/ui/Container";
import { Caption, Heading } from "@/components/ui/Typography";
import ProjectCarousel from "./ProjectCarousel";
import Project from "@/data/work";

const Work = () => {
  const projects = Project;
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative z-10 w-full bg-neutrals-900 py-28"
    >
      <Container>
        <div className="flex flex-col items-center text-center">
          <Caption id="work-heading">Work</Caption>
          <Heading>Dig into my universe</Heading>
        </div>
      </Container>
      <ProjectCarousel projects={projects} />
    </section>
  );
};

export default Work;
