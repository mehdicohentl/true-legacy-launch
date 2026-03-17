

## Plan: Make ZoomGateway the Hero Action + Clean Up Event Section

### Problem
The "Secure Your Spot" gateway is buried below the flyer content. The bottom quote and secondary CTAs add clutter between the gateway and the resource links. Users need to immediately see how to join the Zoom.

### Changes

#### 1. `src/components/ZoomGateway.tsx` — Make it prominent and unmissable

- Add a glowing accent border card wrapper around the entire gateway with `border-accent/40 bg-accent/5` and a subtle pulsing glow effect
- Add a custom SVG video-camera icon above the heading to visually signal "this is how you join"
- Make heading larger: `text-3xl md:text-5xl`
- Add a short instructional line below the subtitle: "Select below to join the live Zoom call" / "Selecciona abajo para unirte a la llamada Zoom en vivo"
- Make the Yes/No buttons larger with bigger touch targets (`py-5 text-base`) and add SVG icons (checkmark for Yes, hand-wave for No)
- Remove the thin divider line between subtitle and question (declutter)
- Fix ES subtitle from "Martes" to "Jueves" (it says Tuesday but the event is Thursday)

#### 2. `src/components/EventSection.tsx` — Remove clutter below gateway

- Remove the bottom quote text (lines 164-172: "Your legacy doesn't wait...")
- Remove the secondary CTAs section (lines 174-208: Kangen, EmGuarde, Join Team buttons) — these are redundant since `EventResourceLinks` already has all the resource links and CTAs at the bottom of the page
- This makes the flow: Flyer + details → ZoomGateway → EventResourceLinks (on EventsPage)

#### 3. Mobile optimization
- ZoomGateway buttons stack vertically on mobile (already `flex-col sm:flex-row`) — increase padding and font size for easy thumb tapping
- Gateway card gets `mx-2` on mobile for edge breathing room

### Files to modify
1. `src/components/ZoomGateway.tsx`
2. `src/components/EventSection.tsx`

