const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "nba-light": ["NBArchitektStd-Light", "san-serif"],
        "nba-reg": ["NBArchitektStd-Regular", "san-serif"],
        "nba-bold": ["NBArchitektStd-Bold", "san-serif"],
        "vermin-reg": ["Vermin_Vibes", "san-serif"],
        "rotor-reg": ["Rotor", "san-serif"],
        "gruppeb-reg": ["Gruppe_B", "san-serif"],
        "fewt-bold": ["fewtbold", "san-serif"],
        "fewt-bold-italic": ["fewtbold_italic", "san-serif"],
        "fewt-slim": ["fewtslim", "san-serif"],
        "fewt-slim-italic": ["fewtslim_italic", "san-serif"],
        "freude-reg": ["Freude", "san-serif"],
        "lato-reg": ["Lato", "san-serif"],
        "lato-bold": ["Lato-Bold", "san-serif"]
      },
      colors: {
        "primary-green": "#ED1C24",
        "primary-green-light": "rgba(0, 255, 139, 0.44)",
        "primary-green-trans": "rgba(2, 48, 25, 0.8)",
        "primary-black": "#140000",
        "secondary-black": "#03150C",
        "tertiary-white-t44": "rgba(255, 255, 255, 0.44)",
        "tertiary-white-t31": "rgba(255, 255, 255, 0.31)",
        "tertiary-grey-input": "#ced4d1",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const defighter = {
        ".nba-light-16": {
          fontFamily: theme("fontFamily.nba-light"),
          fontStyle: "normal",
          fontWeight: "300",
          fontSize: "16px",
          // lineHeight: "24px",
        },
        ".nba-reg-16": {
          fontFamily: theme("fontFamily.nba-reg"),
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          // lineHeight: "24px",
        },
        ".nba-bold-21": {
          fontFamily: theme("fontFamily.nba-bold"),
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "21px",
          // lineHeight: "24px",
        },
        ".nba-bold-24": {
          fontFamily: theme("fontFamily.nba-bold"),
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          // lineHeight: "24px",
        },
        ".nba-bold-26": {
          fontFamily: theme("fontFamily.nba-bold"),
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "26px",
          // lineHeight: "24px",
        },
        ".nba-bold-32": {
          fontFamily: theme("fontFamily.nba-bold"),
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "32px",
          // lineHeight: "24px",
        },
        ".nba-bold-48": {
          fontFamily: theme("fontFamily.nba-bold"),
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "48px",
          // lineHeight: "24px",
        },
        ".rotor-reg-17": {
          fontFamily: theme("fontFamily.rotor-reg"),
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "17px",
        },
        ".rotor-reg-22": {
          fontFamily: theme("fontFamily.rotor-reg"),
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "22px",
        },
        ".rotor-reg-24": {
          fontFamily: theme("fontFamily.rotor-reg"),
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "24px",
        },
        ".fewt-16": {
          fontFamily: theme("fontFamily.fewt-slim"),
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
        },
        ".fewt-18": {
          fontFamily: theme("fontFamily.fewt-slim"),
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "18px",
        },
        ".fewt-20": {
          fontFamily: theme("fontFamily.fewt-slim"),
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "20px",
        },
        ".fewt-22": {
          fontFamily: theme("fontFamily.fewt-slim"),
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "22px",
        },
        ".fewt-24": {
          fontFamily: theme("fontFamily.fewt-slim"),
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "24px",
        },
        ".vermin-24": {
          fontFamily: theme("fontFamily.vermin-reg"),
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "24px",
        },
        ".vermin-26": {
          fontFamily: theme("fontFamily.vermin-reg"),
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "26px",
        },
        ".vermin-32": {
          fontFamily: theme("fontFamily.vermin-reg"),
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "32px",
        },
        ".vermin-64": {
          fontFamily: theme("fontFamily.vermin-reg"),
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "64px",
        },
        ".freude-16": {
          fontFamily: theme("fontFamily.freude-reg"),
          fontStyle: "normal",
          fontSize: "16px"
        },
        ".freude-18": {
          fontFamily: theme("fontFamily.freude-reg"),
          fontStyle: "normal",
          fontSize: "18px"
        },
        ".freude-22": {
          fontFamily: theme("fontFamily.freude-reg"),
          fontStyle: "normal",
          fontSize: "22px"
        },
        ".freude-24": {
          fontFamily: theme("fontFamily.freude-reg"),
          fontStyle: "normal",
          fontSize: "24px"
        },
        ".freude-28": {
          fontFamily: theme("fontFamily.freude-reg"),
          fontStyle: "normal",
          fontSize: "28px"
        },
        ".freude-32": {
          fontFamily: theme("fontFamily.freude-reg"),
          fontStyle: "normal",
          fontSize: "32px"
        },
        ".freude-38": {
          fontFamily: theme("fontFamily.freude-reg"),
          fontStyle: "normal",
          fontSize: "38px"
        },
        ".freude-48": {
          fontFamily: theme("fontFamily.freude-reg"),
          fontStyle: "normal",
          fontSize: "48px"
        },
        ".freude-64": {
          fontFamily: theme("fontFamily.freude-reg"),
          fontStyle: "normal",
          fontSize: "64px"
        },
        ".lato-14": {
          fontFamily: theme("fontFamily.lato-reg"),
          fontStyle: "normal",
          fontSize: "14px"
        },
        ".lato-20": {
          fontFamily: theme("fontFamily.lato-reg"),
          fontStyle: "normal",
          fontSize: "20px"
        },
        ".lato-24": {
          fontFamily: theme("fontFamily.lato-reg"),
          fontStyle: "normal",
          fontSize: "24px"
        },
        ".lato-bold-24": {
          fontFamily: theme("fontFamily.lato-bold"),
          fontStyle: "normal",
          fontSize: "22px"
        },

        ".dfTransition": {
          transition: "all 0.2s linear 0s",
        },
      };

      addUtilities(defighter, ["responsive"]);
    }),
  ],
};
