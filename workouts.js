const WORKOUTS = [
  {name:'Push-ups',part:'upper',equip:'none',time:40},
  {name:'Dumbbell Bicep Curl',part:'upper',equip:'dumbbell',time:30},
  {name:'Squats',part:'lower',equip:'none',time:45},
  {name:'Lunges',part:'lower',equip:'none',time:40},
  {name:'Jumping Jacks',part:'cardio',equip:'none',time:30},
  {name:'Kettlebell Swing',part:'full',equip:'dumbbell',time:40},
  {name:'Plank',part:'full',equip:'none',time:60}
];

function pickRandom(arr,n=4){ const out=[]; const copy=[...arr]; while(out.length<n && copy.length){ const i=Math.floor(Math.random()*copy.length); out.push(copy.splice(i,1)[0]); } return out; }

document.getElementById('w-gen')?.addEventListener('click', ()=>{
  const part=document.getElementById('w-part').value;
  const equip=document.getElementById('w-equip').value;
  let pool = WORKOUTS.filter(w=> (part? w.part===part : true) && (equip? w.equip===equip : true));
  if(pool.length<1) pool = WORKOUTS;
  const plan = pickRandom(pool,4);
  renderPlan(plan);
});

function renderPlan(plan){
  const container = document.getElementById('w-plan');
  if(!container) return;
  container.innerHTML = '';
  plan.forEach((ex,idx)=>{
    const card = document.createElement('div');
    card.style.marginBottom='12px';
    card.className='workout-list';
    card.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center"><div><strong>${ex.name}</strong><div class="small-muted">${ex.part} • ${ex.equip}</div></div><div><button onclick="startExercise(${idx})" data-time="${ex.time}" class="cta-outline">Start ${ex.time}s</button></div></div><div id="timer-${idx}" style="margin-top:8px"></div>`;
    container.appendChild(card);
  });
  window.currentPlan = plan;
}

let activeTimer = null;
function startExercise(idx){
  const plan = window.currentPlan || [];
  const ex = plan[idx];
  if(!ex) return;
  if(activeTimer && activeTimer.id) clearInterval(activeTimer.id);
  let remaining = ex.time;
  const display = document.getElementById(`timer-${idx}`);
  display.textContent = `Time: ${remaining}s`;
  activeTimer = {id:setInterval(()=>{
    remaining--;
    if(remaining<=0){ clearInterval(activeTimer.id); display.textContent='Done!'; activeTimer=null; }
    else display.textContent = `Time: ${remaining}s`;
  },1000)};
}
