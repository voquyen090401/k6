export default {
  useGroup: false, // true = dùng group, false = dùng module
  modules: ['auth', 'product'], // key allModules
  options: {
    smoke: {
      vus: 10,
      duration: '30s',
    },
    load: {
      vus: 20,
      duration: '1m',
    },
    stress: {
      vus: 50,
      duration: '5m',
    },
    spike: {
      vus: 100,
      stages: [
        { duration: '30s', target: 100 },
        { duration: '1m', target: 0 },
      ],
    },
  },
};
