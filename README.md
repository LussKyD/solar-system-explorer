🪐 Solar System 3D Explorer

An interactive 3D visualization of the solar system built with Three.js. Explore the Sun, planets, and moons; view space missions and landing sites; and control the camera with presets and toggles.

✨ Features

* **Scaled solar system:** Sun, eight planets, and selected moons (Earth’s Moon, Mars’s Phobos & Deimos, Jupiter’s Io/Europa/Ganymede, Saturn’s Titan & Rhea, Uranus’s Titania, Neptune’s Triton) with orbit and rotation.
* **Asteroid & Kuiper belts:** Visual belts between Mars–Jupiter and beyond Neptune.
* **Camera:** Orbit (drag), zoom (scroll), pan (right-click or Ctrl+drag). **Reset View** restores the default overview.
* **Info panel:** Hover or click a body to see name, type, radius, orbital period, and distances. Click to lock selection.
* **Body modal:** **Double-click** a planet or moon to open a focus view: 3D globe with zoom/rotate, key facts, and a **Missions** list. Click a mission to bring its marker to the front on the globe; click a marker on the globe to select that mission.
* **Presets:** Jump the camera to **Inner system**, **Gas giants**, **Outer system**, or **Top view**.
* **Toggles:** Show/hide orbits, asteroid belt, Kuiper belt, and labels. **Speed:** 0.5×–4×. **Pause / Resume** orbits.
* **Missions & links:** Dozens of missions (Apollo, ISS, Hubble, Mars rovers, Voyager, Cassini, etc.) with descriptions and Wikipedia links. Launch sites listed for Earth.

🖼 Textures

The app expects planet/sun textures in the `textures/` folder. See **[textures/README.md](textures/README.md)** for the list of files (`sun.jpg`, `mercury.jpg`, …, `moon.jpg`, `saturn_ring.jpg`). If a texture is missing, a solid fallback color is used so the app still runs.

⚙️ Dependencies

* [**Three.js (r128)**](https://threejs.org/): Core 3D library.
* [**OrbitControls**](https://threejs.org/docs/#examples/en/controls/OrbitControls): Camera interaction.

Loaded from CDN; no build step. Open `index.html` in a browser (use a local server if you add textures so paths resolve correctly).

📝 License

MIT License.
