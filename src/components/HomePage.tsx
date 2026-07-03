import { companies, TOTAL_SHARES } from "../data/companies";
import {
  taxRates,
  events,
  phases,
  TOTAL_ROUNDS,
  EARLY_WIN_SHARES,
} from "../data/game";
import { tierMeta, buffs } from "../data/buffs";
import { priceChange } from "../utils/calc";
import { useState, useEffect } from "react";
import VerifyCard from "./VerifyCard";

/* ── Responsive: true khi màn hình hẹp (mobile / tablet dọc) ── */
function useIsMobile(breakpoint = 768) {
  const [mobile, setMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth <= breakpoint,
  );
  useEffect(() => {
    const onResize = () => setMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);
  return mobile;
}

/* ── Bảng màu trang giới thiệu: đen ánh (charcoal ấm) + accent cam ── */
const C = {
  bg: "#16181d", // nền trang
  bg2: "#1e2128", // dải/nền phụ
  panel: "#1c1f26", // thẻ
  border: "#2f343e", // viền rõ
  borderSoft: "#262a32", // đường kẻ mảnh
  orange: "#ff8a3d", // accent cam
  text: "#edeef2", // chữ chính
  light: "#c7ccd4", // chữ sáng
  dim: "#9aa0ab", // chữ mờ
  faint: "#6b7280", // chữ rất mờ
  navBg: "rgba(22,24,29,0.82)",
};

/* ── Ticker ──────────────────────────────────────────── */
function Ticker() {
  const items = companies.map((c) => {
    const ch = priceChange(c);
    const sign = ch > 0 ? "+" : "";
    const dir = ch > 0 ? "up" : ch < 0 ? "down" : "flat";
    return { name: c.name.toUpperCase(), val: `${sign}${ch}%`, dir };
  });
  const doubled = [...items, ...items, ...items];
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span className="ticker-item" key={i}>
            <span className="t-name">{item.name}</span>
            <span className={`t-val ${item.dir}`}>{item.val}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Nav ─────────────────────────────────────────────── */
function Nav({ onStart }) {
  const mobile = useIsMobile();
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: mobile ? 16 : 32,
        height: 56,
        borderBottom: `1px solid ${C.border}`,
        padding: mobile ? "0 16px" : "0 48px",
        position: "sticky",
        top: 0,
        background: "rgba(23,25,30,0.82)",
        backdropFilter: "blur(12px)",
        zIndex: 10,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span
          style={{
            width: 10,
            height: 10,
            background: "var(--gold)",
            borderRadius: 2,
            display: "inline-block",
          }}
        />
        <span
          style={{
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: 0.5,
            letterSpacing: 0.5,
            textTransform: "uppercase",
          }}
        >
          Đế Chế Kinh Tế
        </span>
      </div>
      <div style={{ display: mobile ? "none" : "flex", gap: 28, marginLeft: 20 }}>
        {[
          { label: "Thị Trường", id: "thi-truong" },
          { label: "Luật Chơi", id: "luat-choi" },
          { label: "Thẻ Quyền Lực", id: "the-quyen-luc" },
          { label: "Sự Kiện", id: "su-kien" },
          { label: "Chiến Thắng", id: "chien-thang" },
          { label: "Chú Thích AI", id: "chu-thich-ai" },
        ].map(({ label, id }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById(id)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 0.4,
              letterSpacing: 0.4,
              textTransform: "uppercase",
              color: "var(--text-dim)",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

/* ── Hero ────────────────────────────────────────────── */
function Hero({ onStart }) {
  const mobile = useIsMobile();
  return (
    <section
      style={{
        padding: mobile ? "48px 16px 56px" : "90px 48px 80px",
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "1fr 420px",
        gap: mobile ? 28 : 40,
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            border: "1px solid var(--border)",
            borderRadius: 3,
            padding: "5px 14px",
            marginBottom: 28,
            fontSize: 10,
            color: "var(--text-dim)",
            letterSpacing: 0.5,
            textTransform: "uppercase",
            fontFamily: "var(--mono)",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              background: "var(--gold)",
              borderRadius: 1,
            }}
          />
          Board Game · 2–10 Nhóm · ~15 Phút
        </div>

        <h1
          style={{
            fontSize: "clamp(52px, 7vw, 88px)",
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: -1,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          <span style={{ color: "var(--text)" }}>
            Thâu Tóm
            <br />
          </span>
          <span style={{ color: "var(--gold)" }}>Thị Trường</span>
        </h1>

        <p
          style={{
            fontSize: 15,
            color: "var(--text-dim)",
            lineHeight: 1.7,
            maxWidth: 480,
            marginBottom: 36,
          }}
        >
          Trò chơi chiến thuật kinh tế đỉnh cao. {TOTAL_ROUNDS} vòng đấu ngột
          thở. Khoảng 15 phút để xây dựng một đế chế độc quyền — hoặc phá sản
          hoàn toàn dưới sức ép thuế suất.
        </p>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <button
            onClick={onStart}
            style={{
              padding: "14px 28px",
              background: "var(--gold)",
              color: "#000",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 0.4,
              textTransform: "uppercase",
              border: "none",
              borderRadius: 3,
              cursor: "pointer",
            }}
          >
            Bắt Đầu Ván Đấu
          </button>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 11,
              color: "var(--text-faint)",
              fontFamily: "var(--mono)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "none",
                boxShadow: "none",
              }}
            />
            Trạng thái: Sẵn sàng
          </div>
        </div>
      </div>

      {/* Live data panel */}
      <div
        style={{
          background: "var(--panel)",
          border: "1px solid var(--border)",
          borderRadius: 4,
          padding: "18px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 0.5,
              letterSpacing: 0.5,
              textTransform: "uppercase",
              color: "var(--text-faint)",
              fontFamily: "var(--mono)",
            }}
          >
            Lịch sử thuế
          </span>
          <span
            style={{
              fontSize: 9,
              color: "var(--gold)",
              fontFamily: "var(--mono)",
              letterSpacing: 1,
            }}
          >
Thuế suất
Thuế suất
          </span>
        </div>
        {Object.entries(taxRates).map(([round, rate]) => {
          const colors = ["#22c55e", "#a855f7", "#eab308", "#ef4444"];
          const c = colors[parseInt(round) - 1];
          return (
            <div
              key={round}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 7,
              }}
            >
              <span
                style={{
                  fontSize: 9,
                  color: "var(--text-faint)",
                  fontFamily: "var(--mono)",
                  width: 46,
                }}
              >
                Vòng {round}
              </span>
              <div
                style={{
                  flex: 1,
                  height: 5,
                  background: "var(--border-soft)",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${(rate / 20) * 100}%`,
                    height: "100%",
                    background: c,
                    borderRadius: 2,
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: c,
                  fontFamily: "var(--mono)",
                  width: 28,
                  textAlign: "right",
                }}
              >
                {rate}%
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ── Companies ───────────────────────────────────────── */
function Companies() {
  const mobile = useIsMobile();
  return (
    <section
      id="thi-truong"
      style={{ padding: mobile ? "40px 16px" : "60px 48px" }}
    >
      <div style={{ marginBottom: 32 }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 0.5,
            letterSpacing: 0.5,
            textTransform: "uppercase",
            color: "var(--gold)",
            fontFamily: "var(--mono)",
            marginBottom: 10,
          }}
        >
          — Bốn tập đoàn niêm yết
        </div>
        <div style={{ height: 1, background: "var(--border)" }} />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: mobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          gap: 14,
        }}
      >
        {companies.map((c) => {
          const ch = priceChange(c);
          const dir = ch > 0 ? "up" : ch < 0 ? "down" : "flat";
          const sign = ch > 0 ? "+" : "";
          const sold = TOTAL_SHARES - c.sharesAvailable;
          return (
            <div
              key={c.id}
              style={{
                background: "var(--panel)",
                border: "1px solid #1f1f1f",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 14px 8px",
                  borderBottom: "1px solid var(--border-soft)",
                }}
              >
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: 0.5,
                    letterSpacing: 0.5,
                    textTransform: "uppercase",
                    color: c.color,
                    fontFamily: "var(--mono)",
                  }}
                >
                  {c.ticker}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    fontFamily: "var(--mono)",
                    padding: "2px 7px",
                    borderRadius: 2,
                    color:
                      dir === "up"
                        ? "#22c55e"
                        : dir === "down"
                          ? "#ef4444"
                          : "var(--text-dim)",
                    background:
                      dir === "up"
                        ? "rgba(34,197,94,.1)"
                        : dir === "down"
                          ? "rgba(239,68,68,.1)"
                          : "transparent",
                  }}
                >
                  {sign}
                  {ch}%
                </span>
              </div>
              <div style={{ padding: "14px" }}>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                    marginBottom: 4,
                  }}
                >
                  {c.name}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 4,
                    marginBottom: 2,
                  }}
                >
                  <span
                    style={{
                      fontSize: 28,
                      fontWeight: 700,
                      fontFamily: "var(--mono)",
                      lineHeight: 1,
                    }}
                  >
                    {c.price}.{String((c.price * 10) % 10 || 0)}B
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 9,
                    color: "var(--text-faint)",
                    letterSpacing: 0.5,
                    textTransform: "uppercase",
                    fontFamily: "var(--mono)",
                    marginBottom: 14,
                  }}
                >
                  GIÁ / CỔ PHẦN
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 4,
                    flexWrap: "wrap",
                    marginBottom: 8,
                  }}
                >
                  {Array.from({ length: TOTAL_SHARES }, (_, i) => (
                    <span
                      key={i}
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: 2,
                        background: i < sold ? c.color : "var(--border-soft)",
                        opacity: i < sold ? 0.75 : 1,
                        border: `1px solid ${i < sold ? c.color : "var(--border)"}`,
                        display: "inline-block",
                      }}
                    />
                  ))}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    color: "var(--text-faint)",
                    letterSpacing: 0.4,
                    textTransform: "uppercase",
                    fontFamily: "var(--mono)",
                  }}
                >
                  {sold} / {TOTAL_SHARES} CP ĐANG LƯU HÀNH
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ── Game Flow ───────────────────────────────────────── */
function GameFlow() {
  const mobile = useIsMobile();
  const steps = [
    {
      num: "01",
      name: "Huy Động Vốn (Quiz)",
      desc: `Chọn độ khó Dễ / Vừa / Khó. Trả lời đúng trong 15 giây để nhận vốn khởi nghiệp lên đến 14B. Sai vẫn được an ủi (càng khó thì an ủi càng ít).`,
    },
    {
      num: "02",
      name: "Đầu Tư + Buff",
      desc: `Tối đa 2 giao dịch cổ phiếu mỗi vòng. Mua 1 thẻ Buff từ 3 gói ngẫu nhiên để xoay chuyển cục diện.`,
    },
    {
      num: "03",
      name: "Đàm Phán",
      desc: `Giao thương trực tiếp với đối thủ. Trao đổi cổ phần theo tỷ lệ tự thỏa thuận để đạt ngưỡng 60% thâu tóm.`,
    },
  ];
  return (
    <section
      id="luat-choi"
      style={{ padding: mobile ? "40px 16px" : "60px 48px" }}
    >
      <div style={{ marginBottom: 36 }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 0.5,
            letterSpacing: 0.5,
            textTransform: "uppercase",
            color: "var(--gold)",
            fontFamily: "var(--mono)",
            marginBottom: 8,
          }}
        >
          Quy trình vận hành / mỗi vòng
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)",
          gap: 12,
          marginBottom: 16,
        }}
      >
        {steps.map((s) => (
          <div
            key={s.num}
            style={{
              background: "var(--panel)",
              border: "1px solid #1f1f1f",
              borderRadius: 4,
              padding: "28px 24px",
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: 800,
                color: "var(--border-soft)",
                fontFamily: "var(--mono)",
                lineHeight: 1,
                marginBottom: 16,
              }}
            >
              {s.num}
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 0.5,
                marginBottom: 12,
              }}
            >
              {s.name}
            </div>
            <div style={{ fontSize: 12, color: "var(--text-dim)", lineHeight: 1.65 }}>
              {s.desc}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          background: "var(--bg-2)",
          border: "1px solid var(--border-soft)",
          borderRadius: 4,
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontSize: 10,
            color: "var(--text-dim)",
            fontFamily: "var(--mono)",
          }}
        >
          QUIZ (15s)
        </span>
        <span style={{ color: "var(--border)" }}>→</span>
        <span
          style={{
            fontSize: 10,
            color: "var(--text-dim)",
            fontFamily: "var(--mono)",
          }}
        >
          ĐẦU TƯ + BUFF (30s)
        </span>
        <span style={{ color: "var(--border)" }}>→</span>
        <span
          style={{
            fontSize: 10,
            color: "var(--text-dim)",
            fontFamily: "var(--mono)",
          }}
        >
          ĐÀM PHÁN (30s)
        </span>
        <span style={{ color: "var(--border)" }}>→</span>
        <span
          style={{
            fontSize: 10,
            color: "var(--gold)",
            fontFamily: "var(--mono)",
          }}
        >
          [HỆ THỐNG: THUẾ + GIÁ + SỰ KIỆN]
        </span>
      </div>
    </section>
  );
}

/* ── Buff Tiers ──────────────────────────────────────── */
function BuffTiers() {
  const mobile = useIsMobile();
  const patterns = [
    "repeating-linear-gradient(45deg, #1a2a1a 0px, #1a2a1a 4px, #0e1a0e 4px, #0e1a0e 10px)",
    "repeating-linear-gradient(45deg, #1a1a2a 0px, #1a1a2a 4px, #0e0e1a 4px, #0e0e1a 10px)",
    "repeating-linear-gradient(45deg, #2a2010 0px, #2a2010 4px, #1a1408 4px, #1a1408 10px)",
    "repeating-linear-gradient(45deg, #2a1010 0px, #2a1010 4px, #1a0808 4px, #1a0808 10px)",
  ];
  return (
    <section
      id="the-quyen-luc"
      style={{ padding: mobile ? "40px 16px" : "60px 48px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 32,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 0.5,
              letterSpacing: 0.5,
              textTransform: "uppercase",
              color: "var(--gold)",
              fontFamily: "var(--mono)",
              marginBottom: 8,
            }}
          >
            Hệ thống thẻ quyền lực
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Buff Tiers
          </div>
        </div>
        <div
          style={{
            fontSize: 10,
            color: "var(--text-faint)",
            fontFamily: "var(--mono)",
            textAlign: "right",
          }}
        >
          GIÁ TĂNG DẦN: 3 → 9B / GÓI · 3 GÓI / VÒNG
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: mobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          gap: 14,
        }}
      >
        {buffs.map((b, i) => {
          const tm = tierMeta[b.tier];
          return (
            <div
              key={b.id}
              style={{
                background: "var(--panel)",
                border: "1px solid #1f1f1f",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: 180,
                  background: patterns[i],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    background: tm.color,
                    borderRadius: 2,
                    position: "absolute",
                    top: 12,
                    left: 12,
                  }}
                />
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: tm.color,
                    transform: "rotate(45deg)",
                    boxShadow: `0 0 10px ${tm.glow}`,
                    boxShadow: `0 0 10px ${tm.glow}`,
                  }}
                />
              </div>
              <div style={{ padding: "14px 16px" }}>
                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: 0.5,
                    letterSpacing: 0.5,
                    textTransform: "uppercase",
                    color: tm.color,
                    fontFamily: "var(--mono)",
                    marginBottom: 6,
                  }}
                >
                  {tm.label}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    marginBottom: 6,
                  }}
                >
                  {b.name}
                </div>
                <div style={{ fontSize: 11, color: "var(--text-dim)", lineHeight: 1.5 }}>
                  {b.effect}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ── Tax & Events ────────────────────────────────────── */
function TaxAndEvents() {
  const mobile = useIsMobile();
  const taxBands = [
    { rounds: "Vòng 1", rate: "5%", label: "Khởi động", color: "#22c55e" },
    { rounds: "Vòng 2", rate: "10%", label: "Mở rộng", color: "#a855f7" },
    { rounds: "Vòng 3", rate: "15%", label: "Bão hòa", color: "#eab308" },
    { rounds: "Vòng 4", rate: "20%", label: "Sinh tồn", color: "#ef4444" },
  ];
  const eventList = Object.entries(events)
    .filter(([r]) => Number(r) <= TOTAL_ROUNDS)
    .map(([r, e]) => ({
      round: r,
      title: e.title,
      icon: e.icon,
      badge:
        e.effect.type === "sector"
          ? `+${e.effect.pct}% ${e.effect.companyId?.toUpperCase()}`
          : e.effect.type === "market"
            ? `${e.effect.pct}% GLOBAL`
            : `+${e.effect.amount}B CASH`,
      color:
        e.type === "good"
          ? "#22c55e"
          : e.type === "bad"
            ? "#ef4444"
            : "var(--gold)",
    }));
  return (
    <section
      id="su-kien"
      style={{
        padding: mobile ? "40px 16px" : "60px 48px",
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
        gap: mobile ? 24 : 32,
      }}
    >
      <div>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 0.5,
            letterSpacing: 0.5,
            textTransform: "uppercase",
            color: "var(--gold)",
            fontFamily: "var(--mono)",
            marginBottom: 10,
          }}
        >
          Thuế bậc thang / Nhà nước
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          Biểu Thuế Suất {TOTAL_ROUNDS} Vòng
        </div>
        <div
          style={{
            border: `1px solid ${C.border}`,
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              padding: "8px 16px",
              background: "var(--bg-2)",
              borderBottom: "1px solid var(--border-soft)",
            }}
          >
            {["Vòng đấu", "Thuế suất", "Trạng thái"].map((h) => (
              <span
                key={h}
                style={{
                  fontSize: 9,
                  color: "var(--text-faint)",
                  textTransform: "uppercase",
                  letterSpacing: 0.4,
                  fontFamily: "var(--mono)",
                }}
              >
                {h}
              </span>
            ))}
          </div>
          {taxBands.map((b, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                padding: "14px 16px",
                borderBottom:
                  i < taxBands.length - 1 ? `1px solid ${C.borderSoft}` : "none",
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  fontFamily: "var(--mono)",
                  color: "var(--text-dim)",
                }}
              >
                {b.rounds}
              </span>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: b.color,
                  fontFamily: "var(--mono)",
                }}
              >
                {b.rate}
              </span>
              <span style={{ fontSize: 11, color: "var(--text-dim)" }}>{b.label}</span>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 12,
            fontSize: 9,
            color: "var(--text-faint)",
            fontFamily: "var(--mono)",
            letterSpacing: 1,
          }}
        >
          CÔNG THỨC: THUẾ = TỔNG TÀI SẢN × THUẾ SUẤT
        </div>
      </div>

      <div>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 0.5,
            letterSpacing: 0.5,
            textTransform: "uppercase",
            color: "var(--gold)",
            fontFamily: "var(--mono)",
            marginBottom: 10,
          }}
        >
          Sự kiện thị trường
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          Phát Hành Mỗi 2 Vòng
        </div>
        <div
          style={{
            background: "var(--panel)",
            border: "1px solid #1f1f1f",
            borderRadius: 4,
            padding: "20px 20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: 1,
                background: "var(--gold)",
              }}
            />
            <span
              style={{
                fontSize: 10,
                fontFamily: "var(--mono)",
                color: "var(--text-dim)",
                letterSpacing: 1,
              }}
            >
              ROUND 2 · 4
            </span>
          </div>
          {eventList.map((ev) => (
            <div
              key={ev.round}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 18 }}>{ev.icon}</span>
                <span style={{ fontSize: 13, color: "var(--text-dim)" }}>{ev.title}</span>
              </div>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: ev.color,
                  fontFamily: "var(--mono)",
                }}
              >
                {ev.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Win Conditions ──────────────────────────────────── */
function WinConditions() {
  const mobile = useIsMobile();
  return (
    <section
      id="chien-thang"
      style={{ padding: mobile ? "40px 16px" : "60px 48px" }}
    >
      <div
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 0.5,
          letterSpacing: 0.5,
          textTransform: "uppercase",
          color: "var(--gold)",
          fontFamily: "var(--mono)",
          marginBottom: 10,
        }}
      >
        Điều kiện chiến thắng
      </div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          textTransform: "uppercase",
          marginBottom: 28,
        }}
      >
        Hai Con Đường Lên Đỉnh
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
          gap: 14,
        }}
      >
        <div
          style={{
            background: "var(--panel)",
            border: "1px solid #1f1f1f",
            borderRadius: 4,
            padding: "28px 28px",
          }}
        >
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: 0.5,
              letterSpacing: 0.5,
              textTransform: "uppercase",
              color: "var(--text-dim)",
              fontFamily: "var(--mono)",
              marginBottom: 12,
            }}
          >
            [A] Mặc định
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Thống Trị Tài Sản
          </div>
          <p style={{ fontSize: 13, color: "var(--text-dim)", lineHeight: 1.65 }}>
            Có tổng giá trị tài sản — tiền mặt cộng giá trị cổ phần theo giá
            cuối vòng {TOTAL_ROUNDS} — lớn nhất so với các tập đoàn còn lại.
          </p>
        </div>
        <div
          style={{
            background: "var(--panel)",
            border: "1px solid #1f1f1f",
            borderRadius: 4,
            padding: "28px 28px",
          }}
        >
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: 0.5,
              letterSpacing: 0.5,
              textTransform: "uppercase",
              color: "#ef4444",
              fontFamily: "var(--mono)",
              marginBottom: 12,
            }}
          >
            [B] Thắng sớm
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Thâu Tóm Độc Quyền
          </div>
          <p style={{ fontSize: 13, color: "var(--text-dim)", lineHeight: 1.65 }}>
            Sở hữu ≥ {EARLY_WIN_SHARES} cổ phần ({EARLY_WIN_SHARES}/
            {TOTAL_SHARES}) của bất kỳ một công ty nào để tuyên bố thâu tóm và
            thắng ngay lập tức, bất kể đang ở vòng nào.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── CTA ─────────────────────────────────────────────── */
function CTA({ onStart }) {
  const mobile = useIsMobile();
  return (
    <section
      style={{
        padding: mobile ? "56px 16px 64px" : "80px 48px 100px",
        textAlign: "center",
        borderTop: `1px solid ${C.borderSoft}`,
      }}
    >
      <h2
        style={{
          fontSize: "clamp(36px, 5vw, 60px)",
          fontWeight: 800,
          textTransform: "uppercase",
          lineHeight: 1.05,
          marginBottom: 20,
        }}
      >
        <span style={{ color: "var(--text)" }}>Bạn Sẽ Là </span>
        <span style={{ color: "var(--gold)" }}>Tập Đoàn</span>
        <br />
        <span style={{ color: "var(--text)" }}>Nào Còn Đứng Vững?</span>
      </h2>
      <p
        style={{
          fontSize: 14,
          color: "var(--text-dim)",
          marginBottom: 36,
          lineHeight: 1.7,
        }}
      >
        Tập hợp 2–10 nhóm, một quản trò điều hành, và bắt đầu
        <br />
        cuộc chiến giành thị phần ngay bây giờ.
      </p>
    </section>
  );
}

/* ── AI Annotation ───────────────────────────────────── */
const aiTools = [
  {
    name: "Claude Code",
    img: "/claude-ai-icon.webp",
    desc: "Claude Code là một công cụ lập trình thông minh, có khả năng đọc mã nguồn, chỉnh sửa tệp, chạy lệnh và tích hợp với các công cụ phát triển của bạn. Có sẵn trên terminal, IDE, ứng dụng máy tính để bàn và trình duyệt.",
    desc2: "Claude Code là trợ lý lập trình được hỗ trợ bởi trí tuệ nhân tạo, giúp bạn xây dựng tính năng, sửa lỗi và tự động hóa các tác vụ phát triển. Nó hiểu toàn bộ mã nguồn của bạn và có thể làm việc trên nhiều tệp và công cụ để hoàn thành công việc.",
    accent: "#d97706",
  },
  {
    name: "Gemini",
    img: "/gemini.webp",
    desc: "Gemini AI là trợ lý trí tuệ nhân tạo đa phương thức thế hệ mới của Google, sở hữu cửa sổ ngữ cảnh cực lớn giúp thấu hiểu toàn bộ kiến trúc mã nguồn phức tạp và dữ liệu hệ thống của bạn.",
    desc2: "Không chỉ dừng lại ở một công cụ lập trình thông minh có khả năng viết code, sửa lỗi và thiết kế hệ thống, Gemini còn là một trợ lý toàn năng tích hợp sâu vào hệ sinh thái công cụ (từ IDE, terminal đến đám mây) và các ứng dụng hàng ngày, giúp bạn tự động hóa quy trình làm việc, phân tích dữ liệu đa phương tiện và tối ưu hóa hiệu suất toàn diện.",
    accent: "#4285f4",
  },
  {
    name: "Antigravity",
    img: "/google-antigravity.jpg",
    desc: "Google Antigravity là một nền tảng phát triển phần mềm dựa trên tác nhân và môi trường phát triển tích hợp (IDE).",
    desc2: "Nó cho phép các nhà phát triển triển khai các tác nhân AI tự động để lập kế hoạch, viết, kiểm thử và gỡ lỗi các dự án lập trình phức tạp trên nhiều trình soạn thảo, thiết bị đầu cuối và trình duyệt.",
    accent: "#22c55e",
  },
];

function AIAnnotation() {
  const mobile = useIsMobile();
  return (
    <section
      id="chu-thich-ai"
      style={{
        padding: mobile ? "48px 16px" : "72px 48px",
        borderTop: "1px solid #111",
      }}
    >
      {/* Section header */}
      <div style={{ marginBottom: 40 }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 0.5,
            textTransform: "uppercase",
            color: "var(--gold)",
            fontFamily: "var(--mono)",
            marginBottom: 10,
          }}
        >
          — Chú thích AI
        </div>
        <div style={{ height: 1, background: "var(--border)" }} />
        <h2
          style={{
            fontSize: "clamp(22px, 3vw, 32px)",
            fontWeight: 800,
            textTransform: "uppercase",
            marginTop: 18,
            marginBottom: 6,
            lineHeight: 1.15,
          }}
        >
          Được xây dựng với sự hỗ trợ của{" "}
          <span style={{ color: "var(--gold)" }}>AI</span>
        </h2>
        <p
          style={{
            fontSize: 13,
            color: "var(--text-dim)",
            lineHeight: 1.7,
            maxWidth: 560,
          }}
        >
          Dự án này được phát triển với sự hỗ trợ của các công cụ AI hiện đại
          dưới đây.
        </p>
        <div
          style={{
            marginTop: 16,
            padding: "14px 18px",
            background: "rgba(234,179,8,0.06)",
            borderLeft: "3px solid var(--gold)",
            borderRadius: "0 4px 4px 0",
            maxWidth: 620,
          }}
        >
          <p
            style={{
              fontSize: 12,
              color: "var(--gold)",
              lineHeight: 1.75,
              margin: 0,
              fontWeight: 600,
            }}
          >
            ⚠️ Nhóm chỉ sử dụng công cụ AI cho mục đích hỗ trợ code giao diện,
            tổng hợp lí thuyết. Mọi kiến thức, tài liệu đều được trích dẫn và
            kiểm chứng từ nguồn chính thống.
          </p>
        </div>
      </div>

      {/* 3-column grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)",
          gap: 18,
        }}
      >
        {aiTools.map((tool) => (
          <div
            key={tool.name}
            style={{
              background: "var(--panel)",
              border: "1px solid #1f1f1f",
              borderRadius: 6,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transition: "border-color .25s, box-shadow .25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = tool.accent;
              e.currentTarget.style.boxShadow = `0 0 20px ${tool.accent}22`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#1f1f1f";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Image */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                overflow: "hidden",
                background: "#0d0e11",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={tool.img}
                alt={tool.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  padding: 20,
                }}
              />
            </div>

            {/* Content */}
            <div style={{ padding: "18px 20px 22px", flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: tool.accent,
                    display: "inline-block",
                    boxShadow: `0 0 6px ${tool.accent}88`,
                  }}
                />
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 0.4,
                    textTransform: "uppercase",
                    color: tool.accent,
                    fontFamily: "var(--mono)",
                  }}
                >
                  {tool.name}
                </span>
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: "var(--text-dim)",
                  lineHeight: 1.7,
                  marginBottom: 10,
                }}
              >
                {tool.desc}
              </p>
              <p
                style={{
                  fontSize: 12,
                  color: "var(--text-faint)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {tool.desc2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Footer ──────────────────────────────────────────── */
function Footer() {
  const mobile = useIsMobile();
  return (
    <footer
      style={{
        borderTop: `1px solid ${C.borderSoft}`,
        padding: mobile ? "16px 16px" : "20px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      <span
        style={{
          fontSize: 10,
          color: "var(--text-faint)",
          fontFamily: "var(--mono)",
          letterSpacing: 1,
        }}
      >
        © 2026 Đế Chế Kinh Tế · Board game chiến thuật kinh tế
        © 2026 Đế Chế Kinh Tế · Board game chiến thuật kinh tế
      </span>
      <div style={{ display: "flex", gap: 24 }}>
        {["Điều khoản", "Bộ câu hỏi", "Liên hệ"].map((l) => (
          <a
            key={l}
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{
              fontSize: 10,
              color: "var(--text-faint)",
              textDecoration: "none",
              fontFamily: "var(--mono)",
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            {l}
          </a>
        ))}
      </div>
    </footer>
  );
}

/* ── Main export ─────────────────────────────────────── */
export default function HomePage({ onStart }) {
  const [showVerify, setShowVerify] = useState(false);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--text)" }}>
      <Ticker />
      <Nav onStart={() => setShowVerify(true)} />
      <Hero onStart={() => setShowVerify(true)} />
      <div style={{ borderTop: "1px solid #111" }} />
      <Companies />
      <div style={{ borderTop: `1px solid ${C.borderSoft}` }} />
      <GameFlow />
      <div style={{ borderTop: `1px solid ${C.borderSoft}` }} />
      <BuffTiers />
      <div style={{ borderTop: `1px solid ${C.borderSoft}` }} />
      <TaxAndEvents />
      <div style={{ borderTop: `1px solid ${C.borderSoft}` }} />
      <WinConditions />
      <CTA onStart={() => setShowVerify(true)} />
      <AIAnnotation />
      <Footer />
      {showVerify && (
        <VerifyCard
          onClose={() => setShowVerify(false)}
          onSuccess={() => {
            setShowVerify(false);
            onStart();
          }}
        />
      )}
    </div>
  );
}
