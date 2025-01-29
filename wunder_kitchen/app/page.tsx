import HeroSectionImageWithReviews from "@/components/hero"
import IconSectionCentredDescriptionWithIconBlocks from "@/components/vision"
import IconSectionSolidIconWithHoverEffect from "@/components/action"
import PricingSectionCards from "@/components/pricing"

export default function Page() {
  return (
    <div >
      <div className="flex  justify-center ">
      <HeroSectionImageWithReviews/>
      </div>
      <div className="flex  justify-center ">
        <IconSectionCentredDescriptionWithIconBlocks/>
      </div>
      <div className="flex  justify-center ">
        <IconSectionSolidIconWithHoverEffect/>
      </div>
      <div className="flex  justify-center">
        <PricingSectionCards />
      </div>
    </div>
  )
}