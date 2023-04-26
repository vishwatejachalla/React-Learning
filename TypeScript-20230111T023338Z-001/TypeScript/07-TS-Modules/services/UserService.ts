import {IRandomUser} from "../models/IRandomUser";
import {ResultsEntity} from "../models/ResultsEntity";

export class UserService {
    private static userEntity: IRandomUser = {
        "results": [{
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Sofia",
                "last": "Reid"
            },
            "location": {
                "street": {
                    "number": 1226,
                    "name": "Hamilton Ave"
                },
                "city": "Cairns",
                "state": "South Australia",
                "country": "Australia",
                "postcode": 9044,
                "coordinates": {
                    "latitude": "-85.4078",
                    "longitude": "137.0527"
                },
                "timezone": {
                    "offset": "+1:00",
                    "description": "Brussels, Copenhagen, Madrid, Paris"
                }
            },
            "email": "sofia.reid@example.com",
            "login": {
                "uuid": "dbb71548-8766-4322-b52d-36e2fdb0e082",
                "username": "ticklishelephant485",
                "password": "bishop",
                "salt": "DAApjjEw",
                "md5": "017b811bf79d3b2413616a9471d93359",
                "sha1": "d8847c8067fcc746dee061be9b0e835a6db9dedd",
                "sha256": "929c975147a86f502deb8557a4a15c1b1cc52ebc8819ae8ce4bddfe92b05e7d2"
            },
            "dob": {
                "date": "1996-12-16T09:31:00.284Z",
                "age": 25
            },
            "registered": {
                "date": "2005-11-25T03:13:19.676Z",
                "age": 16
            },
            "phone": "08-7090-5148",
            "cell": "0474-695-926",
            "id": {
                "name": "TFN",
                "value": "732435091"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/91.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/91.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/91.jpg"
            },
            "nat": "AU"
        }, {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Basile",
                "last": "Morin"
            },
            "location": {
                "street": {
                    "number": 5012,
                    "name": "Rue D'Abbeville"
                },
                "city": "Lille",
                "state": "Somme",
                "country": "France",
                "postcode": 87012,
                "coordinates": {
                    "latitude": "-15.8831",
                    "longitude": "112.5987"
                },
                "timezone": {
                    "offset": "-6:00",
                    "description": "Central Time (US & Canada), Mexico City"
                }
            },
            "email": "basile.morin@example.com",
            "login": {
                "uuid": "c79f9f4a-b646-4681-b2e6-62b3876ed9f7",
                "username": "bigostrich467",
                "password": "asdfgh",
                "salt": "L8CtDtXK",
                "md5": "ca644e3991fa74c612623960c30326d9",
                "sha1": "119fb2164808ee8af4d95b3f9f1ab34583c3a199",
                "sha256": "41e2d8d3ff84b7d43b6a69c8581ad3c4611bd4623c3440dd6ebed76bafe523d3"
            },
            "dob": {
                "date": "1963-11-29T06:34:18.227Z",
                "age": 58
            },
            "registered": {
                "date": "2002-11-29T19:16:50.618Z",
                "age": 19
            },
            "phone": "02-02-87-30-02",
            "cell": "06-92-99-57-33",
            "id": {
                "name": "INSEE",
                "value": "1631097119828 94"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/8.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/8.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/8.jpg"
            },
            "nat": "FR"
        }, {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Adrianus",
                "last": "Huijberts"
            },
            "location": {
                "street": {
                    "number": 1610,
                    "name": "Achter de Boogerden"
                },
                "city": "Vessem",
                "state": "Overijssel",
                "country": "Netherlands",
                "postcode": "8780 KG",
                "coordinates": {
                    "latitude": "-34.4651",
                    "longitude": "-7.5967"
                },
                "timezone": {
                    "offset": "+3:00",
                    "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
                }
            },
            "email": "adrianus.huijberts@example.com",
            "login": {
                "uuid": "5c911a65-0151-43dc-9104-e3ff8b45fc22",
                "username": "crazybutterfly312",
                "password": "hobbit",
                "salt": "FSU9ln5d",
                "md5": "8489120b1ea8523808777b0b72809340",
                "sha1": "912afc494c294609049319cd00a82167e5d5ea96",
                "sha256": "2dc670c3658ef844cd92aecda21cb066931fa61a64306a09f3730410d18e2ad2"
            },
            "dob": {
                "date": "1954-04-30T05:28:51.806Z",
                "age": 68
            },
            "registered": {
                "date": "2014-12-14T03:52:23.384Z",
                "age": 7
            },
            "phone": "(056) 4023310",
            "cell": "(06) 56021149",
            "id": {
                "name": "BSN",
                "value": "26226062"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/34.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/34.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/34.jpg"
            },
            "nat": "NL"
        }, {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "Jelena",
                "last": "Damjanović"
            },
            "location": {
                "street": {
                    "number": 3341,
                    "name": "Čede Zlatanovića"
                },
                "city": "Valjevo",
                "state": "Šumadija",
                "country": "Serbia",
                "postcode": 35015,
                "coordinates": {
                    "latitude": "80.2366",
                    "longitude": "109.6079"
                },
                "timezone": {
                    "offset": "+5:45",
                    "description": "Kathmandu"
                }
            },
            "email": "jelena.damjanovic@example.com",
            "login": {
                "uuid": "4eb00582-0db0-48bb-b33e-074132a59a61",
                "username": "ticklishkoala245",
                "password": "carlos1",
                "salt": "02lQAFrh",
                "md5": "4576fd345b8e6b994ccf1fb48211dad2",
                "sha1": "d96ff900420dd3c669ff7ad7273f0f65d38e5c71",
                "sha256": "cfdaf55d19db77e1dc7af6bad52f686189e4bf674430a191c8139d12837072a1"
            },
            "dob": {
                "date": "1983-09-13T03:46:54.773Z",
                "age": 39
            },
            "registered": {
                "date": "2010-09-12T05:57:09.061Z",
                "age": 12
            },
            "phone": "013-8655-814",
            "cell": "063-1653-630",
            "id": {
                "name": "SID",
                "value": "366412552"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/56.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/56.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/56.jpg"
            },
            "nat": "RS"
        }, {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Joe",
                "last": "Pena"
            },
            "location": {
                "street": {
                    "number": 8811,
                    "name": "College St"
                },
                "city": "North Charleston",
                "state": "Louisiana",
                "country": "United States",
                "postcode": 38943,
                "coordinates": {
                    "latitude": "-52.3085",
                    "longitude": "-62.5004"
                },
                "timezone": {
                    "offset": "+11:00",
                    "description": "Magadan, Solomon Islands, New Caledonia"
                }
            },
            "email": "joe.pena@example.com",
            "login": {
                "uuid": "5206618f-bde3-4389-8411-7f4934a0a4cb",
                "username": "whitedog109",
                "password": "kathy",
                "salt": "eOUPoqdz",
                "md5": "3cf7d810d15ae821b6e77c28bad52771",
                "sha1": "9b880f9fb63ff961d2c12bdbe5a1468f7e31c9d1",
                "sha256": "0d4d47cc72e5fb32140bed6dd691c90e7c9a454db185385edbb0016bbf414f30"
            },
            "dob": {
                "date": "1999-08-29T06:51:25.648Z",
                "age": 23
            },
            "registered": {
                "date": "2009-03-05T16:33:25.109Z",
                "age": 13
            },
            "phone": "(445) 263-4185",
            "cell": "(734) 956-1197",
            "id": {
                "name": "SSN",
                "value": "184-13-1421"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/85.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/85.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/85.jpg"
            },
            "nat": "US"
        }, {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Siiri",
                "last": "Wuori"
            },
            "location": {
                "street": {
                    "number": 2439,
                    "name": "Hatanpään Valtatie"
                },
                "city": "Janakkala",
                "state": "Päijät-Häme",
                "country": "Finland",
                "postcode": 26336,
                "coordinates": {
                    "latitude": "65.1906",
                    "longitude": "-158.4422"
                },
                "timezone": {
                    "offset": "-2:00",
                    "description": "Mid-Atlantic"
                }
            },
            "email": "siiri.wuori@example.com",
            "login": {
                "uuid": "64de511b-52ee-44fd-ba68-413d62b6936e",
                "username": "ticklishleopard547",
                "password": "apollo",
                "salt": "tjbvuM3N",
                "md5": "fef0bc50548dd75f250ea759818a07b9",
                "sha1": "19dc5b05a9c5fc1eb5adab92995f076aa1436e70",
                "sha256": "a2f0dca542cabcab0bad36049ec01e3c06bd8392137e4fb45744054c3021a307"
            },
            "dob": {
                "date": "1999-04-30T16:23:26.101Z",
                "age": 23
            },
            "registered": {
                "date": "2007-08-27T18:44:09.580Z",
                "age": 15
            },
            "phone": "09-444-901",
            "cell": "048-918-40-36",
            "id": {
                "name": "HETU",
                "value": "NaNNA724undefined"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/71.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/71.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/71.jpg"
            },
            "nat": "FI"
        }, {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Hugo",
                "last": "Blanco"
            },
            "location": {
                "street": {
                    "number": 8320,
                    "name": "Calle de Ángel García"
                },
                "city": "La Palma",
                "state": "Comunidad Valenciana",
                "country": "Spain",
                "postcode": 18203,
                "coordinates": {
                    "latitude": "19.0275",
                    "longitude": "8.5917"
                },
                "timezone": {
                    "offset": "+4:30",
                    "description": "Kabul"
                }
            },
            "email": "hugo.blanco@example.com",
            "login": {
                "uuid": "8d265299-5950-44ab-a238-83f68afe1955",
                "username": "silverbear588",
                "password": "jolly",
                "salt": "lrKuoQcM",
                "md5": "cdb32439520aa56cc6817be3318f04b7",
                "sha1": "7f62d4557326c50ec5113d9e8eb983592f13111a",
                "sha256": "d7a8bf48078ad5b2978d1266192cf6c3b7c634abfeebc435631cc6d6770519f9"
            },
            "dob": {
                "date": "1992-10-07T08:04:21.247Z",
                "age": 30
            },
            "registered": {
                "date": "2004-09-14T08:07:26.084Z",
                "age": 18
            },
            "phone": "933-440-098",
            "cell": "684-032-310",
            "id": {
                "name": "DNI",
                "value": "90183381-W"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/98.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/98.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/98.jpg"
            },
            "nat": "ES"
        }, {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "Eleonora",
                "last": "Demuth"
            },
            "location": {
                "street": {
                    "number": 6880,
                    "name": "Gartenweg"
                },
                "city": "Erfurt",
                "state": "Nordrhein-Westfalen",
                "country": "Germany",
                "postcode": 29586,
                "coordinates": {
                    "latitude": "-76.3074",
                    "longitude": "53.0043"
                },
                "timezone": {
                    "offset": "-7:00",
                    "description": "Mountain Time (US & Canada)"
                }
            },
            "email": "eleonora.demuth@example.com",
            "login": {
                "uuid": "ca34068e-20f5-4d57-80b5-73e8b67e8912",
                "username": "sadelephant837",
                "password": "moonshin",
                "salt": "1Fks8BY9",
                "md5": "53d2114deaf8e88c75f52b25c6fd0f6c",
                "sha1": "9b9357384930e5dbd3ad5133dde6b6bea5194511",
                "sha256": "f22f11c5ee493624d4944fb340c26af2d1d97413046da1fa38f338f0a70eb77e"
            },
            "dob": {
                "date": "1988-12-06T20:31:16.254Z",
                "age": 33
            },
            "registered": {
                "date": "2014-12-31T05:00:49.251Z",
                "age": 7
            },
            "phone": "0346-2869771",
            "cell": "0179-9124233",
            "id": {
                "name": "SVNR",
                "value": "11 061288 D 614"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/24.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/24.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/24.jpg"
            },
            "nat": "DE"
        }, {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Shazia",
                "last": "Van Kilsdonk"
            },
            "location": {
                "street": {
                    "number": 452,
                    "name": "Ben Verstappensingel"
                },
                "city": "Remmerden",
                "state": "Gelderland",
                "country": "Netherlands",
                "postcode": "7528 JS",
                "coordinates": {
                    "latitude": "86.4979",
                    "longitude": "107.4948"
                },
                "timezone": {
                    "offset": "+2:00",
                    "description": "Kaliningrad, South Africa"
                }
            },
            "email": "shazia.vankilsdonk@example.com",
            "login": {
                "uuid": "1c734174-35be-4f56-b229-252055ada1d8",
                "username": "lazydog192",
                "password": "watcher",
                "salt": "IqBoPrar",
                "md5": "635ee700a1528704a897596b86139cf7",
                "sha1": "cde5e75021e3e33e5a927feb8b36b87822af247a",
                "sha256": "b17858637ec37ebb75f18d8659bcc91be75736d12dcba676c2539e68f30312a2"
            },
            "dob": {
                "date": "1956-12-23T18:14:09.052Z",
                "age": 65
            },
            "registered": {
                "date": "2015-07-25T16:44:23.081Z",
                "age": 7
            },
            "phone": "(006) 2334587",
            "cell": "(06) 39548435",
            "id": {
                "name": "BSN",
                "value": "36146962"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/70.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/70.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/70.jpg"
            },
            "nat": "NL"
        }, {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Elliot",
                "last": "Hodne"
            },
            "location": {
                "street": {
                    "number": 6149,
                    "name": "Risveien"
                },
                "city": "Høyjord",
                "state": "Bergen",
                "country": "Norway",
                "postcode": "4747",
                "coordinates": {
                    "latitude": "-0.4624",
                    "longitude": "166.8150"
                },
                "timezone": {
                    "offset": "-10:00",
                    "description": "Hawaii"
                }
            },
            "email": "elliot.hodne@example.com",
            "login": {
                "uuid": "4be666f1-2de2-4d61-99c3-85670adb6812",
                "username": "blackmeercat136",
                "password": "soul",
                "salt": "Wrdxy7kb",
                "md5": "e7dcc30443de11fcb941730a2cbf7ada",
                "sha1": "d0ed8a820fa9afd3b238cba7ed4b78f3fbfda085",
                "sha256": "468d1c62c00df8f1e7c980f9e3b688a2ef26ff24acc3982f765a16f7210ba5b3"
            },
            "dob": {
                "date": "1964-06-25T04:17:15.884Z",
                "age": 58
            },
            "registered": {
                "date": "2006-04-10T16:27:57.913Z",
                "age": 16
            },
            "phone": "26772929",
            "cell": "92093183",
            "id": {
                "name": "FN",
                "value": "25066415565"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/38.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/38.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/38.jpg"
            },
            "nat": "NO"
        }, {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Ella",
                "last": "Armstrong"
            },
            "location": {
                "street": {
                    "number": 8308,
                    "name": "Central St"
                },
                "city": "Traralgon",
                "state": "Victoria",
                "country": "Australia",
                "postcode": 9990,
                "coordinates": {
                    "latitude": "-39.9417",
                    "longitude": "34.4005"
                },
                "timezone": {
                    "offset": "-10:00",
                    "description": "Hawaii"
                }
            },
            "email": "ella.armstrong@example.com",
            "login": {
                "uuid": "53a097c0-8d1f-4547-b01f-dc6053530e03",
                "username": "greenostrich603",
                "password": "summit",
                "salt": "Qw9YN1ej",
                "md5": "a587dc07951887d4efc1bee2720ca576",
                "sha1": "4a3ed62e4e163e40a4947de529297005cc6629e1",
                "sha256": "dee0f72c3a4c477da9519ea1a3343e3c4bd21ec48012711cfd560267e3450114"
            },
            "dob": {
                "date": "1998-07-05T00:24:29.794Z",
                "age": 24
            },
            "registered": {
                "date": "2009-07-28T02:14:49.140Z",
                "age": 13
            },
            "phone": "06-2675-8838",
            "cell": "0490-553-789",
            "id": {
                "name": "TFN",
                "value": "077086378"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/13.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/13.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/13.jpg"
            },
            "nat": "AU"
        }, {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Delores",
                "last": "May"
            },
            "location": {
                "street": {
                    "number": 8717,
                    "name": "Valwood Pkwy"
                },
                "city": "Boise",
                "state": "Arkansas",
                "country": "United States",
                "postcode": 74241,
                "coordinates": {
                    "latitude": "71.5621",
                    "longitude": "-70.9021"
                },
                "timezone": {
                    "offset": "+3:30",
                    "description": "Tehran"
                }
            },
            "email": "delores.may@example.com",
            "login": {
                "uuid": "5c2e3e32-22b5-4393-9824-f7df9b3dca36",
                "username": "happysnake837",
                "password": "goirish",
                "salt": "Cb5MM6tS",
                "md5": "e57d91e98c63984159eae69750bd444f",
                "sha1": "3d651fe0a78fbf8de8944ca26bc3537680d644aa",
                "sha256": "5222e1cbf37a7b8acea504ef4423c9cd756c2f27f2565cfe4d0e456ee6cb3f1d"
            },
            "dob": {
                "date": "1964-07-17T10:51:51.202Z",
                "age": 58
            },
            "registered": {
                "date": "2018-07-13T23:07:37.703Z",
                "age": 4
            },
            "phone": "(662) 486-2106",
            "cell": "(323) 660-0526",
            "id": {
                "name": "SSN",
                "value": "764-70-0671"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/17.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/17.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/17.jpg"
            },
            "nat": "US"
        }, {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Ruby",
                "last": "Moore"
            },
            "location": {
                "street": {
                    "number": 4934,
                    "name": "Castle Street"
                },
                "city": "Timaru",
                "state": "Waikato",
                "country": "New Zealand",
                "postcode": 51262,
                "coordinates": {
                    "latitude": "-17.3908",
                    "longitude": "58.4208"
                },
                "timezone": {
                    "offset": "+9:00",
                    "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
                }
            },
            "email": "ruby.moore@example.com",
            "login": {
                "uuid": "3dbecb2f-e236-4355-936a-addb801b5c94",
                "username": "yellowmeercat257",
                "password": "potter",
                "salt": "BpkEWEwA",
                "md5": "8c042342a8d1a1291c4d16b8dd4a8022",
                "sha1": "bdd683ef5805371f60a0eaa432b13ce571772eb0",
                "sha256": "ce8db81f081e49fe70dc919ed965d916ccba9df4729eb994f9350d85e1503762"
            },
            "dob": {
                "date": "1950-05-08T03:31:40.534Z",
                "age": 72
            },
            "registered": {
                "date": "2002-06-30T19:59:00.212Z",
                "age": 20
            },
            "phone": "(558)-415-4356",
            "cell": "(444)-047-8746",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/20.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/20.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/20.jpg"
            },
            "nat": "NZ"
        }, {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Leposava",
                "last": "Kojić"
            },
            "location": {
                "street": {
                    "number": 8236,
                    "name": "Krečanska"
                },
                "city": "Knjaževac",
                "state": "Mačva",
                "country": "Serbia",
                "postcode": 50408,
                "coordinates": {
                    "latitude": "-10.1737",
                    "longitude": "-94.1053"
                },
                "timezone": {
                    "offset": "+3:00",
                    "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
                }
            },
            "email": "leposava.kojic@example.com",
            "login": {
                "uuid": "a404f721-3ab1-4a34-a68d-be1dcff7c345",
                "username": "crazyfrog530",
                "password": "timber",
                "salt": "HchqrF2h",
                "md5": "455ff5951cf2ceec341dee45889644ba",
                "sha1": "ee3d419ad3a9bf4dcbd2e8134785e27f6c49d2c5",
                "sha256": "4a3168ca4a1fbe61b34593c838f9ec27b78ef48905e8abd72de8f9951d067b88"
            },
            "dob": {
                "date": "1967-11-17T15:06:34.931Z",
                "age": 54
            },
            "registered": {
                "date": "2019-07-29T10:19:42.187Z",
                "age": 3
            },
            "phone": "036-9832-574",
            "cell": "065-5588-069",
            "id": {
                "name": "SID",
                "value": "071749629"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/94.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/94.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/94.jpg"
            },
            "nat": "RS"
        }, {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Cord",
                "last": "Küchler"
            },
            "location": {
                "street": {
                    "number": 9887,
                    "name": "Fasanenweg"
                },
                "city": "Elsterwerda",
                "state": "Rheinland-Pfalz",
                "country": "Germany",
                "postcode": 60614,
                "coordinates": {
                    "latitude": "82.4306",
                    "longitude": "3.9469"
                },
                "timezone": {
                    "offset": "-2:00",
                    "description": "Mid-Atlantic"
                }
            },
            "email": "cord.kuchler@example.com",
            "login": {
                "uuid": "6d7695a2-7afa-43b8-8d5b-c03519b511c4",
                "username": "blackswan573",
                "password": "request",
                "salt": "mY9Q0GTj",
                "md5": "8d8363c21dc34f32b4612d906956315a",
                "sha1": "c8c52c422d74653c50c0a10936c693fb2fb47dc2",
                "sha256": "0358a13c90699a5d72af65846b9dc93bc0604572ccec3de98dd4b821c56c4308"
            },
            "dob": {
                "date": "1995-02-11T03:00:32.965Z",
                "age": 27
            },
            "registered": {
                "date": "2011-07-26T13:00:48.643Z",
                "age": 11
            },
            "phone": "0143-2878577",
            "cell": "0177-1018473",
            "id": {
                "name": "SVNR",
                "value": "54 100295 K 304"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/5.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/5.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/5.jpg"
            },
            "nat": "DE"
        }, {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Scarlett",
                "last": "Williams"
            },
            "location": {
                "street": {
                    "number": 9585,
                    "name": "Dickens Street"
                },
                "city": "Wellington",
                "state": "Waikato",
                "country": "New Zealand",
                "postcode": 76124,
                "coordinates": {
                    "latitude": "-78.7959",
                    "longitude": "-44.0134"
                },
                "timezone": {
                    "offset": "+9:00",
                    "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
                }
            },
            "email": "scarlett.williams@example.com",
            "login": {
                "uuid": "6f20d290-5360-49bc-bf3e-940e51d4fbb8",
                "username": "heavypanda422",
                "password": "strider",
                "salt": "DQd4qhRr",
                "md5": "dddbf0682ef89fd84b33a8164c46dcaf",
                "sha1": "f151d82eb2ef696098dcffbf95b3eb98392f05aa",
                "sha256": "96c9aa561f8fe2dbd13374a32211e62679643cfba59998f669f849f63bf38854"
            },
            "dob": {
                "date": "1967-02-15T09:29:41.178Z",
                "age": 55
            },
            "registered": {
                "date": "2017-08-19T20:42:43.751Z",
                "age": 5
            },
            "phone": "(298)-961-6340",
            "cell": "(346)-327-3110",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/22.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/22.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/22.jpg"
            },
            "nat": "NZ"
        }, {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Bessie",
                "last": "West"
            },
            "location": {
                "street": {
                    "number": 1690,
                    "name": "Elgin St"
                },
                "city": "Geraldton",
                "state": "Australian Capital Territory",
                "country": "Australia",
                "postcode": 1481,
                "coordinates": {
                    "latitude": "-89.5417",
                    "longitude": "148.8186"
                },
                "timezone": {
                    "offset": "+9:00",
                    "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
                }
            },
            "email": "bessie.west@example.com",
            "login": {
                "uuid": "40a1d1dc-3a5f-4dad-92d6-b8f52a3ab8ed",
                "username": "organicwolf799",
                "password": "jane",
                "salt": "3yyxqSj4",
                "md5": "7f5964b9089896662de50575a8e443ab",
                "sha1": "af36337f4328ec84f5f8e2b5264f584c8f69576b",
                "sha256": "c806e1634d671ac9bc2c430e814755cb272bd5a998ca6b0a7fa1417ec2410a48"
            },
            "dob": {
                "date": "1952-07-09T20:44:56.445Z",
                "age": 70
            },
            "registered": {
                "date": "2003-08-04T13:11:33.683Z",
                "age": 19
            },
            "phone": "02-6284-2101",
            "cell": "0423-942-339",
            "id": {
                "name": "TFN",
                "value": "953344181"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/13.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/13.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/13.jpg"
            },
            "nat": "AU"
        }, {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Stanislav",
                "last": "Branković"
            },
            "location": {
                "street": {
                    "number": 684,
                    "name": "Starih Vodeničara"
                },
                "city": "Crna Trava",
                "state": "Srem",
                "country": "Serbia",
                "postcode": 67703,
                "coordinates": {
                    "latitude": "-29.3584",
                    "longitude": "110.9742"
                },
                "timezone": {
                    "offset": "+9:00",
                    "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
                }
            },
            "email": "stanislav.brankovic@example.com",
            "login": {
                "uuid": "f0895cdf-1cb0-4da6-8dff-b4999dd11b70",
                "username": "angrytiger717",
                "password": "stress",
                "salt": "jBIfNdHN",
                "md5": "dd4a2643a7697443d33ee5ea1485df56",
                "sha1": "dbc812bc9f1454a0a9ed2cb0d45d27b393bef530",
                "sha256": "14d8ace252e4db038f2b1cdcbacece1a7b8c2290aa41fc00b08f5ad369d0d6be"
            },
            "dob": {
                "date": "1948-01-02T16:11:18.252Z",
                "age": 74
            },
            "registered": {
                "date": "2013-05-07T01:53:19.913Z",
                "age": 9
            },
            "phone": "019-5374-669",
            "cell": "068-5998-858",
            "id": {
                "name": "SID",
                "value": "918256534"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/32.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/32.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/32.jpg"
            },
            "nat": "RS"
        }, {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Cohen",
                "last": "Lee"
            },
            "location": {
                "street": {
                    "number": 2427,
                    "name": "Symonds Street"
                },
                "city": "Napier",
                "state": "Otago",
                "country": "New Zealand",
                "postcode": 61209,
                "coordinates": {
                    "latitude": "73.6333",
                    "longitude": "40.8083"
                },
                "timezone": {
                    "offset": "-11:00",
                    "description": "Midway Island, Samoa"
                }
            },
            "email": "cohen.lee@example.com",
            "login": {
                "uuid": "ae5b66dd-5c29-4a45-aa41-0a3458a0093a",
                "username": "beautifulduck167",
                "password": "picher",
                "salt": "L1jPqL4W",
                "md5": "93f07fa8831a78a33ff9faaf0d5e42b0",
                "sha1": "827fb98b16014b7ce2c317bf379b054abe56b09f",
                "sha256": "b142980c8b09fba44c30b6e5cddf02f0feb2f8afa595969efc9236dbfb63fab3"
            },
            "dob": {
                "date": "1968-04-10T08:55:33.113Z",
                "age": 54
            },
            "registered": {
                "date": "2010-09-08T22:14:33.169Z",
                "age": 12
            },
            "phone": "(430)-515-8649",
            "cell": "(653)-861-4463",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/80.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/80.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/80.jpg"
            },
            "nat": "NZ"
        }, {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Claudia",
                "last": "Camacho"
            },
            "location": {
                "street": {
                    "number": 6493,
                    "name": "Viaducto Tamayo"
                },
                "city": "Mineral de San Pedro Pozos",
                "state": "Zacatecas",
                "country": "Mexico",
                "postcode": 37228,
                "coordinates": {
                    "latitude": "59.3679",
                    "longitude": "58.2059"
                },
                "timezone": {
                    "offset": "+5:30",
                    "description": "Bombay, Calcutta, Madras, New Delhi"
                }
            },
            "email": "claudia.camacho@example.com",
            "login": {
                "uuid": "6008690b-b7c0-40ab-acbd-8ee71dd76427",
                "username": "purplebird130",
                "password": "riddle",
                "salt": "0YWxAyQx",
                "md5": "f117e68acad4078b9589703bc16c8a59",
                "sha1": "0d858e5af19e87f0d10f090653d481f962dc7fe0",
                "sha256": "6f82b088e5a5d94b83e0f92979c9b18bd87c483eddcf42cf0b64880b0f99874b"
            },
            "dob": {
                "date": "1956-02-08T19:50:57.704Z",
                "age": 66
            },
            "registered": {
                "date": "2004-05-06T09:39:31.689Z",
                "age": 18
            },
            "phone": "(694) 575 0630",
            "cell": "(621) 665 7275",
            "id": {
                "name": "NSS",
                "value": "63 67 10 3354 8"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/14.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/14.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/14.jpg"
            },
            "nat": "MX"
        }, {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Ramon",
                "last": "Nunes"
            },
            "location": {
                "street": {
                    "number": 8512,
                    "name": "Rua Mato Grosso "
                },
                "city": "Manaus",
                "state": "Paraná",
                "country": "Brazil",
                "postcode": 53966,
                "coordinates": {
                    "latitude": "50.2256",
                    "longitude": "-4.3654"
                },
                "timezone": {
                    "offset": "0:00",
                    "description": "Western Europe Time, London, Lisbon, Casablanca"
                }
            },
            "email": "ramon.nunes@example.com",
            "login": {
                "uuid": "56bf9210-399d-4639-a58a-77706bdc7adc",
                "username": "beautifulbird991",
                "password": "bryan",
                "salt": "gLPEKjS5",
                "md5": "fee26d3d3cf25c83e8f30c437b85c65b",
                "sha1": "9e983fa9c1f4d6c28065fb66ea13dda948e9ec89",
                "sha256": "dbcb0b67493465008ac3671270f498c2b21e7bf8f3c7d9a19f9a8a01d5d48e0f"
            },
            "dob": {
                "date": "1974-06-22T03:58:26.825Z",
                "age": 48
            },
            "registered": {
                "date": "2019-12-05T02:50:06.622Z",
                "age": 2
            },
            "phone": "(78) 1300-6594",
            "cell": "(05) 8349-8954",
            "id": {
                "name": "CPF",
                "value": "501.821.461-37"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/62.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/62.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/62.jpg"
            },
            "nat": "BR"
        }, {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Santa",
                "last": "Trakalo"
            },
            "location": {
                "street": {
                    "number": 1137,
                    "name": "Melnichuka"
                },
                "city": "Zmiyiv",
                "state": "Hersonska",
                "country": "Ukraine",
                "postcode": 70489,
                "coordinates": {
                    "latitude": "-16.3615",
                    "longitude": "-64.3580"
                },
                "timezone": {
                    "offset": "+4:00",
                    "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
                }
            },
            "email": "santa.trakalo@example.com",
            "login": {
                "uuid": "f8d65578-0144-48d2-a457-6dfb9fd438c7",
                "username": "brownfrog262",
                "password": "cruise",
                "salt": "67bv4LbO",
                "md5": "ef640356bce16980ea9e2ccf639f4294",
                "sha1": "28fa6a85072159d5407b70a5f588a7c4e46c7512",
                "sha256": "babbbf1c873f5c00688c0747a03427fce6c93b4187642fbf9cd056754dc56de8"
            },
            "dob": {
                "date": "1960-10-12T22:32:13.253Z",
                "age": 62
            },
            "registered": {
                "date": "2011-02-22T05:18:52.133Z",
                "age": 11
            },
            "phone": "(096) K83-8188",
            "cell": "(068) O80-2261",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/51.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/51.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/51.jpg"
            },
            "nat": "UA"
        }, {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Viraj",
                "last": "Banerjee"
            },
            "location": {
                "street": {
                    "number": 4139,
                    "name": "Colaba Causeway"
                },
                "city": "Panipat",
                "state": "Madhya Pradesh",
                "country": "India",
                "postcode": 42276,
                "coordinates": {
                    "latitude": "15.4930",
                    "longitude": "14.2716"
                },
                "timezone": {
                    "offset": "+2:00",
                    "description": "Kaliningrad, South Africa"
                }
            },
            "email": "viraj.banerjee@example.com",
            "login": {
                "uuid": "8dd0ae0b-2b7f-4a3e-b528-5f43a83dfaf8",
                "username": "beautifulkoala740",
                "password": "sublime",
                "salt": "B7XLgZt9",
                "md5": "c9a6f35700ba88b86dcc4b7c977a8a40",
                "sha1": "4093b09beb692879d060f0f67e9f57bb833bc461",
                "sha256": "ecd2ad28cbafbd12f971aa84306e373b4807ba3799b968e68e6185d32259cc08"
            },
            "dob": {
                "date": "1999-01-11T07:26:39.150Z",
                "age": 23
            },
            "registered": {
                "date": "2022-01-09T01:03:22.246Z",
                "age": 0
            },
            "phone": "9185629262",
            "cell": "9734016955",
            "id": {
                "name": "UIDAI",
                "value": "227716284795"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/21.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/21.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/21.jpg"
            },
            "nat": "IN"
        }, {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Angela",
                "last": "Fotland"
            },
            "location": {
                "street": {
                    "number": 9230,
                    "name": "Nonnegata"
                },
                "city": "Fossnes",
                "state": "Troms - Romsa",
                "country": "Norway",
                "postcode": "2686",
                "coordinates": {
                    "latitude": "42.8931",
                    "longitude": "-126.5887"
                },
                "timezone": {
                    "offset": "-3:30",
                    "description": "Newfoundland"
                }
            },
            "email": "angela.fotland@example.com",
            "login": {
                "uuid": "b2e8e701-754c-4bd8-8cc2-12d7c6996cfe",
                "username": "bigdog390",
                "password": "kimber",
                "salt": "9bvvlTGn",
                "md5": "4e6e0b66d5b6ebb29302dfe5280d7ab6",
                "sha1": "aca45c52c923c77a612e71341fde8354445281f9",
                "sha256": "b25e1afb54ff174861ef6f3002b5a24bd942defc5c83ce3914869184c628b787"
            },
            "dob": {
                "date": "1960-03-25T09:15:25.342Z",
                "age": 62
            },
            "registered": {
                "date": "2015-04-02T07:46:25.834Z",
                "age": 7
            },
            "phone": "74112415",
            "cell": "48592262",
            "id": {
                "name": "FN",
                "value": "25036018235"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/27.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/27.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/27.jpg"
            },
            "nat": "NO"
        }, {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "Volya",
                "last": "Gricak"
            },
            "location": {
                "street": {
                    "number": 5085,
                    "name": "Malopishchaniy provulok"
                },
                "city": "Novogrodivka",
                "state": "Volinska",
                "country": "Ukraine",
                "postcode": 74678,
                "coordinates": {
                    "latitude": "70.1374",
                    "longitude": "-52.5389"
                },
                "timezone": {
                    "offset": "+6:00",
                    "description": "Almaty, Dhaka, Colombo"
                }
            },
            "email": "volya.gricak@example.com",
            "login": {
                "uuid": "ef3edb7a-0e41-4b4d-bb56-c34feea2a561",
                "username": "crazyswan588",
                "password": "aaaaaaaa",
                "salt": "2krAv71E",
                "md5": "83f4c41942cdae3d1e5769d54de4d69b",
                "sha1": "6c005405ed37516f9bd839184cf4b0c51b2e4b13",
                "sha256": "7e5f3aaa9b8446acdf87090e78d28a26327e8b09a2f050b9411f36b5610f434a"
            },
            "dob": {
                "date": "1960-07-15T22:15:50.686Z",
                "age": 62
            },
            "registered": {
                "date": "2008-03-14T08:16:59.037Z",
                "age": 14
            },
            "phone": "(098) Q86-6115",
            "cell": "(098) I48-8939",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/2.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/2.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/2.jpg"
            },
            "nat": "UA"
        }, {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Annelie",
                "last": "Bickel"
            },
            "location": {
                "street": {
                    "number": 1415,
                    "name": "Brunnenstraße"
                },
                "city": "Zörbig",
                "state": "Baden-Württemberg",
                "country": "Germany",
                "postcode": 49648,
                "coordinates": {
                    "latitude": "-31.4858",
                    "longitude": "-29.1742"
                },
                "timezone": {
                    "offset": "-2:00",
                    "description": "Mid-Atlantic"
                }
            },
            "email": "annelie.bickel@example.com",
            "login": {
                "uuid": "a53b5121-0e1f-4ae2-861f-e6664b2e79ec",
                "username": "orangeswan685",
                "password": "oliver1",
                "salt": "BtXhbluv",
                "md5": "ffa5369760490059bb223fe93e3ae86c",
                "sha1": "8ed855fd0019d7c310a2552b2bc55a0b4dbee752",
                "sha256": "2d844574075bcebd80e388ecbe95980ec784d842d3aaf9dc6303a5908978860f"
            },
            "dob": {
                "date": "2000-06-20T15:07:49.093Z",
                "age": 22
            },
            "registered": {
                "date": "2021-05-11T10:23:22.674Z",
                "age": 1
            },
            "phone": "0922-8655947",
            "cell": "0171-6770503",
            "id": {
                "name": "SVNR",
                "value": "26 2006100 B 766"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/63.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/63.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/63.jpg"
            },
            "nat": "DE"
        }, {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Miladin",
                "last": "Zekić"
            },
            "location": {
                "street": {
                    "number": 2136,
                    "name": "Zorina"
                },
                "city": "Kruševac",
                "state": "North Bačka",
                "country": "Serbia",
                "postcode": 15115,
                "coordinates": {
                    "latitude": "-65.0354",
                    "longitude": "-155.5078"
                },
                "timezone": {
                    "offset": "-3:30",
                    "description": "Newfoundland"
                }
            },
            "email": "miladin.zekic@example.com",
            "login": {
                "uuid": "2493d742-0236-4f74-85ef-856662d22d7c",
                "username": "organicbutterfly726",
                "password": "tribe",
                "salt": "1O61xcDC",
                "md5": "140e90994888716ea986edc1a8cb3d5c",
                "sha1": "cad3e8c04cf7dba893e568c30a01af7397b58c50",
                "sha256": "09301561efd50bb56b20ab08951a1715bcb9ede97069b1e4688de301a7a24149"
            },
            "dob": {
                "date": "1977-10-23T10:22:56.655Z",
                "age": 45
            },
            "registered": {
                "date": "2006-10-27T16:47:29.868Z",
                "age": 16
            },
            "phone": "027-7149-291",
            "cell": "065-2319-497",
            "id": {
                "name": "SID",
                "value": "969716525"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/88.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/88.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/88.jpg"
            },
            "nat": "RS"
        }, {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Elias",
                "last": "Poulsen"
            },
            "location": {
                "street": {
                    "number": 2971,
                    "name": "Svalevej"
                },
                "city": "Ryslinge",
                "state": "Danmark",
                "country": "Denmark",
                "postcode": 68762,
                "coordinates": {
                    "latitude": "-76.3156",
                    "longitude": "143.0664"
                },
                "timezone": {
                    "offset": "+5:00",
                    "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
                }
            },
            "email": "elias.poulsen@example.com",
            "login": {
                "uuid": "1c3da278-1a08-4ad0-aa08-54e85b7aafe9",
                "username": "angrycat767",
                "password": "beautiful",
                "salt": "28K6Esjh",
                "md5": "a70169c5660b39f20dd792c034943c7e",
                "sha1": "8def2cf01db5634b9c47478e1ccac67510ad426a",
                "sha256": "fc6c2935a09deaf1f505f20e22220b1fb911f2e88b78f5f7fddba078ff206572"
            },
            "dob": {
                "date": "1993-09-05T04:26:00.244Z",
                "age": 29
            },
            "registered": {
                "date": "2021-09-19T22:06:07.467Z",
                "age": 1
            },
            "phone": "02274218",
            "cell": "72780518",
            "id": {
                "name": "CPR",
                "value": "040993-3352"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/50.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/50.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/50.jpg"
            },
            "nat": "DK"
        }, {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Ahmet",
                "last": "Polat"
            },
            "location": {
                "street": {
                    "number": 1108,
                    "name": "Talak Göktepe Cd"
                },
                "city": "Ordu",
                "state": "Yozgat",
                "country": "Turkey",
                "postcode": 74484,
                "coordinates": {
                    "latitude": "80.0494",
                    "longitude": "154.1885"
                },
                "timezone": {
                    "offset": "+4:30",
                    "description": "Kabul"
                }
            },
            "email": "ahmet.polat@example.com",
            "login": {
                "uuid": "cd9ce2d3-8a85-46c0-b613-d7999d2a49ec",
                "username": "goldenzebra252",
                "password": "redskin",
                "salt": "FFGyA9G7",
                "md5": "06375fbe93b797f6614421581905eae3",
                "sha1": "f0b2fa00d66e97b60d3c083e72406c69b21093c7",
                "sha256": "48d22ac679dfa90d4a9d3fb1b126712eeab9f019466cced53cc26bc22a6a311a"
            },
            "dob": {
                "date": "1995-05-28T18:28:09.214Z",
                "age": 27
            },
            "registered": {
                "date": "2007-03-25T05:59:01.967Z",
                "age": 15
            },
            "phone": "(756)-803-8520",
            "cell": "(712)-469-6354",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/66.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/66.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/66.jpg"
            },
            "nat": "TR"
        }, {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Camille",
                "last": "Chan"
            },
            "location": {
                "street": {
                    "number": 1666,
                    "name": "3rd St"
                },
                "city": "South River",
                "state": "Nova Scotia",
                "country": "Canada",
                "postcode": "I0B 7D4",
                "coordinates": {
                    "latitude": "34.4638",
                    "longitude": "-155.8110"
                },
                "timezone": {
                    "offset": "+3:00",
                    "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
                }
            },
            "email": "camille.chan@example.com",
            "login": {
                "uuid": "3166c750-939e-4a7e-984c-9276a6a9328b",
                "username": "purplebird366",
                "password": "fluffy",
                "salt": "SkujaGhd",
                "md5": "80ce5df98f887b901a83ffcf12f282f7",
                "sha1": "a0220eb2ce21abcf6451fe91fea375fd244fbbba",
                "sha256": "ca2f0ce9cd6e681ce4f40d32680c99e52eec756699d7f1bade4bb457bb17e87a"
            },
            "dob": {
                "date": "1980-10-06T22:05:48.956Z",
                "age": 42
            },
            "registered": {
                "date": "2018-08-07T10:21:56.198Z",
                "age": 4
            },
            "phone": "X48 T45-6623",
            "cell": "N79 T58-7261",
            "id": {
                "name": "SIN",
                "value": "680695855"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/63.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/63.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/63.jpg"
            },
            "nat": "CA"
        }, {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Eloane",
                "last": "Gaillard"
            },
            "location": {
                "street": {
                    "number": 7385,
                    "name": "Rue André-Gide"
                },
                "city": "Aulnay-sous-Bois",
                "state": "Hautes-Pyrénées",
                "country": "France",
                "postcode": 77702,
                "coordinates": {
                    "latitude": "26.8835",
                    "longitude": "174.3741"
                },
                "timezone": {
                    "offset": "-6:00",
                    "description": "Central Time (US & Canada), Mexico City"
                }
            },
            "email": "eloane.gaillard@example.com",
            "login": {
                "uuid": "8f4fdc66-6a6c-4910-b12e-78b90a5041aa",
                "username": "blackswan708",
                "password": "supreme",
                "salt": "vXIZH8dl",
                "md5": "d94781dc7d6b9c86605ad51d254fc80a",
                "sha1": "d1b201ccd80d9aea4b8dc8e36b1cbd0f0a66ce18",
                "sha256": "98689d5a9a80542985f08eafd27e92909d12a6aafb4e2df55f3630e38ecd0d03"
            },
            "dob": {
                "date": "1957-12-26T18:40:33.410Z",
                "age": 64
            },
            "registered": {
                "date": "2004-05-23T12:38:38.838Z",
                "age": 18
            },
            "phone": "03-49-65-17-60",
            "cell": "06-38-54-34-85",
            "id": {
                "name": "INSEE",
                "value": "2571102699987 07"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/33.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/33.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/33.jpg"
            },
            "nat": "FR"
        }, {
            "gender": "female",
            "name": {
                "title": "Madame",
                "first": "Carol",
                "last": "Dupont"
            },
            "location": {
                "street": {
                    "number": 542,
                    "name": "Rue du Bât-D'Argent"
                },
                "city": "Ponte Tresa",
                "state": "Neuchâtel",
                "country": "Switzerland",
                "postcode": 3614,
                "coordinates": {
                    "latitude": "2.6975",
                    "longitude": "86.1665"
                },
                "timezone": {
                    "offset": "+9:30",
                    "description": "Adelaide, Darwin"
                }
            },
            "email": "carol.dupont@example.com",
            "login": {
                "uuid": "4c8a5ab2-0648-46d1-8cb7-d687719a792b",
                "username": "happyleopard836",
                "password": "arlene",
                "salt": "F86FKfmt",
                "md5": "e5cae7b33d41896ab2dd132e12308d91",
                "sha1": "a7c3c6c78380f97d7ab2cafe0ef448bc5401f263",
                "sha256": "ad55f76aba96dd84e15fb50a5c1be29083b454594055ed0111ff3c7c2e969af9"
            },
            "dob": {
                "date": "1997-03-18T06:54:45.902Z",
                "age": 25
            },
            "registered": {
                "date": "2016-04-05T09:23:56.134Z",
                "age": 6
            },
            "phone": "075 375 77 97",
            "cell": "078 215 82 49",
            "id": {
                "name": "AVS",
                "value": "756.1464.3048.19"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/89.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/89.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/89.jpg"
            },
            "nat": "CH"
        }, {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Mathys",
                "last": "Menard"
            },
            "location": {
                "street": {
                    "number": 2676,
                    "name": "Place de la Mairie"
                },
                "city": "Besançon",
                "state": "Haute-Loire",
                "country": "France",
                "postcode": 55454,
                "coordinates": {
                    "latitude": "73.4414",
                    "longitude": "-115.8102"
                },
                "timezone": {
                    "offset": "+11:00",
                    "description": "Magadan, Solomon Islands, New Caledonia"
                }
            },
            "email": "mathys.menard@example.com",
            "login": {
                "uuid": "10f8e9cd-2400-4a8e-a09d-46ede96911d3",
                "username": "brownswan187",
                "password": "pointer",
                "salt": "PCFZ2po9",
                "md5": "232041a44cc6267b880900454cdd4b59",
                "sha1": "e828fc5a462f1c607cdf78a84fd5c3d7e13bcc3a",
                "sha256": "4e0a5824d8d7e4ce462d1f72570716f6f1afd40fb091488b30a988629351eebf"
            },
            "dob": {
                "date": "1997-08-06T06:54:51.631Z",
                "age": 25
            },
            "registered": {
                "date": "2002-07-15T12:48:54.093Z",
                "age": 20
            },
            "phone": "03-87-60-82-42",
            "cell": "06-15-46-00-30",
            "id": {
                "name": "INSEE",
                "value": "1970732765284 20"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/84.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/84.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/84.jpg"
            },
            "nat": "FR"
        }, {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Ljuba",
                "last": "Orlić"
            },
            "location": {
                "street": {
                    "number": 4011,
                    "name": "Belička"
                },
                "city": "Pančevo",
                "state": "South Banat",
                "country": "Serbia",
                "postcode": 50131,
                "coordinates": {
                    "latitude": "-63.7343",
                    "longitude": "-26.5528"
                },
                "timezone": {
                    "offset": "+5:00",
                    "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
                }
            },
            "email": "ljuba.orlic@example.com",
            "login": {
                "uuid": "a26cedcd-ba19-45da-af05-e90a43524787",
                "username": "goldenpanda794",
                "password": "bigred",
                "salt": "EF2Qeoe9",
                "md5": "c7a663907d820b380bb66ce1a220b45e",
                "sha1": "c3315cc0498c733c6d5eefec9607c354af3ad301",
                "sha256": "eeeca5f1fa8cad7b77946cd5a575ff05c6d1e6b03351f758587ba32e54fcf9d3"
            },
            "dob": {
                "date": "1991-06-08T19:39:13.518Z",
                "age": 31
            },
            "registered": {
                "date": "2008-12-18T02:31:54.561Z",
                "age": 13
            },
            "phone": "013-5148-659",
            "cell": "061-7008-544",
            "id": {
                "name": "SID",
                "value": "823138613"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/22.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/22.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/22.jpg"
            },
            "nat": "RS"
        }, {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Maanas",
                "last": "Bansal"
            },
            "location": {
                "street": {
                    "number": 4770,
                    "name": "MG Rd Bangalore"
                },
                "city": "Miryalaguda",
                "state": "Daman and Diu",
                "country": "India",
                "postcode": 67462,
                "coordinates": {
                    "latitude": "-15.2515",
                    "longitude": "108.5299"
                },
                "timezone": {
                    "offset": "-9:00",
                    "description": "Alaska"
                }
            },
            "email": "maanas.bansal@example.com",
            "login": {
                "uuid": "5e2dd49d-033b-4296-b186-3b856fc91d5f",
                "username": "organiclion490",
                "password": "rider",
                "salt": "OMPSrsTU",
                "md5": "dca4302f140d1e497620520882ddeac4",
                "sha1": "35502886b0bc59187db61ac7416658ae815ef754",
                "sha256": "5e11bc6eae396f976d1afc8a5a27f0f1469a1381b80f4e2b46e158afa133218c"
            },
            "dob": {
                "date": "1970-06-10T17:00:39.224Z",
                "age": 52
            },
            "registered": {
                "date": "2008-12-01T04:38:09.600Z",
                "age": 13
            },
            "phone": "8781302157",
            "cell": "8207862991",
            "id": {
                "name": "UIDAI",
                "value": "366912017655"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/23.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/23.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/23.jpg"
            },
            "nat": "IN"
        }, {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Vadim",
                "last": "Dlugosh"
            },
            "location": {
                "street": {
                    "number": 5299,
                    "name": "Zholudieva"
                },
                "city": "Brovari",
                "state": "Zakarpatska",
                "country": "Ukraine",
                "postcode": 12345,
                "coordinates": {
                    "latitude": "66.1070",
                    "longitude": "-149.2031"
                },
                "timezone": {
                    "offset": "+10:00",
                    "description": "Eastern Australia, Guam, Vladivostok"
                }
            },
            "email": "vadim.dlugosh@example.com",
            "login": {
                "uuid": "7bff3f2d-8a4f-43a3-8b57-119e9833bb29",
                "username": "greengoose500",
                "password": "lipstick",
                "salt": "SbAozPl3",
                "md5": "a47a4d38ec5e579c7693d6c3ee79cd1e",
                "sha1": "0e1f1549d2bf13a8a0733ddba02a8c2baf93f308",
                "sha256": "737b42bb712109aabe9a0902aa53e21a1d22ec5c871406d0d3cbecff7d431cb4"
            },
            "dob": {
                "date": "1994-03-26T10:20:02.215Z",
                "age": 28
            },
            "registered": {
                "date": "2020-02-29T19:49:21.526Z",
                "age": 2
            },
            "phone": "(068) G35-9276",
            "cell": "(097) M87-5067",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/60.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/60.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/60.jpg"
            },
            "nat": "UA"
        }, {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Afşar",
                "last": "Kuday"
            },
            "location": {
                "street": {
                    "number": 6696,
                    "name": "Fatih Sultan Mehmet Cd"
                },
                "city": "Diyarbakır",
                "state": "Giresun",
                "country": "Turkey",
                "postcode": 56638,
                "coordinates": {
                    "latitude": "-41.3252",
                    "longitude": "133.4779"
                },
                "timezone": {
                    "offset": "+5:00",
                    "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
                }
            },
            "email": "afsar.kuday@example.com",
            "login": {
                "uuid": "7be9bb13-a4e9-43d2-b055-3b8381254a4c",
                "username": "ticklishmeercat404",
                "password": "vanguard",
                "salt": "EM8DbQy4",
                "md5": "1e22821ca4c4ab1b66142443a559054f",
                "sha1": "bb87fe33b33d68a79b08d7dc982003ad99e36fe1",
                "sha256": "36be153a896298b9998508430ef737538d7be4ff2ca0bb2f2809bec14727aeb1"
            },
            "dob": {
                "date": "1953-05-04T17:33:37.574Z",
                "age": 69
            },
            "registered": {
                "date": "2005-06-18T05:56:45.059Z",
                "age": 17
            },
            "phone": "(544)-190-6315",
            "cell": "(098)-942-7368",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/67.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/67.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/67.jpg"
            },
            "nat": "TR"
        }, {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Borivoje",
                "last": "Stojković"
            },
            "location": {
                "street": {
                    "number": 8980,
                    "name": "Milana Tucakovića"
                },
                "city": "Brus",
                "state": "Pirot",
                "country": "Serbia",
                "postcode": 17332,
                "coordinates": {
                    "latitude": "-17.8595",
                    "longitude": "-108.1379"
                },
                "timezone": {
                    "offset": "+9:30",
                    "description": "Adelaide, Darwin"
                }
            },
            "email": "borivoje.stojkovic@example.com",
            "login": {
                "uuid": "237291d8-f33a-43a4-ab33-3c8891bd2465",
                "username": "bigfrog168",
                "password": "8j4ye3uz",
                "salt": "fxWT1W3B",
                "md5": "b3f74ee4120abd7108dc293b72b0e26f",
                "sha1": "5e0f1528d5dcd9e60a7b3b1b56ea02d0194d7bb5",
                "sha256": "6bce7cf71f4932fe42d7a5e2887620e705606b5722298f72e9a7e4bddf25415d"
            },
            "dob": {
                "date": "1964-08-02T16:46:32.074Z",
                "age": 58
            },
            "registered": {
                "date": "2020-08-16T07:52:10.498Z",
                "age": 2
            },
            "phone": "021-5949-240",
            "cell": "062-7996-096",
            "id": {
                "name": "SID",
                "value": "145537770"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/42.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/42.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/42.jpg"
            },
            "nat": "RS"
        }, {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Emmanuel",
                "last": "Zhabotinskiy"
            },
            "location": {
                "street": {
                    "number": 7710,
                    "name": "Kozlovskogo"
                },
                "city": "Yuzhnoukrayinsk",
                "state": "Odeska",
                "country": "Ukraine",
                "postcode": 68933,
                "coordinates": {
                    "latitude": "79.1086",
                    "longitude": "124.8955"
                },
                "timezone": {
                    "offset": "+4:30",
                    "description": "Kabul"
                }
            },
            "email": "emmanuel.zhabotinskiy@example.com",
            "login": {
                "uuid": "714d8440-dad9-4a22-9c57-dde6f3910c52",
                "username": "sadbutterfly484",
                "password": "baba",
                "salt": "0geE4KI9",
                "md5": "b66d5bf84cc6212f2423f7b4568696fd",
                "sha1": "7210c6b3024954294b71677b710c6095f19a2e75",
                "sha256": "9c465d9754180a8380dc419581f1c234d794c4851e60c5ee91ff71902864fc51"
            },
            "dob": {
                "date": "1962-03-08T03:59:46.819Z",
                "age": 60
            },
            "registered": {
                "date": "2011-11-19T05:01:15.904Z",
                "age": 10
            },
            "phone": "(098) K32-1946",
            "cell": "(097) Q02-8465",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/51.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/51.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/51.jpg"
            },
            "nat": "UA"
        }, {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Suzana",
                "last": "Nađ"
            },
            "location": {
                "street": {
                    "number": 5489,
                    "name": "Nikole Nikolajevića"
                },
                "city": "Raška",
                "state": "Toplica",
                "country": "Serbia",
                "postcode": 50952,
                "coordinates": {
                    "latitude": "-57.6433",
                    "longitude": "179.0265"
                },
                "timezone": {
                    "offset": "-4:00",
                    "description": "Atlantic Time (Canada), Caracas, La Paz"
                }
            },
            "email": "suzana.nad@example.com",
            "login": {
                "uuid": "0775c102-55a9-4daf-baf3-4ca88f7b2abc",
                "username": "whitewolf921",
                "password": "angelo",
                "salt": "CfZaaFA3",
                "md5": "ae79419aad91570602806446bd4ec225",
                "sha1": "c3a2833d7ebfe3d838e11219604630b6ebb471cf",
                "sha256": "ca04e19875b1ec5ad03954cf653f479284ac6dd996ce0c185346225a54d3897d"
            },
            "dob": {
                "date": "1956-11-09T23:10:13.204Z",
                "age": 65
            },
            "registered": {
                "date": "2006-06-17T07:25:22.245Z",
                "age": 16
            },
            "phone": "031-4991-087",
            "cell": "065-2295-700",
            "id": {
                "name": "SID",
                "value": "786735129"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/29.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/29.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/29.jpg"
            },
            "nat": "RS"
        }, {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Salvador",
                "last": "Rodriquez"
            },
            "location": {
                "street": {
                    "number": 9478,
                    "name": "Smokey Ln"
                },
                "city": "Rancho Cucamonga",
                "state": "Colorado",
                "country": "United States",
                "postcode": 17160,
                "coordinates": {
                    "latitude": "-84.4935",
                    "longitude": "28.0645"
                },
                "timezone": {
                    "offset": "+2:00",
                    "description": "Kaliningrad, South Africa"
                }
            },
            "email": "salvador.rodriquez@example.com",
            "login": {
                "uuid": "0448ad27-f43f-4670-9aed-6077e91b93e7",
                "username": "happyleopard834",
                "password": "soulmate",
                "salt": "NOIspR06",
                "md5": "c97cd220b1cffa22bba20d9d56412941",
                "sha1": "563fce3996cbcd836a0a7e6524016ff8237795fa",
                "sha256": "7df17ad1a23254ffb82e3c78fc6179ea4f0915b67243286cbd617063caecfa45"
            },
            "dob": {
                "date": "1977-09-20T09:13:53.816Z",
                "age": 45
            },
            "registered": {
                "date": "2018-06-17T01:41:46.602Z",
                "age": 4
            },
            "phone": "(373) 585-1898",
            "cell": "(572) 229-5816",
            "id": {
                "name": "SSN",
                "value": "539-53-9508"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/33.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/33.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/33.jpg"
            },
            "nat": "US"
        }, {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "هستی",
                "last": "محمدخان"
            },
            "location": {
                "street": {
                    "number": 7038,
                    "name": "شورا"
                },
                "city": "ساوه",
                "state": "یزد",
                "country": "Iran",
                "postcode": 41877,
                "coordinates": {
                    "latitude": "40.6517",
                    "longitude": "74.3212"
                },
                "timezone": {
                    "offset": "+9:00",
                    "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
                }
            },
            "email": "hsty.mhmdkhn@example.com",
            "login": {
                "uuid": "17e4f184-51f6-4fbf-afc2-a838424da4ca",
                "username": "heavybird277",
                "password": "project",
                "salt": "a1UtoHIE",
                "md5": "d0bd7b4d8afbc7b1d0137cb2ee2d76ab",
                "sha1": "f19f395503114f79fd761f77a9593b71cb292617",
                "sha256": "cdc990d4e9684f33e2f3aa757658a9e1b2a94177aa50f9de44fe859fd422d82f"
            },
            "dob": {
                "date": "1993-06-16T17:22:34.011Z",
                "age": 29
            },
            "registered": {
                "date": "2004-07-21T16:36:09.623Z",
                "age": 18
            },
            "phone": "044-22187449",
            "cell": "0952-431-2015",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/76.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/76.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/76.jpg"
            },
            "nat": "IR"
        }, {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Loretta",
                "last": "Daniels"
            },
            "location": {
                "street": {
                    "number": 6535,
                    "name": "Bollinger Rd"
                },
                "city": "Geelong",
                "state": "Australian Capital Territory",
                "country": "Australia",
                "postcode": 2241,
                "coordinates": {
                    "latitude": "-83.4197",
                    "longitude": "55.0483"
                },
                "timezone": {
                    "offset": "+3:30",
                    "description": "Tehran"
                }
            },
            "email": "loretta.daniels@example.com",
            "login": {
                "uuid": "df9e7421-202b-4df8-843b-742dc4bd092d",
                "username": "crazyleopard736",
                "password": "414141",
                "salt": "gcmPuPdi",
                "md5": "4351c1f801c68d2aed6dc554affca0f7",
                "sha1": "8c53953c7ef759aa085f23fc5497a974b0f2e256",
                "sha256": "91e0479f09a32a0a513aec19f71ac894d059b70c9d3d95e1a7176acb71c8486b"
            },
            "dob": {
                "date": "1963-02-01T05:25:56.974Z",
                "age": 59
            },
            "registered": {
                "date": "2013-11-18T16:03:51.736Z",
                "age": 8
            },
            "phone": "05-0937-7534",
            "cell": "0430-014-819",
            "id": {
                "name": "TFN",
                "value": "226006825"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/38.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/38.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/38.jpg"
            },
            "nat": "AU"
        }, {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Deniz",
                "last": "Taşlı"
            },
            "location": {
                "street": {
                    "number": 6935,
                    "name": "Talak Göktepe Cd"
                },
                "city": "Manisa",
                "state": "Bingöl",
                "country": "Turkey",
                "postcode": 21989,
                "coordinates": {
                    "latitude": "-35.4638",
                    "longitude": "-36.2132"
                },
                "timezone": {
                    "offset": "-8:00",
                    "description": "Pacific Time (US & Canada)"
                }
            },
            "email": "deniz.tasli@example.com",
            "login": {
                "uuid": "83d70aa1-4adb-4888-a6f8-fb5f2e3ab9be",
                "username": "yellowpeacock330",
                "password": "pass123",
                "salt": "B7p3E6Co",
                "md5": "bbb4b62432e83f4f07fd0be153840fd7",
                "sha1": "7b208168c0ae448fcce92e28f93541d2360e4760",
                "sha256": "ff1d501f7035613e55006c216829bd33101ac8e795ed716cff58bf93a5563d3d"
            },
            "dob": {
                "date": "1993-10-23T19:17:52.853Z",
                "age": 29
            },
            "registered": {
                "date": "2016-08-05T05:41:33.282Z",
                "age": 6
            },
            "phone": "(940)-743-6633",
            "cell": "(984)-139-0606",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/19.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/19.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/19.jpg"
            },
            "nat": "TR"
        }, {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Felix",
                "last": "Jensen"
            },
            "location": {
                "street": {
                    "number": 6094,
                    "name": "Korsgade"
                },
                "city": "København S",
                "state": "Nordjylland",
                "country": "Denmark",
                "postcode": 90741,
                "coordinates": {
                    "latitude": "-79.0158",
                    "longitude": "-38.8928"
                },
                "timezone": {
                    "offset": "+5:45",
                    "description": "Kathmandu"
                }
            },
            "email": "felix.jensen@example.com",
            "login": {
                "uuid": "d941c236-af96-4871-942e-821c8ab25208",
                "username": "crazysnake922",
                "password": "frederic",
                "salt": "vcmkE86z",
                "md5": "d7bdc10b5c7eee222836d158ab8e8b14",
                "sha1": "37038a8114a39ba605f9c72849c3aad2eeb921ee",
                "sha256": "d42ff6bbccc2a837b707384c53707bf07bc48dd575f0d3b9a0dab227d0f0220f"
            },
            "dob": {
                "date": "1966-10-11T12:25:26.976Z",
                "age": 56
            },
            "registered": {
                "date": "2015-01-24T20:34:14.419Z",
                "age": 7
            },
            "phone": "83036311",
            "cell": "33897706",
            "id": {
                "name": "CPR",
                "value": "111066-4355"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/20.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/20.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/20.jpg"
            },
            "nat": "DK"
        }, {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Oona",
                "last": "Niska"
            },
            "location": {
                "street": {
                    "number": 9349,
                    "name": "Mechelininkatu"
                },
                "city": "Karvia",
                "state": "Central Ostrobothnia",
                "country": "Finland",
                "postcode": 87109,
                "coordinates": {
                    "latitude": "-67.9732",
                    "longitude": "-161.9855"
                },
                "timezone": {
                    "offset": "+5:00",
                    "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
                }
            },
            "email": "oona.niska@example.com",
            "login": {
                "uuid": "5a14acae-7cc7-48aa-858b-fb9eb4b17a11",
                "username": "brownfrog527",
                "password": "bessie",
                "salt": "A8ibgkZj",
                "md5": "e96318844562971d9e22e0a852ca9c38",
                "sha1": "972b269903a262a0c78ebcd0bb9176fb44256d09",
                "sha256": "28b026ae643579a10677b31d6d70422877a547d32acf50df83f8d6706dfeae8f"
            },
            "dob": {
                "date": "1982-08-12T11:04:02.250Z",
                "age": 40
            },
            "registered": {
                "date": "2003-11-22T20:06:32.225Z",
                "age": 18
            },
            "phone": "04-674-293",
            "cell": "042-969-92-44",
            "id": {
                "name": "HETU",
                "value": "NaNNA392undefined"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/48.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/48.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/48.jpg"
            },
            "nat": "FI"
        }, {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Mathis",
                "last": "Nicolas"
            },
            "location": {
                "street": {
                    "number": 1755,
                    "name": "Rue du Château"
                },
                "city": "Amiens",
                "state": "Meuse",
                "country": "France",
                "postcode": 15583,
                "coordinates": {
                    "latitude": "78.8444",
                    "longitude": "20.5421"
                },
                "timezone": {
                    "offset": "+5:30",
                    "description": "Bombay, Calcutta, Madras, New Delhi"
                }
            },
            "email": "mathis.nicolas@example.com",
            "login": {
                "uuid": "da9ad1af-8d99-4500-8166-e4563b617c5c",
                "username": "redbird294",
                "password": "ghost",
                "salt": "dEuL8tsx",
                "md5": "d14b941ca38c640c8313642142bdb6fe",
                "sha1": "7a5a3e98f25fba456e5d9e874719e2ff72ebb3cb",
                "sha256": "ccd4b40626a4c319bb540b63e2ea39ed516c7b4b7e96b3a375489660eb2d0df4"
            },
            "dob": {
                "date": "1947-03-10T22:20:39.847Z",
                "age": 75
            },
            "registered": {
                "date": "2016-10-05T15:58:01.133Z",
                "age": 6
            },
            "phone": "01-62-41-31-02",
            "cell": "06-97-58-53-87",
            "id": {
                "name": "INSEE",
                "value": "1470209970566 71"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/69.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/69.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/69.jpg"
            },
            "nat": "FR"
        }, {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Magdalena",
                "last": "Tripković"
            },
            "location": {
                "street": {
                    "number": 7958,
                    "name": "Brainska"
                },
                "city": "Doljevac",
                "state": "Toplica",
                "country": "Serbia",
                "postcode": 70306,
                "coordinates": {
                    "latitude": "11.0393",
                    "longitude": "117.8609"
                },
                "timezone": {
                    "offset": "+1:00",
                    "description": "Brussels, Copenhagen, Madrid, Paris"
                }
            },
            "email": "magdalena.tripkovic@example.com",
            "login": {
                "uuid": "8f13d2da-3156-47ea-82bb-05d9757d803a",
                "username": "goldenmeercat323",
                "password": "richards",
                "salt": "mQ4oUolD",
                "md5": "7f77766be580eee034a4bf81a27b4297",
                "sha1": "eb645185528545aaef09e1f047d7876a41197b0a",
                "sha256": "f344b6b364535a53f73785dc6cd0ff034c1146ff7b972a3de13e8469b68e7500"
            },
            "dob": {
                "date": "1973-12-12T20:19:25.678Z",
                "age": 48
            },
            "registered": {
                "date": "2007-12-20T11:06:59.878Z",
                "age": 14
            },
            "phone": "036-4041-305",
            "cell": "061-8631-538",
            "id": {
                "name": "SID",
                "value": "292159069"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/40.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/40.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/40.jpg"
            },
            "nat": "RS"
        }, {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Magnus",
                "last": "Olsen"
            },
            "location": {
                "street": {
                    "number": 8686,
                    "name": "Rødtjørnevej"
                },
                "city": "Nimtofte",
                "state": "Hovedstaden",
                "country": "Denmark",
                "postcode": 23880,
                "coordinates": {
                    "latitude": "74.4284",
                    "longitude": "162.8506"
                },
                "timezone": {
                    "offset": "+4:00",
                    "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
                }
            },
            "email": "magnus.olsen@example.com",
            "login": {
                "uuid": "ecc2923e-e0ca-4758-be89-135168debe84",
                "username": "beautifulelephant341",
                "password": "letsgo",
                "salt": "snS6OW46",
                "md5": "95d5ffff760fbc187a7ec40413f9e22a",
                "sha1": "4120327e778c38fec330de675afaddf815f793cf",
                "sha256": "30a3eeb0169417c705cea9384d4e9009c006a9edcafe96c76fda71d53fd765ec"
            },
            "dob": {
                "date": "1963-01-25T18:33:20.111Z",
                "age": 59
            },
            "registered": {
                "date": "2016-12-12T04:19:00.392Z",
                "age": 5
            },
            "phone": "87558523",
            "cell": "72353569",
            "id": {
                "name": "CPR",
                "value": "250163-8217"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/74.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/74.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/74.jpg"
            },
            "nat": "DK"
        }, {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Harper",
                "last": "Lopez"
            },
            "location": {
                "street": {
                    "number": 6291,
                    "name": "Samaritan Dr"
                },
                "city": "Scottsdale",
                "state": "South Dakota",
                "country": "United States",
                "postcode": 93971,
                "coordinates": {
                    "latitude": "-84.6803",
                    "longitude": "-50.2358"
                },
                "timezone": {
                    "offset": "+5:45",
                    "description": "Kathmandu"
                }
            },
            "email": "harper.lopez@example.com",
            "login": {
                "uuid": "b9ccebc3-28e4-47f2-a965-07e2f64aaf44",
                "username": "redfish646",
                "password": "bearcat",
                "salt": "XqlnqMNg",
                "md5": "9e323dd20334a26b5a5007f2905ecb7e",
                "sha1": "f9f50bcafb38bd08bf6d806ac0976f8ba06cdf0b",
                "sha256": "9b215eb32d4a7b2f009c0a530cfb2660c262cd1b77298b1f61a77f21c3080b89"
            },
            "dob": {
                "date": "1975-12-13T00:37:26.166Z",
                "age": 46
            },
            "registered": {
                "date": "2009-04-16T08:28:36.171Z",
                "age": 13
            },
            "phone": "(255) 668-1360",
            "cell": "(663) 347-8497",
            "id": {
                "name": "SSN",
                "value": "607-21-3075"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/49.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/49.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/49.jpg"
            },
            "nat": "US"
        }],
        "info": {
            "seed": "1de6a230d73f85f5",
            "results": 50,
            "page": 1,
            "version": "1.4"
        }
    };

    public static getAllUsers(): ResultsEntity[] | undefined {
        return this.userEntity.results;
    }
}