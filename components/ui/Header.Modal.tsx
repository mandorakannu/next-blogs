"use client";
import { SiGnuprivacyguard } from "react-icons/si";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Link } from "@nextui-org/react";


export const HeaderModal = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <SiGnuprivacyguard className="text-3xl cursor-pointer hover:text-primary-400" onClick={onOpen} />
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                className="p-4"
            >
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">Join Us, Today!</ModalHeader>
                    <ModalBody>
                        <p>
                            Welcome to Journal! We are a community of writers, bloggers, and readers.
                        </p>
                        <p>
                            To join our community, please sign up or sign in with your existing account.
                        </p>
                        <section className="flex flex-row gap-5">
                            <SignInButton>
                                <p className="text-center bg-primary-400 text-white my-auto py-2 px-6 cursor-pointer">Sign In</p>
                            </SignInButton>
                            <SignUpButton>
                                <p className="text-center bg-rose-400 text-white my-auto py-2 px-6 cursor-pointer">Sign Up</p>
                            </SignUpButton>
                        </section>
                    </ModalBody>
                    <ModalFooter className="mt-10">
                        <Link href={process.env.NEXT_PUBLIC_PORTFOLIO} className="text-primary-400 bg-blue-100 py-2 px-6 rounded-md">Visit My Portfolio</Link>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}