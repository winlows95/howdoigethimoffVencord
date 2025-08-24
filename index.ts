import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { definePluginSettings } from "@api/Settings";

const settings = definePluginSettings({
    peashoot: {
        type: OptionType.BOOLEAN,
        description: "peashooter instead of mr. washee washee",
        default: false
    }
});

export default definePlugin({
    name: "how do i get him off",
    description: "how do i get him off",
    authors: [{ name: "winlows", id: 1150824129050718329n }],
    settings,

    start() {
        if (settings.store.peashoot) {
        document.getElementById("peashooter")?.remove();
        const peashooter = document.createElement("img");
        peashooter.id = "peashooter";
        peashooter.src = "https://raw.githubusercontent.com/winlows95/media-stuffs/main/peashooter.png";
        peashooter.style.position = "fixed";
        peashooter.style.top = "0";
        peashooter.style.left = "50%";
        peashooter.style.transform = "translateX(-50%)";
        peashooter.style.zIndex = "2147483647";
        peashooter.style.pointerEvents = "none";

        document.body.appendChild(peashooter);
        }
        if (!settings.store.peashoot) {
        document.getElementById("peashooter")?.remove();
        const peashooter = document.createElement("img");
        peashooter.id = "peashooter";
        peashooter.src = "https://raw.githubusercontent.com/winlows95/media-stuffs/main/Mr._Washee_Washee.png";
        peashooter.style.position = "fixed";
        peashooter.style.top = "0";
        peashooter.style.left = "50%";
        peashooter.style.transform = "translateX(-50%)";
        peashooter.style.zIndex = "2147483647";
        peashooter.style.pointerEvents = "none";

        document.body.appendChild(peashooter);
        }
    },

    stop() {
        document.getElementById("peashooter")?.remove();
    }
});
