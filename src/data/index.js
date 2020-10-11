export const data = [
    // {
    //     _id: 1,
    //     text: 'Hello developer',
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: 'React Native',
    //       avatar: 'https://placeimg.com/140/140/any',
    //     },
    //     image: 'https://facebook.github.io/react/img/logo_og.png',
    //     video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    //     sent: true,
    //     received: true,
    //     pending: true,
    //   },
    {
      _id: 1,
      text: 'This is a system message',
      createdAt: new Date (),
      system: true,
    },
    {
      _id: 2,
      text: 'Hello developer',
      createdAt: new Date (),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
    {
      _id: 3,
      text: 'Hi! I work from home today!',
      createdAt: new Date (),
      user: {
        _id: 1,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
      image: 'https://placeimg.com/960/540/any',
    },
    {
      _id: 4,
      text: 'This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT',
      createdAt: new Date (),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
      quickReplies: {
        type: 'radio', // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: '😋 Yes',
            value: 'yes',
          },
        ],
      },
    },
    {
      _id: 5,
      text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
      createdAt: new Date (),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
      quickReplies: {
        type: 'checkbox', // or 'radio',
        values: [
          {
            title: 'Yes',
            value: 'yes',
          },
          {
            title: 'Yes, let me show you with a picture!',
            value: 'yes_picture',
          },
          {
            title: 'Nope. What?',
            value: 'no',
          },
        ],
      },
    },
    {
      _id: 6,
      text: 'Come on!',
      createdAt: new Date (),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
    //   {
    //     _id: 7,
    //     text: `Hello this is an example of the ParsedText, links like http://www.google.com or http://www.facebook.com are clickable and phone number 444-555-6666 can call too.
    //         But you can also do more with this package, for example Bob will change style and David too. foo@gmail.com
    //         And the magic number is 42!
    //         #react #react-native`,
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: 'React Native',
    //       avatar: 'https://placeimg.com/140/140/any',
    //     },
    //   },
  ];
  export const optionImagesPicker = {
    title: 'Select Images',
    customButtons: [{name: 'OptionImages', title: 'Option Images'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  export const optionCamera = {
      storageOptions: {
          skipBackup: true,
          path: 'images'
      },
      customButtons: [
          {name: 'video', title: 'Videos'},
          {name: 'launchImage', title:'Launch Image'}
      ],
      maxWidth: 1920,
      maxHeight: 1080,
      noData: true
  };
  export const optionVideos = {
    // storageOptions: {
    //   skipBackup: true,
    //   path: 'movies',
    // },
    // customButtons: [{name: 'video', title: 'Option Video'}],
    storageOptions: {
      skipBackup: true,
      path: 'movies',
    },
    noData: true,
    mediaType: 'video',
    quality: 1
  };
  export const options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  