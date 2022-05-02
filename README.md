# itis6177-final-project


# Introduction :
Designed a simple web application that performs Sentiment Analysis, Language Detection and Key Phrase extraction using Microsoft azure/ai-text-analytics API.

## Testing via UI :
### Sentiment Analysis :
1. Please visit the website "http://159.223.109.174:3000/" that redirects to home page which have buttons to select either of Sentiment Analysis, Language Detection and Key Phrase extraction. 
2. Selecting Sentiment Analysis redirects to the form with the URL : http://159.223.109.174:3000/sentinemtopinion
3.  Sample Input to be given :
    ####   Enter text to detect sentiments :
				 I had the best day of my life. I wish you were there with me
    ####  Enter text to detect opinions :
				 The food and service were unacceptable, but the concierge were nice.
4. Press Submit which redirects to the page with the URL "http://159.223.109.174:3000/sentimentopinion" that contains JSON output of document Sentiment and its scores

### Language Detection :
1. Please visit the website "http://159.223.109.174:3000/" that redirects to home page which have buttons to select either of Sentiment Analysis, Language Detection and Key Phrase extraction.
2. Selecting Language Detection  redirects to the form with the URL :
 http://159.223.109.174:3000/languagedetection
 3. Sample Input to be given :
      #### Enter text to detect language :
              Ce document est rédigé en Français.
  4. Press Submit which redirects to the page with the URL "http://159.223.109.174:3000/language" that contains  JSON output of the  language of the input given.
  
### KeyPhrase Extraction :
1.Please visit the website "http://159.223.109.174:3000/" that redirects to home page which have buttons to select either of Sentiment Analysis, Language Detection and Key Phrase extraction.
2. Selecting Key Phrase Extraction redirects to the form with the URL : http://159.223.109.174:3000/keyphraseextract
3. Sample Input to be given :
   ####   Enter text for KeyPhrase extraction : 
             My cat might need to see a veterinarian.
4. Press Submit which redirects to the page with the URL "http://159.223.109.174:3000/keyphraseextraction" that contains json output  of the key phrases for the input text given.

## Testing Via POSTMAN

### Sentiment Analysis : 
1. Please give the URL "http://159.223.109.174:3000/sentimentopinion" and select POST request.
2. Under body select  "x-www-form-urlencoded"
3. Under Key value 
#### Key :   analyzeSenti
#### Value : I had the best day of my life. I wish you were there with me
4. Click send and the response redirected will be JSON output that contains document Sentiment and its scores and also the mined opinions focused on targeted words

### Language Detection :  
1.Please give the URL "http://159.223.109.174:3000/language" and select POST request.
2. Under body select  "x-www-form-urlencoded"
3. Under Key value 
 #### Key :  "languagedetect"
 #### Value : "Ce document est rédigé en".
 4.Click send and the response redirected will be JSON output that contains output of the  language for the input given.

### KeyPhrase Extraction : 

1.Please give the URL "http://159.223.109.174:3000/keyphraseextraction" and select POST request.
2. Under body select  "x-www-form-urlencoded"
3. Under Key value 
#### Key :   "keyphraseextract"
#### Value : "My cat might need to see a veterinarian.
4. Click send and the response redirected will be JSON output that contains json output  of the key phrases for the input text given.

#### Tools, Languages and Frameworks Used-**

**Node.js** - For implementing API
**Npm** - Package manager for Javascript Programming language.
**Digital Ocean** - For deploying the project.
**Express** - For building web applications and API.
**azure/ai-text-analytics** - Microsoft Azure API  used.
**body-parser** - Used for processing data sent through an HTTP request.
**cors** - allows you to make requests from one website to another website in the browser.
**dotenv** - automatically loads environment variables.
**ejs** - Used for Generating web pages.

#### References : [https://azure.microsoft.com/en-us/services/cognitive-services/language-service/](https://azure.microsoft.com/en-us/services/cognitive-services/language-service/)




 



