const config = {
    s3: {
      REGION: "us-east-2",
      BUCKET: "daemon-serverless-dev-serverlessdeploymentbucket-1sevzu26tknwb",
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://d7rlzfc25d.execute-api.us-east-2.amazonaws.com/dev",
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_OtQIK3Cpp",
      APP_CLIENT_ID: "45pbll8lec37cfhckq4r39d5dr",
      IDENTITY_POOL_ID: "us-east-2:5e2d15cf-f183-462a-ad24-535934d69f87",
    },
  };
  
  export default config;