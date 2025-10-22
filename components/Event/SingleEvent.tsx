import { Event } from "@/types/event";
import Image from "next/image";
import Link from "next/link";

const SingleEvent = ({ event }: { event: Event }) => {
  const { title, cover_image, paragraph, venue, tags, date } = event;
  return (
      <>
        <div
            className="hover:shadow-two dark:hover:shadow-gray-dark group relative rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
        >
          <Link
              href={"/events/" + event.id}
              className="relative block aspect-[37/37] w-full"
          >
            <Image src={cover_image} alt="image" fill/>
          </Link>
          <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
            <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
              {title}
            </p>
            <div className="flex items-center">
              <div
                  className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
                <div className="mr-4">
                  <div className="relative h-10 w-10 rounded-full">
                    <Image className={"object-cover overflow:hidden"} src={venue.image} alt="author" fill/>
                  </div>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                    At {venue.name}
                  </h4>
                  <p className="text-xs text-body-color">{venue.location}</p>
                </div>
              </div>
              <div className="inline-block">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  Date
                </h4>
                <p className="text-xs text-body-color">{date}</p>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default SingleEvent;
