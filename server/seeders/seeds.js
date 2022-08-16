const faker = require('faker');

const db = require('../config/connection');
const { Character, User } = require('../models')

db.once('open', async() => {
  await Character.deleteMany({});
  await User.deleteMany({});

  //create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create partyMembers
  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { _id: userId } = createdUsers.ops[randomUserIndex];

    let partyMemberId = userId;

    while (partyMemberId === userId) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      partyMemberId = createdUsers.ops[randomUserIndex];
    }

    await User.updateOne(
      { _id: userId },
      { $addToSet: { partyMembers: partyMemberId } }
    )
  }

  // function to allow for standard point array to work
  function getRandomNumberWithExclusion(statsArray, ...arrayOfIndexesToExclude) {
    let statPoint = null;

    while(statPoint === null || statPoint === arrayOfIndexesToExclude(statPoint)) {
      statPoint = Math.round(Math.random() * (statsArray.length -1))
    }
    return statPoint
  }

  // create characters
  let createdCharacters = []
  for (let i = 0; i < 100; i += 1) {
    // Arrays for Standard Array stats, Races, and Classes
    const statPoints = [15, 14, 13, 12, 10, 8]
    const races = ['Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling', 'Arakocra', 'Genasi', 'Goliath', 'Tabaxi', 'Kobold', 'Kenku']
    const classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']

    const characterName = faker.name.firstName() + '/t' + faker.name.lastName();
    const characterBio = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const characterRace = Math.floor(Math.random() * races.length);
    const characterClass = Math.floor(Math.random() * classes.length);
    const characterStr = getRandomNumberWithExclusion(statPoints, null)
    const characterDex = getRandomNumberWithExclusion(statPoints, characterStr)
    const characterCon = getRandomNumberWithExclusion(statPoints, characterStr, characterDex)
    const characterInt = getRandomNumberWithExclusion(statPoints, characterStr, characterDex, characterCon)
    const characterWis = getRandomNumberWithExclusion(statPoints, characterStr, characterDex, characterCon, characterInt)
    const characterCha = getRandomNumberWithExclusion(statPoints, characterStr, characterDex, characterCon, characterInt, characterWis)

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdCharacter = await Character.create(
      {
        characterName,
        characterBio,
        characterRace,
        characterClass,
        characterStr,
        characterDex,
        characterCon,
        characterInt,
        characterWis,
        characterCha,
        username
      }
    )

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { characters: createdCharacter._id } }
    );

    createdCharacters.push(createdCharacter);
  }

  // create comments
  for (let i = 0; i < 100; i += 1) {
    const commentBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomCharacterIndex = Math.floor(Math.random() * createdCharacters.length);
    const { _id: characterId } = createdCharacters[randomCharacterIndex];

    await Character.updateOne(
      { _id: characterId },
      { $push: { comments: { commentBody, username } } },
      { runValidators: true }
    )
  }

  console.log('Characters Created');
  process.exit(0);
})