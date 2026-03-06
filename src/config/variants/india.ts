import type { VariantConfig } from './base';

export * from './base';
export * from '../finance-geo';

const DEFAULT_PANELS = [
  'feeds',
  'ai_insights',
  'emergencies',
  'markets',
  'weather',
];

const DEFAULT_MAP_LAYERS = {
  weather: true,
  earthquakes: false,
  volcanoes: false,
  tsunamis: false,
  floods: false,
  wildfires: false,
  hurricanes: false,
  tornadoes: false,
  sandstorms: false,
  airQuality: false,
  droughts: false,
  airstrikes: false,
  conflictZones: false,
  protestsRiots: false,
  explosions: false,
  cybersecurity: false,
  infrastructure: false,
  airports: false,
  universities: false,
  hospitals: false,
  powerPlants: false,
  seaports: false,
  datacenters: false,
  stockExchanges: true,
  commodityMarkets: true,
  economicPolicies: false,
  regulatoryBodies: false,
  tradingCenters: true,
  aiResearchLabs: false,
  startupEcosystems: true,
  techCompanies: false,
  pipelines: false,
  tradeRoutes: false,
  militaryInstallations: false,
  naturalDisasters: false,
  speciesRecovery: false,
  renewableInstallations: false,
  iranAttacks: false,
  ciiChoropleth: false,
  dayNight: false,
};

export const VARIANT_CONFIG: VariantConfig = {
  name: 'india',
  description: 'India - NSE/BSE Stock Market, Economy & Startup Intelligence',
  panels: DEFAULT_PANELS,
  mapLayers: DEFAULT_MAP_LAYERS,
  mobileMapLayers: DEFAULT_MAP_LAYERS,
};
