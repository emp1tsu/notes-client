const config = {
  s3: {
    REGION: "ap-northeast-1",
    BUCKET: "notes-api-prod-serverlessdeploymentbucket-10662xn0w8d20",
  },
  apiGateway: {
    REGION: "ap-northeast-1",
    URL: "https://v50m6l8lph.execute-api.ap-northeast-1.amazonaws.com/",
  },
  cognito: {
    REGION: "ap-northeast-1",
    USER_POOL_ID: "ap-northeast-1_mtmXe1vXu",
    APP_CLIENT_ID: "225a7q3thlq9ie959n8emef0tm",
    IDENTITY_POOL_ID: "ap-northeast-1:ed9ea4be-491d-4999-90d8-624847beec48",
  },
};

export default config;
