exports.handler = async (event) => {
  const asset = event.queryStringParameters && event.queryStringParameters.asset;
  const counts = { story1: 6, story2: 6, feed: 5 };
  if (!counts[asset]) {
    return { statusCode: 404, body: 'not found' };
  }

  let body = '';
  for (let i = 1; i <= counts[asset]; i++) {
    const part = String(i).padStart(3, '0');
    const url = `https://gestionae-social-assets-2026.netlify.app/chunks/2026-09-13/${asset}/part-${part}.b64`;
    const response = await fetch(url);
    if (!response.ok) {
      return { statusCode: 503, body: `missing chunk ${part}` };
    }
    body += (await response.text()).trim();
  }

  return {
    statusCode: 200,
    isBase64Encoded: true,
    headers: {
      'Content-Type': 'image/jpeg',
      'Cache-Control': 'public, max-age=86400'
    },
    body
  };
};
