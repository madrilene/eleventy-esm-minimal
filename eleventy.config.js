/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */

export default async function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/*');
  eleventyConfig.addPassthroughCopy('src/*.{css,js,jpg,ico}');

  return {
    dir: {
      output: 'dist',
      input: 'src'
    }
  };
}
