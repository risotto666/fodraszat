"use client";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer class="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Bolyhos™
          </a>
          . All Rights Reserved.
        </span>
        <ul class="flex gap-4 flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>124 The Sycamores Cambridge CB24 6ZN</li>
          <li>Tel:07476364820</li>
          <li></li>
          <li>troli0723@gmail.com</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
