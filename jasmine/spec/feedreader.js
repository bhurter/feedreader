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
      for ( let i = 0; i < allFeeds.length - 1; i++ ) {
        expect( allFeeds[ i ].url ).toBeDefined();
        expect( allFeeds[ i ].url.length ).not.toBe( 0 );
      }
    } )

    /*****
     * This test loops through each feed in the allFeeds object and ensures
     * it has a name defined and that the name is not empty.
     *****/

    it( 'have a name that is defined and not empty', function () {
      for ( let i = 0; i < allFeeds.length - 1; i++ ) {
        expect( allFeeds[ i ].name ).toBeDefined();
        expect( allFeeds[ i ].name.length ).not.toBe( 0 );
      }
    } )
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
      body = document.querySelector( 'body' );
    } );

    /*****
     * This test ensures the menu element is
     * hidden by default. It locates the body and tests
     * for the menu-hidden css class to be in the class list
     *****/

    it( 'has a menu that is hidden by default', function () {

      expect( body.classList.contains( 'menu-hidden' ) ).toBe( true );
    } )

    /*****
     * This test ensures the menu changes visibilty when the menu icon
     * is clicked. This test has two expectations: does the menu visibility
     * toggle on/off when clicked and does it change back when clicked again.
     *****/

    it( 'changes visibility when menu icon is clicked', function () {

      /* get menu element */
      let menu = document.querySelector( '.menu-icon-link' );

      /* isHidden = TRUE if the body element has 'menu-hidden' in it's class
      list and FALSE if not.  */

      let isHidden = body.classList.contains( 'menu-hidden' );

      /* issue menu click.  Expect body classList to toggle and should not
      match original state */

      menu.click();
      expect( body.classList.contains( 'menu-hidden' ) ).not.toBe( isHidden );

      /* click again.  Expect body classList to toggle again so classList
      matches original state */
      menu.click();
      expect( body.classList.contains( 'menu-hidden' ) ).toBe( isHidden );
    } )
  } );

  /*****************************************************************************
   * The 'Initial Entries' test suite checks the feed:
   *  1.  loadFeed has at least one entry
   *  2.  each entry has a URL link
   *  3.  each entry has a title
   ****************************************************************************/

  describe( 'Initial Entries', function () {

    let numEntries = 0;
    let entries = '';

    beforeEach( function ( done ) {
      loadFeed( 0, done );
    } );



    /*****
     * This test checks to see if there is at least one entry element within
     * the .feed container.
     *****/

    it( 'has at least one entry', function ( done ) {
      entries = document.querySelectorAll( '.feed > .entry-link' );
      numEntries = entries.length;

      expect( numEntries ).toBeGreaterThan( 0 );
      done();

    } )

    /*****
     * This test checks to see if each entry link has a URL
     *****/

    it( 'has a URL for each entry', function ( done ) {
      /* URL is stored in the href for the entry-link*/
      let entries = document.querySelectorAll( '.feed > .entry-link' );
      let numEntries = entries.length;

      expect( numEntries ).toBeGreaterThan( 0 );
      for ( let i = 0; i < numEntries; i++ ) {
        expect( entries[ i ].href ).toBeDefined();
      };
      done();
    } )

    /*****
     * This test checks to see if each entry link has a title
     *****/

    it( 'has a title for each entry', function ( done ) {
      /* title is stored in h2 element.  Look for all h2 elements in the entry
      that have a parent of .entry-link*/
      let titles = entries.querySelectorAll( ' .entry > h2' );
      let numTitles = titles.length

      expect( numTitles ).toBeGreaterThan( 0 );
      for ( let i = 0; i < numTitles; i++ ) {
        expect( titles[ i ].textContent.length ).toBeGreaterThan( 0 );
      };
      done();
    } )
  } );

  /*****************************************************************************
   * The 'New Feed Selection' test suite verifies that the feed entries change
   * when a new feed is loaded
   *****************************************************************************/
  describe( 'New Feed Selection', function () {

    beforeEach( function ( done ) {
      /* load initial feed contents */
      loadFeed( 0, done );
    } );

    /*****
     * this test compares two feed entries.  It passes if they are different
     *****/

    it( 'changes feed entries when a new feed is loaded' ),
      function ( done ) {
        /* get initial feed contents */
        let entriesBefore = document.querySelectorAll( '.feed > .entry-link > .entry' );
        /* load next feed in list */
        loadFeed( 1, done );
        /* get second feed contents */
        let entriesAfter = document.querySelectorAll( '.feed > .entry-link > .entry' );

        expect( entriesBefore ).not.toBe( entriesAfter );
        done();
      }
  } );

}() );