import { style } from '@vanilla-extract/css';
import { themeVars } from './styles/vanilla';

const styles = style({
  color: themeVars.colors.blue6,
});

const App = (): JSX.Element => {
  return (
    <div className={styles}>
      <h1>Hello World</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};

export default App;
