import Link from 'next/link';
import { SocialMedia } from './Nav/SocialMedia';
import links from "@jsons/footerLinks.json";
export const Footer = () => {

    return (
        <>
            <footer className="relative w-full mb-20 border-t-2 border-primary-500 pt-10">
                <div className="w-full px-8 mx-auto max-w-7xl">
                    <div className="grid justify-between grid-cols-1 gap-4 md:grid-cols-1">
                        <div className="grid justify-between grid-cols-4 gap-4">
                            <ul>
                                <p className="block mb-1 text-base font-semibold  text-slate-800">
                                    Product
                                </p>
                                {
                                    links[1].map(({ name, url }) => (
                                        <li key={name}>
                                            <Link key={name} href={url} className="block text-slate-600 py-1 hover:text-primary-500 focus:text-primary-500 text-sm">
                                                {name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                            <ul>
                                <p className="block mb-1 text-base font-semibold text-slate-800">
                                    Company
                                </p>
                                {
                                    links[2].map(({ name, url }) => (
                                        <li key={name}>
                                            <Link key={name} href={url} className="block text-slate-600 py-1 hover:text-primary-500 focus:text-primary-500 text-sm">
                                                {name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                            <ul>
                                <p className="block mb-1 text-base font-semibold text-slate-800">
                                    Resource
                                </p>
                                {
                                    links[3].map(({ name, url }) => (
                                        <li key={name}>
                                            <Link key={name} href={url} className="block text-slate-600 py-1 hover:text-primary-500 focus:text-primary-500 text-sm">
                                                {name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                            <ul>
                                <p className="block mb-1 text-base font-semibold text-slate-800">
                                    Help Center
                                </p>
                                {
                                    links[0].map(({ name, url }) => (
                                        <li key={name}>
                                            <Link href={url} className="block text-slate-600 py-1 hover:text-primary-500 focus:text-primary-500 text-sm">
                                                {name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-slate-200 md:flex-row md:justify-between">
                        <p className="block mb-4 text-sm text-center text-slate-500 md:mb-0">
                            Copyright © {new Date().getFullYear()}
                            <Link href={process.env.NEXT_PUBLIC_PORTFOLIO || "https://mandorakannu.xyz/"} className='uppercase hover:text-primary-400'> Kannu Mandora</Link>. All
                            Rights Reserved.
                        </p>
                        <div className="flex gap-4 text-slate-600 sm:justify-center">
                            <SocialMedia iconSize={20} classProps='gap-10' />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}