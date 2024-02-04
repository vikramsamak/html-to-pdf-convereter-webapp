import { useState } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Tabs, Tab } from "@nextui-org/react";
import PropTypes from 'prop-types';
import ReactCodeMirror from "@uiw/react-codemirror";
import { html } from '@codemirror/lang-html';
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { useDropzone } from 'react-dropzone';

function HtmlInputs({ generatePDF, openModal, setNotification }) {
  const [HtmlCode, setHtmlCode] = useState("");
  const [isFileMenuSelected, setFileMenuSelected] = useState(false);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      'text/html': ['.html']
    },
    maxFiles: 1,
  });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="px-6 py-4 w-full lg:w-2/5 sm:w-full md:w-full xl:w-2/5">
      <Card>
        <CardHeader className="flex justify-center">
          <p className="px-2 py-2">
            HTML Inputs
          </p>
        </CardHeader>
        <Divider />
        <CardBody className="h-[400px]">
          <Tabs
            variant="underlined" fullWidth color="primary"
            onSelectionChange={(key) => { setFileMenuSelected(key === "2") }}>
            <Tab key={"1"} title={"HTML Code"}>
              <ReactCodeMirror
                style={{ overflow: "auto" }}
                value={HtmlCode}
                maxHeight="100%"
                minHeight="310px"
                theme={vscodeDark}
                extensions={[html()]}
                placeholder={'HTML Code Editor'}
                basicSetup={{
                  autocompletion: true,
                  indentOnInput: true,
                  syntaxHighlighting: true
                }}
                onChange={(value) => { setHtmlCode(value) }} />
            </Tab>
            <Tab key={"2"} title={"HTML File"}>
              <div className="w-full h-full">
                <div {...getRootProps({ className: 'p-8 text-center bg-zinc-700 rounded-md' })}>
                  <input {...getInputProps()} />
                  <p className="text-center text-sm p-2">
                    Drag &apos;n&apos; drop file here, or click to select file.
                  </p>
                </div>
                {
                  acceptedFiles[0] && (
                    <div className="text-center mt-2">
                      <h4>Selected File Details</h4>
                      <ul>{files}</ul>
                    </div>
                  )
                }
              </div>
              <div className="text-center mt-2">
                <p className="text-sm">
                  We do not save your files on the server; they are deleted after a successful conversion.
                </p>
              </div>
            </Tab>
          </Tabs>
        </CardBody>
        <CardFooter className="w-full flex gap-4">
          <Button
            className={`${isFileMenuSelected ? 'w-full' : 'w-1/2'}`}
            variant="ghost"
            color="primary"
            onClick={() => {
              if (isFileMenuSelected) {
                if (acceptedFiles.length === 0 || !acceptedFiles[0]) {
                  setNotification('Please select an HTML file.');
                  openModal();
                } else {
                  generatePDF(null, acceptedFiles[0]);
                }
              } else {
                if (HtmlCode.trim().length === 0) {
                  setNotification('Please enter a valid HTML code in the code editor.');
                  openModal();
                } else {
                  generatePDF(HtmlCode, null);
                }
              }
            }}
          >
            {isFileMenuSelected ? "Upload" : "Generate PDF"}
          </Button>
          <Button
            className={`${isFileMenuSelected ? 'hidden' : 'w-1/2'}`}
            variant="ghost"
            color="danger"
            onClick={() => { setHtmlCode('') }}>
            Clear
          </Button>
        </CardFooter>
      </Card>
    </section >
  );
}

HtmlInputs.propTypes = {
  generatePDF: PropTypes.func,
  openModal: PropTypes.func,
  setNotification: PropTypes.func
};

export default HtmlInputs;
