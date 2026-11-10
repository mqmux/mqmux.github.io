(function(){
  "use strict";
  const script=document.currentScript;
  const input={id:"deepseek",name:"DeepSeek 蓝毛小女仆",slot:0,size:400,assets:new URL("../assets/webm/",script.src).href,source:"https://github.com/PC2005-cloud/dsh-pet"};
  const globalName="__muqiuNativePetWorldV2",promiseName="__muqiuNativePetWorldLoadV2";
  if(window[globalName]){window[globalName].register(input).catch(console.error);return;}
  if(!window[promiseName])window[promiseName]=new Promise((resolve,reject)=>{
    const core=document.createElement("script");
    core.src=new URL("native-world.js?v=20261110-native4",script.src).href;
    core.async=true;core.onload=()=>resolve(window[globalName]);core.onerror=reject;document.head.appendChild(core);
  });
  window[promiseName].then(world=>world.register(input)).catch(error=>console.warn("宠物加载失败",error));
})();
