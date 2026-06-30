# 🏛️ Đế chế Kinh tế — Economic Empire

Board game chiến lược kinh tế **Đế chế Kinh tế** — phiên bản web **chơi được**, dựng bằng **React + Vite**. Toàn bộ ván đấu (4 round, 2–10 nhóm) chạy **hoàn toàn bằng state cục bộ trong React** — **không cần backend, không kết nối API**. Một quản trò ngồi một máy, chọn số nhóm và tự thao tác cho từng nhóm qua các vòng. **Đồng hồ chạy lần lượt từng nhóm trong mỗi phase**: mỗi nhóm có 10s (Quiz) / 30s (Đầu tư) / 30s (Đàm phán); hết giờ nhóm này sang nhóm kế, xong nhóm cuối mới sang phase tiếp theo. Tổng thời gian ≈ 70s × số nhóm × 4 round.

## Chạy dự án

```bash
npm install
npm run dev      # chạy dev server (http://localhost:5173)
npm run build    # build production
npm run preview  # xem thử bản build
```

## Cách chơi (1 máy, quản trò điều hành)

Vào **Trang chủ → Bắt đầu**, quản trò chọn **số nhóm chơi (2–10)** ở màn hình thiết lập rồi vào bàn cờ. Trên bàn cờ, thanh **Control Bar** chọn "Lượt của" nhóm nào → mọi thao tác áp dụng cho nhóm đó. Quản trò lần lượt thao tác cho từng nhóm trong mỗi phase, rồi tự bấm chuyển phase / kết thúc round.

1. **Phase 1 · Quiz** — chọn độ khó, bấm đáp án → đúng nhận full thưởng, sai nhận %. Mỗi đội 1 lần/round.
2. **Phase 2 · Đầu tư + Buff** — bấm **Mua/Bán** cổ phần ở Thị trường (tối đa 2 giao dịch/round), mua 1 **buff** ở Buff Shop (hiệu ứng áp dụng ngay).
3. **Phase 3 · Đàm phán** — tạo đề xuất trao đổi cp/tiền cho đội khác; đội nhận **Đồng ý / Từ chối**.
4. Bấm **Kết thúc Round** → hệ thống tự **thu thuế** (tăng dần 5%→20%, tự bán cp bù nếu thiếu, hết thì **phá sản**), **cập nhật giá** ±5–20%, và tung **sự kiện** ở round 2/4/6/8.
5. Sau **Round 8** (hoặc khi 1 đội ôm ≥6/10 cp = thâu tóm) → hiện bảng kết quả người thắng.

## Cấu trúc

```
src/
├── App.tsx                  # Điều phối 3 màn: Trang chủ → Thiết lập → Bàn cờ
├── state/
│   ├── gameReducer.ts       # ❤️ Toàn bộ luật chơi: quiz, mua/bán, buff, trade, thuế, sự kiện, thắng/thua
│   └── GameContext.tsx      # Context + hook useGame() — state cục bộ, không backend
├── pages/
│   └── SetupPage.tsx        # Quản trò chọn số nhóm (2–10) + xem trước cấu hình
├── components/
│   ├── HomePage.tsx         # Trang chủ giới thiệu
│   ├── Header.tsx           # Round, thuế suất, số nhóm
│   ├── ControlBar.tsx       # Chọn lượt nhóm + Kết thúc Round / Ván mới / Đổi số nhóm
│   ├── PhaseFlow.tsx        # Stepper 3 phase (bấm để nhảy phase)
│   ├── EventBanner.tsx      # Sự kiện đặc biệt
│   ├── QuizPanel.tsx        # Phase 1
│   ├── BuffShop.tsx         # Phase 2 — buff
│   ├── StockMarket.tsx      # Thị trường + nút Mua/Bán
│   ├── NegotiationPanel.tsx # Phase 3 — form đề xuất + hộp thư đến
│   ├── Scoreboard.tsx       # Xếp hạng tài sản (bấm để chọn lượt)
│   ├── TeamCard.tsx         # Thẻ 1 tập đoàn
│   ├── ActivityLog.tsx      # Nhật ký mọi hành động
│   └── GameOverModal.tsx    # Bảng kết quả cuối ván
├── data/                    # Số liệu khởi tạo (teams, companies, buffs, quiz, events)
├── utils/calc.ts            # Tài sản, thị phần, độc quyền, thuế, thắng sớm
└── styles/index.css         # Design system (dark theme)
```

## Tùy chỉnh số liệu

Sửa `src/data/` là đổi cấu hình ván:
- `teams.ts` — danh tính 10 nhóm (tên, màu, logo); ván chỉ dùng N nhóm đầu theo lựa chọn của quản trò.
- `companies.ts` — các công ty, giá khởi điểm.
- `buffs.ts` — thẻ quyền lực 4 tier + 3 gói đang bày bán (`buffShopOffer`).
- `quiz.ts` — câu hỏi theo độ khó + mức thưởng đúng/sai.
- `game.ts` — `getGameConfig(numTeams)` tự suy ra vốn khởi đầu, tổng cổ phần, ngưỡng thâu tóm, thuế suất từng round, sự kiện theo sĩ số.

> Luật chơi nằm trong `state/gameReducer.ts` — đây là nơi sửa nếu muốn đổi công thức thuế, cách phá sản, hiệu ứng buff, điều kiện thắng…
