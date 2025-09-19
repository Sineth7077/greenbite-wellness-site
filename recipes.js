const recipes = [
  {id:0, title:"Rainbow Quinoa Salad", cat:"Balanced", img:"assets/images/food1.jpg", desc:"Colorful quinoa with veg.", ingredients:["1 cup quinoa","2 cups water","Cherry tomatoes","Cucumber","Olive oil"], steps:["Cook quinoa","Chop veg","Mix with dressing","Serve chilled"], nutrition:{cal:420,carbs:50,protein:12,fat:18}},
  {id:1, title:"Green Smoothie Bowl", cat:"Breakfast", img:"assets/images/hero1.jpg", desc:"Spinach & banana smoothie bowl", ingredients:["1 banana","1 cup spinach","Almond milk","Toppings"], steps:["Blend base","Pour into bowl","Add toppings"], nutrition:{cal:320,carbs:48,protein:8,fat:10}},
  {id:2, title:"Oven-Baked Salmon", cat:"Balanced", img:"assets/images/hero2.jpg", desc:"Simple baked salmon with herbs", ingredients:["Salmon fillet","Lemon","Olive oil","Herbs"], steps:["Preheat oven","Season fish","Bake 12-15 minutes","Serve"], nutrition:{cal:540,carbs:2,protein:40,fat:34}}
];

function renderRecipes(list){
  const grid = document.getElementById('recipe-grid');
  if(!grid) return;
  grid.innerHTML = '';
  list.forEach(r=>{
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `<img src="${r.img}" alt="${r.title}"><h4>${r.title}</h4><p class="small-muted" style="padding:0 12px 12px">${r.desc}</p>`;
    card.addEventListener('click', ()=> openRecipeModal(recipeModalHtml(r)));
    grid.appendChild(card);
  });
}

function recipeModalHtml(r){
  return `<h2 style="font-family:'Playfair Display',serif">${r.title}</h2>
  <img src="${r.img}" style="width:100%;height:240px;object-fit:cover;border-radius:8px;margin:12px 0">
  <h4>Ingredients</h4><ul>${r.ingredients.map(i=>`<li>${i}</li>`).join('')}</ul>
  <h4>Steps</h4><ol>${r.steps.map(s=>`<li>${s}</li>`).join('')}</ol>
  <h4>Nutrition</h4>
  <table style="width:100%;border-collapse:collapse;margin-top:8px"><tr><th style="text-align:left">Calories</th><td>${r.nutrition.cal} kcal</td></tr><tr><th style="text-align:left">Carbs</th><td>${r.nutrition.carbs} g</td></tr><tr><th style="text-align:left">Protein</th><td>${r.nutrition.protein} g</td></tr><tr><th style="text-align:left">Fat</th><td>${r.nutrition.fat} g</td></tr></table>`;
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderRecipes(recipes);
  const search = document.getElementById('r-search');
  const cat = document.getElementById('r-cat');
  if(search) search.addEventListener('input', ()=>{ filterRecipes(); });
  if(cat) cat.addEventListener('change', ()=>{ filterRecipes(); });
});

function filterRecipes(){
  const q = (document.getElementById('r-search')?.value || '').toLowerCase();
  const c = (document.getElementById('r-cat')?.value || '');
  const filtered = recipes.filter(r=> (r.title.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q)) && (c? r.cat===c : true));
  renderRecipes(filtered);
}
