import { useEffect, useRef, useState } from "react";
import { batchOnePreorder } from "../keero/siteFlags";

declare global {
  interface Window {
    paypal?: {
      HostedButtons: (options: { hostedButtonId: string }) => {
        render: (selector: string) => void;
      };
    };
  }
}

const PAYPAL_SCRIPT_ID = "paypal-hosted-buttons-sdk";
const PAYPAL_CONTAINER_ID = `paypal-container-${batchOnePreorder.paypalHostedButtonId}`;

function PayPalHostedButton() {
  const renderedRef = useRef(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const renderHostedButton = () => {
      const container = document.getElementById(PAYPAL_CONTAINER_ID);

      if (!window.paypal?.HostedButtons || !container || renderedRef.current) {
        return;
      }

      container.innerHTML = "";
      window.paypal
        .HostedButtons({
          hostedButtonId: batchOnePreorder.paypalHostedButtonId,
        })
        .render(`#${PAYPAL_CONTAINER_ID}`);
      renderedRef.current = true;
    };

    if (window.paypal?.HostedButtons) {
      renderHostedButton();
      return;
    }

    let script = document.getElementById(PAYPAL_SCRIPT_ID) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = PAYPAL_SCRIPT_ID;
      script.src = batchOnePreorder.paypalSdkUrl;
      script.async = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    }

    script.addEventListener("load", renderHostedButton);
    script.addEventListener("error", () => setLoadError(true));

    return () => {
      script?.removeEventListener("load", renderHostedButton);
    };
  }, []);

  return (
    <div className="keero-maintenance__paypal">
      <span className="keero-maintenance__meta-label">Secure checkout</span>
      <div id={PAYPAL_CONTAINER_ID} className="keero-maintenance__paypal-container" />
      {loadError ? (
        <a
          className="keero-maintenance__paypal-fallback"
          href={`mailto:${batchOnePreorder.contactEmail}?subject=Keero%20Dev%20Board%20Batch%201%20Reservation`}
        >
          PayPal could not load. Contact us to reserve your board.
        </a>
      ) : null}
    </div>
  );
}

export function ComingSoonPage() {
  const valueCards = [
    {
      title: "ESP32-S3 AI-ready core",
      body: "A compact Wi-Fi and BLE platform for local firmware experiments, connected tools, voice workflows, and edge-AI prototypes.",
    },
    {
      title: "Real power management",
      body: "The board is built around an AXP2101-style PMIC direction, giving the project a more serious battery and rail-management foundation than a simple breakout.",
    },
    {
      title: "Multi-modal hardware",
      body: "Camera path, microphone, speaker output, display support, haptics, and motion sensing make it useful for interactive devices, not just blinking LEDs.",
    },
    {
      title: "AI service potential",
      body: "Use it as a hardware front-end for firmware stacks and services such as Xiaozhi-style assistants, OpenAI APIs, DeepSeek, or your own local/server logic.",
    },
    {
      title: "Modular expansion",
      body: "Pogo-style module thinking, dock concepts, and mobility experiments give the board room to grow beyond one fixed demo.",
    },
    {
      title: "Open docs and firmware direction",
      body: "You get access to documentation and firmware work so you can inspect, modify, and build your own device instead of waiting for a closed product.",
    },
  ];

  return (
    <main className="keero-maintenance">
      <div className="keero-maintenance__backdrop" />

      <section className="keero-maintenance__shell">
        <div className="keero-maintenance__eyebrow">Keero Bot</div>

        <div className="keero-maintenance__grid">
          <div className="keero-maintenance__copy">
            <p className="keero-maintenance__status">Batch 1 pre-order</p>
            <h1 className="keero-maintenance__title">
              Keero Dev Board
            </h1>
            <p className="keero-maintenance__text">
              Keero is a small development board for building AI-powered
              devices, from desktop assistants and e-ink displays to fully
              custom smart tools.
            </p>
            <p className="keero-maintenance__text">
              This is not a finished consumer product. It is a developer-focused
              board for makers, engineers, and enthusiasts who want to build
              their own solutions.
            </p>
            <p className="keero-maintenance__text">
              Batch 1 is produced only after enough orders are collected. Each
              reservation directly helps fund the first production run.
            </p>

            <div className="keero-maintenance__price-card">
              <span className="keero-maintenance__meta-label">Batch 1 price</span>
              <strong>{batchOnePreorder.priceLabel}</strong>
              <p>Shipping is calculated separately after batch confirmation.</p>
            </div>

            <div className="keero-maintenance__actions">
              <a
                className="keero-maintenance__button keero-maintenance__button--primary"
                href={`#${PAYPAL_CONTAINER_ID}`}
              >
                Reserve your board (Batch 1)
              </a>
              <a
                className="keero-maintenance__button keero-maintenance__button--secondary"
                href="https://docs.keero.io"
              >
                Open Documentation
              </a>
            </div>

            <p className="keero-maintenance__helper">
              Pre-order. Manufacturing starts after enough orders are collected.
              Estimated delivery: 4-5 weeks after Batch 1 closes.
            </p>

            <div className="keero-maintenance__meta">
              <div className="keero-maintenance__meta-card">
                <span className="keero-maintenance__meta-label">What you get</span>
                <strong>Keero PCB, firmware access, and documentation</strong>
              </div>
              <div className="keero-maintenance__meta-card">
                <span className="keero-maintenance__meta-label">Shipping estimate</span>
                <strong>4-5 weeks after Batch 1 closes</strong>
              </div>
              <div className="keero-maintenance__meta-card">
                <span className="keero-maintenance__meta-label">Important</span>
                <strong>Developer board, not plug and play</strong>
              </div>
            </div>

            <p className="keero-maintenance__text">
              Payments are processed via PayPal Buy Now. Refunds are possible
              before production starts. Delivery timing is estimated and depends
              on the final Batch 1 production schedule.
            </p>
          </div>

          <div className="keero-maintenance__visual">
            <div className="keero-maintenance__visual-frame keero-maintenance__visual-frame--checkout">
              <PayPalHostedButton />
              {/*
                <img
                src="/PCB.png"
                alt="Keero Bot PCB preview"
                className="keero-maintenance__image"
                />
              */}
            </div>
          </div>
        </div>

        <section className="keero-maintenance__value">
          <div className="keero-maintenance__value-copy">
            <p className="keero-maintenance__status">Why it costs what it costs</p>
            <h2 className="keero-maintenance__section-title">
              More than a bare dev board.
            </h2>
            <p className="keero-maintenance__text">
              Keero is priced as an early developer board because it combines
              the hardware blocks needed for real AI-device experiments:
              sensing, audio, display, feedback, power management, and modular
              expansion in one small platform.
            </p>
          </div>

          <div className="keero-maintenance__value-grid">
            {valueCards.map((card) => (
              <article className="keero-maintenance__value-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="keero-maintenance__qr-section">
          <div>
            <p className="keero-maintenance__status">Mobile checkout</p>
            <h2 className="keero-maintenance__section-title">
              Prefer scanning?
            </h2>
            <p className="keero-maintenance__text">
              If the PayPal button does not load in your browser, you can scan
              this QR code to open the same Batch 1 pre-order checkout on your
              phone.
            </p>
          </div>

          <div className="keero-maintenance__qr">
            <img
              src="/paypal-batch-1-qrcode.png"
              alt="PayPal QR code for Keero Dev Board Batch 1 pre-order"
            />
            <p>Keero Dev Board - Batch 1 PayPal checkout</p>
          </div>
        </section>
      </section>
    </main>
  );
}
