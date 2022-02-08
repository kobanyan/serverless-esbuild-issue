import 'source-map-support/register';

import { v4 } from 'uuid';

import {
  APIGatewayProxyHandler
} from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async () => {
  return {
    statusCode: 200,
    body: v4(),
  }
}
