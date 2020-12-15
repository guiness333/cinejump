import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react/types-6-0';

import {Highlight} from './index';
let movies = [
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
      "original_title": "Jiu Jitsu",
      "overview": "Every six years, an ancient order of jiu-jitsu fighters joins forces to battle a vicious race of alien invaders. But when a celebrated war hero goes down in defeat, the fate of the planet and mankind hangs in the balance.",
      "popularity": 2179.557,
      "poster_path": "/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg",
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
      "original_title": "The Craft: Legacy",
      "overview": "An eclectic foursome of aspiring teenage witches get more than they bargained for as they lean into their newfound powers.",
      "popularity": 2150.808,
      "poster_path": "/lhMIra0pqWNuD6CIXoTmGwZ0EBS.jpg",
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
      "original_title": "Wander",
      "overview": "After getting hired to probe a suspicious death in the small town of Wander, a mentally unstable private investigator becomes convinced the case is linked to the same 'conspiracy cover up' that caused the death of his daughter.",
      "popularity": 1716.891,
      "poster_path": "/2AwPvNHphpZBJDqjZKVuMAbvS0v.jpg",
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
      "original_title": "Fatman",
      "overview": "A rowdy, unorthodox Santa Claus is fighting to save his declining business. Meanwhile, Billy, a neglected and precocious 12 year old, hires a hit man to kill Santa after receiving a lump of coal in his stocking.",
      "popularity": 1572.746,
      "poster_path": "/4n8QNNdk4BOX9Dslfbz5Dy6j1HK.jpg",
      "release_date": "2020-11-13",
      "title": "Fatman",
      "video": false,
      "vote_average": 5.9,
      "vote_count": 166
    }]
export default {
    title: 'Highlight',
    component: Highlight,
};

const Template: Story<ComponentProps<typeof Highlight>> = (args) => (
    <Highlight {...args}/>
);

export const FirstStory = Template.bind({});
FirstStory.args = {movies: movies};