import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { Link } from "nextra-theme-docs";
import { FaGithub, FaTwitter, FaLinkedin, FaRss } from "react-icons/fa";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { DiCodeigniter } from "react-icons/di";
import { Poppins } from "next/font/google";

const logoFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});

const Logo = (
  <div className="flex flex-row gap-2 justify-center items-center">
    <DiCodeigniter className="text-green-600 text-xl" />
    <span
      className="text-xl pt-1.5 font-bold text-black dark:text-white hover:text-black/95 dark:hover:text-white/95 transition-all"
      style={logoFont.style}
    >
      CS Resources
    </span>
  </div>
);

const Head = () => {
  const { title } = useConfig();
  const { route } = useRouter();

  const pageTitle = route === "/" || !title ? "CS Hub" : `${title} | CS Hub`;
  const socialImage = "";

  return (
    <>
      <meta name="msapplication-TileColor" content="#fff" />
      <meta name="theme-color" content="#fff" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />

      {/* Icons */}
      <link rel="icon" href="/favicon.jpg" type="image/png" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

      {/* Description */}
      <meta
        name="description"
        content="Empowering the next generation of computer scientists with cutting-edge articles, tutorials, and resources."
      />
      <meta
        name="og:description"
        content="Empowering the next generation of computer scientists with cutting-edge articles, tutorials, and resources."
      />

      {/* OpenGraph */}
      <meta name="og:image" content={socialImage} />
      <meta name="og:title" content={pageTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={socialImage} />
      <meta name="twitter:site:domain" content="http://localhost:3000" />
      <meta name="twitter:url" content="http://localhost:3000" />

      {/* Apple */}
      <meta name="apple-mobile-web-app-title" content="cs-hub" />
    </>
  );
};

const currentYear = new Date().getFullYear();
const Footer = (
  <footer className="text-gray-700 dark:text-gray-300 w-full">
    <div className="mx-auto px-4 sm:px-6 lg:px-0 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            CS Hub
          </h2>
          <p className="text-sm">
            Empowering the next generation of computer scientists with
            cutting-edge articles, tutorials, and resources.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/programming-for-career/cs-resources"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaGithub className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://github.com/programming-for-career/cs-resources"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaTwitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://github.com/programming-for-career/cs-resources"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com/programming-for-career/cs-resources"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaRss className="w-6 h-6" />
              <span className="sr-only">RSS Feed</span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Explore
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/articles"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                All Articles
              </Link>
            </li>
            <li>
              <Link
                href="/topics"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Topics
              </Link>
            </li>
            <li>
              <Link
                href="/tutorials"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Tutorials
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Events
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Popular Topics
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/topic/algorithms"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Algorithms
              </Link>
            </li>
            <li>
              <Link
                href="/topic/data-structures"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Data Structures
              </Link>
            </li>
            <li>
              <Link
                href="/topic/machine-learning"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Machine Learning
              </Link>
            </li>
            <li>
              <Link
                href="/topic/web-development"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Web Development
              </Link>
            </li>
            <li>
              <Link
                href="/topic/cybersecurity"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Cybersecurity
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Stay Updated
          </h3>
          <p className="mb-4 text-sm">
            Subscribe to our newsletter for the latest articles and CS insights.
          </p>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-gray-900 bg-gray-200 dark:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full px-3 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} CS Resources Hub. All rights reserved.
        </p>
        <nav className="mt-4 sm:mt-0">
          <ul className="flex space-x-4 text-sm">
            <li>
              <Link
                href="/about"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
);

const config: DocsThemeConfig = {
  logo: Logo,
  head: Head,
  footer: { text: Footer },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s | CS Resources",
      };
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: { backToTop: true },
};

export default config;
