module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/images/");
    eleventyConfig.addPassthroughCopy("./src/js/");

    // All posts by date 
    eleventyConfig.addCollection("postsByDate", function(collectionApi) {
      return collectionApi.getFilteredByGlob("**/posts/*.md").sort(function(a, b) {
        //return a.date - b.date; // sort by date - ascending
        return b.date - a.date; // sort by date - descending
      });
    });

    // All posts alphabetically
    eleventyConfig.addCollection("postsByFileName", function(collectionApi) {
      return collectionApi.getFilteredByGlob("**/posts/*.md").sort(function(a, b) {
        return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
        //return b.inputPath.localeCompare(a.inputPath); // sort by path - descending
      });
    });

    // Return your Object options:
    return {
      markdownTemplateEngine: 'njk',
      dir: {
        input: "src",
        output: "public"
      }
    }
};