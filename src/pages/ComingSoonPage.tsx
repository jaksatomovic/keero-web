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
      body: "ESP32-S3-WROOM-1U-N16R8 gives the prototype a compact Wi-Fi and BLE base for firmware, voice, and connected AI experiments.",
    },
    {
      title: "PMIC-based power direction",
      body: "AXP2101 is used as the power-management direction for battery-aware prototypes, instead of treating the board like a simple USB-only breakout.",
    },
    {
      title: "Integrated interaction hardware",
      body: "MAX98357A audio output, ICS-41350 microphone input, LIS2DW12 motion sensing, and DRV2605L haptics support richer interaction experiments.",
    },
    {
      title: "Camera and display paths",
      body: "Batch 1 includes connector paths for camera and small display workflows. It is not sold as a finished camera product unless a camera module is explicitly included.",
    },
    {
      title: "Modular expansion concept",
      body: "Pogo/module connector thinking is used for dock-style add-ons and future mobility experiments, rather than exposing lots of general-purpose GPIO.",
    },
    {
      title: "AI service potential",
      body: "Use it as a prototype hardware front-end for Xiaozhi-style assistants, OpenAI APIs, DeepSeek, or your own local/server firmware logic.",
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
              Keero Prototype Board
            </h1>
            <p className="keero-maintenance__text">
              Keero Batch 1 is an early ESP32-S3 based modular AI hardware
              prototype. It is the temporary hardware step before the finished
              Keero consumer gadget.
            </p>
            <p className="keero-maintenance__text">
              This is not a cheap ESP32-CAM replacement and not a generic
              GPIO-heavy dev board. It is for makers and early supporters who
              want to test the same integrated hardware direction the final
              device is being built around.
            </p>
            <p className="keero-maintenance__text">
              Small-batch prototyping is expensive. The Batch 1 price is now
              lowered to mainly help cover production cost and make early
              feedback easier.
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
                <strong>Batch 1 board, firmware access, and documentation</strong>
              </div>
              <div className="keero-maintenance__meta-card">
                <span className="keero-maintenance__meta-label">Shipping estimate</span>
                <strong>4-5 weeks after Batch 1 closes</strong>
              </div>
              <div className="keero-maintenance__meta-card">
                <span className="keero-maintenance__meta-label">Important</span>
                <strong>Early prototype, not plug and play</strong>
              </div>
            </div>

            <p className="keero-maintenance__text">
              Payments are processed via PayPal Buy Now. Refunds are possible
              before production starts. Delivery timing is estimated and depends
              on the final Batch 1 production schedule.
            </p>
            <p className="keero-maintenance__text">
              Camera and display references mean connector paths on the board.
              They are not complete finished subsystems unless a module is
              explicitly listed with the batch.
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
              Built for the next Keero device.
            </h2>
            <p className="keero-maintenance__text">
              Keero is priced as a small-batch prototype, not as a
              mass-produced ESP32 module. The value is the integrated device
              direction: power management, audio, sensing, haptics,
              camera/display connector paths, and modular expansion in one
              compact platform.
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
              alt="PayPal QR code for Keero Prototype Board Batch 1 pre-order"
            />
            <p>Keero Prototype Board - Batch 1 PayPal checkout</p>
          </div>
        </section>
      </section>
    </main>
  );
}
