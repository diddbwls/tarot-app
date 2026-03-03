// ============================================================
//  TAROT DATA  — 22 Major Arcana with per-period meanings
// ============================================================
const CARDS = [
  { id:0,  name:"광대",           image:"assets/cards/00.jpg", keywords:"새로운 시작, 자유, 가능성",
    meanings:["예상치 못한 기회를 열린 마음으로 받아들이세요.","즉흥적 선택이 오히려 좋은 결과를 낼 수 있어요.","흐름에 몸을 맡기면 좋은 마무리가 될 거예요."] },
  { id:1,  name:"마법사",         image:"assets/cards/01.jpg", keywords:"의지, 능력, 행동력",
    meanings:["자신의 능력을 믿고 적극적으로 행동하세요.","집중력이 높으니 중요한 일을 처리하기 좋아요.","오늘 쌓은 노력이 내일의 토대가 됩니다."] },
  { id:2,  name:"여사제",         image:"assets/cards/02.jpg", keywords:"직관, 지혜, 내면",
    meanings:["직관을 따르면 중요한 결정에서 실수를 피할 수 있어요.","조용히 생각을 정리하면 명확한 답이 보여요.","혼자만의 시간이 마음을 회복시켜 줄 거예요."] },
  { id:3,  name:"여황제",         image:"assets/cards/03.jpg", keywords:"풍요, 창조, 돌봄",
    meanings:["풍성한 에너지로 주변 사람들과 따뜻하게 시작하세요.","창의적 발상이 빛을 발하는 시간이에요.","편안한 자기 돌봄이 피로를 풀어줄 거예요."] },
  { id:4,  name:"황제",           image:"assets/cards/04.jpg", keywords:"권위, 안정, 통제",
    meanings:["계획을 세우고 차분하게 실행하면 안정적인 하루가 돼요.","리더십을 발휘할 순간이 오니 자신감을 가지세요.","오늘 하루를 잘 마무리하는 것이 내일의 성공이에요."] },
  { id:5,  name:"교황",           image:"assets/cards/05.jpg", keywords:"전통, 조언, 신뢰",
    meanings:["신뢰할 사람의 조언이 아침을 순조롭게 해줄 거예요.","규칙과 절차를 따르는 것이 지금은 가장 현명해요.","진심 어린 대화가 관계를 한층 깊게 만들어요."] },
  { id:6,  name:"연인",           image:"assets/cards/06.jpg", keywords:"사랑, 선택, 조화",
    meanings:["진심을 전하면 좋은 반응을 얻을 수 있어요.","가슴이 이끄는 쪽을 선택해 보세요.","소중한 사람과의 시간이 하루를 행복하게 마무리해요."] },
  { id:7,  name:"전차",           image:"assets/cards/07.jpg", keywords:"의지, 승리, 돌파",
    meanings:["강한 의지로 출발하면 어떤 장애물도 넘을 수 있어요.","추진력으로 버티면 오후 고비를 이겨낼 수 있어요.","오늘의 노력이 반드시 결실을 맺을 거예요."] },
  { id:8,  name:"힘",             image:"assets/cards/08.jpg", keywords:"용기, 인내, 내적 강인함",
    meanings:["부드러운 용기로 어려운 상황을 조용히 이겨내세요.","감정을 다스리면 상황이 유리하게 흘러가요.","내면의 힘으로 지친 마음을 회복할 수 있어요."] },
  { id:9,  name:"은둔자",         image:"assets/cards/09.jpg", keywords:"성찰, 고독, 내면의 빛",
    meanings:["혼자 조용히 생각을 정리하며 시작하면 좋아요.","깊은 집중이 요구되는 시간, 내면에 귀 기울이세요.","하루를 되돌아보며 메모하면 마음이 정돈돼요."] },
  { id:10, name:"운명의 수레바퀴", image:"assets/cards/10.jpg", keywords:"변화, 사이클, 운명",
    meanings:["예상치 못한 변화가 긍정적 방향을 열어줄 수 있어요.","흐름이 바뀌는 시점, 적응 속도가 결과를 결정해요.","새로운 가능성이 열리는 저녁이 돼요."] },
  { id:11, name:"정의",           image:"assets/cards/11.jpg", keywords:"균형, 공정, 진실",
    meanings:["솔직하고 공정하게 행동하는 것이 가장 좋은 선택이에요.","사실에 근거해 판단하면 원하는 결과에 가까워져요.","오늘 한 일에 대한 정당한 결과가 찾아와요."] },
  { id:12, name:"매달린 남자",    image:"assets/cards/12.jpg", keywords:"기다림, 희생, 새로운 시각",
    meanings:["조금 더 기다리면 더 나은 결과가 올 거예요.","다른 시각으로 문제를 바라보면 해결책이 보여요.","무언가를 내려놓는 것이 오히려 마음을 가볍게 해요."] },
  { id:13, name:"죽음",           image:"assets/cards/13.jpg", keywords:"변환, 끝과 시작, 전환",
    meanings:["낡은 것을 내려놓고 새로운 출발을 준비하기 좋아요.","변화를 두려워하지 않으면 더 나은 상황으로 나아가요.","오늘의 마무리가 내일의 새 챕터를 여는 전환점이에요."] },
  { id:14, name:"절제",           image:"assets/cards/14.jpg", keywords:"균형, 인내, 조화",
    meanings:["서두르지 않고 꾸준히 나아가면 좋은 결과를 얻어요.","중용을 지키는 것이 현명한 오후를 만들어요.","차분히 정리하며 내일을 위한 에너지를 충전하세요."] },
  { id:15, name:"악마",           image:"assets/cards/15.jpg", keywords:"욕망, 구속, 집착",
    meanings:["습관적 생각에 사로잡히지 않도록 의식적으로 선택하세요.","유혹에 주의하고 장기적 관점으로 결정하세요.","번잡함을 내려놓고 진짜 원하는 것에 집중하세요."] },
  { id:16, name:"탑",             image:"assets/cards/16.jpg", keywords:"갑작스런 변화, 해방, 각성",
    meanings:["갑작스러운 상황도 침착하면 기회가 될 수 있어요.","예상 밖 변수가 등장할 수 있으니 유연하게 대처하세요.","충격이 오히려 묵은 문제를 해소하는 계기가 돼요."] },
  { id:17, name:"별",             image:"assets/cards/17.jpg", keywords:"희망, 치유, 영감",
    meanings:["희망차게 시작하면 기대 이상의 결과가 따라와요.","창의적 영감이 풍부한 오후가 될 거예요.","오늘을 감사히 마무리하면 내일이 더 빛나요."] },
  { id:18, name:"달",             image:"assets/cards/18.jpg", keywords:"직관, 환상, 불확실성",
    meanings:["직관을 믿으면 더 나은 선택을 할 수 있어요.","보이는 것이 전부가 아니니 섣불리 판단하지 마세요.","꿈이나 직관적 느낌에 귀 기울이면 메시지를 얻어요."] },
  { id:19, name:"태양",           image:"assets/cards/19.jpg", keywords:"성공, 활력, 기쁨",
    meanings:["밝고 긍정적 에너지로 주변까지 활기를 줄 수 있어요.","하는 일마다 순조롭게 풀리는 기운이 가득한 오후에요.","주변 사람들과 기쁨을 나눠보세요."] },
  { id:20, name:"심판",           image:"assets/cards/20.jpg", keywords:"깨달음, 재기, 부름",
    meanings:["과거 경험을 바탕으로 더 나은 선택을 해보세요.","용기 있게 행동해야 할 순간이에요.","스스로에게 솔직해지는 시간을 가져보세요."] },
  { id:21, name:"세계",           image:"assets/cards/21.jpg", keywords:"완성, 성취, 통합",
    meanings:["모든 것이 제자리를 찾는 완성의 기운이 넘쳐요.","노력의 결실이 눈에 보이기 시작하는 오후에요.","오늘을 충분히 만끽하며 다음 여정을 기대하세요."] },
];

const PERIODS = ["아침 🌅", "점심 ☀️", "저녁 🌙"];
const PERIOD_SHORT = ["아침", "점심", "저녁"];

// ============================================================
//  STATE
// ============================================================
let shuffled = [...CARDS];
let selected = [];
let activePopupCardId = -1;

// ============================================================
//  DOM REFS
// ============================================================
const grid       = document.getElementById("cardGrid");
const shuffleBtn = document.getElementById("shuffleBtn");
const confirmBtn = document.getElementById("confirmBtn");
const popupOverlay  = document.getElementById("popupOverlay");
const popupCard     = document.getElementById("popupCard");
const popupSelectBtn= document.getElementById("popupSelectBtn");
const popupCancelBtn= document.getElementById("popupCancelBtn");

const resultOverlay = document.getElementById("resultOverlay");
const resultCards   = document.getElementById("resultCards");
const resultSummary = document.getElementById("resultSummary");
const restartBtn    = document.getElementById("restartBtn");

// ============================================================
//  DATE BADGE
// ============================================================
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
document.getElementById("dateBadge").textContent =
  `${tomorrow.getFullYear()}년 ${tomorrow.getMonth()+1}월 ${tomorrow.getDate()}일 내일 운세`;

// ============================================================
//  INITIAL SHUFFLE
// ============================================================
shuffled = [...CARDS].sort(() => Math.random() - 0.5);

// ============================================================
//  RENDER GRID (Hidden Cards)
// ============================================================
function renderGrid() {
  grid.innerHTML = "";
  shuffled.forEach(card => {
    const isSelected = selected.includes(card.id);
    const selIdx = selected.indexOf(card.id);

    const el = document.createElement("div");
    el.className = "grid-card" + (isSelected ? " selected" : "");
    el.dataset.id = card.id;
    // Render only the back of the card
    el.innerHTML = `
      <div class="grid-card-inner">
        <span class="gc-back-pattern">✦</span>
      </div>
      <div class="gc-badge">${isSelected ? selIdx + 1 : ""}</div>
    `;
    el.addEventListener("click", () => onCardClick(card.id));
    grid.appendChild(el);
  });
}

// ============================================================
//  CARD CLICK → POPUP (Hidden Identity)
// ============================================================
function onCardClick(id) {
  activePopupCardId = id;
  const alreadySelected = selected.includes(id);

  // Update popup texts
  document.getElementById("popupEmoji").textContent = "✦";
  document.getElementById("popupName").textContent = "운명의 카드";
  document.getElementById("popupKeywords").textContent = "이 카드를 선택하시겠습니까?";

  popupSelectBtn.textContent = alreadySelected ? "선택 해제" : "선택하기";
  popupSelectBtn.style.background = alreadySelected
    ? "linear-gradient(135deg,#555,#888)"
    : "linear-gradient(135deg,#7c4ddb,#c060e8)";

  popupOverlay.hidden = false;
  // re-trigger popup animation
  popupCard.style.animation = "none";
  requestAnimationFrame(() => { popupCard.style.animation = ""; });
}

popupSelectBtn.addEventListener("click", () => {
  const id = activePopupCardId;
  if (selected.includes(id)) {
    selected = selected.filter(x => x !== id);
  } else {
    if (selected.length >= 3) return;
    selected.push(id);
  }
  popupOverlay.hidden = true;
  confirmBtn.disabled = selected.length < 3;
  renderGrid();
  updateSelectionBar();
});

popupCancelBtn.addEventListener("click", () => { popupOverlay.hidden = true; });
popupOverlay.addEventListener("click", e => { if (e.target === popupOverlay) popupOverlay.hidden = true; });

// ============================================================
//  SELECTION BAR
// ============================================================
function updateSelectionBar() {
  for (let i = 0; i < 3; i++) {
    const slot = document.getElementById("sel" + i);
    if (selected[i] !== undefined) {
      slot.classList.add("filled");
      slot.innerHTML = `
        <span class="sel-emoji">✦</span>
        <span class="sel-period">${PERIOD_SHORT[i]}</span>
        <span class="remove-x" data-idx="${i}">✕</span>
      `;
      slot.querySelector(".remove-x").addEventListener("click", e => {
        e.stopPropagation();
        const idx = parseInt(e.target.dataset.idx);
        selected.splice(idx, 1);
        renderGrid();
        updateSelectionBar();
        confirmBtn.disabled = selected.length < 3;
      });
    } else {
      slot.classList.remove("filled");
      slot.innerHTML = `<span>${PERIODS[i]}</span>`;
    }
  }
}

// ============================================================
//  SHUFFLE ANIMATION
// ============================================================
shuffleBtn.addEventListener("click", async () => {
  shuffleBtn.disabled = true;
  const cards = [...grid.querySelectorAll(".grid-card")];
  const vw = window.innerWidth, vh = window.innerHeight;

  cards.forEach(el => {
    const rx = (Math.random() - 0.5) * vw * 1.4;
    const ry = (Math.random() - 0.5) * vh * 1.2;
    const rr = (Math.random() - 0.5) * 720;
    el.style.setProperty("--tx", rx + "px");
    el.style.setProperty("--ty", ry + "px");
    el.style.setProperty("--tr", rr + "deg");
    el.classList.add("scattering");
  });

  await delay(520);
  shuffled = [...shuffled].sort(() => Math.random() - 0.5);
  selected = [];
  updateSelectionBar();
  confirmBtn.disabled = true;
  renderGrid();

  const newCards = [...grid.querySelectorAll(".grid-card")];
  newCards.forEach(el => {
    const rx = (Math.random() - 0.5) * vw * 1.4;
    const ry = (Math.random() - 0.5) * vh * 1.2;
    const rr = (Math.random() - 0.5) * 720;
    el.style.setProperty("--tx", rx + "px");
    el.style.setProperty("--ty", ry + "px");
    el.style.setProperty("--tr", rr + "deg");
    el.classList.add("gathering");
  });

  await delay(550);
  newCards.forEach(el => el.classList.remove("gathering"));
  shuffleBtn.disabled = false;
});

// ============================================================
//  CONFIRM → REVEAL RESULT (Show Images)
// ============================================================
confirmBtn.addEventListener("click", () => {
  if (selected.length < 3) return;

  // Build result cards HTML with images
  resultCards.innerHTML = selected.map((id, i) => {
    const card = CARDS.find(c => c.id === id);
    return `
      <div class="result-card" id="rc_${i}">
        <div class="result-card-inner">
          <div class="result-face result-back">✦</div>
          <div class="result-face result-front" style="background-image: url('${card.image}'); background-size: cover; background-position: center; border: 2px solid #a07cd0;">
            <div class="rf-overlay">
              <span class="rf-period">${PERIODS[i].toUpperCase()}</span>
              <span class="rf-name">${card.name}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Build summary HTML
  resultSummary.innerHTML = selected.map((id, i) => {
    const card = CARDS.find(c => c.id === id);
    return `
      <div class="rsummary-item">
        <span class="rsummary-period">${PERIOD_SHORT[i]}</span>
        <span class="rsummary-text"><strong>${card.name}</strong> — ${card.meanings[i]}</span>
      </div>
    `;
  }).join("");
  resultSummary.classList.remove("visible");

  resultOverlay.hidden = false;

  // Flip cards one by one
  selected.forEach((_, i) => {
    setTimeout(() => {
      document.getElementById("rc_" + i).classList.add("flipped");
      if (i === 2) {
        setTimeout(() => resultSummary.classList.add("visible"), 500);
      }
    }, 400 + i * 800);
  });
});

// ============================================================
//  RESTART
// ============================================================
restartBtn.addEventListener("click", () => {
  resultOverlay.hidden = true;
  selected = [];
  shuffled = [...CARDS].sort(() => Math.random() - 0.5); // reshuffle for next round
  confirmBtn.disabled = true;
  updateSelectionBar();
  renderGrid();
});

// ============================================================
//  UTILS
// ============================================================
function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

// ============================================================
//  INIT
// ============================================================
renderGrid();
