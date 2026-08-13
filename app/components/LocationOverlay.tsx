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
        {activeHotspot ? <PortfolioContent content={activeHotspot.content} /> : null}
      </div>
    </aside>
  );
}
