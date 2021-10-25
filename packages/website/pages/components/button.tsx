import type { NextPage } from 'next';

const Button: NextPage<{ test: string }> = (props) => {
  return (
    <div>
      <h1>Button</h1>

      <p>{props.test}</p>
    </div>
  );
};

export async function getStaticProps() {
  const mdxFile = require('../../../components/button/Button.mdx');
  console.log(mdxFile);
  return {
    props: {
      test: 'this is just a test',
    },
  };
}

export default Button;
