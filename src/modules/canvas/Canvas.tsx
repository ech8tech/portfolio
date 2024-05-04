import { Link } from 'react-router-dom';
import { Block } from '@src/components';

export default function Canvas() {
  return (
    <div>
      <Block spacing={40}>
        <h1>Canvas</h1>
      </Block>

      <Block spacing={16} isInline>
        <Link to="pixel-pioneer">
          <h2>Pixel Pioneer</h2>
        </Link>
      </Block>
    </div>
  );
}
