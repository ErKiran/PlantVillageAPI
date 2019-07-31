const { google } = require('googleapis');
const fs = require('fs');
const readline = require('readline');
const SCOPES = require('./scopes');
const latest_img = {};
const TOKEN_PATH = './config/token.json'

fs.readFile('./config/credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    authorize(JSON.parse(content), listFiles);
});


function authorize(credentials, callback) {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);

    fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) return getAccessToken(oAuth2Client, callback);
        oAuth2Client.setCredentials(JSON.parse(token));
        callback(oAuth2Client);
    });
}

function getAccessToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
            if (err) return console.error('Error retrieving access token', err);
            oAuth2Client.setCredentials(token);

            fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                if (err) return console.error(err);
                console.log('Token stored to', TOKEN_PATH);
            });
            callback(oAuth2Client);
        });
    });
}


async function listFiles(auth) {
    try {
        const drive = await google.drive({ version: 'v3', auth });
        const list = await drive.files.list({
            pageSize: 1000,
            fields: 'nextPageToken, files(id, name,createdTime, modifiedTime, mimeType,size,thumbnailLink)',
        })
        const files = list.data.files;
        const onlyimage = files.filter(i => i.mimeType === 'image/jpeg');
        if (files.length) {
            if (onlyimage.length) {
                try {
                    let thumblink = onlyimage.map(i => i.thumbnailLink);
                    const link = thumblink.map(i => i.slice(0, -5));
                    latest_img.new = link;
                }
                catch (e) {
                    throw e
                }
            }
            else {
                console.log('No Image found.');
            }
        }
        else {
            console.log('No files found')
        }
    }
    catch (e) {
        throw e
    }
}

module.exports = {
    latest_img
}