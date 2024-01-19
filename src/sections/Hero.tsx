import React from "react";
import GridBackground from "@/components/ui/GridBackground";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";

const Hero = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="sticky inset-0 flex h-screen w-full flex-col justify-center py-28"
    >
      <GridBackground />
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h1
            id="hero-heading"
            className="text-center text-5xl font-bold leading-tight text-tune_in-dark md:text-7xl md:leading-tight lg:text-8xl lg:leading-tight"
          >
            An Unparalleled Blend of Programming
            <br />
            and Design
          </h1>
          <ButtonLink
            href="/#work"
            size="large"
            className="mt-12 bg-tune_in-dark text-tune_in-pastel border-none rounded-xl hover:text-tune_in-dark hover:bg-tune_in-pastel"
          >
            Jump into my universe
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
