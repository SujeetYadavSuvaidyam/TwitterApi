import express, { Request, Response, response } from 'express';
const twitterapi = express.Router();
const axios = require('axios');
const fs = require('fs');
const Twit = require('twit');
const { TwitterApi } = require("twitter-api-v2");

const client = new TwitterApi({
    appKey: "nmQbKGvEDNw7VxhUff8YX0OBE",
    appSecret: "ptVzvdu7nBdovJ6XkZhT42lju8wUxnUwMr2rSl7o5iykxbgwNq",
    accessToken: "1691801747759476736-ki7hD4Cw6YpAUTswD8UCmjLQLID4El",
    accessSecret: "IOUSyK8fL9z5MtG69yYjpymSwFO4HMdlljmOzWXEEbfpb",
    bearerToken: 'AAAAAAAAAAAAAAAAAAAAAPg0pgEAAAAAzJP94vP2DZn6GYYDouTGNZ1hHQE%3D4TFFLmRqqDmswDbCxKaTEovcE2iIP5csT1J7Q4ELXOZmew1HQc'
});

const rwClient = client.readWrite;

// TEXTTWEET METHOD

// const tweetText = async () => {
//     try {
//         const response = await rwClient.v2.tweet(
//             "Hi"
//         );
//         const tweetId = response.data.id; // Assuming the tweet ID is available in the response
//         console.log("Tweet posted successfully with ID:", tweetId);
//     } catch (error) {
//         console.log("Error posting tweet:", error);
//     }
// };

// tweetText();

//  MEDIATWEET METHOD

// const mediaTweet = async () => {
//     try {

//         // Create mediaID 
//         const mediaId = await client.v1.uploadMedia(

//             // Put path of image you wish to post
//             "./img/download.jpg"
//         );
//         // in text feild and media items in media feild
//         const response = await rwClient.v2.tweet({
//             text:
//                 "Twitter is a fantastic social network. Look at this:",
//             media: { media_ids: [mediaId] },
//         });
//         const tweetId = response.data.id;

//         console.log("success with ID:", tweetId);
//     } catch (error) {
//         console.log(error);
//     }
// };

// mediaTweet();

// DELETE METHOD
// const tweetdeleteText = async () => {
//     try {
//         // Now, let's delete the tweet using the deleteTweet method from rwClient
//         const tweetId = '1706537200069042467'
//         const deleteResponse = await rwClient.v2.deleteTweet(tweetId);

//         console.log("Tweet deleted successfully:", deleteResponse);
//     } catch (error) {
//         console.log("Error:", error);
//     }
// };
// tweetdeleteText();


const username = '@suvaidyam'; // Replace with the Twitter username you want to count tweets for

async function countTweets() {
  try {
    const response = await axios.get(`https://api.twitter.com/2/tweets/count?username=${username}`, {
      headers: {
        'Authorization': `Bearer ${client.bearerToken}`,
      },
    });

    const tweetCount = response.data.data.tweet_count;
    console.log(`User ${username} has ${tweetCount} tweets.`);
  } catch (error:any) {
    console.error('Error counting tweets:', error.response ? error.response.data : error.message);
  }
}

countTweets();

















































// Replace with your actual Twitter API credentials
// const config = {
//     consumer_key: 'nmQbKGvEDNw7VxhUff8YX0OBE',
//     consumer_secret: 'ptVzvdu7nBdovJ6XkZhT42lju8wUxnUwMr2rSl7o5iykxbgwNq',
//     access_token: '1691801747759476736-ki7hD4Cw6YpAUTswD8UCmjLQLID4El',
//     access_token_secret: 'IOUSyK8fL9z5MtG69yYjpymSwFO4HMdlljmOzWXEEbfpb',
// };

// const T = new Twit(config);

// oauth_timestamp="OAUTH_TIMESTAMP"
// Twitter API v2 endpoint for tweeting


// let data = {
//     "text": 'Hello'
// }
// const ApiUrl = 'https://api.twitter.com/2/tweets'
// const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': 'OAuth oauth_consumer_key="nmQbKGvEDNw7VxhUff8YX0OBE",oauth_token="1691801747759476736-ki7hD4Cw6YpAUTswD8UCmjLQLID4El",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1692962189",oauth_nonce="WDRDJitN0c8",oauth_version="1.0",oauth_signature="A0rAwIYffp77rJc0gGT8blXqv58%3D"', 
//     'Cookie': 'guest_id=v1%3A169267965728834038; guest_id_ads=v1%3A169267965728834038; guest_id_marketing=v1%3A169267965728834038; personalization_id="v1_fmn4xcqQqccJozdD5fiM2Q=="'}
// axios.post(ApiUrl, data, { headers: headers })
//     .then((response: any) => {
//         console.log(JSON.stringify(response.data));
//     })
//     .catch((error: any) => {
//         console.log(error);
//     });


// Twitter API v2 endpoint for tweeting
// const tweetEndpoint = 'https://api.twitter.com/2/tweets';

// // Replace with your Twitter Bearer Token
// const bearerToken = 'AAAAAAAAAAAAAAAAAAAAAPg0pgEAAAAAzJP94vP2DZn6GYYDouTGNZ1hHQE%3D4TFFLmRqqDmswDbCxKaTEovcE2iIP5csT1J7Q4ELXOZmew1HQc';

// // Tweet content
// const tweetText = 'Hello, Twitter! This is a test tweet from my Node.js app.';

// async function postTweet() {
//   try {
//     const response = await axios.post(tweetEndpoint, {
//       text: tweetText
//     }, {
//       headers: {
//         'Authorization': `Bearer ${bearerToken}`
//       }
//     });

//     console.log('Tweet posted successfully:', response.data);
//   } catch (error:any) {
//     console.error('Error posting tweet:', error.response.data);
//   }
// }

// postTweet();

// Delete tweets
// const tweetIdToDelete = '1695313039220744662';

// client.post(`statuses/destroy/${tweetIdToDelete}`, (err: any, data: { text: any; }, response: any) => {
//     if (err) {
//         console.error('Error deleting tweet:', err);
//     } else {
//         console.log('Tweet deleted successfully:', data.text);
//     }
// });

// const consumer_key = 'UM9jXL8urvBcJWhmbyLxZrgRc';
// const access_token = '1691801747759476736-Gzzp3d7XgaF7kTurnv3ecoO6lHmZ1N';
// const tweetIdToDelete = '1694950313579454696'; // Replace with the actual tweet ID you want to delete

// const baseUrl = 'https://api.twitter.com/2/tweets';
// const apiUrl = `${baseUrl}/${tweetIdToDelete}`;
// const headers = {
//     'Authorization': 'OAuth oauth_consumer_key="nmQbKGvEDNw7VxhUff8YX0OBE",oauth_token="1691801747759476736-ki7hD4Cw6YpAUTswD8UCmjLQLID4El",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1692942512",oauth_nonce="dTS6seO28us",oauth_version="1.0",oauth_signature="YVeXIHc57UEKixneA%2BIRoV%2FH5Co%3D"',
//     'Cookie': 'guest_id=v1%3A169267965728834038; guest_id_ads=v1%3A169267965728834038; guest_id_marketing=v1%3A169267965728834038; personalization_id="v1_fmn4xcqQqccJozdD5fiM2Q=="'
// };

// axios.delete(apiUrl, data, { headers: headers })
//     .then((response: any) => {
//         console.log('Tweet deleted:', JSON.stringify(response.data));
//     })
//     .catch((error: any) => {
//         console.log('Error deleting tweet:', error.response.data);
//     });



// Image upload

// const tweet = async () => {
//     const uri = "https://i.imgur.com/Zl2GLjnh.jpg";
//     const filename = "imh.jpg";
//     try {
//         // Download the image
//         const response = await axios.get(uri, { responseType: 'arraybuffer' });
//         console.log(response)
//         fs.writeFileSync(filename, response.data);
//         // console.log(response.data)
//         // Upload the downloaded image as media and tweet
//         const mediaData = fs.readFileSync(filename);
//         // console.log(mediaData)
//         T.post('statuses/update', mediaData, (err: any, data: { text: any; }, response: any) => {
//             if (!err) {
//                 console.log('Tweet with image posted successfully:', JSON.stringify(data.text));
//             } else {
//                 console.error('Error posting tweet with image:', JSON.stringify(err));
//             }
//         });
//     }
//     catch (e) {
//         console.error('Error:', e);
//     }
// };

// tweet();



module.exports = twitterapi

