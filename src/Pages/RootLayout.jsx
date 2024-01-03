import Nav from "../Components/Nav"
import { Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import Converter from "./Converter"
import ContactMe from "./ContactMe"
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"
import { useState } from "react"


function RootLayout() {
    const [notification, setNotification] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <main>
            <Nav />
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
                                <p>{notification}</p>
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
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/converter" element={<Converter openModal={onOpen} setNotification={setNotification} />} />
                <Route path="/contactme" element={<ContactMe openModal={onOpen} setNotification={setNotification} />} />
            </Routes>
        </main>
    )
}

export default RootLayout;