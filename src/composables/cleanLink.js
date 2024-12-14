export default function cleanLink(url) {
    return url.replace(/^https?:\/\/(www\.)?/, '');
};