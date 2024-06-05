const answerMassiv =  [ 
{
    one:
        {name: '1.Which figure is Earth?',
        pictures:'./pictures/earth.jpg',
        answers: ['cylinder','sphere'], 
        help: 'sphere',
        link: 'https://en.wikipedia.org/wiki/Figure_of_the_Earth',
        rightanswer:   './pictures/happy_line.png',
        wronganswer:'./pictures/sad.line.png',
        audiogood:'./music/zvuk-aplodismentov-korotkiy-5-sek-33919.mp3',
        audio: './music/vozglas-razocharovanie-tolpyi.mp3'
}
},
{two:
    {name: '2. Which shape is apple?',
    pictures:'./pictures/applepng.webp',
    answers: ['ellipse','sphere'], 
    help: 'sphere',
    link: 'https://seas.harvard.edu/news/2021/10/how-apples-get-their-shapes',
    rightanswer: './pictures/happy_line.png',
    wronganswer:'./pictures/sad.line.png',
    audiogood:'./music/zvuk-aplodismentov-korotkiy-5-sek-33919.mp3',
    audio: './music/vozglas-razocharovanie-tolpyi.mp3'
}},
{three:
    {name: '3. Which is model of car?',
    pictures:'./pictures/Genesis.jpg.avif',
    answers: ['Genesis','Aston Martin','Bentley'], 
    help: 'Genesis',
    link: 'https://www.adac.de/rund-ums-fahrzeug/autokatalog/marken-modelle/genesis/g80/2generation/320780/',
    rightanswer: './pictures/happy_line.png',
    wronganswer:'./pictures/sad.line.png',
    audiogood:'./music/zvuk-aplodismentov-korotkiy-5-sek-33919.mp3',
    audio: './music/vozglas-razocharovanie-tolpyi.mp3'
}},
{four:
    {name: '4. Which is now year? ',
    pictures:'./pictures/year.jpeg',
answers: ['2023','2024','2030'], 
help: '2023',
link: 'https://www.timeanddate.com',
rightanswer: './pictures/happy_line.png',
wronganswer:'./pictures/sad.line.png',
audiogood:'./music/zvuk-aplodismentov-korotkiy-5-sek-33919.mp3',
audio: './music/vozglas-razocharovanie-tolpyi.mp3'
}},
{five:
    {name: '5.  Which country is it?  ',
    pictures:'./pictures/ukraine.jpg.avif',
answers: ['Bulgaria','Ukraine','Australia'], 
help: 'Ukraine',
link: 'https://www.mappr.co/location/ukraine/',
rightanswer: './pictures/happy_line.png',
wronganswer:'./pictures/sad.line.png',
audiogood:'./music/zvuk-aplodismentov-korotkiy-5-sek-33919.mp3',
audio: './music/vozglas-razocharovanie-tolpyi.mp3'
}},
{six:
    {name: '6.Who is the author of "Capital"?  ',
pictures:'./pictures/karl_marks.png',
answers: ['Taras Shevchenko','Franz Kafka ','Karl Marx'], 
help: 'Karl Marx',
link: 'https://en.wikipedia.org/wiki/Das_Kapital',
rightanswer: './pictures/happy_line.png',
wronganswer:'./pictures/sad.line.png',
audiogood:'./music/zvuk-aplodismentov-korotkiy-5-sek-33919.mp3',
audio: './music/vozglas-razocharovanie-tolpyi.mp3'
}},
{seven:
    {name: '7. Which country has not  capital in Europe? ',
    pictures:'./pictures/europe_map.avif',
answers: ['Vatican','Switzerland','Andorra'], 
help: 'Switzerland',
link: 'https://www.houseofswitzerland.org/swissstories/science-education/why-switzerland-has-no-capital-and-other-questions-you-have-about',
rightanswer: './pictures/happy_line.png',
wronganswer:'./pictures/sad.line.png',
audiogood:'./music/zvuk-aplodismentov-korotkiy-5-sek-33919.mp3',
audio: './music/vozglas-razocharovanie-tolpyi.mp3'
}},
{eight:
    {name: '8. Which religion has the most followers?  ',
pictures:'./pictures/religion.jpeg',
answers: ['Christianity','Buddhism ','Islam'], 
help: 'Christianity',
link: 'https://en.wikipedia.org/wiki/Major_religious_groups',
rightanswer: './pictures/happy_line.png',
wronganswer:'./pictures/sad.line.png',
audiogood:'./music/zvuk-aplodismentov-korotkiy-5-sek-33919.mp3',
audio: './music/vozglas-razocharovanie-tolpyi.mp3'
}},
{nine:
    {name: '9. Which mountain is the highest in world?  ',
    pictures:'./pictures/alps.jpeg',
answers: ['Mont Blanc ','Fuji ','Everest'], 
help: 'Everest',
link: 'https://en.wikipedia.org/wiki/List_of_highest_mountains_on_Earth',
rightanswer: './pictures/happy_line.png',
wronganswer:'./pictures/sad.line.png',
audiogood:'./music/zvuk-aplodismentov-korotkiy-5-sek-33919.mp3',
audio: './music/vozglas-razocharovanie-tolpyi.mp3'
}},
{ten:
    {name: '10. Where is the most coldest place in the world? ',
    pictures:'./pictures/scale_1200.png',
answers: ['Antarctica','Alaska USA ','Greenland'], 
help: 'Antarctica',
link: 'https://www.newscientist.com/question/coldest-places-earth/',
rightanswer: './pictures/happy_line.png',
wronganswer:'./pictures/sad.line.png',
audiogood:'./music/zvuk-aplodismentov-korotkiy-5-sek-33919.mp3',
audio: './music/vozglas-razocharovanie-tolpyi.mp3'
}},
];

let answers = [];
let currentProgress = 10;
let counter = document.createElement('div')
counter.textContent = `10/${currentProgress}`
counter.classList.add('counter');

let currentQuestionIndex = 0;




const questionOne = document.querySelector('#firstq');
const quiz = document.querySelector('.quiz');
const help = document.querySelector('.help');
const helpblock = document.querySelector('.helpblock');
const start = document.querySelector('.out h1');
const play = document.querySelector('#play')
const out = document.querySelector('#btngroup')
play.addEventListener("click", e => {
play.style.display = "none";
quiz.style.display = "none";
start.style.display = "none";
help.style.display ="block";
help.style.display ="flex";
helpblock.style.display ="block";
counter.style.display ="block";
questionOne.style.display ="block";
out.style.display ="block";
help.append(counter)



help.addEventListener("mouseover", e => {
const helptext= document.querySelector('.h4')
if (!helptext) {
    const newhelptext= document.createElement('h4')
newhelptext.classList.add('h4')
newhelptext.textContent = 'Help';
newhelptext.style.display = "block";
helpblock.append(newhelptext);

help.addEventListener("mouseout" , e => {
    newhelptext.remove(helpblock)
})}
})
});


let clueDisplayed = false;
help.addEventListener('click', e => {
if (!clueDisplayed) {
const currentQuestion = answerMassiv[currentQuestionIndex][Object.keys(answerMassiv[currentQuestionIndex])[0]];
const clue = document.createElement('div');
clue.classList.add('clue');
clue.innerHTML = currentQuestion.help;
helpblock.append(clue);
clue.style.display ="block";
    setTimeout(() => {
        clue.style.display = "none";
        clue.remove();

      }, 1500);
  
     clueDisplayed = true;
      }else {
  const error = document.createElement('div');
    error.classList.add('error');
    error.textContent = 'Clue gives only ones';
    error.style.display = "block";
    help.append(error);

    setTimeout(() => {
      error.style.display = "none";
      error.remove();
  
    }, 1500);
      }})
    //  });
    



const position = answerMassiv[currentQuestionIndex];
function displayCurrentQuestion() {
    if (
        Array.isArray(answerMassiv) &&
        currentQuestionIndex >= 0 &&
        currentQuestionIndex < answerMassiv.length
    ) {
    const el = answerMassiv[currentQuestionIndex][Object.keys(answerMassiv[currentQuestionIndex])[0]];
    const container = document.querySelector('#firstq')
    const out = document.querySelector('#btngroup')
    const questionDiv = document.createElement('div');
    const text = document.createElement('h5');
    const imagediv = document.createElement('div');
    const image = document.createElement('img') 
    const buttonblock = document.createElement('div');
    const link = document.createElement('a');

    image.src = el.pictures;
    text.innerHTML = el.name;
    text.classList.add('text')
    link.classList.add('link')
    link.href = el.link;
    link.textContent = 'Learn More'; 
    link.setAttribute('target', '_blank');

    questionDiv.classList.add('first');
    imagediv.classList.add('photo')
    buttonblock.classList.add('button')

    container.append(questionDiv);
    questionDiv.append(imagediv);
    imagediv.append(image);
    out.append(buttonblock)
    questionDiv.prepend(text)
    const audio = new Audio();
    audio.volume = 0.5; 

    el.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.style.display ="block";
        button.textContent = answer;

 
        button.addEventListener('click', (e) => {

            e.target.classList.add("click")
            text.innerHTML= '';
            container.style.background = 'none';
            container.style.border = 'none';
            container.style.boxShadow  = 'none';
            image.style.width='20%';
            image.style.height='20%';
            if (answer === el.help) {
                image.src = el.rightanswer;
                audio.src = el.audiogood;
                audio.play();
                setTimeout(() => {
                    audio.pause()
                }, 1300);
                answers.push(1); 
                
            } else {
                image.src = el.wronganswer;
                audio.src = el.audio;
                audio.play();
                setTimeout(() => {
                    audio.pause()
                }, 1300);
                
            }

            link.style.display ="block";
           
            container.append(link);

          currentProgress--;
          counter.textContent = `10/${currentProgress}`;
         setTimeout(goToNextQuestion, 3000);
   
         out.addEventListener('click', e =>{
            if (e.target.classList.contains('btn')) {
                out.style.display = 'none';
                
            }
        })
        })
     
        
    
        button.addEventListener("mouseover", e => {
            e.target.classList.add("blue")
        } );
        button.addEventListener("mouseout", e => {
            e.target.classList.remove("blue")
        })
        buttonblock.append(button);

        
});
function goToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < answerMassiv.length) {
      container.innerHTML = '';
      out.innerHTML = '';
      out.style.display = 'block';
      container.style.background = ''; 
      container.style.border = ''; 
      container.style.boxShadow = '';
      container.style.width='';
      container.style.height='';
      displayCurrentQuestion();
    } else  {
        score();
        container.style.display ="none";;
        out.style.display ="none";
        help.style.display ="none";
    }
  
    }
    function score() {
        const answerblock = document.querySelector('.answer');
        const good = document.querySelector('.good');
        const better = document.querySelector('.better')
        const best = document.querySelector('.best')
        const restartimg = document.querySelector('.restart img')
        const totalCorrectAnswers = answers.length;
      const fireworks = document.querySelector('#canvas')
        if (totalCorrectAnswers <= 3) {
          answerblock.innerHTML = 'Right answers: ' + totalCorrectAnswers;
          setTimeout(() => {
            answerblock.style.display = 'block';
            good.style.display = 'block';
          }, 1000);
        } else if (totalCorrectAnswers <= 6) {
          answerblock.innerHTML = 'Right answers: ' + totalCorrectAnswers;
          setTimeout(() => {
            answerblock.style.display = 'block';
            better.style.display = 'block';
          }, 1000);
        } else {
          answerblock.innerHTML = 'Right answers: ' + totalCorrectAnswers;
          setTimeout(() => {
            answerblock.style.display = 'block';
           best.style.display = 'block';
        fireworks.style.display = 'block';
          }, 1000);
    
        }
        setTimeout(() => {
            restartimg.style.display = 'block';
          }, 1000);
       
      }
      restart();
    }
    function restart(){
        const restart = document.querySelector('.restart img')
        restart.addEventListener('click', e => {
            currentQuestionIndex = 0;
            answers = [];
            currentProgress = 10;


            const container = document.querySelector('#firstq')
            const fireworks = document.querySelector('#canvas')
            const restart = document.querySelector('.restart img')
            const answerblock = document.querySelector('.answer');
            const good = document.querySelector('.good');
            const better = document.querySelector('.better')
            const best = document.querySelector('.best');
     
        answerblock.style.display = 'none';
        good.style.display = 'none';
        better.style.display = 'none';
        best.style.display = 'none';
        fireworks.style.display = 'none';
        restart.style.display = 'none';

        const play = document.querySelector('#play')
        play.style.display = "block";
        const quiz = document.querySelector('.quiz');
        quiz.style.display = "block";
        container.innerHTML = '';
        out.innerHTML = '';
        clueDisplayed = '';

          container.style.background = ''; 
          container.style.border = ''; 
          container.style.boxShadow = '';
          container.style.width='';
          container.style.height='';
          displayCurrentQuestion();
         
       
       } )}
    }
displayCurrentQuestion();



const rndColor = () => {
    const base  = Math.random() * 360 | 0;
    const color = (275 * (base / 200 | 0)) + base % 200;
    return fac => `hsl(${color}, ${(fac || 1) * 100}%, ${(fac || 1) * 60}%)`;
};

class Battery
{
    constructor(fireworks) {
        this.fireworks = fireworks;
        this.salve = [];
        this.x     = Math.random();
        this.t     = 0;
        this.tmod  = 20 + Math.random() * 20 | 0;
        this.tmax  = 500 + Math.random() * 1000;

        this._shot = salve => {
            if (salve.y < salve.ym) {
                salve.cb = this._prepareExplosion;
            }

            salve.x += salve.mx;
            salve.y -= 0.01;

            const r = Math.atan2(-0.01, salve.mx);

            this.fireworks.engine.strokeStyle = salve.c(.7);
            this.fireworks.engine.beginPath();

            this.fireworks.engine.moveTo(
                (this.x + salve.x) * this.fireworks.width + Math.cos(r) * 4,
                salve.y * this.fireworks.height + Math.sin(r) * 4
            );

            this.fireworks.engine.lineTo(
                (this.x + salve.x) * this.fireworks.width + Math.cos(r + Math.PI) * 4,
                salve.y * this.fireworks.height + Math.sin(r + Math.PI) * 4
            );

            this.fireworks.engine.lineWidth = 3;
            this.fireworks.engine.stroke();
        };

        this._prepareExplosion = salve => {
            salve.explosion = [];

            for (let i = 0, max = 32; i < max; i++) {
                salve.explosion.push({
                    r : 2 * i / Math.PI,
                    s : 0.5 + Math.random() * 0.5,
                    d : 0,
                    y : 0
                });
            }

            salve.cb = this._explode;
        };

        this._explode = salve => {

            this.fireworks.engine.fillStyle = salve.c();

            salve.explosion.forEach(explo => {

                explo.d += explo.s;
                explo.s *= 0.99;
                explo.y += 0.5;

                const alpha = explo.s * 2.5;
                this.fireworks.engine.globalAlpha = alpha;

                if (alpha < 0.05) {
                    salve.cb = null;
                }

                this.fireworks.engine.fillRect(
                    Math.cos(explo.r) * explo.d + (this.x + salve.x) * this.fireworks.width,
                    Math.sin(explo.r) * explo.d + explo.y + salve.y * this.fireworks.height,
                    3,
                    3
                );
            });

            this.fireworks.engine.globalAlpha = 1;
        }
    }

    pushSalve() {
        this.salve.push({
            x: 0,
            mx: -0.02 * Math.random() * 0.04,
            y: 1,
            ym: 0.05 + Math.random() * 0.5,
            c: rndColor(),
            cb: this._shot
        });
    };

    render() {

        this.t++;

        if (this.t < this.tmax && (this.t % this.tmod) === 0) {
            this.pushSalve();
        }

        let rendered = false;

        this.salve.forEach(salve => {

            if (salve.cb) {
                rendered = true;
                salve.cb(salve);
            }

        });

        if (this.t > this.tmax) {
            return rendered;
        }

        return true;
    }
}

class Fireworks
{
    constructor() {
        this.canvas = window.document.querySelector('canvas');
        this.engine = this.canvas.getContext('2d');
        this.stacks = new Map();

        this.resize();
    }

    resize() {
        this.width  = window.innerWidth;
        this.height = window.innerHeight *2 ;

        this.canvas.setAttribute('width', this.width);
        this.canvas.setAttribute('height', this.height);
    }

    clear() {
        this.engine.clearRect(0, 0, this.width, this.height);
        this.engine.fillStyle = '#222';
        this.engine.fillRect(0, 0, this.width, this.height);
    }

    addBattery() {
      const bat = new Battery(this);
      this.stacks.set(Date.now(), bat);  
    }
  
    render() {

        if (Math.random() < 0.05) {
          this.addBattery();
        }
      
        this.clear();

        this.stacks.forEach((scene, key) => {

            const rendered = scene.render();

            if (!rendered) {
                this.stacks.delete(key);
            }
        });

        requestAnimationFrame(this.render.bind(this));
    }

    run() {
        for(let i = 0; i < 5; i++) {
          this.addBattery();
        }
        window.addEventListener('resize', this.resize.bind(this));
        this.render();
    }
}

a = new Fireworks();
a.run();

