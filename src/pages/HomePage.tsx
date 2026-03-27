import { useEffect, useMemo, useRef, useState } from "react";
import { useSiteMenu } from "../keero/SiteLayout";

type ModeKey = "clock" | "focus" | "gaming";

function ArrowIcon({ dir }: { dir: "left" | "right" }) {
  return dir === "left" ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M15 18L9 12L15 6"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 18L15 12L9 6"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HomePage() {
  const { openMenu } = useSiteMenu();
  const [activeThumb, setActiveThumb] = useState(0);
  const [activeMode, setActiveMode] = useState<ModeKey>("clock");
  const igSliderRef = useRef<HTMLDivElement | null>(null);

  const galleryImages = {
    "1": "Tco563vxKZEKs5W2crWZNX6OM.jpeg.webp",
    "2": "ZTtwHzRMNBbTvuCnyMLg8Zdr3uc.jpeg.webp",
    "3": "blO9S3CbYfXAfqzsNgSGOggU7no.jpeg.webp",
    "4": "cUb2QbY8icjLfv42dvMClfFYoIA.jpeg.webp",
    "5": "xv3nm56HVTpEx81tRmAmLJ90.jpeg.webp",
    "6": "Image.webp",
  } as const;

  const buyImages = useMemo(
    () => [
      "/assets/buynow/Buy%20Now%20PDP-01.webp",
      "/assets/buynow/Buy%20Now%20PDP-02.webp",
      "/assets/buynow/Buy%20Now%20PDP-03.webp",
      "/assets/buynow/Buy%20Now%20PDP-04.webp",
      "/assets/buynow/Buy%20Now%20PDP-05.webp",
    ],
    []
  );

  const specialTopVideos = useMemo(
    () => [
      "/assets/gif/Sulks.webm",
      "/assets/gif/Angry.webm",
      "/assets/gif/Happy.webm",
      "/assets/gif/Irritated.webm",
    ],
    []
  );

  const specialBottomVideos = useMemo(
    () => [
      "/assets/gif/Sleeps.webm",
      "/assets/gif/Happy.webm",
      "/assets/gif/Hello.webm",
      "/assets/gif/Sulks.webm",
    ],
    []
  );

  const moodVideos = useMemo(
    () => ["/assets/gif/Happy.webm", "/assets/gif/Hello.webm", "/assets/gif/Angry.webm"],
    []
  );
  const modes = useMemo(
    () =>
      [
        {
          key: "clock" as const,
          title: "Clock Mode",
          description: "When resting, Keero becomes a clean, calm AI desk clock.",
          image: "/assets/modes/m3.webp",
          badge: "Everyday",
        },
        {
          key: "focus" as const,
          title: "Focus Mode",
          description: "Low-distraction visuals, reminders, and focus cues for deep work.",
          image: "/assets/modes/m1.webp",
          badge: "Productivity",
        },
        {
          key: "gaming" as const,
          title: "Gaming Mode",
          description: "Quick games and playful interactions for short breaks.",
          image: "/assets/modes/m2.webp",
          badge: "Play",
        },
      ] satisfies Array<{
        key: ModeKey;
        title: string;
        description: string;
        image: string;
        badge: string;
      }>,
    []
  );
  const activeModeData = modes.find((mode) => mode.key === activeMode) ?? modes[0];

  useEffect(() => {
    // Gallery parallax variables (safe no-op if section isn't present).
    const onScroll = () => {
      const items = document.querySelectorAll<HTMLElement>(".gallery-item");
      if (!items.length) return;
      const vh = window.innerHeight || 1;
      items.forEach((el) => {
        const r = el.getBoundingClientRect();
        const t = Math.max(0, Math.min(1, (vh - r.top) / (vh + r.height)));
        const y = (t - 0.5) * 120;
        el.style.setProperty("--parallax-y", `${y}px`);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="new-home-container !min-h-screen !w-full !relative !overflow-x-hidden !bg-[#f9f9f9]">
      <section className="hero rounded-24 !relative !mx-auto !my-[10px] !w-[calc(100%-20px)] !max-w-[1440px] !overflow-hidden !rounded-3xl !bg-black !p-0">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={"/assets/herobg.webp"}
          />
          <img
            src={"/assets/herobg.webp"}
            alt="Hero Background"
            className="hero-bg"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        <div className="hero-nav">
          <button className="menu-btn" aria-label="Open Menu" onClick={openMenu}>
            ☰
          </button>
        </div>

        <div className="hero-content">
          <div className="hero-panel">
            <div className="hero-badge">Conversational AI Companion</div>
            <h1 className="hero-title !m-0 !flex !items-baseline !gap-3 !text-[clamp(42px,7vw,84px)] !leading-none !text-white">
              <span>KEERO</span>
              <span>BOT</span>
            </h1>
            <p className="hero-subtitle !mt-3 !max-w-[520px] !text-[clamp(14px,1.8vw,22px)] !leading-[1.3] !text-[rgba(246,250,255,0.96)]">
              Talk naturally with Keero, switch modes, and personalize your desk setup.
            </p>
            <div className="hero-actions">
              <a className="hero-cta hero-cta-primary" href="/buy">
                Buy now
              </a>
              <a className="hero-cta hero-cta-secondary" href="/about">
                Explore features
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="buy-section section !relative !mx-auto !my-6 !w-[min(calc(100%-48px),1440px)] !overflow-hidden !rounded-3xl !px-0 !pb-16 !pt-8">
        <img
          src={"/assets/decor-left.webp"}
          alt=""
          className="frame-decoration frame-left"
          loading="lazy"
        />
        <img
          src={"/assets/bottomimg.webp"}
          alt=""
          className="frame-decoration frame-right"
          loading="lazy"
        />

        <div className="buy-wrapper !relative !z-[5] !mx-auto !w-full !max-w-[1400px] !px-6 md:!px-14">
          <h2 className="buy-heading !mb-3 !text-[clamp(28px,4vw,46px)] !font-light !tracking-[-0.5px] !text-[#2e2f33]">
            Get <span>yours</span> today!
          </h2>
          <div className="buy-container !mx-auto !grid !max-w-[1300px] !grid-cols-1 !gap-4 !rounded-[27px] !border !border-white/50 !bg-white/75 !p-4 !shadow-[0_0_4px_rgba(37,92,112,0.25)_inset,0_0_19px_2px_rgba(37,92,112,0.18)] !backdrop-blur-[20px] md:!grid-cols-[1.8fr_0.5fr_1fr] md:!p-12">
            <div className="buy-image">
              <img
                src={buyImages[activeThumb]}
                alt="Keero Bot"
                className="!h-full !w-full !rounded-3xl !object-cover !shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                loading="lazy"
              />
            </div>

            <div className="buy-thumbnails !flex !h-auto !w-full !flex-row !items-center !justify-center !gap-2 md:!h-[70%] md:!w-[80%] md:!flex-col" aria-label="Product images">
              {buyImages.slice(1).map((src, idx) => {
                const realIdx = idx + 1;
                return (
                  <button
                    key={src}
                    type="button"
                    className="thumb !flex-1 !cursor-pointer !border-0 !bg-transparent !p-0"
                    aria-label={`Thumbnail ${realIdx}`}
                    onClick={() => setActiveThumb(realIdx)}
                  >
                    <img
                      src={src}
                      alt={`Thumbnail ${realIdx}`}
                      className="!w-full !rounded-xl !border-2 !border-transparent !object-cover !shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-200 hover:!scale-105 hover:!-translate-y-0.5 hover:!border-[#5c7cff] hover:!shadow-[0_12px_24px_rgba(0,0,0,0.15)]"
                      loading="lazy"
                    />
                  </button>
                );
              })}
            </div>

            <div className="buy-card !mt-0 !rounded-3xl !border !border-black/10 !bg-white !p-5 !shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <div className="buy-details !text-left">
                <h3 className="product-title">KEERO BOT</h3>
                <p className="product-subtitle"></p>
                <div className="price-row !leading-none">
                  <span className="price !font-['Changa_One',cursive] !text-5xl !text-[#2e2f33]">€399</span>
                  <br />
                  <span className="old-price !mr-2.5 !text-sm !font-semibold !text-[#bbb] line-through">€499</span>
                  <span className="discount !rounded !bg-[rgba(92,124,255,0.12)] !px-2 !py-0.5 !text-xs !font-extrabold !text-[#5c7cff]">20% off</span>
                </div>
                <a className="buy-btn !mt-5 !flex !h-16 !w-full !items-center !justify-center !gap-2 !rounded-full !border-2 !border-black !bg-gradient-to-br !from-[#5c7cff] !to-[#35c9c6] !px-6 !text-2xl !text-[#faf6f6] !no-underline !shadow-[0_6px_#000] transition-all duration-200 hover:!translate-y-[2px] hover:!shadow-[0_4px_#000]" href="/buy">
                  Buy Now
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cta-icon"
                  >
                    <rect width="24" height="24" rx="4" fill="white" />
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="#5C7CFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <div className="product-features !mt-6 !rounded-xl !border !border-[rgba(92,124,255,0.18)] !bg-white/50 !p-4">
                  <h4>Features:</h4>
                  <ul>
                    <li>Talk with Keero in natural language</li>
                    <li>AI companion personality with 40+ expressions</li>
                    <li>Modular add-ons for desk, wall, and shelf setups</li>
                    <li>Clock, focus, and ambient modes</li>
                    <li>Interactive mini modules and playful animations</li>
                    <li>Keero Link (message between Keero devices)</li>
                    <li>Personalizable shell and module skins</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="keero-special-section !relative !mx-auto !my-6 !w-[min(calc(100%-48px),1440px)] !overflow-hidden !rounded-3xl !py-[4vh]">
        {/* <img
          src={"/assets/octopus-top.webp"}
          alt=""
          className="decor decor-top-right hidden"
          loading="lazy"
        />
        <img
          src={"/assets/octopus-bottom.webp"}
          alt=""
          className="decor decor-bottom-left"
          loading="lazy"
        /> */}
        <h2 className="keero-title !mb-6 !text-center !text-[clamp(28px,4vw,48px)] !font-light !tracking-[-0.5px] !text-[#2e2f33]">
          Why is <span>KEERO</span> Special?
        </h2>

        <div className="carousel-wrapper fade-mask">
          <div className="carousel-track move-right">
            {[
              "Ignore him → he sulks",
              "Avoid him → gets angry",
              "Pat him → he's happy",
              "Disturb him → he's irritated",
            ]
              .concat([
                "Ignore him → he sulks",
                "Avoid him → gets angry",
                "Pat him → he's happy",
                "Disturb him → he's irritated",
              ])
              .map((t, i) => (
                <div className="keero-card" key={`${t}-${i}`}>
                  <video
                    className="keero-gif"
                    src={specialTopVideos[i % specialTopVideos.length]}
                    loop
                    playsInline
                    autoPlay
                    muted
                    preload="none"
                  />
                  <p className="card-caption">{t}</p>
                </div>
              ))}
          </div>
        </div>

        <div className="carousel-wrapper fade-mask">
          <div className="carousel-track move-left">
            {[
              "Gets bored → start playing",
              "Gets hungry → feed him",
              "Turn on → says hello",
              "Gets tired → sleeps",
            ]
              .concat([
                "Gets bored → start playing",
                "Gets hungry → feed him",
                "Turn on → says hello",
                "Gets tired → sleeps",
              ])
              .map((t, i) => (
                <div className="keero-card" key={`${t}-${i}`}>
                  <video
                    className="keero-gif"
                    src={specialBottomVideos[i % specialBottomVideos.length]}
                    loop
                    playsInline
                    autoPlay
                    muted
                    preload="none"
                  />
                  <p className="card-caption">{t}</p>
                </div>
              ))}
          </div>
        </div>

        <p className="keero-spec-text">
          Keero lives on your <strong>desk</strong>, reacts to your{" "}
          <strong>voice</strong> and <strong>touch</strong>, and builds a
          personality over time. You can place him on different{" "}
          <strong>modules</strong> depending on your setup, switch between
          practical and playful behaviors, and customize his look so he feels
          like your own companion - not just another gadget.
        </p>
      </section>

      <section className="keero-modes-section !relative !z-[1] !my-6 !w-full !max-w-none !overflow-hidden !px-4 !py-10 md:!px-8 md:!py-14">
        <img
          src={"/assets/modes/bottomimg.webp"}
          alt=""
          className="modes-decor bottom-right"
          loading="lazy"
        />
        <h2 className="modes-title !relative !z-[5] !mb-8 !text-center !text-[clamp(28px,4vw,48px)] !font-light !tracking-[-0.5px] !text-[#2e2f33] md:!mb-10">
          Modes of <span>KEERO</span>
        </h2>
        <div className="!relative !z-[5] !mx-auto !grid !w-full !max-w-6xl !grid-cols-1 !gap-6 md:!grid-cols-[1.1fr_0.9fr] md:!gap-8">
          <div className="!rounded-[28px] !border !border-white/60 !bg-white/80 !p-3 !shadow-[0_24px_70px_rgba(0,0,0,0.14)] !backdrop-blur">
            <div className="!relative !aspect-[4/3] !overflow-hidden !rounded-3xl !bg-[#f3f3f3]">
              {modes.map((mode) => {
                const isActive = activeMode === mode.key;
                return (
                  <img
                    key={mode.key}
                    src={mode.image}
                    alt={mode.title}
                    className={`!absolute !inset-0 !h-full !w-full !object-cover !transition-opacity !duration-300 ${
                      isActive ? "!opacity-100" : "!pointer-events-none !opacity-0"
                    }`}
                    loading="lazy"
                    decoding="async"
                  />
                );
              })}
              <div className="!absolute !left-4 !top-4 !rounded-full !bg-black/70 !px-3 !py-1 !text-xs !font-semibold !uppercase !tracking-wide !text-white">
                {activeModeData.badge}
              </div>
            </div>
            <div className="!mt-3 !grid !grid-cols-3 !gap-2">
              {modes.map((mode) => (
                <button
                  key={mode.key}
                  type="button"
                  aria-label={`Show ${mode.title}`}
                  onClick={() => setActiveMode(mode.key)}
                  className={`!overflow-hidden !rounded-xl !border !p-0 !transition ${
                    activeMode === mode.key
                      ? "!border-[#ff4d4f] !ring-2 !ring-[#ff4d4f]/35"
                      : "!border-black/10 hover:!border-black/25"
                  }`}
                >
                  <img
                    src={mode.image}
                    alt={mode.title}
                    className="!h-20 !w-full !object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="!flex !flex-col !gap-3">
            {modes.map((mode) => {
              const isActive = activeMode === mode.key;
              return (
                <button
                  key={mode.key}
                  className={`!w-full !rounded-2xl !border !text-left !transition-all !duration-200 ${
                    isActive
                      ? "!border-[#ff4d4f]/35 !bg-white !p-5 !shadow-[0_16px_38px_rgba(0,0,0,0.1)]"
                      : "!border-black/10 !bg-white/70 !p-4 hover:!border-black/25 hover:!bg-white"
                  }`}
                  onClick={() => setActiveMode(mode.key)}
                  type="button"
                >
                  <div className="!flex !items-center !justify-between !gap-4">
                    <h4 className="!m-0 !font-['Fredoka_One',cursive] !text-2xl !font-normal !text-[#ff4d4f]">
                      {mode.title}
                    </h4>
                    <span
                      className={`!rounded-full !px-2.5 !py-1 !text-[11px] !font-semibold !uppercase !tracking-wide ${
                        isActive ? "!bg-[#ff4d4f]/12 !text-[#ff4d4f]" : "!bg-black/5 !text-black/60"
                      }`}
                    >
                      {mode.badge}
                    </span>
                  </div>
                  <p
                    className={`!m-0 !mt-2 !text-sm !leading-relaxed ${
                      isActive ? "!text-[#4f535c]" : "!text-[#6f7480]"
                    }`}
                  >
                    {mode.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="keero-creativity-section !relative !m-0 !flex !h-auto !min-h-0 !w-full !max-w-full !flex-col !justify-center  !py-[4%]">
        <div className="creativity-container !relative !z-[2] !mx-auto !w-[90%] !max-w-full">
          <img
            src={"/assets/decor-left.webp"}
            alt=""
            className="creativity-decor decor-left"
            loading="lazy"
          />
          <div className="creativity-banner">
            <img
              src={"/assets/creative/creativity-banner.webp"}
              alt="Unleash Your Creativity"
              className="creativity-bg"
              loading="lazy"
            />
            <div className="creativity-content">
              <h2 className="creativity-title">
                Unleash Your{" "}
                <img
                  src={"/assets/creative/creativity-text.webp"}
                  alt="Creativity"
                  className="creativity-text-img"
                  loading="lazy"
                />
              </h2>
              <p className="creativity-subtitle">
                Keero comes in a clean shell so you can customize and give him any{" "}
                <span>
                  <img
                    src={"/assets/creative/makeover-text.webp"}
                    alt="Makeover"
                    className="creativity-makeover-img"
                    loading="lazy"
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="keero-fullbleed !mx-auto !my-6 !w-[calc(100%-48px)] !max-w-[1440px]">
        <div className="relative w-full overflow-hidden">
          {/* Desktop UI image */}
          <img
            src={"/assets/link/webui.webp"}
            alt="Keero Link Web Interface"
            className="w-full h-auto hidden md:block"
            loading="lazy"
          />

          {/* Mobile UI image */}
          <img
            src={"/assets/link/phoneui.webp"}
            alt="Keero Link Mobile Interface"
            className="w-full h-auto md:hidden"
            loading="lazy"
          />

          {/* Video overlay */}
          <div className="absolute top-[22%] left-[51%] -translate-x-1/2 -translate-y-1/2 w-[23%] aspect-video md:top-[48%] md:left-[77%] md:w-[14.5%] z-10">
            <video
              className="w-full h-full object-cover"
              src="/assets/gif/KeeroLink.webm"
              loop
              playsInline
              autoPlay
              muted
              preload="none"
            />
          </div>
        </div>

        {/* Lightweight text (kept outside the visual overlay to avoid layout breaking) */}
        <div className="mx-auto max-w-6xl px-4 -mt-6 md:-mt-10">
          <div className="rounded-3xl border border-white/10 bg-white/30 backdrop-blur-md px-5 py-5 md:px-7 md:py-6">
            <h3 className="font-semibold text-[18px] md:text-[20px] text-white">
              Keero Link
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              Talk to your AI companion, sync behavior across modules, and
              personalize Keero’s experience to match your workspace.
            </p>
          </div>
        </div>
      </section>

      <section className="keero-live-section  !mx-auto  !relative !z-[2] !m-0 !w-full !overflow-hidden !py-[4%] !text-center">
        <div className="keero-live-container !mx-auto !w-[98%] !max-w-[1800px]">
          <h2 className="keero-live-title !relative !z-[5] !mb-8 !text-center !text-[clamp(28px,4vw,48px)] !font-light !tracking-[-0.5px] !text-[#2e2f33]">
            Experience <span>KEERO</span> live
          </h2>
          <div className="keero-live-card">
            <div className="live-graphic">
              <span className="live-text">KEER</span>
              <div className="live-tu-wrapper">
              <img
                src={"/productImg.webp"}
                alt="Keero Head"
                className="live-head-img"
                loading="lazy"
              />
                <span className="live-bot-badge">BOT</span>
              </div>
            </div>
            <a className="live-cta-btn desktop-live-btn" href="/experience">
              Experience in 3D <span className="live-cta-icon">↗</span>
            </a>
            <a className="live-cta-btn mobile-live-btn" href="/experience">
              Experience in 3D <span className="live-cta-icon">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="ig-section !relative !mx-auto !mb-0 !mt-6  !max-w-none !overflow-hidden !rounded-3xl !pb-10 !pt-5">
        <div className="ig-bg-pattern" />
        <div className="ig-bg-overlay-gradient" />

        <div className="ig-header">
          <h2 className="ig-title">
            <span className="ig-title-red">KEERO</span>
            <span className="ig-title-thin">the Influencer</span>
          </h2>
          <p className="ig-subtitle">
            Join the community and watch daily desk shenanigans.
            <br className="ig-br-desktop" />
            Your feed needs this kind of wholesome chaos.
          </p>
          <div className="ig-handle-pill">
            <img
              src={"/assets/IG/iglogo.webp"}
              alt="Instagram"
              className="ig-icon"
            />
            <span className="ig-handle-text">@keerobot</span>
            <img
              src={"/assets/verified.webp"}
              alt="Verified"
              className="ig-verified-icon"
            />
          </div>
        </div>

        <div className="ig-content-container">
          <div className="ig-left-panel">
            <div className="ig-stats-wrapper">
              <h3 className="ig-stat-heading">You know more than</h3>
              <div className="ig-stat-number">32,000+</div>
              <h3 className="ig-stat-subheading">people follow Keero’s journey</h3>
            </div>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ig-cta-btn"
            >
              <span className="ig-btn-text">Join the community</span>
              <svg
                className="ig-arrow-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <div className="ig-decor-cubes">
              <img src={"/assets/DSC017852-CVZ215D7.webp"} alt="Decor" />
            </div>
          </div>

          <div className="ig-right-panel">
            <button
              className="scroll-arrow-left"
              aria-label="Scroll Left"
              onClick={() =>
                igSliderRef.current?.scrollBy({ left: -420, behavior: "smooth" })
              }
              type="button"
            >
              <ArrowIcon dir="left" />
            </button>

            <div className="ig-posts-slider" ref={igSliderRef}>
              <div className="ig-snap-spacer" />
              {["1", "2", "3"].map((id) => (
                <div className="ig-post-card" key={id}>
                  <img src={`/assets/gallery/${galleryImages[id as keyof typeof galleryImages]}`} alt={`Post ${id}`} />
                </div>
              ))}
              <div className="ig-snap-spacer" />
            </div>

            <button
              className="scroll-arrow-right"
              aria-label="Scroll Right"
              onClick={() =>
                igSliderRef.current?.scrollBy({ left: 420, behavior: "smooth" })
              }
              type="button"
            >
              <ArrowIcon dir="right" />
            </button>
          </div>
        </div>
      </section>

      {/* <div className="shopping-container !relative !mx-auto !my-6 !flex !w-[min(calc(100%-48px),1440px)] !flex-col !items-center !gap-12 !overflow-visible !rounded-3xl !bg-[#f8f8f8] !p-2.5">
        <div className="shopping-doodle-bg" />
        <div className="shopping-header">
          <h2 className="shopping-title !text-center !text-[clamp(32px,4vw,48px)] !font-light !text-[#2e2f33]">
            <span className="highlight-red">Hundreds</span> of People
            <br />
            Already have their <span className="highlight-red">KEERO</span>
          </h2>
        </div>

        <img
          src={"/assets/octopus-top.webp"}
          alt="Decor"
          className="shopping-decor-top"
          loading="lazy"
        />
        <img
          src={"/assets/octopus-bottom.webp"}
          alt="Decor"
          className="shopping-decor-bottom"
          loading="lazy"
        />

        <div className="shopping-scroll-wrapper">
          <button
            className="scroll-arrow-left"
            aria-label="Scroll Left"
            onClick={() =>
              reviewsRef.current?.scrollBy({ left: -520, behavior: "smooth" })
            }
            type="button"
          >
            <ArrowIcon dir="left" />
          </button>

          <div className="cards-scroll-container" ref={reviewsRef}>
            {[
              { h: "@user_1", t: "My desk setup feels complete now." },
              { h: "@user_2", t: "Best coding buddy ever. Period." },
              { h: "@user_3", t: "Gave it as a gift — now they’re obsessed." },
              { h: "@user_4", t: "Animations are insanely cute." },
              { h: "@user_5", t: "10/10 would recommend." },
            ].map((r, idx) => (
              <div className="review-card" key={r.h}>
                <div className="card-image-wrapper">
                  <video
                    className="card-image"
                    src={shoppingVideos[idx % shoppingVideos.length]}
                    loop
                    playsInline
                    autoPlay
                    muted
                    preload="none"
                  />
                </div>
                <div className="card-content">
                  <div className="user-info">
                    <div className="user-avatar-placeholder" />
                    <span className="user-handle">{r.h}</span>
                  </div>
                  <p className="review-text">{r.t}</p>
                  <div className="likes-container">
                    <span className="likes-text">1,000+ Likes</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="scroll-arrow-right"
            aria-label="Scroll Right"
            onClick={() =>
              reviewsRef.current?.scrollBy({ left: 520, behavior: "smooth" })
            }
            type="button"
          >
            <ArrowIcon dir="right" />
          </button>
        </div>
      </div> */}

      <section className="product-red-container !relative !mt-6 !w-full !px-4">
        <div className="product-red-doodle-bg" />
        <div className="product-card-3d">
          <div className="product-header-group">
            <h2 className="product-title">
              <span>Keero</span> in different <span>Moods</span>
            </h2>
            <p className="product-subtitle">
              Are you ready to welcome him into your life?
            </p>
            <div className="price-container">
              <span className="current-price">€399</span>
              <span className="original-price">€499</span>
              <span className="discount-tag">20% OFF</span>
            </div>
          </div>

          <div className="product-cards-row">
            {["Happy", "Gaming", "Angry"].map((m, idx) => (
              <div className="mood-box" key={m}>
                <video
                  className="mood-image"
                  src={moodVideos[idx % moodVideos.length]}
                  loop
                  playsInline
                  autoPlay
                  muted
                  preload="none"
                />
              </div>
            ))}
          </div>

          <a className="buy-now-btn-centered" href="/buy">
            Buy Now
            <svg
              className="btn-arrow-icon"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11L11 1M11 1H3.5M11 1V8.5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <img
            src={"/assets/decor-left.webp"}
            alt="Decor"
            className="octopus-decoration octopus-top-right"
            loading="lazy"
          />
          <img
            src={"/assets/decor-left.webp"}
            alt="Decor"
            className="octopus-decoration octopus-bottom-left"
            loading="lazy"
          />
        </div>
      </section>

      {/* <section className="gallery-section-container">
        <div className="gallery-header">
          <img
            src={"/assets/gallery/eyes.webp"}
            alt="Eyes"
            className="gallery-eyes-icon"
            loading="lazy"
          />
          <h2 className="gallery-title-text">KEERO</h2>
        </div>

        <div className="gallery-grid">
          {["1", "2", "3", "4", "5", "6"].map((n) => (
            <div className="gallery-item" key={n}>
              <img
                src={`/assets/gallery/${galleryImages[n as keyof typeof galleryImages]}`}
                alt={`Keero Gallery ${n}`}
                className="gallery-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section> */}

      <footer className="footer-section !relative !mx-auto !my-[10px] !flex !w-[calc(100%-20px)] !flex-col !justify-center !overflow-hidden !rounded-3xl !bg-[linear-gradient(100deg,#5c7cff_0%,#35c9c6_45%,#0a0f1f_100%)] !px-6 md:!px-10 !pb-5 !pt-[60px] !text-white">
        <div className="footer-content !relative !z-[2] !mb-10 !flex !flex-col !items-start !justify-between !gap-8 md:!flex-row md:!flex-wrap md:!gap-8 md:!pr-[5%]">
          <div className="footer-contact !max-w-[400px] md:!basis-[40%]">
            <h3 className="footer-heading !mb-4 !text-xl !text-white">Contact</h3>
            <p className="footer-text !mb-2 !text-sm !leading-relaxed !text-[#e0e0e0]">
              Email:{" "}
              <a href="mailto:support@keero.ai" className="footer-email">
                support@keero.ai
              </a>
            </p>
            <p className="footer-text !mb-2 !text-sm !leading-relaxed !text-[#e0e0e0]">
              We aim to reply within 24 hours on weekdays.
            </p>
            <div className="footer-socials-mobile" />
          </div>

          <div className="footer-links-group !flex !flex-wrap !gap-8 md:!mr-[100px] md:!gap-[clamp(20px,8vw,100px)]">
            <div className="footer-column">
              <h3 className="footer-heading !mb-4 !text-xl !text-white">Company</h3>
              <ul>
                <li>
                  <a href="/about" className="footer-link !text-sm !text-[#e0e0e0] !no-underline hover:!text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/faq" className="footer-link !text-sm !text-[#e0e0e0] !no-underline hover:!text-white">
                    FAQ&apos;s
                  </a>
                </li>
                <li>
                  <a href="/buy" className="footer-link !text-sm !text-[#e0e0e0] !no-underline hover:!text-white">
                    Product
                  </a>
                </li>
                <li>
                  <a href="/bulk" className="footer-link !text-sm !text-[#e0e0e0] !no-underline hover:!text-white">
                    Bulk Orders
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading !mb-4 !text-xl !text-white">Legal</h3>
              <ul>
                <li>
                  <a href="/terms" className="footer-link !text-sm !text-[#e0e0e0] !no-underline hover:!text-white">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="footer-link !text-sm !text-[#e0e0e0] !no-underline hover:!text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/refund" className="footer-link !text-sm !text-[#e0e0e0] !no-underline hover:!text-white">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="/shipping" className="footer-link !text-sm !text-[#e0e0e0] !no-underline hover:!text-white">
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="/support" className="footer-link !text-sm !text-[#e0e0e0] !no-underline hover:!text-white">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-social-float" aria-hidden="true">
            <a href="#" className="social-icon-box" aria-label="Social">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="#" className="social-icon-box" aria-label="Social">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-brand !relative !z-[2] !px-3 !text-center">
          <h1 className="footer-brand-text !m-0 !flex !w-full !items-end !justify-center !pb-5 !text-center !text-[clamp(76px,14.5vw,232px)] !leading-[1.05] !tracking-[-0.015em]">
            KEERO
          </h1>
          <p className="footer-copyright !absolute !bottom-5 !w-full !text-center !text-xs !text-[rgba(255,255,255,0.4)]">
            TM 2026 Keero - AI companion platform. All rights Reserved
          </p>
        </div>

        <img
          src={"/assets/decor-left.webp"}
          alt="Decor"
          className="footer-decor-right"
          loading="lazy"
        />
      </footer>
    </main>
  );
}

