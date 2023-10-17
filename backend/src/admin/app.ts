import favicon from './extensions/favicon.png';

export default {
  config: {
    // Add a new locale, other than 'en'
    locales: ['de', 'ar'],
    // replace favicon with a custom icon
    head: {
      favicon: favicon,
    },
    translations: {
      en: {
        // "Auth.form.button.login.strapi": "Log in via Strapi",
        // "Auth.form.register.subtitle": "Credentials are only used to authenticate in Strapi. All saved data will be stored in your database.",
        // "HomePage.welcome.congrats.content": "You are logged in as the first administrator. To discover the powerful features provided by Strapi,",
        // "Settings.application.strapi-version": "Strapi version",
        // "Settings.application.strapiVersion": "Strapi version",
        // "Settings.application.ee.admin-seats.add-seats": "{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}",
        // "Settings.permissions.users.listview.header.subtitle": "All the users who have access to the Strapi admin panel",
        // "admin.pages.MarketPlacePage.offline.subtitle": "You need to be connected to the Internet to access Strapi Market.",
        // "admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi": "Made by Strapi",
        // "admin.pages.MarketPlacePage.plugin.tooltip.verified": "Plugin verified by Strapi",
        // "admin.pages.MarketPlacePage.plugin.version": "Update your Strapi version: \"{strapiAppVersion}\" to: \"{versionRange}\"",
        // "admin.pages.MarketPlacePage.plugin.version.null": "Unable to verify compatibility with your Strapi version: \"{strapiAppVersion}\"",
        // "app.components.HomePage.welcomeBlock.content": "Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!",
        // "app.components.HomePage.welcomeBlock.content.again": "We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback.",
        // "app.components.MarketplaceBanner": "Discover plugins built by the community, and many more awesome things to kickstart your project, on Strapi Marketplace.",
        // "app.components.MarketplaceBanner.image.alt": "A Strapi rocket logo",
        // "app.components.NpsSurvey.banner-title": "How likely are you to recommend Strapi to a friend or colleague?",
        // "components.AutoReloadBlocker.description": "Run Strapi with one of the following commands:",
        // "global.plugins.sentry.description": "Send Strapi error events to Sentry.",
        // "notification.ee.warning.over-.message": "Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} AT_LIMIT {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app.",
        // "notification.version.update.message": "A new version of Strapi is available!",

        "Auth.form.welcome.title": "Welcome to Sure Platform!",
        "Auth.form.welcome.subtitle": "Log in to Sure account",
        "app.components.LeftMenu.navbrand.title": "Sure Platform",
      },
      ar: {
        "Auth.form.welcome.title": "مرحبا بكم في منصة شور!",
        "Auth.form.welcome.subtitle": "تسجيل الدخول إلى حساب شور",
        "app.components.LeftMenu.navbrand.title": "منصة شور",
      },
      de: {
        "Auth.form.welcome.title": "Willkommen auf der Sure-Plattform!",
        "Auth.form.welcome.subtitle": "Melden Sie sich bei Ihrem Sure-Konto an",
        "app.components.LeftMenu.navbrand.title": " Sure-Plattform",
      },
    },
  },
  bootstrap() {
  },
}
