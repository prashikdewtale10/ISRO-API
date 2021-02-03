const express = require('express');
// const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
const fs = require('fs');
const serverless = require('serverless-http');

router.get('/',(req,res)=>{
    res.send("<h1>This is Isro's Launcher's Unofficial API</h1>");
})
router.get('/isro-launchers',(req,res)=>{
    res.json({
        "launchers":[
            {
                "name":"Satellite Launch Vehicle ( SLV )",
                "image":"https://www.isro.gov.in/sites/default/files/pictures/Pic6.jpg",
                "description":"Satellite Launch Vehicle-3 (SLV-3) was India's first experimental satellite launch vehicle, which was an all solid, four stage vehicle weighing 17 tonnes with a height of 22m and capable of placing 40 kg class payloads in Low Earth Orbit (LEO).",
                "vehicle-specification":
                    {
                        "height":"22.7 meter",
                        "lift-of-weight":"17 tonne",
                        "propulsion":"all solid",
                        "payload-mass":"40 kg",
                        "orbit":"low earth orbit"
                    }
                ,
                "list-of-slv-launches":[
                    {
                        "sr":1,
                        "title":"SLV-3",
                        "launch-date":"Apr-17,1983",
                        "payload":"Rohini Satellite RS-D2",
                        "remarks":"Mission Succesful"
    
                    },
                    {
                        "sr":2,
                        "title":"SLV-3D1",
                        "launch-date":"May 31, 1981",
                        "payload":"Rohini Satellite RS-D1",
                        "remarks":"Mission Succesful"   
                    },
                    {
                        "sr":3,
                        "title":"SLV-3E2",
                        "launch-date":"Jul 18, 1980",
                        "payload":"Rohini Satellite RS-1",
                        "remarks":"Mission Succesful"   
                    },
                    {
                        "sr":4,
                        "title":"SLV-3E1",
                        "launch-date":"Aug 10, 1979",
                        "payload":"Rohini Technology Payload (RTP)",
                        "remarks":"Mission Unsuccessful"   
                    }
                    
    
                ]
    
            },
            {
             "name":"Argumented Satellite Launch Vehicle (ASLV)",
             "image":"https://www.isro.gov.in/sites/default/files/pictures/aslv_img.gif",
             "description":"The Augmented Satellite Launch Vehicle (ASLV) Programme was designed to augment the payload capacity to 150 kg, thrice that of SLV-3, for Low Earth Orbits (LEO). While building upon the experience gained from the SLV-3 missions, ASLV proved to be a low cost intermediate vehicle to demonstrate and validate critical technologies, that would be needed for the future launch vehicles like strap-on technology, inertial navigation, bulbous heat shield, vertical integration and closed loop guidance.",
             "vehicle-specification":{
                         "height":"23.5 meter",
                         "lift-of-weight":"39 tonne",
                         "propulsion":"all solid",
                         "payload-mass":"150 kg",
                         "orbit":"low earth orbit"
    
             },
             "list-of-aslv-launches":[
                 {
                     "sr":1,
                     "title":"ASLV-D4",
                     "launch-date":"May 05, 1994",
                     "payload":"SROSS-C2",
                     "remarks":"Mission Succesful"
    
                 },
                 {
                    "sr":2,
                    "title":"ASLV-D3",
                    "launch-date":"May 20, 1992",
                    "payload":"SROSS-C",
                    "remarks":"Mission Succesful"
                    
                },
                {
                    "sr":3,
                    "title":"ASLV-D2",
                    "launch-date":"Jul 13, 1988",
                    "payload":"SROSS-2",
                    "remarks":"Mission Unsuccessful"
                    
                },
                {
                    "sr":4,
                    "title":"ASLV-D1",
                    "launch-date":"Mar 24, 1987",
                    "payload":"SROSS-1",
                    "remarks":"Mission Unsuccessful"
                    
                }
                
             ]
    
    
            },
            {
                "name":"Polar Satellite Launch Vehicle ( PSLV )",
                "image":"https://www.isro.gov.in/sites/default/files/launchers/pslv/pslv.png",
                "description":"Polar Satellite Launch Vehicle (PSLV) is the third generation launch vehicle of India. It is the first Indian launch vehicle to be equipped with liquid stages. After its first successful launch in October 1994, PSLV emerged as the reliable and versatile workhorse launch vehicle of India with 39 consecutively successful missions by June 2017. During 1994-2017 period, the vehicle has launched 48 Indian satellites and 209 satellites for customers from abroad.",
                "vehicle-specification":{
                    "height":"44 meter",
                    "lift-of-weight":"320 tonne",
                    "propulsion" :"solid and liquid",
                    "payload-mass":"1860 kg",
                    "orbit":"475 km Sun Synchronous Polar Orbit"
                },
                "list-of-pslv-launches":[
                    {
                        "sr":1,
                        "title": "PSLV-C50/CMS-01",
                        "launch-date":"Dec 17, 2020",
                        "launcher-type":"PSLV-XL"	,
                        "payload":"CMS-01",
                        "remarks":"Mission Succesful"
                    },
                    {
                        "sr":2,
                        "title": "PSLV-C49/EOS-01",
                        "launch-date":"Nov 07, 2020",
                        "launcher-type":"PSLV-DL"	,
                        "payload":"EOS-01",
                        "remarks":"Mission Succesful"
                    },
                    {
                        "sr":3,
                        "title": "PSLV-C48/RISAT-2BR1",
                        "launch-date":"Dec 11, 2019",
                        "launcher-type":"PSLV-QL"	,
                        "payload":"RISAT-2BR1",
                        "remarks":"Mission Succesful"
                    },
                    {
                        "sr":4,
                        "title": "PSLV-C47 / Cartosat-3 Mission",
                        "launch-date":"Nov 27, 2019",
                        "launcher-type":"PSLV-XL"	,
                        "payload":"Cartosat-3 Mission",
                        "remarks":"Mission Succesful"
                    },
                    {
                        "sr":5,
                        "title": "PSLV-C46 Mission",
                        "launch-date":"May 22, 2019",
                        "launcher-type":"PSLV-CA"	,
                        "payload":"RISAT-2B",
                        "remarks":"Mission Succesful"
                    },
                    {
                        "sr":6,
                        "title": "PSLV-C45/EMISAT MISSION",
                        "launch-date":"Apr 01, 2019",
                        "launcher-type":"PSLV-QL"	,
                        "payload":"EMISAT",
                        "remarks":"Mission Succesful"
                    },
                    {
                        "sr":7,
                        "title": "PSLV-C44",
                        "launch-date":"Jan 24, 2019",
                        "launcher-type":"PSLV-DL"	,
                        "payload":"Microsat-R",
                        "remarks":"Mission Succesful"
                    },
                    {
                        "sr":8,
                        "title": "PSLV-C43 / HysIS Mission",
                        "launch-date":"Nov 29, 2018",
                        "launcher-type":"PSLV"	,
                        "payload":"HysIS",
                        "remarks":"Mission Succesful"
                    },
                    {
                        "sr":9,
                        "title": "PSLV-C42 Mission",
                        "launch-date":"Sep 16, 2018",
                        "launcher-type":"PSLV-XL"	,
                        "payload":" ",
                        "remarks":"Mission Succesful"
                    },
                    {
                        "sr":10,
                        "title": "PSLV-C41/IRNSS-1I",
                        "launch-date":"Apr 12, 2018",
                        "launcher-type":"PSLV-XL"	,
                        "payload":"IRNSS-1I",
                        "remarks":"Mission Succesful"
                    }
    
                ]
            }
            ,{
                "name":"Geosynchronous Satellite Launch Vehicle (GSLV)",
                "image":"https://www.isro.gov.in/sites/default/files/launchers/gslv/gslv.png",
                "description":"Geosynchronous Satellite Launch Vehicle Mark II (GSLV Mk II) is the largest launch vehicle developed by India, which is currently in operation. This fourth generation launch vehicle is a three stage vehicle with four liquid strap-ons. The indigenously developed cryogenic Upper Stage (CUS), which is flight proven, forms the third stage of GSLV Mk II. From January 2014, the vehicle has achieved four consecutive successes.",
                "vehicle-specification":{
                    "height":"49 meter",
                    "lift-of-weight":"414 tonne",
                    "propulsion":"solid , liquid & cryogenic",
                    "payload-mass":"2200 kg",
                    "orbit":"Geosynchronous Transfer Orbit"
                },
                "list-of-gslv-launches":[
                    {
                        "sr":1,
                        "title":"GSLV-F11 / GSAT-7A Mission",
                        "launch-date":"Dec 19, 2018",
                        "launcher-type":"GSLV",
                        "payload":"GSAT-7A",
                        "remarks":"Mission Succesful"
    
                    },
                    {
                        "sr":2,
                        "title":"GSLV-F08/GSAT-6A Mission",
                        "launch-date":"Mar 29, 2018",
                        "launcher-type":"GSLV",
                        "payload":"GSAT-6A",
                        "remarks":"Mission Succesful"
    
                    },
                    {
                        "sr":3,
                        "title":"GSLV-F09 / GSAT-9",
                        "launch-date":"May 05, 2017",
                        "launcher-type":"GSLV",
                        "payload":"GSAT-9",
                        "remarks":"Mission Succesful"
    
                    },
                    {
                        "sr":4,
                        "title":"GSLV-F05 / INSAT-3DR",
                        "launch-date":"Sep 08, 2016",
                        "launcher-type":"GSLV-MK-II",
                        "payload":"INSAT-3DR",
                        "remarks":"Mission Succesful"
    
                    },
                    {
                        "sr":5,
                        "title":"GSLV-D6",
                        "launch-date":"Aug 27, 2015",
                        "launcher-type":"GSLV-MK-II",
                        "payload":"GSAT-6",
                        "remarks":"Mission Succesful"
    
                    },
                    {
                        "sr":6,
                        "title":"GSLV-D5/GSAT-14",
                        "launch-date":"Jan 05, 2014",
                        "launcher-type":"GSLV-MK-II",
                        "payload":"GSAT-14",
                        "remarks":"Mission Succesful"
    
                    },
                    {
                        "sr":7,
                        "title":"GSLV-F06 / GSAT-5P",
                        "launch-date":"Dec 25, 2010",
                        "launcher-type":"GSLV-MK-II",
                        "payload":"GSAT-5P",
                        "remarks":"Mission Unsuccesful"
    
                    },
                    {
                        "sr":8,
                        "title":"GSLV-D3 / GSAT-4",
                        "launch-date":"Apr 15, 2010",
                        "launcher-type":"GSLV-MK-II",
                        "payload":"GSAT-4",
                        "remarks":"Mission Unsuccesful"
    
                    },
                    {
                        "sr":9,
                        "title":"GSLV-F04 / INSAT-4CR",
                        "launch-date":"Sep 02, 2007",
                        "launcher-type":"GSLV-MK-II",
                        "payload":"INSAT-4CR",
                        "remarks":"Mission Succesful"
    
                    },
                    {
                        "sr":10,
                        "title":"GSLV-F02 / INSAT-4C",
                        "launch-date":"Jul 10, 2006",
                        "launcher-type":"GSLV-MK-II",
                        "payload":"INSAT-4C",
                        "remarks":"Mission Unsuccesful"
                    }
                    ,
                    {
                        "sr":11,
                        "title":"GSLV-F01 / EDUSAT(GSAT-3)",
                        "launch-date":"Sep 20, 2004",
                        "launcher-type":"GSLV-MK-II",
                        "payload":"EDUSAT",
                        "remarks":"Mission Succesful"
    
                    },
                    {
                        "sr":12,
                        "title":"GSLV-D2 / GSAT-2",
                        "launch-date":"May 08, 2003",
                        "launcher-type":"GSLV-MK-II",
                        "payload":"GSAT-2",
                        "remarks":"Mission Succesful"
    
                    },
                    {
                        "sr":13,
                        "title":"GSLV-D1 / GSAT-1",
                        "launch-date":"Apr 18, 2001",
                        "launcher-type":"GSLV-MK-II",
                        "payload":"GSAT-1",
                        "remarks":"Mission Succesful"
    
                    }
                ]
            },
            {
                "name":"GSLV Mk III",
                "image":"https://www.isro.gov.in/sites/default/files/article-files/launchers/lvm3/gslv_mark_iii-launcher.jpg",
                "description":"GSLV MkIII, chosen to launch Chandrayaan-2 spacecraft, is a three-stage heavy lift launch vehicle developed by ISRO. The vehicle has two solid strap-ons, a core liquid booster and a cryogenic upper stage. GSLV Mk III is designed to carry 4 ton class of satellites into Geosynchronous Transfer Orbit (GTO) or about 10 tons to Low Earth Orbit (LEO), which is about twice the capability of the GSLV Mk II.",
                "vehicle-specification":{
                    "height":"43.43 meter",
                    "lift-of-weight":"640 tonne",
                    "propulsion":"solid , liquid & cryogenic",
                    "payload-mass":"4000 kg",
                    "orbit":"Geosynchronous Transfer Orbit"
                },
                "list-of-gslv-mk-III-launches":[
                    {
                        "sr":1,
                        "title":"GSLV-Mk III - M1 / Chandrayaan-2 Mission",
                        "launch-date":"Jul 22, 2019",
                        "payload":"Chandrayaan2",
                        "remarks":"Mission Succesful"
                    },
                    {
                        "sr":2,
                        "title":"GSLV Mk III-D2 / GSAT-29 Mission",
                        "launch-date":"Nov 14, 2018",
                        "payload":"GSAT-29",
                        "remarks":"Mission Succesful"
                    },
                    {
                        "sr":3,
                        "title":"GSLV Mk III-D1/GSAT-19 Mission",
                        "launch-date":"Jun 05, 2017",
                        "payload":"GSAT-19",
                        "remarks":"Mission Succesful"
                    },
                    {
                        "sr":4,
                        "title":"LVM-3/CARE Mission",
                        "launch-date":"Dec 18, 2014",
                        "payload":"Crew module Atmospheric Re-entry Experiment (CARE)",
                        "remarks":"Mission Succesful" 
                    }
    
                ]
            }
    
        ]
    })
});
app.use(`/.netlify/functions/api`, router);
module.exports = app;
module.exports.handler = serverless(app);