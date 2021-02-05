import {
  Alto_icon,
  Alto_0,
  Alto_1,
  Alto_2,
  Among_0,
  Among_1,
  Among_2,
  Among_3,
  Among_4,
  Pillar_icon,
  Pillar_0,
  Pillar_1,
  Pillar_2,
  Pillar_3,
  Pillar_4,
  Genshin_icon,
  Genshin_0,
  Genshin_1,
  Genshin_2,
  Genshin_3,
  Genshin_4,
} from '../assets';

const gameData = [
  {
    id: 1,
    title: "Alto's Odyssey",
    icon: Alto_icon,
    subTitle:
      'Just beyond the horizon sits a majestic desert, vast and unexplored.',
    description:
      'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.\nAlong the way, you’ll grind across vines, bounce atop hot air balloons, ride towering rock walls, and escape mischievous lemurs – all while uncovering the desert’s many mysteries.',
    age: '9+',
    rating: 4.4,
    preview: [Alto_0, Alto_1, Alto_2],
    backgroundColor: '#824671CC',
  },
  {
    id: 2,
    title: 'The Pillar',
    icon: Pillar_icon,
    subTitle: 'Dozens of challenging puzzles to solve!',
    description:
      'Play online or over local WiFi with 4-10 players as you attempt to prep your spaceship for departure, but beware as one will be an impostor bent on killing everyone! Crewmates can win by completing all tasks or discovering and voting the impostor off the ship.\nThe Impostor can use sabotage to cause chaos, making for easier kills and better alibis.',
    age: '4+',
    rating: 4.2,
    preview: [Pillar_0, Pillar_1, Pillar_2, Pillar_3, Pillar_4],
    backgroundColor: '#ab784fCC',
  },
  {
    id: 3,
    title: 'Genshin Impact',
    icon: Genshin_icon,
    subTitle:
      'Step into Teyvat, a vast world teeming with life and flowing with elemental energy',
    description:
      'You and your sibling arrived here from another world. Separated by an unknown god, stripped of your powers, and cast into a deep slumber, you now awake to a world very different from when you first arrived.\nThus begins your journey across Teyvat to seek answers from The Seven — the gods of each element. Along the way, prepare to explore every inch of this wondrous world, join forces with a diverse range of characters, and unravel the countless mysteries that Teyvat holds...',
    age: '9+',
    rating: 4.7,
    preview: [Genshin_0, Genshin_1, Genshin_2, Genshin_3, Genshin_4],
    backgroundColor: '#3e3024CC',
  },
  {
    id: 4,
    title: 'Among Us',
    icon: Alto_icon,
    subTitle: 'Beware of the importer',
    description:
      'Cleverly mixing mystery an puzzle solving, the Pillar takes you deep into an faraway unknown world where you must pay attention to your surroundings in order to find the way to freedom. Exploration goes hand in hand with an open and clear mind as you try to break free from a mythical birdcage and escape.\nEnjoy every level to the maximum, the labyrinth around you changes as you open each door leading to another the room, another flow puzzle, another mystery and challenge.',
    age: '9+',
    rating: 4.7,
    preview: [Among_0, Among_1, Among_2, Among_3, Among_4],
    backgroundColor: '#BBBBBBCC',
  },
];

export default gameData;
