# Planet & body textures (8K recommended)

Place image files in this folder so the 3D scene can use them. Paths are relative to the project root (e.g. `textures/sun.jpg`).

**For realistic planets, use high-resolution textures — 8K (8192×4096 or similar) preferred.** The app uses anisotropic filtering and mipmapping so 8K textures stay sharp when viewed at an angle.

## Required files

| File | Used for |
|------|----------|
| `sun.jpg` | The Sun |
| `mercury.jpg` | Mercury |
| `venus.jpg` | Venus |
| `earth.jpg` | Earth |
| `mars.jpg` | Mars |
| `jupiter.jpg` | Jupiter |
| `saturn.jpg` | Saturn |
| `saturn_ring.jpg` | Saturn's rings |
| `uranus.jpg` | Uranus |
| `neptune.jpg` | Neptune |
| `moon.jpg` | Earth's Moon |

If a file is missing, the app falls back to a solid color so the scene still runs.

## Where to get 8K / high-res textures

- **NASA** – [solarsystem.nasa.gov](https://solarsystem.nasa.gov) (Resources → Images); search for “planet surface” or “globe” and pick high-res versions.
- **Solar System Scope** – [www.solarsystemscope.com](https://www.solarsystemscope.com/textures/) offers free 8K planet textures (download and rename to match the table above).
- **Planet Pixel Emporium** – Community pack with 8K and 4K textures; rename to match required filenames.
- **Search terms:** “8K planet texture free”, “NASA planet texture 8K”, “solar system texture pack”.

Use equirectangular (latitude/longitude) maps so they wrap correctly on the spheres. Save as JPG or PNG and name them exactly as in the table (e.g. `earth.jpg`, `mars.jpg`).
