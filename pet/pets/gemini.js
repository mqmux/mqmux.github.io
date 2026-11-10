(function(){
  "use strict";
  const script=document.currentScript;
  const input={id:"gemini",name:"Gemini 星猫娘",slot:3,size:400,assets:new URL("native/gemini/webm/",script.src).href,source:"https://github.com/hunmer/aboutme-pets",manifest:new URL("native/gemini/manifest.json",script.src).href};
  const globalName="__muqiuNativePetWorldV2",promiseName="__muqiuNativePetWorldLoadV2";
  if(window[globalName]){window[globalName].register(input).catch(console.error);return;}
  if(!window[promiseName])window[promiseName]=new Promise((resolve,reject)=>{
    const core=document.createElement("script");
    core.src=new URL("native-world.js?v=20261110-native4",script.src).href;
    core.async=true;core.onload=()=>resolve(window[globalName]);core.onerror=reject;document.head.appendChild(core);
  });
  window[promiseName].then(world=>world.register(input)).catch(error=>console.warn("宠物加载失败",error));
})();
