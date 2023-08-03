require('dotenv').config();

const { getDeployedAppsProxy, getShareProxy, getApsProxy, getIdentityAdapterServiceProxy } = require('./proxy-helpers');

const legacyHost = "http://localhost:8080";//process.env.PROXY_HOST_ADF;
// const cloudHost = process.env.CLOUD_PROXY_HOST_ADF || process.env.PROXY_HOST_ADF;
// const cloudApps = process.env.APP_CONFIG_APPS_DEPLOYED;
const apsHost = "http://localhost:8180";//process.env.PROXY_HOST_ADF;

module.exports = {
    ...getShareProxy(legacyHost),
    ...getApsProxy(apsHost)
    // ...getDeployedAppsProxy(cloudHost, cloudApps),
    // ...getIdentityAdapterServiceProxy(cloudHost)
};
