//settings are just variables that can be sent to the client from the server
//they are either related to the rooms or shared with the server 
module.exports.SETTINGS = {
    //if not specified by the url where is the starting point
    defaultRoom: "outside",
    //minimum time between talk messages enforced by both client and server
    ANTI_SPAM: 1000,
    //shows up at first non lurking login
    INTRO_TEXT: "Click/tap to move"
};

module.exports.ROOMS = {

    outside: {
        bg: "tbh_venue_bg.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 3,
        pageBg: "#235385",
        area: "tbh_venue_areas.png",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [14, 84, 119, 92],
        areaColors: {
            hff00ff: { cmd: "enter", room: "lobby", label: "Enter TestBash Home", point: [60, 84], enterPoint: [62, 98], obstacle: false }
        }
    },

    lobby: {
        bg: "tbh_lobby_bg.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 3,
        pageBg: "#235385",
        area: "tbh_lobby_areas.png",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [14, 84, 119, 92],
        areaColors: {
            hff00ff: { cmd: "enter", room: "outside", label: "Go outside", point: [62, 90], enterPoint: [60, 84], obstacle: false },
            h00ff00: { cmd: "enter", room: "slack", label: "Go to MoT Slack", point: [10, 85], enterPoint: [115, 91], obstacle: false },
            h00ffff: { cmd: "enter", room: "auditorium", label: "Go to the Auditorium", point: [40, 74], enterPoint: [62, 91], obstacle: false },
            hffff00: { cmd: "enter", room: "recordings", label: "Go to TestBash Home recordings", point: [88, 75], enterPoint: [78, 91], obstacle: false },
            hff0000: { cmd: "enter", room: "club", label: "Go to The Club", point: [115, 85], enterPoint: [10, 91], obstacle: false }
        }, sprites: [
            { file: "harvey.png", frames: 2, frameDelay: 10, position: [90, 90], label: "Ralph"}
        ]
    },

    slack: {
        bg: "tbh_slack_bg.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 3,
        pageBg: "#69286E",
        area: "tbh_slack_areas.png",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [14, 84, 119, 92],
        areaColors: {
            hff00ff: { cmd: "enter", room: "lobby", label: "Enter TestBash Home", point: [115, 91], enterPoint: [10, 85], obstacle: false },
            h00ff00: { cmd: "text", txt: "Chat with others on\nThe Ministry of Testing Slack\nClick to open", align: "left", lines: 3, url: "https://ministryoftesting.slack.com/", label: "Chat on MoT Slack", point: [30, 78], obstacle: true }
        }
    },

    auditorium: {
        bg: "tbh_auditorium_bg.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 3,
        pageBg: "#235385",
        area: "tbh_auditorium_areas.png",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [14, 84, 119, 92],
        areaColors: {
            hff00ff: { cmd: "enter", room: "lobby", label: "Enter lobby", point: [62, 91], enterPoint: [40, 74], obstacle: false },
            h00ff00: { cmd: "text", txt: "Check out what's happening in TestBash Home right now\nClick to open", align: "left", lines: 3, url: "https://club.ministryoftesting.com/", label: "Watch TestBash Home live", point: [70, 84], obstacle: true }
        }
    },
    
    recordings: {
        bg: "tbh_recordings_bg.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 3,
        pageBg: "#235385",
        area: "tbh_recordings_areas.png",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [14, 84, 119, 92],
        areaColors: {
            hff00ff: { cmd: "enter", room: "lobby", label: "Enter TestBash Home", point: [78, 91], enterPoint: [88, 75], obstacle: false },
            h00ff00: { cmd: "text", txt: "Check out recordings for TestBash Home\nClick to open", align: "left", lines: 3, url: "https://ministryoftesting.slack.com/", label: "Check out TestBash Home recordings", point: [30, 78], obstacle: true }
        }
    },

    club: {
        bg: "tbh_club_bg.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 3,
        pageBg: "#30703A",
        area: "tbh_club_areas.png",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [14, 84, 119, 92],
        areaColors: {
            hff00ff: { cmd: "enter", room: "lobby", label: "Enter TestBash Home", point: [10, 91], enterPoint: [115, 85], obstacle: false },
            h00ff00: { cmd: "text", txt: "Share your thoughts on\nThe Ministry of Testing Club\nClick to open", align: "left", lines: 3, url: "https://club.ministryoftesting.com/", label: "Join the Club", point: [88, 78], obstacle: true }
        }
    }
    
};