/**
 * Asset paths configuration
 * All assets are served from the public folder
 */

const BASE_PATH = "/portfolio/assets/images";

export const assetPaths = {
  images: {
    profile: `${BASE_PATH}/abdallahatguiri.jpg`,
    companies: {
      agriwise: `${BASE_PATH}/companies/agriwise-logo.png`,
      codNetwork: `${BASE_PATH}/companies/cod-network-logo.jpg`,
      digitalElite: `${BASE_PATH}/companies/digital-elite-logo.png`,
    },
    flags: {
      gb: `${BASE_PATH}/flags/gb.svg`,
      fr: `${BASE_PATH}/flags/fr.svg`,
      ma: `${BASE_PATH}/flags/ma.svg`,
    },
    projects: {
      taskManagement: `${BASE_PATH}/projects/task-management-app.png`,
      virtualGearHub01: `${BASE_PATH}/projects/virtual_gear_hub01.png`,
      virtualGearHub02: `${BASE_PATH}/projects/virtual_gear_hub02.png`,
      onlineRestaurant: `${BASE_PATH}/projects/online_restaurant_reservation_application.png`,
    },
  },
} as const;
