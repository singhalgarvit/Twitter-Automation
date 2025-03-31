// Import the Twitter API library
const { TwitterApi } = require('twitter-api-v2');
const generateTechContent = require('./generateContent') 
require('dotenv').config()

// Set up your Twitter API keys
const twitterClient = new TwitterApi({
  appKey: process.env.api_key,
  appSecret: process.env.api_secret_key,
  accessToken:process.env.access_token,
  accessSecret:process.env.access_token_secret
});

// Create a Twitter client instance
const client = twitterClient.readWrite;

// Post a tweet
async function postTweet() {
  try {
    const content = await generateTechContent();
    const tweet = await client.v2.tweet(content);
    console.log(content)
    console.log('Tweet posted:', tweet);
  } catch (error) {
    console.error('Error posting tweet:', error);
  }
}

// Call the function to post a tweet
postTweet();
