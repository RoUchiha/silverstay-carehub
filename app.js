const patients = [
  {
    id: "price",
    name: "Eleanor Price",
    age: 82,
    unit: "4W Telemetry",
    risk: "High",
    avoidableDays: 6,
    target: "Assisted living with memory support",
    owner: "Mira Patel, LSW",
    payer: "Medicaid pending",
    family: "Daughter is decision-maker and lives out of state",
    story: "Medically stable after UTI treatment. Cannot safely return home because of nighttime wandering and insulin support needs.",
    barriers: ["Memory support", "Wander risk", "Insulin support", "Medicaid pending", "Remote family"],
    needs: ["memory", "diabetes", "medicaid", "family-remote"],
    missingItems: ["Current MAR", "Daughter financial contact", "Behavior support plan"],
    budget: "$4.8k-$6.2k/mo bridge",
    tasks: [
      ["Collect current MAR", "clinical"],
      ["Send behavior support plan", "provider"],
      ["Review waiver bridge with daughter", "family"],
      ["Confirm night-check staffing", "provider"]
    ],
    timeline: [
      ["Today 9:10 AM", "Hospital flagged avoidable-day risk", "Patient is stable, but home is not safe without overnight supervision."],
      ["Today 11:35 AM", "SilverStay intake completed", "Barrier summary created from chart notes and case manager call."],
      ["Today 1:20 PM", "Provider packet drafted", "Clinical details translated into care needs, payer path, and support story."]
    ]
  },
  {
    id: "ellis",
    name: "Robert Ellis",
    age: 76,
    unit: "Ortho Stepdown",
    risk: "Medium",
    avoidableDays: 4,
    target: "Skilled nursing rehab",
    owner: "Jordan Lane, RN CM",
    payer: "Medicare Advantage",
    family: "Spouse is available after 3 PM",
    story: "Post-op hip repair with bariatric equipment needs. Primary delay is prior authorization plus facility equipment confirmation.",
    barriers: ["Bariatric equipment", "Prior authorization", "Weekend intake", "PT intensity"],
    needs: ["rehab", "bariatric", "ma-plan", "pt"],
    missingItems: ["Therapy note", "Auth reference number", "Transport weight limit"],
    budget: "MA-covered SNF stay",
    tasks: [
      ["Upload therapy note", "clinical"],
      ["Confirm bariatric bed", "provider"],
      ["Submit prior-auth packet", "payer"],
      ["Schedule transport window", "operations"]
    ],
    timeline: [
      ["Yesterday", "Ortho cleared transfer", "Rehab goals documented, but destination could not accept without equipment check."],
      ["Today 8:45 AM", "Two SNFs reviewing", "Both requested weight-limit and therapy documentation."],
      ["Today 2:00 PM", "Auth packet due", "Plan requires accepting-facility details before approval."]
    ]
  },
  {
    id: "kim",
    name: "Darlene Kim",
    age: 69,
    unit: "Medicine 3",
    risk: "High",
    avoidableDays: 8,
    target: "Behavioral-friendly assisted living",
    owner: "Ana Morris, Transition Lead",
    payer: "Private-pay bridge",
    family: "Nephew reachable evenings only",
    story: "Recent medication adjustments stabilized agitation. Facilities need a concise stability narrative rather than raw chart flags.",
    barriers: ["Behavioral history", "Medication changes", "Limited family availability", "Private-pay bridge"],
    needs: ["behavioral", "med-management", "private-pay", "family-limited"],
    missingItems: ["Stability note", "Responsible party confirmation", "Medication change rationale"],
    budget: "$7k/mo 90-day bridge",
    tasks: [
      ["Write stability narrative", "clinical"],
      ["Confirm nephew authority", "family"],
      ["Share medication rationale", "provider"],
      ["Identify 90-day bridge option", "payer"]
    ],
    timeline: [
      ["Yesterday 4:10 PM", "Care conference completed", "Team aligned on non-locked assisted living with behavioral support."],
      ["Today 10:05 AM", "Medication note requested", "Provider needs reassurance that escalation risk is currently managed."],
      ["Today 5:30 PM", "Family call window", "Nephew is only available after work."]
    ]
  },
  {
    id: "alvarez",
    name: "Victor Alvarez",
    age: 73,
    unit: "Neuro",
    risk: "Ready",
    avoidableDays: 2,
    target: "Assisted living with PT access",
    owner: "Chris White, LCSW",
    payer: "Long-term care policy",
    family: "Son touring this afternoon",
    story: "Mild stroke recovery. Needs medication setup, fall-risk plan, and outpatient therapy coordination after move-in.",
    barriers: ["Fall risk", "PT follow-up", "Family tour", "Medication setup"],
    needs: ["assisted-living", "pt", "fall-risk", "ltc-policy"],
    missingItems: ["Move-in checklist", "Transport confirmation"],
    budget: "LTC policy plus family bridge",
    tasks: [
      ["Confirm move-in checklist", "operations"],
      ["Schedule 7-day follow-up", "outcomes"],
      ["Send fall-risk plan", "provider"],
      ["Confirm transport", "operations"]
    ],
    timeline: [
      ["Today 7:55 AM", "Provider accepted", "Move-in packet and support plan are complete."],
      ["Today 1:00 PM", "Family tour", "Son wants direct comparison against backup option."],
      ["7 days", "Outcome call scheduled", "Check medication setup, fall plan, and family confidence."]
    ]
  },
  {
    id: "robinson",
    name: "Marcus Robinson",
    age: 61,
    unit: "ICU Stepdown",
    risk: "High",
    avoidableDays: 10,
    target: "Respiratory-capable SNF",
    owner: "Leah Chen, RN CM",
    payer: "Medicaid managed care",
    family: "Sister is local but overwhelmed",
    story: "Recovered from pneumonia but needs trach care education, respiratory therapy, and a facility comfortable with higher acuity.",
    barriers: ["Trach care", "Respiratory therapy", "Medicaid MCO", "Family overwhelm"],
    needs: ["respiratory", "skilled-nursing", "medicaid", "family-support"],
    missingItems: ["Respiratory orders", "Suction schedule", "MCO case contact"],
    budget: "Medicaid MCO authorization",
    tasks: [
      ["Attach respiratory orders", "clinical"],
      ["Call MCO case manager", "payer"],
      ["Verify suction staffing", "provider"],
      ["Give sister plain-language plan", "family"]
    ],
    timeline: [
      ["2 days ago", "ICU transfer completed", "Patient no longer needs acute bed but requires specialized placement."],
      ["Today 9:30 AM", "MCO barrier identified", "Authorization contact was missing from referral packet."],
      ["Today 12:40 PM", "Respiratory SNF outreach started", "Two facilities can review if orders are complete."]
    ]
  },
  {
    id: "watkins",
    name: "Helena Watkins",
    age: 88,
    unit: "ED Observation",
    risk: "Medium",
    avoidableDays: 3,
    target: "Memory care respite",
    owner: "Owen Blake, LCSW",
    payer: "Private pay",
    family: "Granddaughter can sign today",
    story: "Frequent ED visits after caregiver burnout. Needs respite placement quickly while family sets up long-term plan.",
    barriers: ["Caregiver burnout", "Memory care", "Same-day intake", "Medication reconciliation"],
    needs: ["memory", "respite", "private-pay", "fast-intake"],
    missingItems: ["Medication reconciliation", "Family deposit approval"],
    budget: "$320/day respite",
    tasks: [
      ["Complete med reconciliation", "clinical"],
      ["Confirm same-day bed", "provider"],
      ["Send family deposit link", "family"],
      ["Schedule 30-day planning call", "outcomes"]
    ],
    timeline: [
      ["Today 6:40 AM", "ED social work referred", "Family cannot safely support discharge home tonight."],
      ["Today 9:00 AM", "Respite path selected", "Short-term memory care buys time for a durable plan."],
      ["Today 11:00 AM", "Granddaughter available", "Decision-maker can sign before end of day."]
    ]
  },
  {
    id: "nguyen",
    name: "Paul Nguyen",
    age: 79,
    unit: "Cardiac",
    risk: "Medium",
    avoidableDays: 5,
    target: "Assisted living with medication management",
    owner: "Ivy Sanders, Care Coordinator",
    payer: "Family private pay",
    family: "Two adult children disagree on location",
    story: "CHF admission resolved. Needs medication adherence support and a family decision between proximity and cost.",
    barriers: ["CHF monitoring", "Medication adherence", "Family disagreement", "Budget sensitivity"],
    needs: ["assisted-living", "med-management", "cardiac", "family-conflict"],
    missingItems: ["Medication list", "Family decision criteria", "Cardiology follow-up date"],
    budget: "$5k/mo target",
    tasks: [
      ["Build two-option comparison", "family"],
      ["Confirm med-pass capacity", "provider"],
      ["Add cardiology follow-up", "clinical"],
      ["Resolve location preference", "family"]
    ],
    timeline: [
      ["Yesterday", "Cardiology cleared discharge", "Clinical risk is controlled with adherence and follow-up support."],
      ["Today 10:50 AM", "Family split noted", "One child wants close to hospital, one wants lower monthly cost."],
      ["Tomorrow", "Decision deadline", "Hospital wants a concrete destination before weekend census surge."]
    ]
  },
  {
    id: "brooks",
    name: "Janice Brooks",
    age: 74,
    unit: "Psych Med",
    risk: "High",
    avoidableDays: 12,
    target: "Enhanced ALF with psychiatric support",
    owner: "Priya Nair, LCSW",
    payer: "County program pending",
    family: "No reliable family contact",
    story: "Medically stable with psychiatric follow-up needs. Placement depends on county program eligibility and provider confidence.",
    barriers: ["Psych follow-up", "County program", "No family contact", "Medication supervision"],
    needs: ["behavioral", "psych-followup", "county", "no-family"],
    missingItems: ["County eligibility letter", "Psych follow-up appointment", "Medication supervision plan"],
    budget: "County program pending",
    tasks: [
      ["Escalate county eligibility", "payer"],
      ["Book psych follow-up", "clinical"],
      ["Create supervision plan", "provider"],
      ["Identify public guardian contact", "family"]
    ],
    timeline: [
      ["3 days ago", "Acute treatment completed", "Clinical status no longer requires inpatient bed."],
      ["Today 8:30 AM", "County program pending", "Eligibility letter is the main blocker for provider acceptance."],
      ["Today 3:15 PM", "Guardian search started", "No reliable family contact is slowing consent and logistics."]
    ]
  }
];

const providers = [
  {
    id: "harbor",
    name: "Harbor Light Assisted Living",
    type: "ALF memory support",
    distance: "4.8 mi",
    beds: "2 beds this week",
    response: "Usually under 3 hrs",
    tags: ["memory", "diabetes", "medicaid", "family-remote", "assisted-living", "fast-intake"],
    strengths: ["Night checks", "Memory support plan", "Family video tours", "Medicaid-pending review"],
    cautions: ["Needs recent medication list", "Deposit review before move-in"],
    contact: "admissions@harborlight.example"
  },
  {
    id: "cedar",
    name: "Cedar Ridge Skilled Nursing",
    type: "SNF rehab",
    distance: "8.1 mi",
    beds: "1 bariatric-ready room",
    response: "Same-day if packet complete",
    tags: ["rehab", "bariatric", "ma-plan", "pt", "skilled-nursing"],
    strengths: ["Bariatric DME", "Weekend therapy", "MA prior-auth desk"],
    cautions: ["Requires therapy note", "No late-night transport"],
    contact: "snf-intake@cedarridge.example"
  },
  {
    id: "northstar",
    name: "Northstar Care Suites",
    type: "Behavioral-friendly ALF",
    distance: "6.3 mi",
    beds: "Tour slot today",
    response: "Reviewing within 4 hrs",
    tags: ["behavioral", "med-management", "private-pay", "family-limited", "psych-followup"],
    strengths: ["Medication stabilization reviews", "Behavior support training", "Private-pay bridge"],
    cautions: ["Needs clear stability narrative", "Limited locked-memory beds"],
    contact: "care-review@northstar.example"
  },
  {
    id: "summit",
    name: "Summit Respiratory Center",
    type: "Respiratory SNF",
    distance: "12.4 mi",
    beds: "Respiratory bed pending",
    response: "Clinical review by noon",
    tags: ["respiratory", "skilled-nursing", "medicaid", "family-support"],
    strengths: ["Trach care", "Respiratory therapy", "Medicaid MCO reviews"],
    cautions: ["Needs complete respiratory orders", "Limited weekend admissions"],
    contact: "rt-admissions@summit.example"
  },
  {
    id: "willow",
    name: "Willow House Respite",
    type: "Memory care respite",
    distance: "3.2 mi",
    beds: "Same-day respite open",
    response: "Under 90 minutes",
    tags: ["memory", "respite", "private-pay", "fast-intake"],
    strengths: ["Same-day respite", "Family coaching", "Medication reconciliation support"],
    cautions: ["Short-stay only", "Requires deposit before transport"],
    contact: "respite@willowhouse.example"
  },
  {
    id: "lakeside",
    name: "Lakeside Senior Living",
    type: "Assisted living",
    distance: "9.7 mi",
    beds: "3 standard ALF suites",
    response: "Next business day",
    tags: ["assisted-living", "med-management", "cardiac", "ltc-policy", "pt"],
    strengths: ["Medication management", "LTC policy paperwork", "On-site PT partner"],
    cautions: ["No high-acuity behavioral admits", "Family must choose apartment tier"],
    contact: "movein@lakeside.example"
  },
  {
    id: "maple",
    name: "Maple Grove Enhanced Care",
    type: "Enhanced ALF",
    distance: "10.5 mi",
    beds: "County-program waitlist",
    response: "24 hr public-program review",
    tags: ["behavioral", "psych-followup", "county", "no-family", "med-management"],
    strengths: ["Public program navigation", "Medication supervision", "Psych follow-up coordination"],
    cautions: ["Needs county eligibility proof", "Acceptance committee meets daily at 2 PM"],
    contact: "enhanced-intake@maplegrove.example"
  }
];

const state = {
  tab: "command",
  selectedPatientId: "price",
  selectedProviderId: "harbor",
  riskFilter: "All",
  unitFilter: "All",
  barrierFilter: "All",
  search: "",
  sort: "Avoidable days",
  tone: "Plain language",
  note: "",
  generated: null,
  completedTasks: new Set(["price:Collect current MAR", "alvarez:Confirm move-in checklist"]),
  decisionLog: [
    { patientId: "price", providerId: "harbor", decision: "Packet drafted", time: "Today 1:20 PM" },
    { patientId: "alvarez", providerId: "lakeside", decision: "Accepted fit", time: "Today 7:55 AM" }
  ]
};

const app = document.querySelector("#app");

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function activePatient() {
  return patients.find((item) => item.id === state.selectedPatientId) || patients[0];
}

function providerById(id) {
  return providers.find((item) => item.id === id) || providers[0];
}

function activeProvider() {
  return providerById(state.selectedProviderId);
}

function riskClass(risk) {
  return risk.toLowerCase();
}

function unique(values) {
  return [...new Set(values)].sort();
}

function matchProvider(patient, provider) {
  const overlap = patient.needs.filter((need) => provider.tags.includes(need));
  const missing = patient.needs.filter((need) => !provider.tags.includes(need));
  const barrierBonus = patient.barriers.some((barrier) => barrier.toLowerCase().includes("same-day")) ? 4 : 0;
  const score = Math.max(36, Math.min(98, 52 + overlap.length * 9 - missing.length * 5 + barrierBonus));
  return { score, overlap, missing };
}

function rankedProviders(patient) {
  return providers
    .map((provider) => ({ ...provider, match: matchProvider(patient, provider) }))
    .sort((a, b) => b.match.score - a.match.score);
}

function filteredPatients() {
  const query = state.search.trim().toLowerCase();
  const results = patients.filter((item) => {
    const matchesRisk = state.riskFilter === "All" || item.risk === state.riskFilter;
    const matchesUnit = state.unitFilter === "All" || item.unit === state.unitFilter;
    const matchesBarrier = state.barrierFilter === "All" || item.barriers.includes(state.barrierFilter);
    const haystack = [item.name, item.unit, item.target, item.owner, item.story, ...item.barriers].join(" ").toLowerCase();
    return matchesRisk && matchesUnit && matchesBarrier && (!query || haystack.includes(query));
  });

  if (state.sort === "Name") results.sort((a, b) => a.name.localeCompare(b.name));
  if (state.sort === "Risk") results.sort((a, b) => riskWeight(b.risk) - riskWeight(a.risk));
  if (state.sort === "Avoidable days") results.sort((a, b) => b.avoidableDays - a.avoidableDays);
  return results;
}

function riskWeight(risk) {
  return { High: 3, Medium: 2, Ready: 1 }[risk] || 0;
}

function setTab(tab) {
  state.tab = tab;
  render();
}

function selectPatient(id) {
  state.selectedPatientId = id;
  const best = rankedProviders(activePatient())[0];
  state.selectedProviderId = best.id;
  state.generated = null;
  state.note = "";
  render();
}

function selectProvider(id) {
  state.selectedProviderId = id;
  state.generated = null;
  render();
}

function toggleTask(label) {
  const key = `${state.selectedPatientId}:${label}`;
  if (state.completedTasks.has(key)) state.completedTasks.delete(key);
  else state.completedTasks.add(key);
  render();
}

function logDecision(decision) {
  state.decisionLog.unshift({
    patientId: state.selectedPatientId,
    providerId: state.selectedProviderId,
    decision,
    time: "Just now"
  });
  render();
}

function generatePlan() {
  const patient = activePatient();
  const provider = activeProvider();
  const match = matchProvider(patient, provider);
  const blocker = patient.missingItems[0] || patient.barriers[0];
  const tonePrefix = state.tone === "Executive" ? "Outcome focus:" : state.tone === "Clinical" ? "Clinical focus:" : "Plain-language focus:";
  state.generated = {
    summary: `${tonePrefix} ${patient.name} is ready for a safer next setting, but ${blocker.toLowerCase()} must be resolved before ${provider.name} can confidently accept.`,
    plan: [
      `Complete the packet: ${patient.missingItems.slice(0, 3).join(", ")}.`,
      `Lead with provider fit: ${provider.name} matches ${match.overlap.length} core needs (${match.overlap.join(", ")}).`,
      `Give family a clear next step: explain why ${provider.type.toLowerCase()} fits the current safety need and what decision is needed today.`,
      `Assign ownership: ${patient.owner} coordinates the packet, while provider admissions confirms ${provider.beds.toLowerCase()}.`,
      "Close the loop with 0, 7, 30, 60, and 90-day follow-up checks after placement."
    ],
    familyMessage: `Hi, this is SilverStay. We are helping coordinate a safe next step for ${patient.name}. The hospital team believes ${patient.target.toLowerCase()} is the right level of support. The main items we need from you are: ${patient.missingItems.slice(0, 2).join(" and ")}. Once those are complete, we can compare the best available options clearly and quickly.`,
    providerMessage: `SilverStay referral summary for ${patient.name}: ${patient.story} Current barriers are ${patient.barriers.join(", ")}. Requested review from ${provider.name}: please confirm fit for ${provider.type}, open capacity (${provider.beds}), and any remaining acceptance requirements.`,
    silverstayAction: `SilverStay transforms hospital chart complexity into a provider-ready packet, then keeps the family and facility aligned until the handoff is complete.`
  };
  render();
}

function copyGenerated(kind) {
  const generated = state.generated;
  if (!generated) return;
  const text = generated[kind] || generated.summary;
  if (navigator.clipboard) navigator.clipboard.writeText(text);
  logDecision(`${kind === "familyMessage" ? "Family" : "Provider"} draft copied`);
}

function renderShell(content) {
  app.innerHTML = `
    <main class="app-shell">
      <header class="topbar">
        <div class="brand" aria-label="SilverStay CareHub">
          <div class="brand-mark">S</div>
          <div>
            <div class="brand-title">SilverStay CareHub</div>
            <div class="brand-subtitle">Complex discharge workflow prototype</div>
          </div>
        </div>
        <nav class="nav-tabs" aria-label="Primary">
          ${[
            ["command", "Command Center"],
            ["provider", "Provider Snapshot"],
            ["assistant", "AI Action Plan"]
          ]
            .map(([id, label]) => `<button class="tab-button ${state.tab === id ? "active" : ""}" data-tab="${id}">${label}</button>`)
            .join("")}
        </nav>
        <div class="interview-chip">Live demo for 7/6</div>
      </header>

      <section class="hero">
        <div class="hero-copy">
          <div class="eyebrow">Care transitions, made visible</div>
          <h1>Connect the hospital, family, provider, and next best action.</h1>
          <p>
            A practical prototype for complex discharges: spot avoidable-day risk,
            translate chart complexity into provider-ready fit, and generate a simple plan
            that keeps people moving.
          </p>
        </div>
        <figure class="hero-visual" aria-label="Care transition coordination visual">
          <img src="./assets/care-transition-visual.png" alt="Care team coordinating a post-acute transition at a hospital workstation" />
        </figure>
      </section>

      ${renderMetrics()}
      ${renderFlowRail()}

      <section class="workspace">
        ${content}
      </section>
    </main>
  `;

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => setTab(button.dataset.tab));
  });
}

function renderMetrics() {
  const openHigh = patients.filter((item) => item.risk === "High").length;
  const days = patients.reduce((sum, item) => sum + item.avoidableDays, 0);
  return `
    <section class="metrics-strip" aria-label="Operational metrics">
      ${metric("Open complex discharges", patients.length, "Robust demo cases")}
      ${metric("High-risk cases", openHigh, "Need immediate barrier action")}
      ${metric("Avoidable days at risk", days, "Prioritized by urgency")}
      ${metric("Provider options", providers.length, "Dynamic match scoring")}
    </section>
  `;
}

function renderFlowRail() {
  const patient = activePatient();
  const provider = activeProvider();
  return `
    <section class="flow-rail" aria-label="Data movement">
      ${flowStep("1", "Hospital intake", `${patient.unit} flags ${patient.avoidableDays} avoidable days`)}
      ${flowStep("2", "SilverStay triage", `${patient.barriers.length} barriers normalized into care needs`)}
      ${flowStep("3", "Provider fit", `${provider.name} scored from needs and capacity`)}
      ${flowStep("4", "Family/provider updates", "Plain-language drafts are generated for review")}
      ${flowStep("5", "Outcome loop", "0, 7, 30, 60, 90-day follow-up closes the handoff")}
    </section>
  `;
}

function flowStep(num, title, copy) {
  return `
    <article class="flow-step">
      <span class="flow-num">${num}</span>
      <div>
        <strong>${esc(title)}</strong>
        <p>${esc(copy)}</p>
      </div>
    </article>
  `;
}

function metric(label, value, note) {
  return `
    <article class="metric">
      <div class="metric-label">${esc(label)}</div>
      <div class="metric-value">${esc(value)}</div>
      <div class="metric-note">${esc(note)}</div>
    </article>
  `;
}

function renderCommandCenter() {
  const patient = activePatient();
  const barriers = unique(patients.flatMap((item) => item.barriers));
  const units = unique(patients.map((item) => item.unit));
  renderShell(`
    <div class="section-head">
      <div>
        <h2>Complex Discharge Command Center</h2>
        <p>Search, filter, prioritize, and work the discharge queue without losing the human story behind each case.</p>
      </div>
      <div class="filters">
        <input class="input" id="search" value="${esc(state.search)}" placeholder="Search patient, unit, barrier, owner" aria-label="Search patients" />
        ${select("riskFilter", ["All", "High", "Medium", "Ready"], state.riskFilter, "Risk")}
        ${select("unitFilter", ["All", ...units], state.unitFilter, "Unit")}
        ${select("barrierFilter", ["All", ...barriers], state.barrierFilter, "Barrier")}
        ${select("sort", ["Avoidable days", "Risk", "Name"], state.sort, "Sort")}
      </div>
    </div>

    <div class="grid-2 command-grid">
      <section class="panel">
        <div class="panel-head">
          <h3>Patient queue</h3>
          <span class="chip teal">${filteredPatients().length} visible</span>
        </div>
        <div class="panel-body queue">
          ${filteredPatients().map(patientRow).join("")}
        </div>
      </section>

      <section class="panel">
        <div class="panel-head">
          <h3>${esc(patient.name)} discharge brief</h3>
          <span class="status ${riskClass(patient.risk)}">${esc(patient.risk)}</span>
        </div>
        <div class="panel-body">
          <div class="detail-grid">
            ${detail("Target setting", patient.target)}
            ${detail("Current owner", patient.owner)}
            ${detail("Payer path", patient.payer)}
            ${detail("Family context", patient.family)}
            ${detail("Budget signal", patient.budget)}
            ${detail("Missing items", patient.missingItems.join(", "))}
          </div>
          <div class="callout" style="margin-top: 14px;"><strong>Patient story:</strong> ${esc(patient.story)}</div>
          <h4 class="subhead">Work checklist</h4>
          <div class="task-list">
            ${patient.tasks.map(([label, type]) => taskRow(patient.id, label, type)).join("")}
          </div>
          <h4 class="subhead">Recent movement</h4>
          <div class="timeline">
            ${patient.timeline.map(([time, title, copy]) => timelineItem(time, title, copy)).join("")}
          </div>
        </div>
      </section>
    </div>
  `);

  document.querySelector("#search").addEventListener("input", (event) => {
    state.search = event.target.value;
    render();
  });
  ["riskFilter", "unitFilter", "barrierFilter", "sort"].forEach((id) => {
    document.querySelector(`#${id}`).addEventListener("change", (event) => {
      state[id] = event.target.value;
      render();
    });
  });
  document.querySelectorAll("[data-patient]").forEach((button) => button.addEventListener("click", () => selectPatient(button.dataset.patient)));
  document.querySelectorAll("[data-task]").forEach((button) => button.addEventListener("click", () => toggleTask(button.dataset.task)));
}

function select(id, options, current, label) {
  return `
    <label>
      <span class="sr-only">${esc(label)}</span>
      <select class="select" id="${id}">
        ${options.map((item) => `<option ${item === current ? "selected" : ""}>${esc(item)}</option>`).join("")}
      </select>
    </label>
  `;
}

function patientRow(item) {
  const best = rankedProviders(item)[0];
  return `
    <button class="patient-row ${item.id === state.selectedPatientId ? "active" : ""}" data-patient="${item.id}">
      <div class="row-top">
        <div>
          <div class="patient-name">${esc(item.name)}, ${item.age}</div>
          <div class="patient-meta">${esc(item.unit)} / ${esc(item.target)}</div>
        </div>
        <span class="status ${riskClass(item.risk)}">${item.avoidableDays}d</span>
      </div>
      <div class="chips">
        ${item.barriers.slice(0, 5).map((barrier, index) => `<span class="chip ${index === 0 ? "coral" : ""}">${esc(barrier)}</span>`).join("")}
      </div>
      <div class="row-foot">Best fit now: ${esc(best.name)} (${best.match.score})</div>
    </button>
  `;
}

function detail(label, value) {
  return `
    <div class="detail">
      <div class="detail-label">${esc(label)}</div>
      <div class="detail-value">${esc(value)}</div>
    </div>
  `;
}

function taskRow(patientId, label, type) {
  const key = `${patientId}:${label}`;
  const done = state.completedTasks.has(key);
  return `
    <button class="task-row ${done ? "done" : ""}" data-task="${esc(label)}">
      <span class="task-check">${done ? "Done" : "Open"}</span>
      <span>${esc(label)}</span>
      <span class="chip">${esc(type)}</span>
    </button>
  `;
}

function timelineItem(time, title, copy) {
  return `
    <div class="timeline-item">
      <div class="time">${esc(time)}</div>
      <div>
        <div class="step-title">${esc(title)}</div>
        <div class="step-copy">${esc(copy)}</div>
      </div>
    </div>
  `;
}

function renderProviderSnapshot() {
  const patient = activePatient();
  const provider = activeProvider();
  const ranked = rankedProviders(patient);
  const match = matchProvider(patient, provider);
  renderShell(`
    <div class="section-head">
      <div>
        <h2>Provider Acceptance Snapshot</h2>
        <p>Turn complex hospital data into a focused acceptance packet: fit, missing items, capacity, and one-click decision logging.</p>
      </div>
      ${select("patientPicker", patients.map((item) => item.name), patient.name, "Select patient")}
    </div>

    <div class="grid-3">
      <section class="panel">
        <div class="panel-head">
          <h3>Ranked provider options</h3>
          <span class="chip gold">live scoring</span>
        </div>
        <div class="panel-body provider-list">
          ${ranked.map(providerRow).join("")}
        </div>
      </section>

      <section class="panel">
        <div class="panel-head">
          <h3>${esc(provider.name)}</h3>
          <span class="status ${match.score >= 88 ? "accepted" : "medium"}">${match.score} fit</span>
        </div>
        <div class="panel-body">
          <div class="snapshot-layout">
            <div class="score-ring">${match.score}</div>
            <div class="detail-grid">
              ${detail("Provider type", provider.type)}
              ${detail("Distance", provider.distance)}
              ${detail("Capacity", provider.beds)}
              ${detail("Response", provider.response)}
            </div>
          </div>
          <div class="callout" style="margin-top: 14px;"><strong>Why this fit:</strong> ${esc(provider.strengths.slice(0, 3).join(", "))} map to ${esc(patient.name)}'s active barriers.</div>
          <h4 class="subhead">Matched needs</h4>
          <div class="chips">${match.overlap.map((item) => `<span class="chip green">${esc(item)}</span>`).join("")}</div>
          <h4 class="subhead">Acceptance requirements</h4>
          <div class="compact-table">
            ${patient.missingItems.map((item) => `<div><strong>${esc(item)}</strong><span>Needed before confident acceptance</span></div>`).join("")}
            ${provider.cautions.map((item) => `<div><strong>${esc(item)}</strong><span>Provider caution</span></div>`).join("")}
          </div>
          <div class="action-row">
            <button class="btn primary" data-decision="Accepted fit">Accept fit</button>
            <button class="btn navy" data-decision="More info requested">Need info</button>
            <button class="btn warning" data-decision="Declined with reason">Decline</button>
            <button class="btn" id="toAssistant">Generate action plan</button>
          </div>
        </div>
      </section>

      <section class="panel">
        <div class="panel-head">
          <h3>Decision trail</h3>
          <span class="chip teal">${state.decisionLog.length} events</span>
        </div>
        <div class="panel-body decision-list">
          ${state.decisionLog.slice(0, 8).map(decisionItem).join("")}
        </div>
      </section>
    </div>
  `);

  document.querySelector("#patientPicker").addEventListener("change", (event) => {
    const selected = patients.find((item) => item.name === event.target.value);
    if (selected) selectPatient(selected.id);
  });
  document.querySelectorAll("[data-provider]").forEach((button) => button.addEventListener("click", () => selectProvider(button.dataset.provider)));
  document.querySelectorAll("[data-decision]").forEach((button) => button.addEventListener("click", () => logDecision(button.dataset.decision)));
  document.querySelector("#toAssistant").addEventListener("click", () => {
    state.tab = "assistant";
    generatePlan();
  });
}

function providerRow(item) {
  return `
    <button class="provider-row ${item.id === state.selectedProviderId ? "active" : ""}" data-provider="${item.id}">
      <div class="inline-between">
        <div>
          <div class="patient-name">${esc(item.name)}</div>
          <div class="patient-meta">${esc(item.type)} / ${esc(item.distance)}</div>
        </div>
        <span class="chip teal">${item.match.score}</span>
      </div>
      <div class="chips">
        <span class="chip">${esc(item.beds)}</span>
        <span class="chip gold">${esc(item.response)}</span>
      </div>
    </button>
  `;
}

function decisionItem(item) {
  const patient = patients.find((entry) => entry.id === item.patientId);
  const provider = providerById(item.providerId);
  return `
    <article class="decision-item">
      <strong>${esc(item.decision)}</strong>
      <span>${esc(patient?.name || "Unknown")} / ${esc(provider.name)}</span>
      <small>${esc(item.time)}</small>
    </article>
  `;
}

function renderAssistant() {
  const patient = activePatient();
  const provider = activeProvider();
  const generated = state.generated;
  renderShell(`
    <div class="section-head">
      <div>
        <h2>Barrier-to-Action AI Assistant</h2>
        <p>Drafts are generated from structured discharge data, then reviewed by SilverStay staff before anything reaches family or provider.</p>
      </div>
      <div class="filters">
        ${select("assistantPatientPicker", patients.map((item) => item.name), patient.name, "Select patient")}
        ${select("tone", ["Plain language", "Clinical", "Executive"], state.tone, "Tone")}
      </div>
    </div>

    <div class="assistant-grid">
      <section class="panel">
        <div class="panel-head">
          <h3>Inputs SilverStay controls</h3>
          <span class="chip coral">review before send</span>
        </div>
        <div class="panel-body">
          <div class="detail-grid">
            ${detail("Patient", `${patient.name}, ${patient.age}`)}
            ${detail("Provider", provider.name)}
            ${detail("Owner", patient.owner)}
            ${detail("Primary target", patient.target)}
          </div>
          <div class="chips">${patient.barriers.map((item) => `<span class="chip coral">${esc(item)}</span>`).join("")}</div>
          <label style="display:block; margin-top: 14px;">
            <span class="detail-label">Coordinator note</span>
            <textarea class="textarea" id="coordNote">${esc(state.note || `${patient.name} needs a concise action plan that resolves ${patient.missingItems[0].toLowerCase()} and gives the family/provider one clear next step.`)}</textarea>
          </label>
          <div class="action-row">
            <button class="btn primary" id="generate">Generate plan</button>
            <button class="btn" id="resetNote">Reset note</button>
          </div>
        </div>
      </section>

      <section class="panel">
        <div class="panel-head">
          <h3>Generated plan and drafts</h3>
          <span class="chip teal">${generated ? "generated" : "ready"}</span>
        </div>
        <div class="panel-body">
          ${
            generated
              ? renderGenerated(generated)
              : `<div class="assistant-output"><div class="callout">Choose a patient, choose a tone, then generate. The assistant turns structured discharge data into a plan plus two message drafts.</div></div>`
          }
        </div>
      </section>
    </div>
  `);

  document.querySelector("#assistantPatientPicker").addEventListener("change", (event) => {
    const selected = patients.find((item) => item.name === event.target.value);
    if (selected) selectPatient(selected.id);
  });
  document.querySelector("#tone").addEventListener("change", (event) => {
    state.tone = event.target.value;
    state.generated = null;
    render();
  });
  document.querySelector("#coordNote").addEventListener("input", (event) => {
    state.note = event.target.value;
  });
  document.querySelector("#generate").addEventListener("click", generatePlan);
  document.querySelector("#resetNote").addEventListener("click", () => {
    state.note = "";
    state.generated = null;
    render();
  });
  document.querySelectorAll("[data-copy]").forEach((button) => button.addEventListener("click", () => copyGenerated(button.dataset.copy)));
}

function renderGenerated(generated) {
  return `
    <div class="assistant-output">
      <div class="callout"><strong>Recommendation:</strong> ${esc(generated.summary)}</div>
      <ol class="plan-list">
        ${generated.plan.map((item, index) => `<li class="plan-item"><span class="plan-num">${index + 1}</span><span>${esc(item)}</span></li>`).join("")}
      </ol>
    </div>
    <div class="message-grid">
      <article class="message-card">
        <div class="inline-between"><h4>Family draft</h4><button class="btn" data-copy="familyMessage">Copy</button></div>
        <p>${esc(generated.familyMessage)}</p>
      </article>
      <article class="message-card">
        <div class="inline-between"><h4>Provider draft</h4><button class="btn" data-copy="providerMessage">Copy</button></div>
        <p>${esc(generated.providerMessage)}</p>
      </article>
      <article class="message-card full">
        <h4>What SilverStay adds</h4>
        <p>${esc(generated.silverstayAction)}</p>
      </article>
    </div>
  `;
}

function render() {
  if (state.tab === "provider") renderProviderSnapshot();
  else if (state.tab === "assistant") renderAssistant();
  else renderCommandCenter();
}

render();
