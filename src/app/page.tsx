import styles from "./page.module.css";
import Server from "./components/Server";
import Static from "./components/Static";
import Client from "./components/Client";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div>
          <Server searchParams={{ nombre: "Server" }} />
        </div>
        <div>
          <Static />
        </div>
        <div>
          <Client />
        </div>
      </div>
    </main>
  );
}
