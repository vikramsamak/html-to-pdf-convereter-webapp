import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Link, Spinner } from "@nextui-org/react"
import PropTypes from 'prop-types';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function PdfPreview({ pdfData, errorStatus, loadingStatus, errorMsg }) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <section className="px-6 py-4 w-full sm:w-full md:w-full lg:w-3/5 xl:w-3/5">
      <Card>
        <CardHeader className="flex justify-center">
          <p className="py-2 px-2">
            PDF Preview
          </p>
        </CardHeader>
        <Divider />
        <CardBody className="h-[400px]">
          <div className="h-full flex items-center justify-center">
            {
              errorStatus ? (
                <p>{errorMsg}</p>
              ) : loadingStatus ? (
                <Spinner label="Generating PDF Preview..." />
              ) : pdfData ? (
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <Viewer fileUrl={pdfData} plugins={[defaultLayoutPluginInstance]} />
                  </div>
                </Worker>
              ) : (
                <p>No preview available...</p>
              )
            }
          </div>
        </CardBody>
        <CardFooter className="flex w-full gap-4">
          {
            pdfData &&
            (<>
              <Link href={pdfData} download={'output.pdf'} className="w-1/2">
                <Button
                  className="w-full"
                  variant="ghost"
                  color="primary">
                  Download
                </Button>
              </Link>
              <Button
                className="w-1/2"
                variant="ghost"
                color="secondary"
                onClick={() => { window.open(pdfData, "_blank") }}
              >
                Open In New Tab
              </Button>
            </>
            )
          }
        </CardFooter>
      </Card>
    </section >
  )
}

PdfPreview.propTypes = {
  pdfData: PropTypes.string,
  errorStatus: PropTypes.bool,
  errorMsg: PropTypes.string,
  loadingStatus: PropTypes.bool
}

export default PdfPreview;