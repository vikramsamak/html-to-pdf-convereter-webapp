import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Link, Spinner } from "@nextui-org/react"
import PropTypes from 'prop-types';

function PdfPreview({ pdfData, errorStatus, loadingStatus, errorMsg }) {

  return (
    <section className="px-6  py-6 w-full sm:w-full md:w-full lg:w-3/5">
      <Card>
        <CardHeader className="flex justify-center">
          <p className="py-2 px-2">
            PDF Preview
          </p>
        </CardHeader>
        <Divider />
        <CardBody className="h-[400px] flex">
          <div className="h-full flex items-center justify-center">
            {
              errorStatus ? (
                <p>{errorMsg}</p>
              ) : loadingStatus ? (
                <Spinner label="Generating PDF Preview..." />
              ) : pdfData ? (
                <iframe
                  className="w-full h-full overflow-x-auto overflow-y-auto"
                  src={pdfData?.dataUri}

                  title="PDF Viewer"
                  width="100%"
                  height="100%"
                  aria-hidden="false"
                  tabIndex="0"
                />
              ) : (
                <p>No preview available...</p>
              )
            }
          </div>
        </CardBody>
        <CardFooter className="flex w-full gap-4">
          {
            pdfData?.dataUri &&
            (<>
              <Link href={pdfData?.dataUri} download={'output.pdf'} className="w-1/2">
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
              onClick={() => { window.open(pdfData?.dataUri, "_blank") }}
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
  pdfData: PropTypes.object,
  errorStatus: PropTypes.bool,
  errorMsg: PropTypes.string,
  loadingStatus: PropTypes.bool
}

export default PdfPreview;