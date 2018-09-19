/* eslint-disable quotes */
module.exports = {
  getStartedButton: {
    selector: "#content > div > div.container-fluid > div:nth-child(2) > div > div > button",
    text: "Get Started!"
  },
  versionLabel: {
    selector: "#content > div > div.container-fluid > div:nth-child(2) > div > div > div"
  },
  projectButton: {
    selector: "#content > div > div.container-fluid > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div > button",
    text: "Project"
  },
  projectNavigation: {
    selector: "#content > div > div.container-fluid > div:nth-child(2) > div > div > div:nth-child(1) > div > div > div:nth-child(1) > div:nth-child(5) > span",
    id: "Project Navigation"
  },
  menuButton: {
    selector: "#content > div > div.container-fluid > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > button",
    id: "Menu Button"
  },
  localImportButton: {
    selector: "#content > div > div.container-fluid > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(2) > button",
    id: "Local Import Button"
  },
  onlineImportButton: {
    selector: "#content > div > div.container-fluid > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div:nth-child(3) > div:nth-child(2) > button",
    id: "Online Import Button"
  },
  onlineDialog: {
    selector: "body > div:nth-child(4) > div > div:nth-child(1) > div > div",
    id: "Online Dialog",
    noShowClick: {
      selector: "body > div:nth-child(4) > div > div:nth-child(1) > div > div > div:nth-child(1) > div:nth-child(4) > table > tbody > tr > td:nth-child(2) > div > div > div > div > input[type=\"checkbox\"]"
    },
    access_internet: {
      selector: "body > div:nth-child(4) > div > div:nth-child(1) > div > div > div:nth-child(2) > button.btn-prime",
      text: "Access Internet"
    },
    cancel: {
      selector: "body > div:nth-child(4) > div > div:nth-child(1) > div > div > div:nth-child(2) > button.btn-second",
      text: "Cancel"
    }
  },
  onlineImportDialog: {
    selector: "body > div:nth-child(11) > div > div:nth-child(1) > div > div",
    id: "DCS Import Dialog",
    import: {
      selector: "body > div:nth-child(11) > div > div:nth-child(1) > div > div > div:nth-child(2) > button.btn-prime",
      text: "Import"
    },
    cancel: {
      selector: "body > div:nth-child(11) > div > div:nth-child(1) > div > div > div:nth-child(2) > button.btn-second",
      text: "Cancel"
    },
    search: {
      selector: "body > div:nth-child(11) > div > div:nth-child(1) > div > div > div:nth-child(1) > div:nth-child(5) > div > button",
      text: "Search"
    },
    user: {
      selector: "body > div:nth-child(11) > div > div:nth-child(1) > div > div > div:nth-child(1) > div:nth-child(5) > div > div:nth-child(1) > input[type=\"text\"]",
      id: "User"
    },
    languageID: {
      selector: "body > div:nth-child(11) > div > div:nth-child(1) > div > div > div:nth-child(1) > div:nth-child(5) > div > div:nth-child(2) > input[type=\"text\"]",
      id: "Language ID"
    }
  }
};