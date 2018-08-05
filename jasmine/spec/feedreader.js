/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         //test for url in allfeed is defined or not
         it('are urls defined', function(){
            allFeeds.forEach(function(feed){
               let feed_url = feed.url;
                expect(feed_url).toBeDefined();
                expect(feed_url.length).not.toBe(0);
            });

         });

         //test for name in allfeed is defined or not
         it('are names defined', function(){
            allFeeds.forEach(function(variable_name){
               let feed_name = variable_name.url;
                expect(feed_name).toBeDefined();
                expect(feed_name.length).not.toBe(0);
            });

         });

    });


   // describtion for menue
   describe('describtion for menue',function(){

      //test to ensure menu hidden by default
      it('is menu hidden by default',function(){
         expect($("body").hasClass('menu-hidden')).toBe(true);
      });

      //test how menu truth
      it('is menu hidden', function(){
         expect($('menu-hidden')).toBeTruthy();
      });

        //test to ensure menue change on click or not
        it('is menu change when click on the icon',function(){
           $('.menu-icon-link').click();
           expect($('body').hasClass('menu-hidden')).toBe(false);

           $('.menu-icon-link').click();
           expect($('body').hasClass('menu-hidden')).toBe(true);
        });

   });

   //new test suite named "Initial Entries"
   describe('Initial Entries',function(){

      //test that ensures when the loadFeed
      beforeEach(function(completed){
         loadFeed(0,completed);
      });

      //test there are one or more .entry in .feed
      it('has it one or more .entry',function(){
         expect($(".feed .entry").length).toBeGreaterThan(0);
      });

   });

   //test suite named "New Feed Selection"
   describe('New Feed Selection',function(){

      let old_feed;
      let new_feed;

      //ensure when a new feed is loaded
      beforeEach(function(completed){
         $('.feed').empty();
         loadFeed(0,function(){
            old_feed=$('.feed').html();
            loadFeed(1,completed);
         });
      });

      it('is contect changed when loadFeed() is fire',function(){
         new_feed=$('.feed').html();
         expect(old_feed).not.toBe(new_feed);
      });
   });
}());
