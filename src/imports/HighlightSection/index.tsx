import imgRectangle6581 from "./31c9a377057a439eb928b11cdc46131ddd854e43.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Reddit_Sans:SemiBold',sans-serif] leading-[24px] relative shrink-0 text-[#222] w-full">DIGITIZE THE ENTIRE INSPECTION WORKFLOW</p>
      <p className="font-['Reddit_Sans:Medium',sans-serif] leading-[20px] relative shrink-0 text-[#595959] w-full">Replaced paper forms, manual photo uploads, and end-of-day CRM re-entry with a single guided mobile app — inspectors capture everything on-site and data syncs automatically on submit.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Reddit_Sans:SemiBold',sans-serif] leading-[24px] relative shrink-0 text-[#222] w-full">DESIGNED FOR HOW INSPECTORS ACTUALLY WORK</p>
      <p className="font-['Reddit_Sans:Medium',sans-serif] leading-[20px] relative shrink-0 text-[#595959] w-full">{`Built around real field behavior observed during contextual inquiry — default-to-normal scoring, diagram-based inspection for Exterior & Structure, and offline-first support for any network condition.`}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Reddit_Sans:SemiBold',sans-serif] leading-[24px] relative shrink-0 text-[#222] w-full">{`IMPROVE INSPECTION QUALITY & CONSISTENCY`}</p>
      <p className="font-['Reddit_Sans:Medium',sans-serif] leading-[20px] relative shrink-0 text-[#595959] w-full">Every Abnormal finding requires photo evidence and a written note before submission. SOP compliance is enforced by the app flow — not left to individual judgment.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[16px] w-full">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#ecf9f1] flex-[1_0_0] min-w-px relative rounded-[20px]">
      <div aria-hidden className="absolute border border-[#12a154] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col items-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center not-italic px-[16px] py-[8px] relative size-full text-center">
          <p className="font-['Reddit_Sans:Medium',sans-serif] leading-[20px] relative shrink-0 text-[#222] text-[14px] w-full">Time per inspection</p>
          <p className="font-['Reddit_Sans:SemiBold',sans-serif] leading-[26px] relative shrink-0 text-[#12a154] text-[18px] w-full">−35%</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#ecf9f1] flex-[1_0_0] min-w-px relative rounded-[20px]">
      <div aria-hidden className="absolute border border-[#12a154] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col items-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center not-italic px-[16px] py-[8px] relative size-full text-center">
          <p className="font-['Reddit_Sans:Medium',sans-serif] leading-[20px] relative shrink-0 text-[#222] text-[14px] w-full">End-of-day re-entry</p>
          <p className="font-['Reddit_Sans:SemiBold',sans-serif] leading-[26px] relative shrink-0 text-[#12a154] text-[18px] w-full">Eliminated</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#ecf9f1] flex-[1_0_0] min-w-px relative rounded-[20px]">
      <div aria-hidden className="absolute border border-[#12a154] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col items-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center not-italic px-[16px] py-[8px] relative size-full text-center">
          <p className="font-['Reddit_Sans:Medium',sans-serif] leading-[20px] relative shrink-0 text-[#222] text-[14px] w-full">Inspector capacity</p>
          <p className="font-['Reddit_Sans:SemiBold',sans-serif] leading-[26px] relative shrink-0 text-[#12a154] text-[18px] w-full">−40%</p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0 w-[553px]">
      <Frame3 />
      <Frame7 />
    </div>
  );
}

export default function HighlightSection() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex gap-[100px] items-center justify-center py-[24px] relative rounded-[20px] size-full" data-name="Highlight section">
      <Frame8 />
      <div className="h-[465px] relative rounded-[20px] shrink-0 w-[217px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle6581} />
      </div>
    </div>
  );
}