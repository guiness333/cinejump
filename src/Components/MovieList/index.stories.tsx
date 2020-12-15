import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react/types-6-0';
import {MovieRow} from './index';
let movies = [{
      "adult": false,
      "backdrop": "/jeAQdDX9nguP6YOX6QSWKDPkbBo.jpg",
      "genre_ids": [
        28,
        14,
        878
      ],
      "id": 590706,
      "original_language": "en",
      "originalTitle": "Jiu Jitsu",
      "overview": "Every six years, an ancient order of jiu-jitsu fighters joins forces to battle a vicious race of alien invaders. But when a celebrated war hero goes down in defeat, the fate of the planet and mankind hangs in the balance.",
      "popularity": 2179.557,
      "poster": "/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg",
      "release_date": "2020-11-20",
      "title": "Jiu Jitsu",
      "video": false,
      "vote_average": 5.8,
      "vote_count": 153
    },
    {
      "adult": false,
      "backdrop": "/lIE7kfdLBRd0KENNtOaIqPPWNqh.jpg",
      "genre_ids": [
        27,
        18,
        14
      ],
      "id": 590995,
      "original_language": "en",
      "originalTitle": "The Craft: Legacy",
      "overview": "An eclectic foursome of aspiring teenage witches get more than they bargained for as they lean into their newfound powers.",
      "popularity": 2150.808,
      "poster": "/lhMIra0pqWNuD6CIXoTmGwZ0EBS.jpg",
      "release_date": "2020-10-28",
      "title": "The Craft: Legacy",
      "video": false,
      "vote_average": 6.2,
      "vote_count": 166
    },
    {
      "adult": false,
      "backdrop": "/wk58aoyWpMTVkKkdjw889XfWGdL.jpg",
      "genre_ids": [
        53,
        80,
        9648
      ],
      "id": 646593,
      "original_language": "en",
      "originalTitle": "Wander",
      "overview": "After getting hired to probe a suspicious death in the small town of Wander, a mentally unstable private investigator becomes convinced the case is linked to the same 'conspiracy cover up' that caused the death of his daughter.",
      "popularity": 1716.891,
      "poster": "/2AwPvNHphpZBJDqjZKVuMAbvS0v.jpg",
      "release_date": "2020-12-04",
      "title": "Wander",
      "video": false,
      "vote_average": 5.5,
      "vote_count": 21
    },
    {
      "adult": false,
      "backdrop": "/ckfwfLkl0CkafTasoRw5FILhZAS.jpg",
      "genre_ids": [
        28,
        35,
        14
      ],
      "id": 602211,
      "original_language": "en",
      "originalTitle": "Fatman",
      "overview": "A rowdy, unorthodox Santa Claus is fighting to save his declining business. Meanwhile, Billy, a neglected and precocious 12 year old, hires a hit man to kill Santa after receiving a lump of coal in his stocking.",
      "popularity": 1572.746,
      "poster": "/4n8QNNdk4BOX9Dslfbz5Dy6j1HK.jpg",
      "release_date": "2020-11-13",
      "title": "Fatman",
      "video": false,
      "vote_average": 5.9,
      "vote_count": 166
    },
    {
        "adult": false,
        "backdrop_path": "/wzJRB4MKi3yK138bJyuL9nx47y6.jpg",
        "genre_ids": [
          28,
          53,
          878
        ],
        "id": 577922,
        "original_language": "en",
        "originalTitle": "Tenet",
        "overview": "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
        "popularity": 1134.548,
        "poster": "/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
        "release_date": "2020-08-22",
        "title": "Tenet",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 2939
      },
      {
        "adult": false,
        "backdrop_path": "/zKv7KF0pH9ASv2uGgTvTylMlxQn.jpg",
        "genre_ids": [
          37
        ],
        "id": 729648,
        "original_language": "en",
        "originalTitle": "The Dalton Gang",
        "overview": "When their brother Frank is killed by an outlaw, brothers Bob Dalton, Emmett Dalton and Gray Dalton join their local sheriff's department. When they are cheated by the law, they turn to crime, robbing trains and anything else they can steal from over the course of two years in the early 1890's. Trying to out do Jesse James, they attempt to rob two banks at once in October of 1892, and things get ugly",
        "popularity": 1083.298,
        "poster": "/6OeGqp18oZucUGziMIRNhLouZ75.jpg",
        "release_date": "2020-11-02",
        "title": "The Dalton Gang",
        "video": false,
        "vote_average": 4.4,
        "vote_count": 38
      },
      {
        "adult": false,
        "backdrop_path": "/tYkMtYPNpUdLdzGDUTC5atyMh9X.jpg",
        "genre_ids": [
          28,
          53,
          80,
          18
        ],
        "id": 553604,
        "original_language": "en",
        "originalTitle": "Honest Thief",
        "overview": "A bank robber tries to turn himself in because he's falling in love and wants to live an honest life...but when he realizes the Feds are more corrupt than him, he must fight back to clear his name.",
        "popularity": 1004.724,
        "poster": "/zeD4PabP6099gpE0STWJrJrCBCs.jpg",
        "release_date": "2020-09-03",
        "title": "Honest Thief",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 181
      },
      {
        "adult": false,
        "backdrop_path": "/gnf4Cb2rms69QbCnGFJyqwBWsxv.jpg",
        "genre_ids": [
          53,
          28,
          18,
          80
        ],
        "id": 671039,
        "original_language": "fr",
        "originalTitle": "Bronx",
        "overview": "Caught in the crosshairs of police corruption and Marseille’s warring gangs, a loyal cop must protect his squad by taking matters into his own hands.",
        "popularity": 863.744,
        "poster": "/9HT9982bzgN5on1sLRmc1GMn6ZC.jpg",
        "release_date": "2020-10-30",
        "title": "Rogue City",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 290
      }];
let favoritos = [
    {
      "adult": false,
      "backdrop": "/jeAQdDX9nguP6YOX6QSWKDPkbBo.jpg",
      "genre_ids": [
        28,
        14,
        878
      ],
      "id": 590706,
      "original_language": "en",
      "originalTitle": "Jiu Jitsu",
      "overview": "Every six years, an ancient order of jiu-jitsu fighters joins forces to battle a vicious race of alien invaders. But when a celebrated war hero goes down in defeat, the fate of the planet and mankind hangs in the balance.",
      "popularity": 2179.557,
      "poster": "/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg",
      "release_date": "2020-11-20",
      "title": "Jiu Jitsu",
      "video": false,
      "vote_average": 5.8,
      "vote_count": 153
    },
    {
      "adult": false,
      "backdrop": "/ckfwfLkl0CkafTasoRw5FILhZAS.jpg",
      "genre_ids": [
        28,
        35,
        14
      ],
      "id": 602211,
      "original_language": "en",
      "originalTitle": "Fatman",
      "overview": "A rowdy, unorthodox Santa Claus is fighting to save his declining business. Meanwhile, Billy, a neglected and precocious 12 year old, hires a hit man to kill Santa after receiving a lump of coal in his stocking.",
      "popularity": 1572.746,
      "poster": "/4n8QNNdk4BOX9Dslfbz5Dy6j1HK.jpg",
      "release_date": "2020-11-13",
      "title": "Fatman",
      "video": false,
      "vote_average": 5.9,
      "vote_count": 166
    },
      {
        "adult": false,
        "backdrop_path": "/zKv7KF0pH9ASv2uGgTvTylMlxQn.jpg",
        "genre_ids": [
          37
        ],
        "id": 729648,
        "original_language": "en",
        "originalTitle": "The Dalton Gang",
        "overview": "When their brother Frank is killed by an outlaw, brothers Bob Dalton, Emmett Dalton and Gray Dalton join their local sheriff's department. When they are cheated by the law, they turn to crime, robbing trains and anything else they can steal from over the course of two years in the early 1890's. Trying to out do Jesse James, they attempt to rob two banks at once in October of 1892, and things get ugly",
        "popularity": 1083.298,
        "poster": "/6OeGqp18oZucUGziMIRNhLouZ75.jpg",
        "release_date": "2020-11-02",
        "title": "The Dalton Gang",
        "video": false,
        "vote_average": 4.4,
        "vote_count": 38
      },
      {
        "adult": false,
        "backdrop_path": "/tYkMtYPNpUdLdzGDUTC5atyMh9X.jpg",
        "genre_ids": [
          28,
          53,
          80,
          18
        ],
        "id": 553604,
        "original_language": "en",
        "originalTitle": "Honest Thief",
        "overview": "A bank robber tries to turn himself in because he's falling in love and wants to live an honest life...but when he realizes the Feds are more corrupt than him, he must fight back to clear his name.",
        "popularity": 1004.724,
        "poster": "/zeD4PabP6099gpE0STWJrJrCBCs.jpg",
        "release_date": "2020-09-03",
        "title": "Honest Thief",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 181
      },
      {
        "adult": false,
        "backdrop_path": "/gnf4Cb2rms69QbCnGFJyqwBWsxv.jpg",
        "genre_ids": [
          53,
          28,
          18,
          80
        ],
        "id": 671039,
        "original_language": "fr",
        "originalTitle": "Bronx",
        "overview": "Caught in the crosshairs of police corruption and Marseille’s warring gangs, a loyal cop must protect his squad by taking matters into his own hands.",
        "popularity": 863.744,
        "poster": "/9HT9982bzgN5on1sLRmc1GMn6ZC.jpg",
        "release_date": "2020-10-30",
        "title": "Rogue City",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 290
      }];
export default {
    title: 'Movie Row',
    component: MovieRow,
};

const Template: Story<ComponentProps<typeof MovieRow>> = (args) => (
    <MovieRow {...args}/>
);

export const FirstStory = Template.bind({});
FirstStory.args = {movies: movies, favoritos: favoritos};