const teams = {
    "Madrid in Game": {
        "AGUM0N#EUW": "SUPPORT",
        "Eltigrehuevn#EUW": "JUNGLE",
        "paulamonca#KNCR": "SUPPORT",
        "FM Alén Stark#EUW": "MID",
        "PNZ GOLONDRINO#EUW": "BOT",
        "Radar#MIG": "TOP",
        "Lord Zas#EUW": "SUPPORT"
    },
    "PorKs": {
        "Mouseman#6969": "JUNGLE",
        "Josem6#EUW": "SUPPORT",
        "Vandervan9#9816": "TOP",
        "Piporrinho#EUW": "MID",
        "SuperDaniel100#EUW": "BOT"
    },
    "Uda Team": {
        "Roirro#7245": "BOT",
        "I love your sis#POKER": "TOP",
        "Fodtrex#0505": "SUPPORT",
        "QiyanaJeJe#LMAO": "MID",
        "el babayaga#ROI": "JUNGLE",
        "Alexus679#2004": "MID",
        "Kxpotx#1313": "MID"
    },
    "Bombeta": {
        "GRX#999": "JUNGLE",
        "EGO IS THE ENEMY#Saile": "TOP",
        "Yukaria#EUW": "SUPPORT",
        "Ichigo Kurosaki#SIKAI": "TOP",
        "Kàppá#EUW": "SUPPORT",
        "ALNSHT#725": "BOT",
        "Petalo#Bloom": "SUPPORT"
    },
    "Madriz city": {
        "BEER ADDICT#MAHOU": "BOT",
        "Junco#1999": "SUPPORT",
        "Zherathor#feo": "MID",
        "ShοοLow#922": "JUNGLE",
        "KFCUSER123#CL5": "MID",
        "Parlis#PRLS": "TOP"
    },
    "AYUSERS": {
        "fakewunder#JTN": "TOP",
        "Alakamita#uwu": "MID",
        "Prominence1#EUW": "JUNGLE",
        "Destru#KING": "BOT",
        "ScarzoJ#6969": "SUPPORT",
        "Holy Diver#5024": "MID"
    }
};

const laneIcons = {
    TOP: "/img/TopLane.png",
    JUNGLE: '/img/Jungle.png',
    MID: '/img/MidLane.png',
    BOT: '/img/ADC.png',
    SUPPORT: '/img/Support.png'
};

const laneOrder = ['TOP', 'JUNGLE', 'MID', 'BOT', 'SUPPORT'];

const profilesDiv = document.getElementById('profiles');

function updateProfiles() {
    for (const [teamName, players] of Object.entries(teams)) {
        const teamDiv = document.createElement('div');
        teamDiv.className = 'team';

        const teamHeader = document.createElement('h2');
        const teamLink = document.createElement('a');
        teamLink.href = `https://www.op.gg/multisearch/euw?summoners=${Object.keys(players).map(player => player.replace('#', '%23')).join('%2C')}`;
        teamLink.target = '_blank';
        teamLink.textContent = teamName;
        teamHeader.appendChild(teamLink);
        teamDiv.appendChild(teamHeader);

        // Ordenar jugadores por rol
        const sortedPlayers = Object.entries(players).sort((a, b) => laneOrder.indexOf(a[1]) - laneOrder.indexOf(b[1]));

        for (const [player, lane] of sortedPlayers) {
            const playerDiv = document.createElement('div');
            playerDiv.className = 'player';

            const [summonerName, server] = player.split('#');
            const formattedSummonerName = summonerName.replace('#', '-');

            // Construir la URL de OP.GG para EUW
            const playerUrl = `https://www.op.gg/summoners/euw/${encodeURIComponent(formattedSummonerName)}-${encodeURIComponent(server)}`;

            const playerLink = document.createElement('a');
            playerLink.href = playerUrl;
            playerLink.target = '_blank';
            playerLink.textContent = player;
            playerDiv.appendChild(playerLink);

            // Añadir icono de línea
            if (lane && laneIcons[lane]) {
                const laneIcon = document.createElement('img');
                laneIcon.src = laneIcons[lane];
                laneIcon.alt = lane;
                laneIcon.style.width = '20px'; // Ajusta el tamaño según tu preferencia
                laneIcon.style.height = '20px'; // Ajusta el tamaño según tu preferencia
                playerDiv.appendChild(laneIcon);
            }

            teamDiv.appendChild(playerDiv);
        }

        profilesDiv.appendChild(teamDiv);
    }
}

updateProfiles();
