// next-sitemap.config.ts

import { IConfig } from 'next-sitemap';

const config: IConfig = {
  siteUrl: 'https://instapure.fun',
  generateRobotsTxt: true,
  outDir: './public',
  exclude: ['/server/*', '/private/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/server/', '/private/'],
      },
    ],
    additionalSitemaps: [
      'https://instapure.fun/sitemap.xml',
    ],
  },
};

export default config;
