module.exports = ({ env }) => ({
  'transformer': {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
      requestTransforms : {
        wrapBodyWithDataKey: false
      },
      hooks: {
        preResponseTransform : (ctx) => console.log('hello from the preResponseTransform hook!'),
        postResponseTransform : (ctx) => console.log('hello from the postResponseTransform hook!')
      },
      plugins: {
        ids: {
          'slugify': true,
        }
      }
    }
  },
  "entity-relationship-chart": {
    enabled: true,
    config: {
      // By default all contentTypes and components are included.
      // To exclude strapi's internal models, use:
      exclude: [
        "strapi::core-store",
        "webhook",
        "admin::permission",
        "admin::user",
        "admin::role",
        "admin::api-token",
        "plugin::upload.file",
        "plugin::i18n.locale",
        "plugin::users-permissions.permission",
        "plugin::users-permissions.role",
      ],
    },
  },
});
