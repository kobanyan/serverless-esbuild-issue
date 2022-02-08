import type { AWS } from '@serverless/typescript';

import { example } from './src/functions/example'

const serverlessConfiguration: AWS = {
  service: 'serverless-esbuild-issue',
  frameworkVersion: '2',
  plugins: [
    'serverless-esbuild',
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region: 'us-east-1',
    stage: '${opt:stage, "dev"}',
    apiName: '${self:service}',
    memorySize: 128,
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    lambdaHashingVersion: '20201221',
  },
  package: {
    individually: true,
  },
  custom: {
    esbuild: {
      bundle: true,
      minify: process.env.NODE_ENV === 'production',
      sourcemap: true,
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      plugins: './esbuild-plugins.js',
      packager: 'yarn',
      exclude: [],
    }
  },
  functions: {
    example
  },
};

module.exports = serverlessConfiguration;
