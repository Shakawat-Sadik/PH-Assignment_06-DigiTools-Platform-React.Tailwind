import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSquareFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content py-5 md:py-10 lg:py-20 px-10 md:px-25 lg:px-50">
      <div className="w-full grid grid-cols-2 lg:grid-cols-6 gap-10 pb-16 border-b border-neutral-content/20">
        <div className="col-span-2 flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">DigiTools</h1>
          <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-base font-medium">Product</span>
          <nav className="font-normal text-sm">
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#featured">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#">Templates</a>
              </li>
              <li>
                <a href="#">Integrations</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-base font-medium">Company</span>
          <nav className="font-normal text-sm">
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-base font-medium">Resources</span>
          <nav className="font-normal text-sm">
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#">Documentations</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-base font-medium">Social Links</span>
          <div className="flex gap-2">
            <a
              href="#"
              className="w-fit text-lg p-2 rounded-full aspect-square bg-base-content text-base-100 items-center justify-center flex"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="#"
              className="w-fit text-lg p-2 rounded-full aspect-square bg-base-content text-base-100 items-center justify-center flex"
            >
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>

            <a
              href="#"
              className="w-fit text-lg p-2 rounded-full aspect-square bg-base-content text-base-100 items-center justify-center flex"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full pt-5 text-xs tracking-wide flex flex-col gap-1 sm:flex-row items-center justify-between font-light text-neutral-content/70 my-0 mx-auto">
        <p>&copy; 2026 Digitools. All rights reserved.</p>

        <div className="flex gap-2 md:gap-5">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
