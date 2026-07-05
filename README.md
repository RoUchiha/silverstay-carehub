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

## How Data Moves Through The App

The app is intentionally built around one shared patient/provider state.

When a user selects a patient in the Command Center:

- The selected patient becomes the active case everywhere.
- The app ranks providers for that patient.
- The best provider fit is selected automatically.
- The flow rail updates to show how that patient's data is moving.
- The AI draft output resets so the next generated plan is specific to the new case.

When a user selects a provider in Provider Snapshot:

- The app recalculates the provider fit for the active patient.
- The acceptance packet updates.
- Matched needs and missing items update.
- The AI Assistant receives that patient/provider pairing.

When a user generates an AI plan:

- Patient story, barriers, missing items, owner, payer path, and provider strengths are combined.
- The app transforms those inputs into:
  - a recommended action summary,
  - a step-by-step transition plan,
  - a family message draft,
  - a provider message draft,
  - and a short explanation of SilverStay's coordination role.

When a user logs a provider decision or copies a draft:

- The decision trail records the event.
- The event remains visible in the Provider Snapshot.
- This models the operational record SilverStay would need to keep families, facilities, and hospital teams aligned.

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

## Demo Story

A strong interview walkthrough:

1. Start in the Command Center.
2. Select Eleanor Price.
3. Show that she is medically stable but stuck because of memory support, insulin needs, Medicaid pending status, and remote family involvement.
4. Open Provider Snapshot.
5. Show how Harbor Light ranks highly because its capabilities match her needs.
6. Click "Need info" or "Accept fit" to show the decision trail.
7. Click "Generate action plan."
8. Show how the AI Assistant creates a reviewed plan plus family/provider drafts.
9. Explain that SilverStay is the bridge: hospital complexity becomes provider-ready and family-readable action.

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

## Files

- `index.html` - app entry point
- `styles.css` - responsive product UI styling
- `app.js` - dummy data, match scoring, state, and interactions
- `server.js` - dependency-free static server
- `assets/care-transition-visual.png` - generated dashboard visual asset

## Product Positioning

This is not meant to be a full production system. It is a focused prototype that demonstrates a useful product direction for SilverStay:

- simple UI,
- fast triage,
- fewer handoff gaps,
- better provider confidence,
- clearer family communication,
- and human-approved AI assistance.
