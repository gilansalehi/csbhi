import { set } from './vcomponent.js';

const names = [
    'description',
    'project',
    'programme',
    'scope',
    'author',
    'status',
    'version',
    'dcterms.created',
    'revised',
    'dcterms.modified'
];

set('meta:title', document.title);
set('meta:canonical', document.querySelector('link[rel="canonical"]')?.href || '');

names.forEach(name => {
    const value = document.querySelector(`meta[name="${name}"]`)?.content || '';
    set(`meta:${name}`, value);
});

if (!document.querySelector('meta[name="dcterms.modified"]')) {
    set('meta:dcterms.modified', document.querySelector('meta[name="revised"]')?.content || '');
}
