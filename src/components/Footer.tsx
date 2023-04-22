import Image from 'next/image';
import Link from 'next/link';
import FooterLogo from '../../public/footer-logo.png';
import InstagramIcon from '../../public/icons/instagram.svg';
import FacebookIcon from '../../public/icons/facebook.svg';
import TwitterIcon from '../../public/icons/twitter.svg';
import SnapIcon from '../../public/icons/snapchat.svg';

/* eslint jsx-a11y/anchor-is-valid: "off" */
const Footer = () => (
  <footer
    id="footer"
    className="bg-cover bg-bottom bg-no-repeat pb-20 pt-10 lg:pb-10"
    style={{ backgroundImage: 'url(/footer-bg.png)' }}
  >
    <div className="container">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <div className="flex items-center">
            <div className="svg_icon mr-4 w-[95px] text-transparent">
              <Image src={FooterLogo} width={95} height={72} />
            </div>
            <div>
              <p className="relative mb-2 text-xl font-bold text-white md:text-2xl lg:text-3xl xl:text-4xl">
                MentorOcean.com
              </p>
              <p className="text-xs font-medium text-white md:text-base lg:text-lg">
                Guided Approach Full Stop Guaranteed Results
              </p>
            </div>
          </div>
          <div className="flex max-w-[200px] justify-between pt-5">
            <div className="svg_icon w-6 text-white">
              <InstagramIcon />
            </div>
            <div className="svg_icon w-6 text-white">
              <FacebookIcon />
            </div>
            <div className="svg_icon w-6 text-white">
              <TwitterIcon />
            </div>
            <div className="svg_icon w-6 text-white">
              <SnapIcon />
            </div>
          </div>
        </div>
        <div className="flex w-full gap-8 pt-10 text-white md:w-1/2 md:justify-end md:pt-0">
          <div>
            <h4 className="pb-2 text-xs font-bold uppercase">
              How does it work
            </h4>
            <ul>
              <li>
                <a href="#" className="text-xs underline">
                  Sale
                </a>
              </li>
              <li>
                <a href="#" className="text-xs underline">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-xs underline">
                  Sale
                </a>
              </li>
              <li>
                <a href="#" className="text-xs underline">
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <h4 className="pb-2 text-xs font-bold uppercase">ABOUT</h4>
            <ul>
              <li>
                <a href="#" className="text-xs underline">
                  Sale
                </a>
              </li>
              <li>
                <a href="#" className="text-xs underline">
                  Sale
                </a>
              </li>
              <li>
                <a href="#" className="text-xs underline">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-xs underline">
                  Sale
                </a>
              </li>
              <li>
                <a href="#" className="text-xs underline">
                  Events
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="pb-2 text-xs font-bold uppercase">
              OUR INITIATIVES
            </h4>
            <ul>
              <li>
                <a href="#" className="text-xs underline">
                  ToS
                </a>
              </li>
              <li>
                <a href="#" className="text-xs underline">
                  Rules
                </a>
              </li>
              <li>
                <a href="#" className="text-xs underline">
                  ToS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 pt-5 text-white">
        <p className="text-xs font-bold md:text-lg">MentorOcean Inc 2021</p>
        <ul className="flex gap-2 md:gap-4">
          <li>
            <a href="#" className="text-xs underline">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="text-xs underline">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="text-xs underline">
              GDPR
            </a>
          </li>
          <li>
            <Link href="/sitemap">
              <a className="text-xs underline">Sitemap</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
