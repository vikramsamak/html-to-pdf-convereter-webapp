import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Textarea,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import { useForm } from "@formspree/react";
import { FORMSPREE_FORM_ENDPOINT } from "../Helpers/Constants";

function ContactMe({ openModal, setNotification }) {
  const [state, handleSubmit, reset] = useForm(FORMSPREE_FORM_ENDPOINT);

  if (state.succeeded) {
    setNotification("Thank you for valuable feedback...");
    openModal();
    reset();
  }

  return (
    <main className="min-h-screen">
      <section className="px-6 py-4 flex justify-center h-full items-center">
        <Card className="w-[500px]">
          <CardHeader className="flex justify-center">
            <p className="px-2 py-2">Contact Me</p>
          </CardHeader>
          <Divider></Divider>
          <CardBody>
            <form className="flex-col gap-6 w-full" onSubmit={handleSubmit}>
              <Input
                type="text"
                variant="underlined"
                label="Name"
                placeholder="Enter your name"
                name="name"
                className="w-full py-4"
              />
              <Input
                type="email"
                variant="underlined"
                label="Email"
                placeholder="Enter your email"
                name="email"
                className="w-full py-4"
              />
              <Textarea
                type="text"
                variant="underlined"
                label="Message"
                placeholder="Enter your message"
                name="message"
                rows={8}
                className="w-full py-4 mb-6"
              />
              <Button
                className="w-full"
                variant="ghost"
                color="primary"
                type="submit"
                disabled={state.submitting}
              >
                Submit
              </Button>
            </form>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}

ContactMe.propTypes = {
  openModal: PropTypes.func,
  setNotification: PropTypes.func,
};

export default ContactMe;
