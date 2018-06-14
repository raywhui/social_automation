// SOLUTION 1: SCRAPE WEBSITE FOR ALL THE RELEVANT DATA, THEN USE CHAI TO COMPARE AND SEE WHICH IS TRUE.
// SOLUTION 2: RUN STEP BY STEP NIGHTMARE AND CHECK RELEVANT DATA AS NIGHTMARE CONTINUES.
// ✓
// ✗
//"\x1b[0m" terminal color - reset
// "\x1b[31m" terminal color - red
// "\x1b[32m" terminal color green
// "\x1b[90m" terminal color grey


//EDGE CASES: PROMPTS USERS TO UPDATE PHONE NUMBERS AFTER LOGIN

//IGNORE CONFIG, that will have passwords and stuff in it
require('mocha-generators').install();
const Nightmare = require('nightmare');
const mocha = require('mocha');
const assert = require('chai').assert;
const info = require('../info.json');
const linkedin = require('../pages/linkedin_ind.js');


const selector = 'div.pv-top-card-v2-section__info h1';
const otherSelect = 'h2';

//mocha
describe('LinkedIn QA Test', () => {
  var nightmare = Nightmare({
    show: true,
    height: 900,
    width: 1200,
    waitTimeout: 5000,
    pollInterval: 500
  });

  Nightmare.action('log', (customLog) => {
    console.log(customLog);
  })


  it('Begin Login --> Data Scrape', () => {
  //nightmare
  nightmare
    .goto(info[0].social)
    .insert('input#login-email.login-email', info[0].username)
    .insert('input#login-password.login-password', info[0].password)
    .click('input#login-submit.login.submit-button')
    .wait(2000)
    .wait('a.tap-target.feed-identity-module__actor-link.profile-rail-card__actor-link.ember-view')
    .click('a.tap-target.feed-identity-module__actor-link.profile-rail-card__actor-link.ember-view')
    .wait(2000)
    .click('span.pv-top-card-v2-section__entity-name.pv-top-card-v2-section__contact-info')
    .evaluate((selector) => {
      var data = {};
      data.name = document.querySelector(selector).innerText;
      data.title = document.querySelector('h2.pv-top-card-section__headline.mt1').innerText;
      data.url = document.querySelector(linkedin.profile_url).href;
      return data;
    }, selector)
    .end()
    .then((result) => {
      // assert.equal(result.name, info[0].name);
      console.log(result);
      console.log('\n');
      result.name === info[0].name ? console.log('\x1b[32m', '✓ Name', '\x1b[0m') : console.log('\x1b[31m', '✗ Name', '\x1b[0m');
      result.title === info[0].title ? console.log('\x1b[32m', '✓ Title', '\x1b[0m') : console.log('\x1b[31m', '✗ Title', '\x1b[0m');
      result.url === info[0].profile_url ? console.log('\x1b[32m', '✓ Profile URL', '\x1b[0m') : console.log('\x1b[31m', '✗ Profile URL', '\x1b[0m');
    })
    .catch(err => {
      console.error(err)
    })
  });
});









    // it('Should get Name', () => {
    //   nightmare
    //     //.wait('a.tap-target.feed-identity-module__actor-link.profile-rail-card__actor-link.ember-view')
    //     .click('a.tap-target.feed-identity-module__actor-link.profile-rail-card__actor-link.ember-view')
    //     .wait(2000)
    //     .evaluate((selector) => {
    //       return document.querySelector(selector).innerText;
    //     }, selector)
    //     .then((result) => { assert.equal(result, 'Tony Stark'); } )
    //     .catch(err => {
    //       console.error(err)
    //     })
    // })

  // });
        // // .wait('#r1-0 a.result__a')
        // // .evaluate(() => document.querySelector('#r1-0 a.result__a').href)
        // // .end()
        // .then(console.log)
        // .catch(error => {
        //   console.error('Search failed:', error)


        // ensures string is === to given string
        //.isEqual
    // it('Should be the name' + ' ' +info[0].name, function(done){
    //   nightmare
    //       .goto(info[0].profile_link)
    //       .evaluate(() => { return document.querySelector('#ember3195 h1').textContent; })
    //       .end()
    //       .then(function(title){
    //           // Chai
    //           expect(title).to.equal(info[0].name)
    //           done();
    //       });
