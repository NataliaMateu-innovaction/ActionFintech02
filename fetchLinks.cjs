const https = require('https');
https.get('https://linktr.ee/innovactiongroup', (res) => {
  let data = '';
  res.on('data', (c) => data += c);
  res.on('end', () => {
    const match = data.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]+?)<\/script>/);
    if (match) {
      const json = JSON.parse(match[1]);
      console.log(JSON.stringify(json.props.pageProps.account.links.map(l => ({ title: l.title, url: l.url })), null, 2));
    } else {
      console.log('not found');
    }
  });
});
