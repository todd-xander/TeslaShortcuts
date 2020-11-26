# TeslaShortcuts

Tesla configuration file for [HTTP-Shortcuts](https://github.com/Waboodoo/HTTP-Shortcuts)

# Usage

- Android phone only.
- Download this repo, or download `shortcuts.json` directly.
- Download and install [HTTP-Shortcuts](https://http-shortcuts.rmy.ch)(Tested on v1.38.0).
- Click `Setting` icon at top right corner.
- Click `Import Shortcuts`.
- Select `Import from Document`.
- Select the this JSON file.
- Enjoy it!

# Shortcuts on launcher

TeslaShortcuts preset some shortcuts as launcher shortcut, long press HTTP-shortcuts icon to run them. Also, you can change them:

- Go into a shortcut edit page.
- Click `Misc Settings`.
- Enable `Show as app shortcut on launcher`.
- Android System might limit the shortcuts number, disable some shortcuts that do not use very often if necessary.

# Security

- TeslaShortcuts communicates with `https://owner-api.teslamotors.com/` directly, no third-party service could get your privacy information.
- TeslaShortcuts gets OAuth 2.0 Password Grant with the [same credentials](https://pastebin.com/pS7Z6yyP) used for tesla.com and the mobile apps.
- All shortcuts are only tested on a Tesla Model 3, with API version 10.
- After login, your access token & vehicle ID will saved into. If your are going to share your config, or push a pull request to this repo, you **MUST** be careful not to divulge these information (Logout shortcut could clear them).
- TeslaShortcuts never store your e-mail, password and PIN code, for some shortcuts that require PIN code, you have to input it manually. You can change the variable settings (Variable List -> Chose a variable -> `Edit` -> `[√] Remenber Value`) to allow HTTP-Shortcuts save value if you like.

# Caveats

- For location functions, it communicates with third-party Android App (Baidu Map) by sending [Android Intent](https://developer.android.com/guide/components/intents-filters). Change it to your favorite App if you like.
- Also, It searches nearby charging sites using Baidu Map, but not Tesla API.
- Shortcuts in category `Utilities` are auxiliary function not for user, even so, you can use them.
