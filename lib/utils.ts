export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/ł/g, 'l')
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export const SITE_URL = 'https://cholujdesign.com'
export const SITE_NAME = 'CHD Architekci'
export const SITE_EMAIL = 'biuro@cholujdesign.com'
export const SITE_PHONE = '+48 509 446 704'
export const SITE_ADDRESS = 'Rynek Główny 43, 31-013 Kraków'
