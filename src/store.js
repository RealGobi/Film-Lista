import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: '',
    movies: [
      {
        id:1,
        title: ' Avengers: Infinity War',
        year: 2018,
        director:  ['Anthony Russo', 'Joe Russo'],
        topActors:['Robert Downey Jr.', 'Chris Hemsworth', 'Mark Ruffalo', 'Chris Evans'],
        cat:['Fantasy'],
        plot:'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.'
      },
      {
        id:2,
        title: 'Mission: Impossible - Fallout ',
        year: 2018,
        director:  ['Christopher McQuarrie '],
        topActors:['Tom Cruise', 'Henry Cavill', 'Ving Rhames', 'Simon Pegg'],
        cat:['Action'],
        plot:'Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.'
      },
      {
        id:3,
        title: 'Ghost Stories',
        year: 2018,
        director:  ['Jeremy Dyson', 'Andy Nyman' ],
        topActors:['Andy Nyman', 'Martin Freeman', 'Paul Whitehouse', 'Alex Lawther'],
        cat:['Horror'],
        plot: 'Skeptical professor Phillip Goodman embarks on a trip to the terrifying after finding a file with details of three unexplained cases of apparitions.'
      },
      {
        id:4,
        title: 'Upgrade',
        year: 2018,
        director:  ['Leigh Whannell'],
        topActors: ['Logan Marshall-Green', 'Melanie Vallejo', 'Steve Danielsen', 'Abby Craden'],
        cat:[ 'Thriller'],
        plot:'Set in the near-future, technology controls nearly all aspects of life. But when Grey, a self-identified technophobe, has his world turned upside down, his only hope for revenge is an experimental computer chip implant called Stem.'
      },
      {
        id:5,
        title: ' American Animals',
        year: 2018,
        director:  ['Bart Layton'],
        topActors: ['Spencer Reinhard',' Warren Lipka', 'Eric Borsuk', 'Chas Allen'],
        cat:['Crime'],
        plot:'Four young men mistake their lives for a movie and attempt one of the most audacious heists in U.S. history.'
      },
      {
        id:6,
        title: 'Searching',
        year: 2018,
        director:  ['Aneesh Chaganty'],
        topActors: ['John Cho', 'Debra Messing', 'Joseph Lee', 'Michelle La'],
        cat:['Thriller'],
        plot:'After his 16-year-old daughter goes missing, a desperate father breaks into her laptop to look for clues to find her.'
      },
      {
        id:7,
        title: 'BlacKkKlansman',
        year: 2018,
        director:  ['Spike Lee'],
        topActors: [ 'John David Washington', 'Adam Driver', 'Laura Harrier', 'Topher Grace'],
        cat:[ 'Comedy'],
        plot:'Ron Stallworth, an African American police officer from Colorado Springs, CO, successfully manages to infiltrate the local Ku Klux Klan branch with the help of a Jewish surrogate who eventually becomes its leader. Based on actual events.'
      },
      {
        id:8,
        title: 'The Hate U Give',
        year: 2018,
        director:  ['George Tillman Jr.'],
        topActors: ['Amandla Stenberg', 'Regina Hall', 'Russell Hornsby', 'Anthony Mackie'],
        cat:['Crime'],
        plot:'Starr witnesses the fatal shooting of her childhood best friend Khalil at the hands of a police officer. Now, facing pressure from all sides of the community, Starr must find her voice and stand up for whats right.'
      },
      {
        id:9,
        title: 'Unsane',
        year: 2018,
        director:  ['Steven Soderbergh'],
        topActors:['Claire Foy', 'Joshua Leonard', 'Jay Pharoah', 'Juno Temple'],
        cat:['Thriller'],
        plot:'A young woman is involuntarily committed to a mental institution, where she is confronted by her greatest fear--but is it real or a product of her delusion?'
      },
      {
        id:10,
        title: 'Lady Bird',
        year: 2018,
        director:  ['Greta Gerwig'],
        topActors:['Saoirse Ronan', 'Laurie Metcalf', 'Tracy Letts', 'Lucas Hedges'],
        cat:['Comedy'],
        plot:'In 2002, an artistically inclined seventeen-year-old girl comes of age in Sacramento, California.'
      }
    ]
  },
  mutations: {
    
    
  },
  actions: {

  }
})
