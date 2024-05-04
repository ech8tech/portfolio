import { Link } from 'react-router-dom';
import { Block } from '@src/components';

export default function Main() {
  return (
    <div>
      <Block spacing={40}>
        <h1>Code Constellation</h1>
      </Block>

      <Block spacing={36}>
        <Block spacing={24}>
          <h2>
            <Link to="/">Math</Link>
          </h2>
        </Block>
        <p>### empty...</p>
      </Block>

      <Block spacing={36}>
        <Block spacing={24}>
          <h2>
            <Link to="/">Algorithms</Link>
          </h2>
        </Block>
        <p>### empty...</p>
      </Block>

      <Block spacing={36}>
        <Block spacing={24}>
          <h2>
            <Link to="/">JS</Link>
          </h2>
        </Block>
        <p>### empty...</p>
      </Block>

      <Block spacing={36}>
        <Block spacing={24}>
          <h2>
            <Link to="/">D3.JS</Link>
          </h2>
        </Block>
        <p>### empty...</p>
      </Block>

      <Block spacing={36}>
        <Block spacing={24}>
          <h2>
            <Link to="/">Animate</Link>
          </h2>
        </Block>
        <p>### empty...</p>
      </Block>

      <Block spacing={36}>
        <Block spacing={24}>
          <h2>
            <Link to="/canvas">Canvas</Link>
          </h2>
        </Block>
        <p>### empty...</p>
      </Block>

      <Block spacing={36}>
        <Block spacing={24}>
          <h2>
            <Link to="/">Python</Link>
          </h2>
        </Block>
        <p>### empty...</p>
      </Block>

      <Block spacing={36}>
        <Block spacing={24}>
          <h2>
            <Link to="/">Neural networks</Link>
          </h2>
        </Block>
        <p>### empty...</p>
      </Block>
    </div>
  );
}
