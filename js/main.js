// --- Global Constants ---

// Conversion factors
const AU_TO_LY = 0.000015813;

// The Sun's data
const SUN_DATA = {
    name: "The Sun",
    type: 'Star',// --- Global Constants ---

// Conversion factors
const AU_TO_LY = 0.000015813;

// The Sun's data
const SUN_DATA = {
    name: "The Sun",
    type: 'Star',
    radius: 1.5,
    color: 0xFFA500,
    texture: 'textures/sun.jpg',
    distanceAU: 0,
    info: "The center of our solar system.",
    radiusKm: 695700,
    orbitalPeriodDays: null,
    orbitalPeriodYears: null
};

// Planet Data (Note: Distances are SCALED for the camera view)
const PLANETS = [
    {
        name: "Mercury",
        type: "Terrestrial planet",
        radius: 0.2,
        distance: 3.0,
        orbitSpeed: 0.015,
        selfRotateSpeed: 0.02,
        distanceAU: 0.39,
        texture: 'textures/mercury.jpg',
        radiusKm: 2440,
        orbitalPeriodDays: 88,
        orbitalPeriodYears: 0.24
    },
    {
        name: "Venus",
        type: "Terrestrial planet",
        radius: 0.4,
        distance: 5.0,
        orbitSpeed: 0.008,
        selfRotateSpeed: 0.01,
        distanceAU: 0.72,
        texture: 'textures/venus.jpg',
        radiusKm: 6052,
        orbitalPeriodDays: 225,
        orbitalPeriodYears: 0.62
    },
    {
        name: "Earth",
        type: "Terrestrial planet",
        radius: 0.5,
        distance: 8.0,
        orbitSpeed: 0.005,
        selfRotateSpeed: 0.007,
        distanceAU: 1.00,
        texture: 'textures/earth.jpg',
        radiusKm: 6371,
        orbitalPeriodDays: 365,
        orbitalPeriodYears: 1
    },
    {
        name: "Mars",
        type: "Terrestrial planet",
        radius: 0.3,
        distance: 12.0,
        orbitSpeed: 0.004,
        selfRotateSpeed: 0.006,
        distanceAU: 1.52,
        texture: 'textures/mars.jpg',
        radiusKm: 3390,
        orbitalPeriodDays: 687,
        orbitalPeriodYears: 1.88
    },
    {
        name: "Jupiter",
        type: "Gas giant",
        radius: 1.2,
        distance: 25.0,
        orbitSpeed: 0.0008,
        selfRotateSpeed: 0.015,
        distanceAU: 5.20,
        texture: 'textures/jupiter.jpg',
        radiusKm: 69911,
        orbitalPeriodDays: 4333,
        orbitalPeriodYears: 11.86
    },
    {
        name: "Saturn",
        type: "Gas giant",
        radius: 1.0,
        distance: 35.0,
        orbitSpeed: 0.0006,
        selfRotateSpeed: 0.01,
        distanceAU: 9.58,
        texture: 'textures/saturn.jpg',
        hasRings: true,
        radiusKm: 58232,
        orbitalPeriodDays: 10759,
        orbitalPeriodYears: 29.45
    },
    {
        name: "Uranus",
        type: "Ice giant",
        radius: 0.8,
        distance: 45.0,
        orbitSpeed: 0.0003,
        selfRotateSpeed: 0.005,
        distanceAU: 19.22,
        texture: 'textures/uranus.jpg',
        radiusKm: 25362,
        orbitalPeriodDays: 30687,
        orbitalPeriodYears: 84.0
    },
    {
        name: "Neptune",
        type: "Ice giant",
        radius: 0.8,
        distance: 55.0,
        orbitSpeed: 0.0002,
        selfRotateSpeed: 0.004,
        distanceAU: 30.05,
        texture: 'textures/neptune.jpg',
        radiusKm: 24622,
        orbitalPeriodDays: 60190,
        orbitalPeriodYears: 164.8
    },
];

// Dwarf planets (no textures; solid color)
const DWARF_PLANETS = [
    { name: "Pluto", type: "Dwarf planet", radius: 0.18, distance: 62.0, orbitSpeed: 0.00016, selfRotateSpeed: 0.004, distanceAU: 39.48, color: 0xC4A574, radiusKm: 1188, orbitalPeriodDays: 90553, orbitalPeriodYears: 248, info: "Former ninth planet; Kuiper Belt object." },
    { name: "Ceres", type: "Dwarf planet", radius: 0.08, distance: 18.0, orbitSpeed: 0.0022, selfRotateSpeed: 0.006, distanceAU: 2.77, color: 0x9a9a9a, radiusKm: 473, orbitalPeriodDays: 1680, orbitalPeriodYears: 4.6, info: "Largest object in the asteroid belt." }
];

// Data for Moons: Only Earth's moon has the 'moon.jpg' texture, the rest use solid colors.
const MOON_SYSTEMS = {
    "Earth": [
        { name: "Moon", radius: 0.15, distance: 1.5, orbitSpeed: 0.05, selfRotateSpeed: 0.015, texture: 'textures/moon.jpg', info: "Earth's only natural satellite.", radiusKm: 1737, orbitalPeriodDays: 27.3 }
    ],
    "Mars": [
        // Phobos and Deimos will use solid color (no texture defined)
        { name: "Phobos", radius: 0.08, distance: 0.5, orbitSpeed: 0.1, selfRotateSpeed: 0.05, info: "Inner, fast-orbiting moon.", radiusKm: 11, orbitalPeriodDays: 0.3 }, 
        { name: "Deimos", radius: 0.05, distance: 0.9, orbitSpeed: 0.05, selfRotateSpeed: 0.03, info: "Outer, potato-shaped moon.", radiusKm: 6, orbitalPeriodDays: 1.3 }
    ],
    "Jupiter": [
        { name: "Io", radius: 0.25, distance: 2.0, orbitSpeed: 0.03, selfRotateSpeed: 0.01, info: "Volcanically active.", radiusKm: 1821, orbitalPeriodDays: 1.8 },
        { name: "Europa", radius: 0.2, distance: 3.0, orbitSpeed: 0.02, selfRotateSpeed: 0.008, info: "Icy, possible sub-surface ocean.", radiusKm: 1561, orbitalPeriodDays: 3.5 },
        { name: "Ganymede", radius: 0.35, distance: 4.5, orbitSpeed: 0.015, selfRotateSpeed: 0.006, info: "Largest moon in solar system.", radiusKm: 2634, orbitalPeriodDays: 7.2 },
        { name: "Callisto", radius: 0.3, distance: 5.5, orbitSpeed: 0.012, selfRotateSpeed: 0.005, info: "Heavily cratered, possible subsurface ocean.", radiusKm: 2410, orbitalPeriodDays: 16.7 }
    ],
    "Saturn": [
        { name: "Titan", radius: 0.45, distance: 3.5, orbitSpeed: 0.01, selfRotateSpeed: 0.005, info: "Hazy atmosphere, largest moon.", radiusKm: 2575, orbitalPeriodDays: 16.0 },
        { name: "Rhea", radius: 0.2, distance: 4.5, orbitSpeed: 0.008, selfRotateSpeed: 0.004, info: "Second largest moon.", radiusKm: 764, orbitalPeriodDays: 4.5 },
        { name: "Enceladus", radius: 0.12, distance: 2.2, orbitSpeed: 0.018, selfRotateSpeed: 0.008, info: "Ice geysers; potential habitability.", radiusKm: 252, orbitalPeriodDays: 1.4 }
    ],
    "Uranus": [
        { name: "Titania", radius: 0.2, distance: 2.5, orbitSpeed: 0.01, selfRotateSpeed: 0.005, info: "Largest moon of Uranus.", radiusKm: 789, orbitalPeriodDays: 8.7 } 
    ],
    "Neptune": [
        { name: "Triton", radius: 0.25, distance: 2.5, orbitSpeed: 0.01, selfRotateSpeed: 0.005, info: "Retrograde orbit.", radiusKm: 1353, orbitalPeriodDays: 5.9 } 
    ]
};

// Highlighted space missions (sample set; can be extended)
// Note: Positions are approximate and scaled for visualization, not precise ephemeris.
const MISSIONS = [
    // Earth orbit & Moon
    {
        id: 'sputnik-1',
        name: 'Sputnik 1',
        agency: 'Soviet Union',
        target: 'Earth',
        type: 'Satellite',
        year: 1957,
        status: 'Reentered atmosphere',
        description: 'First artificial satellite to orbit Earth.',
        altitudeKm: 215,
        longitudeDeg: -20,
        inclinationDeg: 65,
        flightPath: {
            launchSite: { lat: 45.9203, lon: 63.3422 }, // Baikonur, Site 1/5 ("Gagarin's Start")
            launchDateLabel: 'October 4, 1957 · 19:28:34 UTC',
            outcome: 'success',
            successNote: 'Launched on a modified R-7 intercontinental ballistic missile and reached orbit about 5 minutes after liftoff — the first human-made object ever to do so. It circled Earth every 96 minutes, transmitting its famous radio "beep" for 21 days before its batteries died, and burned up on reentry on January 4, 1958.'
        }
    },
    {
        id: 'apollo-11',
        name: 'Apollo 11',
        agency: 'NASA (USA)',
        target: 'Moon',
        type: 'Crewed landing',
        year: 1969,
        status: 'Completed',
        description: 'First crewed Moon landing (Neil Armstrong & Buzz Aldrin).',
        longitudeDeg: 23.47,
        latitudeDeg: 0.67,
        flightPath: {
            launchSite: { lat: 28.608, lon: -80.604 }, // Kennedy Space Center, Pad 39A
            launchDateLabel: 'July 16, 1969 · 9:32 AM EDT',
            outcome: 'success',
            successNote: 'Reached Earth orbit, then translunar injection about 3 hours later. Landed on the Moon July 20, 1969.'
        }
    },
    {
        id: 'apollo-12',
        name: 'Apollo 12',
        agency: 'NASA (USA)',
        target: 'Moon',
        type: 'Crewed landing',
        year: 1969,
        status: 'Completed',
        description: 'Second crewed Moon landing near Surveyor 3.',
        longitudeDeg: -23.42,
        latitudeDeg: -3.01,
        flightPath: {
            launchSite: { lat: 28.608, lon: -80.604 }, // Kennedy Space Center, Pad 39A
            launchDateLabel: 'November 14, 1969 · 11:22 AM EST',
            outcome: 'success',
            successNote: 'Struck by lightning twice during ascent (T+36s and T+52s), knocking out telemetry and the guidance platform. Flight controller John Aaron\'s call to "try SCE to AUX" let the crew restore power, and the Saturn V reached Earth orbit undamaged.'
        }
    },
    {
        id: 'apollo-14',
        name: 'Apollo 14',
        agency: 'NASA (USA)',
        target: 'Moon',
        type: 'Crewed landing',
        year: 1971,
        status: 'Completed',
        description: 'Third crewed Moon landing at Fra Mauro.',
        longitudeDeg: -17.47,
        latitudeDeg: -3.65,
        flightPath: {
            launchSite: { lat: 28.608, lon: -80.604 }, // Kennedy Space Center, Pad 39A
            launchDateLabel: 'January 31, 1971 · 4:03 PM EST',
            outcome: 'success',
            successNote: 'Reached Earth parking orbit on schedule after a launch delayed 40 minutes by weather. Translunar injection followed about an hour later, sending Shepard, Roosa and Mitchell toward the Fra Mauro highlands.'
        }
    },
    {
        id: 'apollo-15',
        name: 'Apollo 15',
        agency: 'NASA (USA)',
        target: 'Moon',
        type: 'Crewed landing',
        year: 1971,
        status: 'Completed',
        description: 'First mission with the Lunar Roving Vehicle.',
        longitudeDeg: 3.65,
        latitudeDeg: 26.1,
        flightPath: {
            launchSite: { lat: 28.608, lon: -80.604 }, // Kennedy Space Center, Pad 39A
            launchDateLabel: 'July 26, 1971 · 9:34 AM EDT',
            outcome: 'success',
            successNote: 'Reached Earth parking orbit 11 minutes 44 seconds after liftoff. First of the heavier "J-class" Apollo missions, carrying the Lunar Roving Vehicle to the Moon for the first time.'
        }
    },
    {
        id: 'apollo-16',
        name: 'Apollo 16',
        agency: 'NASA (USA)',
        target: 'Moon',
        type: 'Crewed landing',
        year: 1972,
        status: 'Completed',
        description: 'Explored the lunar highlands near Descartes.',
        longitudeDeg: 15.5,
        latitudeDeg: -8.97,
        flightPath: {
            launchSite: { lat: 28.608, lon: -80.604 }, // Kennedy Space Center, Pad 39A
            launchDateLabel: 'April 16, 1972 · 12:54 PM EST',
            outcome: 'success',
            successNote: 'Reached Earth orbit on a nominal ascent, carrying Young, Mattingly and Duke toward the lunar highlands near Descartes for the first geological survey of that terrain.'
        }
    },
    {
        id: 'apollo-17',
        name: 'Apollo 17',
        agency: 'NASA (USA)',
        target: 'Moon',
        type: 'Crewed landing',
        year: 1972,
        status: 'Completed',
        description: 'Last crewed Moon landing; first geologist on the Moon.',
        longitudeDeg: 30.77,
        latitudeDeg: 20.19,
        flightPath: {
            launchSite: { lat: 28.608, lon: -80.604 }, // Kennedy Space Center, Pad 39A
            launchDateLabel: 'December 7, 1972 · 12:33 AM EST',
            outcome: 'success',
            successNote: 'Delayed 2 hours 40 minutes by a countdown sequencer fault, then lifted off as the only night launch of the Apollo program, turning the Florida sky to daylight before reaching Earth orbit with Cernan, Evans and Schmitt aboard.'
        }
    },
    {
        id: 'apollo-13',
        name: 'Apollo 13',
        agency: 'NASA (USA)',
        target: 'Moon',
        type: 'Crewed mission (aborted landing)',
        year: 1970,
        status: 'Crew returned safely after in-flight failure.',
        description: 'Famous \"successful failure\" mission; no lunar landing.',
        flightPath: {
            launchSite: { lat: 28.608, lon: -80.604 }, // Kennedy Space Center, Pad 39A
            launchDateLabel: 'April 11, 1970 · 2:13 PM EST',
            outcome: 'success',
            successNote: 'The ascent itself was nominal — a center engine on the second stage shut down two minutes early, and the other engines simply burned longer to compensate. Apollo 13 reached Earth orbit safely. The famous oxygen tank explosion that aborted the Moon landing happened two days later, en route to the Moon, not during launch.'
        }
    },
    {
        id: 'sts-51l-challenger',
        name: 'STS-51-L (Challenger)',
        agency: 'NASA (USA)',
        target: 'Earth',
        type: 'Crewed orbiter (launch failure)',
        year: 1986,
        status: 'Broke apart 73 seconds after launch; all 7 crew lost.',
        description: 'Space Shuttle Challenger disintegrated shortly after liftoff when hot gas escaped through a failed O-ring seal in the right solid rocket booster, weakened by unusually cold overnight temperatures at the launch site.',
        flightPath: {
            launchSite: { lat: 28.627, lon: -80.621 }, // Kennedy Space Center, Pad 39B
            launchDateLabel: 'January 28, 1986 · 11:38 AM EST',
            outcome: 'failure',
            failure: {
                elapsedSeconds: 73,
                altitudeKm: 14,
                note: 'At T+73 seconds, an O-ring seal in the right solid rocket booster failed, weakened by unusually cold overnight temperatures. The external tank broke apart at about 14 km (46,000 ft) altitude. All 7 crew members were lost.'
            }
        }
    },
    {
        id: 'luna-2',
        name: 'Luna 2',
        agency: 'Soviet Union',
        target: 'Moon',
        type: 'Impact probe',
        year: 1959,
        status: 'Impact on lunar surface.',
        description: 'First human-made object to reach the Moon.',
        flightPath: {
            launchSite: { lat: 45.9203, lon: 63.3422 }, // Baikonur, Site 1/5 ("Gagarin's Start")
            launchDateLabel: 'September 12, 1959 · 06:39:42 UTC',
            outcome: 'success',
            successNote: 'Launched on a direct path to the Moon on a modified R-7 rocket. About 36 hours later it struck the lunar surface near the Aristides, Archimedes and Autolycus craters — the first human-made object to touch another world.'
        }
    },
    {
        id: 'luna-9',
        name: 'Luna 9',
        agency: 'Soviet Union',
        target: 'Moon',
        type: 'Lander',
        year: 1966,
        status: 'Completed',
        description: 'First successful soft landing on the Moon.',
        flightPath: {
            launchSite: { lat: 45.9961, lon: 63.5642 }, // Baikonur, Site 31/6
            launchDateLabel: 'January 31, 1966 · 11:41:37 UTC',
            outcome: 'success',
            successNote: 'Reached a parking orbit before its Molniya upper stage sent it toward the Moon. On February 3, 1966, Luna 9 achieved the first successful soft landing on another world and transmitted the first close-up photographs from the lunar surface.'
        }
    },
    {
        id: 'luna-15',
        name: 'Luna 15',
        agency: 'Soviet Union',
        target: 'Moon',
        type: 'Sample return (failed)',
        year: 1969,
        status: 'Crashed during descent near Mare Crisium.',
        description: 'Attempted sample return mission that failed during landing.',
        flightPath: {
            launchSite: { lat: 46.071, lon: 62.985 }, // Baikonur, Site 81/24
            launchDateLabel: 'July 13, 1969 · 02:54:42 UTC',
            outcome: 'success',
            successNote: 'Launched on a Proton rocket three days before Apollo 11, in an unstated attempt to return lunar soil to Earth first. The Earth ascent and lunar orbit insertion were both successful — the failure came 8 days later during the final descent, when Luna 15 struck a mountainside in Mare Crisium, just hours before Armstrong and Aldrin lifted off from the Moon.'
        }
    },
    {
        id: 'chang-e-3',
        name: 'Chang\'e 3',
        agency: 'CNSA (China)',
        target: 'Moon',
        type: 'Lander & rover',
        year: 2013,
        status: 'Mission complete.',
        description: 'First soft landing on the Moon since 1976; carried Yutu rover.',
        flightPath: {
            launchSite: { lat: 28.2455, lon: 102.027 }, // Xichang Satellite Launch Center, LC-2
            launchDateLabel: 'December 1, 2013 · 17:30 UTC',
            outcome: 'success',
            successNote: 'Launched on a Long March 3B directly onto a translunar trajectory. Landed in Sinus Iridum on December 14, 2013 — the first soft lunar landing by any nation since the Soviet Luna 24 in 1976.'
        }
    },
    {
        id: 'chang-e-4',
        name: 'Chang\'e 4',
        agency: 'CNSA (China)',
        target: 'Moon',
        type: 'Lander & rover',
        year: 2018,
        status: 'Operational.',
        description: 'First soft landing on the lunar far side; carries Yutu-2 rover.',
        flightPath: {
            launchSite: { lat: 28.2455, lon: 102.027 }, // Xichang Satellite Launch Center, LA-2
            launchDateLabel: 'December 7, 2018 · 18:23 UTC',
            outcome: 'success',
            successNote: 'Launched on a Long March 3B, relying on the Queqiao relay satellite (placed at Earth-Moon L2 seven months earlier) to communicate once on the far side. Landed in Von Kármán crater on January 3, 2019 — the first-ever landing on the Moon\'s far side.'
        }
    },
    {
        id: 'chandrayaan-2',
        name: 'Chandrayaan-2',
        agency: 'ISRO (India)',
        target: 'Moon',
        type: 'Orbiter, lander & rover (partial success)',
        year: 2019,
        status: 'Orbiter operational; lander crashed.',
        description: 'India\'s second lunar mission; orbiter continues to study the Moon.',
        flightPath: {
            launchSite: { lat: 13.7199, lon: 80.2304 }, // Satish Dhawan Space Centre, Second Launch Pad
            launchDateLabel: 'July 22, 2019 · 09:13 UTC',
            outcome: 'success',
            successNote: 'India\'s heaviest rocket, the GSLV Mk III, placed Chandrayaan-2 into Earth orbit cleanly after a launch delayed a week by a cryogenic-stage helium leak. The orbiter remains operational; the Vikram lander crashed during its final descent to the Moon on September 6, 2019 — a failure at the destination, not at launch.'
        }
    },
    {
        id: 'iss',
        name: 'International Space Station',
        agency: 'NASA / Roscosmos / ESA / JAXA / CSA',
        target: 'Earth',
        type: 'Space station',
        year: 1998,
        status: 'Operational',
        description: 'Modular space station in low Earth orbit, permanently crewed.',
        altitudeKm: 420,
        longitudeDeg: 45,
        inclinationDeg: 51.6,
        flightPath: {
            launchSite: { lat: 46.071, lon: 62.985 }, // Baikonur, Site 81/23
            launchDateLabel: 'November 20, 1998 · 06:40 UTC',
            outcome: 'success',
            successNote: 'The Zarya module — the station\'s first piece — launched on a Proton-K rocket and reached orbit on schedule. It would be joined by the American Unity module two weeks later, beginning two decades of continuous assembly and habitation.'
        }
    },
    {
        id: 'hubble',
        name: 'Hubble Space Telescope',
        agency: 'NASA / ESA',
        target: 'Earth',
        type: 'Space telescope',
        year: 1990,
        status: 'Operational',
        description: 'Iconic space telescope that revolutionized astronomy.',
        altitudeKm: 540,
        longitudeDeg: 160,
        inclinationDeg: 28.5,
        flightPath: {
            launchSite: { lat: 28.627, lon: -80.621 }, // Kennedy Space Center, Pad 39B
            launchDateLabel: 'April 24, 1990 · 8:33:51 AM EDT',
            outcome: 'success',
            successNote: 'Carried to orbit in the payload bay of Space Shuttle Discovery on mission STS-31, then deployed by the crew the next day using the shuttle\'s robotic arm — the highest orbit a shuttle had flown to at that point.'
        }
    },
    {
        id: 'jwst',
        name: 'James Webb Space Telescope',
        agency: 'NASA / ESA / CSA',
        target: 'Earth',
        type: 'Space telescope',
        year: 2021,
        status: 'Operational',
        description: 'Infrared observatory at Sun–Earth L2; successor to Hubble for deep-space imaging.',
        altitudeKm: 1.5e6,
        longitudeDeg: 200,
        inclinationDeg: 0,
        flightPath: {
            launchSite: { lat: 5.239, lon: -52.768 }, // Guiana Space Centre, ELA-3
            launchDateLabel: 'December 25, 2021 · 07:20 AM EST',
            outcome: 'success',
            successNote: 'Launched on an Ariane 5 with such precise trajectory accuracy that ground controllers used far less onboard fuel than planned for course correction — extending the telescope\'s operational life well beyond its original 10-year estimate. It reached the Sun-Earth L2 point, 1.5 million km out, about a month later.'
        }
    },
    // Mars missions
    {
        id: 'viking-1',
        name: 'Viking 1',
        agency: 'NASA (USA)',
        target: 'Mars',
        type: 'Lander & orbiter',
        year: 1975,
        status: 'Completed',
        description: 'First successful Mars lander and orbiter mission.',
        orbitalRadiusOffset: 1.0,
        alongOrbitDeg: 40,
        flightPath: {
            launchSite: { lat: 28.583, lon: -80.583 }, // Cape Canaveral, Launch Complex 41
            launchDateLabel: 'August 20, 1975 · 5:22 PM EDT',
            outcome: 'success',
            successNote: 'Launched on a Titan IIIE-Centaur, reaching Earth parking orbit before the Centaur upper stage re-ignited to send it toward Mars — an 11-month cruise ending with the first fully successful landing on another planet, on July 20, 1976.'
        }
    },
    {
        id: 'venera-7',
        name: 'Venera 7',
        agency: 'Soviet Union',
        target: 'Venus',
        type: 'Lander',
        year: 1970,
        status: 'First successful landing on another planet (short-lived).',
        orbitalRadiusOffset: 0.8,
        alongOrbitDeg: -60,
        flightPath: {
            launchSite: { lat: 45.9961, lon: 63.5642 }, // Baikonur, Site 31/6
            launchDateLabel: 'August 17, 1970 · 05:38:22 UTC',
            outcome: 'success',
            successNote: 'Launched on a Molniya rocket toward Venus. On December 15, 1970, it became the first spacecraft to transmit data from the surface of another planet — surviving just 23 minutes in Venus\'s crushing 90-atmosphere pressure and 465°C heat before falling silent.'
        }
    },
    {
        id: 'mars-climate-orbiter',
        name: 'Mars Climate Orbiter',
        agency: 'NASA (USA)',
        target: 'Mars',
        type: 'Orbiter',
        year: 1998,
        status: 'Lost due to navigation error (metric/imperial mismatch).',
        orbitalRadiusOffset: 0.8,
        alongOrbitDeg: 120,
        flightPath: {
            launchSite: { lat: 28.447, lon: -80.566 }, // Cape Canaveral, Launch Complex 17A
            launchDateLabel: 'December 11, 1998 · 1:45:51 PM EST',
            outcome: 'success',
            successNote: 'The Delta II launch was entirely nominal and put the spacecraft on a correct course for Mars. The failure came 9 months later, at the destination: ground software used imperial pound-seconds while the spacecraft expected metric newton-seconds, sending it too low into the Martian atmosphere where it broke apart on September 23, 1999.'
        }
    },
    {
        id: 'sojourner',
        name: 'Mars Pathfinder / Sojourner',
        agency: 'NASA (USA)',
        target: 'Mars',
        type: 'Lander & rover',
        year: 1996,
        status: 'Completed',
        description: 'First successful Mars rover.',
        orbitalRadiusOffset: 0.6,
        alongOrbitDeg: -120,
        flightPath: {
            launchSite: { lat: 28.447, lon: -80.566 }, // Cape Canaveral, Launch Complex 17A
            launchDateLabel: 'December 4, 1996 · 1:58 AM EST',
            outcome: 'success',
            successNote: 'Launched on a Delta II directly onto a Mars transfer trajectory. Instead of a powered landing, it used an airbag system to bounce to a stop in Ares Vallis on July 4, 1997 — the first use of that landing method, later reused for Spirit and Opportunity.'
        }
    },
    {
        id: 'spirit',
        name: 'Spirit',
        agency: 'NASA (USA)',
        target: 'Mars',
        type: 'Rover',
        year: 2003,
        status: 'Mission complete',
        description: 'Mars Exploration Rover; operated for over 6 years.',
        orbitalRadiusOffset: 0.4,
        alongOrbitDeg: -10,
        flightPath: {
            launchSite: { lat: 28.447, lon: -80.566 }, // Cape Canaveral, Launch Complex 17A
            launchDateLabel: 'June 10, 2003 · 1:59 PM EDT',
            outcome: 'success',
            successNote: 'Launched on a Delta II, the first of two Mars Exploration Rovers to leave Earth. Landed in Gusev Crater on January 4, 2004, and kept working for over six years — 25 times its planned 90-day mission.'
        }
    },
    {
        id: 'opportunity',
        name: 'Opportunity',
        agency: 'NASA (USA)',
        target: 'Mars',
        type: 'Rover',
        year: 2003,
        status: 'Mission complete',
        description: 'Mars rover that operated for nearly 15 years.',
        orbitalRadiusOffset: 0.4,
        alongOrbitDeg: 30,
        flightPath: {
            launchSite: { lat: 28.436, lon: -80.577 }, // Cape Canaveral, Launch Complex 17B
            launchDateLabel: 'July 7, 2003 · 11:18 PM EDT',
            outcome: 'success',
            successNote: 'Launched three weeks after its twin Spirit, on a Delta II from the neighboring pad 17B. Landed on the opposite side of Mars in Meridiani Planum on January 25, 2004, and kept driving until 2018 — nearly 15 years, the longest surface mission on another world at the time.'
        }
    },
    {
        id: 'curiosity',
        name: 'Curiosity',
        agency: 'NASA (USA)',
        target: 'Mars',
        type: 'Rover',
        year: 2011,
        status: 'Operational',
        description: 'Nuclear-powered rover exploring Gale Crater.',
        orbitalRadiusOffset: 0.2,
        alongOrbitDeg: 70,
        flightPath: {
            launchSite: { lat: 28.583, lon: -80.583 }, // Cape Canaveral, Space Launch Complex 41
            launchDateLabel: 'November 26, 2011 · 10:02 AM EST',
            outcome: 'success',
            successNote: 'Launched on an Atlas V, too heavy for airbags — instead it used a first-of-its-kind "sky crane" that lowered the rover on cables from a hovering rocket stage. Landed in Gale Crater on August 6, 2012, and has been climbing Mount Sharp ever since.'
        }
    },
    {
        id: 'perseverance',
        name: 'Perseverance',
        agency: 'NASA (USA)',
        target: 'Mars',
        type: 'Rover',
        year: 2020,
        status: 'Operational',
        description: 'Mars rover exploring Jezero Crater with a focus on astrobiology.',
        orbitalRadiusOffset: 0.1,
        alongOrbitDeg: -70,
        flightPath: {
            launchSite: { lat: 28.583, lon: -80.583 }, // Cape Canaveral, Space Launch Complex 41
            launchDateLabel: 'July 30, 2020 · 7:50 AM EDT',
            outcome: 'success',
            successNote: 'Launched on an Atlas V during Mars\'s tight 2020 launch window. Landed in Jezero Crater on February 18, 2021, using an upgraded sky-crane system with terrain-relative navigation, and carried the small Ingenuity helicopter — the first powered flight on another planet — attached to its belly.'
        }
    },
    // Outer solar system
    {
        id: 'voyager-1',
        name: 'Voyager 1',
        agency: 'NASA (USA)',
        target: 'Interstellar space',
        type: 'Flyby / interstellar probe',
        year: 1977,
        status: 'Operational',
        description: 'Most distant human-made object, exploring interstellar space.',
        radialDistance: 140, // scaled distance from Sun (legacy static marker; superseded by journey.current for the Trace Journey view)
        polarAngleDeg: 20,
        azimuthDeg: 45,
        flightPath: {
            launchSite: { lat: 28.583, lon: -80.583 }, // Cape Canaveral, Launch Complex 41
            launchDateLabel: 'September 5, 1977 · 8:56 AM EDT',
            outcome: 'success',
            successNote: 'Despite the "1" in its name, Voyager 1 launched 16 days after Voyager 2, on a faster trajectory that let it overtake its twin before reaching Jupiter. It is now the most distant human-made object in existence, having crossed into interstellar space in 2012.'
        },
        // Real post-launch trajectory for the "Trace Journey" replay. Flyby legs reuse this
        // app's own already-placed planet distances (PLANETS[].distance) and its existing
        // circular-orbit angle model (REALTIME_EPOCH_MS + orbitalPeriodDays) evaluated at the
        // real historical flyby date, so the path lines up with the planets exactly as this
        // app already renders them — same precision level as the rest of the scene, no new
        // guesswork. Legs beyond Pluto's orbit (no planet to anchor to) hold the same bearing
        // as the last flyby and use auToSceneDistance() to extrapolate the compressed scale.
        journey: {
            legs: [
                {
                    type: 'flyby',
                    body: 'Jupiter',
                    date: '1979-03-05',
                    dateLabel: 'March 5, 1979',
                    note: 'Closest approach 12:05 UT, passing within about 349,000 km of Jupiter\'s center. Discovered active volcanoes on Io and two new moons, Thebe and Metis.'
                },
                {
                    type: 'flyby',
                    body: 'Saturn',
                    date: '1980-11-12',
                    dateLabel: 'November 12, 1980',
                    note: 'Closest approach 23:46 UT, passing about 124,000 km above Saturn\'s cloud tops. A close flyby of the moon Titan bent the trajectory north out of the plane of the planets, ending any chance of visiting Uranus or Neptune.'
                },
                {
                    type: 'outbound',
                    label: 'Crossed the heliopause',
                    date: '2012-08-25',
                    dateLabel: 'August 25, 2012',
                    distanceAU: 121.7, // backward-computed from the sourced Aug 2024 anchor + rate below, consistent with commonly cited ~121 AU
                    note: 'Left the heliosphere — the bubble of solar wind and magnetic field blown out by the Sun — and became the first human-made object to enter true interstellar space.'
                }
            ],
            current: {
                referenceDate: '2024-08-21',
                referenceDistanceAU: 164.7,
                velocityKmS: 17.0,
                sourceNote: 'NASA JPL, as of Aug 21, 2024: 164.7 AU from Earth, moving at 17.0 km/s relative to the Sun (~3.59 AU/year).'
            }
        }
    },
    {
        id: 'voyager-2',
        name: 'Voyager 2',
        agency: 'NASA (USA)',
        target: 'Outer planets',
        type: 'Flyby / interstellar probe',
        year: 1977,
        status: 'Operational',
        description: 'Only spacecraft to have visited Uranus and Neptune.',
        radialDistance: 120, // scaled distance from Sun (legacy static marker; superseded by journey.current for the Trace Journey view)
        polarAngleDeg: 40,
        azimuthDeg: -60,
        flightPath: {
            launchSite: { lat: 28.583, lon: -80.583 }, // Cape Canaveral, Launch Complex 41
            launchDateLabel: 'August 20, 1977 · 10:29 AM EDT',
            outcome: 'success',
            successNote: 'Launched first of the two Voyagers, on a slower path that took advantage of a rare planetary alignment to visit all four giant planets. It remains the only spacecraft to have flown past Uranus and Neptune.'
        },
        journey: {
            legs: [
                {
                    type: 'flyby',
                    body: 'Jupiter',
                    date: '1979-07-09',
                    dateLabel: 'July 9, 1979',
                    note: 'Passed within about 570,000 km of Jupiter\'s cloud tops, four months after Voyager 1, confirming several of its twin\'s discoveries and returning new views of the Great Red Spot.'
                },
                {
                    type: 'flyby',
                    body: 'Saturn',
                    date: '1981-08-25',
                    dateLabel: 'August 25, 1981',
                    note: 'Passed about 101,000 km from Saturn, deliberately aimed to bend its path onward toward Uranus — a trajectory only possible because of the rare outer-planet alignment of the late 1970s and 1980s.'
                },
                {
                    type: 'flyby',
                    body: 'Uranus',
                    date: '1986-01-24',
                    dateLabel: 'January 24, 1986',
                    note: 'Passed within about 81,500 km of Uranus\'s cloud tops — the only spacecraft ever to visit the planet. Discovered 10 new moons and 2 new rings.'
                },
                {
                    type: 'flyby',
                    body: 'Neptune',
                    date: '1989-08-25',
                    dateLabel: 'August 25, 1989',
                    note: 'The grand finale of the primary mission: passed just 4,951 km above Neptune\'s north pole, the closest flyby of any planet in the Voyager program, then dove south over Triton before heading out of the solar system.'
                },
                {
                    type: 'outbound',
                    label: 'Crossed the heliopause',
                    date: '2018-11-05',
                    dateLabel: 'November 5, 2018',
                    distanceAU: 119.7, // NASA / Wikipedia, sourced at the crossing itself
                    note: 'Became the second human-made object, after Voyager 1, to leave the heliosphere and enter interstellar space — this time with a working plasma instrument still returning data, which Voyager 1\'s no longer had.'
                }
            ],
            current: {
                referenceDate: '2012-09-09',
                referenceDistanceAU: 99.504, // from the Sun (NASA), same source date also gives velocity below
                velocityKmS: 15.436,
                sourceNote: 'NASA JPL, as of Sept 9, 2012: 99.504 AU from the Sun, moving at 15.436 km/s relative to the Sun (~3.26 AU/year).'
            }
        }
    },
    {
        id: 'pioneer-10',
        name: 'Pioneer 10',
        agency: 'NASA (USA)',
        target: 'Jupiter / outer solar system',
        type: 'Flyby probe',
        year: 1972,
        status: 'Mission complete',
        description: 'First spacecraft to travel through the asteroid belt and make direct observations of Jupiter.',
        radialDistance: 80,
        polarAngleDeg: 30,
        azimuthDeg: 120,
        flightPath: {
            launchSite: { lat: 28.484, lon: -80.542 }, // Cape Canaveral, Launch Complex 36A
            launchDateLabel: 'March 2, 1972 · 8:49 PM EST',
            outcome: 'success',
            successNote: 'Launched on an Atlas-Centaur with a solid third stage, reaching the highest velocity of any human-made object at that time — enough to cross the Moon\'s orbit in just 11 hours. It became the first spacecraft to cross the asteroid belt and fly past Jupiter.'
        },
        // Unlike Voyager, NASA lost contact with Pioneer 10 in 2003 — its current
        // position below is an honest extrapolation from the last confirmed tracking
        // data, not an actively-tracked live figure. Noted explicitly in the final leg.
        journey: {
            legs: [
                {
                    type: 'flyby',
                    body: 'Jupiter',
                    date: '1973-12-03',
                    dateLabel: 'December 3, 1973',
                    note: 'Passed within about 132,000 km of Jupiter\'s cloud tops — humanity\'s first close look at the largest planet, and the first use of a planet\'s gravity to reach solar-system escape velocity.'
                },
                {
                    type: 'outbound',
                    label: 'Crossed Pluto\'s orbit',
                    date: '1983-06-13',
                    dateLabel: '1983',
                    distanceAU: 39.48, // Pluto's own real distance, already an anchor in this app's own scale
                    note: 'Became the first human-made object to travel beyond the orbits of all the known planets.'
                },
                {
                    type: 'outbound',
                    label: 'Last signal received',
                    date: '2003-01-23',
                    dateLabel: 'January 23, 2003',
                    distanceAU: 79.55, // 11.9 billion km, NASA's own last-contact figure
                    note: 'NASA\'s Deep Space Network heard Pioneer 10\'s last faint signal, 30 years and 10 months after launch — far outliving its planned 21-month mission. A follow-up attempt two weeks later heard nothing; the spacecraft\'s plutonium power source had finally decayed too far to transmit.'
                }
            ],
            current: {
                referenceDate: '1997-12-01',
                referenceDistanceAU: 68.85,
                velocityKmS: 12.24,
                sourceNote: 'Extrapolated, not tracked: NASA lost contact in 2003. Last confirmed NASA distance/velocity reading, Dec 1, 1997: 68.85 AU from the Sun at 12.24 km/s (~2.58 AU/year). Position below assumes that heading and speed have held steady since — unlike Voyager, no one has actually checked in over two decades.'
            }
        }
    },
    {
        id: 'cassini-huygens',
        name: 'Cassini–Huygens',
        agency: 'NASA / ESA / ASI',
        target: 'Saturn & Titan',
        type: 'Orbiter & lander',
        year: 1997,
        status: 'Mission complete (Grand Finale plunge in 2017).',
        description: 'Revealed Saturn\'s rings, moons, and delivered the Huygens probe to Titan.',
        attachTo: 'Saturn',
        radialOffset: 3.0,
        angleDeg: -45,
        flightPath: {
            launchSite: { lat: 28.562, lon: -80.577 }, // Cape Canaveral, Launch Complex 40
            launchDateLabel: 'October 15, 1997 · 4:43 AM EDT',
            outcome: 'success',
            successNote: 'Launched on a Titan IVB/Centaur, the most powerful US rocket flying at the time, carrying the largest interplanetary probe ever built. It took a nearly 7-year, multi-planet gravity-assist route through Venus and Jupiter before entering orbit around Saturn in 2004.'
        }
    },
    {
        id: 'juno',
        name: 'Juno',
        agency: 'NASA (USA)',
        target: 'Jupiter',
        type: 'Orbiter',
        year: 2011,
        status: 'Operational',
        description: 'Studies Jupiter\'s composition, gravity field, and magnetosphere.',
        attachTo: 'Jupiter',
        radialOffset: 3.0,
        angleDeg: 60,
        flightPath: {
            launchSite: { lat: 28.583, lon: -80.583 }, // Cape Canaveral, Space Launch Complex 41
            launchDateLabel: 'August 5, 2011 · 12:25 PM EDT',
            outcome: 'success',
            successNote: 'Launched on an Atlas V, the first solar-powered spacecraft sent to Jupiter — previous outer-planet missions relied on plutonium generators. Its three enormous solar arrays span the size of a basketball court.'
        }
    },
    {
        id: 'new-horizons',
        name: 'New Horizons',
        agency: 'NASA (USA)',
        target: 'Pluto & Kuiper Belt',
        type: 'Flyby probe',
        year: 2006,
        status: 'Extended mission in Kuiper Belt.',
        description: 'First spacecraft to explore Pluto and its moons, now exploring Kuiper Belt objects.',
        radialDistance: 90,
        polarAngleDeg: 70,
        azimuthDeg: -20,
        flightPath: {
            launchSite: { lat: 28.583, lon: -80.583 }, // Cape Canaveral, Launch Complex 41
            launchDateLabel: 'January 19, 2006 · 2:00 PM EST',
            outcome: 'success',
            successNote: 'Launched on the fastest rocket combination ever flown — an Atlas V with a solid kick stage — leaving Earth faster than any spacecraft before it and passing the Moon\'s orbit in just 9 hours. It reached Pluto after a 9.5-year cruise in July 2015.'
        },
        journey: {
            legs: [
                {
                    type: 'flyby',
                    body: 'Jupiter',
                    date: '2007-02-28',
                    dateLabel: 'February 28, 2007',
                    note: 'A gravity-assist flyby, passing about 2.3 million km from Jupiter — not a science target in itself, but the boost that cut the trip to Pluto from 14 years down to under 10.'
                },
                {
                    type: 'flyby',
                    body: 'Pluto',
                    date: '2015-07-14',
                    dateLabel: 'July 14, 2015',
                    note: 'Closest approach 11:49:57 UT, passing about 12,500 km from Pluto\'s surface — the first-ever close look at the dwarf planet, revealing water-ice mountains and nitrogen-ice plains after a 9.5-year journey.'
                },
                {
                    type: 'outbound',
                    label: 'Arrokoth flyby',
                    date: '2019-01-01',
                    dateLabel: 'January 1, 2019',
                    distanceAU: 45.1, // ~6.75 billion km from the Sun (6.6bn km from Earth + ~1 AU), per NASA/JPL
                    note: 'Passed just 3,500 km from the Kuiper Belt object Arrokoth — the most distant object any spacecraft has ever explored up close, a frozen relic unchanged since the solar system\'s formation.'
                },
                {
                    type: 'outbound',
                    label: '60 AU milestone',
                    date: '2024-10-01',
                    dateLabel: 'October 1, 2024',
                    distanceAU: 60,
                    note: 'Passed 60 times Earth\'s distance from the Sun — twice as far out as Pluto was at the 2015 flyby — still healthy and returning data from the Kuiper Belt.'
                }
            ],
            current: {
                referenceDate: '2024-10-01',
                referenceDistanceAU: 60,
                velocityKmS: 15.2,
                sourceNote: 'NASA JPL: passed 60 AU on Oct 1, 2024, traveling at roughly 300 million miles (~480 million km) per year (~15.2 km/s). Still active and tracked, unlike Pioneer 10.'
            }
        }
    },
    // Sample missions from other agencies
    {
        id: 'hayabusa2',
        name: 'Hayabusa2',
        agency: 'JAXA (Japan)',
        target: 'Asteroid Ryugu',
        type: 'Sample return',
        year: 2014,
        status: 'Sample returned to Earth in 2020.',
        description: 'Brought samples from asteroid Ryugu to Earth.',
        radialDistance: 50,
        polarAngleDeg: 80,
        azimuthDeg: 10,
        flightPath: {
            launchSite: { lat: 30.4022, lon: 130.975 }, // Tanegashima Space Center, Yoshinobu Launch Complex
            launchDateLabel: 'December 3, 2014 · 04:22:04 UTC',
            outcome: 'success',
            successNote: 'Launched on an H-IIA rocket, the successor to Japan\'s first asteroid sample-return mission, Hayabusa. It rendezvoused with asteroid Ryugu in 2018, fired a copper projectile to collect subsurface material, and returned samples to Earth in December 2020.'
        }
    },
    {
        id: 'rosetta',
        name: 'Rosetta / Philae',
        agency: 'ESA (Europe)',
        target: 'Comet 67P/Churyumov–Gerasimenko',
        type: 'Comet orbiter & lander',
        year: 2004,
        status: 'Mission complete.',
        description: 'First spacecraft to orbit a comet and deploy a lander (Philae).',
        radialDistance: 65,
        polarAngleDeg: 100,
        azimuthDeg: 150,
        flightPath: {
            launchSite: { lat: 5.239, lon: -52.768 }, // Guiana Space Centre, ELA-3
            launchDateLabel: 'March 2, 2004 · 07:17 UTC',
            outcome: 'success',
            successNote: 'Launched on an Ariane 5 after a year\'s delay caused by a different Ariane 5 failure. Reached comet 67P/Churyumov–Gerasimenko in 2014 after a 10-year, 6.4-billion-km journey using four gravity-assist flybys, then released the Philae lander for the first-ever soft landing on a comet nucleus.'
        }
    },
    {
        id: 'parker-solar-probe',
        name: 'Parker Solar Probe',
        agency: 'NASA (USA)',
        target: 'The Sun',
        type: 'Solar probe',
        year: 2018,
        status: 'Operational',
        description: 'Closest-ever spacecraft to the Sun; studies the solar corona and solar wind.',
        radialDistance: 8,
        polarAngleDeg: 15,
        azimuthDeg: 200,
        flightPath: {
            launchSite: { lat: 28.532, lon: -80.567 }, // Cape Canaveral, Space Launch Complex 37B
            launchDateLabel: 'August 12, 2018 · 3:31 AM EDT',
            outcome: 'success',
            successNote: 'Launched on a Delta IV Heavy, one of the most powerful rockets ever flown, needed to shed most of Earth\'s orbital speed so the probe could fall toward the Sun rather than orbit it. It has since become the fastest human-made object ever built, exceeding 690,000 km/h during close solar passes.'
        }
    },
    {
        id: 'insight',
        name: 'InSight',
        agency: 'NASA (USA)',
        target: 'Mars',
        type: 'Lander',
        year: 2018,
        status: 'Mission complete (end of 2022).',
        description: 'Studied Mars interior (seismology, heat flow).',
        orbitalRadiusOffset: 0.15,
        alongOrbitDeg: -95,
        flightPath: {
            launchSite: { lat: 34.632, lon: -120.611 }, // Vandenberg Air Force Base, Space Launch Complex 3E
            launchDateLabel: 'May 5, 2018 · 4:05 AM PDT',
            outcome: 'success',
            successNote: 'Launched on an Atlas V from Vandenberg on the US West Coast — the first interplanetary mission ever launched from there instead of Florida. It landed on Elysium Planitia on November 26, 2018, and used a seismometer and heat probe to study Mars\'s deep interior for the first time.'
        }
    },
    {
        id: 'osiris-rex',
        name: 'OSIRIS-REx',
        agency: 'NASA (USA)',
        target: 'Asteroid Bennu',
        type: 'Sample return',
        year: 2016,
        status: 'Sample delivered to Earth 2023.',
        description: 'Collected samples from asteroid Bennu and returned them to Earth.',
        radialDistance: 45,
        polarAngleDeg: 60,
        azimuthDeg: 80,
        flightPath: {
            launchSite: { lat: 28.583, lon: -80.583 }, // Cape Canaveral, Space Launch Complex 41
            launchDateLabel: 'September 8, 2016 · 7:05 PM EDT',
            outcome: 'success',
            successNote: 'Launched on an Atlas V toward asteroid Bennu, arriving in 2018. Its Touch-And-Go sample arm briefly touched the surface in 2020, firing nitrogen gas to kick up debris for collection — grabbing so much material it wedged a sample-return lid partly open. Samples reached Earth in September 2023.'
        }
    }
];

// Learn-more links for every selectable (Wikipedia / official). Key by name for bodies, by id for missions.
const BODY_LINKS = {
    'The Sun': 'https://en.wikipedia.org/wiki/Sun',
    'Mercury': 'https://en.wikipedia.org/wiki/Mercury_(planet)',
    'Venus': 'https://en.wikipedia.org/wiki/Venus',
    'Earth': 'https://en.wikipedia.org/wiki/Earth',
    'Mars': 'https://en.wikipedia.org/wiki/Mars',
    'Jupiter': 'https://en.wikipedia.org/wiki/Jupiter',
    'Saturn': 'https://en.wikipedia.org/wiki/Saturn',
    'Uranus': 'https://en.wikipedia.org/wiki/Uranus',
    'Neptune': 'https://en.wikipedia.org/wiki/Neptune',
    'Moon': 'https://en.wikipedia.org/wiki/Moon',
    'Phobos': 'https://en.wikipedia.org/wiki/Phobos_(moon)',
    'Deimos': 'https://en.wikipedia.org/wiki/Deimos_(moon)',
    'Io': 'https://en.wikipedia.org/wiki/Io_(moon)',
    'Europa': 'https://en.wikipedia.org/wiki/Europa_(moon)',
    'Ganymede': 'https://en.wikipedia.org/wiki/Ganymede_(moon)',
    'Titan': 'https://en.wikipedia.org/wiki/Titan_(moon)',
    'Rhea': 'https://en.wikipedia.org/wiki/Rhea_(moon)',
    'Titania': 'https://en.wikipedia.org/wiki/Titania_(moon)',
    'Triton': 'https://en.wikipedia.org/wiki/Triton_(moon)',
    'Pluto': 'https://en.wikipedia.org/wiki/Pluto',
    'Ceres': 'https://en.wikipedia.org/wiki/Ceres_(dwarf_planet)',
    'Callisto': 'https://en.wikipedia.org/wiki/Callisto_(moon)',
    'Enceladus': 'https://en.wikipedia.org/wiki/Enceladus'
};
const MISSION_LINKS = {
    'sputnik-1': 'https://en.wikipedia.org/wiki/Sputnik_1',
    'apollo-11': 'https://en.wikipedia.org/wiki/Apollo_11',
    'apollo-12': 'https://en.wikipedia.org/wiki/Apollo_12',
    'apollo-13': 'https://en.wikipedia.org/wiki/Apollo_13',
    'apollo-14': 'https://en.wikipedia.org/wiki/Apollo_14',
    'apollo-15': 'https://en.wikipedia.org/wiki/Apollo_15',
    'apollo-16': 'https://en.wikipedia.org/wiki/Apollo_16',
    'apollo-17': 'https://en.wikipedia.org/wiki/Apollo_17',
    'luna-2': 'https://en.wikipedia.org/wiki/Luna_2',
    'luna-9': 'https://en.wikipedia.org/wiki/Luna_9',
    'luna-15': 'https://en.wikipedia.org/wiki/Luna_15',
    'chang-e-3': 'https://en.wikipedia.org/wiki/Chang%27e_3',
    'chang-e-4': 'https://en.wikipedia.org/wiki/Chang%27e_4',
    'chandrayaan-2': 'https://en.wikipedia.org/wiki/Chandrayaan-2',
    'iss': 'https://en.wikipedia.org/wiki/International_Space_Station',
    'hubble': 'https://en.wikipedia.org/wiki/Hubble_Space_Telescope',
    'jwst': 'https://en.wikipedia.org/wiki/James_Webb_Space_Telescope',
    'viking-1': 'https://en.wikipedia.org/wiki/Viking_1',
    'venera-7': 'https://en.wikipedia.org/wiki/Venera_7',
    'mars-climate-orbiter': 'https://en.wikipedia.org/wiki/Mars_Climate_Orbiter',
    'sojourner': 'https://en.wikipedia.org/wiki/Mars_Pathfinder',
    'spirit': 'https://en.wikipedia.org/wiki/Spirit_(rover)',
    'opportunity': 'https://en.wikipedia.org/wiki/Opportunity_(rover)',
    'curiosity': 'https://en.wikipedia.org/wiki/Curiosity_(rover)',
    'perseverance': 'https://en.wikipedia.org/wiki/Perseverance_(rover)',
    'voyager-1': 'https://en.wikipedia.org/wiki/Voyager_1',
    'voyager-2': 'https://en.wikipedia.org/wiki/Voyager_2',
    'pioneer-10': 'https://en.wikipedia.org/wiki/Pioneer_10',
    'cassini-huygens': 'https://en.wikipedia.org/wiki/Cassini%E2%80%93Huygens',
    'juno': 'https://en.wikipedia.org/wiki/Juno_(spacecraft)',
    'new-horizons': 'https://en.wikipedia.org/wiki/New_Horizons',
    'hayabusa2': 'https://en.wikipedia.org/wiki/Hayabusa2',
    'rosetta': 'https://en.wikipedia.org/wiki/Rosetta_(spacecraft)',
    'parker-solar-probe': 'https://en.wikipedia.org/wiki/Parker_Solar_Probe',
    'insight': 'https://en.wikipedia.org/wiki/InSight',
    'osiris-rex': 'https://en.wikipedia.org/wiki/OSIRIS-REx'
};

// How it works / brief history for spacecraft (shown in detail modal when double-clicking a craft in the scene)
const MISSION_HOW_IT_WORKS = {
    'iss': 'Orbiting: The station is in free fall around Earth—constantly falling toward the planet but moving so fast sideways that it keeps missing and goes round and round. That\'s why astronauts float: they\'re weightless.',
    'hubble': 'Orbiting: Hubble circles Earth in free fall. Its speed (about 7.5 km/s) balances gravity, so it stays in orbit and can stare at the universe without Earth\'s atmosphere in the way.',
    'jwst': 'At Sun–Earth L2: James Webb orbits a point 1.5 million km beyond Earth, where the Sun and Earth stay in one direction so the telescope can stay cold and observe the early universe in infrared.',
    'sputnik-1': 'Orbiting: The first artificial satellite stayed in orbit by moving fast enough that its fall toward Earth matched the curve of the planet—so it kept missing the ground and went around every 96 minutes.',
    'juno': 'Orbiting Jupiter: Juno loops around Jupiter on a polar orbit, diving close to study the planet\'s gravity, magnetic field, and deep structure while avoiding the harshest radiation.',
    'cassini-huygens': 'Orbiting Saturn: Cassini orbited Saturn for 13 years; the Huygens probe landed on Titan. Orbit works the same everywhere: fall toward the planet, move fast sideways, go round and round.',
    'curiosity': 'On Mars: The rover landed and drives on the surface. It doesn\'t orbit—it explores the ground, taking pictures and drilling samples to look for signs of past habitability.',
    'perseverance': 'On Mars: Like Curiosity, Perseverance is a surface rover. It landed in Jezero Crater to search for ancient life and cache samples for future return to Earth.',
    'voyager-1': 'Deep space: Launched in 1977, Voyager 1 flew past Jupiter and Saturn and is now in interstellar space. It\'s still moving fast enough that the Sun\'s gravity barely slows it—it won\'t "fall back."',
    'voyager-2': 'Deep space: The only spacecraft to visit Uranus and Neptune, Voyager 2 is also in interstellar space, returning data from beyond the heliosphere.',
    'new-horizons': 'Flyby then deep space: It flew past Pluto in 2015 and is now in the Kuiper Belt. Like the Voyagers, it will keep going—no orbit, just escape from the Sun.',
    'apollo-11': 'Landed on the Moon: The Lunar Module descended to the surface while the Command Module orbited. On the Moon, gravity is weaker, so the same idea—falling and moving—applies to the orbit overhead.',
    'parker-solar-probe': 'Orbiting the Sun: Parker swings close to the Sun in elliptical orbits, using Venus flybys to shrink the orbit. At closest approach it moves fast enough to survive the heat while measuring the corona and solar wind.',
    'insight': 'On Mars: InSight was a lander—it stayed in one place and used a seismometer and heat probe to study the planet\'s interior and quakes.',
    'osiris-rex': 'Asteroid then return: OSIRIS-REx orbited Bennu, touched down to collect samples, then brought them back to Earth in 2023.',
    'viking-1': 'On Mars: Viking 1 consisted of an orbiter and a lander. The lander touched down in 1976 and took the first soil samples on Mars; the orbiter imaged the surface from above.',
    'spirit': 'On Mars: Spirit was a rover that drove across Gusev Crater for over six years, studying rocks and geology until it got stuck in sand.',
    'opportunity': 'On Mars: Opportunity was a twin rover to Spirit. It explored Meridiani Planum for nearly 15 years—one of the longest-running Mars missions.',
    'venera-7': 'On Venus: Venera 7 was the first probe to successfully land on another planet (1970). It transmitted data from Venus\'s harsh surface for about 23 minutes.'
};
const MISSION_BRIEF_HISTORY = {
    'iss': 'Assembly began in 1998. NASA, Roscosmos, ESA, JAXA, and CSA operate it. It has been continuously crewed since 2000 and is a lab for science and human endurance in space.',
    'hubble': 'Launched in 1990; a faulty mirror was fixed in 1993 by a shuttle crew. Since then it has transformed astronomy with deep images and precise measurements of the universe.',
    'jwst': 'Launched December 2021; reached L2 in January 2022. Now returning images of the early universe, exoplanets, and star formation.',
    'sputnik-1': 'Launched by the Soviet Union on 4 October 1957. It beeped for 21 days and reentered after 92 days, starting the space age and the space race.',
    'juno': 'Arrived at Jupiter in 2016. It studies the planet\'s interior, auroras, and magnetosphere. The mission has been extended into the 2020s.',
    'cassini-huygens': 'Cassini entered Saturn orbit in 2004; Huygens landed on Titan in 2005. Cassini ended in 2017 with a deliberate plunge into Saturn.',
    'voyager-1': 'Launched 1977, passed Jupiter (1979) and Saturn (1980), entered interstellar space in 2012. The most distant human-made object.',
    'voyager-2': 'Launched 1977, visited Jupiter, Saturn, Uranus (1986), and Neptune (1989). Entered interstellar space in 2018.',
    'new-horizons': 'Launched 2006, flew past Pluto and Charon in 2015, then visited Kuiper Belt object Arrokoth in 2019. Still operating in the outer solar system.',
    'parker-solar-probe': 'Launched 2018. Makes repeated close passes of the Sun; will get within about 6 million km. Designed to survive intense heat and radiation.',
    'insight': 'Landed on Mars in 2018. Recorded marsquakes until dust covered its solar panels; mission ended December 2022.',
    'osiris-rex': 'Launched 2016, reached Bennu in 2018, collected samples in 2020, returned to Earth in September 2023.',
    'viking-1': 'Launched 1975, landed on Mars in 1976. The first successful Mars lander; orbiter and lander returned data for years.',
    'spirit': 'Landed on Mars in 2004 with Opportunity. Operated until 2010; found evidence of past water in Gusev Crater.',
    'opportunity': 'Landed 2004, outlived Spirit by many years. Mission ended in 2018 after a global dust storm.',
    'venera-7': 'Soviet probe; landed on Venus on 15 December 1970. First successful soft landing on another planet.'
};

// --- Global Variables for Three.js and Interaction ---
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let currentIntersected = null; 
let selectedBody = null; 

const selectableObjects = []; 
const orbitalBodies = []; 
const orbitLines = [];
const asteroidGroups = [];
const kuiperGroups = [];
const labelPairs = [];
let moonMesh = null;
let earthMesh = null;
const planetOrbitGroupsByName = {};
const spacecraftOrbitBodies = [];

let focusedBody = null;
let surfaceMarkersList = [];
let surfaceMarkerByMissionId = {};

const LAUNCH_SITES = [
    { name: 'Cape Canaveral / KSC', country: 'USA', lat: 28.5, lon: -80.6 },
    { name: 'Baikonur Cosmodrome', country: 'Kazakhstan (Russia)', lat: 45.9, lon: 63.3 },
    { name: 'Vandenberg SFB', country: 'USA', lat: 34.7, lon: -120.6 },
    { name: 'Jiuquan', country: 'China', lat: 40.96, lon: 100.29 },
    { name: 'Tanegashima', country: 'Japan', lat: 30.4, lon: 130.97 },
    { name: 'Plesetsk', country: 'Russia', lat: 62.93, lon: 40.57 },
    { name: 'Guiana Space Centre', country: 'France/ESA', lat: 5.24, lon: -52.77 },
    { name: 'Satish Dhawan (Sriharikota)', country: 'India', lat: 13.72, lon: 80.23 }
];

const selectionDisplay = document.getElementById('selection-display');
const detailModal = document.getElementById('detail-modal');
const detailBody = document.getElementById('detail-body');
const detailCloseBtn = document.getElementById('detail-close');
const focusOverlay = document.getElementById('focus-overlay');
const bodyModal = document.getElementById('body-modal');
const bodyModalCloseBtn = document.getElementById('body-modal-close');
const modalGlobeView = document.getElementById('modal-globe-view');
const modalMarkerTooltip = document.getElementById('modal-marker-tooltip');
const textureLoader = new THREE.TextureLoader();
(function () {
    var base = window.location.origin + window.location.pathname;
    if (!base.endsWith('/')) base += '/';
    textureLoader.setPath(base);
})();
function setHighResTexture(tex) {
    try {
        if (!tex) return;
        var maxAniso = 16;
        if (renderer.capabilities && typeof renderer.capabilities.getMaxAnisotropy === 'function')
            maxAniso = renderer.capabilities.getMaxAnisotropy();
        tex.anisotropy = maxAniso;
        tex.minFilter = THREE.LinearMipmapLinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.generateMipmaps = true;
    } catch (e) { /* never break texture load */ }
}

let modalRenderer = null;
let modalCamera = null;
let modalZoomDistance = 3;
let modalAngle = 0;
const MODAL_ZOOM_MIN = 1.5;
const MODAL_ZOOM_MAX = 12;

const PREFERS_REDUCED_MOTION = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Animation / controls state
let animationPaused = !!PREFERS_REDUCED_MOTION;
let speedMultiplier = 1;
let showLabels = true;
let cameraTransition = null;
let textureLoadCount = 0;
let textureLoadTotal = 11;

// Store initial camera state for reset function
const INITIAL_CAMERA_POSITION = new THREE.Vector3(0, 0, 70);
const INITIAL_CONTROLS_TARGET = new THREE.Vector3(0, 0, 0);
const REALTIME_EPOCH_MS = new Date('2020-01-01').getTime();

function finishTextureLoad() {
    textureLoadCount++;
    var overlay = document.getElementById('loading-overlay');
    if (overlay && textureLoadCount >= textureLoadTotal) {
        overlay.classList.add('loaded');
    }
}
setTimeout(function () {
    var o = document.getElementById('loading-overlay');
    if (o && !o.classList.contains('loaded')) o.classList.add('loaded');
}, 6000);

// --- 1. SETUP ---

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Re-upload textures after WebGL context restore (e.g. tab backgrounded then restored)
renderer.domElement.addEventListener('webglcontextrestored', function () {
    scene.traverse(function (obj) {
        if (obj.material) {
            var m = Array.isArray(obj.material) ? obj.material : [obj.material];
            m.forEach(function (mat) {
                if (mat.map) mat.map.needsUpdate = true;
            });
        }
    });
}, false);

// Set camera to initial position
camera.position.copy(INITIAL_CAMERA_POSITION); 

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
// Set control target to initial target (the Sun)
controls.target.copy(INITIAL_CONTROLS_TARGET); 


// Lighting
const ambientLight = new THREE.AmbientLight(0x333333); 
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xFFFFFF, 3, 500); 
pointLight.position.set(0, 0, 0); 
scene.add(pointLight);


// --- 2. UTILITY FUNCTIONS ---

function calculateDistanceInfo(data) {
    const distLY_Sun = data.distanceAU * AU_TO_LY;
    
    const earthAU = 1.0; 
    const distanceAUFromEarth = Math.abs(data.distanceAU - earthAU);
    const distLY_Earth = distanceAUFromEarth * AU_TO_LY;

    let sunDistText = `${data.distanceAU} AU / ${distLY_Sun.toPrecision(5)} LY`;
    let earthDistText = `${distLY_Earth.toPrecision(5)} LY (approx)`;

    if (data.type === 'Moon') {
        const parentDistLY = data.parentAU * AU_TO_LY;
        sunDistText = `${data.parentAU} AU (approx) / ${parentDistLY.toPrecision(5)} LY`;
        earthDistText = "Too close to Earth to measure in Light Years.";
    } else if (data.type === 'Star') {
        sunDistText = "N/A (Center of System)";
        earthDistText = "N/A (Center of System)";
    }

    return { sunDistText, earthDistText };
}

var starMesh = null;
var starMaterial = null;
function createStarfield() {
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 18000;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
        const r = 350 + Math.random() * 100;
        const theta = 2 * Math.PI * Math.random();
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = r * Math.cos(theta) * Math.sin(phi);
        positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
        positions[i * 3 + 2] = r * Math.cos(phi);
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.12, transparent: true, opacity: 0.9 });
    starMesh = new THREE.Points(starGeometry, starMaterial);
    scene.add(starMesh);
}

function createOrbitLine(distance, dimmer) {
    const tubeRadius = 0.005;
    const radialSegments = 128;
    const geometry = new THREE.RingGeometry(distance, distance + tubeRadius, radialSegments);
    const material = new THREE.MeshBasicMaterial({
        color: dimmer ? 0x222222 : 0x333333,
        transparent: true,
        opacity: dimmer ? 0.6 : 0.9,
        side: THREE.DoubleSide
    });
    const orbitRing = new THREE.Mesh(geometry, material);
    orbitRing.userData = { distance: distance, dimmer: !!dimmer };
    orbitRing.rotation.x = Math.PI / 2;
    scene.add(orbitRing);
    orbitLines.push(orbitRing);
    return orbitRing;
}

// Function handles missing textures gracefully (solid color fallback + onError). Higher segments + material for more realistic look.
function createTexturedBody(data, isSun = false) {
    const segments = 64;
    const geometry = new THREE.SphereGeometry(data.radius, segments, segments);
    const fallbackColor = data.color || (isSun ? 0xFFA500 : 0xAAAAAA);

    let material;
    if (isSun) {
        material = new THREE.MeshBasicMaterial({ color: fallbackColor });
        textureLoader.load(data.texture, function (tex) { setHighResTexture(tex); material.map = tex; material.color.setHex(0xffffff); material.needsUpdate = true; finishTextureLoad(); }, undefined, function () { finishTextureLoad(); });
    } else if (data.texture) {
        material = new THREE.MeshStandardMaterial({
            color: fallbackColor,
            roughness: 0.85,
            metalness: 0.05
        });
        textureLoader.load(data.texture, function (tex) {
            setHighResTexture(tex);
            material.map = tex;
            material.roughness = 0.8;
            material.metalness = 0.05;
            material.needsUpdate = true;
            finishTextureLoad();
        }, undefined, function () { finishTextureLoad(); });
    } else {
        material = new THREE.MeshStandardMaterial({
            color: fallbackColor,
            roughness: 0.85,
            metalness: 0.05
        });
    }

    const body = new THREE.Mesh(geometry, material);
    var r = data.radius;
    var highlightRing = new THREE.Mesh(
        new THREE.RingGeometry(r * 1.02, r * 1.06, 32),
        new THREE.MeshBasicMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false })
    );
    highlightRing.rotation.x = Math.PI / 2;
    highlightRing.name = 'highlight';
    highlightRing.visible = false;
    body.add(highlightRing);
    body.userData = {
        name: data.name,
        type: data.type || 'Planet',
        distanceAU: data.distanceAU || 0,
        parentAU: data.parentAU || 0,
        info: data.info || '',
        distanceSU: data.distance || 0,
        parentName: data.parentName || 'Sun',
        radius: data.radius || 0,
        radiusKm: data.radiusKm || null,
        orbitalPeriodDays: data.orbitalPeriodDays || null,
        orbitalPeriodYears: data.orbitalPeriodYears || null,
        agency: data.agency || null,
        missionType: data.missionType || null
    }; 
    selectableObjects.push(body);
    
    return body;
}

function createRings(planetMesh, texturePath) {
    const innerRadius = 1.5;
    const outerRadius = 2.5;
    const segments = 64;

    const ringGeometry = new THREE.RingGeometry(innerRadius, outerRadius, segments);
    const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x8B7355,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7
    });
    textureLoader.load(texturePath, function (tex) { setHighResTexture(tex); ringMaterial.map = tex; ringMaterial.needsUpdate = true; finishTextureLoad(); }, undefined, function () { finishTextureLoad(); });

    const rings = new THREE.Mesh(ringGeometry, ringMaterial);
    rings.rotation.x = Math.PI / 2;
    rings.rotation.y = Math.PI / 8;
    planetMesh.add(rings);
}

// Create a small floating text label sprite for a body
function createLabelSprite(text) {
    const canvas = document.createElement('canvas');
    const size = 256;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, size, size);
    ctx.font = '28px "Segoe UI", system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(15,23,42,0.65)';
    ctx.strokeStyle = 'rgba(148,163,184,0.75)';
    ctx.lineWidth = 4;

    const cx = size / 2;
    const cy = size / 2;
    const paddingX = 8;
    const paddingY = 6;
    const textMetrics = ctx.measureText(text);
    const w = textMetrics.width + paddingX * 2;
    const h = 34 + paddingY * 2;

    ctx.beginPath();
    if (ctx.roundRect) {
        ctx.roundRect(cx - w / 2, cy - h / 2, w, h, 10);
    } else {
        ctx.rect(cx - w / 2, cy - h / 2, w, h);
    }
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#e5e7eb';
    ctx.fillText(text, cx, cy + 2);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: true });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(4, 2, 1);

    return sprite;
}

function displayBodyInfo(data, mesh) {
    const { sunDistText, earthDistText } = calculateDistanceInfo(data);
    
    const orbitalDays = data.orbitalPeriodDays;
    const orbitalYears = data.orbitalPeriodYears;
    const radiusKm = data.radiusKm;
    const agency = data.agency;
    const missionType = data.missionType;
    const launchYear = data.year || data.launchYear;

    let typeLabel = data.type || 'Body';
    if (data.type === 'Moon') {
        typeLabel = 'Moon';
    } else if (data.type === 'Star') {
        typeLabel = 'Star';
    } else if (missionType) {
        typeLabel = missionType;
    }

    let infoText = `<strong>${data.name}</strong><br>${typeLabel}`;

    if (agency) {
        infoText += ` • ${agency}`;
    }
    if (launchYear) {
        infoText += ` • Launched: ${launchYear}`;
    }

    if (data.type === 'Star') {
        if (data.info) {
            infoText += `<br>${data.info}`;
        }
    } else if (data.type === 'Moon') {
        infoText += `<br>Orbits: ${data.parentName}`;
        if (data.info) {
            infoText += `<br>${data.info}`;
        }
    } else if (missionType) {
        if (data.info) {
            infoText += `<br>${data.info}`;
        }
        if (data.status) {
            infoText += `<br>Status: ${data.status}`;
        }
    } else if (data.info) {
        infoText += `<br>${data.info}`;
    }

    if (radiusKm) {
        infoText += `<br>Radius: ${radiusKm.toLocaleString()} km`;
    }

    if (orbitalDays || orbitalYears) {
        const orbitalParts = [];
        if (orbitalDays) {
            orbitalParts.push(`${orbitalDays.toLocaleString()} days`);
        }
        if (orbitalYears) {
            orbitalParts.push(`${orbitalYears} years`);
        }
        if (orbitalParts.length > 0) {
            infoText += `<br>Orbital period: ${orbitalParts.join(" / ")}`;
        }
    }

    if (!missionType) {
        infoText += `<br>Dist. from Sun: ${sunDistText}`;
        infoText += `<br>Dist. from Earth: ${earthDistText}`;
    }
    if (mesh && camera) {
        var wp = new THREE.Vector3();
        mesh.getWorldPosition(wp);
        var viewDist = camera.position.distanceTo(wp);
        var viewAU = (viewDist / 8).toFixed(1);
        infoText += `<br>View dist.: ~${viewAU} AU`;
    }
    selectionDisplay.innerHTML = infoText;
}

// Build HTML for the detail modal (study view)
function buildDetailContent(data) {
    if (!data) return '';
    const name = data.name || 'Unknown';
    const typeLabel = data.type || 'Body';
    let html = `<h2>${name}</h2><p class="detail-type">${typeLabel}</p>`;
    if (data.missionType && data.parentName) {
        const siteLabel = data.parentName === 'Moon' ? 'Lunar site' : data.parentName === 'Earth' ? 'Earth orbit' : data.parentName;
        html += `<p class="detail-site"><strong>Site:</strong> ${siteLabel} — ${data.missionType}</p>`;
    }
    if (data.agency) html += `<p><strong>Agency:</strong> ${data.agency}</p>`;
    if (data.year || data.launchYear) html += `<p><strong>Launch year:</strong> ${data.year || data.launchYear}</p>`;
    if (data.status) html += `<p><strong>Status:</strong> ${data.status}</p>`;
    if (data.info) html += `<div class="detail-section">${data.info}</div>`;
    if (data.radiusKm) html += `<p><strong>Radius:</strong> ${data.radiusKm.toLocaleString()} km</p>`;
    if (data.orbitalPeriodDays || data.orbitalPeriodYears) {
        const parts = [];
        if (data.orbitalPeriodDays) parts.push(`${data.orbitalPeriodDays.toLocaleString()} days`);
        if (data.orbitalPeriodYears) parts.push(`${data.orbitalPeriodYears} years`);
        html += `<p><strong>Orbital period:</strong> ${parts.join(' / ')}</p>`;
    }
    if (data.distanceAU !== undefined && data.type !== 'Star' && !data.missionType) {
        const { sunDistText, earthDistText } = calculateDistanceInfo(data);
        html += `<p><strong>Distance from Sun:</strong> ${sunDistText}</p>`;
        html += `<p><strong>Distance from Earth:</strong> ${earthDistText}</p>`;
    }
    if (data.parentName && data.type === 'Moon') html += `<p><strong>Orbits:</strong> ${data.parentName}</p>`;
    const link = data.url || BODY_LINKS[data.name] || (data.id && MISSION_LINKS[data.id]);
    if (link) html += `<p class="detail-link"><a href="${link}" target="_blank" rel="noopener noreferrer">Learn more →</a></p>`;
    return html;
}

function buildSpacecraftDetailContent(mission) {
    if (!mission) return '';
    const name = mission.name || 'Spacecraft';
    let html = `<h2>${name}</h2><p class="detail-type">${mission.type || 'Mission'}</p>`;
    if (mission.agency) html += `<p><strong>Agency:</strong> ${mission.agency}</p>`;
    if (mission.year) html += `<p><strong>Launch year:</strong> ${mission.year}</p>`;
    if (mission.status) html += `<p><strong>Status:</strong> ${mission.status}</p>`;
    if (mission.description) html += `<div class="detail-section">${mission.description}</div>`;
    const howItWorks = (mission.id && MISSION_HOW_IT_WORKS[mission.id])
        || (mission.target === 'Earth' && (mission.altitudeKm != null) && 'Orbiting: The spacecraft is in free fall around Earth—it moves so fast sideways that it keeps missing the planet and goes round and round. That\'s why people on board float (weightlessness).')
        || ((mission.type || '').toLowerCase().indexOf('lander') >= 0 || (mission.type || '').toLowerCase().indexOf('rover') >= 0 ? 'On the surface: the spacecraft landed and operates on the ground, taking images and data.' : '');
    if (howItWorks) html += `<h3 class="detail-subhead">How it works</h3><div class="detail-section">${howItWorks}</div>`;
    const briefHistory = mission.id && MISSION_BRIEF_HISTORY[mission.id];
    if (briefHistory) html += `<h3 class="detail-subhead">Brief history</h3><div class="detail-section">${briefHistory}</div>`;
    const link = mission.id && MISSION_LINKS[mission.id];
    if (link) html += `<p class="detail-link"><a href="${link}" target="_blank" rel="noopener noreferrer">Learn more →</a></p>`;
    return html;
}

function openDetailModal(content, screenX, screenY) {
    if (!detailModal || !detailBody) return;
    detailBody.innerHTML = content;
    const contentEl = detailModal.querySelector('.detail-content');
    detailModal.classList.remove('hidden');
    detailModal.setAttribute('aria-hidden', 'false');
    if (contentEl) {
        contentEl.removeAttribute('style');
        detailModal.classList.remove('detail-modal--beside');
    }
    if (typeof screenX === 'number' && typeof screenY === 'number' && contentEl) {
        const pad = 16;
        const maxW = 520;
        const maxH = 0.85 * window.innerHeight;
        let left = screenX + pad;
        let top = screenY - 40;
        if (left + maxW > window.innerWidth - pad) left = screenX - maxW - pad;
        if (left < pad) left = pad;
        if (top < pad) top = pad;
        if (top + maxH > window.innerHeight - pad) top = window.innerHeight - maxH - pad;
        contentEl.style.left = left + 'px';
        contentEl.style.top = top + 'px';
        contentEl.style.maxWidth = maxW + 'px';
        contentEl.style.maxHeight = maxH + 'px';
        detailModal.classList.add('detail-modal--beside');
    }
}

function closeDetailModal() {
    if (!detailModal) return;
    detailModal.classList.add('hidden');
    detailModal.setAttribute('aria-hidden', 'true');
}

function getZoomDistanceForBody(radius) {
    return Math.max(3, (radius || 0.5) * 5);
}

function latLonToSpherePosition(latDeg, lonDeg, radius) {
    const phi = (90 - latDeg) * Math.PI / 180;
    const theta = (lonDeg + 180) * Math.PI / 180;
    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    return new THREE.Vector3(x, y, z);
}

// Marker colors per body (for mission dots on the globe)
const MARKER_COLOR_BY_BODY = {
    'Earth': 0x60a5fa,
    'Moon': 0xffdd88,
    'Mars': 0xe07c5e,
    'Venus': 0xe8c547,
    'Jupiter': 0xc88b3a,
    'Saturn': 0xd4a574
};

function getMissionSurfaceLatLon(mission, bodyName) {
    // Moon: explicit latitude/longitude (landing sites)
    if (mission.latitudeDeg != null || mission.longitudeDeg != null) {
        return {
            lat: mission.latitudeDeg != null ? mission.latitudeDeg : 0,
            lon: mission.longitudeDeg != null ? mission.longitudeDeg : 0
        };
    }
    // Earth: orbit inclination as lat, longitude
    if (mission.target === 'Earth' && (mission.longitudeDeg != null || mission.inclinationDeg != null)) {
        return {
            lat: mission.inclinationDeg != null ? Math.max(-80, Math.min(80, mission.inclinationDeg)) : 0,
            lon: mission.longitudeDeg != null ? mission.longitudeDeg : 0
        };
    }
    // Mars/Venus/etc: alongOrbitDeg as longitude, optional small lat offset from orbitalRadiusOffset to spread dots
    if (mission.alongOrbitDeg != null) {
        const latOffset = (mission.orbitalRadiusOffset != null) ? (mission.orbitalRadiusOffset - 0.5) * 40 : 0;
        return { lat: Math.max(-80, Math.min(80, latOffset)), lon: mission.alongOrbitDeg };
    }
    // attachTo (Juno at Jupiter, Cassini at Saturn): angleDeg as longitude
    if (mission.attachTo === bodyName && mission.angleDeg != null) {
        return { lat: 0, lon: mission.angleDeg };
    }
    return null;
}

function createSurfaceMarkers(bodyName, bodyMesh) {
    clearSurfaceMarkers();
    if (!bodyMesh) return;
    const radius = bodyMesh.userData.radius || (bodyMesh.geometry ? bodyMesh.geometry.parameters.radius : 0.5);
    const r = typeof radius === 'number' ? radius : 0.5;
    surfaceMarkerByMissionId = {};

    const missionsForBody = MISSIONS.filter(m => m.target === bodyName || m.attachTo === bodyName);
    const markerColor = MARKER_COLOR_BY_BODY[bodyName] != null ? MARKER_COLOR_BY_BODY[bodyName] : 0x94a3b8;

    missionsForBody.forEach(mission => {
        const latLon = getMissionSurfaceLatLon(mission, bodyName);
        if (latLon == null) return;
        const pos = latLonToSpherePosition(latLon.lat, latLon.lon, r * 1.02);
        const geom = new THREE.SphereGeometry(0.03, 12, 12);
        const mat = new THREE.MeshBasicMaterial({
            color: markerColor,
            transparent: true,
            opacity: 0.95
        });
        const dot = new THREE.Mesh(geom, mat);
        dot.position.copy(pos);
        dot.userData = { name: mission.name, agency: mission.agency, year: mission.year, type: mission.type, id: mission.id };
        bodyMesh.add(dot);
        surfaceMarkersList.push(dot);
        if (mission.id) {
            surfaceMarkerByMissionId[mission.id] = dot;
        }
    });
}

function clearSurfaceMarkers() {
    surfaceMarkersList.forEach(m => {
        if (m.parent) m.parent.remove(m);
    });
    surfaceMarkersList = [];
    surfaceMarkerByMissionId = {};
}

function ensureModalRenderer() {
    if (!modalGlobeView || modalRenderer) return;
    const w = modalGlobeView.clientWidth || 400;
    const h = modalGlobeView.clientHeight || 360;
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    modalGlobeView.appendChild(canvas);
    modalRenderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    modalRenderer.setSize(w, h);
    modalRenderer.setClearColor(0x1e293b, 0.15);
    modalCamera = new THREE.PerspectiveCamera(50, w / h, 0.01, 1000);
}

function populateBodyModal(data) {
    if (!bodyModal) return;
    const titleEl = document.getElementById('modal-body-title');
    const subtitleEl = document.getElementById('modal-body-subtitle');
    const factEl = document.getElementById('modal-fact-card');
    const descEl = document.getElementById('modal-body-description');
    const missionsEl = document.getElementById('modal-missions-list');
    if (!titleEl) return;

    // Standalone deep-space missions (Voyager 1/2, and anything else placed via
    // radialDistance/polarAngleDeg/azimuthDeg rather than attached to a body) are
    // not "orbiting" anything in this scene — the marker you clicked IS the mission,
    // not a body with a sub-list of missions. Route straight to that mission's own
    // detail instead of searching for bodies whose name matches "Voyager 1" (which
    // will never exist). Look up the FULL record from MISSIONS by id, not the mesh's
    // userData — createSpacecraftMesh() only copies a partial field set onto the mesh
    // and does not include flightPath/journey, so using userData directly would silently
    // hide the Watch Launch / Trace Journey buttons even after this routing fix.
    if (data.type === 'Mission' && data.id) {
        const mission = MISSIONS.find(m => m.id === data.id);
        if (mission) {
            titleEl.textContent = mission.name || '—';
            if (subtitleEl) subtitleEl.textContent = [mission.agency, mission.year].filter(Boolean).join(' · ') || 'Mission';
            if (factEl) factEl.textContent = mission.type || mission.status || '';
            if (descEl) descEl.textContent = mission.description || '';
            if (missionsEl) {
                missionsEl.innerHTML = '';
                missionsEl._missionsData = [mission];
                selectMissionInModalById(mission.id);
            }
            return;
        }
    }

    titleEl.textContent = data.name || '—';
    if (subtitleEl) subtitleEl.textContent = 'From our project';

    const facts = [];
    if (data.radiusKm) facts.push(`Radius: ${data.radiusKm.toLocaleString()} km`);
    if (data.orbitalPeriodDays != null || data.orbitalPeriodYears != null) {
        const parts = [];
        if (data.orbitalPeriodDays != null) parts.push(`${data.orbitalPeriodDays.toLocaleString()} days`);
        if (data.orbitalPeriodYears != null) parts.push(`${data.orbitalPeriodYears} years`);
        facts.push(`Orbital period: ${parts.join(' / ')}`);
    }
    if (data.parentName && data.type === 'Moon') facts.push(`Orbits: ${data.parentName}`);
    if (factEl) factEl.textContent = facts.length ? facts.join(' · ') : (data.info || 'Select a body to see key facts.');

    if (descEl) descEl.textContent = data.info || (data.type === 'Star' ? 'The center of our solar system.' : 'Explore missions and sites in the list below.');

    const bodyName = data.name;
    const missionsForBody = MISSIONS.filter(m => m.target === bodyName || m.attachTo === bodyName);
    if (missionsEl) {
        if (missionsForBody.length) {
            missionsEl.innerHTML = missionsForBody.map((m, idx) =>
                `<div class="mission-row selectable" data-mission-index="${idx}" data-mission-id="${m.id || ''}"><strong>${m.name}</strong> · ${m.agency || '—'} (${m.year || '—'}) — ${m.type}</div>`
            ).join('');
            missionsEl._missionsData = missionsForBody;
            missionsEl.querySelectorAll('.mission-row.selectable').forEach(row => {
                row.addEventListener('click', () => {
                    const missionId = row.getAttribute('data-mission-id');
                    if (missionId) {
                        selectMissionInModalById(missionId);
                    }
                });
            });
        } else {
            missionsEl.innerHTML = '<div class="mission-row">No missions in database for this body.</div>';
            missionsEl._missionsData = [];
        }
    }
}

// Rotate the modal globe so the camera faces the mission marker (brings it to the front).
function rotateModalViewToMission(missionId) {
    const marker = surfaceMarkerByMissionId[missionId];
    if (!marker || !focusedBody) return;
    const markerWorld = new THREE.Vector3();
    const bodyWorld = new THREE.Vector3();
    marker.getWorldPosition(markerWorld);
    focusedBody.getWorldPosition(bodyWorld);
    const toMarker = markerWorld.clone().sub(bodyWorld);
    // Set modal angle so camera is opposite the marker in XZ → marker appears in front.
    modalAngle = Math.atan2(toMarker.x, toMarker.z) + Math.PI;
}

function selectMissionInModalById(missionId) {
    if (!missionId) return;
    const missionsEl = document.getElementById('modal-missions-list');
    if (!missionsEl || !missionsEl._missionsData) return;
    const missionsForBody = missionsEl._missionsData;
    const mission = missionsForBody.find(m => m.id === missionId);
    if (!mission) return;

    missionsEl.querySelectorAll('.mission-row.selected').forEach(r => r.classList.remove('selected'));
    const row = missionsEl.querySelector(`.mission-row.selectable[data-mission-id="${missionId}"]`);
    if (row) {
        row.classList.add('selected');
    }

    let detailEl = missionsEl.querySelector('.mission-selected-detail');
    if (!detailEl) {
        detailEl = document.createElement('div');
        detailEl.className = 'mission-selected-detail';
        missionsEl.appendChild(detailEl);
    }
    const desc = mission.description || mission.status || 'No additional details.';
    let detailHtml = `<p class="mission-detail-text">${desc}</p>`;
    if (mission.flightPath) {
        detailHtml += `<button type="button" class="watch-launch-btn" data-mission-id="${mission.id}">▶ Watch Launch</button>`;
    }
    if (mission.journey) {
        detailHtml += `<button type="button" class="trace-journey-btn" data-mission-id="${mission.id}">✦ Trace Journey</button>`;
    }
    detailEl.innerHTML = detailHtml;
    detailEl.classList.remove('hidden');

    if (modalMarkerTooltip) {
        modalMarkerTooltip.textContent = mission.name || 'Missions';
        modalMarkerTooltip.classList.remove('hidden');
    }

    surfaceMarkersList.forEach(m => {
        if (!m || !m.scale) return;
        const isSelected = m.userData && m.userData.id === missionId;
        const s = isSelected ? 1.7 : 1.0;
        m.scale.set(s, s, s);
    });

    // Auto-rotate the globe so this mission's marker is brought to the front.
    rotateModalViewToMission(missionId);
}

function openBodyModal(mesh) {
    if (!mesh || !mesh.userData) return;
    const data = mesh.userData;
    focusedBody = mesh;
    modalZoomDistance = Math.max(MODAL_ZOOM_MIN, Math.min(MODAL_ZOOM_MAX, (data.radius || 0.5) * 6));
    modalAngle = 0;

    if (focusOverlay) focusOverlay.classList.remove('hidden');
    if (bodyModal) {
        bodyModal.classList.remove('hidden');
        bodyModal.setAttribute('aria-hidden', 'false');
        if (bodyModalCloseBtn) bodyModalCloseBtn.focus();
    }
    updateUrlState({ body: data.name });
    populateBodyModal(data);
    createSurfaceMarkers(data.name, mesh);

    ensureModalRenderer();
    if (modalGlobeView && modalRenderer) {
        const w = modalGlobeView.clientWidth || 400;
        const h = modalGlobeView.clientHeight || 360;
        modalRenderer.setSize(w, h);
        modalRenderer.domElement.width = w;
        modalRenderer.domElement.height = h;
        modalCamera.aspect = w / h;
        modalCamera.updateProjectionMatrix();
    }

    const worldPos = new THREE.Vector3();
    mesh.getWorldPosition(worldPos);
    const dist = getZoomDistanceForBody(data.radius);
    const dir = new THREE.Vector3().subVectors(camera.position, worldPos).normalize();
    const targetPos = worldPos.clone().add(dir.multiplyScalar(dist));
    startCameraTransition(targetPos, worldPos.clone(), 1200);
}

function closeBodyModal() {
    var resetBtn = document.getElementById('reset-view-button');
    if (resetBtn && document.activeElement && bodyModal && bodyModal.contains(document.activeElement)) {
        resetBtn.focus();
    }
    focusedBody = null;
    clearSurfaceMarkers();
    if (focusOverlay) focusOverlay.classList.add('hidden');
    if (bodyModal) {
        bodyModal.classList.add('hidden');
        bodyModal.setAttribute('aria-hidden', 'true');
    }
    if (modalMarkerTooltip) modalMarkerTooltip.classList.add('hidden');
    updateUrlState({ body: '' });
}

function getUrlState() {
    var params = new URLSearchParams(window.location.search || '');
    return { preset: params.get('preset') || '', body: params.get('body') || '' };
}
function updateUrlState(opt) {
    try {
        var params = new URLSearchParams(window.location.search || '');
        if (opt.preset != null) { if (opt.preset) params.set('preset', opt.preset); else params.delete('preset'); }
        if (opt.body != null) { if (opt.body) params.set('body', opt.body); else params.delete('body'); }
        var q = params.toString();
        var url = window.location.pathname + (q ? '?' + q : '');
        window.history.replaceState({}, '', url);
    } catch (e) {}
}
function applyUrlStateOnLoad() {
    var state = getUrlState();
    if (state.preset && presetButtons && presetButtons.length) {
        var btn = Array.prototype.find.call(presetButtons, function (b) { return b.getAttribute('data-preset') === state.preset; });
        if (btn) btn.click();
    }
    if (state.body) {
        var mesh = selectableObjects.find(function (o) { return o.userData && o.userData.name === state.body; });
        if (mesh) {
            setTimeout(function () {
                openBodyModal(mesh);
                var worldPos = new THREE.Vector3();
                mesh.getWorldPosition(worldPos);
                controls.target.copy(worldPos);
            }, 100);
        }
    }
}

// Function to reset the view
function resetView() {
    closeBodyModal();
    camera.position.copy(INITIAL_CAMERA_POSITION);
    controls.target.copy(INITIAL_CONTROLS_TARGET);
    controls.update();
    selectedBody = null;
    selectionDisplay.innerHTML = 'View reset. Hover over a planet, moon, or spacecraft!';
}


// --- 3. BUILD THE SOLAR SYSTEM ---

createStarfield();

// 3a. The Sun (with glow)
const sun = createTexturedBody(SUN_DATA, true);
const sunGlowGeom = new THREE.SphereGeometry(SUN_DATA.radius * 1.35, 32, 32);
const sunGlowMat = new THREE.MeshBasicMaterial({
    color: 0xffaa00,
    transparent: true,
    opacity: 0.2,
    depthWrite: false
});
const sunGlow = new THREE.Mesh(sunGlowGeom, sunGlowMat);
sun.add(sunGlow);
scene.add(sun);

// Label for the Sun
const sunLabel = createLabelSprite(SUN_DATA.name);
scene.add(sunLabel);
labelPairs.push({ mesh: sun, label: sunLabel });


// 3b. All Planets (Mercury to Neptune) and their systems
PLANETS.forEach(planetData => {
    // 1. Create the Planet Mesh
    const planet = createTexturedBody(planetData);
    
    // 2. Create the Orbital Group
    const orbitGroup = new THREE.Object3D();
    planet.position.x = planetData.distance;
    orbitGroup.add(planet);
    scene.add(orbitGroup);
    
    // 3. Create the Orbit Line
    createOrbitLine(planetData.distance);
    
    // 4. Add Rings (if applicable)
    if (planetData.hasRings) {
        createRings(planet, 'textures/saturn_ring.jpg');
    }

    // 5. Store Planet for Animation and for spacecraft parenting
    orbitalBodies.push({
        name: planetData.name,
        mesh: planet,
        group: orbitGroup,
        orbitSpeed: planetData.orbitSpeed,
        selfRotateSpeed: planetData.selfRotateSpeed,
        orbitalPeriodDays: planetData.orbitalPeriodDays
    });
    planetOrbitGroupsByName[planetData.name] = orbitGroup;

    if (planetData.name === 'Earth') {
        earthMesh = planet;
        var atmGeom = new THREE.SphereGeometry(planetData.radius * 1.08, 48, 48);
        var atmMat = new THREE.MeshBasicMaterial({
            color: 0x7dd3fc,
            transparent: true,
            opacity: 0.12,
            depthWrite: false
        });
        var atm = new THREE.Mesh(atmGeom, atmMat);
        planet.add(atm);
    }

    // 6. Label for the planet
    const planetLabel = createLabelSprite(planetData.name);
    scene.add(planetLabel);
    labelPairs.push({ mesh: planet, label: planetLabel });

    // 7. Add Moons (if any exist for this planet)
    const moons = MOON_SYSTEMS[planetData.name];
    if (moons) {
        moons.forEach(moonData => {
            const combinedData = {
                ...moonData,
                type: 'Moon',
                parentName: planetData.name,
                parentAU: planetData.distanceAU, 
                distanceAU: planetData.distanceAU
            };
            const moon = createTexturedBody(combinedData);
            
            const moonOrbitGroup = new THREE.Object3D();
            moonOrbitGroup.add(moon); 
            moon.position.x = moonData.distance;
            planet.add(moonOrbitGroup); 
            
            orbitalBodies.push({
                name: moonData.name,
                mesh: moon,
                group: moonOrbitGroup,
                orbitSpeed: moonData.orbitSpeed,
                selfRotateSpeed: moonData.selfRotateSpeed,
                orbitalPeriodDays: moonData.orbitalPeriodDays
            });

            if (planetData.name === 'Earth' && moonData.name === 'Moon') {
                moonMesh = moon;
            }
        });
    }
});

// 3b2. Dwarf planets (Pluto, Ceres)
DWARF_PLANETS.forEach(function (dp) {
    var planet = createTexturedBody(dp, false);
    var orbitGroup = new THREE.Object3D();
    planet.position.x = dp.distance;
    orbitGroup.add(planet);
    scene.add(orbitGroup);
    createOrbitLine(dp.distance, true);
    orbitalBodies.push({
        name: dp.name,
        mesh: planet,
        group: orbitGroup,
        orbitSpeed: dp.orbitSpeed,
        selfRotateSpeed: dp.selfRotateSpeed,
        orbitalPeriodDays: dp.orbitalPeriodDays
    });
    planetOrbitGroupsByName[dp.name] = orbitGroup;
    var dpLabel = createLabelSprite(dp.name);
    scene.add(dpLabel);
    labelPairs.push({ mesh: planet, label: dpLabel });
});

// 3c. Asteroid Belt (Between Mars and Jupiter)
const asteroidCount = 1000;
const beltMinDist = 14.0; 
const beltMaxDist = 22.0; 
for (let i = 0; i < asteroidCount; i++) {
    const size = 0.05 + Math.random() * 0.05;
    const distance = beltMinDist + Math.random() * (beltMaxDist - beltMinDist); 
    
    const asteroidGeometry = new THREE.SphereGeometry(size, 8, 8);
    const asteroidMaterial = new THREE.MeshStandardMaterial({ color: 0x555555 });
    const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);
    
    asteroid.position.x = distance; 
    asteroid.position.z = (Math.random() - 0.5) * 1.5; 
    asteroid.position.y = (Math.random() - 0.5) * 1.5;
    
    const asteroidOrbit = new THREE.Object3D();
    asteroidOrbit.rotation.y = Math.random() * Math.PI * 2;
    asteroidOrbit.add(asteroid);
    scene.add(asteroidOrbit);
    asteroidGroups.push(asteroidOrbit);

    // FIX: Ensure mesh is the asteroid, and group is the orbit.
    orbitalBodies.push({
        name: `Asteroid ${i}`,
        mesh: asteroid,
        group: asteroidOrbit,
        orbitSpeed: 0.0001 + Math.random() * 0.0001, 
        selfRotateSpeed: 0.0
    });
}

// 3d. Kuiper Belt (Beyond Neptune)
const kuiperCount = 500;
const kuiperMinDist = 60.0;
const kuiperMaxDist = 150.0;
for (let i = 0; i < kuiperCount; i++) {
    const size = 0.1 + Math.random() * 0.1;
    const distance = kuiperMinDist + Math.random() * (kuiperMaxDist - kuiperMinDist);
    
    const kuiperGeometry = new THREE.SphereGeometry(size, 8, 8);
    const kuiperMaterial = new THREE.MeshStandardMaterial({ color: 0xAAAAAA });
    const kuiper = new THREE.Mesh(kuiperGeometry, kuiperMaterial);
    
    kuiper.position.x = distance; 
    kuiper.position.z = (Math.random() - 0.5) * 10;
    kuiper.position.y = (Math.random() - 0.5) * 10;
    
    const kuiperOrbit = new THREE.Object3D();
    kuiperOrbit.rotation.y = Math.random() * Math.PI * 2;
    kuiperOrbit.add(kuiper);
    scene.add(kuiperOrbit);
    kuiperGroups.push(kuiperOrbit);

    // FIX: Ensure mesh is the kuiper object, and group is the orbit.
    orbitalBodies.push({
        name: `Kuiper Obj ${i}`,
        mesh: kuiper,
        group: kuiperOrbit,
        orbitSpeed: 0.00001 + Math.random() * 0.00001, 
        selfRotateSpeed: 0.0
    });
}

// 3e. Spacecraft visible in the main scene (orbiting Earth/Jupiter/Saturn, on Mars/Venus, or in deep space)
function getPlanetDistance(name) {
    const p = PLANETS.find(x => x.name === name);
    return p ? p.distance : 0;
}
function getPlanetRadius(name) {
    const p = PLANETS.find(x => x.name === name);
    return p ? p.radius : 0.5;
}
function createSpacecraftMesh(mission) {
    const size = 0.045;
    const geometry = new THREE.BoxGeometry(size, size * 0.6, size * 1.2);
    const material = new THREE.MeshBasicMaterial({ color: 0x94a3b8 });
    const mesh = new THREE.Mesh(geometry, material);

    const missionUserData = {
        type: 'Mission',
        id: mission.id,
        name: mission.name,
        agency: mission.agency,
        year: mission.year,
        status: mission.status,
        description: mission.description,
        info: mission.description,
        target: mission.target,
        missionType: mission.type,
        altitudeKm: mission.altitudeKm,
        longitudeDeg: mission.longitudeDeg,
        inclinationDeg: mission.inclinationDeg
    };
    mesh.userData = missionUserData;

    // The box above is scaled to represent an actual spacecraft against planets
    // sized in the same real-proportioned units, so at deep-space distances
    // (Voyager, New Horizons, etc. — well over 100 scene-units out) it shrinks to
    // a fraction of a screen pixel: geometrically correct, but never practically
    // clickable by anyone. Add a larger, fully invisible sibling purely as a
    // raycasting target (opacity 0 + depthWrite false, so it never renders or
    // occludes anything) so every mission stays reliably clickable regardless of
    // how far out it's placed. Both share identical userData, so whichever one a
    // raycast actually hits behaves identically to the caller.
    //
    // Sized conditionally: missions with radialDistance (standalone deep-space
    // markers — nothing else is ever nearby) get a generous target. Anything
    // orbiting close to a parent body (ISS, Hubble, rovers on a surface) keeps a
    // much smaller target — a flat 2.0-unit sphere would completely engulf small
    // bodies like Earth (radius 0.5) at typical mission-orbit offsets, silently
    // intercepting clicks meant for the planet itself.
    const isStandaloneDeepSpace = mission.radialDistance != null;
    const hitRadius = isStandaloneDeepSpace ? 2.0 : 0.12;
    const hitGeometry = new THREE.SphereGeometry(hitRadius, 8, 8);
    const hitMaterial = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false });
    const hitTarget = new THREE.Mesh(hitGeometry, hitMaterial);
    hitTarget.userData = missionUserData;

    const group = new THREE.Group();
    group.userData = missionUserData;
    group.add(mesh);
    group.add(hitTarget);

    selectableObjects.push(hitTarget);
    return group;
}

function addSpacecraftToScene() {
    const DEG = Math.PI / 180;
    // Earth orbit: Sputnik, ISS, Hubble
    const earthGroup = planetOrbitGroupsByName['Earth'];
    const earthDist = getPlanetDistance('Earth');
    const earthRadius = getPlanetRadius('Earth');
    if (earthGroup && earthDist) {
        const earthOrbiters = MISSIONS.filter(m => m.target === 'Earth' && (m.altitudeKm != null || m.longitudeDeg != null));
        earthOrbiters.forEach(mission => {
            const orbitRadius = earthRadius + 0.12;
            const orbitGroup = new THREE.Object3D();
            orbitGroup.position.set(earthDist, 0, 0);
            const craft = createSpacecraftMesh(mission);
            craft.position.set(orbitRadius, 0, 0);
            const startAngle = (mission.longitudeDeg != null ? mission.longitudeDeg : 0) * DEG;
            orbitGroup.rotation.y = startAngle;
            orbitGroup.add(craft);
            earthGroup.add(orbitGroup);
            spacecraftOrbitBodies.push({ group: orbitGroup, orbitSpeed: 0.018 });
        });
    }
    // Jupiter: Juno
    const jupiterGroup = planetOrbitGroupsByName['Jupiter'];
    const jupiterDist = getPlanetDistance('Jupiter');
    const jupiterRadius = getPlanetRadius('Jupiter');
    if (jupiterGroup && jupiterDist && MISSIONS.some(m => m.attachTo === 'Jupiter')) {
        const juno = MISSIONS.find(m => m.attachTo === 'Jupiter');
        if (juno) {
            const orbitGroup = new THREE.Object3D();
            orbitGroup.position.set(jupiterDist, 0, 0);
            const craft = createSpacecraftMesh(juno);
            craft.position.set(jupiterRadius + 0.35, 0, 0);
            orbitGroup.rotation.y = (juno.angleDeg != null ? juno.angleDeg : 0) * DEG;
            orbitGroup.add(craft);
            jupiterGroup.add(orbitGroup);
            spacecraftOrbitBodies.push({ group: orbitGroup, orbitSpeed: 0.002 });
        }
    }
    // Saturn: Cassini
    const saturnGroup = planetOrbitGroupsByName['Saturn'];
    const saturnDist = getPlanetDistance('Saturn');
    const saturnRadius = getPlanetRadius('Saturn');
    if (saturnGroup && saturnDist && MISSIONS.some(m => m.attachTo === 'Saturn')) {
        const cassini = MISSIONS.find(m => m.attachTo === 'Saturn');
        if (cassini) {
            const orbitGroup = new THREE.Object3D();
            orbitGroup.position.set(saturnDist, 0, 0);
            const craft = createSpacecraftMesh(cassini);
            craft.position.set(saturnRadius + 0.35, 0, 0);
            orbitGroup.rotation.y = (cassini.angleDeg != null ? cassini.angleDeg : 0) * DEG;
            orbitGroup.add(craft);
            saturnGroup.add(orbitGroup);
            spacecraftOrbitBodies.push({ group: orbitGroup, orbitSpeed: 0.0012 });
        }
    }
    // Mars surface / orbit representation
    const marsGroup = planetOrbitGroupsByName['Mars'];
    const marsDist = getPlanetDistance('Mars');
    const marsRadius = getPlanetRadius('Mars');
    if (marsGroup && marsDist) {
        const marsMissions = MISSIONS.filter(m => m.target === 'Mars' && m.alongOrbitDeg != null);
        marsMissions.forEach((mission, i) => {
            const orbitGroup = new THREE.Object3D();
            orbitGroup.position.set(marsDist, 0, 0);
            const craft = createSpacecraftMesh(mission);
            craft.position.set(marsRadius + 0.06, 0, 0);
            orbitGroup.rotation.y = (mission.alongOrbitDeg || 0) * DEG;
            orbitGroup.add(craft);
            marsGroup.add(orbitGroup);
            spacecraftOrbitBodies.push({ group: orbitGroup, orbitSpeed: 0.0003 });
        });
    }
    // Venus: Venera 7
    const venusGroup = planetOrbitGroupsByName['Venus'];
    const venusDist = getPlanetDistance('Venus');
    const venusRadius = getPlanetRadius('Venus');
    if (venusGroup && venusDist) {
        const venera = MISSIONS.find(m => m.target === 'Venus' && m.alongOrbitDeg != null);
        if (venera) {
            const orbitGroup = new THREE.Object3D();
            orbitGroup.position.set(venusDist, 0, 0);
            const craft = createSpacecraftMesh(venera);
            craft.position.set(venusRadius + 0.06, 0, 0);
            orbitGroup.rotation.y = (venera.alongOrbitDeg || 0) * DEG;
            orbitGroup.add(craft);
            venusGroup.add(orbitGroup);
            spacecraftOrbitBodies.push({ group: orbitGroup, orbitSpeed: 0.0002 });
        }
    }
    // Deep space: Voyager 1/2, Pioneer 10, New Horizons (fixed position in scene, no orbit animation)
    const deepSpace = MISSIONS.filter(m => m.radialDistance != null && m.polarAngleDeg != null && m.azimuthDeg != null);
    deepSpace.forEach(mission => {
        const r = mission.radialDistance;
        const phi = (90 - (mission.polarAngleDeg || 0)) * DEG;
        const theta = ((mission.azimuthDeg || 0) + 180) * DEG;
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.cos(phi);
        const z = r * Math.sin(phi) * Math.sin(theta);
        const craft = createSpacecraftMesh(mission);
        craft.position.set(x, y, z);
        scene.add(craft);
    });
}
addSpacecraftToScene();

// ---------------------------------------------------------------------------
// Journey math ("Trace Journey" support)
// Shared by playMissionJourney() below. Kept separate from scene-building code
// since these are pure functions, reused each time a journey sequence starts.
// ---------------------------------------------------------------------------

// Real km/s -> AU/year, using a Julian year (365.25 days) and the IAU-defined AU.
function kmPerSecToAuPerYear(kmPerSec) {
    const KM_PER_AU = 149597870.7;
    const SECONDS_PER_YEAR = 365.25 * 24 * 60 * 60;
    return (kmPerSec * SECONDS_PER_YEAR) / KM_PER_AU;
}

// A mission's real current distance from the Sun, computed live from a sourced
// reference date/distance/velocity (see journey.current in the mission data)
// rather than a hardcoded number, so it stays accurate as real time passes.
function getCurrentDistanceAU(mission) {
    const cur = mission && mission.journey && mission.journey.current;
    if (!cur) return null;
    const refMs = new Date(cur.referenceDate + 'T00:00:00Z').getTime();
    const yearsSince = (Date.now() - refMs) / (365.25 * 24 * 60 * 60 * 1000);
    const auPerYear = kmPerSecToAuPerYear(cur.velocityKmS);
    return cur.referenceDistanceAU + auPerYear * yearsSince;
}

// This app's own hand-placed AU -> scene-unit anchors (see the PLANETS distance/
// distanceAU pairs above), extended past Pluto — the outermost existing anchor —
// by continuing at the same local compression rate established by the Uranus->
// Neptune->Pluto segment. Not a claim of a "true" formula (the inner-solar-system
// spacing is hand-tuned for readability, same as everywhere else in this file);
// just the most consistent way to place something farther out than any existing
// anchor without inventing an unrelated new scale.
function auToSceneDistance(au) {
    const PLUTO_AU = 39.48, PLUTO_SCENE = 62.0;
    const OUTER_RATE = 0.7423; // scene-units per AU, from (Pluto_scene - Neptune_scene) / (Pluto_AU - Neptune_AU)
    if (au <= PLUTO_AU) return PLUTO_SCENE * (au / PLUTO_AU); // not used by Trace Journey today, kept honest/complete
    return PLUTO_SCENE + OUTER_RATE * (au - PLUTO_AU);
}

// Reuses this app's own existing simplified circular-orbit convention (see
// setInitialOrbitsToToday() above: angle = (daysSinceEpoch / orbitalPeriodDays) * 2π,
// all bodies at angle 0 on REALTIME_EPOCH_MS) — evaluated at a real historical date
// instead of "today". Exactly as accurate as this app's own live planet positions,
// no more and no less; genuinely computed from the real orbital period, not a guess.
function heliocentricAngleAtDate(orbitalPeriodDays, dateMs) {
    const daysSinceEpoch = (dateMs - REALTIME_EPOCH_MS) / (24 * 60 * 60 * 1000);
    return (daysSinceEpoch / orbitalPeriodDays) * Math.PI * 2;
}

// World-space position for a given scene distance + heliocentric angle, matching
// the exact rotation convention PLANETS objects use (orbitGroup.rotation.y = angle
// applied to a (distance, 0, 0) local point).
function polarToWorldPosition(distance, angleRad) {
    return new THREE.Vector3(distance, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), angleRad);
}

// ---------------------------------------------------------------------------
// Mission launch-sequence replay ("Watch Launch")
// On-demand cinematic playback of a mission's real ascent, parented to Earth's
// rotating mesh so it inherits both Earth's spin and orbital position for free.
// Rendered only while active — not a permanent object in the scene — so this
// scales to many missions without cluttering the main view or costing perf.
// ---------------------------------------------------------------------------
let launchSequence = null; // active playback state, or null when idle
const launchSequencePanel = document.getElementById('launch-sequence-panel');
const launchSequenceTitle = document.getElementById('launch-sequence-title');
const launchSequenceText = document.getElementById('launch-sequence-text');
const launchSequenceTime = document.getElementById('launch-sequence-time');
const launchSequenceCloseBtn = document.getElementById('launch-sequence-close');

// Convert a lat/lon (degrees) to a local position on a sphere of given radius,
// using the same spherical convention already used elsewhere in this file
// (see the deep-space spacecraft placement above) for consistency.
function latLonToLocalPosition(lat, lon, radius) {
    const DEG = Math.PI / 180;
    const phi = (90 - lat) * DEG;
    const theta = (lon + 180) * DEG;
    return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    );
}

function clearLaunchSequence() {
    if (launchSequence) {
        if (launchSequence.group && launchSequence.group.parent) {
            launchSequence.group.parent.remove(launchSequence.group);
        }
        launchSequence = null;
    }
    if (launchSequencePanel) launchSequencePanel.classList.add('hidden');
}

function playMissionLaunch(mission) {
    if (!mission || !mission.flightPath || !earthMesh) return;
    clearLaunchSequence();
    closeDetailModal();
    if (typeof closeBodyModal === 'function') closeBodyModal();

    const fp = mission.flightPath;
    const earthPlanetData = PLANETS.find(p => p.name === 'Earth');
    const earthRadius = earthPlanetData ? earthPlanetData.radius : 0.5;

    // Launch site sits on Earth's surface at the real lat/lon; parented to earthMesh
    // so it automatically inherits Earth's rotation and orbital position.
    const launchPos = latLonToLocalPosition(fp.launchSite.lat, fp.launchSite.lon, earthRadius);
    const outward = launchPos.clone().normalize();

    // End point: successful missions arc out toward "reached orbit" distance;
    // failures stop proportionally short, scaled to the real altitude reached.
    const orbitReachDistance = earthRadius + 0.12; // matches the existing LEO convention used for ISS/Hubble
    let endRadius;
    if (fp.outcome === 'failure' && fp.failure) {
        // Real ascent to LEO covers ~300km; scale the failure's real altitude proportionally
        // against that, with a floor so it's still visible just above the surface.
        const fraction = Math.min(0.9, Math.max(0.12, fp.failure.altitudeKm / 300));
        endRadius = earthRadius + (orbitReachDistance - earthRadius) * fraction;
    } else {
        endRadius = orbitReachDistance;
    }

    // A gentle pitch-over arc (real ascents aren't straight up): control point offset
    // sideways from the straight radial line, roughly matching real launch profiles.
    const tangent = new THREE.Vector3(-outward.z, 0, outward.x).normalize();
    const controlPoint = launchPos.clone()
        .add(outward.clone().multiplyScalar((endRadius - earthRadius) * 0.6))
        .add(tangent.multiplyScalar((endRadius - earthRadius) * 0.5));
    const endPoint = outward.clone().multiplyScalar(endRadius);

    const curve = new THREE.QuadraticBezierCurve3(launchPos, controlPoint, endPoint);
    const curvePoints = curve.getPoints(64);

    const group = new THREE.Object3D();

    const lineGeometry = new THREE.BufferGeometry().setFromPoints(curvePoints);
    lineGeometry.setDrawRange(0, 0);
    const lineColor = fp.outcome === 'failure' ? 0xf87171 : 0x60a5fa;
    const line = new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({ color: lineColor, transparent: true, opacity: 0.9 }));
    group.add(line);

    const markerGeometry = new THREE.SphereGeometry(0.035, 12, 12);
    const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    marker.position.copy(launchPos);
    group.add(marker);

    // A small marker at the launch pad itself, left in place for context.
    const padGeometry = new THREE.ConeGeometry(0.02, 0.05, 8);
    const padMaterial = new THREE.MeshBasicMaterial({ color: 0xfbbf24 });
    const pad = new THREE.Mesh(padGeometry, padMaterial);
    pad.position.copy(launchPos);
    pad.lookAt(launchPos.clone().add(outward));
    pad.rotateX(Math.PI / 2);
    group.add(pad);

    earthMesh.add(group);

    const totalPoints = curvePoints.length;
    const durationMs = PREFERS_REDUCED_MOTION ? 100 : 6000;

    launchSequence = {
        mission,
        group,
        line,
        marker,
        curvePoints,
        totalPoints,
        startTime: performance.now(),
        duration: durationMs,
        outcome: fp.outcome,
        realElapsedSeconds: fp.outcome === 'failure' && fp.failure ? fp.failure.elapsedSeconds : null,
        finished: false
    };

    // Fly the camera to a good viewing angle near Earth for the sequence.
    const earthWorldPos = new THREE.Vector3();
    earthMesh.getWorldPosition(earthWorldPos);
    const camOffset = new THREE.Vector3(earthRadius * 3, earthRadius * 1.5, earthRadius * 3.2);
    startCameraTransition(earthWorldPos.clone().add(camOffset), earthWorldPos.clone(), PREFERS_REDUCED_MOTION ? 300 : 1800);

    if (launchSequencePanel && launchSequenceTitle && launchSequenceText) {
        launchSequencePanel.classList.remove('hidden');
        launchSequenceTitle.textContent = mission.name + ' — Launch';
        launchSequenceTitle.classList.remove('outcome-failure');
        launchSequenceText.textContent = fp.launchDateLabel ? ('Liftoff: ' + fp.launchDateLabel) : 'Liftoff';
        if (launchSequenceTime) launchSequenceTime.textContent = 'T+0s';
    }
}

// Called every frame from animate() while a launch sequence is active.
function updateLaunchSequence(nowMs) {
    if (!launchSequence || launchSequence.finished) return;
    const elapsed = nowMs - launchSequence.startTime;
    const t = Math.min(1, elapsed / launchSequence.duration);
    const pointIndex = Math.max(1, Math.floor(t * (launchSequence.totalPoints - 1)) + 1);
    launchSequence.line.geometry.setDrawRange(0, pointIndex);
    const currentPoint = launchSequence.curvePoints[pointIndex - 1];
    if (currentPoint) launchSequence.marker.position.copy(currentPoint);

    if (launchSequenceTime) {
        if (launchSequence.realElapsedSeconds != null) {
            launchSequenceTime.textContent = 'T+' + Math.round(t * launchSequence.realElapsedSeconds) + 's';
        } else {
            launchSequenceTime.textContent = t < 1 ? 'Ascending…' : 'Reached orbit';
        }
    }

    if (t >= 1 && !launchSequence.finished) {
        launchSequence.finished = true;
        const fp = launchSequence.mission.flightPath;
        if (launchSequenceTitle && launchSequenceText) {
            if (launchSequence.outcome === 'failure' && fp.failure) {
                launchSequenceTitle.textContent = launchSequence.mission.name + ' — Loss of vehicle';
                launchSequenceTitle.classList.add('outcome-failure');
                launchSequenceText.textContent = fp.failure.note;
                if (launchSequenceTime) launchSequenceTime.textContent = 'T+' + fp.failure.elapsedSeconds + 's';
            } else {
                launchSequenceTitle.textContent = launchSequence.mission.name + ' — Reached orbit';
                launchSequenceText.textContent = fp.successNote || 'Successfully reached orbit.';
            }
        }
    }
}

if (launchSequenceCloseBtn) {
    launchSequenceCloseBtn.addEventListener('click', clearLaunchSequence);
}
if (bodyModal) {
    bodyModal.addEventListener('click', (event) => {
        const btn = event.target.closest('.watch-launch-btn');
        if (!btn) return;
        const missionId = btn.getAttribute('data-mission-id');
        const mission = MISSIONS.find(m => m.id === missionId);
        if (mission) playMissionLaunch(mission);
    });
}

// ---------------------------------------------------------------------------
// Mission journey replay ("Trace Journey")
// On-demand cinematic playback of a mission's real post-launch trajectory —
// flyby to flyby, ending at a live-computed present-day position. Same on-
// demand, rendered-only-while-active approach as playMissionLaunch() above,
// extended to a multi-leg path spanning the whole solar system instead of a
// single Earth-to-orbit arc. See journey math functions above (getCurrentDistanceAU,
// auToSceneDistance, heliocentricAngleAtDate) for how each waypoint is computed.
// ---------------------------------------------------------------------------
let journeySequence = null; // active playback state, or null when idle
const journeyPanel = document.getElementById('journey-panel');
const journeyTitle = document.getElementById('journey-title');
const journeyText = document.getElementById('journey-text');
const journeyTime = document.getElementById('journey-time');
const journeyLegIndicator = document.getElementById('journey-leg-indicator');
const journeyCloseBtn = document.getElementById('journey-close');

function clearJourneySequence() {
    if (journeySequence) {
        if (journeySequence.group && journeySequence.group.parent) {
            journeySequence.group.parent.remove(journeySequence.group);
        }
        journeySequence = null;
    }
    if (journeyPanel) journeyPanel.classList.add('hidden');
}

function buildJourneyWaypoints(mission) {
    const j = mission.journey;
    const waypoints = [];

    // Start at Earth's real position at the moment the sequence is launched
    // (sampled once, not continuously tracked, so the path is stable to watch).
    const earthWorldPos = new THREE.Vector3();
    if (earthMesh) earthMesh.getWorldPosition(earthWorldPos);
    waypoints.push({
        position: earthWorldPos.clone(),
        label: 'Earth',
        dateLabel: mission.flightPath ? mission.flightPath.launchDateLabel : 'Launch',
        note: 'Launch from Earth.'
    });

    let lastAngleRad = 0;
    j.legs.forEach(leg => {
        const dateMs = leg.date ? new Date(leg.date + 'T00:00:00Z').getTime() : null;
        let position = null;
        const label = leg.label || leg.body;

        switch (leg.type) {
            case 'flyby':
            case 'orbit-insertion': {
                // Passes by, or settles into orbit around, a body this app already
                // renders — reuse its real distance and the app's own orbital-angle
                // model at the real historical date (see heliocentricAngleAtDate above).
                // Checks both PLANETS and DWARF_PLANETS (Pluto/Ceres live in the latter).
                const planetData = PLANETS.find(p => p.name === leg.body) || DWARF_PLANETS.find(p => p.name === leg.body);
                if (!planetData) return; // defensive: skip rather than crash on bad data
                lastAngleRad = heliocentricAngleAtDate(planetData.orbitalPeriodDays, dateMs);
                position = polarToWorldPosition(planetData.distance, lastAngleRad);
                break;
            }
            case 'landed':
            case 'orbiting-current': {
                // Mission ends stationary on a surface, or is still actively orbiting
                // a body today — in both cases, reuse the mission's OWN already-
                // rendered marker position (set up in addSpacecraftToScene) rather
                // than recomputing new placement math, so the journey ends exactly
                // where the mission's marker actually sits in the live scene.
                const ownMesh = selectableObjects.find(o => o.userData && o.userData.id === mission.id);
                if (ownMesh) {
                    const p = new THREE.Vector3();
                    ownMesh.getWorldPosition(p);
                    position = p;
                } else if (leg.body) {
                    const planetData = PLANETS.find(p => p.name === leg.body) || DWARF_PLANETS.find(p => p.name === leg.body);
                    if (planetData) {
                        lastAngleRad = heliocentricAngleAtDate(planetData.orbitalPeriodDays, dateMs || Date.now());
                        position = polarToWorldPosition(planetData.distance, lastAngleRad);
                    }
                }
                break;
            }
            case 'destroyed': {
                // Mission ends by impact or atmospheric entry — the path stops here;
                // no waypoint follows a 'destroyed' leg.
                const planetData = PLANETS.find(p => p.name === leg.body) || DWARF_PLANETS.find(p => p.name === leg.body);
                if (!planetData) return;
                lastAngleRad = heliocentricAngleAtDate(planetData.orbitalPeriodDays, dateMs);
                position = polarToWorldPosition(planetData.distance, lastAngleRad);
                break;
            }
            case 'returned': {
                // Sample-return or crewed return — closes the loop back at Earth's
                // real position (same sample used for the starting waypoint).
                position = earthWorldPos.clone();
                break;
            }
            case 'outbound': {
                // Continues outward past any charted body, holding the bearing of
                // the last real flyby (physically reasonable: post-flyby trajectories
                // coast ballistically with only gradual solar deflection out here).
                const sceneDist = auToSceneDistance(leg.distanceAU);
                position = polarToWorldPosition(sceneDist, lastAngleRad);
                break;
            }
            default:
                return; // unknown/missing leg type — skip rather than guess
        }

        if (!position) return;
        waypoints.push({ position, label, dateLabel: leg.dateLabel, note: leg.note });
    });

    // Only missions still cruising outward (journey.current present) get a final
    // live-computed leg. Landed, destroyed, returned, and currently-orbiting
    // missions have no further motion to project — their last leg above already
    // is the honest "current position".
    if (j.current) {
        const currentAU = getCurrentDistanceAU(mission);
        if (currentAU != null) {
            const sceneDist = auToSceneDistance(currentAU);
            const position = polarToWorldPosition(sceneDist, lastAngleRad);
            const today = new Date();
            waypoints.push({
                position,
                label: 'Current position',
                dateLabel: today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) + ' (today)',
                note: `Approximately ${currentAU.toFixed(1)} AU from the Sun today, still moving outward. ${j.current.sourceNote}`
            });
        }
    }

    return waypoints;
}

function playMissionJourney(mission) {
    if (!mission || !mission.journey) return;
    clearJourneySequence();
    clearLaunchSequence();
    closeDetailModal();
    if (typeof closeBodyModal === 'function') closeBodyModal();

    const waypoints = buildJourneyWaypoints(mission);
    if (waypoints.length < 2) return;

    const curvePoints3 = waypoints.map(w => w.position);
    const curve = new THREE.CatmullRomCurve3(curvePoints3, false, 'catmullrom', 0.15);
    const sampleCount = Math.max(200, waypoints.length * 60);
    const curvePoints = curve.getPoints(sampleCount);

    const group = new THREE.Object3D();

    const lineGeometry = new THREE.BufferGeometry().setFromPoints(curvePoints);
    lineGeometry.setDrawRange(0, 0);
    const line = new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({ color: 0xa78bfa, transparent: true, opacity: 0.9 }));
    group.add(line);

    const markerGeometry = new THREE.SphereGeometry(0.4, 12, 12);
    const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    marker.position.copy(curvePoints[0]);
    group.add(marker);

    // A small marker at each real waypoint, left in place for context as the line passes them.
    waypoints.forEach(w => {
        const dot = new THREE.Mesh(
            new THREE.SphereGeometry(0.25, 10, 10),
            new THREE.MeshBasicMaterial({ color: 0xc4b5fd })
        );
        dot.position.copy(w.position);
        group.add(dot);
    });

    scene.add(group);

    // Equal time per leg (not distance-weighted) — simplest coherent pacing, and
    // keeps a single flyby from dominating the runtime just because interstellar
    // distances are numerically huge compared to planet-to-planet hops.
    const legCount = waypoints.length - 1;
    const totalPoints = curvePoints.length;
    const durationMs = PREFERS_REDUCED_MOTION ? (100 * legCount) : (2600 * legCount);

    journeySequence = {
        mission,
        group,
        line,
        marker,
        curvePoints,
        totalPoints,
        waypoints,
        legCount,
        startTime: performance.now(),
        duration: durationMs,
        currentLegIndex: -1,
        finished: false
    };

    // Wide establishing view so the whole outward path is visible at once.
    const farthest = waypoints[waypoints.length - 1].position;
    const viewDist = farthest.length();
    startCameraTransition(
        new THREE.Vector3(viewDist * 0.55, viewDist * 0.42, viewDist * 0.55),
        new THREE.Vector3(0, 0, 0),
        PREFERS_REDUCED_MOTION ? 300 : 2000
    );

    if (journeyPanel && journeyTitle && journeyText) {
        journeyPanel.classList.remove('hidden');
        journeyTitle.textContent = mission.name + ' — Journey';
        journeyText.textContent = 'Departing Earth' + (waypoints[0].dateLabel ? (', ' + waypoints[0].dateLabel) : '') + '…';
        if (journeyTime) journeyTime.textContent = '';
        if (journeyLegIndicator) journeyLegIndicator.textContent = 'Leg 1 of ' + legCount;
    }
}

// Called every frame from animate() while a journey sequence is active.
function updateJourneySequence(nowMs) {
    if (!journeySequence || journeySequence.finished) return;
    const elapsed = nowMs - journeySequence.startTime;
    const t = Math.min(1, elapsed / journeySequence.duration);
    const pointIndex = Math.max(1, Math.floor(t * (journeySequence.totalPoints - 1)) + 1);
    journeySequence.line.geometry.setDrawRange(0, pointIndex);
    const currentPoint = journeySequence.curvePoints[pointIndex - 1];
    if (currentPoint) journeySequence.marker.position.copy(currentPoint);

    // Which leg are we currently on, given equal time-per-leg pacing?
    const legIndex = Math.min(journeySequence.legCount - 1, Math.floor(t * journeySequence.legCount));
    if (legIndex !== journeySequence.currentLegIndex) {
        journeySequence.currentLegIndex = legIndex;
        const arriving = journeySequence.waypoints[legIndex + 1];
        if (journeyTitle && journeyText) {
            journeyText.textContent = (arriving.label ? (arriving.label + ' — ') : '') + (arriving.dateLabel || '') + '. ' + (arriving.note || '');
        }
        if (journeyLegIndicator) {
            journeyLegIndicator.textContent = 'Leg ' + (legIndex + 1) + ' of ' + journeySequence.legCount;
        }
    }
    if (journeyTime) {
        journeyTime.textContent = Math.round(t * 100) + '%';
    }

    if (t >= 1 && !journeySequence.finished) {
        journeySequence.finished = true;
        const last = journeySequence.waypoints[journeySequence.waypoints.length - 1];
        if (journeyTitle && journeyText) {
            journeyTitle.textContent = journeySequence.mission.name + ' — ' + last.label;
            journeyText.textContent = (last.dateLabel || '') + '. ' + (last.note || '');
        }
        if (journeyLegIndicator) journeyLegIndicator.textContent = 'Journey complete';
        if (journeyTime) journeyTime.textContent = '100%';
    }
}

if (journeyCloseBtn) {
    journeyCloseBtn.addEventListener('click', clearJourneySequence);
}
if (bodyModal) {
    bodyModal.addEventListener('click', (event) => {
        const btn = event.target.closest('.trace-journey-btn');
        if (!btn) return;
        const missionId = btn.getAttribute('data-mission-id');
        const mission = MISSIONS.find(m => m.id === missionId);
        if (mission) playMissionJourney(mission);
    });
}


// Set planet and moon orbits to approximate "today" positions (asteroid/Kuiper keep random spread)
(function setInitialOrbitsToToday() {
    var daysSinceEpoch = (Date.now() - REALTIME_EPOCH_MS) / (24 * 60 * 60 * 1000);
    orbitalBodies.forEach(function (b) {
        if (!b.group || b.orbitalPeriodDays == null) return;
        b.group.rotation.y = (daysSinceEpoch / b.orbitalPeriodDays) * Math.PI * 2;
    });
})();

// --- 4. ANIMATION AND INTERACTION LOOP ---

var pauseWhenModalOpen = false;
// Reused every frame instead of allocating a new THREE.Vector3 each time (reduces GC pressure)
const _labelWorldPos = new THREE.Vector3();
const _modalWorldPos = new THREE.Vector3();

function animate() {
    requestAnimationFrame(animate);
    var modalOpen = bodyModal && !bodyModal.classList.contains('hidden');
    var effectivelyPaused = animationPaused || (pauseWhenModalOpen && modalOpen) || !!launchSequence || !!journeySequence;

    if (!effectivelyPaused) {
        sun.rotation.y += 0.001 * speedMultiplier; 

        // Rotate orbital groups and bodies using the current speed multiplier
        orbitalBodies.forEach(body => {
            if (!body) return;
            if (body.group) {
                body.group.rotation.y += body.orbitSpeed * speedMultiplier; 
            }
            if (body.mesh) {
                body.mesh.rotation.y += body.selfRotateSpeed * speedMultiplier;
            }
        });
        // Spacecraft orbiting their parent (Earth, Jupiter, Saturn, Mars, Venus)
        spacecraftOrbitBodies.forEach(entry => {
            if (entry.group) entry.group.rotation.y += entry.orbitSpeed * speedMultiplier;
        });
    }

    // Smooth camera transitions for presets
    if (cameraTransition) {
        const now = performance.now();
        const elapsed = now - cameraTransition.startTime;
        const t = Math.min(1, elapsed / cameraTransition.duration);
        const easedT = t * t * (3 - 2 * t); // smoothstep

        camera.position.lerpVectors(
            cameraTransition.startPosition,
            cameraTransition.endPosition,
            easedT
        );
        controls.target.lerpVectors(
            cameraTransition.startTarget,
            cameraTransition.endTarget,
            easedT
        );

        if (t >= 1) {
            cameraTransition = null;
        }
    }

    // Mission launch-sequence replay (runs independent of orbit pause, like camera transitions)
    if (launchSequence) {
        updateLaunchSequence(performance.now());
    }
    // Mission journey replay (same independent-of-pause treatment)
    if (journeySequence) {
        updateJourneySequence(performance.now());
    }

    // Selection highlight ring and orbit trail
    selectableObjects.forEach(function (obj) {
        var h = obj.getObjectByName('highlight');
        if (h) h.visible = (obj === currentIntersected || obj === selectedBody);
    });
    var selectedDist = selectedBody && selectedBody.userData && selectedBody.userData.distanceSU != null ? selectedBody.userData.distanceSU : null;
    orbitLines.forEach(function (line) {
        if (!line || !line.material) return;
        var isSelected = selectedDist != null && line.userData && line.userData.distance === selectedDist;
        line.material.color.setHex(isSelected ? 0x5588cc : (line.userData.dimmer ? 0x222222 : 0x333333));
        line.material.opacity = isSelected ? 1 : (line.userData.dimmer ? 0.6 : 0.9);
    });

    // Update label positions and visibility
    labelPairs.forEach(pair => {
        if (!pair || !pair.mesh || !pair.label) return;
        pair.label.visible = showLabels;
        if (!showLabels) {
            return;
        }
        const offset = (pair.mesh.userData.radius || 1) * 2 + 0.5;
        pair.mesh.getWorldPosition(_labelWorldPos);
        pair.label.position.copy(_labelWorldPos);
        pair.label.position.y += offset;
    });

    // Modal view: render focused body with second camera into modal canvas
    if (bodyModal && !bodyModal.classList.contains('hidden') && focusedBody && modalRenderer && modalCamera && modalGlobeView) {
        const cw = modalGlobeView.clientWidth || 400;
        const ch = modalGlobeView.clientHeight || 360;
        if (modalRenderer.domElement.width !== cw || modalRenderer.domElement.height !== ch) {
            modalRenderer.setSize(cw, ch);
            modalRenderer.domElement.width = cw;
            modalRenderer.domElement.height = ch;
            modalCamera.aspect = cw / ch;
            modalCamera.updateProjectionMatrix();
        }
        focusedBody.getWorldPosition(_modalWorldPos);
        const dx = modalZoomDistance * Math.sin(modalAngle);
        const dz = modalZoomDistance * Math.cos(modalAngle);
        modalCamera.position.set(_modalWorldPos.x + dx, _modalWorldPos.y + modalZoomDistance * 0.15, _modalWorldPos.z + dz);
        modalCamera.lookAt(_modalWorldPos);
        modalRenderer.render(scene, modalCamera);
    }

    // Handle Hover (Mousemove)
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(selectableObjects);

    if (intersects.length > 0) {
        currentIntersected = intersects[0].object;
        if (!selectedBody) {
             displayBodyInfo(currentIntersected.userData, currentIntersected);
        }
    } else {
        if (!selectedBody) {
            currentIntersected = null;
            selectionDisplay.innerHTML = 'Hover over a planet, moon, or spacecraft!';
        }
    }
    if (selectedBody) {
        displayBodyInfo(selectedBody.userData, selectedBody);
    }

    if (starMaterial) {
        starMaterial.opacity = 0.85 + 0.1 * Math.sin(performance.now() * 0.002);
    }
    updateMinimap();

    controls.update();
    renderer.render(scene, camera);
}

animate();

// --- 5. EVENT LISTENERS ---

// Handle mouse movement for hover detection
window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
}, false);

// Handle mouse click for locking selection
window.addEventListener('click', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(selectableObjects);

    if (intersects.length > 0) {
        const clickedObject = intersects[0].object;
        
        if (selectedBody === clickedObject) {
            selectedBody = null;
            selectionDisplay.innerHTML = 'Hover over a planet, moon, or spacecraft!';
        } else {
            selectedBody = clickedObject;
            displayBodyInfo(selectedBody.userData, selectedBody);

            // Focus the camera on the selected body
            const worldPos = new THREE.Vector3();
            clickedObject.getWorldPosition(worldPos);

            // Special zoom-in for the Moon
            if (selectedBody.userData && selectedBody.userData.name === 'Moon') {
                const toCamera = new THREE.Vector3().subVectors(camera.position, worldPos).normalize();
                const targetPosition = worldPos.clone().add(toCamera.multiplyScalar(5));
                startCameraTransition(targetPosition, worldPos, 1500);
            } else {
                controls.target.copy(worldPos);
            }
        }
    } else {
        selectedBody = null;
        selectionDisplay.innerHTML = 'Hover over a planet, moon, or spacecraft!';
    }
});

// Double-click: celestial body → body modal; spacecraft (Mission) → spacecraft detail modal (how it works, history)
// Shared by both the mouse 'dblclick' listener and the touch double-tap detector below,
// so desktop and mobile trigger identically the same logic.
function handleBodyDoubleActivate(clientX, clientY) {
    mouse.x = (clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(selectableObjects);
    if (intersects.length > 0) {
        const obj = intersects[0].object;
        const data = obj.userData;
        const isCelestial = data && data.type && data.type !== 'Mission';
        if (isCelestial) {
            openBodyModal(obj);
        } else if (data && data.type === 'Mission' && data.id) {
            const mission = MISSIONS.find(m => m.id === data.id);
            // Missions with an interactive replay (Watch Launch / Trace Journey) need
            // the full body-modal, since that's the only place those buttons render.
            // Everything else keeps the lighter popup this branch always used.
            if (mission && (mission.flightPath || mission.journey)) {
                openBodyModal(obj);
                return;
            }
            const content = mission ? buildSpacecraftDetailContent(mission) : buildDetailContent(data);
            if (content) {
                const worldPos = new THREE.Vector3();
                obj.getWorldPosition(worldPos);
                worldPos.project(camera);
                const screenX = (worldPos.x + 1) * 0.5 * window.innerWidth;
                const screenY = (1 - worldPos.y) * 0.5 * window.innerHeight;
                openDetailModal(content, screenX, screenY);
            }
        } else {
            const content = buildDetailContent(data);
            if (content) {
                const worldPos = new THREE.Vector3();
                obj.getWorldPosition(worldPos);
                worldPos.project(camera);
                const screenX = (worldPos.x + 1) * 0.5 * window.innerWidth;
                const screenY = (1 - worldPos.y) * 0.5 * window.innerHeight;
                openDetailModal(content, screenX, screenY);
            }
        }
    }
}

window.addEventListener('dblclick', (event) => {
    handleBodyDoubleActivate(event.clientX, event.clientY);
});

// Touch double-tap: native 'dblclick' doesn't fire reliably from touch on all mobile browsers,
// so detect two touchend events close together in time and position and treat it the same way.
let lastTapTime = 0;
let lastTapX = 0;
let lastTapY = 0;
window.addEventListener('touchend', (event) => {
    if (!event.changedTouches || event.changedTouches.length === 0) return;
    const touch = event.changedTouches[0];
    const now = Date.now();
    const dx = touch.clientX - lastTapX;
    const dy = touch.clientY - lastTapY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (now - lastTapTime < 350 && distance < 30) {
        handleBodyDoubleActivate(touch.clientX, touch.clientY);
        lastTapTime = 0; // reset so a third quick tap doesn't chain into another double-tap
    } else {
        lastTapTime = now;
        lastTapX = touch.clientX;
        lastTapY = touch.clientY;
    }
}, { passive: true });

// Detail modal close
if (detailCloseBtn) detailCloseBtn.addEventListener('click', closeDetailModal);
if (detailModal) {
    const overlay = detailModal.querySelector('.detail-overlay');
    if (overlay) overlay.addEventListener('click', closeDetailModal);
}

// Focus overlay click closes body modal
if (focusOverlay) focusOverlay.addEventListener('click', closeBodyModal);

// White modal: close, backdrop, zoom, rotate
if (bodyModalCloseBtn) bodyModalCloseBtn.addEventListener('click', closeBodyModal);
if (bodyModal) {
    const backdrop = bodyModal.querySelector('.body-modal-backdrop');
    if (backdrop) backdrop.addEventListener('click', closeBodyModal);
}
document.getElementById('modal-zoom-in')?.addEventListener('click', () => {
    modalZoomDistance = Math.max(MODAL_ZOOM_MIN, modalZoomDistance / 1.25);
});
document.getElementById('modal-zoom-out')?.addEventListener('click', () => {
    modalZoomDistance = Math.min(MODAL_ZOOM_MAX, modalZoomDistance * 1.25);
});
document.getElementById('modal-rotate')?.addEventListener('click', () => {
    modalAngle += 0.4;
});

// Modal globe: helpers for surface marker picking + tooltip + selection
function pickSurfaceMarkerAt(clientX, clientY) {
    if (!modalRenderer || !modalCamera || !focusedBody) return null;
    const canvas = modalRenderer.domElement;
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    if (x < 0 || x > rect.width || y < 0 || y > rect.height) {
        return null;
    }
    const ndcX = (x / rect.width) * 2 - 1;
    const ndcY = -(y / rect.height) * 2 + 1;
    const threshold = 0.08;
    for (let i = 0; i < surfaceMarkersList.length; i++) {
        const m = surfaceMarkersList[i];
        const p = new THREE.Vector3();
        m.getWorldPosition(p);
        p.project(modalCamera);
        if (Math.abs(p.x - ndcX) < threshold && Math.abs(p.y - ndcY) < threshold) {
            return m;
        }
    }
    return null;
}

function updateModalMarkerTooltip(clientX, clientY) {
    if (!modalMarkerTooltip) return;
    const marker = pickSurfaceMarkerAt(clientX, clientY);
    if (marker && marker.userData) {
        modalMarkerTooltip.textContent = marker.userData.name || 'Missions';
        modalMarkerTooltip.classList.remove('hidden');
    } else {
        modalMarkerTooltip.classList.add('hidden');
    }
}

function handleModalMarkerClick(clientX, clientY) {
    const marker = pickSurfaceMarkerAt(clientX, clientY);
    if (!marker || !marker.userData || !marker.userData.id) return;
    selectMissionInModalById(marker.userData.id);
}

if (modalGlobeView) {
    modalGlobeView.addEventListener('mousemove', (e) => { updateModalMarkerTooltip(e.clientX, e.clientY); });
    modalGlobeView.addEventListener('mouseleave', () => { if (modalMarkerTooltip) modalMarkerTooltip.classList.add('hidden'); });
    modalGlobeView.addEventListener('click', (e) => { handleModalMarkerClick(e.clientX, e.clientY); });
}

// Button click listener bound to the function
document.getElementById('reset-view-button').addEventListener('click', resetView);

// UI control bindings
const toggleAnimationButton = document.getElementById('toggle-animation-button');
const speedSelect = document.getElementById('speed-select');
const toggleOrbitsCheckbox = document.getElementById('toggle-orbits');
const toggleAsteroidsCheckbox = document.getElementById('toggle-asteroids');
const toggleKuiperCheckbox = document.getElementById('toggle-kuiper');
const toggleLabelsCheckbox = document.getElementById('toggle-labels');
const presetButtons = document.querySelectorAll('.preset-button');

if (toggleAnimationButton) {
    toggleAnimationButton.textContent = animationPaused ? 'Resume orbits' : 'Pause orbits';
    toggleAnimationButton.addEventListener('click', () => {
        animationPaused = !animationPaused;
        toggleAnimationButton.textContent = animationPaused ? 'Resume orbits' : 'Pause orbits';
    });
}

if (speedSelect) {
    speedSelect.addEventListener('change', (event) => {
        const value = parseFloat(event.target.value);
        speedMultiplier = isNaN(value) ? 1 : value;
    });
}

if (toggleOrbitsCheckbox) {
    toggleOrbitsCheckbox.addEventListener('change', () => {
        const visible = toggleOrbitsCheckbox.checked;
        orbitLines.forEach(line => {
            if (line) line.visible = visible;
        });
    });
}

if (toggleAsteroidsCheckbox) {
    toggleAsteroidsCheckbox.addEventListener('change', () => {
        const visible = toggleAsteroidsCheckbox.checked;
        asteroidGroups.forEach(group => {
            if (group) group.visible = visible;
        });
    });
}

if (toggleKuiperCheckbox) {
    toggleKuiperCheckbox.addEventListener('change', () => {
        const visible = toggleKuiperCheckbox.checked;
        kuiperGroups.forEach(group => {
            if (group) group.visible = visible;
        });
    });
}

if (toggleLabelsCheckbox) {
    toggleLabelsCheckbox.addEventListener('change', () => {
        showLabels = toggleLabelsCheckbox.checked;
    });
}

// Camera preset helper
function startCameraTransition(targetPosition, targetLookAt, durationMs) {
    cameraTransition = {
        startTime: performance.now(),
        duration: durationMs,
        startPosition: camera.position.clone(),
        endPosition: targetPosition.clone(),
        startTarget: controls.target.clone(),
        endTarget: targetLookAt.clone()
    };
}

var presetDuration = PREFERS_REDUCED_MOTION ? 400 : 2200;
if (presetButtons && presetButtons.length) {
    presetButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const preset = btn.getAttribute('data-preset');
            const center = new THREE.Vector3(0, 0, 0);
            if (preset === 'inner') {
                startCameraTransition(new THREE.Vector3(0, 10, 35), center, presetDuration);
            } else if (preset === 'giants') {
                startCameraTransition(new THREE.Vector3(0, 15, 60), center, presetDuration);
            } else if (preset === 'outer') {
                startCameraTransition(new THREE.Vector3(0, 40, 120), center, presetDuration);
            } else if (preset === 'top') {
                startCameraTransition(new THREE.Vector3(0, 120, 0), center, presetDuration);
            }
            updateUrlState({ preset: preset });
        });
    });
}

// Handle Window Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Keyboard shortcuts: Space = pause, 1-4 = presets, R = reset, L = labels
// Space always pauses (never toggles a focused checkbox/button)
window.addEventListener('keydown', function (e) {
    if (e.code === 'Space') {
        e.preventDefault();
        animationPaused = !animationPaused;
        if (toggleAnimationButton) toggleAnimationButton.textContent = animationPaused ? 'Resume orbits' : 'Pause orbits';
        return;
    }
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) return;
    if (e.code === 'KeyR') {
        resetView();
        updateUrlState({ preset: '', body: '' });
        return;
    }
    if (e.code === 'KeyL') {
        showLabels = !showLabels;
        if (toggleLabelsCheckbox) toggleLabelsCheckbox.checked = showLabels;
        return;
    }
    if (e.code === 'Digit1') {
        var b = document.querySelector('.preset-button[data-preset="inner"]');
        if (b) b.click();
        return;
    }
    if (e.code === 'Digit2') {
        var b = document.querySelector('.preset-button[data-preset="giants"]');
        if (b) b.click();
        return;
    }
    if (e.code === 'Digit3') {
        var b = document.querySelector('.preset-button[data-preset="outer"]');
        if (b) b.click();
        return;
    }
    if (e.code === 'Digit4') {
        var b = document.querySelector('.preset-button[data-preset="top"]');
        if (b) b.click();
        return;
    }
    if (e.code === 'Slash' && e.shiftKey) {
        var overlay = document.getElementById('shortcuts-overlay');
        if (overlay) overlay.classList.toggle('hidden');
        return;
    }
});

// Go-to body dropdown (bodies + spacecraft/telescopes)
var goToSelect = document.getElementById('go-to-body');
if (goToSelect) {
    var bodyNames = [SUN_DATA.name];
    PLANETS.forEach(function (p) { bodyNames.push(p.name); });
    DWARF_PLANETS.forEach(function (p) { bodyNames.push(p.name); });
    for (var pn in MOON_SYSTEMS) MOON_SYSTEMS[pn].forEach(function (m) { bodyNames.push(m.name); });
    var bodiesGroup = document.createElement('optgroup');
    bodiesGroup.label = 'Bodies';
    bodyNames.forEach(function (name) {
        var opt = document.createElement('option');
        opt.value = name;
        opt.textContent = name;
        bodiesGroup.appendChild(opt);
    });
    goToSelect.appendChild(bodiesGroup);
    var craftGroup = document.createElement('optgroup');
    craftGroup.label = 'Spacecraft & telescopes';
    MISSIONS.forEach(function (m) {
        if (!m.name) return;
        var opt = document.createElement('option');
        opt.value = m.name;
        opt.textContent = m.name;
        craftGroup.appendChild(opt);
    });
    goToSelect.appendChild(craftGroup);
    goToSelect.addEventListener('change', function () {
        var name = goToSelect.value;
        if (!name) return;
        var mesh = selectableObjects.find(function (o) { return o.userData && o.userData.name === name; });
        if (!mesh) return;
        var worldPos = new THREE.Vector3();
        mesh.getWorldPosition(worldPos);
        var dist = Math.max(15, (mesh.userData.radius || 0.5) * 8);
        var dir = new THREE.Vector3().subVectors(camera.position, worldPos).normalize();
        var targetCam = worldPos.clone().add(dir.multiplyScalar(dist));
        startCameraTransition(targetCam, worldPos.clone(), presetDuration);
        goToSelect.value = '';
    });
}

// Search: Enter to go to first matching body
var searchInput = document.getElementById('search-body');
if (searchInput) {
    searchInput.addEventListener('keydown', function (e) {
        if (e.code !== 'Enter') return;
        var q = searchInput.value.trim().toLowerCase();
        if (!q) return;
        var mesh = selectableObjects.find(function (o) {
            return o.userData && o.userData.name && o.userData.name.toLowerCase().indexOf(q) >= 0;
        });
        if (mesh) {
            var worldPos = new THREE.Vector3();
            mesh.getWorldPosition(worldPos);
            var dist = Math.max(15, (mesh.userData.radius || 0.5) * 8);
            var dir = new THREE.Vector3().subVectors(camera.position, worldPos).normalize();
            startCameraTransition(worldPos.clone().add(dir.multiplyScalar(dist)), worldPos.clone(), presetDuration);
        }
    });
}

// Minimap tooltip
var minimapTooltip = document.getElementById('minimap-tooltip');
var minimapCanvas = document.getElementById('minimap');
if (minimapCanvas && minimapTooltip) {
    minimapCanvas.addEventListener('mousemove', function (e) {
        var rect = minimapCanvas.getBoundingClientRect();
        var x = e.clientX - rect.left, y = e.clientY - rect.top;
        var scale = 50 / 60, cx = 60, cy = 60;
        var worldPos = new THREE.Vector3();
        var hit = null;
        orbitalBodies.forEach(function (b) {
            if (!b.mesh || !b.name) return;
            b.mesh.getWorldPosition(worldPos);
            var px = cx + worldPos.x * scale, py = cy - worldPos.z * scale;
            if (Math.abs(px - x) < 6 && Math.abs(py - y) < 6) hit = b.name;
        });
        if (!hit && Math.abs((cx - x) * (cx - x) + (cy - y) * (cy - y) - 4) < 20) hit = SUN_DATA.name;
        if (hit) {
            minimapTooltip.textContent = hit;
            minimapTooltip.classList.remove('hidden');
        } else {
            minimapTooltip.classList.add('hidden');
        }
    });
    minimapCanvas.addEventListener('mouseleave', function () {
        if (minimapTooltip) minimapTooltip.classList.add('hidden');
    });
}

var togglePauseModalCheckbox = document.getElementById('toggle-pause-modal');
if (togglePauseModalCheckbox) {
    togglePauseModalCheckbox.addEventListener('change', function () {
        pauseWhenModalOpen = togglePauseModalCheckbox.checked;
    });
}

var toggleThemeCheckbox = document.getElementById('toggle-theme');
if (toggleThemeCheckbox) {
    toggleThemeCheckbox.addEventListener('change', function () {
        document.body.classList.toggle('theme-light-panel', toggleThemeCheckbox.checked);
    });
}

var shortcutsHint = document.getElementById('shortcuts-hint');
var shortcutsOverlay = document.getElementById('shortcuts-overlay');
if (shortcutsHint && shortcutsOverlay) {
    shortcutsHint.addEventListener('click', function () { shortcutsOverlay.classList.remove('hidden'); });
}
if (document.getElementById('shortcuts-close')) {
    document.getElementById('shortcuts-close').addEventListener('click', function () {
        if (shortcutsOverlay) shortcutsOverlay.classList.add('hidden');
    });
}
if (shortcutsOverlay) {
    shortcutsOverlay.addEventListener('click', function (e) {
        if (e.target === shortcutsOverlay) shortcutsOverlay.classList.add('hidden');
    });
}

function updateMinimap() {
    var canvas = document.getElementById('minimap');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var w = canvas.width, h = canvas.height, cx = w / 2, cy = h / 2;
    var scale = 50 / 60;
    ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)';
    ctx.lineWidth = 1;
    orbitLines.forEach(function (line) {
        if (!line || !line.visible) return;
        var r = line.geometry && line.geometry.parameters && line.geometry.parameters.innerRadius;
        if (r == null) return;
        ctx.beginPath();
        var rad = Math.min(r * scale, cx - 2);
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.stroke();
    });
    var worldPos = new THREE.Vector3();
    ctx.fillStyle = 'rgba(251, 191, 36, 0.95)';
    ctx.beginPath();
    ctx.arc(cx, cy, 2, 0, Math.PI * 2);
    ctx.fill();
    orbitalBodies.forEach(function (b) {
        if (!b.mesh) return;
        b.mesh.getWorldPosition(worldPos);
        var px = cx + worldPos.x * scale;
        var py = cy - worldPos.z * scale;
        if (px < 0 || px > w || py < 0 || py > h) return;
        ctx.fillStyle = 'rgba(148, 163, 184, 0.9)';
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fill();
    });
    ctx.fillStyle = 'rgba(59, 130, 246, 0.95)';
    ctx.beginPath();
    var tx = cx + controls.target.x * scale;
    var ty = cy - controls.target.z * scale;
    ctx.arc(tx, ty, 3, 0, Math.PI * 2);
    ctx.fill();
}

var scaleComparisonEl = document.getElementById('scale-comparison');
if (scaleComparisonEl) {
    scaleComparisonEl.textContent = 'Scale: If the Sun were 1 m across, Earth would be ~215 m away.';
}

var ambientAudioContext = null;
var ambientGain = null;
function setAmbientSound(on) {
    if (on) {
        if (!ambientAudioContext) {
            try {
                ambientAudioContext = new (window.AudioContext || window.webkitAudioContext)();
                var osc = ambientAudioContext.createOscillator();
                osc.type = 'sine';
                osc.frequency.value = 55;
                ambientGain = ambientAudioContext.createGain();
                ambientGain.gain.value = 0.02;
                osc.connect(ambientGain);
                ambientGain.connect(ambientAudioContext.destination);
                osc.start(0);
                ambientAudioContext._osc = osc;
            } catch (e) { return; }
        }
        if (ambientAudioContext._osc) ambientAudioContext._osc.connect(ambientGain);
    } else {
        if (ambientAudioContext && ambientAudioContext._osc) {
            try { ambientAudioContext._osc.disconnect(); } catch (e) {}
        }
    }
}
var soundToggle = document.getElementById('sound-toggle');
if (soundToggle) {
    soundToggle.addEventListener('change', function () { setAmbientSound(soundToggle.checked); });
}

var fullscreenBtn = document.getElementById('fullscreen-button');
if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', function () {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(function () {});
        } else {
            document.exitFullscreen();
        }
    });
}

var snapshotBtn = document.getElementById('snapshot-button');
if (snapshotBtn) {
    snapshotBtn.addEventListener('click', function () {
        try {
            var dataUrl = renderer.domElement.toDataURL('image/png');
            var a = document.createElement('a');
            a.href = dataUrl;
            a.download = 'solar-system-3d-' + Date.now() + '.png';
            a.click();
        } catch (e) {}
    });
}

// Apply URL state after scene is ready
setTimeout(applyUrlStateOnLoad, 200);

    radius: 1.5,
    color: 0xFFA500,
    texture: 'textures/sun.jpg',
    distanceAU: 0,
    info: "The center of our solar system.",
    radiusKm: 695700,
    orbitalPeriodDays: null,
    orbitalPeriodYears: null
};

// Planet Data (Note: Distances are SCALED for the camera view)
const PLANETS = [
    {
        name: "Mercury",
        type: "Terrestrial planet",
        radius: 0.2,
        distance: 3.0,
        orbitSpeed: 0.015,
        selfRotateSpeed: 0.02,
        distanceAU: 0.39,
        texture: 'textures/mercury.jpg',
        radiusKm: 2440,
        orbitalPeriodDays: 88,
        orbitalPeriodYears: 0.24
    },
    {
        name: "Venus",
        type: "Terrestrial planet",
        radius: 0.4,
        distance: 5.0,
        orbitSpeed: 0.008,
        selfRotateSpeed: 0.01,
        distanceAU: 0.72,
        texture: 'textures/venus.jpg',
        radiusKm: 6052,
        orbitalPeriodDays: 225,
        orbitalPeriodYears: 0.62
    },
    {
        name: "Earth",
        type: "Terrestrial planet",
        radius: 0.5,
        distance: 8.0,
        orbitSpeed: 0.005,
        selfRotateSpeed: 0.007,
        distanceAU: 1.00,
        texture: 'textures/earth.jpg',
        radiusKm: 6371,
        orbitalPeriodDays: 365,
        orbitalPeriodYears: 1
    },
    {
        name: "Mars",
        type: "Terrestrial planet",
        radius: 0.3,
        distance: 12.0,
        orbitSpeed: 0.004,
        selfRotateSpeed: 0.006,
        distanceAU: 1.52,
        texture: 'textures/mars.jpg',
        radiusKm: 3390,
        orbitalPeriodDays: 687,
        orbitalPeriodYears: 1.88
    },
    {
        name: "Jupiter",
        type: "Gas giant",
        radius: 1.2,
        distance: 25.0,
        orbitSpeed: 0.0008,
        selfRotateSpeed: 0.015,
        distanceAU: 5.20,
        texture: 'textures/jupiter.jpg',
        radiusKm: 69911,
        orbitalPeriodDays: 4333,
        orbitalPeriodYears: 11.86
    },
    {
        name: "Saturn",
        type: "Gas giant",
        radius: 1.0,
        distance: 35.0,
        orbitSpeed: 0.0006,
        selfRotateSpeed: 0.01,
        distanceAU: 9.58,
        texture: 'textures/saturn.jpg',
        hasRings: true,
        radiusKm: 58232,
        orbitalPeriodDays: 10759,
        orbitalPeriodYears: 29.45
    },
    {
        name: "Uranus",
        type: "Ice giant",
        radius: 0.8,
        distance: 45.0,
        orbitSpeed: 0.0003,
        selfRotateSpeed: 0.005,
        distanceAU: 19.22,
        texture: 'textures/uranus.jpg',
        radiusKm: 25362,
        orbitalPeriodDays: 30687,
        orbitalPeriodYears: 84.0
    },
    {
        name: "Neptune",
        type: "Ice giant",
        radius: 0.8,
        distance: 55.0,
        orbitSpeed: 0.0002,
        selfRotateSpeed: 0.004,
        distanceAU: 30.05,
        texture: 'textures/neptune.jpg',
        radiusKm: 24622,
        orbitalPeriodDays: 60190,
        orbitalPeriodYears: 164.8
    },
];

// Dwarf planets (no textures; solid color)
const DWARF_PLANETS = [
    { name: "Pluto", type: "Dwarf planet", radius: 0.18, distance: 62.0, orbitSpeed: 0.00016, selfRotateSpeed: 0.004, distanceAU: 39.48, color: 0xC4A574, radiusKm: 1188, orbitalPeriodDays: 90553, orbitalPeriodYears: 248, info: "Former ninth planet; Kuiper Belt object." },
    { name: "Ceres", type: "Dwarf planet", radius: 0.08, distance: 18.0, orbitSpeed: 0.0022, selfRotateSpeed: 0.006, distanceAU: 2.77, color: 0x9a9a9a, radiusKm: 473, orbitalPeriodDays: 1680, orbitalPeriodYears: 4.6, info: "Largest object in the asteroid belt." }
];

// Data for Moons: Only Earth's moon has the 'moon.jpg' texture, the rest use solid colors.
const MOON_SYSTEMS = {
    "Earth": [
        { name: "Moon", radius: 0.15, distance: 1.5, orbitSpeed: 0.05, selfRotateSpeed: 0.015, texture: 'textures/moon.jpg', info: "Earth's only natural satellite.", radiusKm: 1737, orbitalPeriodDays: 27.3 }
    ],
    "Mars": [
        // Phobos and Deimos will use solid color (no texture defined)
        { name: "Phobos", radius: 0.08, distance: 0.5, orbitSpeed: 0.1, selfRotateSpeed: 0.05, info: "Inner, fast-orbiting moon.", radiusKm: 11, orbitalPeriodDays: 0.3 }, 
        { name: "Deimos", radius: 0.05, distance: 0.9, orbitSpeed: 0.05, selfRotateSpeed: 0.03, info: "Outer, potato-shaped moon.", radiusKm: 6, orbitalPeriodDays: 1.3 }
    ],
    "Jupiter": [
        { name: "Io", radius: 0.25, distance: 2.0, orbitSpeed: 0.03, selfRotateSpeed: 0.01, info: "Volcanically active.", radiusKm: 1821, orbitalPeriodDays: 1.8 },
        { name: "Europa", radius: 0.2, distance: 3.0, orbitSpeed: 0.02, selfRotateSpeed: 0.008, info: "Icy, possible sub-surface ocean.", radiusKm: 1561, orbitalPeriodDays: 3.5 },
        { name: "Ganymede", radius: 0.35, distance: 4.5, orbitSpeed: 0.015, selfRotateSpeed: 0.006, info: "Largest moon in solar system.", radiusKm: 2634, orbitalPeriodDays: 7.2 },
        { name: "Callisto", radius: 0.3, distance: 5.5, orbitSpeed: 0.012, selfRotateSpeed: 0.005, info: "Heavily cratered, possible subsurface ocean.", radiusKm: 2410, orbitalPeriodDays: 16.7 }
    ],
    "Saturn": [
        { name: "Titan", radius: 0.45, distance: 3.5, orbitSpeed: 0.01, selfRotateSpeed: 0.005, info: "Hazy atmosphere, largest moon.", radiusKm: 2575, orbitalPeriodDays: 16.0 },
        { name: "Rhea", radius: 0.2, distance: 4.5, orbitSpeed: 0.008, selfRotateSpeed: 0.004, info: "Second largest moon.", radiusKm: 764, orbitalPeriodDays: 4.5 },
        { name: "Enceladus", radius: 0.12, distance: 2.2, orbitSpeed: 0.018, selfRotateSpeed: 0.008, info: "Ice geysers; potential habitability.", radiusKm: 252, orbitalPeriodDays: 1.4 }
    ],
    "Uranus": [
        { name: "Titania", radius: 0.2, distance: 2.5, orbitSpeed: 0.01, selfRotateSpeed: 0.005, info: "Largest moon of Uranus.", radiusKm: 789, orbitalPeriodDays: 8.7 } 
    ],
    "Neptune": [
        { name: "Triton", radius: 0.25, distance: 2.5, orbitSpeed: 0.01, selfRotateSpeed: 0.005, info: "Retrograde orbit.", radiusKm: 1353, orbitalPeriodDays: 5.9 } 
    ]
};

// Highlighted space missions (sample set; can be extended)
// Note: Positions are approximate and scaled for visualization, not precise ephemeris.
const MISSIONS = [
    // Earth orbit & Moon
    {
        id: 'sputnik-1',
        name: 'Sputnik 1',
        agency: 'Soviet Union',
        target: 'Earth',
        type: 'Satellite',
        year: 1957,
        status: 'Reentered atmosphere',
        description: 'First artificial satellite to orbit Earth.',
        altitudeKm: 215,
        longitudeDeg: -20,
        inclinationDeg: 65,
        flightPath: {
            launchSite: { lat: 45.9203, lon: 63.3422 }, // Baikonur, Site 1/5 ("Gagarin's Start")
            launchDateLabel: 'October 4, 1957 · 19:28:34 UTC',
            outcome: 'success',
            successNote: 'Launched on a modified R-7 intercontinental ballistic missile and reached orbit about 5 minutes after liftoff — the first human-made object ever to do so. It circled Earth every 96 minutes, transmitting its famous radio "beep" for 21 days before its batteries died, and burned up on reentry on January 4, 1958.'
        }
    },
    {
        id: 'apollo-11',
        name: 'Apollo 11',
        agency: 'NASA (USA)',
        target: 'Moon',
        type: 'Crewed landing',
        year: 1969,
        status: 'Completed',
        description: 'First crewed Moon landing (Neil Armstrong & Buzz Aldrin).',
        longitudeDeg: 23.47,
        latitudeDeg: 0.67,
        flightPath: {
            launchSite: { lat: 28.608, lon: -80.604 }, // Kennedy Space Center, Pad 39A
            launchDateLabel: 'July 16, 1969 · 9:32 AM EDT',
            outcome: 'success',
            successNote: 'Reached Earth orbit, then translunar injection about 3 hours later. Landed on the Moon July 20, 1969.'
        }
    },
    {
        id: 'apollo-12',
        name: 'Apollo 12',
        agency: 'NASA (USA)',
        target: 'Moon',
        type: 'Crewed landing',
        year: 1969,
        status: 'Completed',
        description: 'Second crewed Moon landing near Surveyor 3.',
        longitudeDeg: -23.42,
        latitudeDeg: -3.01,
        flightPath: {
            launchSite: { lat: 28.608, lon: -80.604 }, // Kennedy Space Center, Pad 39A
            launchDateLabel: 'November 14, 1969 · 11:22 AM EST',
            outcome: 'success',
            successNote: 'Struck by lightning twice during ascent (T+36s and T+52s), knocking out telemetry and the guidance platform. Flight controller John Aaron\'s call to "try SCE to AUX" let the crew restore power, and the Saturn V reached Earth orbit undamaged.'
        }
    },
    {
        id: 'apollo-14',
        name: 'Apollo 14',
        agency: 'NASA (USA)',
        target: 'Moon',
        type: 'Crewed landing',
        year: 1971,
        status: 'Completed',
        description: 'Third crewed Moon landing at Fra Mauro.',
        longitudeDeg: -17.47,
        latitudeDeg: -3.65,
        flightPath: {
            launchSite: { lat: 28.608, lon: -80.604 }, // Kennedy Space Center, Pad 39A
            launchDateLabel: 'January 31, 1971 · 4:03 PM EST',
            outcome: 'success',
            successNote: 'Reached Earth parking orbit on schedule after a launch delayed 40 minutes by weather. Translunar injection followed about an hour later, sending Shepard, Roosa and Mitchell toward the Fra Mauro highlands.'
        }
    },
    {
        id: 'apollo-15',
        name: 'Apollo 15',
        agency: 'NASA (USA)',
        target: 'Moon',
        type: 'Crewed landing',
        year: 1971,
        status: 'Completed',
        description: 'First mission with the Lunar Roving Vehicle.',
        longitudeDeg: 3.65,
        latitudeDeg: 26.1,
        flightPath: {
            launchSite: { lat: 28.608, lon: -80.604 }, // Kennedy Space Center, Pad 39A
            launchDateLabel: 'July 26, 1971 · 9:34 AM EDT',
            outcome: 'success',
            successNote: 'Reached Earth parking orbit 11 minutes 44 seconds after liftoff. First of the heavier "J-class" Apollo missions, carrying the Lunar Roving Vehicle to the Moon for the first time.'
        }
    },
    {
        id: 'apollo-16',
        name: 'Apollo 16',
        agency: 'NASA (USA)',
        target: 'Moon',
        type: 'Crewed landing',
        year: 1972,
        status: 'Completed',
        description: 'Explored the lunar highlands near Descartes.',
        longitudeDeg: 15.5,
        latitudeDeg: -8.97,
        flightPath: {
            launchSite: { lat: 28.608, lon: -80.604 }, // Kennedy Space Center, Pad 39A
            launchDateLabel: 'April 16, 1972 · 12:54 PM EST',
            outcome: 'success',
            successNote: 'Reached Earth orbit on a nominal ascent, carrying Young, Mattingly and Duke toward the lunar highlands near Descartes for the first geological survey of that terrain.'
        }
    },
    {
        id: 'apollo-17',
        name: 'Apollo 17',
        agency: 'NASA (USA)',
        target: 'Moon',
        type: 'Crewed landing',
        year: 1972,
        status: 'Completed',
        description: 'Last crewed Moon landing; first geologist on the Moon.',
        longitudeDeg: 30.77,
        latitudeDeg: 20.19,
        flightPath: {
            launchSite: { lat: 28.608, lon: -80.604 }, // Kennedy Space Center, Pad 39A
            launchDateLabel: 'December 7, 1972 · 12:33 AM EST',
            outcome: 'success',
            successNote: 'Delayed 2 hours 40 minutes by a countdown sequencer fault, then lifted off as the only night launch of the Apollo program, turning the Florida sky to daylight before reaching Earth orbit with Cernan, Evans and Schmitt aboard.'
        }
    },
    {
        id: 'apollo-13',
        name: 'Apollo 13',
        agency: 'NASA (USA)',
        target: 'Moon',
        type: 'Crewed mission (aborted landing)',
        year: 1970,
        status: 'Crew returned safely after in-flight failure.',
        description: 'Famous \"successful failure\" mission; no lunar landing.',
        flightPath: {
            launchSite: { lat: 28.608, lon: -80.604 }, // Kennedy Space Center, Pad 39A
            launchDateLabel: 'April 11, 1970 · 2:13 PM EST',
            outcome: 'success',
            successNote: 'The ascent itself was nominal — a center engine on the second stage shut down two minutes early, and the other engines simply burned longer to compensate. Apollo 13 reached Earth orbit safely. The famous oxygen tank explosion that aborted the Moon landing happened two days later, en route to the Moon, not during launch.'
        }
    },
    {
        id: 'sts-51l-challenger',
        name: 'STS-51-L (Challenger)',
        agency: 'NASA (USA)',
        target: 'Earth',
        type: 'Crewed orbiter (launch failure)',
        year: 1986,
        status: 'Broke apart 73 seconds after launch; all 7 crew lost.',
        description: 'Space Shuttle Challenger disintegrated shortly after liftoff when hot gas escaped through a failed O-ring seal in the right solid rocket booster, weakened by unusually cold overnight temperatures at the launch site.',
        flightPath: {
            launchSite: { lat: 28.627, lon: -80.621 }, // Kennedy Space Center, Pad 39B
            launchDateLabel: 'January 28, 1986 · 11:38 AM EST',
            outcome: 'failure',
            failure: {
                elapsedSeconds: 73,
                altitudeKm: 14,
                note: 'At T+73 seconds, an O-ring seal in the right solid rocket booster failed, weakened by unusually cold overnight temperatures. The external tank broke apart at about 14 km (46,000 ft) altitude. All 7 crew members were lost.'
            }
        }
    },
    {
        id: 'luna-2',
        name: 'Luna 2',
        agency: 'Soviet Union',
        target: 'Moon',
        type: 'Impact probe',
        year: 1959,
        status: 'Impact on lunar surface.',
        description: 'First human-made object to reach the Moon.',
        flightPath: {
            launchSite: { lat: 45.9203, lon: 63.3422 }, // Baikonur, Site 1/5 ("Gagarin's Start")
            launchDateLabel: 'September 12, 1959 · 06:39:42 UTC',
            outcome: 'success',
            successNote: 'Launched on a direct path to the Moon on a modified R-7 rocket. About 36 hours later it struck the lunar surface near the Aristides, Archimedes and Autolycus craters — the first human-made object to touch another world.'
        }
    },
    {
        id: 'luna-9',
        name: 'Luna 9',
        agency: 'Soviet Union',
        target: 'Moon',
        type: 'Lander',
        year: 1966,
        status: 'Completed',
        description: 'First successful soft landing on the Moon.',
        flightPath: {
            launchSite: { lat: 45.9961, lon: 63.5642 }, // Baikonur, Site 31/6
            launchDateLabel: 'January 31, 1966 · 11:41:37 UTC',
            outcome: 'success',
            successNote: 'Reached a parking orbit before its Molniya upper stage sent it toward the Moon. On February 3, 1966, Luna 9 achieved the first successful soft landing on another world and transmitted the first close-up photographs from the lunar surface.'
        }
    },
    {
        id: 'luna-15',
        name: 'Luna 15',
        agency: 'Soviet Union',
        target: 'Moon',
        type: 'Sample return (failed)',
        year: 1969,
        status: 'Crashed during descent near Mare Crisium.',
        description: 'Attempted sample return mission that failed during landing.',
        flightPath: {
            launchSite: { lat: 46.071, lon: 62.985 }, // Baikonur, Site 81/24
            launchDateLabel: 'July 13, 1969 · 02:54:42 UTC',
            outcome: 'success',
            successNote: 'Launched on a Proton rocket three days before Apollo 11, in an unstated attempt to return lunar soil to Earth first. The Earth ascent and lunar orbit insertion were both successful — the failure came 8 days later during the final descent, when Luna 15 struck a mountainside in Mare Crisium, just hours before Armstrong and Aldrin lifted off from the Moon.'
        }
    },
    {
        id: 'chang-e-3',
        name: 'Chang\'e 3',
        agency: 'CNSA (China)',
        target: 'Moon',
        type: 'Lander & rover',
        year: 2013,
        status: 'Mission complete.',
        description: 'First soft landing on the Moon since 1976; carried Yutu rover.',
        flightPath: {
            launchSite: { lat: 28.2455, lon: 102.027 }, // Xichang Satellite Launch Center, LC-2
            launchDateLabel: 'December 1, 2013 · 17:30 UTC',
            outcome: 'success',
            successNote: 'Launched on a Long March 3B directly onto a translunar trajectory. Landed in Sinus Iridum on December 14, 2013 — the first soft lunar landing by any nation since the Soviet Luna 24 in 1976.'
        }
    },
    {
        id: 'chang-e-4',
        name: 'Chang\'e 4',
        agency: 'CNSA (China)',
        target: 'Moon',
        type: 'Lander & rover',
        year: 2018,
        status: 'Operational.',
        description: 'First soft landing on the lunar far side; carries Yutu-2 rover.',
        flightPath: {
            launchSite: { lat: 28.2455, lon: 102.027 }, // Xichang Satellite Launch Center, LA-2
            launchDateLabel: 'December 7, 2018 · 18:23 UTC',
            outcome: 'success',
            successNote: 'Launched on a Long March 3B, relying on the Queqiao relay satellite (placed at Earth-Moon L2 seven months earlier) to communicate once on the far side. Landed in Von Kármán crater on January 3, 2019 — the first-ever landing on the Moon\'s far side.'
        }
    },
    {
        id: 'chandrayaan-2',
        name: 'Chandrayaan-2',
        agency: 'ISRO (India)',
        target: 'Moon',
        type: 'Orbiter, lander & rover (partial success)',
        year: 2019,
        status: 'Orbiter operational; lander crashed.',
        description: 'India\'s second lunar mission; orbiter continues to study the Moon.',
        flightPath: {
            launchSite: { lat: 13.7199, lon: 80.2304 }, // Satish Dhawan Space Centre, Second Launch Pad
            launchDateLabel: 'July 22, 2019 · 09:13 UTC',
            outcome: 'success',
            successNote: 'India\'s heaviest rocket, the GSLV Mk III, placed Chandrayaan-2 into Earth orbit cleanly after a launch delayed a week by a cryogenic-stage helium leak. The orbiter remains operational; the Vikram lander crashed during its final descent to the Moon on September 6, 2019 — a failure at the destination, not at launch.'
        }
    },
    {
        id: 'iss',
        name: 'International Space Station',
        agency: 'NASA / Roscosmos / ESA / JAXA / CSA',
        target: 'Earth',
        type: 'Space station',
        year: 1998,
        status: 'Operational',
        description: 'Modular space station in low Earth orbit, permanently crewed.',
        altitudeKm: 420,
        longitudeDeg: 45,
        inclinationDeg: 51.6,
        flightPath: {
            launchSite: { lat: 46.071, lon: 62.985 }, // Baikonur, Site 81/23
            launchDateLabel: 'November 20, 1998 · 06:40 UTC',
            outcome: 'success',
            successNote: 'The Zarya module — the station\'s first piece — launched on a Proton-K rocket and reached orbit on schedule. It would be joined by the American Unity module two weeks later, beginning two decades of continuous assembly and habitation.'
        }
    },
    {
        id: 'hubble',
        name: 'Hubble Space Telescope',
        agency: 'NASA / ESA',
        target: 'Earth',
        type: 'Space telescope',
        year: 1990,
        status: 'Operational',
        description: 'Iconic space telescope that revolutionized astronomy.',
        altitudeKm: 540,
        longitudeDeg: 160,
        inclinationDeg: 28.5,
        flightPath: {
            launchSite: { lat: 28.627, lon: -80.621 }, // Kennedy Space Center, Pad 39B
            launchDateLabel: 'April 24, 1990 · 8:33:51 AM EDT',
            outcome: 'success',
            successNote: 'Carried to orbit in the payload bay of Space Shuttle Discovery on mission STS-31, then deployed by the crew the next day using the shuttle\'s robotic arm — the highest orbit a shuttle had flown to at that point.'
        }
    },
    {
        id: 'jwst',
        name: 'James Webb Space Telescope',
        agency: 'NASA / ESA / CSA',
        target: 'Earth',
        type: 'Space telescope',
        year: 2021,
        status: 'Operational',
        description: 'Infrared observatory at Sun–Earth L2; successor to Hubble for deep-space imaging.',
        altitudeKm: 1.5e6,
        longitudeDeg: 200,
        inclinationDeg: 0,
        flightPath: {
            launchSite: { lat: 5.239, lon: -52.768 }, // Guiana Space Centre, ELA-3
            launchDateLabel: 'December 25, 2021 · 07:20 AM EST',
            outcome: 'success',
            successNote: 'Launched on an Ariane 5 with such precise trajectory accuracy that ground controllers used far less onboard fuel than planned for course correction — extending the telescope\'s operational life well beyond its original 10-year estimate. It reached the Sun-Earth L2 point, 1.5 million km out, about a month later.'
        }
    },
    // Mars missions
    {
        id: 'viking-1',
        name: 'Viking 1',
        agency: 'NASA (USA)',
        target: 'Mars',
        type: 'Lander & orbiter',
        year: 1975,
        status: 'Completed',
        description: 'First successful Mars lander and orbiter mission.',
        orbitalRadiusOffset: 1.0,
        alongOrbitDeg: 40,
        flightPath: {
            launchSite: { lat: 28.583, lon: -80.583 }, // Cape Canaveral, Launch Complex 41
            launchDateLabel: 'August 20, 1975 · 5:22 PM EDT',
            outcome: 'success',
            successNote: 'Launched on a Titan IIIE-Centaur, reaching Earth parking orbit before the Centaur upper stage re-ignited to send it toward Mars — an 11-month cruise ending with the first fully successful landing on another planet, on July 20, 1976.'
        }
    },
    {
        id: 'venera-7',
        name: 'Venera 7',
        agency: 'Soviet Union',
        target: 'Venus',
        type: 'Lander',
        year: 1970,
        status: 'First successful landing on another planet (short-lived).',
        orbitalRadiusOffset: 0.8,
        alongOrbitDeg: -60,
        flightPath: {
            launchSite: { lat: 45.9961, lon: 63.5642 }, // Baikonur, Site 31/6
            launchDateLabel: 'August 17, 1970 · 05:38:22 UTC',
            outcome: 'success',
            successNote: 'Launched on a Molniya rocket toward Venus. On December 15, 1970, it became the first spacecraft to transmit data from the surface of another planet — surviving just 23 minutes in Venus\'s crushing 90-atmosphere pressure and 465°C heat before falling silent.'
        }
    },
    {
        id: 'mars-climate-orbiter',
        name: 'Mars Climate Orbiter',
        agency: 'NASA (USA)',
        target: 'Mars',
        type: 'Orbiter',
        year: 1998,
        status: 'Lost due to navigation error (metric/imperial mismatch).',
        orbitalRadiusOffset: 0.8,
        alongOrbitDeg: 120,
        flightPath: {
            launchSite: { lat: 28.447, lon: -80.566 }, // Cape Canaveral, Launch Complex 17A
            launchDateLabel: 'December 11, 1998 · 1:45:51 PM EST',
            outcome: 'success',
            successNote: 'The Delta II launch was entirely nominal and put the spacecraft on a correct course for Mars. The failure came 9 months later, at the destination: ground software used imperial pound-seconds while the spacecraft expected metric newton-seconds, sending it too low into the Martian atmosphere where it broke apart on September 23, 1999.'
        }
    },
    {
        id: 'sojourner',
        name: 'Mars Pathfinder / Sojourner',
        agency: 'NASA (USA)',
        target: 'Mars',
        type: 'Lander & rover',
        year: 1996,
        status: 'Completed',
        description: 'First successful Mars rover.',
        orbitalRadiusOffset: 0.6,
        alongOrbitDeg: -120,
        flightPath: {
            launchSite: { lat: 28.447, lon: -80.566 }, // Cape Canaveral, Launch Complex 17A
            launchDateLabel: 'December 4, 1996 · 1:58 AM EST',
            outcome: 'success',
            successNote: 'Launched on a Delta II directly onto a Mars transfer trajectory. Instead of a powered landing, it used an airbag system to bounce to a stop in Ares Vallis on July 4, 1997 — the first use of that landing method, later reused for Spirit and Opportunity.'
        }
    },
    {
        id: 'spirit',
        name: 'Spirit',
        agency: 'NASA (USA)',
        target: 'Mars',
        type: 'Rover',
        year: 2003,
        status: 'Mission complete',
        description: 'Mars Exploration Rover; operated for over 6 years.',
        orbitalRadiusOffset: 0.4,
        alongOrbitDeg: -10,
        flightPath: {
            launchSite: { lat: 28.447, lon: -80.566 }, // Cape Canaveral, Launch Complex 17A
            launchDateLabel: 'June 10, 2003 · 1:59 PM EDT',
            outcome: 'success',
            successNote: 'Launched on a Delta II, the first of two Mars Exploration Rovers to leave Earth. Landed in Gusev Crater on January 4, 2004, and kept working for over six years — 25 times its planned 90-day mission.'
        }
    },
    {
        id: 'opportunity',
        name: 'Opportunity',
        agency: 'NASA (USA)',
        target: 'Mars',
        type: 'Rover',
        year: 2003,
        status: 'Mission complete',
        description: 'Mars rover that operated for nearly 15 years.',
        orbitalRadiusOffset: 0.4,
        alongOrbitDeg: 30,
        flightPath: {
            launchSite: { lat: 28.436, lon: -80.577 }, // Cape Canaveral, Launch Complex 17B
            launchDateLabel: 'July 7, 2003 · 11:18 PM EDT',
            outcome: 'success',
            successNote: 'Launched three weeks after its twin Spirit, on a Delta II from the neighboring pad 17B. Landed on the opposite side of Mars in Meridiani Planum on January 25, 2004, and kept driving until 2018 — nearly 15 years, the longest surface mission on another world at the time.'
        }
    },
    {
        id: 'curiosity',
        name: 'Curiosity',
        agency: 'NASA (USA)',
        target: 'Mars',
        type: 'Rover',
        year: 2011,
        status: 'Operational',
        description: 'Nuclear-powered rover exploring Gale Crater.',
        orbitalRadiusOffset: 0.2,
        alongOrbitDeg: 70,
        flightPath: {
            launchSite: { lat: 28.583, lon: -80.583 }, // Cape Canaveral, Space Launch Complex 41
            launchDateLabel: 'November 26, 2011 · 10:02 AM EST',
            outcome: 'success',
            successNote: 'Launched on an Atlas V, too heavy for airbags — instead it used a first-of-its-kind "sky crane" that lowered the rover on cables from a hovering rocket stage. Landed in Gale Crater on August 6, 2012, and has been climbing Mount Sharp ever since.'
        }
    },
    {
        id: 'perseverance',
        name: 'Perseverance',
        agency: 'NASA (USA)',
        target: 'Mars',
        type: 'Rover',
        year: 2020,
        status: 'Operational',
        description: 'Mars rover exploring Jezero Crater with a focus on astrobiology.',
        orbitalRadiusOffset: 0.1,
        alongOrbitDeg: -70,
        flightPath: {
            launchSite: { lat: 28.583, lon: -80.583 }, // Cape Canaveral, Space Launch Complex 41
            launchDateLabel: 'July 30, 2020 · 7:50 AM EDT',
            outcome: 'success',
            successNote: 'Launched on an Atlas V during Mars\'s tight 2020 launch window. Landed in Jezero Crater on February 18, 2021, using an upgraded sky-crane system with terrain-relative navigation, and carried the small Ingenuity helicopter — the first powered flight on another planet — attached to its belly.'
        }
    },
    // Outer solar system
    {
        id: 'voyager-1',
        name: 'Voyager 1',
        agency: 'NASA (USA)',
        target: 'Interstellar space',
        type: 'Flyby / interstellar probe',
        year: 1977,
        status: 'Operational',
        description: 'Most distant human-made object, exploring interstellar space.',
        radialDistance: 140, // scaled distance from Sun (legacy static marker; superseded by journey.current for the Trace Journey view)
        polarAngleDeg: 20,
        azimuthDeg: 45,
        flightPath: {
            launchSite: { lat: 28.583, lon: -80.583 }, // Cape Canaveral, Launch Complex 41
            launchDateLabel: 'September 5, 1977 · 8:56 AM EDT',
            outcome: 'success',
            successNote: 'Despite the "1" in its name, Voyager 1 launched 16 days after Voyager 2, on a faster trajectory that let it overtake its twin before reaching Jupiter. It is now the most distant human-made object in existence, having crossed into interstellar space in 2012.'
        },
        // Real post-launch trajectory for the "Trace Journey" replay. Flyby legs reuse this
        // app's own already-placed planet distances (PLANETS[].distance) and its existing
        // circular-orbit angle model (REALTIME_EPOCH_MS + orbitalPeriodDays) evaluated at the
        // real historical flyby date, so the path lines up with the planets exactly as this
        // app already renders them — same precision level as the rest of the scene, no new
        // guesswork. Legs beyond Pluto's orbit (no planet to anchor to) hold the same bearing
        // as the last flyby and use auToSceneDistance() to extrapolate the compressed scale.
        journey: {
            legs: [
                {
                    type: 'flyby',
                    body: 'Jupiter',
                    date: '1979-03-05',
                    dateLabel: 'March 5, 1979',
                    note: 'Closest approach 12:05 UT, passing within about 349,000 km of Jupiter\'s center. Discovered active volcanoes on Io and two new moons, Thebe and Metis.'
                },
                {
                    type: 'flyby',
                    body: 'Saturn',
                    date: '1980-11-12',
                    dateLabel: 'November 12, 1980',
                    note: 'Closest approach 23:46 UT, passing about 124,000 km above Saturn\'s cloud tops. A close flyby of the moon Titan bent the trajectory north out of the plane of the planets, ending any chance of visiting Uranus or Neptune.'
                },
                {
                    type: 'outbound',
                    label: 'Crossed the heliopause',
                    date: '2012-08-25',
                    dateLabel: 'August 25, 2012',
                    distanceAU: 121.7, // backward-computed from the sourced Aug 2024 anchor + rate below, consistent with commonly cited ~121 AU
                    note: 'Left the heliosphere — the bubble of solar wind and magnetic field blown out by the Sun — and became the first human-made object to enter true interstellar space.'
                }
            ],
            current: {
                referenceDate: '2024-08-21',
                referenceDistanceAU: 164.7,
                velocityKmS: 17.0,
                sourceNote: 'NASA JPL, as of Aug 21, 2024: 164.7 AU from Earth, moving at 17.0 km/s relative to the Sun (~3.59 AU/year).'
            }
        }
    },
    {
        id: 'voyager-2',
        name: 'Voyager 2',
        agency: 'NASA (USA)',
        target: 'Outer planets',
        type: 'Flyby / interstellar probe',
        year: 1977,
        status: 'Operational',
        description: 'Only spacecraft to have visited Uranus and Neptune.',
        radialDistance: 120, // scaled distance from Sun (legacy static marker; superseded by journey.current for the Trace Journey view)
        polarAngleDeg: 40,
        azimuthDeg: -60,
        flightPath: {
            launchSite: { lat: 28.583, lon: -80.583 }, // Cape Canaveral, Launch Complex 41
            launchDateLabel: 'August 20, 1977 · 10:29 AM EDT',
            outcome: 'success',
            successNote: 'Launched first of the two Voyagers, on a slower path that took advantage of a rare planetary alignment to visit all four giant planets. It remains the only spacecraft to have flown past Uranus and Neptune.'
        },
        journey: {
            legs: [
                {
                    type: 'flyby',
                    body: 'Jupiter',
                    date: '1979-07-09',
                    dateLabel: 'July 9, 1979',
                    note: 'Passed within about 570,000 km of Jupiter\'s cloud tops, four months after Voyager 1, confirming several of its twin\'s discoveries and returning new views of the Great Red Spot.'
                },
                {
                    type: 'flyby',
                    body: 'Saturn',
                    date: '1981-08-25',
                    dateLabel: 'August 25, 1981',
                    note: 'Passed about 101,000 km from Saturn, deliberately aimed to bend its path onward toward Uranus — a trajectory only possible because of the rare outer-planet alignment of the late 1970s and 1980s.'
                },
                {
                    type: 'flyby',
                    body: 'Uranus',
                    date: '1986-01-24',
                    dateLabel: 'January 24, 1986',
                    note: 'Passed within about 81,500 km of Uranus\'s cloud tops — the only spacecraft ever to visit the planet. Discovered 10 new moons and 2 new rings.'
                },
                {
                    type: 'flyby',
                    body: 'Neptune',
                    date: '1989-08-25',
                    dateLabel: 'August 25, 1989',
                    note: 'The grand finale of the primary mission: passed just 4,951 km above Neptune\'s north pole, the closest flyby of any planet in the Voyager program, then dove south over Triton before heading out of the solar system.'
                },
                {
                    type: 'outbound',
                    label: 'Crossed the heliopause',
                    date: '2018-11-05',
                    dateLabel: 'November 5, 2018',
                    distanceAU: 119.7, // NASA / Wikipedia, sourced at the crossing itself
                    note: 'Became the second human-made object, after Voyager 1, to leave the heliosphere and enter interstellar space — this time with a working plasma instrument still returning data, which Voyager 1\'s no longer had.'
                }
            ],
            current: {
                referenceDate: '2012-09-09',
                referenceDistanceAU: 99.504, // from the Sun (NASA), same source date also gives velocity below
                velocityKmS: 15.436,
                sourceNote: 'NASA JPL, as of Sept 9, 2012: 99.504 AU from the Sun, moving at 15.436 km/s relative to the Sun (~3.26 AU/year).'
            }
        }
    },
    {
        id: 'pioneer-10',
        name: 'Pioneer 10',
        agency: 'NASA (USA)',
        target: 'Jupiter / outer solar system',
        type: 'Flyby probe',
        year: 1972,
        status: 'Mission complete',
        description: 'First spacecraft to travel through the asteroid belt and make direct observations of Jupiter.',
        radialDistance: 80,
        polarAngleDeg: 30,
        azimuthDeg: 120,
        flightPath: {
            launchSite: { lat: 28.484, lon: -80.542 }, // Cape Canaveral, Launch Complex 36A
            launchDateLabel: 'March 2, 1972 · 8:49 PM EST',
            outcome: 'success',
            successNote: 'Launched on an Atlas-Centaur with a solid third stage, reaching the highest velocity of any human-made object at that time — enough to cross the Moon\'s orbit in just 11 hours. It became the first spacecraft to cross the asteroid belt and fly past Jupiter.'
        },
        // Unlike Voyager, NASA lost contact with Pioneer 10 in 2003 — its current
        // position below is an honest extrapolation from the last confirmed tracking
        // data, not an actively-tracked live figure. Noted explicitly in the final leg.
        journey: {
            legs: [
                {
                    type: 'flyby',
                    body: 'Jupiter',
                    date: '1973-12-03',
                    dateLabel: 'December 3, 1973',
                    note: 'Passed within about 132,000 km of Jupiter\'s cloud tops — humanity\'s first close look at the largest planet, and the first use of a planet\'s gravity to reach solar-system escape velocity.'
                },
                {
                    type: 'outbound',
                    label: 'Crossed Pluto\'s orbit',
                    date: '1983-06-13',
                    dateLabel: '1983',
                    distanceAU: 39.48, // Pluto's own real distance, already an anchor in this app's own scale
                    note: 'Became the first human-made object to travel beyond the orbits of all the known planets.'
                },
                {
                    type: 'outbound',
                    label: 'Last signal received',
                    date: '2003-01-23',
                    dateLabel: 'January 23, 2003',
                    distanceAU: 79.55, // 11.9 billion km, NASA's own last-contact figure
                    note: 'NASA\'s Deep Space Network heard Pioneer 10\'s last faint signal, 30 years and 10 months after launch — far outliving its planned 21-month mission. A follow-up attempt two weeks later heard nothing; the spacecraft\'s plutonium power source had finally decayed too far to transmit.'
                }
            ],
            current: {
                referenceDate: '1997-12-01',
                referenceDistanceAU: 68.85,
                velocityKmS: 12.24,
                sourceNote: 'Extrapolated, not tracked: NASA lost contact in 2003. Last confirmed NASA distance/velocity reading, Dec 1, 1997: 68.85 AU from the Sun at 12.24 km/s (~2.58 AU/year). Position below assumes that heading and speed have held steady since — unlike Voyager, no one has actually checked in over two decades.'
            }
        }
    },
    {
        id: 'cassini-huygens',
        name: 'Cassini–Huygens',
        agency: 'NASA / ESA / ASI',
        target: 'Saturn & Titan',
        type: 'Orbiter & lander',
        year: 1997,
        status: 'Mission complete (Grand Finale plunge in 2017).',
        description: 'Revealed Saturn\'s rings, moons, and delivered the Huygens probe to Titan.',
        attachTo: 'Saturn',
        radialOffset: 3.0,
        angleDeg: -45,
        flightPath: {
            launchSite: { lat: 28.562, lon: -80.577 }, // Cape Canaveral, Launch Complex 40
            launchDateLabel: 'October 15, 1997 · 4:43 AM EDT',
            outcome: 'success',
            successNote: 'Launched on a Titan IVB/Centaur, the most powerful US rocket flying at the time, carrying the largest interplanetary probe ever built. It took a nearly 7-year, multi-planet gravity-assist route through Venus and Jupiter before entering orbit around Saturn in 2004.'
        }
    },
    {
        id: 'juno',
        name: 'Juno',
        agency: 'NASA (USA)',
        target: 'Jupiter',
        type: 'Orbiter',
        year: 2011,
        status: 'Operational',
        description: 'Studies Jupiter\'s composition, gravity field, and magnetosphere.',
        attachTo: 'Jupiter',
        radialOffset: 3.0,
        angleDeg: 60,
        flightPath: {
            launchSite: { lat: 28.583, lon: -80.583 }, // Cape Canaveral, Space Launch Complex 41
            launchDateLabel: 'August 5, 2011 · 12:25 PM EDT',
            outcome: 'success',
            successNote: 'Launched on an Atlas V, the first solar-powered spacecraft sent to Jupiter — previous outer-planet missions relied on plutonium generators. Its three enormous solar arrays span the size of a basketball court.'
        }
    },
    {
        id: 'new-horizons',
        name: 'New Horizons',
        agency: 'NASA (USA)',
        target: 'Pluto & Kuiper Belt',
        type: 'Flyby probe',
        year: 2006,
        status: 'Extended mission in Kuiper Belt.',
        description: 'First spacecraft to explore Pluto and its moons, now exploring Kuiper Belt objects.',
        radialDistance: 90,
        polarAngleDeg: 70,
        azimuthDeg: -20,
        flightPath: {
            launchSite: { lat: 28.583, lon: -80.583 }, // Cape Canaveral, Launch Complex 41
            launchDateLabel: 'January 19, 2006 · 2:00 PM EST',
            outcome: 'success',
            successNote: 'Launched on the fastest rocket combination ever flown — an Atlas V with a solid kick stage — leaving Earth faster than any spacecraft before it and passing the Moon\'s orbit in just 9 hours. It reached Pluto after a 9.5-year cruise in July 2015.'
        },
        journey: {
            legs: [
                {
                    type: 'flyby',
                    body: 'Jupiter',
                    date: '2007-02-28',
                    dateLabel: 'February 28, 2007',
                    note: 'A gravity-assist flyby, passing about 2.3 million km from Jupiter — not a science target in itself, but the boost that cut the trip to Pluto from 14 years down to under 10.'
                },
                {
                    type: 'flyby',
                    body: 'Pluto',
                    date: '2015-07-14',
                    dateLabel: 'July 14, 2015',
                    note: 'Closest approach 11:49:57 UT, passing about 12,500 km from Pluto\'s surface — the first-ever close look at the dwarf planet, revealing water-ice mountains and nitrogen-ice plains after a 9.5-year journey.'
                },
                {
                    type: 'outbound',
                    label: 'Arrokoth flyby',
                    date: '2019-01-01',
                    dateLabel: 'January 1, 2019',
                    distanceAU: 45.1, // ~6.75 billion km from the Sun (6.6bn km from Earth + ~1 AU), per NASA/JPL
                    note: 'Passed just 3,500 km from the Kuiper Belt object Arrokoth — the most distant object any spacecraft has ever explored up close, a frozen relic unchanged since the solar system\'s formation.'
                },
                {
                    type: 'outbound',
                    label: '60 AU milestone',
                    date: '2024-10-01',
                    dateLabel: 'October 1, 2024',
                    distanceAU: 60,
                    note: 'Passed 60 times Earth\'s distance from the Sun — twice as far out as Pluto was at the 2015 flyby — still healthy and returning data from the Kuiper Belt.'
                }
            ],
            current: {
                referenceDate: '2024-10-01',
                referenceDistanceAU: 60,
                velocityKmS: 15.2,
                sourceNote: 'NASA JPL: passed 60 AU on Oct 1, 2024, traveling at roughly 300 million miles (~480 million km) per year (~15.2 km/s). Still active and tracked, unlike Pioneer 10.'
            }
        }
    },
    // Sample missions from other agencies
    {
        id: 'hayabusa2',
        name: 'Hayabusa2',
        agency: 'JAXA (Japan)',
        target: 'Asteroid Ryugu',
        type: 'Sample return',
        year: 2014,
        status: 'Sample returned to Earth in 2020.',
        description: 'Brought samples from asteroid Ryugu to Earth.',
        radialDistance: 50,
        polarAngleDeg: 80,
        azimuthDeg: 10,
        flightPath: {
            launchSite: { lat: 30.4022, lon: 130.975 }, // Tanegashima Space Center, Yoshinobu Launch Complex
            launchDateLabel: 'December 3, 2014 · 04:22:04 UTC',
            outcome: 'success',
            successNote: 'Launched on an H-IIA rocket, the successor to Japan\'s first asteroid sample-return mission, Hayabusa. It rendezvoused with asteroid Ryugu in 2018, fired a copper projectile to collect subsurface material, and returned samples to Earth in December 2020.'
        }
    },
    {
        id: 'rosetta',
        name: 'Rosetta / Philae',
        agency: 'ESA (Europe)',
        target: 'Comet 67P/Churyumov–Gerasimenko',
        type: 'Comet orbiter & lander',
        year: 2004,
        status: 'Mission complete.',
        description: 'First spacecraft to orbit a comet and deploy a lander (Philae).',
        radialDistance: 65,
        polarAngleDeg: 100,
        azimuthDeg: 150,
        flightPath: {
            launchSite: { lat: 5.239, lon: -52.768 }, // Guiana Space Centre, ELA-3
            launchDateLabel: 'March 2, 2004 · 07:17 UTC',
            outcome: 'success',
            successNote: 'Launched on an Ariane 5 after a year\'s delay caused by a different Ariane 5 failure. Reached comet 67P/Churyumov–Gerasimenko in 2014 after a 10-year, 6.4-billion-km journey using four gravity-assist flybys, then released the Philae lander for the first-ever soft landing on a comet nucleus.'
        }
    },
    {
        id: 'parker-solar-probe',
        name: 'Parker Solar Probe',
        agency: 'NASA (USA)',
        target: 'The Sun',
        type: 'Solar probe',
        year: 2018,
        status: 'Operational',
        description: 'Closest-ever spacecraft to the Sun; studies the solar corona and solar wind.',
        radialDistance: 8,
        polarAngleDeg: 15,
        azimuthDeg: 200,
        flightPath: {
            launchSite: { lat: 28.532, lon: -80.567 }, // Cape Canaveral, Space Launch Complex 37B
            launchDateLabel: 'August 12, 2018 · 3:31 AM EDT',
            outcome: 'success',
            successNote: 'Launched on a Delta IV Heavy, one of the most powerful rockets ever flown, needed to shed most of Earth\'s orbital speed so the probe could fall toward the Sun rather than orbit it. It has since become the fastest human-made object ever built, exceeding 690,000 km/h during close solar passes.'
        }
    },
    {
        id: 'insight',
        name: 'InSight',
        agency: 'NASA (USA)',
        target: 'Mars',
        type: 'Lander',
        year: 2018,
        status: 'Mission complete (end of 2022).',
        description: 'Studied Mars interior (seismology, heat flow).',
        orbitalRadiusOffset: 0.15,
        alongOrbitDeg: -95,
        flightPath: {
            launchSite: { lat: 34.632, lon: -120.611 }, // Vandenberg Air Force Base, Space Launch Complex 3E
            launchDateLabel: 'May 5, 2018 · 4:05 AM PDT',
            outcome: 'success',
            successNote: 'Launched on an Atlas V from Vandenberg on the US West Coast — the first interplanetary mission ever launched from there instead of Florida. It landed on Elysium Planitia on November 26, 2018, and used a seismometer and heat probe to study Mars\'s deep interior for the first time.'
        }
    },
    {
        id: 'osiris-rex',
        name: 'OSIRIS-REx',
        agency: 'NASA (USA)',
        target: 'Asteroid Bennu',
        type: 'Sample return',
        year: 2016,
        status: 'Sample delivered to Earth 2023.',
        description: 'Collected samples from asteroid Bennu and returned them to Earth.',
        radialDistance: 45,
        polarAngleDeg: 60,
        azimuthDeg: 80,
        flightPath: {
            launchSite: { lat: 28.583, lon: -80.583 }, // Cape Canaveral, Space Launch Complex 41
            launchDateLabel: 'September 8, 2016 · 7:05 PM EDT',
            outcome: 'success',
            successNote: 'Launched on an Atlas V toward asteroid Bennu, arriving in 2018. Its Touch-And-Go sample arm briefly touched the surface in 2020, firing nitrogen gas to kick up debris for collection — grabbing so much material it wedged a sample-return lid partly open. Samples reached Earth in September 2023.'
        }
    }
];

// Learn-more links for every selectable (Wikipedia / official). Key by name for bodies, by id for missions.
const BODY_LINKS = {
    'The Sun': 'https://en.wikipedia.org/wiki/Sun',
    'Mercury': 'https://en.wikipedia.org/wiki/Mercury_(planet)',
    'Venus': 'https://en.wikipedia.org/wiki/Venus',
    'Earth': 'https://en.wikipedia.org/wiki/Earth',
    'Mars': 'https://en.wikipedia.org/wiki/Mars',
    'Jupiter': 'https://en.wikipedia.org/wiki/Jupiter',
    'Saturn': 'https://en.wikipedia.org/wiki/Saturn',
    'Uranus': 'https://en.wikipedia.org/wiki/Uranus',
    'Neptune': 'https://en.wikipedia.org/wiki/Neptune',
    'Moon': 'https://en.wikipedia.org/wiki/Moon',
    'Phobos': 'https://en.wikipedia.org/wiki/Phobos_(moon)',
    'Deimos': 'https://en.wikipedia.org/wiki/Deimos_(moon)',
    'Io': 'https://en.wikipedia.org/wiki/Io_(moon)',
    'Europa': 'https://en.wikipedia.org/wiki/Europa_(moon)',
    'Ganymede': 'https://en.wikipedia.org/wiki/Ganymede_(moon)',
    'Titan': 'https://en.wikipedia.org/wiki/Titan_(moon)',
    'Rhea': 'https://en.wikipedia.org/wiki/Rhea_(moon)',
    'Titania': 'https://en.wikipedia.org/wiki/Titania_(moon)',
    'Triton': 'https://en.wikipedia.org/wiki/Triton_(moon)',
    'Pluto': 'https://en.wikipedia.org/wiki/Pluto',
    'Ceres': 'https://en.wikipedia.org/wiki/Ceres_(dwarf_planet)',
    'Callisto': 'https://en.wikipedia.org/wiki/Callisto_(moon)',
    'Enceladus': 'https://en.wikipedia.org/wiki/Enceladus'
};
const MISSION_LINKS = {
    'sputnik-1': 'https://en.wikipedia.org/wiki/Sputnik_1',
    'apollo-11': 'https://en.wikipedia.org/wiki/Apollo_11',
    'apollo-12': 'https://en.wikipedia.org/wiki/Apollo_12',
    'apollo-13': 'https://en.wikipedia.org/wiki/Apollo_13',
    'apollo-14': 'https://en.wikipedia.org/wiki/Apollo_14',
    'apollo-15': 'https://en.wikipedia.org/wiki/Apollo_15',
    'apollo-16': 'https://en.wikipedia.org/wiki/Apollo_16',
    'apollo-17': 'https://en.wikipedia.org/wiki/Apollo_17',
    'luna-2': 'https://en.wikipedia.org/wiki/Luna_2',
    'luna-9': 'https://en.wikipedia.org/wiki/Luna_9',
    'luna-15': 'https://en.wikipedia.org/wiki/Luna_15',
    'chang-e-3': 'https://en.wikipedia.org/wiki/Chang%27e_3',
    'chang-e-4': 'https://en.wikipedia.org/wiki/Chang%27e_4',
    'chandrayaan-2': 'https://en.wikipedia.org/wiki/Chandrayaan-2',
    'iss': 'https://en.wikipedia.org/wiki/International_Space_Station',
    'hubble': 'https://en.wikipedia.org/wiki/Hubble_Space_Telescope',
    'jwst': 'https://en.wikipedia.org/wiki/James_Webb_Space_Telescope',
    'viking-1': 'https://en.wikipedia.org/wiki/Viking_1',
    'venera-7': 'https://en.wikipedia.org/wiki/Venera_7',
    'mars-climate-orbiter': 'https://en.wikipedia.org/wiki/Mars_Climate_Orbiter',
    'sojourner': 'https://en.wikipedia.org/wiki/Mars_Pathfinder',
    'spirit': 'https://en.wikipedia.org/wiki/Spirit_(rover)',
    'opportunity': 'https://en.wikipedia.org/wiki/Opportunity_(rover)',
    'curiosity': 'https://en.wikipedia.org/wiki/Curiosity_(rover)',
    'perseverance': 'https://en.wikipedia.org/wiki/Perseverance_(rover)',
    'voyager-1': 'https://en.wikipedia.org/wiki/Voyager_1',
    'voyager-2': 'https://en.wikipedia.org/wiki/Voyager_2',
    'pioneer-10': 'https://en.wikipedia.org/wiki/Pioneer_10',
    'cassini-huygens': 'https://en.wikipedia.org/wiki/Cassini%E2%80%93Huygens',
    'juno': 'https://en.wikipedia.org/wiki/Juno_(spacecraft)',
    'new-horizons': 'https://en.wikipedia.org/wiki/New_Horizons',
    'hayabusa2': 'https://en.wikipedia.org/wiki/Hayabusa2',
    'rosetta': 'https://en.wikipedia.org/wiki/Rosetta_(spacecraft)',
    'parker-solar-probe': 'https://en.wikipedia.org/wiki/Parker_Solar_Probe',
    'insight': 'https://en.wikipedia.org/wiki/InSight',
    'osiris-rex': 'https://en.wikipedia.org/wiki/OSIRIS-REx'
};

// How it works / brief history for spacecraft (shown in detail modal when double-clicking a craft in the scene)
const MISSION_HOW_IT_WORKS = {
    'iss': 'Orbiting: The station is in free fall around Earth—constantly falling toward the planet but moving so fast sideways that it keeps missing and goes round and round. That\'s why astronauts float: they\'re weightless.',
    'hubble': 'Orbiting: Hubble circles Earth in free fall. Its speed (about 7.5 km/s) balances gravity, so it stays in orbit and can stare at the universe without Earth\'s atmosphere in the way.',
    'jwst': 'At Sun–Earth L2: James Webb orbits a point 1.5 million km beyond Earth, where the Sun and Earth stay in one direction so the telescope can stay cold and observe the early universe in infrared.',
    'sputnik-1': 'Orbiting: The first artificial satellite stayed in orbit by moving fast enough that its fall toward Earth matched the curve of the planet—so it kept missing the ground and went around every 96 minutes.',
    'juno': 'Orbiting Jupiter: Juno loops around Jupiter on a polar orbit, diving close to study the planet\'s gravity, magnetic field, and deep structure while avoiding the harshest radiation.',
    'cassini-huygens': 'Orbiting Saturn: Cassini orbited Saturn for 13 years; the Huygens probe landed on Titan. Orbit works the same everywhere: fall toward the planet, move fast sideways, go round and round.',
    'curiosity': 'On Mars: The rover landed and drives on the surface. It doesn\'t orbit—it explores the ground, taking pictures and drilling samples to look for signs of past habitability.',
    'perseverance': 'On Mars: Like Curiosity, Perseverance is a surface rover. It landed in Jezero Crater to search for ancient life and cache samples for future return to Earth.',
    'voyager-1': 'Deep space: Launched in 1977, Voyager 1 flew past Jupiter and Saturn and is now in interstellar space. It\'s still moving fast enough that the Sun\'s gravity barely slows it—it won\'t "fall back."',
    'voyager-2': 'Deep space: The only spacecraft to visit Uranus and Neptune, Voyager 2 is also in interstellar space, returning data from beyond the heliosphere.',
    'new-horizons': 'Flyby then deep space: It flew past Pluto in 2015 and is now in the Kuiper Belt. Like the Voyagers, it will keep going—no orbit, just escape from the Sun.',
    'apollo-11': 'Landed on the Moon: The Lunar Module descended to the surface while the Command Module orbited. On the Moon, gravity is weaker, so the same idea—falling and moving—applies to the orbit overhead.',
    'parker-solar-probe': 'Orbiting the Sun: Parker swings close to the Sun in elliptical orbits, using Venus flybys to shrink the orbit. At closest approach it moves fast enough to survive the heat while measuring the corona and solar wind.',
    'insight': 'On Mars: InSight was a lander—it stayed in one place and used a seismometer and heat probe to study the planet\'s interior and quakes.',
    'osiris-rex': 'Asteroid then return: OSIRIS-REx orbited Bennu, touched down to collect samples, then brought them back to Earth in 2023.',
    'viking-1': 'On Mars: Viking 1 consisted of an orbiter and a lander. The lander touched down in 1976 and took the first soil samples on Mars; the orbiter imaged the surface from above.',
    'spirit': 'On Mars: Spirit was a rover that drove across Gusev Crater for over six years, studying rocks and geology until it got stuck in sand.',
    'opportunity': 'On Mars: Opportunity was a twin rover to Spirit. It explored Meridiani Planum for nearly 15 years—one of the longest-running Mars missions.',
    'venera-7': 'On Venus: Venera 7 was the first probe to successfully land on another planet (1970). It transmitted data from Venus\'s harsh surface for about 23 minutes.'
};
const MISSION_BRIEF_HISTORY = {
    'iss': 'Assembly began in 1998. NASA, Roscosmos, ESA, JAXA, and CSA operate it. It has been continuously crewed since 2000 and is a lab for science and human endurance in space.',
    'hubble': 'Launched in 1990; a faulty mirror was fixed in 1993 by a shuttle crew. Since then it has transformed astronomy with deep images and precise measurements of the universe.',
    'jwst': 'Launched December 2021; reached L2 in January 2022. Now returning images of the early universe, exoplanets, and star formation.',
    'sputnik-1': 'Launched by the Soviet Union on 4 October 1957. It beeped for 21 days and reentered after 92 days, starting the space age and the space race.',
    'juno': 'Arrived at Jupiter in 2016. It studies the planet\'s interior, auroras, and magnetosphere. The mission has been extended into the 2020s.',
    'cassini-huygens': 'Cassini entered Saturn orbit in 2004; Huygens landed on Titan in 2005. Cassini ended in 2017 with a deliberate plunge into Saturn.',
    'voyager-1': 'Launched 1977, passed Jupiter (1979) and Saturn (1980), entered interstellar space in 2012. The most distant human-made object.',
    'voyager-2': 'Launched 1977, visited Jupiter, Saturn, Uranus (1986), and Neptune (1989). Entered interstellar space in 2018.',
    'new-horizons': 'Launched 2006, flew past Pluto and Charon in 2015, then visited Kuiper Belt object Arrokoth in 2019. Still operating in the outer solar system.',
    'parker-solar-probe': 'Launched 2018. Makes repeated close passes of the Sun; will get within about 6 million km. Designed to survive intense heat and radiation.',
    'insight': 'Landed on Mars in 2018. Recorded marsquakes until dust covered its solar panels; mission ended December 2022.',
    'osiris-rex': 'Launched 2016, reached Bennu in 2018, collected samples in 2020, returned to Earth in September 2023.',
    'viking-1': 'Launched 1975, landed on Mars in 1976. The first successful Mars lander; orbiter and lander returned data for years.',
    'spirit': 'Landed on Mars in 2004 with Opportunity. Operated until 2010; found evidence of past water in Gusev Crater.',
    'opportunity': 'Landed 2004, outlived Spirit by many years. Mission ended in 2018 after a global dust storm.',
    'venera-7': 'Soviet probe; landed on Venus on 15 December 1970. First successful soft landing on another planet.'
};

// --- Global Variables for Three.js and Interaction ---
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let currentIntersected = null; 
let selectedBody = null; 

const selectableObjects = []; 
const orbitalBodies = []; 
const orbitLines = [];
const asteroidGroups = [];
const kuiperGroups = [];
const labelPairs = [];
let moonMesh = null;
let earthMesh = null;
const planetOrbitGroupsByName = {};
const spacecraftOrbitBodies = [];

let focusedBody = null;
let surfaceMarkersList = [];
let surfaceMarkerByMissionId = {};

const LAUNCH_SITES = [
    { name: 'Cape Canaveral / KSC', country: 'USA', lat: 28.5, lon: -80.6 },
    { name: 'Baikonur Cosmodrome', country: 'Kazakhstan (Russia)', lat: 45.9, lon: 63.3 },
    { name: 'Vandenberg SFB', country: 'USA', lat: 34.7, lon: -120.6 },
    { name: 'Jiuquan', country: 'China', lat: 40.96, lon: 100.29 },
    { name: 'Tanegashima', country: 'Japan', lat: 30.4, lon: 130.97 },
    { name: 'Plesetsk', country: 'Russia', lat: 62.93, lon: 40.57 },
    { name: 'Guiana Space Centre', country: 'France/ESA', lat: 5.24, lon: -52.77 },
    { name: 'Satish Dhawan (Sriharikota)', country: 'India', lat: 13.72, lon: 80.23 }
];

const selectionDisplay = document.getElementById('selection-display');
const detailModal = document.getElementById('detail-modal');
const detailBody = document.getElementById('detail-body');
const detailCloseBtn = document.getElementById('detail-close');
const focusOverlay = document.getElementById('focus-overlay');
const bodyModal = document.getElementById('body-modal');
const bodyModalCloseBtn = document.getElementById('body-modal-close');
const modalGlobeView = document.getElementById('modal-globe-view');
const modalMarkerTooltip = document.getElementById('modal-marker-tooltip');
const textureLoader = new THREE.TextureLoader();
(function () {
    var base = window.location.origin + window.location.pathname;
    if (!base.endsWith('/')) base += '/';
    textureLoader.setPath(base);
})();
function setHighResTexture(tex) {
    try {
        if (!tex) return;
        var maxAniso = 16;
        if (renderer.capabilities && typeof renderer.capabilities.getMaxAnisotropy === 'function')
            maxAniso = renderer.capabilities.getMaxAnisotropy();
        tex.anisotropy = maxAniso;
        tex.minFilter = THREE.LinearMipmapLinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.generateMipmaps = true;
    } catch (e) { /* never break texture load */ }
}

let modalRenderer = null;
let modalCamera = null;
let modalZoomDistance = 3;
let modalAngle = 0;
const MODAL_ZOOM_MIN = 1.5;
const MODAL_ZOOM_MAX = 12;

const PREFERS_REDUCED_MOTION = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Animation / controls state
let animationPaused = !!PREFERS_REDUCED_MOTION;
let speedMultiplier = 1;
let showLabels = true;
let cameraTransition = null;
let textureLoadCount = 0;
let textureLoadTotal = 11;

// Store initial camera state for reset function
const INITIAL_CAMERA_POSITION = new THREE.Vector3(0, 0, 70);
const INITIAL_CONTROLS_TARGET = new THREE.Vector3(0, 0, 0);
const REALTIME_EPOCH_MS = new Date('2020-01-01').getTime();

function finishTextureLoad() {
    textureLoadCount++;
    var overlay = document.getElementById('loading-overlay');
    if (overlay && textureLoadCount >= textureLoadTotal) {
        overlay.classList.add('loaded');
    }
}
setTimeout(function () {
    var o = document.getElementById('loading-overlay');
    if (o && !o.classList.contains('loaded')) o.classList.add('loaded');
}, 6000);

// --- 1. SETUP ---

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Re-upload textures after WebGL context restore (e.g. tab backgrounded then restored)
renderer.domElement.addEventListener('webglcontextrestored', function () {
    scene.traverse(function (obj) {
        if (obj.material) {
            var m = Array.isArray(obj.material) ? obj.material : [obj.material];
            m.forEach(function (mat) {
                if (mat.map) mat.map.needsUpdate = true;
            });
        }
    });
}, false);

// Set camera to initial position
camera.position.copy(INITIAL_CAMERA_POSITION); 

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
// Set control target to initial target (the Sun)
controls.target.copy(INITIAL_CONTROLS_TARGET); 


// Lighting
const ambientLight = new THREE.AmbientLight(0x333333); 
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xFFFFFF, 3, 500); 
pointLight.position.set(0, 0, 0); 
scene.add(pointLight);


// --- 2. UTILITY FUNCTIONS ---

function calculateDistanceInfo(data) {
    const distLY_Sun = data.distanceAU * AU_TO_LY;
    
    const earthAU = 1.0; 
    const distanceAUFromEarth = Math.abs(data.distanceAU - earthAU);
    const distLY_Earth = distanceAUFromEarth * AU_TO_LY;

    let sunDistText = `${data.distanceAU} AU / ${distLY_Sun.toPrecision(5)} LY`;
    let earthDistText = `${distLY_Earth.toPrecision(5)} LY (approx)`;

    if (data.type === 'Moon') {
        const parentDistLY = data.parentAU * AU_TO_LY;
        sunDistText = `${data.parentAU} AU (approx) / ${parentDistLY.toPrecision(5)} LY`;
        earthDistText = "Too close to Earth to measure in Light Years.";
    } else if (data.type === 'Star') {
        sunDistText = "N/A (Center of System)";
        earthDistText = "N/A (Center of System)";
    }

    return { sunDistText, earthDistText };
}

var starMesh = null;
var starMaterial = null;
function createStarfield() {
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 18000;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
        const r = 350 + Math.random() * 100;
        const theta = 2 * Math.PI * Math.random();
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = r * Math.cos(theta) * Math.sin(phi);
        positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
        positions[i * 3 + 2] = r * Math.cos(phi);
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.12, transparent: true, opacity: 0.9 });
    starMesh = new THREE.Points(starGeometry, starMaterial);
    scene.add(starMesh);
}

function createOrbitLine(distance, dimmer) {
    const tubeRadius = 0.005;
    const radialSegments = 128;
    const geometry = new THREE.RingGeometry(distance, distance + tubeRadius, radialSegments);
    const material = new THREE.MeshBasicMaterial({
        color: dimmer ? 0x222222 : 0x333333,
        transparent: true,
        opacity: dimmer ? 0.6 : 0.9,
        side: THREE.DoubleSide
    });
    const orbitRing = new THREE.Mesh(geometry, material);
    orbitRing.userData = { distance: distance, dimmer: !!dimmer };
    orbitRing.rotation.x = Math.PI / 2;
    scene.add(orbitRing);
    orbitLines.push(orbitRing);
    return orbitRing;
}

// Function handles missing textures gracefully (solid color fallback + onError). Higher segments + material for more realistic look.
function createTexturedBody(data, isSun = false) {
    const segments = 64;
    const geometry = new THREE.SphereGeometry(data.radius, segments, segments);
    const fallbackColor = data.color || (isSun ? 0xFFA500 : 0xAAAAAA);

    let material;
    if (isSun) {
        material = new THREE.MeshBasicMaterial({ color: fallbackColor });
        textureLoader.load(data.texture, function (tex) { setHighResTexture(tex); material.map = tex; material.color.setHex(0xffffff); material.needsUpdate = true; finishTextureLoad(); }, undefined, function () { finishTextureLoad(); });
    } else if (data.texture) {
        material = new THREE.MeshStandardMaterial({
            color: fallbackColor,
            roughness: 0.85,
            metalness: 0.05
        });
        textureLoader.load(data.texture, function (tex) {
            setHighResTexture(tex);
            material.map = tex;
            material.roughness = 0.8;
            material.metalness = 0.05;
            material.needsUpdate = true;
            finishTextureLoad();
        }, undefined, function () { finishTextureLoad(); });
    } else {
        material = new THREE.MeshStandardMaterial({
            color: fallbackColor,
            roughness: 0.85,
            metalness: 0.05
        });
    }

    const body = new THREE.Mesh(geometry, material);
    var r = data.radius;
    var highlightRing = new THREE.Mesh(
        new THREE.RingGeometry(r * 1.02, r * 1.06, 32),
        new THREE.MeshBasicMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false })
    );
    highlightRing.rotation.x = Math.PI / 2;
    highlightRing.name = 'highlight';
    highlightRing.visible = false;
    body.add(highlightRing);
    body.userData = {
        name: data.name,
        type: data.type || 'Planet',
        distanceAU: data.distanceAU || 0,
        parentAU: data.parentAU || 0,
        info: data.info || '',
        distanceSU: data.distance || 0,
        parentName: data.parentName || 'Sun',
        radius: data.radius || 0,
        radiusKm: data.radiusKm || null,
        orbitalPeriodDays: data.orbitalPeriodDays || null,
        orbitalPeriodYears: data.orbitalPeriodYears || null,
        agency: data.agency || null,
        missionType: data.missionType || null
    }; 
    selectableObjects.push(body);
    
    return body;
}

function createRings(planetMesh, texturePath) {
    const innerRadius = 1.5;
    const outerRadius = 2.5;
    const segments = 64;

    const ringGeometry = new THREE.RingGeometry(innerRadius, outerRadius, segments);
    const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x8B7355,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7
    });
    textureLoader.load(texturePath, function (tex) { setHighResTexture(tex); ringMaterial.map = tex; ringMaterial.needsUpdate = true; finishTextureLoad(); }, undefined, function () { finishTextureLoad(); });

    const rings = new THREE.Mesh(ringGeometry, ringMaterial);
    rings.rotation.x = Math.PI / 2;
    rings.rotation.y = Math.PI / 8;
    planetMesh.add(rings);
}

// Create a small floating text label sprite for a body
function createLabelSprite(text) {
    const canvas = document.createElement('canvas');
    const size = 256;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, size, size);
    ctx.font = '28px "Segoe UI", system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(15,23,42,0.65)';
    ctx.strokeStyle = 'rgba(148,163,184,0.75)';
    ctx.lineWidth = 4;

    const cx = size / 2;
    const cy = size / 2;
    const paddingX = 8;
    const paddingY = 6;
    const textMetrics = ctx.measureText(text);
    const w = textMetrics.width + paddingX * 2;
    const h = 34 + paddingY * 2;

    ctx.beginPath();
    if (ctx.roundRect) {
        ctx.roundRect(cx - w / 2, cy - h / 2, w, h, 10);
    } else {
        ctx.rect(cx - w / 2, cy - h / 2, w, h);
    }
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#e5e7eb';
    ctx.fillText(text, cx, cy + 2);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: true });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(4, 2, 1);

    return sprite;
}

function displayBodyInfo(data, mesh) {
    const { sunDistText, earthDistText } = calculateDistanceInfo(data);
    
    const orbitalDays = data.orbitalPeriodDays;
    const orbitalYears = data.orbitalPeriodYears;
    const radiusKm = data.radiusKm;
    const agency = data.agency;
    const missionType = data.missionType;
    const launchYear = data.year || data.launchYear;

    let typeLabel = data.type || 'Body';
    if (data.type === 'Moon') {
        typeLabel = 'Moon';
    } else if (data.type === 'Star') {
        typeLabel = 'Star';
    } else if (missionType) {
        typeLabel = missionType;
    }

    let infoText = `<strong>${data.name}</strong><br>${typeLabel}`;

    if (agency) {
        infoText += ` • ${agency}`;
    }
    if (launchYear) {
        infoText += ` • Launched: ${launchYear}`;
    }

    if (data.type === 'Star') {
        if (data.info) {
            infoText += `<br>${data.info}`;
        }
    } else if (data.type === 'Moon') {
        infoText += `<br>Orbits: ${data.parentName}`;
        if (data.info) {
            infoText += `<br>${data.info}`;
        }
    } else if (missionType) {
        if (data.info) {
            infoText += `<br>${data.info}`;
        }
        if (data.status) {
            infoText += `<br>Status: ${data.status}`;
        }
    } else if (data.info) {
        infoText += `<br>${data.info}`;
    }

    if (radiusKm) {
        infoText += `<br>Radius: ${radiusKm.toLocaleString()} km`;
    }

    if (orbitalDays || orbitalYears) {
        const orbitalParts = [];
        if (orbitalDays) {
            orbitalParts.push(`${orbitalDays.toLocaleString()} days`);
        }
        if (orbitalYears) {
            orbitalParts.push(`${orbitalYears} years`);
        }
        if (orbitalParts.length > 0) {
            infoText += `<br>Orbital period: ${orbitalParts.join(" / ")}`;
        }
    }

    if (!missionType) {
        infoText += `<br>Dist. from Sun: ${sunDistText}`;
        infoText += `<br>Dist. from Earth: ${earthDistText}`;
    }
    if (mesh && camera) {
        var wp = new THREE.Vector3();
        mesh.getWorldPosition(wp);
        var viewDist = camera.position.distanceTo(wp);
        var viewAU = (viewDist / 8).toFixed(1);
        infoText += `<br>View dist.: ~${viewAU} AU`;
    }
    selectionDisplay.innerHTML = infoText;
}

// Build HTML for the detail modal (study view)
function buildDetailContent(data) {
    if (!data) return '';
    const name = data.name || 'Unknown';
    const typeLabel = data.type || 'Body';
    let html = `<h2>${name}</h2><p class="detail-type">${typeLabel}</p>`;
    if (data.missionType && data.parentName) {
        const siteLabel = data.parentName === 'Moon' ? 'Lunar site' : data.parentName === 'Earth' ? 'Earth orbit' : data.parentName;
        html += `<p class="detail-site"><strong>Site:</strong> ${siteLabel} — ${data.missionType}</p>`;
    }
    if (data.agency) html += `<p><strong>Agency:</strong> ${data.agency}</p>`;
    if (data.year || data.launchYear) html += `<p><strong>Launch year:</strong> ${data.year || data.launchYear}</p>`;
    if (data.status) html += `<p><strong>Status:</strong> ${data.status}</p>`;
    if (data.info) html += `<div class="detail-section">${data.info}</div>`;
    if (data.radiusKm) html += `<p><strong>Radius:</strong> ${data.radiusKm.toLocaleString()} km</p>`;
    if (data.orbitalPeriodDays || data.orbitalPeriodYears) {
        const parts = [];
        if (data.orbitalPeriodDays) parts.push(`${data.orbitalPeriodDays.toLocaleString()} days`);
        if (data.orbitalPeriodYears) parts.push(`${data.orbitalPeriodYears} years`);
        html += `<p><strong>Orbital period:</strong> ${parts.join(' / ')}</p>`;
    }
    if (data.distanceAU !== undefined && data.type !== 'Star' && !data.missionType) {
        const { sunDistText, earthDistText } = calculateDistanceInfo(data);
        html += `<p><strong>Distance from Sun:</strong> ${sunDistText}</p>`;
        html += `<p><strong>Distance from Earth:</strong> ${earthDistText}</p>`;
    }
    if (data.parentName && data.type === 'Moon') html += `<p><strong>Orbits:</strong> ${data.parentName}</p>`;
    const link = data.url || BODY_LINKS[data.name] || (data.id && MISSION_LINKS[data.id]);
    if (link) html += `<p class="detail-link"><a href="${link}" target="_blank" rel="noopener noreferrer">Learn more →</a></p>`;
    return html;
}

function buildSpacecraftDetailContent(mission) {
    if (!mission) return '';
    const name = mission.name || 'Spacecraft';
    let html = `<h2>${name}</h2><p class="detail-type">${mission.type || 'Mission'}</p>`;
    if (mission.agency) html += `<p><strong>Agency:</strong> ${mission.agency}</p>`;
    if (mission.year) html += `<p><strong>Launch year:</strong> ${mission.year}</p>`;
    if (mission.status) html += `<p><strong>Status:</strong> ${mission.status}</p>`;
    if (mission.description) html += `<div class="detail-section">${mission.description}</div>`;
    const howItWorks = (mission.id && MISSION_HOW_IT_WORKS[mission.id])
        || (mission.target === 'Earth' && (mission.altitudeKm != null) && 'Orbiting: The spacecraft is in free fall around Earth—it moves so fast sideways that it keeps missing the planet and goes round and round. That\'s why people on board float (weightlessness).')
        || ((mission.type || '').toLowerCase().indexOf('lander') >= 0 || (mission.type || '').toLowerCase().indexOf('rover') >= 0 ? 'On the surface: the spacecraft landed and operates on the ground, taking images and data.' : '');
    if (howItWorks) html += `<h3 class="detail-subhead">How it works</h3><div class="detail-section">${howItWorks}</div>`;
    const briefHistory = mission.id && MISSION_BRIEF_HISTORY[mission.id];
    if (briefHistory) html += `<h3 class="detail-subhead">Brief history</h3><div class="detail-section">${briefHistory}</div>`;
    const link = mission.id && MISSION_LINKS[mission.id];
    if (link) html += `<p class="detail-link"><a href="${link}" target="_blank" rel="noopener noreferrer">Learn more →</a></p>`;
    return html;
}

function openDetailModal(content, screenX, screenY) {
    if (!detailModal || !detailBody) return;
    detailBody.innerHTML = content;
    const contentEl = detailModal.querySelector('.detail-content');
    detailModal.classList.remove('hidden');
    detailModal.setAttribute('aria-hidden', 'false');
    if (contentEl) {
        contentEl.removeAttribute('style');
        detailModal.classList.remove('detail-modal--beside');
    }
    if (typeof screenX === 'number' && typeof screenY === 'number' && contentEl) {
        const pad = 16;
        const maxW = 520;
        const maxH = 0.85 * window.innerHeight;
        let left = screenX + pad;
        let top = screenY - 40;
        if (left + maxW > window.innerWidth - pad) left = screenX - maxW - pad;
        if (left < pad) left = pad;
        if (top < pad) top = pad;
        if (top + maxH > window.innerHeight - pad) top = window.innerHeight - maxH - pad;
        contentEl.style.left = left + 'px';
        contentEl.style.top = top + 'px';
        contentEl.style.maxWidth = maxW + 'px';
        contentEl.style.maxHeight = maxH + 'px';
        detailModal.classList.add('detail-modal--beside');
    }
}

function closeDetailModal() {
    if (!detailModal) return;
    detailModal.classList.add('hidden');
    detailModal.setAttribute('aria-hidden', 'true');
}

function getZoomDistanceForBody(radius) {
    return Math.max(3, (radius || 0.5) * 5);
}

function latLonToSpherePosition(latDeg, lonDeg, radius) {
    const phi = (90 - latDeg) * Math.PI / 180;
    const theta = (lonDeg + 180) * Math.PI / 180;
    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    return new THREE.Vector3(x, y, z);
}

// Marker colors per body (for mission dots on the globe)
const MARKER_COLOR_BY_BODY = {
    'Earth': 0x60a5fa,
    'Moon': 0xffdd88,
    'Mars': 0xe07c5e,
    'Venus': 0xe8c547,
    'Jupiter': 0xc88b3a,
    'Saturn': 0xd4a574
};

function getMissionSurfaceLatLon(mission, bodyName) {
    // Moon: explicit latitude/longitude (landing sites)
    if (mission.latitudeDeg != null || mission.longitudeDeg != null) {
        return {
            lat: mission.latitudeDeg != null ? mission.latitudeDeg : 0,
            lon: mission.longitudeDeg != null ? mission.longitudeDeg : 0
        };
    }
    // Earth: orbit inclination as lat, longitude
    if (mission.target === 'Earth' && (mission.longitudeDeg != null || mission.inclinationDeg != null)) {
        return {
            lat: mission.inclinationDeg != null ? Math.max(-80, Math.min(80, mission.inclinationDeg)) : 0,
            lon: mission.longitudeDeg != null ? mission.longitudeDeg : 0
        };
    }
    // Mars/Venus/etc: alongOrbitDeg as longitude, optional small lat offset from orbitalRadiusOffset to spread dots
    if (mission.alongOrbitDeg != null) {
        const latOffset = (mission.orbitalRadiusOffset != null) ? (mission.orbitalRadiusOffset - 0.5) * 40 : 0;
        return { lat: Math.max(-80, Math.min(80, latOffset)), lon: mission.alongOrbitDeg };
    }
    // attachTo (Juno at Jupiter, Cassini at Saturn): angleDeg as longitude
    if (mission.attachTo === bodyName && mission.angleDeg != null) {
        return { lat: 0, lon: mission.angleDeg };
    }
    return null;
}

function createSurfaceMarkers(bodyName, bodyMesh) {
    clearSurfaceMarkers();
    if (!bodyMesh) return;
    const radius = bodyMesh.userData.radius || (bodyMesh.geometry ? bodyMesh.geometry.parameters.radius : 0.5);
    const r = typeof radius === 'number' ? radius : 0.5;
    surfaceMarkerByMissionId = {};

    const missionsForBody = MISSIONS.filter(m => m.target === bodyName || m.attachTo === bodyName);
    const markerColor = MARKER_COLOR_BY_BODY[bodyName] != null ? MARKER_COLOR_BY_BODY[bodyName] : 0x94a3b8;

    missionsForBody.forEach(mission => {
        const latLon = getMissionSurfaceLatLon(mission, bodyName);
        if (latLon == null) return;
        const pos = latLonToSpherePosition(latLon.lat, latLon.lon, r * 1.02);
        const geom = new THREE.SphereGeometry(0.03, 12, 12);
        const mat = new THREE.MeshBasicMaterial({
            color: markerColor,
            transparent: true,
            opacity: 0.95
        });
        const dot = new THREE.Mesh(geom, mat);
        dot.position.copy(pos);
        dot.userData = { name: mission.name, agency: mission.agency, year: mission.year, type: mission.type, id: mission.id };
        bodyMesh.add(dot);
        surfaceMarkersList.push(dot);
        if (mission.id) {
            surfaceMarkerByMissionId[mission.id] = dot;
        }
    });
}

function clearSurfaceMarkers() {
    surfaceMarkersList.forEach(m => {
        if (m.parent) m.parent.remove(m);
    });
    surfaceMarkersList = [];
    surfaceMarkerByMissionId = {};
}

function ensureModalRenderer() {
    if (!modalGlobeView || modalRenderer) return;
    const w = modalGlobeView.clientWidth || 400;
    const h = modalGlobeView.clientHeight || 360;
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    modalGlobeView.appendChild(canvas);
    modalRenderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    modalRenderer.setSize(w, h);
    modalRenderer.setClearColor(0x1e293b, 0.15);
    modalCamera = new THREE.PerspectiveCamera(50, w / h, 0.01, 1000);
}

function populateBodyModal(data) {
    if (!bodyModal) return;
    const titleEl = document.getElementById('modal-body-title');
    const subtitleEl = document.getElementById('modal-body-subtitle');
    const factEl = document.getElementById('modal-fact-card');
    const descEl = document.getElementById('modal-body-description');
    const missionsEl = document.getElementById('modal-missions-list');
    if (!titleEl) return;

    // Standalone deep-space missions (Voyager 1/2, and anything else placed via
    // radialDistance/polarAngleDeg/azimuthDeg rather than attached to a body) are
    // not "orbiting" anything in this scene — the marker you clicked IS the mission,
    // not a body with a sub-list of missions. Route straight to that mission's own
    // detail instead of searching for bodies whose name matches "Voyager 1" (which
    // will never exist). Look up the FULL record from MISSIONS by id, not the mesh's
    // userData — createSpacecraftMesh() only copies a partial field set onto the mesh
    // and does not include flightPath/journey, so using userData directly would silently
    // hide the Watch Launch / Trace Journey buttons even after this routing fix.
    if (data.type === 'Mission' && data.id) {
        const mission = MISSIONS.find(m => m.id === data.id);
        if (mission) {
            titleEl.textContent = mission.name || '—';
            if (subtitleEl) subtitleEl.textContent = [mission.agency, mission.year].filter(Boolean).join(' · ') || 'Mission';
            if (factEl) factEl.textContent = mission.type || mission.status || '';
            if (descEl) descEl.textContent = mission.description || '';
            if (missionsEl) {
                missionsEl.innerHTML = '';
                missionsEl._missionsData = [mission];
                selectMissionInModalById(mission.id);
            }
            return;
        }
    }

    titleEl.textContent = data.name || '—';
    if (subtitleEl) subtitleEl.textContent = 'From our project';

    const facts = [];
    if (data.radiusKm) facts.push(`Radius: ${data.radiusKm.toLocaleString()} km`);
    if (data.orbitalPeriodDays != null || data.orbitalPeriodYears != null) {
        const parts = [];
        if (data.orbitalPeriodDays != null) parts.push(`${data.orbitalPeriodDays.toLocaleString()} days`);
        if (data.orbitalPeriodYears != null) parts.push(`${data.orbitalPeriodYears} years`);
        facts.push(`Orbital period: ${parts.join(' / ')}`);
    }
    if (data.parentName && data.type === 'Moon') facts.push(`Orbits: ${data.parentName}`);
    if (factEl) factEl.textContent = facts.length ? facts.join(' · ') : (data.info || 'Select a body to see key facts.');

    if (descEl) descEl.textContent = data.info || (data.type === 'Star' ? 'The center of our solar system.' : 'Explore missions and sites in the list below.');

    const bodyName = data.name;
    const missionsForBody = MISSIONS.filter(m => m.target === bodyName || m.attachTo === bodyName);
    if (missionsEl) {
        if (missionsForBody.length) {
            missionsEl.innerHTML = missionsForBody.map((m, idx) =>
                `<div class="mission-row selectable" data-mission-index="${idx}" data-mission-id="${m.id || ''}"><strong>${m.name}</strong> · ${m.agency || '—'} (${m.year || '—'}) — ${m.type}</div>`
            ).join('');
            missionsEl._missionsData = missionsForBody;
            missionsEl.querySelectorAll('.mission-row.selectable').forEach(row => {
                row.addEventListener('click', () => {
                    const missionId = row.getAttribute('data-mission-id');
                    if (missionId) {
                        selectMissionInModalById(missionId);
                    }
                });
            });
        } else {
            missionsEl.innerHTML = '<div class="mission-row">No missions in database for this body.</div>';
            missionsEl._missionsData = [];
        }
    }
}

// Rotate the modal globe so the camera faces the mission marker (brings it to the front).
function rotateModalViewToMission(missionId) {
    const marker = surfaceMarkerByMissionId[missionId];
    if (!marker || !focusedBody) return;
    const markerWorld = new THREE.Vector3();
    const bodyWorld = new THREE.Vector3();
    marker.getWorldPosition(markerWorld);
    focusedBody.getWorldPosition(bodyWorld);
    const toMarker = markerWorld.clone().sub(bodyWorld);
    // Set modal angle so camera is opposite the marker in XZ → marker appears in front.
    modalAngle = Math.atan2(toMarker.x, toMarker.z) + Math.PI;
}

function selectMissionInModalById(missionId) {
    if (!missionId) return;
    const missionsEl = document.getElementById('modal-missions-list');
    if (!missionsEl || !missionsEl._missionsData) return;
    const missionsForBody = missionsEl._missionsData;
    const mission = missionsForBody.find(m => m.id === missionId);
    if (!mission) return;

    missionsEl.querySelectorAll('.mission-row.selected').forEach(r => r.classList.remove('selected'));
    const row = missionsEl.querySelector(`.mission-row.selectable[data-mission-id="${missionId}"]`);
    if (row) {
        row.classList.add('selected');
    }

    let detailEl = missionsEl.querySelector('.mission-selected-detail');
    if (!detailEl) {
        detailEl = document.createElement('div');
        detailEl.className = 'mission-selected-detail';
        missionsEl.appendChild(detailEl);
    }
    const desc = mission.description || mission.status || 'No additional details.';
    let detailHtml = `<p class="mission-detail-text">${desc}</p>`;
    if (mission.flightPath) {
        detailHtml += `<button type="button" class="watch-launch-btn" data-mission-id="${mission.id}">▶ Watch Launch</button>`;
    }
    if (mission.journey) {
        detailHtml += `<button type="button" class="trace-journey-btn" data-mission-id="${mission.id}">✦ Trace Journey</button>`;
    }
    detailEl.innerHTML = detailHtml;
    detailEl.classList.remove('hidden');

    if (modalMarkerTooltip) {
        modalMarkerTooltip.textContent = mission.name || 'Missions';
        modalMarkerTooltip.classList.remove('hidden');
    }

    surfaceMarkersList.forEach(m => {
        if (!m || !m.scale) return;
        const isSelected = m.userData && m.userData.id === missionId;
        const s = isSelected ? 1.7 : 1.0;
        m.scale.set(s, s, s);
    });

    // Auto-rotate the globe so this mission's marker is brought to the front.
    rotateModalViewToMission(missionId);
}

function openBodyModal(mesh) {
    if (!mesh || !mesh.userData) return;
    const data = mesh.userData;
    focusedBody = mesh;
    modalZoomDistance = Math.max(MODAL_ZOOM_MIN, Math.min(MODAL_ZOOM_MAX, (data.radius || 0.5) * 6));
    modalAngle = 0;

    if (focusOverlay) focusOverlay.classList.remove('hidden');
    if (bodyModal) {
        bodyModal.classList.remove('hidden');
        bodyModal.setAttribute('aria-hidden', 'false');
        if (bodyModalCloseBtn) bodyModalCloseBtn.focus();
    }
    updateUrlState({ body: data.name });
    populateBodyModal(data);
    createSurfaceMarkers(data.name, mesh);

    ensureModalRenderer();
    if (modalGlobeView && modalRenderer) {
        const w = modalGlobeView.clientWidth || 400;
        const h = modalGlobeView.clientHeight || 360;
        modalRenderer.setSize(w, h);
        modalRenderer.domElement.width = w;
        modalRenderer.domElement.height = h;
        modalCamera.aspect = w / h;
        modalCamera.updateProjectionMatrix();
    }

    const worldPos = new THREE.Vector3();
    mesh.getWorldPosition(worldPos);
    const dist = getZoomDistanceForBody(data.radius);
    const dir = new THREE.Vector3().subVectors(camera.position, worldPos).normalize();
    const targetPos = worldPos.clone().add(dir.multiplyScalar(dist));
    startCameraTransition(targetPos, worldPos.clone(), 1200);
}

function closeBodyModal() {
    var resetBtn = document.getElementById('reset-view-button');
    if (resetBtn && document.activeElement && bodyModal && bodyModal.contains(document.activeElement)) {
        resetBtn.focus();
    }
    focusedBody = null;
    clearSurfaceMarkers();
    if (focusOverlay) focusOverlay.classList.add('hidden');
    if (bodyModal) {
        bodyModal.classList.add('hidden');
        bodyModal.setAttribute('aria-hidden', 'true');
    }
    if (modalMarkerTooltip) modalMarkerTooltip.classList.add('hidden');
    updateUrlState({ body: '' });
}

function getUrlState() {
    var params = new URLSearchParams(window.location.search || '');
    return { preset: params.get('preset') || '', body: params.get('body') || '' };
}
function updateUrlState(opt) {
    try {
        var params = new URLSearchParams(window.location.search || '');
        if (opt.preset != null) { if (opt.preset) params.set('preset', opt.preset); else params.delete('preset'); }
        if (opt.body != null) { if (opt.body) params.set('body', opt.body); else params.delete('body'); }
        var q = params.toString();
        var url = window.location.pathname + (q ? '?' + q : '');
        window.history.replaceState({}, '', url);
    } catch (e) {}
}
function applyUrlStateOnLoad() {
    var state = getUrlState();
    if (state.preset && presetButtons && presetButtons.length) {
        var btn = Array.prototype.find.call(presetButtons, function (b) { return b.getAttribute('data-preset') === state.preset; });
        if (btn) btn.click();
    }
    if (state.body) {
        var mesh = selectableObjects.find(function (o) { return o.userData && o.userData.name === state.body; });
        if (mesh) {
            setTimeout(function () {
                openBodyModal(mesh);
                var worldPos = new THREE.Vector3();
                mesh.getWorldPosition(worldPos);
                controls.target.copy(worldPos);
            }, 100);
        }
    }
}

// Function to reset the view
function resetView() {
    closeBodyModal();
    camera.position.copy(INITIAL_CAMERA_POSITION);
    controls.target.copy(INITIAL_CONTROLS_TARGET);
    controls.update();
    selectedBody = null;
    selectionDisplay.innerHTML = 'View reset. Hover over a planet, moon, or spacecraft!';
}


// --- 3. BUILD THE SOLAR SYSTEM ---

createStarfield();

// 3a. The Sun (with glow)
const sun = createTexturedBody(SUN_DATA, true);
const sunGlowGeom = new THREE.SphereGeometry(SUN_DATA.radius * 1.35, 32, 32);
const sunGlowMat = new THREE.MeshBasicMaterial({
    color: 0xffaa00,
    transparent: true,
    opacity: 0.2,
    depthWrite: false
});
const sunGlow = new THREE.Mesh(sunGlowGeom, sunGlowMat);
sun.add(sunGlow);
scene.add(sun);

// Label for the Sun
const sunLabel = createLabelSprite(SUN_DATA.name);
scene.add(sunLabel);
labelPairs.push({ mesh: sun, label: sunLabel });


// 3b. All Planets (Mercury to Neptune) and their systems
PLANETS.forEach(planetData => {
    // 1. Create the Planet Mesh
    const planet = createTexturedBody(planetData);
    
    // 2. Create the Orbital Group
    const orbitGroup = new THREE.Object3D();
    planet.position.x = planetData.distance;
    orbitGroup.add(planet);
    scene.add(orbitGroup);
    
    // 3. Create the Orbit Line
    createOrbitLine(planetData.distance);
    
    // 4. Add Rings (if applicable)
    if (planetData.hasRings) {
        createRings(planet, 'textures/saturn_ring.jpg');
    }

    // 5. Store Planet for Animation and for spacecraft parenting
    orbitalBodies.push({
        name: planetData.name,
        mesh: planet,
        group: orbitGroup,
        orbitSpeed: planetData.orbitSpeed,
        selfRotateSpeed: planetData.selfRotateSpeed,
        orbitalPeriodDays: planetData.orbitalPeriodDays
    });
    planetOrbitGroupsByName[planetData.name] = orbitGroup;

    if (planetData.name === 'Earth') {
        earthMesh = planet;
        var atmGeom = new THREE.SphereGeometry(planetData.radius * 1.08, 48, 48);
        var atmMat = new THREE.MeshBasicMaterial({
            color: 0x7dd3fc,
            transparent: true,
            opacity: 0.12,
            depthWrite: false
        });
        var atm = new THREE.Mesh(atmGeom, atmMat);
        planet.add(atm);
    }

    // 6. Label for the planet
    const planetLabel = createLabelSprite(planetData.name);
    scene.add(planetLabel);
    labelPairs.push({ mesh: planet, label: planetLabel });

    // 7. Add Moons (if any exist for this planet)
    const moons = MOON_SYSTEMS[planetData.name];
    if (moons) {
        moons.forEach(moonData => {
            const combinedData = {
                ...moonData,
                type: 'Moon',
                parentName: planetData.name,
                parentAU: planetData.distanceAU, 
                distanceAU: planetData.distanceAU
            };
            const moon = createTexturedBody(combinedData);
            
            const moonOrbitGroup = new THREE.Object3D();
            moonOrbitGroup.add(moon); 
            moon.position.x = moonData.distance;
            planet.add(moonOrbitGroup); 
            
            orbitalBodies.push({
                name: moonData.name,
                mesh: moon,
                group: moonOrbitGroup,
                orbitSpeed: moonData.orbitSpeed,
                selfRotateSpeed: moonData.selfRotateSpeed,
                orbitalPeriodDays: moonData.orbitalPeriodDays
            });

            if (planetData.name === 'Earth' && moonData.name === 'Moon') {
                moonMesh = moon;
            }
        });
    }
});

// 3b2. Dwarf planets (Pluto, Ceres)
DWARF_PLANETS.forEach(function (dp) {
    var planet = createTexturedBody(dp, false);
    var orbitGroup = new THREE.Object3D();
    planet.position.x = dp.distance;
    orbitGroup.add(planet);
    scene.add(orbitGroup);
    createOrbitLine(dp.distance, true);
    orbitalBodies.push({
        name: dp.name,
        mesh: planet,
        group: orbitGroup,
        orbitSpeed: dp.orbitSpeed,
        selfRotateSpeed: dp.selfRotateSpeed,
        orbitalPeriodDays: dp.orbitalPeriodDays
    });
    planetOrbitGroupsByName[dp.name] = orbitGroup;
    var dpLabel = createLabelSprite(dp.name);
    scene.add(dpLabel);
    labelPairs.push({ mesh: planet, label: dpLabel });
});

// 3c. Asteroid Belt (Between Mars and Jupiter)
const asteroidCount = 1000;
const beltMinDist = 14.0; 
const beltMaxDist = 22.0; 
for (let i = 0; i < asteroidCount; i++) {
    const size = 0.05 + Math.random() * 0.05;
    const distance = beltMinDist + Math.random() * (beltMaxDist - beltMinDist); 
    
    const asteroidGeometry = new THREE.SphereGeometry(size, 8, 8);
    const asteroidMaterial = new THREE.MeshStandardMaterial({ color: 0x555555 });
    const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);
    
    asteroid.position.x = distance; 
    asteroid.position.z = (Math.random() - 0.5) * 1.5; 
    asteroid.position.y = (Math.random() - 0.5) * 1.5;
    
    const asteroidOrbit = new THREE.Object3D();
    asteroidOrbit.rotation.y = Math.random() * Math.PI * 2;
    asteroidOrbit.add(asteroid);
    scene.add(asteroidOrbit);
    asteroidGroups.push(asteroidOrbit);

    // FIX: Ensure mesh is the asteroid, and group is the orbit.
    orbitalBodies.push({
        name: `Asteroid ${i}`,
        mesh: asteroid,
        group: asteroidOrbit,
        orbitSpeed: 0.0001 + Math.random() * 0.0001, 
        selfRotateSpeed: 0.0
    });
}

// 3d. Kuiper Belt (Beyond Neptune)
const kuiperCount = 500;
const kuiperMinDist = 60.0;
const kuiperMaxDist = 150.0;
for (let i = 0; i < kuiperCount; i++) {
    const size = 0.1 + Math.random() * 0.1;
    const distance = kuiperMinDist + Math.random() * (kuiperMaxDist - kuiperMinDist);
    
    const kuiperGeometry = new THREE.SphereGeometry(size, 8, 8);
    const kuiperMaterial = new THREE.MeshStandardMaterial({ color: 0xAAAAAA });
    const kuiper = new THREE.Mesh(kuiperGeometry, kuiperMaterial);
    
    kuiper.position.x = distance; 
    kuiper.position.z = (Math.random() - 0.5) * 10;
    kuiper.position.y = (Math.random() - 0.5) * 10;
    
    const kuiperOrbit = new THREE.Object3D();
    kuiperOrbit.rotation.y = Math.random() * Math.PI * 2;
    kuiperOrbit.add(kuiper);
    scene.add(kuiperOrbit);
    kuiperGroups.push(kuiperOrbit);

    // FIX: Ensure mesh is the kuiper object, and group is the orbit.
    orbitalBodies.push({
        name: `Kuiper Obj ${i}`,
        mesh: kuiper,
        group: kuiperOrbit,
        orbitSpeed: 0.00001 + Math.random() * 0.00001, 
        selfRotateSpeed: 0.0
    });
}

// 3e. Spacecraft visible in the main scene (orbiting Earth/Jupiter/Saturn, on Mars/Venus, or in deep space)
function getPlanetDistance(name) {
    const p = PLANETS.find(x => x.name === name);
    return p ? p.distance : 0;
}
function getPlanetRadius(name) {
    const p = PLANETS.find(x => x.name === name);
    return p ? p.radius : 0.5;
}
function createSpacecraftMesh(mission) {
    const size = 0.045;
    const geometry = new THREE.BoxGeometry(size, size * 0.6, size * 1.2);
    const material = new THREE.MeshBasicMaterial({ color: 0x94a3b8 });
    const mesh = new THREE.Mesh(geometry, material);

    const missionUserData = {
        type: 'Mission',
        id: mission.id,
        name: mission.name,
        agency: mission.agency,
        year: mission.year,
        status: mission.status,
        description: mission.description,
        info: mission.description,
        target: mission.target,
        missionType: mission.type,
        altitudeKm: mission.altitudeKm,
        longitudeDeg: mission.longitudeDeg,
        inclinationDeg: mission.inclinationDeg
    };
    mesh.userData = missionUserData;

    // The box above is scaled to represent an actual spacecraft against planets
    // sized in the same real-proportioned units, so at deep-space distances
    // (Voyager, New Horizons, etc. — well over 100 scene-units out) it shrinks to
    // a fraction of a screen pixel: geometrically correct, but never practically
    // clickable by anyone. Add a larger, fully invisible sibling purely as a
    // raycasting target (opacity 0 + depthWrite false, so it never renders or
    // occludes anything) so every mission stays reliably clickable regardless of
    // how far out it's placed. Both share identical userData, so whichever one a
    // raycast actually hits behaves identically to the caller.
    //
    // Sized conditionally: missions with radialDistance (standalone deep-space
    // markers — nothing else is ever nearby) get a generous target. Anything
    // orbiting close to a parent body (ISS, Hubble, rovers on a surface) keeps a
    // much smaller target — a flat 2.0-unit sphere would completely engulf small
    // bodies like Earth (radius 0.5) at typical mission-orbit offsets, silently
    // intercepting clicks meant for the planet itself.
    const isStandaloneDeepSpace = mission.radialDistance != null;
    const hitRadius = isStandaloneDeepSpace ? 2.0 : 0.12;
    const hitGeometry = new THREE.SphereGeometry(hitRadius, 8, 8);
    const hitMaterial = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false });
    const hitTarget = new THREE.Mesh(hitGeometry, hitMaterial);
    hitTarget.userData = missionUserData;

    const group = new THREE.Group();
    group.userData = missionUserData;
    group.add(mesh);
    group.add(hitTarget);

    selectableObjects.push(hitTarget);
    return group;
}

function addSpacecraftToScene() {
    const DEG = Math.PI / 180;
    // Earth orbit: Sputnik, ISS, Hubble
    const earthGroup = planetOrbitGroupsByName['Earth'];
    const earthDist = getPlanetDistance('Earth');
    const earthRadius = getPlanetRadius('Earth');
    if (earthGroup && earthDist) {
        const earthOrbiters = MISSIONS.filter(m => m.target === 'Earth' && (m.altitudeKm != null || m.longitudeDeg != null));
        earthOrbiters.forEach(mission => {
            const orbitRadius = earthRadius + 0.12;
            const orbitGroup = new THREE.Object3D();
            orbitGroup.position.set(earthDist, 0, 0);
            const craft = createSpacecraftMesh(mission);
            craft.position.set(orbitRadius, 0, 0);
            const startAngle = (mission.longitudeDeg != null ? mission.longitudeDeg : 0) * DEG;
            orbitGroup.rotation.y = startAngle;
            orbitGroup.add(craft);
            earthGroup.add(orbitGroup);
            spacecraftOrbitBodies.push({ group: orbitGroup, orbitSpeed: 0.018 });
        });
    }
    // Jupiter: Juno
    const jupiterGroup = planetOrbitGroupsByName['Jupiter'];
    const jupiterDist = getPlanetDistance('Jupiter');
    const jupiterRadius = getPlanetRadius('Jupiter');
    if (jupiterGroup && jupiterDist && MISSIONS.some(m => m.attachTo === 'Jupiter')) {
        const juno = MISSIONS.find(m => m.attachTo === 'Jupiter');
        if (juno) {
            const orbitGroup = new THREE.Object3D();
            orbitGroup.position.set(jupiterDist, 0, 0);
            const craft = createSpacecraftMesh(juno);
            craft.position.set(jupiterRadius + 0.35, 0, 0);
            orbitGroup.rotation.y = (juno.angleDeg != null ? juno.angleDeg : 0) * DEG;
            orbitGroup.add(craft);
            jupiterGroup.add(orbitGroup);
            spacecraftOrbitBodies.push({ group: orbitGroup, orbitSpeed: 0.002 });
        }
    }
    // Saturn: Cassini
    const saturnGroup = planetOrbitGroupsByName['Saturn'];
    const saturnDist = getPlanetDistance('Saturn');
    const saturnRadius = getPlanetRadius('Saturn');
    if (saturnGroup && saturnDist && MISSIONS.some(m => m.attachTo === 'Saturn')) {
        const cassini = MISSIONS.find(m => m.attachTo === 'Saturn');
        if (cassini) {
            const orbitGroup = new THREE.Object3D();
            orbitGroup.position.set(saturnDist, 0, 0);
            const craft = createSpacecraftMesh(cassini);
            craft.position.set(saturnRadius + 0.35, 0, 0);
            orbitGroup.rotation.y = (cassini.angleDeg != null ? cassini.angleDeg : 0) * DEG;
            orbitGroup.add(craft);
            saturnGroup.add(orbitGroup);
            spacecraftOrbitBodies.push({ group: orbitGroup, orbitSpeed: 0.0012 });
        }
    }
    // Mars surface / orbit representation
    const marsGroup = planetOrbitGroupsByName['Mars'];
    const marsDist = getPlanetDistance('Mars');
    const marsRadius = getPlanetRadius('Mars');
    if (marsGroup && marsDist) {
        const marsMissions = MISSIONS.filter(m => m.target === 'Mars' && m.alongOrbitDeg != null);
        marsMissions.forEach((mission, i) => {
            const orbitGroup = new THREE.Object3D();
            orbitGroup.position.set(marsDist, 0, 0);
            const craft = createSpacecraftMesh(mission);
            craft.position.set(marsRadius + 0.06, 0, 0);
            orbitGroup.rotation.y = (mission.alongOrbitDeg || 0) * DEG;
            orbitGroup.add(craft);
            marsGroup.add(orbitGroup);
            spacecraftOrbitBodies.push({ group: orbitGroup, orbitSpeed: 0.0003 });
        });
    }
    // Venus: Venera 7
    const venusGroup = planetOrbitGroupsByName['Venus'];
    const venusDist = getPlanetDistance('Venus');
    const venusRadius = getPlanetRadius('Venus');
    if (venusGroup && venusDist) {
        const venera = MISSIONS.find(m => m.target === 'Venus' && m.alongOrbitDeg != null);
        if (venera) {
            const orbitGroup = new THREE.Object3D();
            orbitGroup.position.set(venusDist, 0, 0);
            const craft = createSpacecraftMesh(venera);
            craft.position.set(venusRadius + 0.06, 0, 0);
            orbitGroup.rotation.y = (venera.alongOrbitDeg || 0) * DEG;
            orbitGroup.add(craft);
            venusGroup.add(orbitGroup);
            spacecraftOrbitBodies.push({ group: orbitGroup, orbitSpeed: 0.0002 });
        }
    }
    // Deep space: Voyager 1/2, Pioneer 10, New Horizons (fixed position in scene, no orbit animation)
    const deepSpace = MISSIONS.filter(m => m.radialDistance != null && m.polarAngleDeg != null && m.azimuthDeg != null);
    deepSpace.forEach(mission => {
        const r = mission.radialDistance;
        const phi = (90 - (mission.polarAngleDeg || 0)) * DEG;
        const theta = ((mission.azimuthDeg || 0) + 180) * DEG;
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.cos(phi);
        const z = r * Math.sin(phi) * Math.sin(theta);
        const craft = createSpacecraftMesh(mission);
        craft.position.set(x, y, z);
        scene.add(craft);
    });
}
addSpacecraftToScene();

// ---------------------------------------------------------------------------
// Journey math ("Trace Journey" support)
// Shared by playMissionJourney() below. Kept separate from scene-building code
// since these are pure functions, reused each time a journey sequence starts.
// ---------------------------------------------------------------------------

// Real km/s -> AU/year, using a Julian year (365.25 days) and the IAU-defined AU.
function kmPerSecToAuPerYear(kmPerSec) {
    const KM_PER_AU = 149597870.7;
    const SECONDS_PER_YEAR = 365.25 * 24 * 60 * 60;
    return (kmPerSec * SECONDS_PER_YEAR) / KM_PER_AU;
}

// A mission's real current distance from the Sun, computed live from a sourced
// reference date/distance/velocity (see journey.current in the mission data)
// rather than a hardcoded number, so it stays accurate as real time passes.
function getCurrentDistanceAU(mission) {
    const cur = mission && mission.journey && mission.journey.current;
    if (!cur) return null;
    const refMs = new Date(cur.referenceDate + 'T00:00:00Z').getTime();
    const yearsSince = (Date.now() - refMs) / (365.25 * 24 * 60 * 60 * 1000);
    const auPerYear = kmPerSecToAuPerYear(cur.velocityKmS);
    return cur.referenceDistanceAU + auPerYear * yearsSince;
}

// This app's own hand-placed AU -> scene-unit anchors (see the PLANETS distance/
// distanceAU pairs above), extended past Pluto — the outermost existing anchor —
// by continuing at the same local compression rate established by the Uranus->
// Neptune->Pluto segment. Not a claim of a "true" formula (the inner-solar-system
// spacing is hand-tuned for readability, same as everywhere else in this file);
// just the most consistent way to place something farther out than any existing
// anchor without inventing an unrelated new scale.
function auToSceneDistance(au) {
    const PLUTO_AU = 39.48, PLUTO_SCENE = 62.0;
    const OUTER_RATE = 0.7423; // scene-units per AU, from (Pluto_scene - Neptune_scene) / (Pluto_AU - Neptune_AU)
    if (au <= PLUTO_AU) return PLUTO_SCENE * (au / PLUTO_AU); // not used by Trace Journey today, kept honest/complete
    return PLUTO_SCENE + OUTER_RATE * (au - PLUTO_AU);
}

// Reuses this app's own existing simplified circular-orbit convention (see
// setInitialOrbitsToToday() above: angle = (daysSinceEpoch / orbitalPeriodDays) * 2π,
// all bodies at angle 0 on REALTIME_EPOCH_MS) — evaluated at a real historical date
// instead of "today". Exactly as accurate as this app's own live planet positions,
// no more and no less; genuinely computed from the real orbital period, not a guess.
function heliocentricAngleAtDate(orbitalPeriodDays, dateMs) {
    const daysSinceEpoch = (dateMs - REALTIME_EPOCH_MS) / (24 * 60 * 60 * 1000);
    return (daysSinceEpoch / orbitalPeriodDays) * Math.PI * 2;
}

// World-space position for a given scene distance + heliocentric angle, matching
// the exact rotation convention PLANETS objects use (orbitGroup.rotation.y = angle
// applied to a (distance, 0, 0) local point).
function polarToWorldPosition(distance, angleRad) {
    return new THREE.Vector3(distance, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), angleRad);
}

// ---------------------------------------------------------------------------
// Mission launch-sequence replay ("Watch Launch")
// On-demand cinematic playback of a mission's real ascent, parented to Earth's
// rotating mesh so it inherits both Earth's spin and orbital position for free.
// Rendered only while active — not a permanent object in the scene — so this
// scales to many missions without cluttering the main view or costing perf.
// ---------------------------------------------------------------------------
let launchSequence = null; // active playback state, or null when idle
const launchSequencePanel = document.getElementById('launch-sequence-panel');
const launchSequenceTitle = document.getElementById('launch-sequence-title');
const launchSequenceText = document.getElementById('launch-sequence-text');
const launchSequenceTime = document.getElementById('launch-sequence-time');
const launchSequenceCloseBtn = document.getElementById('launch-sequence-close');

// Convert a lat/lon (degrees) to a local position on a sphere of given radius,
// using the same spherical convention already used elsewhere in this file
// (see the deep-space spacecraft placement above) for consistency.
function latLonToLocalPosition(lat, lon, radius) {
    const DEG = Math.PI / 180;
    const phi = (90 - lat) * DEG;
    const theta = (lon + 180) * DEG;
    return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    );
}

function clearLaunchSequence() {
    if (launchSequence) {
        if (launchSequence.group && launchSequence.group.parent) {
            launchSequence.group.parent.remove(launchSequence.group);
        }
        launchSequence = null;
    }
    if (launchSequencePanel) launchSequencePanel.classList.add('hidden');
}

function playMissionLaunch(mission) {
    if (!mission || !mission.flightPath || !earthMesh) return;
    clearLaunchSequence();
    closeDetailModal();
    if (typeof closeBodyModal === 'function') closeBodyModal();

    const fp = mission.flightPath;
    const earthPlanetData = PLANETS.find(p => p.name === 'Earth');
    const earthRadius = earthPlanetData ? earthPlanetData.radius : 0.5;

    // Launch site sits on Earth's surface at the real lat/lon; parented to earthMesh
    // so it automatically inherits Earth's rotation and orbital position.
    const launchPos = latLonToLocalPosition(fp.launchSite.lat, fp.launchSite.lon, earthRadius);
    const outward = launchPos.clone().normalize();

    // End point: successful missions arc out toward "reached orbit" distance;
    // failures stop proportionally short, scaled to the real altitude reached.
    const orbitReachDistance = earthRadius + 0.12; // matches the existing LEO convention used for ISS/Hubble
    let endRadius;
    if (fp.outcome === 'failure' && fp.failure) {
        // Real ascent to LEO covers ~300km; scale the failure's real altitude proportionally
        // against that, with a floor so it's still visible just above the surface.
        const fraction = Math.min(0.9, Math.max(0.12, fp.failure.altitudeKm / 300));
        endRadius = earthRadius + (orbitReachDistance - earthRadius) * fraction;
    } else {
        endRadius = orbitReachDistance;
    }

    // A gentle pitch-over arc (real ascents aren't straight up): control point offset
    // sideways from the straight radial line, roughly matching real launch profiles.
    const tangent = new THREE.Vector3(-outward.z, 0, outward.x).normalize();
    const controlPoint = launchPos.clone()
        .add(outward.clone().multiplyScalar((endRadius - earthRadius) * 0.6))
        .add(tangent.multiplyScalar((endRadius - earthRadius) * 0.5));
    const endPoint = outward.clone().multiplyScalar(endRadius);

    const curve = new THREE.QuadraticBezierCurve3(launchPos, controlPoint, endPoint);
    const curvePoints = curve.getPoints(64);

    const group = new THREE.Object3D();

    const lineGeometry = new THREE.BufferGeometry().setFromPoints(curvePoints);
    lineGeometry.setDrawRange(0, 0);
    const lineColor = fp.outcome === 'failure' ? 0xf87171 : 0x60a5fa;
    const line = new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({ color: lineColor, transparent: true, opacity: 0.9 }));
    group.add(line);

    const markerGeometry = new THREE.SphereGeometry(0.035, 12, 12);
    const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    marker.position.copy(launchPos);
    group.add(marker);

    // A small marker at the launch pad itself, left in place for context.
    const padGeometry = new THREE.ConeGeometry(0.02, 0.05, 8);
    const padMaterial = new THREE.MeshBasicMaterial({ color: 0xfbbf24 });
    const pad = new THREE.Mesh(padGeometry, padMaterial);
    pad.position.copy(launchPos);
    pad.lookAt(launchPos.clone().add(outward));
    pad.rotateX(Math.PI / 2);
    group.add(pad);

    earthMesh.add(group);

    const totalPoints = curvePoints.length;
    const durationMs = PREFERS_REDUCED_MOTION ? 100 : 6000;

    launchSequence = {
        mission,
        group,
        line,
        marker,
        curvePoints,
        totalPoints,
        startTime: performance.now(),
        duration: durationMs,
        outcome: fp.outcome,
        realElapsedSeconds: fp.outcome === 'failure' && fp.failure ? fp.failure.elapsedSeconds : null,
        finished: false
    };

    // Fly the camera to a good viewing angle near Earth for the sequence.
    const earthWorldPos = new THREE.Vector3();
    earthMesh.getWorldPosition(earthWorldPos);
    const camOffset = new THREE.Vector3(earthRadius * 3, earthRadius * 1.5, earthRadius * 3.2);
    startCameraTransition(earthWorldPos.clone().add(camOffset), earthWorldPos.clone(), PREFERS_REDUCED_MOTION ? 300 : 1800);

    if (launchSequencePanel && launchSequenceTitle && launchSequenceText) {
        launchSequencePanel.classList.remove('hidden');
        launchSequenceTitle.textContent = mission.name + ' — Launch';
        launchSequenceTitle.classList.remove('outcome-failure');
        launchSequenceText.textContent = fp.launchDateLabel ? ('Liftoff: ' + fp.launchDateLabel) : 'Liftoff';
        if (launchSequenceTime) launchSequenceTime.textContent = 'T+0s';
    }
}

// Called every frame from animate() while a launch sequence is active.
function updateLaunchSequence(nowMs) {
    if (!launchSequence || launchSequence.finished) return;
    const elapsed = nowMs - launchSequence.startTime;
    const t = Math.min(1, elapsed / launchSequence.duration);
    const pointIndex = Math.max(1, Math.floor(t * (launchSequence.totalPoints - 1)) + 1);
    launchSequence.line.geometry.setDrawRange(0, pointIndex);
    const currentPoint = launchSequence.curvePoints[pointIndex - 1];
    if (currentPoint) launchSequence.marker.position.copy(currentPoint);

    if (launchSequenceTime) {
        if (launchSequence.realElapsedSeconds != null) {
            launchSequenceTime.textContent = 'T+' + Math.round(t * launchSequence.realElapsedSeconds) + 's';
        } else {
            launchSequenceTime.textContent = t < 1 ? 'Ascending…' : 'Reached orbit';
        }
    }

    if (t >= 1 && !launchSequence.finished) {
        launchSequence.finished = true;
        const fp = launchSequence.mission.flightPath;
        if (launchSequenceTitle && launchSequenceText) {
            if (launchSequence.outcome === 'failure' && fp.failure) {
                launchSequenceTitle.textContent = launchSequence.mission.name + ' — Loss of vehicle';
                launchSequenceTitle.classList.add('outcome-failure');
                launchSequenceText.textContent = fp.failure.note;
                if (launchSequenceTime) launchSequenceTime.textContent = 'T+' + fp.failure.elapsedSeconds + 's';
            } else {
                launchSequenceTitle.textContent = launchSequence.mission.name + ' — Reached orbit';
                launchSequenceText.textContent = fp.successNote || 'Successfully reached orbit.';
            }
        }
    }
}

if (launchSequenceCloseBtn) {
    launchSequenceCloseBtn.addEventListener('click', clearLaunchSequence);
}
if (bodyModal) {
    bodyModal.addEventListener('click', (event) => {
        const btn = event.target.closest('.watch-launch-btn');
        if (!btn) return;
        const missionId = btn.getAttribute('data-mission-id');
        const mission = MISSIONS.find(m => m.id === missionId);
        if (mission) playMissionLaunch(mission);
    });
}

// ---------------------------------------------------------------------------
// Mission journey replay ("Trace Journey")
// On-demand cinematic playback of a mission's real post-launch trajectory —
// flyby to flyby, ending at a live-computed present-day position. Same on-
// demand, rendered-only-while-active approach as playMissionLaunch() above,
// extended to a multi-leg path spanning the whole solar system instead of a
// single Earth-to-orbit arc. See journey math functions above (getCurrentDistanceAU,
// auToSceneDistance, heliocentricAngleAtDate) for how each waypoint is computed.
// ---------------------------------------------------------------------------
let journeySequence = null; // active playback state, or null when idle
const journeyPanel = document.getElementById('journey-panel');
const journeyTitle = document.getElementById('journey-title');
const journeyText = document.getElementById('journey-text');
const journeyTime = document.getElementById('journey-time');
const journeyLegIndicator = document.getElementById('journey-leg-indicator');
const journeyCloseBtn = document.getElementById('journey-close');

function clearJourneySequence() {
    if (journeySequence) {
        if (journeySequence.group && journeySequence.group.parent) {
            journeySequence.group.parent.remove(journeySequence.group);
        }
        journeySequence = null;
    }
    if (journeyPanel) journeyPanel.classList.add('hidden');
}

function buildJourneyWaypoints(mission) {
    const j = mission.journey;
    const waypoints = [];

    // Start at Earth's real position at the moment the sequence is launched
    // (sampled once, not continuously tracked, so the path is stable to watch).
    const earthWorldPos = new THREE.Vector3();
    if (earthMesh) earthMesh.getWorldPosition(earthWorldPos);
    waypoints.push({
        position: earthWorldPos.clone(),
        label: 'Earth',
        dateLabel: mission.flightPath ? mission.flightPath.launchDateLabel : 'Launch',
        note: 'Launch from Earth.'
    });

    let lastAngleRad = 0;
    j.legs.forEach(leg => {
        const dateMs = leg.date ? new Date(leg.date + 'T00:00:00Z').getTime() : null;
        let position = null;
        const label = leg.label || leg.body;

        switch (leg.type) {
            case 'flyby':
            case 'orbit-insertion': {
                // Passes by, or settles into orbit around, a body this app already
                // renders — reuse its real distance and the app's own orbital-angle
                // model at the real historical date (see heliocentricAngleAtDate above).
                // Checks both PLANETS and DWARF_PLANETS (Pluto/Ceres live in the latter).
                const planetData = PLANETS.find(p => p.name === leg.body) || DWARF_PLANETS.find(p => p.name === leg.body);
                if (!planetData) return; // defensive: skip rather than crash on bad data
                lastAngleRad = heliocentricAngleAtDate(planetData.orbitalPeriodDays, dateMs);
                position = polarToWorldPosition(planetData.distance, lastAngleRad);
                break;
            }
            case 'landed':
            case 'orbiting-current': {
                // Mission ends stationary on a surface, or is still actively orbiting
                // a body today — in both cases, reuse the mission's OWN already-
                // rendered marker position (set up in addSpacecraftToScene) rather
                // than recomputing new placement math, so the journey ends exactly
                // where the mission's marker actually sits in the live scene.
                const ownMesh = selectableObjects.find(o => o.userData && o.userData.id === mission.id);
                if (ownMesh) {
                    const p = new THREE.Vector3();
                    ownMesh.getWorldPosition(p);
                    position = p;
                } else if (leg.body) {
                    const planetData = PLANETS.find(p => p.name === leg.body) || DWARF_PLANETS.find(p => p.name === leg.body);
                    if (planetData) {
                        lastAngleRad = heliocentricAngleAtDate(planetData.orbitalPeriodDays, dateMs || Date.now());
                        position = polarToWorldPosition(planetData.distance, lastAngleRad);
                    }
                }
                break;
            }
            case 'destroyed': {
                // Mission ends by impact or atmospheric entry — the path stops here;
                // no waypoint follows a 'destroyed' leg.
                const planetData = PLANETS.find(p => p.name === leg.body) || DWARF_PLANETS.find(p => p.name === leg.body);
                if (!planetData) return;
                lastAngleRad = heliocentricAngleAtDate(planetData.orbitalPeriodDays, dateMs);
                position = polarToWorldPosition(planetData.distance, lastAngleRad);
                break;
            }
            case 'returned': {
                // Sample-return or crewed return — closes the loop back at Earth's
                // real position (same sample used for the starting waypoint).
                position = earthWorldPos.clone();
                break;
            }
            case 'outbound': {
                // Continues outward past any charted body, holding the bearing of
                // the last real flyby (physically reasonable: post-flyby trajectories
                // coast ballistically with only gradual solar deflection out here).
                const sceneDist = auToSceneDistance(leg.distanceAU);
                position = polarToWorldPosition(sceneDist, lastAngleRad);
                break;
            }
            default:
                return; // unknown/missing leg type — skip rather than guess
        }

        if (!position) return;
        waypoints.push({ position, label, dateLabel: leg.dateLabel, note: leg.note });
    });

    // Only missions still cruising outward (journey.current present) get a final
    // live-computed leg. Landed, destroyed, returned, and currently-orbiting
    // missions have no further motion to project — their last leg above already
    // is the honest "current position".
    if (j.current) {
        const currentAU = getCurrentDistanceAU(mission);
        if (currentAU != null) {
            const sceneDist = auToSceneDistance(currentAU);
            const position = polarToWorldPosition(sceneDist, lastAngleRad);
            const today = new Date();
            waypoints.push({
                position,
                label: 'Current position',
                dateLabel: today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) + ' (today)',
                note: `Approximately ${currentAU.toFixed(1)} AU from the Sun today, still moving outward. ${j.current.sourceNote}`
            });
        }
    }

    return waypoints;
}

function playMissionJourney(mission) {
    if (!mission || !mission.journey) return;
    clearJourneySequence();
    clearLaunchSequence();
    closeDetailModal();
    if (typeof closeBodyModal === 'function') closeBodyModal();

    const waypoints = buildJourneyWaypoints(mission);
    if (waypoints.length < 2) return;

    const curvePoints3 = waypoints.map(w => w.position);
    const curve = new THREE.CatmullRomCurve3(curvePoints3, false, 'catmullrom', 0.15);
    const sampleCount = Math.max(200, waypoints.length * 60);
    const curvePoints = curve.getPoints(sampleCount);

    const group = new THREE.Object3D();

    const lineGeometry = new THREE.BufferGeometry().setFromPoints(curvePoints);
    lineGeometry.setDrawRange(0, 0);
    const line = new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({ color: 0xa78bfa, transparent: true, opacity: 0.9 }));
    group.add(line);

    const markerGeometry = new THREE.SphereGeometry(0.4, 12, 12);
    const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    marker.position.copy(curvePoints[0]);
    group.add(marker);

    // A small marker at each real waypoint, left in place for context as the line passes them.
    waypoints.forEach(w => {
        const dot = new THREE.Mesh(
            new THREE.SphereGeometry(0.25, 10, 10),
            new THREE.MeshBasicMaterial({ color: 0xc4b5fd })
        );
        dot.position.copy(w.position);
        group.add(dot);
    });

    scene.add(group);

    // Equal time per leg (not distance-weighted) — simplest coherent pacing, and
    // keeps a single flyby from dominating the runtime just because interstellar
    // distances are numerically huge compared to planet-to-planet hops.
    const legCount = waypoints.length - 1;
    const totalPoints = curvePoints.length;
    const durationMs = PREFERS_REDUCED_MOTION ? (100 * legCount) : (2600 * legCount);

    journeySequence = {
        mission,
        group,
        line,
        marker,
        curvePoints,
        totalPoints,
        waypoints,
        legCount,
        startTime: performance.now(),
        duration: durationMs,
        currentLegIndex: -1,
        finished: false
    };

    // Wide establishing view so the whole outward path is visible at once.
    const farthest = waypoints[waypoints.length - 1].position;
    const viewDist = farthest.length();
    startCameraTransition(
        new THREE.Vector3(viewDist * 0.55, viewDist * 0.42, viewDist * 0.55),
        new THREE.Vector3(0, 0, 0),
        PREFERS_REDUCED_MOTION ? 300 : 2000
    );

    if (journeyPanel && journeyTitle && journeyText) {
        journeyPanel.classList.remove('hidden');
        journeyTitle.textContent = mission.name + ' — Journey';
        journeyText.textContent = 'Departing Earth' + (waypoints[0].dateLabel ? (', ' + waypoints[0].dateLabel) : '') + '…';
        if (journeyTime) journeyTime.textContent = '';
        if (journeyLegIndicator) journeyLegIndicator.textContent = 'Leg 1 of ' + legCount;
    }
}

// Called every frame from animate() while a journey sequence is active.
function updateJourneySequence(nowMs) {
    if (!journeySequence || journeySequence.finished) return;
    const elapsed = nowMs - journeySequence.startTime;
    const t = Math.min(1, elapsed / journeySequence.duration);
    const pointIndex = Math.max(1, Math.floor(t * (journeySequence.totalPoints - 1)) + 1);
    journeySequence.line.geometry.setDrawRange(0, pointIndex);
    const currentPoint = journeySequence.curvePoints[pointIndex - 1];
    if (currentPoint) journeySequence.marker.position.copy(currentPoint);

    // Which leg are we currently on, given equal time-per-leg pacing?
    const legIndex = Math.min(journeySequence.legCount - 1, Math.floor(t * journeySequence.legCount));
    if (legIndex !== journeySequence.currentLegIndex) {
        journeySequence.currentLegIndex = legIndex;
        const arriving = journeySequence.waypoints[legIndex + 1];
        if (journeyTitle && journeyText) {
            journeyText.textContent = (arriving.label ? (arriving.label + ' — ') : '') + (arriving.dateLabel || '') + '. ' + (arriving.note || '');
        }
        if (journeyLegIndicator) {
            journeyLegIndicator.textContent = 'Leg ' + (legIndex + 1) + ' of ' + journeySequence.legCount;
        }
    }
    if (journeyTime) {
        journeyTime.textContent = Math.round(t * 100) + '%';
    }

    if (t >= 1 && !journeySequence.finished) {
        journeySequence.finished = true;
        const last = journeySequence.waypoints[journeySequence.waypoints.length - 1];
        if (journeyTitle && journeyText) {
            journeyTitle.textContent = journeySequence.mission.name + ' — ' + last.label;
            journeyText.textContent = (last.dateLabel || '') + '. ' + (last.note || '');
        }
        if (journeyLegIndicator) journeyLegIndicator.textContent = 'Journey complete';
        if (journeyTime) journeyTime.textContent = '100%';
    }
}

if (journeyCloseBtn) {
    journeyCloseBtn.addEventListener('click', clearJourneySequence);
}
if (bodyModal) {
    bodyModal.addEventListener('click', (event) => {
        const btn = event.target.closest('.trace-journey-btn');
        if (!btn) return;
        const missionId = btn.getAttribute('data-mission-id');
        const mission = MISSIONS.find(m => m.id === missionId);
        if (mission) playMissionJourney(mission);
    });
}


// Set planet and moon orbits to approximate "today" positions (asteroid/Kuiper keep random spread)
(function setInitialOrbitsToToday() {
    var daysSinceEpoch = (Date.now() - REALTIME_EPOCH_MS) / (24 * 60 * 60 * 1000);
    orbitalBodies.forEach(function (b) {
        if (!b.group || b.orbitalPeriodDays == null) return;
        b.group.rotation.y = (daysSinceEpoch / b.orbitalPeriodDays) * Math.PI * 2;
    });
})();

// --- 4. ANIMATION AND INTERACTION LOOP ---

var pauseWhenModalOpen = false;
// Reused every frame instead of allocating a new THREE.Vector3 each time (reduces GC pressure)
const _labelWorldPos = new THREE.Vector3();
const _modalWorldPos = new THREE.Vector3();

function animate() {
    requestAnimationFrame(animate);
    var modalOpen = bodyModal && !bodyModal.classList.contains('hidden');
    var effectivelyPaused = animationPaused || (pauseWhenModalOpen && modalOpen) || !!launchSequence || !!journeySequence;

    if (!effectivelyPaused) {
        sun.rotation.y += 0.001 * speedMultiplier; 

        // Rotate orbital groups and bodies using the current speed multiplier
        orbitalBodies.forEach(body => {
            if (!body) return;
            if (body.group) {
                body.group.rotation.y += body.orbitSpeed * speedMultiplier; 
            }
            if (body.mesh) {
                body.mesh.rotation.y += body.selfRotateSpeed * speedMultiplier;
            }
        });
        // Spacecraft orbiting their parent (Earth, Jupiter, Saturn, Mars, Venus)
        spacecraftOrbitBodies.forEach(entry => {
            if (entry.group) entry.group.rotation.y += entry.orbitSpeed * speedMultiplier;
        });
    }

    // Smooth camera transitions for presets
    if (cameraTransition) {
        const now = performance.now();
        const elapsed = now - cameraTransition.startTime;
        const t = Math.min(1, elapsed / cameraTransition.duration);
        const easedT = t * t * (3 - 2 * t); // smoothstep

        camera.position.lerpVectors(
            cameraTransition.startPosition,
            cameraTransition.endPosition,
            easedT
        );
        controls.target.lerpVectors(
            cameraTransition.startTarget,
            cameraTransition.endTarget,
            easedT
        );

        if (t >= 1) {
            cameraTransition = null;
        }
    }

    // Mission launch-sequence replay (runs independent of orbit pause, like camera transitions)
    if (launchSequence) {
        updateLaunchSequence(performance.now());
    }
    // Mission journey replay (same independent-of-pause treatment)
    if (journeySequence) {
        updateJourneySequence(performance.now());
    }

    // Selection highlight ring and orbit trail
    selectableObjects.forEach(function (obj) {
        var h = obj.getObjectByName('highlight');
        if (h) h.visible = (obj === currentIntersected || obj === selectedBody);
    });
    var selectedDist = selectedBody && selectedBody.userData && selectedBody.userData.distanceSU != null ? selectedBody.userData.distanceSU : null;
    orbitLines.forEach(function (line) {
        if (!line || !line.material) return;
        var isSelected = selectedDist != null && line.userData && line.userData.distance === selectedDist;
        line.material.color.setHex(isSelected ? 0x5588cc : (line.userData.dimmer ? 0x222222 : 0x333333));
        line.material.opacity = isSelected ? 1 : (line.userData.dimmer ? 0.6 : 0.9);
    });

    // Update label positions and visibility
    labelPairs.forEach(pair => {
        if (!pair || !pair.mesh || !pair.label) return;
        pair.label.visible = showLabels;
        if (!showLabels) {
            return;
        }
        const offset = (pair.mesh.userData.radius || 1) * 2 + 0.5;
        pair.mesh.getWorldPosition(_labelWorldPos);
        pair.label.position.copy(_labelWorldPos);
        pair.label.position.y += offset;
    });

    // Modal view: render focused body with second camera into modal canvas
    if (bodyModal && !bodyModal.classList.contains('hidden') && focusedBody && modalRenderer && modalCamera && modalGlobeView) {
        const cw = modalGlobeView.clientWidth || 400;
        const ch = modalGlobeView.clientHeight || 360;
        if (modalRenderer.domElement.width !== cw || modalRenderer.domElement.height !== ch) {
            modalRenderer.setSize(cw, ch);
            modalRenderer.domElement.width = cw;
            modalRenderer.domElement.height = ch;
            modalCamera.aspect = cw / ch;
            modalCamera.updateProjectionMatrix();
        }
        focusedBody.getWorldPosition(_modalWorldPos);
        const dx = modalZoomDistance * Math.sin(modalAngle);
        const dz = modalZoomDistance * Math.cos(modalAngle);
        modalCamera.position.set(_modalWorldPos.x + dx, _modalWorldPos.y + modalZoomDistance * 0.15, _modalWorldPos.z + dz);
        modalCamera.lookAt(_modalWorldPos);
        modalRenderer.render(scene, modalCamera);
    }

    // Handle Hover (Mousemove)
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(selectableObjects);

    if (intersects.length > 0) {
        currentIntersected = intersects[0].object;
        if (!selectedBody) {
             displayBodyInfo(currentIntersected.userData, currentIntersected);
        }
    } else {
        if (!selectedBody) {
            currentIntersected = null;
            selectionDisplay.innerHTML = 'Hover over a planet, moon, or spacecraft!';
        }
    }
    if (selectedBody) {
        displayBodyInfo(selectedBody.userData, selectedBody);
    }

    if (starMaterial) {
        starMaterial.opacity = 0.85 + 0.1 * Math.sin(performance.now() * 0.002);
    }
    updateMinimap();

    controls.update();
    renderer.render(scene, camera);
}

animate();

// --- 5. EVENT LISTENERS ---

// Handle mouse movement for hover detection
window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
}, false);

// Handle mouse click for locking selection
window.addEventListener('click', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(selectableObjects);

    if (intersects.length > 0) {
        const clickedObject = intersects[0].object;
        
        if (selectedBody === clickedObject) {
            selectedBody = null;
            selectionDisplay.innerHTML = 'Hover over a planet, moon, or spacecraft!';
        } else {
            selectedBody = clickedObject;
            displayBodyInfo(selectedBody.userData, selectedBody);

            // Focus the camera on the selected body
            const worldPos = new THREE.Vector3();
            clickedObject.getWorldPosition(worldPos);

            // Special zoom-in for the Moon
            if (selectedBody.userData && selectedBody.userData.name === 'Moon') {
                const toCamera = new THREE.Vector3().subVectors(camera.position, worldPos).normalize();
                const targetPosition = worldPos.clone().add(toCamera.multiplyScalar(5));
                startCameraTransition(targetPosition, worldPos, 1500);
            } else {
                controls.target.copy(worldPos);
            }
        }
    } else {
        selectedBody = null;
        selectionDisplay.innerHTML = 'Hover over a planet, moon, or spacecraft!';
    }
});

// Double-click: celestial body → body modal; spacecraft (Mission) → spacecraft detail modal (how it works, history)
// Shared by both the mouse 'dblclick' listener and the touch double-tap detector below,
// so desktop and mobile trigger identically the same logic.
function handleBodyDoubleActivate(clientX, clientY) {
    mouse.x = (clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(selectableObjects);
    if (intersects.length > 0) {
        const obj = intersects[0].object;
        const data = obj.userData;
        const isCelestial = data && data.type && data.type !== 'Mission';
        if (isCelestial) {
            openBodyModal(obj);
        } else if (data && data.type === 'Mission' && data.id) {
            const mission = MISSIONS.find(m => m.id === data.id);
            // Missions with an interactive replay (Watch Launch / Trace Journey) need
            // the full body-modal, since that's the only place those buttons render.
            // Everything else keeps the lighter popup this branch always used.
            if (mission && (mission.flightPath || mission.journey)) {
                openBodyModal(obj);
                return;
            }
            const content = mission ? buildSpacecraftDetailContent(mission) : buildDetailContent(data);
            if (content) {
                const worldPos = new THREE.Vector3();
                obj.getWorldPosition(worldPos);
                worldPos.project(camera);
                const screenX = (worldPos.x + 1) * 0.5 * window.innerWidth;
                const screenY = (1 - worldPos.y) * 0.5 * window.innerHeight;
                openDetailModal(content, screenX, screenY);
            }
        } else {
            const content = buildDetailContent(data);
            if (content) {
                const worldPos = new THREE.Vector3();
                obj.getWorldPosition(worldPos);
                worldPos.project(camera);
                const screenX = (worldPos.x + 1) * 0.5 * window.innerWidth;
                const screenY = (1 - worldPos.y) * 0.5 * window.innerHeight;
                openDetailModal(content, screenX, screenY);
            }
        }
    }
}

window.addEventListener('dblclick', (event) => {
    handleBodyDoubleActivate(event.clientX, event.clientY);
});

// Touch double-tap: native 'dblclick' doesn't fire reliably from touch on all mobile browsers,
// so detect two touchend events close together in time and position and treat it the same way.
let lastTapTime = 0;
let lastTapX = 0;
let lastTapY = 0;
window.addEventListener('touchend', (event) => {
    if (!event.changedTouches || event.changedTouches.length === 0) return;
    const touch = event.changedTouches[0];
    const now = Date.now();
    const dx = touch.clientX - lastTapX;
    const dy = touch.clientY - lastTapY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (now - lastTapTime < 350 && distance < 30) {
        handleBodyDoubleActivate(touch.clientX, touch.clientY);
        lastTapTime = 0; // reset so a third quick tap doesn't chain into another double-tap
    } else {
        lastTapTime = now;
        lastTapX = touch.clientX;
        lastTapY = touch.clientY;
    }
}, { passive: true });

// Detail modal close
if (detailCloseBtn) detailCloseBtn.addEventListener('click', closeDetailModal);
if (detailModal) {
    const overlay = detailModal.querySelector('.detail-overlay');
    if (overlay) overlay.addEventListener('click', closeDetailModal);
}

// Focus overlay click closes body modal
if (focusOverlay) focusOverlay.addEventListener('click', closeBodyModal);

// White modal: close, backdrop, zoom, rotate
if (bodyModalCloseBtn) bodyModalCloseBtn.addEventListener('click', closeBodyModal);
if (bodyModal) {
    const backdrop = bodyModal.querySelector('.body-modal-backdrop');
    if (backdrop) backdrop.addEventListener('click', closeBodyModal);
}
document.getElementById('modal-zoom-in')?.addEventListener('click', () => {
    modalZoomDistance = Math.max(MODAL_ZOOM_MIN, modalZoomDistance / 1.25);
});
document.getElementById('modal-zoom-out')?.addEventListener('click', () => {
    modalZoomDistance = Math.min(MODAL_ZOOM_MAX, modalZoomDistance * 1.25);
});
document.getElementById('modal-rotate')?.addEventListener('click', () => {
    modalAngle += 0.4;
});

// Modal globe: helpers for surface marker picking + tooltip + selection
function pickSurfaceMarkerAt(clientX, clientY) {
    if (!modalRenderer || !modalCamera || !focusedBody) return null;
    const canvas = modalRenderer.domElement;
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    if (x < 0 || x > rect.width || y < 0 || y > rect.height) {
        return null;
    }
    const ndcX = (x / rect.width) * 2 - 1;
    const ndcY = -(y / rect.height) * 2 + 1;
    const threshold = 0.08;
    for (let i = 0; i < surfaceMarkersList.length; i++) {
        const m = surfaceMarkersList[i];
        const p = new THREE.Vector3();
        m.getWorldPosition(p);
        p.project(modalCamera);
        if (Math.abs(p.x - ndcX) < threshold && Math.abs(p.y - ndcY) < threshold) {
            return m;
        }
    }
    return null;
}

function updateModalMarkerTooltip(clientX, clientY) {
    if (!modalMarkerTooltip) return;
    const marker = pickSurfaceMarkerAt(clientX, clientY);
    if (marker && marker.userData) {
        modalMarkerTooltip.textContent = marker.userData.name || 'Missions';
        modalMarkerTooltip.classList.remove('hidden');
    } else {
        modalMarkerTooltip.classList.add('hidden');
    }
}

function handleModalMarkerClick(clientX, clientY) {
    const marker = pickSurfaceMarkerAt(clientX, clientY);
    if (!marker || !marker.userData || !marker.userData.id) return;
    selectMissionInModalById(marker.userData.id);
}

if (modalGlobeView) {
    modalGlobeView.addEventListener('mousemove', (e) => { updateModalMarkerTooltip(e.clientX, e.clientY); });
    modalGlobeView.addEventListener('mouseleave', () => { if (modalMarkerTooltip) modalMarkerTooltip.classList.add('hidden'); });
    modalGlobeView.addEventListener('click', (e) => { handleModalMarkerClick(e.clientX, e.clientY); });
}

// Button click listener bound to the function
document.getElementById('reset-view-button').addEventListener('click', resetView);

// UI control bindings
const toggleAnimationButton = document.getElementById('toggle-animation-button');
const speedSelect = document.getElementById('speed-select');
const toggleOrbitsCheckbox = document.getElementById('toggle-orbits');
const toggleAsteroidsCheckbox = document.getElementById('toggle-asteroids');
const toggleKuiperCheckbox = document.getElementById('toggle-kuiper');
const toggleLabelsCheckbox = document.getElementById('toggle-labels');
const presetButtons = document.querySelectorAll('.preset-button');

if (toggleAnimationButton) {
    toggleAnimationButton.textContent = animationPaused ? 'Resume orbits' : 'Pause orbits';
    toggleAnimationButton.addEventListener('click', () => {
        animationPaused = !animationPaused;
        toggleAnimationButton.textContent = animationPaused ? 'Resume orbits' : 'Pause orbits';
    });
}

if (speedSelect) {
    speedSelect.addEventListener('change', (event) => {
        const value = parseFloat(event.target.value);
        speedMultiplier = isNaN(value) ? 1 : value;
    });
}

if (toggleOrbitsCheckbox) {
    toggleOrbitsCheckbox.addEventListener('change', () => {
        const visible = toggleOrbitsCheckbox.checked;
        orbitLines.forEach(line => {
            if (line) line.visible = visible;
        });
    });
}

if (toggleAsteroidsCheckbox) {
    toggleAsteroidsCheckbox.addEventListener('change', () => {
        const visible = toggleAsteroidsCheckbox.checked;
        asteroidGroups.forEach(group => {
            if (group) group.visible = visible;
        });
    });
}

if (toggleKuiperCheckbox) {
    toggleKuiperCheckbox.addEventListener('change', () => {
        const visible = toggleKuiperCheckbox.checked;
        kuiperGroups.forEach(group => {
            if (group) group.visible = visible;
        });
    });
}

if (toggleLabelsCheckbox) {
    toggleLabelsCheckbox.addEventListener('change', () => {
        showLabels = toggleLabelsCheckbox.checked;
    });
}

// Camera preset helper
function startCameraTransition(targetPosition, targetLookAt, durationMs) {
    cameraTransition = {
        startTime: performance.now(),
        duration: durationMs,
        startPosition: camera.position.clone(),
        endPosition: targetPosition.clone(),
        startTarget: controls.target.clone(),
        endTarget: targetLookAt.clone()
    };
}

var presetDuration = PREFERS_REDUCED_MOTION ? 400 : 2200;
if (presetButtons && presetButtons.length) {
    presetButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const preset = btn.getAttribute('data-preset');
            const center = new THREE.Vector3(0, 0, 0);
            if (preset === 'inner') {
                startCameraTransition(new THREE.Vector3(0, 10, 35), center, presetDuration);
            } else if (preset === 'giants') {
                startCameraTransition(new THREE.Vector3(0, 15, 60), center, presetDuration);
            } else if (preset === 'outer') {
                startCameraTransition(new THREE.Vector3(0, 40, 120), center, presetDuration);
            } else if (preset === 'top') {
                startCameraTransition(new THREE.Vector3(0, 120, 0), center, presetDuration);
            }
            updateUrlState({ preset: preset });
        });
    });
}

// Handle Window Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Keyboard shortcuts: Space = pause, 1-4 = presets, R = reset, L = labels
// Space always pauses (never toggles a focused checkbox/button)
window.addEventListener('keydown', function (e) {
    if (e.code === 'Space') {
        e.preventDefault();
        animationPaused = !animationPaused;
        if (toggleAnimationButton) toggleAnimationButton.textContent = animationPaused ? 'Resume orbits' : 'Pause orbits';
        return;
    }
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) return;
    if (e.code === 'KeyR') {
        resetView();
        updateUrlState({ preset: '', body: '' });
        return;
    }
    if (e.code === 'KeyL') {
        showLabels = !showLabels;
        if (toggleLabelsCheckbox) toggleLabelsCheckbox.checked = showLabels;
        return;
    }
    if (e.code === 'Digit1') {
        var b = document.querySelector('.preset-button[data-preset="inner"]');
        if (b) b.click();
        return;
    }
    if (e.code === 'Digit2') {
        var b = document.querySelector('.preset-button[data-preset="giants"]');
        if (b) b.click();
        return;
    }
    if (e.code === 'Digit3') {
        var b = document.querySelector('.preset-button[data-preset="outer"]');
        if (b) b.click();
        return;
    }
    if (e.code === 'Digit4') {
        var b = document.querySelector('.preset-button[data-preset="top"]');
        if (b) b.click();
        return;
    }
    if (e.code === 'Slash' && e.shiftKey) {
        var overlay = document.getElementById('shortcuts-overlay');
        if (overlay) overlay.classList.toggle('hidden');
        return;
    }
});

// Go-to body dropdown (bodies + spacecraft/telescopes)
var goToSelect = document.getElementById('go-to-body');
if (goToSelect) {
    var bodyNames = [SUN_DATA.name];
    PLANETS.forEach(function (p) { bodyNames.push(p.name); });
    DWARF_PLANETS.forEach(function (p) { bodyNames.push(p.name); });
    for (var pn in MOON_SYSTEMS) MOON_SYSTEMS[pn].forEach(function (m) { bodyNames.push(m.name); });
    var bodiesGroup = document.createElement('optgroup');
    bodiesGroup.label = 'Bodies';
    bodyNames.forEach(function (name) {
        var opt = document.createElement('option');
        opt.value = name;
        opt.textContent = name;
        bodiesGroup.appendChild(opt);
    });
    goToSelect.appendChild(bodiesGroup);
    var craftGroup = document.createElement('optgroup');
    craftGroup.label = 'Spacecraft & telescopes';
    MISSIONS.forEach(function (m) {
        if (!m.name) return;
        var opt = document.createElement('option');
        opt.value = m.name;
        opt.textContent = m.name;
        craftGroup.appendChild(opt);
    });
    goToSelect.appendChild(craftGroup);
    goToSelect.addEventListener('change', function () {
        var name = goToSelect.value;
        if (!name) return;
        var mesh = selectableObjects.find(function (o) { return o.userData && o.userData.name === name; });
        if (!mesh) return;
        var worldPos = new THREE.Vector3();
        mesh.getWorldPosition(worldPos);
        var dist = Math.max(15, (mesh.userData.radius || 0.5) * 8);
        var dir = new THREE.Vector3().subVectors(camera.position, worldPos).normalize();
        var targetCam = worldPos.clone().add(dir.multiplyScalar(dist));
        startCameraTransition(targetCam, worldPos.clone(), presetDuration);
        goToSelect.value = '';
    });
}

// Search: Enter to go to first matching body
var searchInput = document.getElementById('search-body');
if (searchInput) {
    searchInput.addEventListener('keydown', function (e) {
        if (e.code !== 'Enter') return;
        var q = searchInput.value.trim().toLowerCase();
        if (!q) return;
        var mesh = selectableObjects.find(function (o) {
            return o.userData && o.userData.name && o.userData.name.toLowerCase().indexOf(q) >= 0;
        });
        if (mesh) {
            var worldPos = new THREE.Vector3();
            mesh.getWorldPosition(worldPos);
            var dist = Math.max(15, (mesh.userData.radius || 0.5) * 8);
            var dir = new THREE.Vector3().subVectors(camera.position, worldPos).normalize();
            startCameraTransition(worldPos.clone().add(dir.multiplyScalar(dist)), worldPos.clone(), presetDuration);
        }
    });
}

// Minimap tooltip
var minimapTooltip = document.getElementById('minimap-tooltip');
var minimapCanvas = document.getElementById('minimap');
if (minimapCanvas && minimapTooltip) {
    minimapCanvas.addEventListener('mousemove', function (e) {
        var rect = minimapCanvas.getBoundingClientRect();
        var x = e.clientX - rect.left, y = e.clientY - rect.top;
        var scale = 50 / 60, cx = 60, cy = 60;
        var worldPos = new THREE.Vector3();
        var hit = null;
        orbitalBodies.forEach(function (b) {
            if (!b.mesh || !b.name) return;
            b.mesh.getWorldPosition(worldPos);
            var px = cx + worldPos.x * scale, py = cy - worldPos.z * scale;
            if (Math.abs(px - x) < 6 && Math.abs(py - y) < 6) hit = b.name;
        });
        if (!hit && Math.abs((cx - x) * (cx - x) + (cy - y) * (cy - y) - 4) < 20) hit = SUN_DATA.name;
        if (hit) {
            minimapTooltip.textContent = hit;
            minimapTooltip.classList.remove('hidden');
        } else {
            minimapTooltip.classList.add('hidden');
        }
    });
    minimapCanvas.addEventListener('mouseleave', function () {
        if (minimapTooltip) minimapTooltip.classList.add('hidden');
    });
}

var togglePauseModalCheckbox = document.getElementById('toggle-pause-modal');
if (togglePauseModalCheckbox) {
    togglePauseModalCheckbox.addEventListener('change', function () {
        pauseWhenModalOpen = togglePauseModalCheckbox.checked;
    });
}

var toggleThemeCheckbox = document.getElementById('toggle-theme');
if (toggleThemeCheckbox) {
    toggleThemeCheckbox.addEventListener('change', function () {
        document.body.classList.toggle('theme-light-panel', toggleThemeCheckbox.checked);
    });
}

var shortcutsHint = document.getElementById('shortcuts-hint');
var shortcutsOverlay = document.getElementById('shortcuts-overlay');
if (shortcutsHint && shortcutsOverlay) {
    shortcutsHint.addEventListener('click', function () { shortcutsOverlay.classList.remove('hidden'); });
}
if (document.getElementById('shortcuts-close')) {
    document.getElementById('shortcuts-close').addEventListener('click', function () {
        if (shortcutsOverlay) shortcutsOverlay.classList.add('hidden');
    });
}
if (shortcutsOverlay) {
    shortcutsOverlay.addEventListener('click', function (e) {
        if (e.target === shortcutsOverlay) shortcutsOverlay.classList.add('hidden');
    });
}

function updateMinimap() {
    var canvas = document.getElementById('minimap');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var w = canvas.width, h = canvas.height, cx = w / 2, cy = h / 2;
    var scale = 50 / 60;
    ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)';
    ctx.lineWidth = 1;
    orbitLines.forEach(function (line) {
        if (!line || !line.visible) return;
        var r = line.geometry && line.geometry.parameters && line.geometry.parameters.innerRadius;
        if (r == null) return;
        ctx.beginPath();
        var rad = Math.min(r * scale, cx - 2);
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.stroke();
    });
    var worldPos = new THREE.Vector3();
    ctx.fillStyle = 'rgba(251, 191, 36, 0.95)';
    ctx.beginPath();
    ctx.arc(cx, cy, 2, 0, Math.PI * 2);
    ctx.fill();
    orbitalBodies.forEach(function (b) {
        if (!b.mesh) return;
        b.mesh.getWorldPosition(worldPos);
        var px = cx + worldPos.x * scale;
        var py = cy - worldPos.z * scale;
        if (px < 0 || px > w || py < 0 || py > h) return;
        ctx.fillStyle = 'rgba(148, 163, 184, 0.9)';
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fill();
    });
    ctx.fillStyle = 'rgba(59, 130, 246, 0.95)';
    ctx.beginPath();
    var tx = cx + controls.target.x * scale;
    var ty = cy - controls.target.z * scale;
    ctx.arc(tx, ty, 3, 0, Math.PI * 2);
    ctx.fill();
}

var scaleComparisonEl = document.getElementById('scale-comparison');
if (scaleComparisonEl) {
    scaleComparisonEl.textContent = 'Scale: If the Sun were 1 m across, Earth would be ~215 m away.';
}

var ambientAudioContext = null;
var ambientGain = null;
function setAmbientSound(on) {
    if (on) {
        if (!ambientAudioContext) {
            try {
                ambientAudioContext = new (window.AudioContext || window.webkitAudioContext)();
                var osc = ambientAudioContext.createOscillator();
                osc.type = 'sine';
                osc.frequency.value = 55;
                ambientGain = ambientAudioContext.createGain();
                ambientGain.gain.value = 0.02;
                osc.connect(ambientGain);
                ambientGain.connect(ambientAudioContext.destination);
                osc.start(0);
                ambientAudioContext._osc = osc;
            } catch (e) { return; }
        }
        if (ambientAudioContext._osc) ambientAudioContext._osc.connect(ambientGain);
    } else {
        if (ambientAudioContext && ambientAudioContext._osc) {
            try { ambientAudioContext._osc.disconnect(); } catch (e) {}
        }
    }
}
var soundToggle = document.getElementById('sound-toggle');
if (soundToggle) {
    soundToggle.addEventListener('change', function () { setAmbientSound(soundToggle.checked); });
}

var fullscreenBtn = document.getElementById('fullscreen-button');
if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', function () {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(function () {});
        } else {
            document.exitFullscreen();
        }
    });
}

var snapshotBtn = document.getElementById('snapshot-button');
if (snapshotBtn) {
    snapshotBtn.addEventListener('click', function () {
        try {
            var dataUrl = renderer.domElement.toDataURL('image/png');
            var a = document.createElement('a');
            a.href = dataUrl;
            a.download = 'solar-system-3d-' + Date.now() + '.png';
            a.click();
        } catch (e) {}
    });
}

// Apply URL state after scene is ready
setTimeout(applyUrlStateOnLoad, 200);
