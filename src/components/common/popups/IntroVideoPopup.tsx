import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import {
  overlayAnimation,
  overlayWrapperReveal,
} from '../../../utilities/animations';

import CloseIcon from '../../../../public/icons/xmark.svg';

/* eslint react/no-array-index-key: "off" */
interface IntroVideoPopupPropsType {
  status: boolean;
  onClose: () => void;
}

const IntroVideoPopup = ({ status, onClose }: IntroVideoPopupPropsType) => (
  <AnimatePresence>
    {status && (
      <Dialog
        static
        as={motion.div}
        variants={overlayAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        open={status}
        onClose={onClose}
        className="fixed inset-0 z-20 flex items-center justify-center"
      >
        <Dialog.Overlay className="absolute inset-0 bg-black opacity-40" />
        <Dialog.Panel
          as={motion.div}
          variants={overlayWrapperReveal}
          className="relative z-10 w-[95%] max-w-[720px] overflow-hidden rounded-xl bg-white text-left shadow-xl"
        >
          <div>
            <div className="relative h-0 w-full pb-[57%]">
              <iframe
                title="intro video"
                className="absolute top-0 left-0 h-full w-full"
                width="720"
                height="405"
                src="https://www.youtube.com/embed/V-mGiBfoaok?&theme=dark&autohide=1&modestbranding=1&showinfo=0&rel=0"
                frameBorder="0"
              />
            </div>
          </div>

          <button
            type="button"
            className="group absolute right-2 top-2 p-2"
            onClick={onClose}
          >
            <div className="svg_icon w-4 text-[#BCBCBC] group-hover:text-black">
              <CloseIcon />
            </div>
          </button>
        </Dialog.Panel>
      </Dialog>
    )}
  </AnimatePresence>
);
export default IntroVideoPopup;
