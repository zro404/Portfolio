import TextType from "@/components/TextType";
import { Button } from "@/shadcn/components/ui/button";
import { Card, CardContent } from "@/shadcn/components/ui/card";
import { Input } from "@/shadcn/components/ui/input";
import { Textarea } from "@/shadcn/components/ui/textarea";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex justify-center items-center w-[85vw] mx-auto"
    >
      <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl max-w-screen">
        <CardContent className="flex flex-col md:flex-row p-5">
          <div className="flex-3 px-5 space-y-3">
            <TextType
              text={["Contact Me", "Contact Me"]}
              cursorCharacter="_"
              className="text-3xl bungee-regular"
            />
            <p>
              If you have any questions or would like to get in touch, please
              reach out via this form or mail me at{" "}
              <a href="mailto:dev.harish3124@gmail.com">
                dev.harish3124@gmail.com
              </a>
              .
            </p>
          </div>
          <form
            action="https://formspree.io/f/xgegjqae"
            method="POST"
            className="flex flex-col justify-center gap-2 flex-2 pt-5 pr-5"
          >
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              required
            />
            <Input name="name" type="text" placeholder="Your Name" required />
            <Textarea name="message" placeholder="Your Message" required />
            <Button
              type="submit"
              className="text-[#252525] bg-gradient-to-r from-green-400 to-emerald-600 border-2 shadow-lg rounded-lg py-2 hover:scale-105"
            >
              Send
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
