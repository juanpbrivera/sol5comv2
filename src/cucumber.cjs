module.exports = {
  default: {
    requireModule: ['ts-node/register/transpile-only'],
    require: [
      'support/CustomWorld.ts',
      'support/hooks.ts',
      'spect/*.ts'  // ← Cambiado de features/steps/ a Spect/
    ],
    format: ['progress'],
    parallel: 0
  }
};