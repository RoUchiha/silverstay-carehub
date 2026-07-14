# SilverStay CareHub Prototype

SilverStay CareHub is a live-demo prototype for complex hospital discharges. It shows how SilverStay can connect hospital case managers, patients/families, and post-acute providers through one simple workflow.

## Live Demo

Public Vercel demo:

[Open the SilverStay CareHub live demo](https://silverstay-carehub.vercel.app)

The app combines three ideas:

- Complex Discharge Command Center
- Provider Acceptance Snapshot
- Barrier-to-Action AI Assistant

## Live Locally

```bash
npm start
```

Then open:

[http://localhost:4173](http://localhost:4173)

No dependency install is required. The app is static HTML, CSS, and JavaScript.

## The Simple Idea

Hospitals have patients who are medically ready to leave, but cannot safely go home. The blocker is usually not one single thing. It can be family availability, insurance, behavioral history, facility fit, missing documentation, equipment, medication needs, or provider confidence.

This prototype shows a cleaner way to manage that messy handoff:

1. The hospital flags a complex discharge.
2. SilverStay normalizes the barriers into structured needs.
3. Providers are matched against those needs.
4. Families and providers get clear, reviewed communication.
5. SilverStay follows the case after placement to reduce handoff failure.

## Interview Talk Track

Use this as a script you can rattle off while clicking through the demo.

### 30-Second Opener

"I built this as a care-transition command center for complex discharges. The core idea is that SilverStay sits between the hospital, the family, and the post-acute provider, so the product should make that handoff visible. The app starts with hospital intake, turns messy case details into structured barriers and care needs, ranks providers by fit, then generates reviewed family and provider communication. It is intentionally simple: one shared patient/provider context flows across the entire experience."

### The Problem To Name

"A patient can be medically ready to leave the hospital but still be impossible to discharge safely. The blocker might be Medicaid pending, a family decision-maker who is remote, behavioral history, missing documentation, equipment, medication management, or provider confidence. Those blockers usually live across notes, calls, spreadsheets, and people. This prototype pulls them into one operational workflow."

### The Product Thesis

"SilverStay's value is not just finding a facility. It is translating hospital complexity into a provider-ready and family-readable transition plan. The UI should reduce ambiguity: what is blocking the discharge, who owns the next step, which provider is most likely to accept, what does the family need to decide, and what message needs to go out next?"

### Five Beats To Walk Through

1. "First, I start in the Command Center. This is the shared work queue for hospital case managers and SilverStay coordinators."
2. "Then I select one patient. That patient becomes the active case everywhere in the app."
3. "The app immediately ranks providers against that patient's structured needs. This shows how SilverStay can move from a chart-heavy case to a provider-fit conversation."
4. "Provider decisions are logged, because the important thing is not just matching. It is maintaining a shared record of what happened and what is still missing."
5. "Finally, the AI Assistant drafts the action plan and family/provider messages, but everything stays human-reviewed. SilverStay remains the judgment and coordination layer."

### What To Emphasize

- The app is not trying to replace a social worker, case manager, or care coordinator.
- The app reduces the repetitive admin work around summarizing, matching, documenting, and communicating.
- The most important design choice is shared context: once a patient is selected, every screen uses that same active case.
- The AI feature is intentionally downstream of structured data. It drafts from facts the care team has already reviewed.
- The provider match score is explainable. It comes from overlap between patient needs and provider capabilities, not a black box.

## Screen 1: Complex Discharge Command Center

This is the daily work queue for hospital case managers and SilverStay coordinators.

What it does:

- Shows all open complex discharge cases.
- Sorts by avoidable days, risk, or patient name.
- Filters by risk level, hospital unit, and barrier type.
- Searches across patient name, owner, unit, target setting, story, and barriers.
- Shows each patient's best current provider fit.
- Lets the user select a patient and inspect the full discharge brief.
- Includes a work checklist where tasks can be marked open or done.
- Shows a recent timeline of how the case is moving.

Why it matters:

The Command Center turns a long list of hard cases into a prioritized queue. It answers: who needs help now, why are they stuck, who owns the next step, and what must happen to move the discharge forward?

## Screen 2: Provider Acceptance Snapshot

This is the provider-facing decision view.

What it does:

- Uses the selected patient from the Command Center.
- Ranks provider options using the patient's structured needs.
- Calculates a match score based on overlap between patient needs and provider capabilities.
- Shows facility type, distance, capacity, response speed, matched needs, and acceptance requirements.
- Logs provider decisions like "Accepted fit," "More info requested," and "Declined with reason."
- Maintains a decision trail so the team can see what happened and when.
- Sends the current patient/provider context into the AI Action Plan screen.

Why it matters:

Providers often decline complex patients because the chart looks risky or incomplete. This view translates the patient's situation into a short acceptance packet: what support is needed, why the provider is a fit, what is missing, and what decision is needed.

## Screen 3: Barrier-to-Action AI Assistant

This is a human-reviewed drafting assistant for SilverStay staff.

What it does:

- Uses the selected patient and selected provider.
- Lets the user choose a tone: plain language, clinical, or executive.
- Lets the coordinator add a note before generating.
- Generates a concise action plan.
- Generates a family-facing message draft.
- Generates a provider-facing message draft.
- Explains what SilverStay adds to the handoff.
- Lets the user copy drafts, which also logs the action in the decision trail.

Why it matters:

The assistant does not replace care judgment. It reduces admin burden by turning structured case data into clear next steps and reviewed messages. SilverStay remains the human layer that approves, edits, sends, and follows through.

## How The App Works Internally

This prototype is intentionally small, but it is built around the same core data flow a real product would need.

### The Data Model

There are three main pieces of data in `app.js`.

`patients` represents the hospital-side discharge queue. Each patient has:

- identity and location: name, age, hospital unit,
- operational urgency: risk level and avoidable days,
- transition target: assisted living, SNF, memory care, respiratory SNF, respite, and other settings,
- human ownership: assigned SilverStay or hospital owner,
- payer path: Medicaid pending, Medicare Advantage, private-pay bridge, county program, LTC policy,
- family context: who can decide, when they are available, what friction exists,
- story: a plain-language summary of why the patient is stuck,
- barriers: visible chips like behavioral history, respiratory therapy, remote family, prior authorization,
- needs: structured tags used for provider matching,
- missing items: the documents or confirmations needed before acceptance,
- tasks: the concrete work checklist,
- timeline: recent case movement.

`providers` represents the post-acute network. Each provider has:

- facility name and type,
- distance and available capacity,
- expected response time,
- capability tags,
- strengths,
- cautions,
- contact placeholder.

`state` represents the active user session. It stores:

- current tab,
- selected patient,
- selected provider,
- active filters and search,
- sort order,
- assistant tone,
- coordinator note,
- generated AI-style output,
- completed checklist tasks,
- decision trail.

The important design point: every screen reads from the same shared state. That is what makes the app feel connected instead of like three separate mockups.

### What Happens When A Patient Is Selected

When you click a patient in the Command Center, the app runs `selectPatient`.

That function does five things:

1. Sets `selectedPatientId` to the clicked patient.
2. Re-ranks all providers for that patient.
3. Automatically selects the best-fit provider.
4. Clears any generated AI draft from the previous patient.
5. Re-renders the whole interface.

Talk track:

"This click is the handoff point. Once I select Marcus Robinson, the entire product reorients around his case. The provider ranking changes, the flow rail changes, the acceptance packet changes, and the AI Assistant will now generate drafts for Marcus instead of Eleanor. That shared context is the user-friendly part: the user does not have to re-enter the case on every screen."

### How Provider Matching Works

Provider matching is handled by `matchProvider`.

The patient has structured `needs`, such as:

- `respiratory`
- `skilled-nursing`
- `medicaid`
- `family-support`

The provider has capability `tags`, such as:

- `respiratory`
- `skilled-nursing`
- `medicaid`
- `family-support`

The app compares those two lists:

- overlap becomes matched needs,
- missing needs reduce confidence,
- a small bonus applies for fast-intake situations,
- the score is clamped into a readable range.

Then `rankedProviders` sorts every provider from highest fit to lowest fit.

Talk track:

"This is intentionally explainable. I can tell a case manager why Summit Respiratory Center is ranked first for Marcus: the provider has respiratory, skilled-nursing, Medicaid, and family-support capabilities that match his actual barriers. This is much easier to trust than a mysterious recommendation."

### What Happens In The Command Center

The Command Center is rendered by `renderCommandCenter`.

It uses `filteredPatients` to combine:

- search text,
- risk filter,
- unit filter,
- barrier filter,
- sort order.

The search is forgiving. It checks across patient name, unit, target setting, owner, patient story, and barriers. That means someone can search the way they think: "respiratory," "family," "Medicaid," "behavioral," or a patient name.

Each patient row also shows the best current provider fit. That matters because the queue is not just a list of patients. It is a list of next moves.

Talk track:

"This view is for the morning standup or daily discharge huddle. It answers: who is stuck, why are they stuck, how costly is the delay, and where should we focus first?"

### What Happens In The Provider Snapshot

The Provider Snapshot is rendered by `renderProviderSnapshot`.

It takes the active patient and:

- ranks all providers,
- shows the selected provider's score,
- explains matched needs,
- lists acceptance requirements,
- lists provider cautions,
- lets the user record a decision,
- shows a decision trail.

When you click a different provider, the app runs `selectProvider`.

That function:

1. Updates `selectedProviderId`.
2. Clears the old generated draft.
3. Re-renders the provider packet and assistant context.

When you click `Accept fit`, `Need info`, or `Decline`, the app runs `logDecision`.

That adds a new item to the top of `decisionLog` with:

- patient,
- provider,
- decision,
- timestamp.

Talk track:

"This is where SilverStay makes the provider conversation faster. Instead of sending a raw chart and hoping the facility understands the context, the app packages the patient's needs, provider fit, missing items, and facility cautions into one screen. Every provider response becomes part of the shared trail."

### What Happens In The AI Assistant

The AI Assistant is rendered by `renderAssistant`.

It uses:

- active patient,
- active provider,
- provider match result,
- selected tone,
- coordinator note,
- missing items,
- patient story,
- payer path,
- provider strengths.

When you click `Generate plan`, the app runs `generatePlan`.

That creates:

- a recommendation summary,
- a five-step action plan,
- a family-facing message,
- a provider-facing message,
- a short statement of SilverStay's coordination value.

The tone changes the opening emphasis:

- plain language focuses on clarity,
- clinical focuses on care needs,
- executive focuses on outcomes.

Talk track:

"The assistant is deliberately not the first step. It only becomes useful after the case has been structured. SilverStay staff still review the output. The point is to reduce repetitive drafting and make sure family and provider communication stays consistent with the care plan."

### What Happens When A Draft Is Copied

When the user copies a family or provider draft, the app runs `copyGenerated`.

That function:

1. Copies the selected draft to the clipboard when the browser allows it.
2. Logs the action into the decision trail.

Talk track:

"Even communication actions become part of the operational record. That is important because discharge work fails when updates happen in side channels and nobody knows what was sent, who responded, or what still needs to happen."

### The Flow Rail

The flow rail across the top is rendered by `renderFlowRail`.

It changes as the selected patient and provider change:

1. Hospital intake: shows the active hospital unit and avoidable days.
2. SilverStay triage: shows how many barriers were normalized.
3. Provider fit: shows the selected provider being scored.
4. Family/provider updates: shows that drafts are generated for review.
5. Outcome loop: reminds the user that the handoff continues after placement.

Talk track:

"The flow rail is a simple product storytelling device. It shows that the app is not three disconnected tabs. It is one care-transition pipeline from hospital intake to outcome follow-up."

### Why This Interaction Model Fits SilverStay

The app mirrors SilverStay's likely operating model:

- hospitals refer complex discharges,
- SilverStay identifies blockers,
- SilverStay turns blockers into a placement strategy,
- providers need a concise fit packet,
- families need plain-language choices,
- every step needs an owner,
- outcomes need follow-up after placement.

Talk track:

"I tried to keep the UI aligned to the real-world workflow: fast triage for hospital users, concise confidence-building information for providers, and clear language for families. The product is useful because it reduces translation work between groups that all speak a different operational language."

## Dummy Data Included

The prototype includes robust sample data:

- 8 complex patient cases
- 7 provider/facility options
- Multiple payer paths
- Multiple risk levels
- Hospital units
- Barrier categories
- Missing-documentation requirements
- Provider capabilities
- Match scoring
- Task checklists
- Decision history
- Family and provider draft messages

None of the data is real PHI.

## Demo Script

This is the practical script to use in the interview.

### Step 1: Open With The Live Demo

Open [the live demo](https://silverstay-carehub.vercel.app).

Say:

"This prototype is called SilverStay CareHub. I built it around one question: how can SilverStay make complex discharge work feel simpler for the people involved? The app has three connected work surfaces: a command center for triage, a provider snapshot for acceptance decisions, and an assistant that drafts reviewed next steps."

Point out:

- the live operational metrics,
- the flow rail,
- the three tabs,
- the care-transition visual.

### Step 2: Start In Command Center

Click `Command Center`.

Say:

"This first screen is for the daily work queue. It is designed for case managers and SilverStay coordinators who need to quickly understand which discharges are stuck and why."

Show:

- open complex discharges,
- high-risk case count,
- avoidable days,
- provider options,
- search and filters.

Say:

"The key is that every row has a patient story, barriers, and a best-fit provider. It is not just a spreadsheet. It is a triage board for action."

### Step 3: Search For A Specific Barrier

In the search box, type `respiratory`.

Click `Marcus Robinson`.

Say:

"Here I am searching the way a coordinator might think. I do not need to know the exact patient name. I can search by barrier, like respiratory. Now Marcus becomes the active case."

Show that the right-side discharge brief updates.

Say:

"The app now shows the transition target, owner, payer path, family context, budget signal, missing items, patient story, checklist, and recent movement. This is the information someone needs before they call a provider or family member."

### Step 4: Explain The Checklist

Click one checklist item open or done.

Say:

"These tasks represent the operational work that usually gets scattered across notes and conversations. In a real version, these could map to case-manager tasks, provider packet requirements, payer follow-up, family outreach, and outcome follow-up."

### Step 5: Move To Provider Snapshot

Click `Provider Snapshot`.

Say:

"Because Marcus is selected, the provider screen already knows the active patient. I do not have to re-enter anything. The app carries that patient context forward."

Show that Summit Respiratory Center is ranked first.

Say:

"The match score is explainable. Marcus needs respiratory support, skilled nursing, Medicaid coordination, and family support. Summit ranks first because its tags overlap with those needs. The score is not magic; it is a simple, transparent translation of patient needs into provider fit."

### Step 6: Show Provider Decision Logging

Click `Need info`.

Say:

"Now the provider response is logged into the decision trail. This matters because discharge work often breaks down when decisions happen in phone calls or side channels. The product keeps the team aligned on who said what and what is still missing."

Point out:

- matched needs,
- acceptance requirements,
- provider cautions,
- decision trail.

### Step 7: Move To AI Action Plan

Click `Generate action plan`.

Say:

"Now I am carrying the selected patient and selected provider into the assistant. This is where AI is useful, but only after the case has been structured."

Click `Generate plan`.

Say:

"The assistant uses the patient story, barriers, missing items, owner, payer path, provider match, and provider strengths to create a reviewed action plan. It also drafts a family message and a provider message."

### Step 8: Emphasize Human Review

Show the family and provider drafts.

Say:

"I would position this as human-approved AI. The assistant does not make the care decision. It reduces the writing and summarizing burden so SilverStay staff can spend more time coordinating the transition."

Click one copy button if useful.

Say:

"When a draft is copied, that communication action is logged. The operational record keeps moving with the case."

### Step 9: Close With Product Value

Say:

"The core product value is translation. SilverStay receives complex hospital context, turns it into structured barriers and provider-fit logic, then turns that into clear actions for providers and families. The UI is simple because the workflow is already stressful. The product should reduce cognitive load, not add another system people have to fight."

### 10-Second Closing Line

"I built this to show how SilverStay could make care transitions more visible, explainable, and coordinated, while keeping the human care team in control."

## What To Click In The Demo

- Use the search box to find `respiratory`, `memory`, `behavioral`, or `family`.
- Change the risk, unit, barrier, and sort filters in the Command Center.
- Select different patients to see provider rankings change automatically.
- Mark checklist tasks as open or done.
- Open Provider Snapshot and click different providers to see fit scores and matched needs update.
- Click `Accept fit`, `Need info`, or `Decline` to add events to the decision trail.
- Click `Generate action plan` to carry the selected patient/provider pair into the AI Assistant.
- Change the assistant tone between plain language, clinical, and executive.
- Generate family and provider message drafts.

## Validation

The deployed demo was checked with:

- Public URL HTTP smoke check: `200`
- Live Chrome interaction test on [https://silverstay-carehub.vercel.app](https://silverstay-carehub.vercel.app)
- Search and patient selection flow
- Provider selection and decision logging flow
- AI action-plan generation flow
- Network response monitoring
- Browser console monitoring

Final live check result:

```text
loaded: true
decisionVisible: true
generatedDrafts: true
badResponses: []
errors: []
```

## Security Review

Security notes and defensive checks are documented in [SECURITY_REVIEW.txt](SECURITY_REVIEW.txt).

The review covers dummy-data privacy, XSS and injection checks, OWASP-style risk mapping, CSP/security headers, local static-server path traversal, dependency exposure, and what would be required before real PHI could be used.

## Files

- `index.html` - app entry point
- `styles.css` - responsive product UI styling
- `app.js` - dummy data, match scoring, state, and interactions
- `server.js` - dependency-free static server
- `SECURITY_REVIEW.txt` - plain-text defensive review and data-safeguard notes
- `assets/care-transition-visual.png` - generated dashboard visual asset

## Product Positioning

This is not meant to be a full production system. It is a focused prototype that demonstrates a useful product direction for SilverStay:

- simple UI,
- fast triage,
- fewer handoff gaps,
- better provider confidence,
- clearer family communication,
- and human-approved AI assistance.

## License and usage

<!-- proprietary-license-notice -->

Copyright (c) 2026 Roshaan Singh. All rights reserved.

This repository is **source-available, not open source**. It is public for
portfolio review and evaluation only. No permission is granted to copy, modify,
redistribute, deploy, commercialize, train models on, or create derivative works
from the source except as GitHub's Terms of Service may require for GitHub
features. See [LICENSE](LICENSE) and [NOTICE](NOTICE).
