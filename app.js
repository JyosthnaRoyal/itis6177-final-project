require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));
app.use(express.json())
app.use(cors())


app.set("view engine", "ejs");

//render home page
app.get("/", (req, res) => {
    res.render("home")
})

//render sentinemtopinion page
app.post("/sentinemtopinion", (req, res) => {
    res.render("sentiopinion")
})

//render languagedetection page
app.post("/languagedetection", (req, res) => {
    res.render("detectlanguage")
})

//render keyphraseextract page
app.post("/keyphraseextract", (req, res) => {
    res.render("keyphraseextraction")
})


"use strict";

const { TextAnalyticsClient, AzureKeyCredential } = require("@azure/ai-text-analytics");
const req = require('express/lib/request')
const { application } = require('express')
const endpoint = 'https://sentimentanalysis-siproject.cognitiveservices.azure.com/';

// Authenticate the client with your key and endpoint
const textAnalyticsClient = new TextAnalyticsClient(endpoint, new AzureKeyCredential(process.env.KEY));


app.post("/sentimentopinion", async(req, res) => {
    let resp = []

    // detecting sentiment in text
    const sentimentInput = [
        req.body.analyzeSenti
    ];
    const sentimentResult = await textAnalyticsClient.analyzeSentiment(sentimentInput);



    sentimentResult.forEach(document => {

        resp.push({
            "ID": document.id,
            "Document Data": req.body.analyzeSenti,
            "Document Sentiment": document.sentiment,
            "Document scores": document.confidenceScores,
            "No of Sentences": document.sentences.length
        })


        document.sentences.forEach(sentence => {
            resp.push({
                "Sentence": sentence.text,
                "Sentence sentiment": sentence.sentiment,
                "Sentence Scores": sentence.confidenceScores,
            })
        });
    });

    //  detecting opinions in text 
    const sentimentInput1 = [{
        text: req.body.analyzeOpinion,
        id: "0",
        language: "en"
    }];

    const results = await textAnalyticsClient.analyzeSentiment(sentimentInput1, { includeOpinionMining: true });

    for (let i = 0; i < results.length; i++) {
        const result = results[i];
        if (!result.error) {
            resp.push({
                "ID": result.id,
                "Document text": sentimentInput1[i].text,
                "Overall Sentiment": result.sentiment,
                "Sentiment confidence scores": result.confidenceScores,


            })
            for (const { sentiment, confidenceScores, opinions }
                of result.sentences) {
                resp.push({
                    "Sentence sentiment ": sentiment,
                    "Sentence Confidence scores ": confidenceScores,



                })

                for (const { target, assessments }
                    of opinions) {
                    resp.push({
                        "Mined Opinions - Target text": target.text,
                        "Mined Opinions - Target sentiment": target.sentiment,
                        "Mined Opinions - Target confidence scores": target.confidenceScores

                    })

                    for (const { text, sentiment }
                        of assessments) {
                        resp.push({
                            "Target assesments - Text": text,
                            "Target assesments - Sentiment": sentiment
                        })

                    }
                }
            }
        } else {
            console.error(`\tError: ${result.error}`);
        }
    }

    res.end(JSON.stringify(resp, null, 10))


});



app.post("/language", async(req, res) => {

    let resp = []


    const languageInputArray = [
        req.body.languagedetect
    ];
    const languageResult = await textAnalyticsClient.detectLanguage(languageInputArray);

    languageResult.forEach(document => {

        resp.push({
            "ID": document.id,
            "Language": document.primaryLanguage.name
        })
    });
    res.end(JSON.stringify(resp, null, 10))
})

app.post("/keyphraseextraction", async(req, res) => {
    let resp = []

    const keyPhrasesInput = [
        req.body.keyphraseextract
    ];
    const keyPhraseResult = await textAnalyticsClient.extractKeyPhrases(keyPhrasesInput);

    keyPhraseResult.forEach(document => {

        resp.push({
            "ID": document.id,
            "Document Key Phrase": document.keyPhrases
        })
    });
    res.end(JSON.stringify(resp, null, 10))
})


app.listen(process.env.PORT || 3000, (req, res) => {
    console.log(`Server is listening on port 3000`)
})