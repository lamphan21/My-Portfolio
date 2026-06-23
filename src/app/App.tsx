import { useState } from "react";
import { toast, Toaster } from "sonner";
import CaseStudy from "./CaseStudy";
import checkSvg from "@/imports/CircleCheckFill/svg-jvr8bix39d";
import svgPaths from "@/imports/Home/svg-3ah1t0sm9y";
import imgProfile from "@/imports/image.png";
import imgLPLogo from "@/imports/Home/06b7cf0243876e41f6f329f7b98920f1bb93e8f2.png";
import imgInspection from "@/imports/Home/278d9f3096d2580180eb866ecc19d6f3b8210c43.png";
import imgLinkedIn from "@/imports/Home/d08259f5286b16eabb712c3e72dc893df722aaa5.png";

const SKILLS = [
  "UXUI Design",
  "User Testing",
  "Product Thinking",
  "User Research",
  "AI Workflow",
  "Figma",
  "Adobe Photoshop & Illustrator",
];


function SkillTag({ label }: { label: string }) {
  return (
    <div className="bg-[#f7f7f7] hover:bg-[#ebebeb] transition-colors duration-200 flex h-[30px] items-center justify-center px-4 py-1.5 rounded-xl shrink-0 cursor-default">
      <span className="font-semibold leading-[18px] text-[#595959] text-xs whitespace-nowrap" style={{ fontFamily: "'Reddit Sans', sans-serif" }}>
        {label}
      </span>
    </div>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <div className="bg-[#f4f4f4] flex items-center justify-center px-3 py-1 rounded-lg shrink-0">
      <span className="font-bold leading-4 text-[#595959] text-[10px] whitespace-nowrap" style={{ fontFamily: "'Reddit Sans', sans-serif" }}>
        {label}
      </span>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-[#f7f7f7] flex-1 min-w-0 rounded-xl">
      <div className="flex flex-col gap-1 items-center p-2 text-center">
        <p className="font-bold leading-5 text-[#12a154] text-sm w-full" style={{ fontFamily: "'Reddit Sans', sans-serif" }}>
          {value}
        </p>
        <p className="font-medium leading-[18px] text-[#595959] text-xs w-full" style={{ fontFamily: "'Reddit Sans', sans-serif" }}>
          {label}
        </p>
      </div>
    </div>
  );
}

function ContactCard({
  icon,
  label,
  href,
  onClick,
  showArrow = true,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void | Promise<void>;
  showArrow?: boolean;
}) {
  const inner = (
    <div className="group bg-white flex gap-3 items-center px-5 py-4 rounded-2xl border border-[#e8e8e8] hover:border-[#222] hover:shadow-md transition-all duration-200 cursor-pointer w-full">
      <div className="shrink-0 size-6 flex items-center justify-center">{icon}</div>
      <p className="font-medium leading-5 text-[#222] text-base whitespace-nowrap flex-1" style={{ fontFamily: "'Reddit Sans', sans-serif" }}>
        {label}
      </p>
      {showArrow && (
        <div className="overflow-clip shrink-0 size-6 flex items-center justify-center opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200">
          <svg fill="none" viewBox="0 0 12 11" className="w-3 h-[10.75px]">
            <path d={svgPaths.p3deae080} fill="#222222" />
          </svg>
        </div>
      )}
    </div>
  );

  if (onClick) {
    return (
      <div className="flex-1 min-w-0" onClick={onClick}>
        {inner}
      </div>
    );
  }

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-0">
      {inner}
    </a>
  ) : (
    <div className="flex-1 min-w-0">{inner}</div>
  );
}

export default function App() {
  const [page, setPage] = useState<"home" | "case-study">("home");

  if (page === "case-study") {
    return <CaseStudy onBack={() => setPage("home")} />;
  }

  return (
    <div className="bg-white min-h-screen w-full font-sans">
      <Toaster position="bottom-center" />
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-[420px] bg-gradient-to-b from-[#e0ecff] to-white pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 w-full flex items-center justify-between px-[120px] py-5">
        {/* Logo + name */}
        <div className="flex items-center gap-3">
          <div className="relative rounded-lg size-8 shrink-0 overflow-hidden">
            <img src={imgLPLogo} alt="LP logo" className="absolute inset-0 size-full object-cover rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center gap-px pointer-events-none">
              <svg viewBox="0 0 6.846 8.162" className="h-[8.162px] w-[6.846px]" fill="none">
                <path d={svgPaths.p33b3e000} fill="white" />
              </svg>
              <svg viewBox="0 0 1.54 1.456" className="h-[1.456px] w-[1.54px]" fill="none">
                <path d="M0 1.456V0H1.54V1.456H0Z" fill="white" />
              </svg>
              <svg viewBox="0 0 7.672 8.162" className="h-[8.162px] w-[7.672px]" fill="none">
                <path d={svgPaths.p25e4c3c0} fill="white" />
              </svg>
            </div>
          </div>
          <span className="font-medium text-base text-[#222] whitespace-nowrap" style={{ fontFamily: "'Roboto Slab', serif" }}>
            Lam Phan
          </span>
        </div>

        {/* Icon buttons */}
        <div className="flex items-center gap-4">
          {/* Mail */}
          <a
            href="mailto:lamphan643@gmail.com"
            className="bg-white rounded-2xl flex items-center justify-center hover:shadow-md hover:scale-105 transition-all duration-200"
            style={{ width: 40, height: 40 }}
            title="Email"
          >
            <svg fill="none" viewBox="0 0 20 15.3047" className="w-5 h-[15.3px]">
              <path d={svgPaths.p26f1d300} fill="#222222" />
            </svg>
          </a>

          {/* Phone — copy to clipboard */}
          <button
            className="bg-white rounded-2xl flex items-center justify-center hover:shadow-md hover:scale-105 transition-all duration-200"
            style={{ width: 40, height: 40 }}
            title="Copy phone number"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText("+84898934341");
              } catch {
                const ta = document.createElement("textarea");
                ta.value = "+84898934341";
                ta.style.cssText = "position:fixed;opacity:0";
                document.body.appendChild(ta);
                ta.focus();
                ta.select();
                document.execCommand("copy");
                document.body.removeChild(ta);
              }
              toast("Sao chép thành công", {
                position: "top-right",
                style: { marginTop: "72px" },
                icon: (
                  <div className="relative size-5 shrink-0">
                    <svg fill="none" viewBox="0 0 20 20" className="absolute inset-0 size-full">
                      <path clipRule="evenodd" d={checkSvg.p14321d00} fill="#12A154" fillRule="evenodd" />
                    </svg>
                  </div>
                ),
              });
            }}
          >
            <svg fill="none" viewBox="0 0 21.2008 21.2005" className="w-[21px] h-[21px]">
              <path d={svgPaths.p116da880} fill="#222222" />
            </svg>
          </button>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/lam-phan-6806141b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl flex items-center justify-center hover:shadow-md hover:scale-105 transition-all duration-200"
            style={{ width: 40, height: 40 }}
            title="LinkedIn"
          >
            <img src={imgLinkedIn} alt="LinkedIn" className="size-6 rounded object-cover" />
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 w-full max-w-[900px] mx-auto px-6 sm:px-8 lg:px-0 pb-20">
        {/* Hero section */}
        <section className="pt-16 pb-12 flex flex-col-reverse sm:flex-row items-start gap-8 sm:gap-12 justify-between">
          {/* Text content */}
          <div className="flex flex-col gap-5 min-w-0" style={{ maxWidth: 500 }}>
            <h1
              className="font-semibold leading-[28px] text-[#222] text-xl"
              style={{ fontFamily: "'Reddit Sans', sans-serif" }}
            >
              {`Hi, I'm Lam — a product designer based in Ho Chi Minh City.`}
            </h1>
            <p
              className="font-medium leading-6 text-[#595959] text-base"
              style={{ fontFamily: "'Reddit Sans', sans-serif" }}
            >
              {`I've spent 5 years designing at Chợ Tốt, Vietnam's largest C2C marketplace. What keeps me going isn't the craft itself — it's the moment a design decision clicks into place because you actually understood the problem. That's what I chase.`}
            </p>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2 items-center">
              {SKILLS.map((s) => (
                <SkillTag key={s} label={s} />
              ))}
            </div>

            {/* Contact info */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="font-medium leading-[18px] text-[#8c8c8c] text-xs" style={{ fontFamily: "'Reddit Sans', sans-serif" }}>
                lamphan643@gmail.com
              </span>
              <span className="size-[2px] rounded-full bg-[#8c8c8c] inline-block" />
              <span className="font-medium leading-[18px] text-[#8c8c8c] text-xs" style={{ fontFamily: "'Reddit Sans', sans-serif" }}>
                (+84) 8989 3434 1
              </span>
            </div>
          </div>

          {/* Profile photo */}
          <div className="shrink-0 w-[160px] sm:w-[204px] h-[210px] sm:h-[265px] rounded-[60px] sm:rounded-[74px] overflow-hidden self-center sm:self-start">
            <img
              src={imgProfile}
              alt="Lam Phan"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-[#e8e8e8] mb-10" />

        {/* Case Studies section */}
        <section className="flex flex-col gap-10">
          {/* Section header */}
          <div className="flex flex-col gap-4">
            <h2
              className="font-semibold leading-7 text-[#222] text-xl"
              style={{ fontFamily: "'Reddit Sans', sans-serif" }}
            >
              CASE STUDIES
            </h2>
            <p
              className="font-normal leading-6 text-[#595959] text-base"
              style={{ fontFamily: "'Reddit Sans', sans-serif", maxWidth: 500 }}
            >
              Heads up! There case studies are a bit lengthy. I share a lot about my approach and design thinking. Not a ton of pictures, but hopefully plenty of insights. Thanks for stopping by--I hope find something usefull.
            </p>
          </div>

          {/* Case study card 1 — Inspection App */}
          <div
            className="group flex flex-col sm:flex-row items-stretch rounded-[20px] overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => setPage("case-study")}
          >
            {/* Image */}
            <div className="relative w-full sm:w-1/2 h-[200px] sm:h-[294px] overflow-hidden rounded-none flex-shrink-0">
              <img
                src={imgInspection}
                alt="Inspection App"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 justify-center px-5 py-4 flex-1 min-w-0">
              {/* Title + badges */}
              <div className="flex flex-col gap-2">
                <p
                  className="font-bold leading-6 text-[#222] text-base"
                  style={{ fontFamily: "'Reddit Sans', sans-serif" }}
                >
                  INSPECTION APP
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge label="Greenfield" />
                  <Badge label="Internal tool" />
                  <Badge label="Mobile" />
                  <Badge label="2023" />
                </div>
                <p
                  className="font-medium leading-6 text-[#595959] text-base"
                  style={{ fontFamily: "'Reddit Sans', sans-serif", maxWidth: 500 }}
                >
                  {`Replacing a fully paper-based vehicle inspection workflow with a guided mobile app — built from scratch for Chợ Tốt Xe's inspector team.`}
                </p>
              </div>

              {/* Stats */}
              <div className="flex gap-3">
                <StatCard value="−35%" label="Time per inspection" />
                <StatCard value="+40%" label="Inspector capacity" />
                <StatCard value="0 mins" label="Manual re-entry" />
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-[#e8e8e8]" />

              {/* Footer row */}
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2 items-center">
                  {["UX Research", "UI Design", "User flow"].map((item, i) => (
                    <div key={item} className="flex items-center gap-2">
                      {i > 0 && (
                        <span className="size-[2px] rounded-full bg-[#595959] inline-block" />
                      )}
                      <span
                        className="font-medium leading-[18px] text-[#595959] text-xs whitespace-nowrap"
                        style={{ fontFamily: "'Reddit Sans', sans-serif" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 group/link ml-4 shrink-0">
                  <span
                    className="font-bold leading-[18px] text-[#222] text-xs underline underline-offset-2 whitespace-nowrap group-hover/link:text-[#555] transition-colors duration-200"
                    style={{ fontFamily: "'Reddit Sans', sans-serif" }}
                  >
                    View case study
                  </span>
                  <div className="overflow-clip size-5 flex items-center justify-center group-hover/link:translate-x-0.5 transition-transform duration-200">
                    <svg fill="none" viewBox="0 0 10 8.96" className="w-[10px] h-[9px]">
                      <path d={svgPaths.p442bd00} fill="#222222" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case study card 2 — Updating */}
          <div className="flex flex-col sm:flex-row items-stretch rounded-[20px] overflow-hidden">
            {/* Placeholder gradient image */}
            <div
              className="w-full sm:w-1/2 h-[94px] sm:h-[94px] flex-shrink-0"
              style={{ backgroundImage: "linear-gradient(102.059deg, rgb(222, 222, 222) 1.0644%, rgb(247, 247, 247) 46.801%)" }}
            />
            <div className="flex flex-col justify-center px-5 py-4 flex-1">
              <p
                className="font-medium leading-5 text-[#8c8c8c] text-base"
                style={{ fontFamily: "'Reddit Sans', sans-serif" }}
              >
                Updating...
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-[#e8e8e8] my-12" />

        {/* Get in touch */}
        <section className="flex flex-col gap-5">
          <h2
            className="font-semibold leading-7 text-[#222] text-xl"
            style={{ fontFamily: "'Reddit Sans', sans-serif" }}
          >
            Get in touch
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <ContactCard
              href="mailto:lamphan643@gmail.com"
              label="lamphan643@gmail.com"
              icon={
                <svg fill="none" viewBox="0 0 20 15.3047" className="w-5 h-[15.3px]">
                  <path d={svgPaths.p26f1d300} fill="#222222" />
                </svg>
              }
            />
            <ContactCard
              label="(+84) 8989 3434 1"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText("+84898934341");
                } catch {
                  // Fallback for restricted environments
                  const ta = document.createElement("textarea");
                  ta.value = "+84898934341";
                  ta.style.cssText = "position:fixed;opacity:0";
                  document.body.appendChild(ta);
                  ta.focus();
                  ta.select();
                  document.execCommand("copy");
                  document.body.removeChild(ta);
                }
                toast("Sao chép thành công", {
                  icon: (
                    <div className="relative size-5 shrink-0">
                      <svg fill="none" viewBox="0 0 20 20" className="absolute inset-0 size-full">
                        <path clipRule="evenodd" d={checkSvg.p14321d00} fill="#12A154" fillRule="evenodd" />
                      </svg>
                    </div>
                  ),
                });
              }}
              icon={
                <svg fill="none" viewBox="0 0 21.2008 21.2005" className="w-[21px] h-[21px]">
                  <path d={svgPaths.p116da880} fill="#222222" />
                </svg>
              }
            />
            <ContactCard
              href="https://www.linkedin.com/in/lam-phan-6806141b8/"
              label="LinkedIn"
              showArrow={false}
              icon={
                <img
                  src={imgLinkedIn}
                  alt="LinkedIn"
                  className="size-6 rounded object-cover"
                />
              }
            />
          </div>
        </section>
      </main>
    </div>
  );
}
