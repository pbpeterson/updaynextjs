import { useSession, signIn } from 'next-auth/client'
import styles from './Introduction.module.scss'
import { useRouter } from 'next/dist/client/router'

export function Introduction(){
  const [ session ] = useSession()
  const router = useRouter()
  return(
    <div className={`${styles.mainSection} ${styles.container}`}>
      <div>
        <h1>As melhores notícias sobre NextJS de toda a internet.</h1>
        <p>Faça o login em nosso site para conferir as ler as notícias mais quentes sobre o melhor framework de ReactJS.</p>
        <button className='postButton' onClick={()=>{
          router.push('/posts') 
        }}>Ver notícias</button>
      </div>
      <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M18 7h-12v1h12v-1zm-9 2h-3v1h3v-1zm0 2h-3v1h3v-1zm9-2h-3v1h3v-1zm0 2h-3v1h3v-1zm0 2h-12v1h12v-1zm-6 2h-6v1h6v-1zm0 2h-6v1h6v-1zm0 2h-6v1h6v-1zm2-10h-4v3h4v-3zm-1.832-3.028l-.46-1.941h.505l.24 1.345.27-1.345h.492l.238 1.32.249-1.32h.482l-.501 1.941h-.5l-.238-1.284-.271 1.284h-.506zm-.579-.396h-.78v-.406h.698v-.393h-.698v-.35h.74v-.396h-1.215v1.941h1.255v-.396zm3.257.028c-.149 0-.324-.043-.466-.116l-.024-.013-.098.398.015.008c.102.058.318.119.547.119.581 0 .788-.328.788-.61 0-.272-.161-.458-.507-.586-.254-.096-.338-.145-.338-.247 0-.098.1-.161.254-.161.136 0 .266.03.388.088l.023.011.107-.39-.015-.007c-.145-.065-.311-.098-.495-.098-.442 0-.739.239-.739.593 0 .262.181.458.535.581.227.081.304.144.304.247 0 .117-.102.183-.279.183zm-6.016-.959l.691 1.327h.485v-1.941h-.438v1.189l-.64-1.189h-.536v1.941h.438v-1.327zm-4.83 17.355v-20h16v11.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-14.386h-20v24h10.189c3.163 0 9.811-7.223 9.811-9.614z"></path>
  </svg>
    </div>
  )
}