import React from 'react'
import Link from 'next/link';
import { BsTwitterX } from "react-icons/bs";
import { twMerger } from '@functions/tailwindMerger';
import socialMediaLink from "@jsons/socialMediaLinks.json"
import { FaInstagram, FaGithub, FaStackOverflow, FaLinkedin } from "react-icons/fa";

export function SocialMedia({ classProps, iconSize = 15 }: { classProps?: string, iconSize: number }) {
  return (
    <>
      <section aria-label='Social Media Icons'  className={twMerger("flex", "flex-row", classProps)}>
        {socialMediaLink.map(({ name, url }) => (
          <Link

            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-600"
          >
            {name === "Instagram" && <FaInstagram size={iconSize} />}
            {name === "GitHub" && <FaGithub size={iconSize} />}
            {name === "StackOverFlow" && <FaStackOverflow size={iconSize} />}
            {name === "Twitter" && <BsTwitterX size={iconSize} />}
            {name === "LinkedIn" && <FaLinkedin size={iconSize} />}
          </Link>
        ))
        }
      </section>
    </>
  )
}