document.addEventListener("DOMContentLoaded", function () {
    // Fully curated offline dataset
    const exercises = [
        // Full Body
        { name: "Burpees", sets: "3x12", bodyPart: "Full Body", equipment: "No Equipment", img: "http://static.photos/fitness/640x360/1" },
        { name: "Dumbbell Thruster", sets: "3x12", bodyPart: "Full Body", equipment: "Dumbbells", img: "http://static.photos/fitness/640x360/2" },
        { name: "Resistance Band Deadlift", sets: "3x15", bodyPart: "Full Body", equipment: "Resistance Bands", img: "http://static.photos/fitness/640x360/3" },
        { name: "Yoga Sun Salutation", sets: "3x1 min", bodyPart: "Full Body", equipment: "Yoga Mat", img: "http://static.photos/fitness/640x360/4" },
        { name: "Kettlebell Swing", sets: "3x15", bodyPart: "Full Body", equipment: "Kettlebells", img: "http://static.photos/fitness/640x360/5" },

        // Upper Body
        { name: "Push-ups", sets: "3x12", bodyPart: "Upper Body", equipment: "No Equipment", img: "http://static.photos/fitness/640x360/6" },
        { name: "Dumbbell Bench Press", sets: "3x12", bodyPart: "Upper Body", equipment: "Dumbbells", img: "http://static.photos/fitness/640x360/7" },
        { name: "Resistance Band Row", sets: "3x12", bodyPart: "Upper Body", equipment: "Resistance Bands", img: "http://static.photos/fitness/640x360/8" },
        { name: "Yoga Plank Variations", sets: "3x30 sec", bodyPart: "Upper Body", equipment: "Yoga Mat", img: "http://static.photos/fitness/640x360/9" },
        { name: "Kettlebell Shoulder Press", sets: "3x12", bodyPart: "Upper Body", equipment: "Kettlebells", img: "http://static.photos/fitness/640x360/10" },

        // Lower Body
        { name: "Squats", sets: "3x15", bodyPart: "Lower Body", equipment: "No Equipment", img: "http://static.photos/fitness/640x360/11" },
        { name: "Dumbbell Lunges", sets: "3x12", bodyPart: "Lower Body", equipment: "Dumbbells", img: "http://static.photos/fitness/640x360/12" },
        { name: "Resistance Band Side Steps", sets: "3x15", bodyPart: "Lower Body", equipment: "Resistance Bands", img: "http://static.photos/fitness/640x360/13" },
        { name: "Yoga Chair Pose", sets: "3x30 sec", bodyPart: "Lower Body", equipment: "Yoga Mat", img: "http://static.photos/fitness/640x360/14" },
        { name: "Kettlebell Goblet Squat", sets: "3x12", bodyPart: "Lower Body", equipment: "Kettlebells", img: "http://static.photos/fitness/640x360/15" },

        // Core
        { name: "Plank", sets: "3x30 sec", bodyPart: "Core", equipment: "No Equipment", img: "http://static.photos/fitness/640x360/16" },
        { name: "Dumbbell Russian Twist", sets: "3x20", bodyPart: "Core", equipment: "Dumbbells", img: "http://static.photos/fitness/640x360/17" },
        { name: "Resistance Band Crunch", sets: "3x15", bodyPart: "Core", equipment: "Resistance Bands", img: "http://static.photos/fitness/640x360/18" },
        { name: "Yoga Boat Pose", sets: "3x30 sec", bodyPart: "Core", equipment: "Yoga Mat", img: "http://static.photos/fitness/640x360/19" },
        { name: "Kettlebell Windmill", sets: "3x12", bodyPart: "Core", equipment: "Kettlebells", img: "http://static.photos/fitness/640x360/20" },

        // Arms
        { name: "Tricep Dips", sets: "3x12", bodyPart: "Arms", equipment: "No Equipment", img: "http://static.photos/fitness/640x360/21" },
        { name: "Bicep Curls", sets: "3x12", bodyPart: "Arms", equipment: "Dumbbells", img: "http://static.photos/fitness/640x360/22" },
        { name: "Resistance Band Curl", sets: "3x15", bodyPart: "Arms", equipment: "Resistance Bands", img: "http://static.photos/fitness/640x360/23" },
        { name: "Yoga Arm Balance", sets: "3x30 sec", bodyPart: "Arms", equipment: "Yoga Mat", img: "http://static.photos/fitness/640x360/24" },
        { name: "Kettlebell Arm Press", sets: "3x12", bodyPart: "Arms", equipment: "Kettlebells", img: "http://static.photos/fitness/640x360/25" },

        // Legs
        { name: "Lunges", sets: "3x12", bodyPart: "Legs", equipment: "No Equipment", img: "http://static.photos/fitness/640x360/26" },
        { name: "Dumbbell Step-ups", sets: "3x12", bodyPart: "Legs", equipment: "Dumbbells", img: "http://static.photos/fitness/640x360/27" },
        { name: "Resistance Band Kickbacks", sets: "3x15", bodyPart: "Legs", equipment: "Resistance Bands", img: "http://static.photos/fitness/640x360/28" },
        { name: "Yoga Warrior Pose", sets: "3x30 sec", bodyPart: "Legs", equipment: "Yoga Mat", img: "http://static.photos/fitness/640x360/29" },
        { name: "Kettlebell Deadlift", sets: "3x12", bodyPart: "Legs", equipment: "Kettlebells", img: "http://static.photos/fitness/640x360/30" },
    ];

    const cardsContainer = document.getElementById('exercise-grid');
    const generateBtn = document.getElementById('generate-btn');

    generateBtn.addEventListener('click', () => {
        const bodyPart = document.getElementById('body-part').value;
        const equipment = document.getElementById('equipment').value;

        // Clear previous exercises
        cardsContainer.innerHTML = '';

        // 1. Exact match
        let filtered = exercises.filter(ex => ex.bodyPart === bodyPart && ex.equipment === equipment);

        // 2. If none, try body part only
        if (filtered.length === 0) {
            filtered = exercises.filter(ex => ex.bodyPart === bodyPart);
        }

        // 3. Render filtered exercises
        filtered.forEach(ex => {
            const card = document.createElement('div');
            card.className = "exercise-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300";

            card.innerHTML = `
                <img class="w-full h-48 object-cover" src="${ex.img}" alt="Exercise">
                <div class="p-4">
                    <h3 class="text-lg font-semibold text-gray-800">${ex.name}</h3>
                    <p class="text-gray-600 mt-1">${ex.sets}</p>
                    <div class="mt-3 flex items-center">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">${ex.bodyPart}</span>
                        <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">${ex.equipment}</span>
                    </div>
                    <div class="mt-3 flex space-x-2">
                        <button class="start-btn bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Start</button>
                        <button class="stop-btn bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Stop</button>
                        <span class="ml-2 timer text-gray-700 font-medium">0s</span>
                    </div>
                </div>
            `;
            cardsContainer.appendChild(card);

            // Timer
            const startBtn = card.querySelector('.start-btn');
            const stopBtn = card.querySelector('.stop-btn');
            const timerDisplay = card.querySelector('.timer');
            let timer = null;
            let seconds = 0;

            startBtn.addEventListener('click', () => {
                if (timer) clearInterval(timer);
                timer = setInterval(() => {
                    seconds++;
                    timerDisplay.textContent = `${seconds}s`;
                }, 1000);
            });

            stopBtn.addEventListener('click', () => {
                clearInterval(timer);
            });
        });
    });
});
