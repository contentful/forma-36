import type { NextPage } from 'next';

const Badge: NextPage<{ test: string }> = (props) => {
  return (
    <div>
      <h1>Badge</h1>

      <p>This is a TSX page</p>
    </div>
  );
};

export default Badge;
