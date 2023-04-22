/* eslint react/jsx-one-expression-per-line: "off" */
import StarIcon from '../../../../public/icons/star.svg';
import USFlag from '../../../../public/icons/american-flag.svg';

interface ReviewCardProps {
  item: number;
}

const ReviewCard = ({ item }: ReviewCardProps) => (
  <div className="mx-4 my-2 md:m-0 lg:w-[49%]">
    <div className="flex flex-wrap overflow-hidden rounded-[10px] shadow-spread sm:flex-nowrap">
      <div
        className="flex h-[160px] w-full shrink-0 overflow-hidden rounded-[10px] bg-cover bg-center bg-no-repeat sm:h-auto sm:max-w-[202px]"
        style={{ backgroundImage: `url(/review-headshot-${item}.jpg)` }}
      >
        {/* <Image
          src={`/review-headshot-${item}.jpg`}
          width={202 * 2}
          height={183 * 2}
          alt="review 1"
          className="w-full rounded-[10px] sm:w-auto"
        /> */}
      </div>
      <div className="flex-auto px-2 py-2 xl:px-3">
        <div className="flex items-center justify-between">
          <div className="text-xs xl:text-[13px]">
            Review by <strong>Annett Prudlo</strong> from Germany
          </div>
          <div className="flex gap-[1px] text-[#FFCE31]">
            <div className="svg_icon w-2">
              <StarIcon />
            </div>
            <div className="svg_icon w-2">
              <StarIcon />
            </div>
            <div className="svg_icon w-2">
              <StarIcon />
            </div>
            <div className="svg_icon w-2">
              <StarIcon />
            </div>
            <div className="svg_icon w-2 text-[#DADADA]">
              <StarIcon />
            </div>
          </div>
        </div>
        <div className="text-[10px] xl:text-xs">April 22, 2020</div>
        <div className="pb-2 pt-2 text-[10px] text-black opacity-70 xl:pb-4 xl:pt-3 xl:text-xs">
          Sit et integer nisl diam malesuada. Sed cras natoque metus fermentum.
          Morbi morbi urna, molestie venenatis. Consectetur sit ac sed nunc
          interdum tortor ultrices vel pulvinar. Sit at hendrerit magna tempus,
          ac sem sagittis, nulla.
        </div>
        <div className="flex items-center">
          <div className="mr-1 w-[22px]">
            <USFlag />
          </div>
          <span className="text-[10px] text-black opacity-50">
            United States, NY
          </span>
        </div>
      </div>
    </div>
  </div>
);
export default ReviewCard;
