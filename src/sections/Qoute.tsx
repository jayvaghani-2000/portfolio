import Container from "@/components/ui/Container";
import MatrixBackground from "@/components/ui/MatrixBackground";
import { Heading, Paragraph } from "@/components/ui/Typography";

const Qoute = () => {
  return (
    <section
      id="sourcecode"
      aria-labelledby="sourcecode-heading"
      className="relative z-10 flex min-h-screen w-full bg-neutrals-900 py-28"
    >
      <MatrixBackground />
      <Container>
        <div className="flex h-full flex-col items-center justify-center text-center">
          <Heading>
            You think that&apos;s air you&apos;re breathing now?
          </Heading>
          <Paragraph>
            You leave the <span className="text-neutrals-100">page</span> - you
            wake up tomorrow and continue with the same old reality. You click
            the <span className="text-neutrals-100">Hit me up</span> - and
            I&apos;ll show you how far the code of your destiny can be
            rewritten.
          </Paragraph>
        </div>
      </Container>
    </section>
  );
};

export default Qoute;
