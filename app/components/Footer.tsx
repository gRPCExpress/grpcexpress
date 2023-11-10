import React from "react";
import { H4 } from "@/app/components/Typography";
import styles from "@/app/styles";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="text-center w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <h4 className=" text-gray-500 dark:text-gray-400 text-center">
          Created By:
        </h4>
        <ul className="flex justify-center text-sm font-medium gap-4 text-gray-500 dark:text-gray-400 text-center">
          <li className="mt-2">
            <p>Murat Agrali</p>
          </li>
          <li className="mt-2">
            <p>Arthur Griffith</p>
          </li>
          <li className="mt-2">
            <p>Junwen Zhang</p>
          </li>
          <li className="mt-2">
            <p>Shi Yu Liu</p>
          </li>
        </ul>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          2023{" "}
          <Link
            className="hover:underline"
            href="https://github.com/oslabs-beta/gRPCExpress"
          >
            gRPCExpress
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
