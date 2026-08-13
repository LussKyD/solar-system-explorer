# New Bodies Reference — Research Pass (Aug 2026)

Sourced from NASA JPL Small-Body Database, Wikipedia, and current research papers.
All orbital elements are heliocentric (Sun-centered) unless noted. AU = astronomical units.
This is a build reference, not user-facing copy — final in-app descriptions will be written fresh.

---

## 1. Periodic comets (closed elliptical orbits — repeat forever)

| Comet | Period | Eccentricity | Perihelion (AU) | Aphelion (AU) | Semi-major axis (AU) | Inclination | Notes |
|---|---|---|---|---|---|---|---|
| **1P/Halley** | 74.7–76.1 yr | 0.9666 | 0.593 | 35.14 | 17.74 | 162.3° (retrograde) | Last perihelion 8 Feb 1986; next 28 Jul 2061. The archetype. |
| **2P/Encke** | 3.30 yr | 0.8471 | 0.339 | 4.10 | 2.22 | 11.3° | Shortest period of any known comet. Next perihelion 10 Feb 2027 — could be "currently active" in-app. |
| **67P/Churyumov–Gerasimenko** | 6.44 yr | 0.640 | 1.24 | 5.68 | 3.46 | 7.0° | Already referenced in your mission data (Rosetta/Philae) — good candidate to give an actual orbit instead of just a mission marker. |
| **12P/Pons-Brooks** | ~71 yr | 0.955 | 0.781 | ~33.5 | 17.18 | 74.2° | Halley-type; dramatic outbursts. Optional extra. |

## 2. Long-period comet (single very slow return)

| Comet | Period | Eccentricity | Perihelion (AU) | Aphelion (AU) | Inclination | Notes |
|---|---|---|---|---|---|---|
| **C/1995 O1 (Hale–Bopp)** | ~2,533 yr | 0.995 | 0.914 | 353.98 | 89.3° (near-polar) | Last seen 1997, won't return until ~4385 AD. Visually striking — nearly perpendicular to the ecliptic plane, huge aphelion. |

## 3. Historical one-time event (no longer exists as an orbiting body)

| Object | What happened | Notes |
|---|---|---|
| **D/1993 F2 (Shoemaker–Levy 9)** | Broke into 21 fragments after a 1992 close pass by Jupiter; fragments hit Jupiter's atmosphere July 16–22, 1994 at ~60 km/s. | First-ever observed collision between two solar-system bodies. Same treatment idea as a "mission failure" marker: show the fragment train approaching, then impact scars on Jupiter, with the real July 1994 dates. Not an ongoing orbit — implement as a historical animated event, not a repeating body. |

## 4. Interstellar objects (hyperbolic — pass through once, never return)

All three confirmed interstellar visitors ever detected. These need a genuinely different code path from your other orbits: eccentricity > 1 means an open hyperbolic path, not a closed ellipse — single pass-through animation, enters and exits, doesn't loop.

| Object | Discovered | Eccentricity | Perihelion (AU) | Inclination | Speed | Notes |
|---|---|---|---|---|---|---|
| **1I/'Oumuamua** | 19 Oct 2017 | 1.201 | 0.26 | 122.8° (retrograde) | 26.4 km/s | First known interstellar object. Elongated, reddish, ~230m × 35m. Perihelion was 9 Sep 2017 — discovered already outbound. |
| **2I/Borisov** | 30 Aug 2019 | 3.36 | 2.01 | ~44° | 32.3 km/s | Behaved like a normal comet, unlike 'Oumuamua. Perihelion 8 Dec 2019. |
| **3I/ATLAS** | 1 Jul 2025 | ~6.14 | 1.357 | 175.1° (retrograde) | ~58 km/s | **Newest and most extreme** — perihelion was 29 Oct 2025, so as of now (Aug 2026) it's currently outbound, somewhere past Mars/Jupiter's orbit heading back out. Diameter very uncertain (NASA: 440m–5.6km). This one is genuinely current, not historical. |

## 5. Dwarf planets / Kuiper Belt & scattered-disk objects (beyond your existing Pluto + Ceres)

| Body | Diameter | Orbital period | Perihelion (AU) | Aphelion (AU) | Eccentricity | Inclination | Notes |
|---|---|---|---|---|---|---|---|
| **Eris** | 2,326 km | 560.9 yr | ~38 | ~98 | 0.44 | 44° | Discovery of Eris (2005) is literally why Pluto got reclassified. Slightly smaller than Pluto but more massive. Moon: Dysnomia. |
| **Makemake** | 1,434 km | 309.9 yr | 38.5 | 53.1 | 0.159 | 28.9° | Kuiper Belt, third-largest TNO. |
| **Haumea** | ~1,400 km (elongated, egg-shaped) | 283.3 yr | 34.95 | 51.48 | 0.195 | 28.2° | Spins so fast (3.9 hr day) it's egg-shaped. Two moons. Visually distinct — worth doing a non-spherical mesh if you want to show this off. |
| **Sedna** | ~995 km | 11,390 yr | 76.2 | 937 | 0.85 | 11.9° | Extreme detached object — never gets closer to the Sun than 3x Neptune's distance. Won't reach perihelion again until 2076. |

## 6. Notable main-belt asteroids

| Body | Diameter | Orbital period | Perihelion (AU) | Aphelion (AU) | Eccentricity | Notes |
|---|---|---|---|---|---|---|
| **4 Vesta** | 525 km | 3.63 yr | 2.15 | 2.57 | 0.089 | Brightest asteroid, visible to naked eye. Visited by Dawn. |
| **2 Pallas** | 513 km | 4.60 yr | 2.13 | 3.41 | 0.230 | Highly inclined (35°) orbit — unusual. |

## 7. Notable near-Earth asteroids

| Body | Diameter | Orbital period | Perihelion (AU) | Aphelion (AU) | Eccentricity | Notes |
|---|---|---|---|---|---|---|
| **433 Eros** | 34×11×11 km | 1.76 yr | — | — | — | First asteroid ever orbited *and* landed on (NEAR Shoemaker, 2000). |
| **101955 Bennu** | ~0.5 km | 1.20 yr | 0.90 | 1.36 | 0.204 | Already in your missions list (OSIRIS-REx) — could get an actual orbit line instead of just a marker. |
| **162173 Ryugu** | ~1 km | 1.30 yr | 0.96 | 1.42 | 0.190 | Already in your missions list (Hayabusa2) — same idea. |
| **99942 Apophis** | 450×170 m | 0.886 yr (323.6 days) | 0.746 | 1.099 | 0.191 | **The one worth building a real event around.** On 13 April 2029 it passes just ~31,600 km from Earth — closer than geostationary satellites, naked-eye visible, no impact risk (that was ruled out years ago). Only ~2.5 years from now — genuinely exciting near-future date to mark on the timeline/tour. |

---

## Implementation notes

- **Three different orbit "shapes" needed:** closed ellipse (periodic comets, dwarf planets, asteroids — extends what you already do), open hyperbola (interstellar objects — new math, single pass), and one-time event (Shoemaker-Levy 9 — reuses the mission-failure marker pattern we already planned).
- **Real near-future event:** Apophis 2029 is a genuine, verified, low-risk astronomical event worth a "mark your calendar" callout in the guided tour.
- **3I/ATLAS is live right now** — as of today it's actually out there, mid-departure from the solar system. Worth flagging as "currently passing through" rather than historical.
- Quiz mode: still parked, not forgotten.
