interface APIRequestTypes {
  endpoint: string;
  method?: string;
  headers?: Headers;
  body?: string;
}

const APIRequest = ({
  endpoint,
  method = "GET",
  headers,
  body,
}: APIRequestTypes) => {
  return fetch(
    `${process.env.API_DOMAIN}/${process.env.API_PREFIX}/${endpoint}`,
    {
      method,
      headers,
      body,
    }
  );
};

export default APIRequest;
