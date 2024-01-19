import Container from "@/components/ui/Container"
import { Caption, Heading, Paragraph } from "@/components/ui/Typography"
import TestimonialCard from "./Card"
import testimonials from '@/data/testinomials'
import test from "node:test"

const Testinomial=()=>{
    return  <section
    id="stories"
    aria-labelledby="stories-heading"
    className="relative z-10 w-full bg-neutrals-900 py-28"
  >
    <Container>
      <div className="flex flex-col items-center text-center">
        <Caption id="stories-heading">Customer Stories</Caption>
        <Heading>
          Trusted by the
          <br />
          kindest clients
        </Heading>
        <Paragraph>
          It is my mission to deliver you the web presence you deserve.
        </Paragraph>
      </div>
    </Container>
    <div className="mask-inline-faded group mt-8 flex w-full overflow-x-hidden">
      <ul className="group-hover:play-state-paused motion-reduce:play-state-paused flex animate-marquee">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </ul>
      <ul
        aria-hidden="true"
        className="group-hover:play-state-paused motion-reduce:play-state-paused flex animate-marquee"
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </ul>
    </div>
  </section>
}

export default Testinomial