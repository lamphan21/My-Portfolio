import { useEffect, useRef, useState } from "react";

// Banner assets (unchanged)
import imgBanner  from "@/imports/CaseStudy-1/c24a079593eaa5ca27829bea9d95435882180b97.png";
import ImageGroup from "@/imports/ImageGroup/index";

// New body import
import ImportedBody from "@/imports/Frame2085666336-1/index";
import svgPaths    from "@/imports/Frame2085666336-1/svg-hsaqpgwdsf";

const RS = "'Reddit Sans', sans-serif";

const SECTIONS = [
  { label: "Overview",          dataName: "Overview" },
  { label: "Context & Problem", dataName: "Context & Problem" },
  { label: "Research",          dataName: "Research" },
  { label: "Solution design",   dataName: "Solution design" },
  { label: "Impact",            dataName: "Impact" },
  { label: "Learning",          dataName: "Learning" },
];

// ── Sitemap arrows (injected once after mount) ────────────────────────────────
function injectSitemapArrows(sitemap: HTMLElement) {
  if (sitemap.querySelector("svg.sm-arrows")) return;
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.classList.add("sm-arrows");
  Object.assign(svg.style, { position:"absolute", top:"0", left:"0",
    pointerEvents:"none", overflow:"visible", zIndex:"1" });
  svg.setAttribute("width","900"); svg.setAttribute("height","1010");

  const defs = document.createElementNS(ns,"defs");
  const mk   = document.createElementNS(ns,"marker");
  mk.setAttribute("id","sm-a"); mk.setAttribute("markerWidth","8");
  mk.setAttribute("markerHeight","8"); mk.setAttribute("refX","7");
  mk.setAttribute("refY","4"); mk.setAttribute("orient","auto");
  const mp = document.createElementNS(ns,"path");
  mp.setAttribute("d","M 0 1 L 7 4 L 0 7 Z"); mp.setAttribute("fill","#8C8C8C");
  mk.appendChild(mp); defs.appendChild(mk); svg.appendChild(defs);

  function ln(x1:number,y1:number,x2:number,y2:number,arrow=true){
    const l=document.createElementNS(ns,"line");
    l.setAttribute("x1",String(x1)); l.setAttribute("y1",String(y1));
    l.setAttribute("x2",String(x2)); l.setAttribute("y2",String(y2));
    l.setAttribute("stroke","#8C8C8C"); l.setAttribute("stroke-width","1.5");
    if(arrow) l.setAttribute("marker-end","url(#sm-a)");
    svg.appendChild(l);
  }

  // Login → Home
  ln(357,36,357,74);
  // Home → fan bar → tabs
  ln(357,110,357,139,false);
  ln(50,139,799,139,false);
  ln(50,139,50,168);   ln(204,139,204,168);
  ln(357,139,357,168); ln(511,139,511,168);
  ln(665,139,665,168); ln(799,139,799,168);
  // Create report chain
  ln(50,204,50,242); ln(50,278,50,314); ln(50,350,50,386);
  // Start inspect → dashed box → Review → Submit
  ln(100,404,142,404);
  ln(485,836,485,876); ln(485,912,485,950);

  sitemap.appendChild(svg);
}

// ── Banner (full-viewport-width, scales) ─────────────────────────────────────
function Banner() {
  return (
    <div className="relative overflow-hidden w-full" style={{ height: 600, marginBottom: 80 }}>
      <img src={imgBanner} alt=""
           className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-black/10" />

      {/* Phone mockups */}
      <div className="absolute hidden lg:block" style={{ right:"4%", bottom:0, width:586, height:500 }}>
        <ImageGroup />
      </div>

      {/* Text */}
      <div className="relative z-10 h-full flex flex-col justify-center px-[clamp(24px,8vw,120px)]"
           style={{ maxWidth:700 }}>
        <p className="text-white/80 mb-2" style={{ fontFamily:RS, fontSize:16 }}>
          --- Greenfield Project · Internal Tool · 2023
        </p>
        <p className="text-white font-bold mb-6"
           style={{ fontFamily:RS, fontSize:"clamp(28px,4vw,60px)", lineHeight:1.2 }}>
          Inspection App - Chợ Tốt Xe
        </p>
        <div className="flex flex-wrap gap-2">
          {["Product design","Research","Interview","Testing"].map(t => (
            <span key={t} className="bg-white rounded-xl px-4 py-2 text-[#222] text-base"
                  style={{ fontFamily:RS, fontWeight:500 }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function CaseStudy({ onBack }: { onBack: () => void }) {
  const scrollRef      = useRef<HTMLDivElement>(null);
  const sectionTopsRef = useRef<number[]>([]);
  const [activeTab, setActiveTab] = useState(0);

  // Scroll to top on mount + one-time DOM setup
  useEffect(() => {
    const outer = scrollRef.current;
    if (!outer) return;
    outer.scrollTo(0, 0);

    // Hide imported Navigate-tab (replaced by React overlay)
    const nav = outer.querySelector('[data-name="Navigate-tab"]') as HTMLElement | null;
    if (nav) nav.style.display = "none";

    // Wire Back to top
    const btt = outer.querySelector('[data-name="Back to top"]') as HTMLElement | null;
    if (btt) {
      btt.style.cursor = "pointer";
      btt.addEventListener("click", () => outer.scrollTo({ top: 0, behavior: "smooth" }));
    }

    // Sitemap arrows
    const sitemap = outer.querySelector('[data-name="Sitemap"]') as HTMLElement | null;
    if (sitemap) injectSitemapArrows(sitemap);

    // Calculate section scroll positions (after layout settles)
    requestAnimationFrame(() => {
      const outerRect = outer.getBoundingClientRect();
      sectionTopsRef.current = SECTIONS.map(({ dataName }) => {
        const sec = outer.querySelector(`[data-name="${dataName}"]`);
        if (!sec) return 0;
        return sec.getBoundingClientRect().top - outerRect.top + outer.scrollTop;
      });
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Scroll → active tab
  useEffect(() => {
    const outer = scrollRef.current;
    if (!outer) return;
    function onScroll() {
      const scrollTop = outer!.scrollTop + 100;
      let active = 0;
      sectionTopsRef.current.forEach((top, i) => {
        if (top <= scrollTop) active = i;
      });
      setActiveTab(active);
    }
    outer.addEventListener("scroll", onScroll, { passive: true });
    return () => outer.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToSection(i: number) {
    const outer = scrollRef.current;
    if (!outer) return;
    const top = sectionTopsRef.current[i] ?? 0;
    outer.scrollTo({ top: top - 72, behavior: "smooth" });
  }

  return (
    <div ref={scrollRef} className="fixed inset-0 overflow-auto bg-white z-10">
      {/* Banner — full viewport width, scales */}
      <Banner />

      {/* Body — fixed 1200px, centered, no cropping */}
      <div style={{ width: 1200, margin: "0 auto", paddingBottom: 80 }}>
        <ImportedBody />
      </div>

      {/* Back to top button */}
      <div style={{ width: "100%", paddingBottom: 60, display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", padding: "8px 16px" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="#595959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div style={{ alignSelf: "stretch", color: "var(--Text-text-secondary, #595959)", fontSize: 14, fontFamily: "Reddit Sans", fontWeight: 700, lineHeight: "20px", wordWrap: "break-word" }}>Back to top</div>
        </button>
      </div>

      {/* Fixed: back button */}
      <button
        onClick={onBack}
        className="group fixed top-4 left-8 z-50 bg-white/95 backdrop-blur-sm flex gap-2 items-center px-4 py-2 rounded-full border border-[#e8e8e8] hover:border-[#222] hover:shadow-md transition-all duration-200 shadow-sm"
      >
        <div className="size-5 flex items-center justify-center group-hover:-translate-x-0.5 transition-transform duration-200">
          <svg fill="none" viewBox="0 0 12.0001 10.7502" className="w-3 h-[10.75px]">
            <path d={svgPaths.p2a8c0900} fill="#222" />
          </svg>
        </div>
        <span style={{ fontFamily:RS, fontWeight:700, fontSize:14, color:"#222" }}>
          Back to me
        </span>
      </button>

      {/* Fixed: sticky NavigateTab */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white rounded-full shadow-[0px_4px_16px_0px_rgba(34,34,34,0.12)] flex items-center overflow-hidden">
        {SECTIONS.map((sec, i) => (
          <button
            key={sec.dataName}
            onClick={() => scrollToSection(i)}
            className="flex items-center justify-center px-5 py-2 transition-colors duration-150 whitespace-nowrap"
            style={{ backgroundColor: activeTab === i ? "#f4f4f4" : "transparent" }}
          >
            <span style={{
              fontFamily: RS,
              fontWeight: activeTab === i ? 700 : 500,
              fontSize: 14,
              color: activeTab === i ? "#222" : "#595959",
            }}>
              {sec.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
