import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react"
import { useState } from "react"
import PropTypes from 'prop-types';
import ReactCodeMirror from "@uiw/react-codemirror";
import { html } from '@codemirror/lang-html'
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

function Form({ generatePDF, openModal, setErrorMsg }) {
  const [Html, setHtml] = useState("");

  return (
    <section className="px-6 py-6 w-full lg:w-2/5 sm:w-full md:w-full">
      <Card>
        <CardHeader className="flex justify-center">
          <p className="px-2 py-2">
            HTML Code Editor
          </p>
        </CardHeader>
        <Divider />
        <CardBody className="h-[400px] flex">
          <ReactCodeMirror
            style={{ overflow: "auto" }}
            value={Html}
            height="100vh"
            theme={vscodeDark}
            extensions={[html()]}
            placeholder={'HTML Code Editor'}
            basicSetup={
              {
                autocompletion: true,
                indentOnInput: true,
                syntaxHighlighting: true

              }
            }
            onChange={(value) => { setHtml(value) }} />
          <p className="text-foreground-500 ml-2">*Does not support external CSS.(Bootstrap,Tailwind)</p>
        </CardBody>
        <CardFooter className="w-full flex gap-4">
          <Button
            className="w-1/2"
            variant="ghost"
            color="primary"
            onClick={() => {
              if (Html.length === 0) {
                setErrorMsg('Please enter a valid HTML code in the code editor.');
                openModal();
              } else {
                generatePDF(Html);
              }
            }}
          >
            Generate PDF
          </Button>
          <Button
            className="w-1/2"
            variant="ghost"
            color="danger"
            onClick={() => { setHtml('') }}>
            Clear
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}

Form.propTypes = {
  generatePDF: PropTypes.func,
  openModal: PropTypes.func,
  setErrorMsg: PropTypes.func
};

export default Form