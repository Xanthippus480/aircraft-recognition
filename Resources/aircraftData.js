const aircraftData = [
    {
        "aircraft name": "Airbus A319",
        "icao code": "A319",
        "cruise level": "310-380",
        "cruise speed (kts)": 450,
        "cruise speed (mach)": 0.79,
        "climb rate (fpm)": 2200,
        "descent rate (fpm)": 3000,
        "approach category": "C",
        "sully's list": "YES",
        "wake cat": "M"
    },
    {
        "aircraft name": "Airbus A320",
        "icao code": "A320",
        "cruise level": 410,
        "cruise speed (kts)": 450,
        "cruise speed (mach)": 0.79,
        "climb rate (fpm)": 2000,
        "descent rate (fpm)": 3500,
        "approach category": "C",
        "sully's list": "NO",
        "wake cat": "M"
    },
    {
        "aircraft name": "Airbus A321",
        "icao code": "A321",
        "cruise level": 410,
        "cruise speed (kts)": 450,
        "cruise speed (mach)": 0.79,
        "climb rate (fpm)": 2000,
        "descent rate (fpm)": 2500,
        "approach category": "C",
        "sully's list": "NO",
        "wake cat": "M"
    },
    {
        "aircraft name": "Airbus A330-300",
        "icao code": "A333",
        "cruise level": 410,
        "cruise speed (kts)": 470,
        "cruise speed (mach)": 0.81,
        "climb rate (fpm)": 2500,
        "descent rate (fpm)": 3000,
        "approach category": "C",
        "sully's list": "YES",
        "wake cat": "M"
    },
    {
        "aircraft name": "Airbus A340-600",
        "icao code": "A346",
        "cruise level": 410,
        "cruise speed (kts)": 480,
        "cruise speed (mach)": 0.82,
        "climb rate (fpm)": 1200,
        "descent rate (fpm)": 2000,
        "approach category": "D",
        "sully's list": "YES",
        "wake cat": "H"
    },
    {
        "aircraft name": "Airbus A350-900",
        "icao code": "A359",
        "cruise level": 410,
        "cruise speed (kts)": 490,
        "cruise speed (mach)": 0.85,
        "climb rate (fpm)": 2300,
        "descent rate (fpm)": 3000,
        "approach category": "D",
        "sully's list": "YES",
        "wake cat": "H"
    },
    {
        "aircraft name": "Airbus A380-800",
        "icao code": "A388",
        "cruise level": 430,
        "cruise speed (kts)": 520,
        "cruise speed (mach)": 0.85,
        "climb rate (fpm)": 2500,
        "descent rate (fpm)": 2000,
        "approach category": "C",
        "sully's list": "YES",
        "wake cat": "J"
    },
    {
        "aircraft name": "Airbus A400M ATLAS",
        "icao code": "A400",
        "cruise level": 290,
        "cruise speed (kts)": 421,
        "cruise speed (mach)": "-",
        "climb rate (fpm)": 1600,
        "descent rate (fpm)": "1100-1400",
        "approach category": "C",
        "sully's list": "NO",
        "wake cat": "H"
    },
    {
        "aircraft name": "ATR72",
        "icao code": "AT72",
        "cruise level": 250,
        "cruise speed (kts)": 275,
        "cruise speed (mach)": "-",
        "climb rate (fpm)": 1000,
        "descent rate (fpm)": "1000-1500",
        "approach category": "B",
        "sully's list": "YES",
        "wake cat": "L"
    },
    {
        "aircraft name": "Bae-146-300",
        "icao code": "B463",
        "cruise level": 310,
        "cruise speed (kts)": 380,
        "cruise speed (mach)": 0.65,
        "climb rate (fpm)": 2000,
        "descent rate (fpm)": 3000,
        "approach category": "C",
        "sully's list": "NO",
        "wake cat": "M"
    },
    {
        "aircraft name": "Beech 200 Super King Air",
        "icao code": "BE20",
        "cruise level": 350,
        "cruise speed (kts)": 260,
        "cruise speed (mach)": 0.48,
        "climb rate (fpm)": 1000,
        "descent rate (fpm)": 1500,
        "approach category": "B",
        "sully's list": "YES",
        "wake cat": "L"
    },
    {
        "aircraft name": "Beechcraft Premier 1A",
        "icao code": "PRM1",
        "cruise level": 410,
        "cruise speed (kts)": 440,
        "cruise speed (mach)": 0.78,
        "climb rate (fpm)": 1500,
        "descent rate (fpm)": 1800,
        "approach category": "B",
        "sully's list": "NO",
        "wake cat": "L"
    },
    {
        "aircraft name": "Bell B206 Jet Ranger",
        "icao code": "B06",
        "cruise level": 100,
        "cruise speed (kts)": 120,
        "cruise speed (mach)": "-",
        "climb rate (fpm)": "500-1000",
        "descent rate (fpm)": 500,
        "approach category": "A",
        "sully's list": "NO",
        "wake cat": "L"
    },
    {
        "aircraft name": "Boeing 737-800",
        "icao code": "B738",
        "cruise level": 410,
        "cruise speed (kts)": 460,
        "cruise speed (mach)": 0.79,
        "climb rate (fpm)": 2000,
        "descent rate (fpm)": 3500,
        "approach category": "C",
        "sully's list": "YES",
        "wake cat": "M"
    },
    {
        "aircraft name": "Boeing 747-400",
        "icao code": "B744",
        "cruise level": 450,
        "cruise speed (kts)": 510,
        "cruise speed (mach)": 0.85,
        "climb rate (fpm)": 1500,
        "descent rate (fpm)": 3000,
        "approach category": "D",
        "sully's list": "YES",
        "wake cat": "H"
    },
    {
        "aircraft name": "Boeing 757-200",
        "icao code": "B752",
        "cruise level": 420,
        "cruise speed (kts)": 470,
        "cruise speed (mach)": 0.8,
        "climb rate (fpm)": 2500,
        "descent rate (fpm)": 3500,
        "approach category": "C",
        "sully's list": "YES",
        "wake cat": "M"
    },
    {
        "aircraft name": "Boeing 767-300 ER",
        "icao code": "B763",
        "cruise level": 450,
        "cruise speed (kts)": 460,
        "cruise speed (mach)": 0.8,
        "climb rate (fpm)": 2500,
        "descent rate (fpm)": 3000,
        "approach category": "C",
        "sully's list": "YES",
        "wake cat": "H"
    },
    {
        "aircraft name": "Boeing 777-300",
        "icao code": "B773",
        "cruise level": 430,
        "cruise speed (kts)": 490,
        "cruise speed (mach)": 0.84,
        "climb rate (fpm)": 2500,
        "descent rate (fpm)": 3000,
        "approach category": "D",
        "sully's list": "YES",
        "wake cat": "H"
    },
    {
        "aircraft name": "Boeing 787-8",
        "icao code": "B788",
        "cruise level": 430,
        "cruise speed (kts)": 470,
        "cruise speed (mach)": 0.85,
        "climb rate (fpm)": 2000,
        "descent rate (fpm)": 2800,
        "approach category": "C",
        "sully's list": "YES",
        "wake cat": "H"
    },
    {
        "aircraft name": "Boeing Chinook",
        "icao code": "H47",
        "cruise level": 100,
        "cruise speed (kts)": 130,
        "cruise speed (mach)": "-",
        "climb rate (fpm)": 1000,
        "descent rate (fpm)": "1000-1500",
        "approach category": "A",
        "sully's list": "NO",
        "wake cat": "L"
    },
    {
        "aircraft name": "Bombardier BD700 Global Express",
        "icao code": "GLEX",
        "cruise level": 510,
        "cruise speed (kts)": 490,
        "cruise speed (mach)": 0.85,
        "climb rate (fpm)": 3000,
        "descent rate (fpm)": "1500-2000",
        "approach category": "C",
        "sully's list": "YES",
        "wake cat": "M"
    },
    {
        "aircraft name": "Bombardier Challenger 600",
        "icao code": "CL60",
        "cruise level": 410,
        "cruise speed (kts)": 460,
        "cruise speed (mach)": 0.75,
        "climb rate (fpm)": 3000,
        "descent rate (fpm)": "1000-3000",
        "approach category": "C",
        "sully's list": "NO",
        "wake cat": "M"
    },
    {
        "aircraft name": "Bombardier Dash 8 Q400",
        "icao code": "DH8D",
        "cruise level": 250,
        "cruise speed (kts)": 360,
        "cruise speed (mach)": 0.6,
        "climb rate (fpm)": 1500,
        "descent rate (fpm)": 1500,
        "approach category": "C",
        "sully's list": "YES",
        "wake cat": "M"
    },
    {
        "aircraft name": "Bombardier Regional Jet CRJ-100",
        "icao code": "CRJ1",
        "cruise level": 410,
        "cruise speed (kts)": 420,
        "cruise speed (mach)": 0.75,
        "climb rate (fpm)": 2500,
        "descent rate (fpm)": "1500-2000",
        "approach category": "C",
        "sully's list": "NO",
        "wake cat": "M"
    },
    {
        "aircraft name": "British Aerospace Hawk",
        "icao code": "HAWK",
        "cruise level": 500,
        "cruise speed (kts)": 420,
        "cruise speed (mach)": 0.75,
        "climb rate (fpm)": 8000,
        "descent rate (fpm)": 8000,
        "approach category": "C",
        "sully's list": "NO",
        "wake cat": "M"
    },
    {
        "aircraft name": "Britten Norman BN-2T Turbine Islander",
        "icao code": "BN2T",
        "cruise level": 100,
        "cruise speed (kts)": 145,
        "cruise speed (mach)": "-",
        "climb rate (fpm)": "500-1000",
        "descent rate (fpm)": "500-1000",
        "approach category": "A",
        "sully's list": "NO",
        "wake cat": "L"
    },
    {
        "aircraft name": "C750 Citation 10",
        "icao code": "C750",
        "cruise level": 510,
        "cruise speed (kts)": 550,
        "cruise speed (mach)": 0.9,
        "climb rate (fpm)": 3000,
        "descent rate (fpm)": 2000,
        "approach category": "C",
        "sully's list": "NO",
        "wake cat": "M"
    },
    {
        "aircraft name": "Cessna 152",
        "icao code": "C152",
        "cruise level": 100,
        "cruise speed (kts)": 105,
        "cruise speed (mach)": "-",
        "climb rate (fpm)": 500,
        "descent rate (fpm)": 500,
        "approach category": "A",
        "sully's list": "NO",
        "wake cat": "L"
    },
    {
        "aircraft name": "Cessna 172",
        "icao code": "C172",
        "cruise level": 100,
        "cruise speed (kts)": 115,
        "cruise speed (mach)": "-",
        "climb rate (fpm)": 500,
        "descent rate (fpm)": 500,
        "approach category": "A",
        "sully's list": "YES",
        "wake cat": "L"
    },
    {
        "aircraft name": "Cessna 510 Citation Mustang",
        "icao code": "C510",
        "cruise level": 410,
        "cruise speed (kts)": 360,
        "cruise speed (mach)": 0.59,
        "climb rate (fpm)": "2000-3000",
        "descent rate (fpm)": "1500-3000",
        "approach category": "C",
        "sully's list": "YES",
        "wake cat": "M"
    },
    {
        "aircraft name": "Cessna 560X Citation Excel",
        "icao code": "C56X",
        "cruise level": 450,
        "cruise speed (kts)": 430,
        "cruise speed (mach)": 0.73,
        "climb rate (fpm)": 3000,
        "descent rate (fpm)": "1000-3000",
        "approach category": "B",
        "sully's list": "NO",
        "wake cat": "L"
    },
    {
        "aircraft name": "Dassault Falcon 20",
        "icao code": "FA20",
        "cruise level": 420,
        "cruise speed (kts)": 420,
        "cruise speed (mach)": 0.76,
        "climb rate (fpm)": 2000,
        "descent rate (fpm)": 3000,
        "approach category": "B",
        "sully's list": "NO",
        "wake cat": "L"
    },
    {
        "aircraft name": "Dassault Falcon 2000",
        "icao code": "F2TH",
        "cruise level": 470,
        "cruise speed (kts)": 470,
        "cruise speed (mach)": 0.82,
        "climb rate (fpm)": 2000,
        "descent rate (fpm)": "1000-4000",
        "approach category": "C",
        "sully's list": "NO",
        "wake cat": "M"
    },
    {
        "aircraft name": "Dassault Falcon 900",
        "icao code": "F900",
        "cruise level": 510,
        "cruise speed (kts)": 510,
        "cruise speed (mach)": 0.85,
        "climb rate (fpm)": 2500,
        "descent rate (fpm)": 4000,
        "approach category": "B",
        "sully's list": "NO",
        "wake cat": "M"
    },
    {
        "aircraft name": "Embraer 145",
        "icao code": "E145",
        "cruise level": 370,
        "cruise speed (kts)": 440,
        "cruise speed (mach)": 0.76,
        "climb rate (fpm)": 2000,
        "descent rate (fpm)": "1500-2000",
        "approach category": "C",
        "sully's list": "NO",
        "wake cat": "M"
    },
    {
        "aircraft name": "Embraer 195",
        "icao code": "E195",
        "cruise level": 360,
        "cruise speed (kts)": 420,
        "cruise speed (mach)": 0.82,
        "climb rate (fpm)": 1500,
        "descent rate (fpm)": 2000,
        "approach category": "C",
        "sully's list": "NO",
        "wake cat": "M"
    },
    {
        "aircraft name": "Eurocopter EC-135",
        "icao code": "EC35",
        "cruise level": 100,
        "cruise speed (kts)": 135,
        "cruise speed (mach)": "-",
        "climb rate (fpm)": 1500,
        "descent rate (fpm)": 1000,
        "approach category": "A",
        "sully's list": "NO",
        "wake cat": "L"
    },
    {
        "aircraft name": "Eurocopter Twin Squirrel",
        "icao code": "AS55",
        "cruise level": 100,
        "cruise speed (kts)": 120,
        "cruise speed (mach)": "-",
        "climb rate (fpm)": 1200,
        "descent rate (fpm)": 1000,
        "approach category": "A",
        "sully's list": "NO",
        "wake cat": "L"
    },
    {
        "aircraft name": "Fokker 100",
        "icao code": "F100",
        "cruise level": 350,
        "cruise speed (kts)": 405,
        "cruise speed (mach)": 0.73,
        "climb rate (fpm)": 2000,
        "descent rate (fpm)": "1500-2000",
        "approach category": "C",
        "sully's list": "NO",
        "wake cat": "M"
    },
    {
        "aircraft name": "Gulfstream 4",
        "icao code": "GLF4",
        "cruise level": 450,
        "cruise speed (kts)": 450,
        "cruise speed (mach)": 0.8,
        "climb rate (fpm)": 3000,
        "descent rate (fpm)": 2500,
        "approach category": "C",
        "sully's list": "NO",
        "wake cat": "M"
    },
    {
        "aircraft name": "Gulfstream G200",
        "icao code": "GALX",
        "cruise level": 450,
        "cruise speed (kts)": 470,
        "cruise speed (mach)": 0.81,
        "climb rate (fpm)": 3000,
        "descent rate (fpm)": "1000-4000",
        "approach category": "C",
        "sully's list": "NO",
        "wake cat": "M"
    },
    {
        "aircraft name": "Jetstream 41",
        "icao code": "JS41",
        "cruise level": 260,
        "cruise speed (kts)": 290,
        "cruise speed (mach)": "-",
        "climb rate (fpm)": 1500,
        "descent rate (fpm)": 1500,
        "approach category": "B",
        "sully's list": "NO",
        "wake cat": "L"
    },
    {
        "aircraft name": "Learjet 45",
        "icao code": "LJ45",
        "cruise level": 450,
        "cruise speed (kts)": 450,
        "cruise speed (mach)": 0.78,
        "climb rate (fpm)": 3000,
        "descent rate (fpm)": "1000-4000",
        "approach category": "C",
        "sully's list": "NO",
        "wake cat": "M"
    },
    {
        "aircraft name": "Lockheed Martin C-130J Hercules",
        "icao code": "C30J",
        "cruise level": 310,
        "cruise speed (kts)": 330,
        "cruise speed (mach)": 0.58,
        "climb rate (fpm)": 1500,
        "descent rate (fpm)": "1000-1500",
        "approach category": "C",
        "sully's list": "YES",
        "wake cat": "M"
    },
    {
        "aircraft name": "MD-87",
        "icao code": "MD87",
        "cruise level": 370,
        "cruise speed (kts)": 440,
        "cruise speed (mach)": 0.76,
        "climb rate (fpm)": 2700,
        "descent rate (fpm)": 3000,
        "approach category": "C",
        "sully's list": "NO",
        "wake cat": "M"
    },
    {
        "aircraft name": "Pilatus PC-12",
        "icao code": "PC12",
        "cruise level": 300,
        "cruise speed (kts)": 270,
        "cruise speed (mach)": "-",
        "climb rate (fpm)": 1000,
        "descent rate (fpm)": "1000-1600",
        "approach category": "A",
        "sully's list": "YES",
        "wake cat": "L"
    },
    {
        "aircraft name": "Piper Cherokee PA-28",
        "icao code": "P28A",
        "cruise level": 100,
        "cruise speed (kts)": 129,
        "cruise speed (mach)": "-",
        "climb rate (fpm)": 700,
        "descent rate (fpm)": 500,
        "approach category": "A",
        "sully's list": "NO",
        "wake cat": "L"
    },
    {
        "aircraft name": "Piper Navajo P-31",
        "icao code": "PA31",
        "cruise level": 100,
        "cruise speed (kts)": 210,
        "cruise speed (mach)": "-",
        "climb rate (fpm)": 800,
        "descent rate (fpm)": 800,
        "approach category": "A",
        "sully's list": "YES",
        "wake cat": "L"
    },
    {
        "aircraft name": "Piper Tomahawk",
        "icao code": "PA38",
        "cruise level": 100,
        "cruise speed (kts)": 95,
        "cruise speed (mach)": "-",
        "climb rate (fpm)": 100,
        "descent rate (fpm)": 500,
        "approach category": "A",
        "sully's list": "NO",
        "wake cat": "L"
    },
    {
        "aircraft name": "Raytheon Bae-125",
        "icao code": "H25B",
        "cruise level": "310-400",
        "cruise speed (kts)": 463,
        "cruise speed (mach)": 0.86,
        "climb rate (fpm)": 2500,
        "descent rate (fpm)": "2000-2500",
        "approach category": "C",
        "sully's list": "YES",
        "wake cat": "M"
    },
    {
        "aircraft name": "Robinson R22",
        "icao code": "R22",
        "cruise level": 100,
        "cruise speed (kts)": 82,
        "cruise speed (mach)": "-",
        "climb rate (fpm)": 1200,
        "descent rate (fpm)": 500,
        "approach category": "A",
        "sully's list": "NO",
        "wake cat": "L"
    },
    {
        "aircraft name": "Saab 2000",
        "icao code": "SB20",
        "cruise level": 310,
        "cruise speed (kts)": 360,
        "cruise speed (mach)": 0.6,
        "climb rate (fpm)": 1700,
        "descent rate (fpm)": "1500-2000",
        "approach category": "B",
        "sully's list": "YES",
        "wake cat": "L"
    },
    {
        "aircraft name": "Sikorsky S76",
        "icao code": "S76",
        "cruise level": 100,
        "cruise speed (kts)": 150,
        "cruise speed (mach)": "-",
        "climb rate (fpm)": 1300,
        "descent rate (fpm)": "500-1000",
        "approach category": "A",
        "sully's list": "NO",
        "wake cat": "L"
    },
    {
        "aircraft name": "Sukhoi - Superjet 100-95",
        "icao code": "SU95",
        "cruise level": 410,
        "cruise speed (kts)": 450,
        "cruise speed (mach)": 0.78,
        "climb rate (fpm)": 2000,
        "descent rate (fpm)": 2800,
        "approach category": "C",
        "sully's list": "NO",
        "wake cat": "M"
    }
]

export default aircraftData