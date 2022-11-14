import styles from "./layout.module.css";

type LayoutProps = {
  children: JSX.Element[];
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return <div className={styles.container}>{children}</div>;
}
