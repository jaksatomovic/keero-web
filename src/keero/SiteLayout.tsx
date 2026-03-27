import { Outlet, useLocation } from "react-router-dom";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type NavLink = { label: string; href: string };

type MenuContextValue = {
  menuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
};

const MenuContext = createContext<MenuContextValue | null>(null);

export function useSiteMenu() {
  const v = useContext(MenuContext);
  if (!v) throw new Error("useSiteMenu must be used within SiteLayout");
  return v;
}

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [phoneFooterVisible, setPhoneFooterVisible] = useState(false);
  const [showScrollMenuButton, setShowScrollMenuButton] = useState(false);
  const location = useLocation();

  const links = useMemo<NavLink[]>(
    () => [
      { label: "Home", href: "/" },
      { label: "Buy", href: "/buy" },
      { label: "About", href: "/about" },
      { label: "Support", href: "/support" },
      { label: "FAQ", href: "/faq" },
    ],
    []
  );

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const openMenu = useCallback(() => setMenuOpen(true), []);
  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeMenu, menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollMenuButton(window.scrollY > 90);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setPhoneFooterVisible(false);
      return;
    }

    const el = document.querySelector(".buy-section");
    if (!el) return;

    const mq = window.matchMedia("(max-width: 768px)");
    const updateForMobile = () => {
      if (!mq.matches) {
        setPhoneFooterVisible(false);
        return;
      }
      if (!("IntersectionObserver" in window)) {
        setPhoneFooterVisible(true);
        return;
      }
      const io = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setPhoneFooterVisible(!entry.isIntersecting);
        },
        { threshold: 0.15 }
      );
      io.observe(el);
      return () => io.disconnect();
    };

    let cleanup: void | (() => void);
    const sync = () => {
      cleanup?.();
      cleanup = updateForMobile();
    };
    sync();
    mq.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      cleanup?.();
    };
  }, [location.pathname]);

  const menuCtx = useMemo<MenuContextValue>(
    () => ({ menuOpen, openMenu, closeMenu, toggleMenu }),
    [closeMenu, menuOpen, openMenu, toggleMenu]
  );

  const navClassName =
    location.pathname === "/" ? "keero-navbar home-page" : "keero-navbar";

  return (
    <MenuContext.Provider value={menuCtx}>
      <div className="keero-root">
        <nav className={navClassName}>
          <a className="navbar-logo" href="/">
            <span>KEERO</span>
            <span>AI</span>
          </a>

          <div className="navbar-links">
            {links.map((l) => (
              <a key={l.href} className="navbar-link" href={l.href}>
                {l.label}
              </a>
            ))}
          </div>

          <button
            className="navbar-menu-btn"
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            onClick={toggleMenu}
            type="button"
          >
            ☰
          </button>
        </nav>

        <button
          className={
            showScrollMenuButton && !menuOpen
              ? "floating-menu-btn show"
              : "floating-menu-btn"
          }
          aria-label="Open quick menu"
          onClick={openMenu}
          type="button"
        >
          <span className="floating-menu-lines" />
          <span className="floating-menu-lines" />
          <span className="floating-menu-lines" />
        </button>

        <div
          className={menuOpen ? "menu-overlay open" : "menu-overlay"}
          role="dialog"
          aria-modal="true"
          aria-hidden={!menuOpen}
        >
          <div className={menuOpen ? "menu-panel open" : "menu-panel"}>
            <div className="menu-header">
              <div className="menu-title">Menu</div>
              <button
                type="button"
                className="menu-close"
                onClick={closeMenu}
                aria-label="Close Menu"
              >
                ✕
              </button>
            </div>
            <div className="menu-links">
              {links.map((l) => (
                <a
                  key={l.href}
                  className="menu-link"
                  href={l.href}
                  onClick={closeMenu}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <button
            className="menu-backdrop"
            aria-label="Close menu overlay"
            onClick={closeMenu}
            type="button"
            tabIndex={menuOpen ? 0 : -1}
          />
        </div>

        <Outlet />

        <div
          className={
            phoneFooterVisible
              ? "phone-buy-now-footer show"
              : "phone-buy-now-footer"
          }
        >
          <div className="phone-buy-content">
            <div className="price-info">
              <span className="current-price">€</span>
              <span className="original-price">€</span>
              <span className="discount">—</span>
            </div>
            <a className="buy-now-button" href="/buy">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </MenuContext.Provider>
  );
}

