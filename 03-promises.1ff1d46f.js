!function(){var e=document.querySelector(".form");document.querySelector('input[name="delay"]'),document.querySelector('input[name="step"]'),document.querySelector('input[name="amount"]');function t(e,t){var n=Math.random()>.3;return new Promise((function(u,o){setTimeout((function(){n?u({position:e,delay:t}):o({position:e,delay:t})}),t)}))}e.addEventListener("submit",(function(e){e.preventDefault();for(var n=e.currentTarget.elements,u=n.delay,o=n.step,r=n.amount,a=0,i=0;i<r.value;i+=1)a+=1,u.value+=o.value,t(a,u.value)}))}();
//# sourceMappingURL=03-promises.1ff1d46f.js.map
