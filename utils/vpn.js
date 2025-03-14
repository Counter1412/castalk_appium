const { execSync } = require("child_process");
const vpnConfig = require("../configs/vpn.config");

function connectVPN() {
  try {
    console.log("Connecting to VPN...");
    execSync(`vpncmd /server ${vpnConfig.vpnService} /username:${vpnConfig.username} /password:${vpnConfig.password}`);
    console.log("VPN connected!");
  } catch (err) {
    console.error("VPN connection failed:", err);
  }
}

module.exports = { connectVPN };