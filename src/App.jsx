import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'


const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/MarceloTadini.png',
      name: 'Marcelo Tadini',
      role: 'Web Developer'
    },
    content:[
      { type: 'paragraph', content: 'Fala Galera',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio! É um projeto que fiz no Ignite, da Rocketseaat, porém com a trilha atualizada de 2022!',},
      { type: 'link', content: 'github.com/MarceloTadini/Ignite'},
    ],

    publishedAt: new Date('2022-08-12 19:00:00'),
  },

  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO Rocketseat'
    },
    content:[
      { type: 'paragraph', content: 'Fala Galera',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio! É um projeto que fiz no Ignite, da Rocketseaat, porém com a trilha atualizada de 2022!',},
      { type: 'link', content: 'github.com/MarceloTadini/Ignite'},
    ],

    publishedAt: new Date('2022-10-12 20:00:00'),
  },
]

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post =>{
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>

  )
}


