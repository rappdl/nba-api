#API - Documentation

# ENDPOINTS

### **GET**
* **Get all teams**        
>`GET /teams`

```json
 {
    "teams": [
        {
            "city": "Atlanta",
            "fullName": "Atlanta Hawks",
            "confName": "East",
            "tricode": "ATL",
            "urlName": "hawks",
            "teamId": "1610612737",
            "img": "https://cdn.nba.com/logos/nba/1610612737/global/L/logo.svg",
            ...
        }, 
        {
            "city": "Miami",
            "fullName": "Miami Heat",
            "confName": "East",
            "tricode": "MIA",
            "nickname": "Heat",
            "urlName": "heat",
            "teamId": "1610612748",
            "img": "https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg",
            ...
        } ...
```

- **Get a specific team**    
>`GET /teams/:id` 
fdgdfg
```json
    {
        "city": "Los Angeles",
        "fullName": "Los Angeles Lakers",
        "confName": "West",
        "tricode": "LAL",
        "nickname": "Lakers",
        "urlName": "lakers",
        "teamId": "1610612747",
        "img": "https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg",
            ...
    }

```

- **Get a specific player**     
>`GET /players/:id`

```json
{
    "player": [
        {
            "firstName": "Giannis",
            "lastName": "Antetokounmpo",
            "temporaryDisplayName": "Antetokounmpo, Giannis",
            "personId": "203507",
            "teamId": "1610612749",
            "jersey": "34",
            "isActive": true,
            "pos": "F",
            "heightFeet": "6",
            "heightInches": "11",
            "heightMeters": "2.11",
            "weightPounds": "242",
            "weightKilograms": "109.8",
            "dateOfBirthUTC": "1994-12-06",
            "teamSitesOnly": {
                "playerCode": "giannis_antetokounmpo",
                "posFull": "Forward",
                "displayAffiliation": "Greece",
                "freeAgentCode": ""
            },
            "teams": [
                {
                    "teamId": "1610612749",
                    "seasonStart": "2013",
                    "seasonEnd": "2021"
                }
            ],
            "draft": {
                "teamId": "1610612749",
                "pickNum": "15",
                "roundNum": "1",
                "seasonYear": "2013"
            },
            "nbaDebutYear": "2013",
            "yearsPro": "8",
            "collegeName": "Filathlitikos",
            "lastAffiliation": "Filathlitikos/Greece",
            "country": "Greece",
            "img": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203507.png"
        }
    ]
}
```

- **Get all players of a team**     
> `GET /teams/:id/players`
```json
"teams": [
    {
        "firstName": "LeBron",
        "lastName": "James",
        "temporaryDisplayName": "James, LeBron",
        "personId": "2544",
        "teamId": "1610612747",
        "jersey": "6",
        "isActive": true,
        "pos": "F",
        "heightFeet": "6",
        "heightInches": "9",
        "heightMeters": "2.06",
        "weightPounds": "250",
        "weightKilograms": "113.4",
        "dateOfBirthUTC": "1984-12-30",
        "teamSitesOnly": {
            "playerCode": "lebron_james",
            "posFull": "Forward",
            "displayAffiliation": "St. Vincent-St. Mary HS (OH)/USA",
            "freeAgentCode": ""
        },
        "teams": [
            {
                "teamId": "1610612739",
                "seasonStart": "2003",
                "seasonEnd": "2009"
            },
            {
                "teamId": "1610612748",
                "seasonStart": "2010",
                "seasonEnd": "2013"
            },
            {
                "teamId": "1610612739",
                "seasonStart": "2014",
                "seasonEnd": "2017"
            },
            {
                "teamId": "1610612747",
                "seasonStart": "2018",
                "seasonEnd": "2021"
            }
        ],
        "draft": {
            "teamId": "1610612739",
            "pickNum": "1",
            "roundNum": "1",
            "seasonYear": "2003"
        },
        "nbaDebutYear": "2003",
        "yearsPro": "18",
        "collegeName": "St. Vincent-St. Mary HS (OH)",
        "lastAffiliation": "St. Vincent-St. Mary HS (OH)/USA",
        "country": "USA",
        "img": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2544.png"
    }, ...
```