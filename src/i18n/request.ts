import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// 支持的语言列表
const locales = ['de', 'en', 'zh'];

export default getRequestConfig(async ({ locale }) => {
  // 验证传入的 locale 参数是否有效
  if (!locale || !locales.includes(locale)) notFound();

  return {
    locale,
    messages: (await import(`../../dictionaries/${locale}.json`)).default
  };
});

export { locales };