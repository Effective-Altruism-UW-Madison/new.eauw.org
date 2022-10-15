module.exports = {
  "_comments": {
    largeHeader: "Toggles the size of the top banner",
    showTitle: "Toggles the title on the page",
    author_staff_member: "The staff member writing this post",
    callToAction: "Type of request shown at the bottom of this page",
    testimonials: "Update, add or remove testimonials",
    role: "Shown as subtext on leadership team member summaries",
    pronouns: "Shown as subtext on leadership team member summaries",
    executive: "Toggles whether the leader is a member of the executive team",
    previous:
      "Toggles whether the leader is no longer a part of leadership or the program is no longer active",
    contactEmailAddress: "Address to be displayed on the Contact page",
    newTab: "Whether the link opens a new browser tab",
    calendar: "Whether a calendar is shown on the page",
    calUsername: "Username for https://cal.eauw.org/",
    excerptHtml: "The HTML preview for a project summary",
    popupEnabled: "Show popup on page load. Can only show one popup per page.",
    priority:
      "Helps adjust the position on the page — lower value is higher on the page",
    startingDate: "The first day of the week when the fellowship begins",
    semester:
      "Displays as a small horizontal banner at the bottom of the program box",
    hidden: "Whether the element is shown",
    fullWidth:
      "Content stretches to the full width of the page. (Not recommended unless you know what you're doing.)"
  },

  "_select_data": {
    callToActions: ["Contact", "Subscribe"],
    socialIcons: [
      "Facebook",
      "Instagram",
      "LinkedIn",
      "Pinterest",
      "Tumblr",
      "Twitter",
      "YouTube",
      "RSS",
      "GitHub",
      "WIN",
      "Slack",
      "Link"
    ]
  },

  "paths": {
    collections: "content",
    data: "data",
    static: "public",
    uploads: "public/uploads"
  },

  "collections-config": {
    webpages: {
      path: "content/pages",
      url: "/[slug]",
      output: true,
      name: "Pages",
      _icon: "wysiwyg",
      _enabled_editors: ["visual", "data"]
    },
    projects: {
      path: "content/projects",
      url: "/projects/[slug]",
      output: true,
      _enabled_editors: ["visual", "content", "data"]
    },
    leadership_team: {
      path: "content/leadership-team",
      output: false,
      _icon: "people"
    },
    programs: {
      path: "content/programs",
      output: false,
      _icon: "school"
    },
    popups: {
      path: "content/popups",
      output: false,
      _icon: "filter_frames"
    },
    data: {
      path: "data",
      output: false
    }
  }
};
