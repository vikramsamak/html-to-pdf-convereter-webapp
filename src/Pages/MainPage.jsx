import { useMutation } from "@tanstack/react-query";
import Form from "../Components/Form";
import Nav from "../Components/Nav";
import PdfPreview from "../Components/PdfPreview";
import axios from "axios";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button } from "@nextui-org/react";
import { useState } from "react";


function MainPage() {
  const [ErrorMsg, setErrorMsg] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getPdfFromHtml = async (htmlContent) => {
    try {
      const response = await axios.post('https://html-to-pdf-microservice.onrender.com/convert', { htmlContent: htmlContent });
      return response.data
    } catch (error) {
      return Promise.reject(error.message);
    }
  };

  const { data, error, isError, isPending, mutateAsync } = useMutation({ mutationFn: getPdfFromHtml })

  return (
    <main className="min-h-screen">
      <Nav />
      <section className="min-h-screen max-h-full">
        <Modal
          backdrop="opaque"
          isOpen={isOpen}
          onClose={onClose}
          classNames={{
            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
            base: 'bg-black text-white'
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Notification</ModalHeader>
                <ModalBody>
                  <p>{ErrorMsg}</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        <div className="min-h-screen flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-wrap xl:flex-wrap">
          <Form
            generatePDF={(htmlContent) => mutateAsync(htmlContent)}
            openModal={onOpen}
            setErrorMsg={(errorMsg) => { setErrorMsg(errorMsg) }} />
          <PdfPreview
            pdfData={data}
            errorStatus={isError}
            loadingStatus={isPending}
            errorMsg={error} />
        </div>
      </section>
    </main>

  );
}

export default MainPage;
