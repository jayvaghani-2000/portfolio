import Container from "@/components/ui/Container";
import Icons from "@/components/ui/Icon";
import { Caption, Heading, Paragraph } from "@/components/ui/Typography";
import siteConfig from "@/config/site";
import ContactForm from "@/forms/contact";
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative z-10 flex w-full items-center bg-neutrals-900 py-28"
    >
      <Container>
        <div className="flex h-full w-full flex-col lg:flex-row">
          <div className="basis-full lg:self-center">
            <Caption id="contact-heading">Contact</Caption>
            <Heading>Got a new?</Heading>
            <Paragraph>
              Get your space suit ready and tell me your ideas to develop your
              dream website.
            </Paragraph>
            <a
              className="mt-8 inline-flex items-center text-neutrals-50 transition-colors hover:text-primary focus-visible:text-primary"
              href={`mailto:${siteConfig.email}`}
              title="Hit me up"
            >
              <Icons.Envelope
                aria-hidden="true"
                className="mr-2 inline h-5 w-5"
              />
              {siteConfig.email}
            </a>
          </div>
          <div className="mt-10 basis-full lg:ml-10 lg:mt-0 xl:ml-20">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
