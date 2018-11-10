module.exports = {
  service: {name: 'hello-lerna-serverless'},
  plugins: [
    'serverless-workspaces-plugin',
    'serverless-offline'
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs8.10',
  },
  package: {
    individually: true,
    excludeDevDependencies: true,
    exclude: ['**'],
  },
  functions: {
    alpha: {
      handler: 'packages/alpha/handler.hello',
      package: {
        include: [
          'packages/alpha/handler.js',
          'packages/alpha/node_modules/**',
        ],
      },
      events: [
        {
          http: {
            path: 'alpha',
            method: 'GET',
          },
        },
      ],
    },
    beta: {
      handler: 'packages/beta/handler.hello',
      package: {
        include: [
          'packages/beta/handler.js',
          'packages/beta/node_modules/**',
        ],
      },
      events: [
        {
          http: {
            path: 'beta',
            method: 'GET',
          },
        },
      ],
    },
  },
};