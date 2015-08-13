'use strict'

var twitterTimeline = require('../app/twitter_timeline');

describe('twitter timeline', function() {

	describe('timeline()', function() {

		it ('should be return list of timelines when call timeline()', function(){
			expect(twitterTimeline.timeline().length).toBeGreaterThan(0);
		});

		it('should be return timelines with properties "name" when call timeline()', function() {
			var timelines = twitterTimeline.timeline();
			expect(timelines[0].name).toBeDefined(); 
		});

		it('should be return timelines with properties "content" when call timeline()', function() {
			var timelines = twitterTimeline.timeline();
			expect(timelines[0].content).toBeDefined(); 
		});

		it('should be return timelines with all properties "name" and "content" when call timeline()', function() {
			var timelines = twitterTimeline.timeline();

			timelines.forEach(function(timeline, index) {
				expect(timeline.name).toBeDefined(); 
				expect(timeline.content).toBeDefined(); 
			});
			
		});

	});

	describe('post()', function() {

		it ('should be increase size of timeline', function() {
			
			var timeline = twitterTimeline.timeline();
			expect(timeline.length).toEqual(3);

			twitterTimeline.post('bright', "new post");

			timeline = twitterTimeline.timeline();
			expect(timeline.length).toEqual(4);

		});

		it ('should be return "error not found user" when call post with undefined user', function(){
			var user;
			var content = '';
			expect(twitterTimeline.post(user, content)).toEqual("error user undefined");
		});

		it ('should be return "error not found content" when call post with undefined "user"', function(){
			var user = 'bright';
			var content = 'test post';
			expect(twitterTimeline.post(user, content)).toEqual("error content undefined");
		});

		it ('should be return "success" when call post to twitter with user and content parameter', function(){
			var user = '';
			var content = '';
			expect(twitterTimeline.post(user, content)).toEqual("success");
		});

	});

});
