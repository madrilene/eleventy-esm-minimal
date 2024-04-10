/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */

export default async function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/*');
  ['src/*.css', 'src/*.js'].forEach(path => eleventyConfig.addPassthroughCopy(path));

  return {
    htmlTemplateEngine: false,
    markdownTemplateEngine: 'njk',

    dir: {
      output: 'dist',
      input: 'src'
    }
  };
}
