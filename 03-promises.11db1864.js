function e(e,t){const o=Math.random()>.3;return new Promise(((n,l)=>{setTimeout((()=>{o?n({position:e,delay:t}):l({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const{elements:{delay:o,step:n,amount:l}}=t.currentTarget;let i=0,s=Number(o.value),r=Number(n.value);for(let t=0;t<l.value;t+=1)i+=1,e(i,s).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),s+=r}));
//# sourceMappingURL=03-promises.11db1864.js.map
