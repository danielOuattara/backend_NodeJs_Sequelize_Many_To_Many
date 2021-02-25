const db = require("./models");
const TutorialController = require("./controllers/tutorial.controller");
const TagController = require("./controllers/tag.controller");




const run = async () => {

     /* create Tutorials
     -----------------------*/

    const tut1 = await TutorialController.create({
        title: "Tut#1",
        description: "Tut#1 Description",
      });
      /*
      >> Created Tutorial: {
          "id": 1,
          "title": "Tut#1",
          "description": "Tut#1 Description",
          "updatedAt": "2020-04-24T03:27:52.798Z",
          "createdAt": "2020-04-24T03:27:52.798Z"
      }
      */
      
      const tut2 = await TutorialController.create({
        title: "Tut#2",
        description: "Tut#2 Description",
      });
      
      const tut3 = await TutorialController.create({
        title: "Tut#3",
        description: "Tut#3 Description",
      });
      
      const tut4 = await TutorialController.create({
        title: "Tut#4",
        description: "Tut#4 Description",
      });
      



    /* Create Tags
    ------------------
    */
    const tag1 = await TagController.create({
        name: "Tag#1",
      });
      /*
      >> Created Tag: {
        "id": 1,
        "name": "Tag#1",
        "updatedAt": "2020-04-24T03:27:53.923Z",
        "createdAt": "2020-04-24T03:27:53.923Z"
      }
      */
      
      const tag2 = await TagController.create({
        name: "Tag#2",
      });




     /*  Add Tutorials to Tags
     ---------------------------- */

        await TagController.addTutorial(tag1.id, tut1.id);
        // >> added Tutorial id=1 to Tag id=1

        await TagController.addTutorial(tag1.id, tut2.id);
        // >> added Tutorial id=2 to Tag id=1

        await TagController.addTutorial(tag1.id, tut3.id);
        // >> added Tutorial id=3 to Tag id=1

        await TagController.addTutorial(tag2.id, tut3.id);
        // >> added Tutorial id=3 to Tag id=2

        await TagController.addTutorial(tag2.id, tut4.id);
        // >> added Tutorial id=4 to Tag id=2

        await TagController.addTutorial(tag2.id, tut1.id);
        // >> added Tutorial id=1 to Tag id=2

      












};

// db.sequelize.sync();
db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
  run();
});
