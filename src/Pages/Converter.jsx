import { useMutation } from "@tanstack/react-query";
import Form from "../Components/Form";
import PdfPreview from "../Components/PdfPreview";
import axios from "axios";
import { MICRO_SERVICE_URL } from "../Helpers/Constants";
import PropTypes from 'prop-types'
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

function Converter({ openModal, setNotification }) {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const getPdfFromHtml = async (htmlContent) => {
    try {
      const response = await axios.post(MICRO_SERVICE_URL, { htmlContent: htmlContent });
      return response.data
    } catch (error) {
      return Promise.reject(error.message);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const { data, error, isError, isPending, mutateAsync } = useMutation({ mutationFn: getPdfFromHtml })

  return (
    <section className="min-h-screen max-h-full">
      <section className="relative min-h-screen px-6 py-4 flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-wrap xl:flex-wrap">
        <Form
          generatePDF={(htmlContent) => mutateAsync(htmlContent)}
          openModal={openModal}
          setNotification={setNotification} />
        <PdfPreview
          pdfData={data}
          errorStatus={isError}
          loadingStatus={isPending}
          errorMsg={error} />
      </section>
      <div className="fixed bottom-5 right-5 flex w-full justify-end">
        <Button
          className={`${isVisible ? 'rounded-full' : 'hidden'}`}
          onClick={scrollToTop}
        >
          <IoIosArrowUp />
        </Button>
      </div>
    </section>
  );
}

Converter.propTypes = {
  openModal: PropTypes.func,
  setNotification: PropTypes.func
}

export default Converter;
