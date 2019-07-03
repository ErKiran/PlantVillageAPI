# PlantVillageAPI
Simple Rest API For [Plant Village Datasets](https://github.com/spMohanty/PlantVillage-Dataset/tree/master/raw/color)

### Make sure you have Node and npm install 
[Windows](https://wsvincent.com/install-node-js-npm-windows/) [Linux](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/)

### To run this project Locally

git clone https://github.com/ErKiran/PlantVillageAPI.git

```js
npm i
node index.js
``` 
### To get all the info or insert info if not already in database
http://localhost:5000/api/submit

### To get specific disease
http://localhost:5000/api/desc/Black%20Rot
```js
{
_id: "5cfb50625b042314f0e2d144",
SN: 2,
PLANT: "Apple",
DISEASE: "Black Rot",
CAUSAL AGENT: "Black rot is a disease of apples that infects fruit, leaves and bark caused by the fungus Botryosphaeria obtusa. It can also jump to healthy tissue on pear or quince trees, but is typically a secondary fungus of weak or dead tissues in other plants",
EFFECT/SYMPTOMS: "Leaf symptoms first occur early in the spring when the leaves are unfolding. They appear as small, purple specks on the upper surface of the leaves that enlarge into circular lesions 1/8 to 1/4 inch (3-6 mm) in diameter. The margin of the lesions remains purple, while the center turns tan to brown. In a few weeks, secondary enlargement of these leaf spots occurs. Heavily infected leaves become chlorotic and defoliation occurs. As the rotted area enlarges, a series of concentric bands of uniform width form which alternate in color from black to brown. The flesh of the rotted area remains firm and leathery. Black pycnidia are often seen on the surface of the infected fruit. Lesions resulting in canker formation usually are associated with a wound in the bark.",
CONTROL MEASURES: "Cultural Control:During the winter, check for cankers and remove them by cutting them out or pruning away the affectedlimbs at least six inches beyond the wound. Destroy all infected tissue immediately and keep a watchful eye out for new signs of infection. Chemical Control:Genrral purpose fungicides like copper based spraysand lime sulfer can be used to control black rot .The main method of control is application of fungicides from silver tip through harvest. Apple cultivars do not vary greatly in their susceptibility to black rot fungus; however, 'Empire' and 'Cortland' may be slightly more susceptible than others.",
__v: 0
}
```
