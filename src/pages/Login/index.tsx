import styles from './index.module.less'
import Header from './modules/Header'
import Section1 from './modules/Section1'
import Section2 from './modules/Section2'
import Section3 from './modules/Section3'

function Login() {
  return (
    <div className={`${styles.login_wrapper} min-h-full text-white`}>
      <Header />
      <Section1 />
      <main className="m-auto max-w-screen-xl flex-col gap-24 px-8 <md:px-4">
        <Section2 />
        <Section3 />

      </main>
    </div>
  )
}

export default Login
