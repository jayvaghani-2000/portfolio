import contactSuccessImage from "@/assets/images/contact-success.svg";
import Button from "@/components/ui/Button";
import Icons from "@/components/ui/Icon";
import Image from "@/components/ui/Image";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Textarea from "@/components/ui/TextArea";
import { Caption, Heading } from "@/components/ui/Typography";
import { useForm } from "react-hook-form";
import { Ring } from "@uiball/loaders";
import contactSubmissionSchema from "@/lib/validations/ContactFormValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

import type { z } from "zod";
import { useRef, useState } from "react";

type FormData = z.infer<typeof contactSubmissionSchema>;

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(contactSubmissionSchema),
    mode: "onTouched",
  });

  const form = useRef<HTMLFormElement>(null);
  const [sendStatus, setSendStatus] = useState(false);
  const sendEmail = (e: any) => {
    e.preventDefault();
    setSendStatus(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as unknown as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as unknown as string,
        form.current as any,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  async function onSubmit(contactData: FormData) {
    console.log(contactData);
  }

  return sendStatus ? (
    <div>
      <Caption>Successful</Caption>
      <Heading>I will be in touch with you</Heading>
      <Image metadata={contactSuccessImage} alt="A flying paper plane" />
    </div>
  ) : (
    <form onSubmit={sendEmail} ref={form}>
      <fieldset disabled={isSubmitting} className="group flex flex-col gap-y-6">
        <div>
          <Label htmlFor="contact-form-name">Name</Label>
          <Input
            id="contact-form-name"
            type="text"
            className={errors.name ? "border-error text-white" : "text-white"}
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="mt-2 flex items-center text-sm text-error">
              <Icons.Warning aria-hidden className="mr-2 inline h-5 w-5" />
              {errors.name.message as string}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="contact-form-email">Email</Label>
          <Input
            id="contact-form-email"
            type="email"
            className={errors.email ? "border-error text-white" : "text-white"}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="mt-2 flex items-center text-sm text-error">
              <Icons.Warning aria-hidden className="mr-2 inline h-5 w-5" />
              {errors.email.message as string}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="contact-form-message">Message</Label>
          <Textarea
            id="contact-form-message"
            className={errors.message ? "border-error text-white" : "text-white"}
            {...register("message", { required: true })}
          />
          {errors.message && (
            <p className="mt-2 flex items-center text-sm text-error">
              <Icons.Warning aria-hidden className="mr-2 inline h-5 w-5" />
              {errors.message.message as string}
            </p>
          )}
        </div>
        <Button type="submit" className="disabled:cursor-progress">
          Hit me up
          <div
            aria-hidden
            className="ml-2 inline opacity-70 group-enabled:hidden"
          >
            <Ring size={20} lineWeight={5} speed={2} color="currentColor" />
          </div>
          <Icons.Rocket
            aria-hidden
            className="ml-2 inline h-5 w-5 group-disabled:hidden"
          />
        </Button>
        {errors.root && (
          <p className="mt-2 flex items-center text-sm text-error">
            <Icons.Warning aria-hidden className="mr-2 inline h-5 w-5" />
            {errors.root.message}
          </p>
        )}
      </fieldset>
    </form>
  );
}

export default ContactForm;
