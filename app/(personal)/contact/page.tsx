"use client";
import { useActionState } from "react";
import { Alert } from "@nextui-org/react";
import { Loader } from "@ui/Loader";
import queryContact from "@/assets/actions/contact.actions";

export default function Contact() {
  const [state, formAction, isPending] = useActionState(queryContact, null);
  return (
    <>
      <section className="px-4 py-6 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-bold text-center">
          Contact Us
        </h2>
        <p className="font-normal text-center sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
      </section>
      <div className="flex mx-auto w-3/4">
      {state?.message ? (
          <Alert
            hideIcon
            color={state.status === 200 ? "sucess" : "danger"}
            description={`${state.message} | Status Code: ${state.status}`}
            title={state.status === 200 ? "Booyah!" : "Nooooo!"}
            variant="faded"
          />
        ) : null}
      </div>
      <form
        action={formAction}
        className="space-y-8 max-w-screen-md mx-auto py-10 px-5"
      >
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-white border border-gray-300 text-sm rounded-lg block w-full p-2.5 text-black"
            placeholder="name@example.com"
            name="email"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="block p-3 w-full text-sm bg-white rounded-lg border border-gray-300 shadow-sm text-black"
            placeholder="Let us know how we can help you"
            name="subject"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Your message
          </label>
          <textarea
            id="message"
            className="block p-2.5 w-full text-sm bg-white rounded-lg shadow-sm border border-gray-300 text-black"
            placeholder="Leave a comment..."
            name="message"
          ></textarea>
        </div>
        <button
          type="submit"
          role="button"
          className="flex flex-row justify-center items-center py-3 px-10 w-52 h-14 overflow-hidden uppercase text-black rounded hover:shadow-2xl transition-all delay-100 hover:border-primary-500 border-2 text-center"
        >
          {isPending ? <Loader /> : "Send Message"}
        </button>
      </form>
    </>
  );
}
