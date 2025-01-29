import {
    BookOpenIcon,
    ChevronRightIcon,
    MessagesSquareIcon,
    Settings2Icon,
    TabletSmartphoneIcon,
  } from "lucide-react";
  
  export default function IconSectionSolidIconWithHoverEffect() {
    return (
      <>
        {/* Icon Blocks */}
        <div className="container py-24 lg:py-32">
        <div className="text-4xl font-semibold flex justify-evenly pb-24">
                <h1> Why Us?</h1>
        </div>
        <span></span>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
            {/* Icon Block */}
            <a
              className="group flex flex-col justify-center hover:bg-primary-foreground/90 rounded-lg p-4 md:p-7 "
              href="#"
            >
              <div className="flex justify-center items-center w-12 bg-primary h-12 border rounded-lg">
                <TabletSmartphoneIcon className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold">Perfect ergonomics</h3>
                <p className="mt-1 text-muted-foreground">
                Designed for comfort, efficiency, and ease.
                </p>
                <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm  decoration-2 group-hover:underline font-medium">
                  Learn more
                  <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
                </span>
              </div>
            </a>
            {/* End Icon Block */}
            {/* Icon Block */}
            <a
              className="group flex flex-col justify-center hover:bg-primary-foreground/90 rounded-lg p-4 md:p-7 "
              href="#"
            >
              <div className="flex justify-center items-center w-12 bg-primary h-12 border rounded-lg">
                <Settings2Icon className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold">Customizable</h3>
                <p className="mt-1 text-muted-foreground">
                  Components are easily customized and extendable
                </p>
                <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm  decoration-2 group-hover:underline font-medium">
                  Learn more
                  <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
                </span>
              </div>
            </a>
            {/* End Icon Block */}
            {/* Icon Block */}
            <a
              className="group flex flex-col justify-center hover:bg-primary-foreground/90 rounded-lg p-4 md:p-7 "
              href="#"
            >
              <div className="flex justify-center items-center w-12 bg-primary h-12 border rounded-lg">
                <BookOpenIcon className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold">Full transparency</h3>
                <p className="mt-1 text-muted-foreground">
                Experience complete clarity with full transparency.
                </p>
                <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm  decoration-2 group-hover:underline font-medium">
                  Learn more
                  <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
                </span>
              </div>
            </a>
            {/* End Icon Block */}
            {/* Icon Block */}
            <a
              className="group flex flex-col justify-center hover:bg-primary-foreground/90 rounded-lg p-4 md:p-7 "
              href="#"
            >
              <div className="flex justify-center items-center w-12 bg-primary h-12 border rounded-lg">
                <MessagesSquareIcon className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold">2Best value for money</h3>
                <p className="mt-1 text-muted-foreground">
                Maximize quality and affordability for the best value.
                </p>
                <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm  decoration-2 group-hover:underline font-medium">
                  Learn more
                  <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
                </span>
              </div>
            </a>
            {/* End Icon Block */}
          </div>
        </div>
        {/* End Icon Blocks */}
      </>
    );
  }
  