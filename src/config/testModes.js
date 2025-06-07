export default {
  useGroup: true, // true = dùng group, false = dùng module
  modules: ['auth', 'order'],
  options: {
    smoke: {
      vus: 2,
      duration: '10s',
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
