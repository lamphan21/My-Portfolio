import imgImage3 from "./aec08c7614b451631de6c122cdce79850f159e5d.png";
import imgImage4 from "./5927d3ea5575e54ccb98a08371bd05e67cec6ce0.png";
import imgImage5 from "./a4fd85102aaba78a31908876a5dffb611e4f2516.png";
import imgImage6 from "./77e1cc3cda11307daec293f9a1a6cfb102f4598f.png";
import imgImage7 from "./0d35f445e49c9ca8a5668d25ac74b5da54d6998c.png";

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#ddd] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Reddit_Sans:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#595959] text-[14px]">Why: Field observation showed inspectors naturally only flag issues — everything else is normal by default. The scoring system mirrors that exact behavior.</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Reddit_Sans:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#222] text-[16px] w-full">→ Default-to-normal scoring system</p>
      <p className="[word-break:break-word] font-['Reddit_Sans:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#222] text-[16px] w-full">All 207 points default to maximum. Inspectors only act when something is wrong — marking an item Abnormal deducts the score automatically.</p>
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] h-full items-center min-w-px relative">
      <Frame1 />
      <div className="h-[523px] relative shrink-0 w-[384px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#ddd] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[12px] relative size-full">
          <div className="[word-break:break-word] flex-[1_0_0] font-['Reddit_Sans:Regular',sans-serif] leading-[0] min-w-px not-italic relative text-[#595959] text-[14px]">
            <p className="leading-[20px] mb-0">Why: Damage is spatial. A diagram is faster and more precise than describing a location in a list.</p>
            <p className="leading-[20px]">​</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Reddit_Sans:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#222] text-[16px] w-full">{`→ Diagram-based inspection — Exterior & Structure`}</p>
      <p className="[word-break:break-word] font-['Reddit_Sans:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#222] text-[16px] w-full">Exterior and Structure use an interactive vehicle diagram instead of a text list. Inspectors tap directly on the problem area to flag it.</p>
      <Frame6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] h-full items-center min-w-px relative">
      <Frame4 />
      <div className="h-[523px] relative shrink-0 w-[384px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#ddd] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Reddit_Sans:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#595959] text-[14px]">Why: An Abnormal flag with no evidence is meaningless — and potentially damaging if it appears on a listing without explanation for the buyer.</p>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Reddit_Sans:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#222] text-[16px] w-full">→ Abnormal requires evidence</p>
      <p className="[word-break:break-word] font-['Reddit_Sans:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#222] text-[16px] w-full">Every Abnormal item must have a photo and a note before proceeding. Submit is blocked until all are complete.</p>
      <Frame10 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-center min-w-px relative">
      <Frame9 />
      <div className="h-[523px] relative shrink-0 w-[384px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[24px] items-center pb-[20px] relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame2 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame3 />
      </div>
      <Frame7 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#ddd] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Reddit_Sans:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#595959] text-[14px]">Why: The old workflow was entirely offline — paper. Requiring constant connectivity would be a step back, not forward.</p>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Reddit_Sans:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#222] text-[16px] w-full">→ Offline-first with transparent sync status</p>
      <p className="[word-break:break-word] font-['Reddit_Sans:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#222] text-[16px] w-full">Inspectors can complete the full inspection without internet. On submit, the report automatically uploads to CRM when connection is available.</p>
      <Frame14 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-between min-w-px relative">
      <Frame13 />
      <div className="h-[523px] relative shrink-0 w-[384px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#ddd] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Reddit_Sans:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#595959] text-[14px]">Why this was a post-launch iteration: The gap only surfaced when new inspectors joined. Instead of a separate training doc, guidance was built into the workflow — inspectors learn by doing, no extra training needed.</p>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Reddit_Sans:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#222] text-[16px] w-full">→ Guided photo — built-in onboarding</p>
      <p className="[word-break:break-word] font-['Reddit_Sans:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#222] text-[16px] w-full">Two modes: Free capture — open camera or select from photo library. Guided capture — reference illustrations shown in the camera interface, indicating exactly which angles to shoot.</p>
      <Frame17 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-center min-w-px relative">
      <Frame16 />
      <div className="h-[523px] relative shrink-0 w-[384px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[60px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame12 />
      </div>
      <Frame15 />
    </div>
  );
}

export default function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start pb-[32px] relative size-full">
      <p className="[word-break:break-word] font-['Reddit_Sans:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#222] text-[20px] w-full">4.2 Key design decisions</p>
      <Frame5 />
      <Frame11 />
    </div>
  );
}