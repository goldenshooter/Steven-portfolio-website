import Image from "next/image";
import type { HotspotConfig } from "../types/portfolio";
import { BackButton } from "./BackButton";
import { PortfolioContent } from "./PortfolioContent";

type LocationOverlayProps = {
  activeHotspot: HotspotConfig | null;
  onClose: () => void;
};

export function LocationOverlay({
  activeHotspot,
  onClose,
}: LocationOverlayProps) {
  return (
    <aside
      aria-hidden={!activeHotspot}
      aria-label={activeHotspot ? `${activeHotspot.title} portfolio details` : undefined}
      className="locationOverlay"
      data-visible={Boolean(activeHotspot)}
    >
      <div className="overlayChrome">
        <BackButton onClick={onClose} />
        {activeHotspot?.detailImage ? (
          <div className="detailImageFrame">
            <Image
              alt={activeHotspot.detailImage.alt}
              fill
              sizes="(max-width: 720px) 100vw, 30rem"
              src={activeHotspot.detailImage.src}
            />
          </div>
        ) : null}
        {activeHotspot ? <PortfolioContent content={activeHotspot.content} /> : null}
      </div>
    </aside>
  );
}
