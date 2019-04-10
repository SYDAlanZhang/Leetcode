/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
let urlMap = {};
var encode = function(longUrl) {
    let shortToken = Date.now().toString(36);
    urlMap[shortToken] = longUrl;
    return "http://tinyurl.com/" + shortToken;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return urlMap[shortUrl.split('.com/')[1]];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */