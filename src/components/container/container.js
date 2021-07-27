import styles from './container.module.css'
// import Pixi from '../../librares'
// import * as PIXI from 'pixi.js'
// import {loader} from 'pixi.js'
// import {Spine} from 'pixi-spine';



export default function Container({children}){
//     let loader = new PIXI.Loader
//     const orderOfElements = ['bubble_1'];
//     const items = {
//         bubble_1: {
//             animationList: [],
//             skinList: []
//         }
    
//     }
//   const app = new PIXI.Application({
//     width: document.body.offsetWidth, height: document.body.offsetHeight, transparent: true, resolution: window.devicePixelRatio || 1,
//   });
//   document.body.appendChild(app.view);
//   loader
// 	.add('bubble_1','/static/src/animations/bubble_1/bubble_1.json')
// 	.load((a,resources) => {
//         orderOfElements.forEach(key => {
//                 const element = items[key];
//                 console.log(resources[key])
//                 // element.texture = new Spine(resources[key].spineData);

//                 // debug && drawAnimationNames(key, resources[key].spineData.animations); //РІС‹РІРѕРґРёРј СЃРїРёСЃРѕРє Р°РЅРёРјР°С†РёР№ РґР»СЏ С‚РµРєСѓС‰РµРіРѕ СЌР»РµРјРµРЅС‚Р°
//                 // debug && drawSkinsNames(key, resources[key].spineData.skins); //РІС‹РІРѕРґРёРј СЃРїРёСЃРѕРє СЃРєРёРЅРѕРІ РґР»СЏ С‚РµРєСѓС‰РµРіРѕ СЌР»РµРјРµРЅС‚Р°

//                 // app.stage.addChild(element.texture);

//             });
// 	});

    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}