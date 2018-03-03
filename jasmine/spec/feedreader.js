/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$( function () {
  /*****************************************************************************
   * The 'RSS Feeds' test suite checks the RSS Feed for:
   *  1. allFeeds has been defined
   *  2. each feed has a URL that is defined and not empty
   *  3. each feed has a name that is defiend and not empty
   ****************************************************************************/

  describe( 'RSS Feeds', function () {

    /*
     * This test makes sure that the allFeeds variable has been defined and
     * that it is not empty.
     */
    it( 'has all feeds defined', function () {
      expect( allFeeds ).toBeDefined();
      expect( allFeeds.length ).not.toBe( 0 );
    } );

    /*****
     * This test loops through each feed in the allFeeds object and ensures
     * it has a URL defined and that the URL is not empty.
     *****/

    it( 'has a URL that is defined and not empty for each feed', function () {
      allFeeds.forEach( function ( feed ) {
        expect( feed.url ).toBeDefined();
        expect( feed.url.length ).not.toBe( 0 );
      } );
    } );

    /*****
     * This test loops through each feed in the allFeeds object and ensures
     * it has a name defined and that the name is not empty.
     *****/

    it( 'have a name that is defined and not empty', function () {
      allFeeds.forEach( function ( feed ) {
        expect( feed.name ).toBeDefined();
        expect( feed.name.length ).not.toBe( 0 );
      } );
    } );
  } );

  /*****************************************************************************
   * 'The menu' test suite checks the menu for:
   *  1. Menu should be hidden by default
   *  2. Menu should toggle between show/hide when clicked
   ****************************************************************************/

  describe( 'The menu', function () {

    let body = '';

    beforeEach( function () {
      //get body element - used by all tests
      body = $( 'body' );
    } );

    /*****
     * This test ensures the menu element is
     * hidden by default. It locates the body and tests
     * for the menu-hidden css class to be in the class list
     *****/

    it( 'has a menu that is hidden by default', function () {

      expect( body ).toBeDefined();
      expect( body.hasClass( 'menu-hidden' ) ).toBe( true );
    } );

    /*****
     * This test ensures the menu changes visibilty when the menu icon
     * is clicked. This test has two expectations: does the menu visibility
     * toggle on/off when clicked and does it change back when clicked again.
     *****/

    it( 'changes visibility when menu icon is clicked', function () {

      /* get menu element */
      let menu = $( '.menu-icon-link' );

      expect( menu ).toBeDefined();

      /* isHidden = TRUE if the body element has 'menu-hidden' in it's class
      list and FALSE if not.  */

      let isHidden = body.hasClass( 'menu-hidden' );

      /* issue menu click.  Expect body classList to toggle and should not
      match original state */

      menu.click();
      expect( body.hasClass( 'menu-hidden' ) ).not.toBe( isHidden );

      /* click again.  Expect body classList to toggle again so classList
      matches original state */
      menu.click();
      expect( body.hasClass( 'menu-hidden' ) ).toBe( isHidden );
    } );
  } );

  /*****************************************************************************
   * The 'Initial Entries' test suite checks the feed:
   *  1.  loadFeed has at least one entry
   *  2.  each entry has a URL link
   *  3.  each entry has a title
   ****************************************************************************/

  describe( 'Initial Entries', function () {

    let entries = '';
    let entryLinks = '';
    let titles = '';

    beforeEach( function ( done ) {
      loadFeed( 0, function () {
        /***
         * load entries, entry links, and titles after asynch call is complete
         * entryLinks - child of a node with class 'feed'
         *    class = 'entry-link
         * entires - child of a node with class 'entry-link'.  They contain a
         *    title in the <h2> element and a content snippet in the <p> element
         *    class = 'entry'.
         * titles - child of a node with class 'entry'.  Titles are stored in the
         *    '<h2> element'
         ***/

        entries = $( '.feed > .entry-link > .entry' );
        entryLinks = $( '.feed > .entry-link' );
        titles = $( '.feed > .entry-link > .entry > h2' );
        done();
      } );
    } );

    /*****
     * This test checks to see if there is at least one entry element within
     * the .feed container.
     *****/

    it( 'has at least one entry', function ( done ) {
      /*
       * an entry is a DOM element with class = "entry" and a parent node
       * that has class = "entry-link".  beforeEach loads entry elements
      /* into the "entries" variable
       */
      expect( entries ).toBeDefined();
      expect( entries.html().length ).toBeGreaterThan( 0 );
      done();

    } );

    /*****
     * This test checks to see if each entry link has a URL
     *****/

    it( 'has a URL for each entry', function ( done ) {

      /*
       * the URL is stored in the href.  beforeEach loads entry-link elements
       * that have a parent with class .feed into the "entryLinks" variable
       */

      expect( entryLinks ).toBeDefined();
      expect( entryLinks.length ).toBeGreaterThan( 0 );

      entryLinks.each( function ( entry ) {
        expect( this.href ).toBeDefined();
        expect( this.href.length ).toBeGreaterThan( 0 );
      } );
      done();
    } );

    /*****
     * This test checks to see if each entry link has a title
     *****/

    it( 'has a title for each entry', function ( done ) {

      /*
       * title is stored in h2 element.  beforeEach loads h2 elements
       * in the entry that have a parent of .entry-link into the "titles"
       * variable
       */

      expect( titles ).toBeDefined();
      expect( titles.length ).toBeGreaterThan( 0 );

      titles.each( function ( title ) {
        expect( this.textContent.length ).toBeGreaterThan( 0 );
      } );
      done();
    } );
  } );

  /*****************************************************************************
   * The 'New Feed Selection' test suite verifies that the feed entries change
   * when a new feed is loaded
   *****************************************************************************/
  describe( 'New Feed Selection', function () {
    var entriesBefore;
    var entriesAfter;

    /* get feed contents for initial feed - we will compare the html*/
    beforeEach( function ( done ) {
      loadFeed( 0, function () {
        entriesBefore = $( '.feed' ).html();
        done();
      } );
    } );

    /* load next feed and get contents */
    beforeEach( function ( done ) {
      loadFeed( 1, function () {
        entriesAfter = $( '.feed' ).html();
        done();
      } );
    } );

    /*****
     * this test compares two feed entries.  It passes if they are different
     *****/

    it( 'changes feed entries when a new feed is loaded',
      function ( done ) {

        expect( entriesBefore.length ).toBeGreaterThan( 0 );
        expect( entriesAfter.length ).toBeGreaterThan( 0 );
        expect( entriesBefore ).not.toBe( entriesAfter );
        done();
      } );
  } );

}() );