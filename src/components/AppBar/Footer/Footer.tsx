import css from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <p>
        2024 &#169;{' '}
        <a
          href="https://github.com/NikitaSimakov"
          target="_blank"
          rel="noreferrer noopener"
          className={css.link}
        >
          Nikita Simakov
        </a>
      </p>
    </footer>
  );
};
