export function ComingSoonPage() {
  return (
    <main className="keero-maintenance">
      <div className="keero-maintenance__backdrop" />

      <section className="keero-maintenance__shell">
        <div className="keero-maintenance__eyebrow">Keero Bot</div>

        <div className="keero-maintenance__grid">
          <div className="keero-maintenance__copy">
            <p className="keero-maintenance__status">Website update in progress</p>
            <h1 className="keero-maintenance__title">
              A sharper Keero web experience is on the way.
            </h1>
            <p className="keero-maintenance__text">
              We are currently refining the public website while the Keero Bot
              platform, documentation, and hardware presentation continue to
              evolve.
            </p>
            <p className="keero-maintenance__text">
              For now, the most complete public project information is available
              through the documentation and hardware showcase.
            </p>

            <div className="keero-maintenance__actions">
              <a
                className="keero-maintenance__button keero-maintenance__button--primary"
                href="https://docs.keero.io"
              >
                Open Documentation
              </a>
              <a
                className="keero-maintenance__button keero-maintenance__button--secondary"
                href="https://github.com/keero-io/keero-hardware"
              >
                View Hardware Repo
              </a>
            </div>

            <div className="keero-maintenance__meta">
              <div className="keero-maintenance__meta-card">
                <span className="keero-maintenance__meta-label">Platform</span>
                <strong>ESP32-S3 modular AI hardware</strong>
              </div>
              <div className="keero-maintenance__meta-card">
                <span className="keero-maintenance__meta-label">Public status</span>
                <strong>Active prototype, website under construction</strong>
              </div>
              <div className="keero-maintenance__meta-card">
                <span className="keero-maintenance__meta-label">Best current reference</span>
                <strong>Keero Docs + hardware visuals + board viewer</strong>
              </div>
            </div>
          </div>

          <div className="keero-maintenance__visual">
            <div className="keero-maintenance__visual-frame">
              <img
                src="/PCB.png"
                alt="Keero Bot PCB preview"
                className="keero-maintenance__image"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
