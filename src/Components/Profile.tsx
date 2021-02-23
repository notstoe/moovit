import styles from "../styles/components/Profile.module.css"

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/notstoe.png" alt="Gustavo Tonin"/>
      <div>
        <strong>Gustavo Tonin</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1</p>
      </div>
    </div>
  )
}