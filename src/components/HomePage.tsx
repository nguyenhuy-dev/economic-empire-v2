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
        borderBottom: "1px solid #1f1f1f",
        padding: mobile ? "0 16px" : "0 48px",
        position: "sticky",
        top: 0,
        background: "rgba(0,0,0,0.92)",
        backdropFilter: "blur(12px)",
        zIndex: 10,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span
          style={{
            width: 10,
            height: 10,
            background: "#F5A623",
            borderRadius: 2,
            display: "inline-block",
          }}
        />
        <span
          style={{
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: 2,
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
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: "#555",
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
            border: "1px solid #222",
            borderRadius: 3,
            padding: "5px 14px",
            marginBottom: 28,
            fontSize: 10,
            color: "#555",
            letterSpacing: 2,
            textTransform: "uppercase",
            fontFamily: "Space Mono, monospace",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              background: "#F5A623",
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
          <span style={{ color: "#fff" }}>
            Thâu Tóm
            <br />
          </span>
          <span style={{ color: "#F5A623" }}>Thị Trường</span>
        </h1>

        <p
          style={{
            fontSize: 15,
            color: "#666",
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
              background: "#F5A623",
              color: "#000",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1.5,
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
              color: "#444",
              fontFamily: "Space Mono, monospace",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 6px #22c55e",
              }}
            />
            Trạng thái: Sẵn sàng
          </div>
        </div>
      </div>

      {/* Live data panel */}
      <div
        style={{
          background: "#0e0e0e",
          border: "1px solid #222",
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
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#444",
              fontFamily: "Space Mono, monospace",
            }}
          >
            Lịch sử thuế
          </span>
          <span
            style={{
              fontSize: 9,
              color: "#F5A623",
              fontFamily: "Space Mono, monospace",
              letterSpacing: 1,
            }}
          >
            LIVE DATA
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
                  color: "#333",
                  fontFamily: "Space Mono, monospace",
                  width: 46,
                }}
              >
                Vòng {round}
              </span>
              <div
                style={{
                  flex: 1,
                  height: 5,
                  background: "#1a1a1a",
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
                  fontFamily: "Space Mono, monospace",
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
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#F5A623",
            fontFamily: "Space Mono, monospace",
            marginBottom: 10,
          }}
        >
          — Bốn tập đoàn niêm yết
        </div>
        <div style={{ height: 1, background: "#1f1f1f" }} />
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
                background: "#0e0e0e",
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
                  borderBottom: "1px solid #1a1a1a",
                }}
              >
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: c.color,
                    fontFamily: "Space Mono, monospace",
                  }}
                >
                  {c.ticker}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    fontFamily: "Space Mono, monospace",
                    padding: "2px 7px",
                    borderRadius: 2,
                    color:
                      dir === "up"
                        ? "#22c55e"
                        : dir === "down"
                          ? "#ef4444"
                          : "#555",
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
                      fontFamily: "Space Mono, monospace",
                      lineHeight: 1,
                    }}
                  >
                    {c.price}.{String((c.price * 10) % 10 || 0)}B
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 9,
                    color: "#444",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    fontFamily: "Space Mono, monospace",
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
                        background: i < sold ? c.color : "#1a1a1a",
                        opacity: i < sold ? 0.75 : 1,
                        border: `1px solid ${i < sold ? c.color : "#2a2a2a"}`,
                        display: "inline-block",
                      }}
                    />
                  ))}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    color: "#333",
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    fontFamily: "Space Mono, monospace",
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
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#F5A623",
            fontFamily: "Space Mono, monospace",
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
              background: "#0e0e0e",
              border: "1px solid #1f1f1f",
              borderRadius: 4,
              padding: "28px 24px",
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: 800,
                color: "#1a1a1a",
                fontFamily: "Space Mono, monospace",
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
            <div style={{ fontSize: 12, color: "#555", lineHeight: 1.65 }}>
              {s.desc}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          background: "#0a0a0a",
          border: "1px solid #1a1a1a",
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
            color: "#555",
            fontFamily: "Space Mono, monospace",
          }}
        >
          QUIZ (15s)
        </span>
        <span style={{ color: "#222" }}>→</span>
        <span
          style={{
            fontSize: 10,
            color: "#555",
            fontFamily: "Space Mono, monospace",
          }}
        >
          ĐẦU TƯ + BUFF (30s)
        </span>
        <span style={{ color: "#222" }}>→</span>
        <span
          style={{
            fontSize: 10,
            color: "#555",
            fontFamily: "Space Mono, monospace",
          }}
        >
          ĐÀM PHÁN (30s)
        </span>
        <span style={{ color: "#222" }}>→</span>
        <span
          style={{
            fontSize: 10,
            color: "#F5A623",
            fontFamily: "Space Mono, monospace",
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
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#F5A623",
              fontFamily: "Space Mono, monospace",
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
            color: "#444",
            fontFamily: "Space Mono, monospace",
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
                background: "#0e0e0e",
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
                    boxShadow: `0 0 20px ${tm.glow}`,
                  }}
                />
              </div>
              <div style={{ padding: "14px 16px" }}>
                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: tm.color,
                    fontFamily: "Space Mono, monospace",
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
                <div style={{ fontSize: 11, color: "#555", lineHeight: 1.5 }}>
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
            : "#F5A623",
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
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#F5A623",
            fontFamily: "Space Mono, monospace",
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
            border: "1px solid #1f1f1f",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              padding: "8px 16px",
              background: "#0a0a0a",
              borderBottom: "1px solid #1a1a1a",
            }}
          >
            {["Vòng đấu", "Thuế suất", "Trạng thái"].map((h) => (
              <span
                key={h}
                style={{
                  fontSize: 9,
                  color: "#333",
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  fontFamily: "Space Mono, monospace",
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
                  i < taxBands.length - 1 ? "1px solid #141414" : "none",
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  fontFamily: "Space Mono, monospace",
                  color: "#aaa",
                }}
              >
                {b.rounds}
              </span>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: b.color,
                  fontFamily: "Space Mono, monospace",
                }}
              >
                {b.rate}
              </span>
              <span style={{ fontSize: 11, color: "#555" }}>{b.label}</span>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 12,
            fontSize: 9,
            color: "#333",
            fontFamily: "Space Mono, monospace",
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
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#F5A623",
            fontFamily: "Space Mono, monospace",
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
            background: "#0e0e0e",
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
                background: "#F5A623",
              }}
            />
            <span
              style={{
                fontSize: 10,
                fontFamily: "Space Mono, monospace",
                color: "#555",
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
                <span style={{ fontSize: 13, color: "#aaa" }}>{ev.title}</span>
              </div>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: ev.color,
                  fontFamily: "Space Mono, monospace",
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
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "#F5A623",
          fontFamily: "Space Mono, monospace",
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
            background: "#0e0e0e",
            border: "1px solid #1f1f1f",
            borderRadius: 4,
            padding: "28px 28px",
          }}
        >
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#555",
              fontFamily: "Space Mono, monospace",
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
          <p style={{ fontSize: 13, color: "#555", lineHeight: 1.65 }}>
            Có tổng giá trị tài sản — tiền mặt cộng giá trị cổ phần theo giá
            cuối vòng {TOTAL_ROUNDS} — lớn nhất so với các tập đoàn còn lại.
          </p>
        </div>
        <div
          style={{
            background: "#0e0e0e",
            border: "1px solid #1f1f1f",
            borderRadius: 4,
            padding: "28px 28px",
          }}
        >
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#ef4444",
              fontFamily: "Space Mono, monospace",
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
          <p style={{ fontSize: 13, color: "#555", lineHeight: 1.65 }}>
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
        borderTop: "1px solid #111",
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
        <span style={{ color: "#fff" }}>Bạn Sẽ Là </span>
        <span style={{ color: "#F5A623" }}>Tập Đoàn</span>
        <br />
        <span style={{ color: "#fff" }}>Nào Còn Đứng Vững?</span>
      </h2>
      <p
        style={{
          fontSize: 14,
          color: "#555",
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

/* ── Footer ──────────────────────────────────────────── */
function Footer() {
  const mobile = useIsMobile();
  return (
    <footer
      style={{
        borderTop: "1px solid #111",
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
          color: "#333",
          fontFamily: "Space Mono, monospace",
          letterSpacing: 1,
        }}
      >
        © 2026 ĐẾ CHẾ KINH TẾ · TERMINAL V3.0.4 · ALL RIGHTS RESERVED
      </span>
      <div style={{ display: "flex", gap: 24 }}>
        {["Điều khoản", "Bộ câu hỏi", "Liên hệ"].map((l) => (
          <a
            key={l}
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{
              fontSize: 10,
              color: "#333",
              textDecoration: "none",
              fontFamily: "Space Mono, monospace",
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
  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "#fff" }}>
      <Ticker />
      <Nav onStart={onStart} />
      <Hero onStart={onStart} />
      <div style={{ borderTop: "1px solid #111" }} />
      <Companies />
      <div style={{ borderTop: "1px solid #111" }} />
      <GameFlow />
      <div style={{ borderTop: "1px solid #111" }} />
      <BuffTiers />
      <div style={{ borderTop: "1px solid #111" }} />
      <TaxAndEvents />
      <div style={{ borderTop: "1px solid #111" }} />
      <WinConditions />
      <CTA onStart={onStart} />
      <Footer />
    </div>
  );
}
